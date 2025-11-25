import { PrismaClient, Prisma } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const deviceData: Prisma.DeviceCreateInput[] = [
  {
    name: "iPhone 14 Pro",
    available_storages: ["128GB"],
    reports: {
      create: {
        slug: "iphone-14-pro-128gb",
        storage: "128GB",
        carbon_fraction_production: 0.81,
        carbon_fraction_transportation: 0.03,
        carbon_fraction_use: 0.15,
        carbon_fraction_end: 0.0099,
        recycled_rare_elements: 1,
        labout_protection:
          "provide safe and healthy workplaces where people are treated with diginity and respect. providing educational opportunities for workers.",
        measures_for_longevity:
          "Ceramic shield, IP68 water and dust resistance",
        harmful_resources_usage:
          "free of beryllium, brominated flame retardants, PVC, phthalates, arsenic in the display glass and mercury. AC power cords in India use PVC and phthalates, in Thailand for 2-prong AC power cords). In South Korea no PVC and phthalates replacement. Lead such as high-temperature solder (EU Directive 2011/65/EU)",
        ability_to_recycle:
          "Apple Trade In, product take-back and recycling collection programs for 99% of the countries where Apple says products.",
        source_links: [
          "https://www.apple.com/environment/pdf/products/iphone/iPhone_14_and_iPhone_14_Plus_PER_Sept2022.pdf",
        ],
      },
    },
  },
];

const reportData: Prisma.ReportCreateInput[] = [
  {
    slug: "iphone-14-pro-128gb",
    storage: "128GB",
    device: {
      connect: { name: "iPhone 14 Pro" },
    },
    carbon_fraction_production: 0.81,
    carbon_fraction_transportation: 0.03,
    carbon_fraction_use: 0.15,
    carbon_fraction_end: 0.0099,
    recycled_rare_elements: 1,
    labout_protection:
      "provide safe and healthy workplaces where people are treated with diginity and respect. providing educational opportunities for workers.",
    measures_for_longevity: "Ceramic shield, IP68 water and dust resistance",
    harmful_resources_usage:
      "free of beryllium, brominated flame retardants, PVC, phthalates, arsenic in the display glass and mercury. AC power cords in India use PVC and phthalates, in Thailand for 2-prong AC power cords). In South Korea no PVC and phthalates replacement. Lead such as high-temperature solder (EU Directive 2011/65/EU)",
    ability_to_recycle:
      "Apple Trade In, product take-back and recycling collection programs for 99% of the countries where Apple says products.",
    source_links: [
      "https://www.apple.com/environment/pdf/products/iphone/iPhone_14_and_iPhone_14_Plus_PER_Sept2022.pdf",
    ],
  },
];

export async function main() {
  for (const d of deviceData) {
    await prisma.device.create({ data: d });
  }
}

main();
