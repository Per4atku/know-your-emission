"use server";

import prisma from "@/lib/prisma";

// Fetch all brands
export async function getBrands() {
  const brands = await prisma.brand.findMany({
    orderBy: { name: "asc" },
  });
  return brands;
}

// Fetch device models by brand ID
export async function getModelsByBrand(brandId: string) {
  const models = await prisma.deviceModel.findMany({
    where: { brandId },
    orderBy: { name: "asc" },
  });
  return models;
}

// Fetch device variants by model ID
export async function getVariantsByModel(deviceModelId: string) {
  const variants = await prisma.deviceVariant.findMany({
    where: { deviceModelId },
    orderBy: { storageCapacity: "asc" },
  });
  return variants;
}

// Fetch device report by slug
export async function getReportBySlug(slug: string) {
  const variant = await prisma.deviceVariant.findUnique({
    where: { slug },
    include: {
      deviceModel: {
        include: {
          brand: true,
        },
      },
      emissionMetrics: true,
    },
  });

  if (!variant || !variant.emissionMetrics) {
    return null;
  }

  return {
    variant,
    deviceModel: variant.deviceModel,
    brand: variant.deviceModel.brand,
    metrics: variant.emissionMetrics,
  };
}
