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
  },
  {
    name: "iPhone 14",
  },
  {
    name: "iPhone 14 Pro Max",
  },
];

export async function main() {
  for (const d of deviceData) {
    await prisma.device.create({ data: d });
  }
}

main();
