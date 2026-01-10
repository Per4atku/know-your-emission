import "dotenv/config";
import { PrismaClient, EnvironmentRating } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import * as fs from "fs";
import * as path from "path";

// Initialize Prisma client with adapter
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

// Slug generation function (matching src/helper/slug.ts)
function generateSlug(modelName: string, capacity: string): string {
  const str = `${modelName} ${capacity}`;
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// Calculate environment rating based on total CO2
function getEnvironmentRating(totalCO2: number): EnvironmentRating {
  if (totalCO2 < 50) return EnvironmentRating.LOW;
  if (totalCO2 <= 80) return EnvironmentRating.MEDIUM;
  return EnvironmentRating.HIGH;
}

// Parse percentage value from string (e.g., "81%", "<1%", "N/A")
function parsePercentage(value: string): number | null {
  if (!value || value.trim() === "" || value === "N/A") return null;
  const cleaned = value.replace("<", "").replace("%", "").trim();
  const num = parseFloat(cleaned);
  return isNaN(num) ? null : num;
}

// Parse CO2 value from string (e.g., "61 kg")
function parseCO2(value: string): number | null {
  if (!value || value.trim() === "") return null;
  const match = value.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

// Parse date from string (e.g., "07.09.2022")
function parseDate(value: string): Date | null {
  if (!value || value.trim() === "") return null;
  const parts = value.split(".");
  if (parts.length !== 3) return null;
  const [day, month, year] = parts;
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  return isNaN(date.getTime()) ? null : date;
}

// Parse CSV line (handles quoted fields with commas)
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

interface CSVRow {
  deviceType: string;
  model: string;
  dateIntroduced: string;
  storageCapacity: string;
  totalCO2: string;
  productionPct: string;
  transportationPct: string;
  usePct: string;
  endOfLifePct: string;
  recycledMaterialsPct: string;
  cleanEnergyPct: string;
  recycledRareEarthPct: string;
  recycledPackagingPct: string;
  labourProtection: string;
  longevityMeasures: string;
  harmfulMaterials: string;
  recyclingProgram: string;
  source: string;
}

async function main() {
  console.log("🌱 Starting database seed...\n");

  // Clear existing data
  console.log("🗑️  Clearing existing data...");
  await prisma.emissionMetrics.deleteMany();
  await prisma.deviceVariant.deleteMany();
  await prisma.deviceModel.deleteMany();
  await prisma.brand.deleteMany();
  console.log("✓ Cleared existing data\n");

  // Read and parse CSV
  const csvPath = path.join(__dirname, "..", "data.csv");
  const csvContent = fs.readFileSync(csvPath, "utf-8");
  const lines = csvContent.split("\n").filter((line) => line.trim());

  // Skip header row
  const dataLines = lines.slice(2); // Skip header and empty row

  // Parse CSV rows
  const rows: CSVRow[] = [];
  for (const line of dataLines) {
    const columns = parseCSVLine(line);
    if (
      columns[1]?.trim() &&
      columns[3]?.trim() &&
      columns[4]?.trim() &&
      columns[4] !== "Total product footprint (CO2e)"
    ) {
      rows.push({
        deviceType: columns[0] || "",
        model: columns[1] || "",
        dateIntroduced: columns[2] || "",
        storageCapacity: columns[3] || "",
        totalCO2: columns[4] || "",
        productionPct: columns[5] || "",
        transportationPct: columns[6] || "",
        usePct: columns[7] || "",
        endOfLifePct: columns[8] || "",
        recycledMaterialsPct: columns[9] || "",
        cleanEnergyPct: columns[10] || "",
        recycledRareEarthPct: columns[11] || "",
        recycledPackagingPct: columns[12] || "",
        labourProtection: columns[13] || "",
        longevityMeasures: columns[14] || "",
        harmfulMaterials: columns[15] || "",
        recyclingProgram: columns[16] || "",
        source: columns[17] || "",
      });
    }
  }

  console.log(`📄 Parsed ${rows.length} valid rows from CSV\n`);

  // Create Apple brand (all devices in CSV are iPhones)
  console.log("🏢 Creating brand...");
  const apple = await prisma.brand.create({
    data: { name: "Apple" },
  });
  console.log(`✓ Created brand: ${apple.name}\n`);

  // Group rows by model to create device models
  const modelMap = new Map<string, CSVRow[]>();
  for (const row of rows) {
    const existing = modelMap.get(row.model) || [];
    existing.push(row);
    modelMap.set(row.model, existing);
  }

  console.log(`📱 Creating ${modelMap.size} device models...\n`);

  let variantCount = 0;
  let metricsCount = 0;

  for (const [modelName, variants] of modelMap) {
    // Get release date from first variant with a date
    const dateRow = variants.find((v) => v.dateIntroduced);
    const releaseDate = dateRow ? parseDate(dateRow.dateIntroduced) : null;

    // Create device model
    const deviceModel = await prisma.deviceModel.create({
      data: {
        brandId: apple.id,
        name: modelName,
        deviceType: variants[0].deviceType || "iPhone",
        releaseDate,
      },
    });

    console.log(`  📱 ${modelName} (${variants.length} variants)`);

    // Create variants and metrics for this model
    for (const variant of variants) {
      const slug = generateSlug(modelName, variant.storageCapacity);
      const totalCO2 = parseCO2(variant.totalCO2);

      if (!totalCO2) {
        console.log(
          `    ⚠️  Skipping ${variant.storageCapacity} - no CO2 data`
        );
        continue;
      }

      // Create device variant
      const deviceVariant = await prisma.deviceVariant.create({
        data: {
          deviceModelId: deviceModel.id,
          storageCapacity: variant.storageCapacity,
          slug,
        },
      });
      variantCount++;

      // Create emission metrics
      await prisma.emissionMetrics.create({
        data: {
          deviceVariantId: deviceVariant.id,
          environmentRating: getEnvironmentRating(totalCO2),
          totalCO2,
          productionPct: parsePercentage(variant.productionPct),
          transportationPct: parsePercentage(variant.transportationPct),
          usePct: parsePercentage(variant.usePct),
          endOfLifePct: parsePercentage(variant.endOfLifePct),
          recycledMaterialsPct: parsePercentage(variant.recycledMaterialsPct),
          cleanEnergyPct: parsePercentage(variant.cleanEnergyPct),
          recycledRareEarthPct: parsePercentage(variant.recycledRareEarthPct),
          recycledPackagingPct: parsePercentage(variant.recycledPackagingPct),
          labourProtection: variant.labourProtection || null,
          longevityMeasures: variant.longevityMeasures || null,
          harmfulMaterials: variant.harmfulMaterials || null,
          recyclingProgram: variant.recyclingProgram || null,
          source: variant.source || null,
          sourceUrl: variant.source?.startsWith("http")
            ? variant.source
            : null,
        },
      });
      metricsCount++;

      console.log(`    ✓ ${variant.storageCapacity} → ${slug}`);
    }
  }

  console.log("\n✅ Seed completed!");
  console.log(`   📊 Summary:`);
  console.log(`      - 1 brand (Apple)`);
  console.log(`      - ${modelMap.size} device models`);
  console.log(`      - ${variantCount} device variants`);
  console.log(`      - ${metricsCount} emission metrics records`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
