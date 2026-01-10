"use server";

import { unstable_cache } from "next/cache";
import prisma from "@/lib/prisma";

// Cache tags for revalidation
const CACHE_TAGS = {
  brands: "brands",
  models: "models",
  variants: "variants",
  reports: "reports",
};

// Fetch all brands (cached aggressively since data rarely changes)
export const getBrands = unstable_cache(
  async () => {
    const brands = await prisma.brand.findMany({
      orderBy: { name: "asc" },
    });
    return brands;
  },
  ["brands"],
  { tags: [CACHE_TAGS.brands], revalidate: 3600 } // Revalidate every hour
);

// Fetch device models by brand ID (cached)
export const getModelsByBrand = unstable_cache(
  async (brandId: string) => {
    const models = await prisma.deviceModel.findMany({
      where: { brandId },
      orderBy: { name: "asc" },
    });
    return models;
  },
  ["models-by-brand"],
  { tags: [CACHE_TAGS.models], revalidate: 3600 }
);

// Fetch device variants by model ID (cached)
export const getVariantsByModel = unstable_cache(
  async (deviceModelId: string) => {
    const variants = await prisma.deviceVariant.findMany({
      where: { deviceModelId },
      orderBy: { storageCapacity: "asc" },
    });
    return variants;
  },
  ["variants-by-model"],
  { tags: [CACHE_TAGS.variants], revalidate: 3600 }
);

// Fetch device report by slug (cached)
export const getReportBySlug = unstable_cache(
  async (slug: string) => {
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
  },
  ["report-by-slug"],
  { tags: [CACHE_TAGS.reports], revalidate: 3600 }
);
