"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useDevice } from "@/context/device-context";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getModelsByBrand, getVariantsByModel } from "@/app/actions/device";
import type { Brand, DeviceModel, DeviceVariant } from "@/generated/prisma/client";

interface ProductInputFormProps {
  brands: Brand[];
}

export default function ProductInputForm({ brands }: ProductInputFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const {
    selectedBrand,
    setSelectedBrand,
    selectedModel,
    setSelectedModel,
    selectedVariant,
    setSelectedVariant,
    isComplete,
  } = useDevice();

  const [models, setModels] = useState<DeviceModel[]>([]);
  const [variants, setVariants] = useState<DeviceVariant[]>([]);
  const [loadingModels, setLoadingModels] = useState(false);
  const [loadingVariants, setLoadingVariants] = useState(false);

  // Fetch models when brand changes
  useEffect(() => {
    if (selectedBrand) {
      setLoadingModels(true);
      getModelsByBrand(selectedBrand.id)
        .then(setModels)
        .finally(() => setLoadingModels(false));
    } else {
      setModels([]);
    }
  }, [selectedBrand]);

  // Fetch variants when model changes
  useEffect(() => {
    if (selectedModel) {
      setLoadingVariants(true);
      getVariantsByModel(selectedModel.id)
        .then(setVariants)
        .finally(() => setLoadingVariants(false));
    } else {
      setVariants([]);
    }
  }, [selectedModel]);

  const handleBrandChange = (brandId: string) => {
    const brand = brands.find((b) => b.id === brandId);
    setSelectedBrand(brand ?? null);
  };

  const handleModelChange = (modelId: string) => {
    const model = models.find((m) => m.id === modelId);
    setSelectedModel(model ?? null);
  };

  const handleVariantChange = (variantId: string) => {
    const variant = variants.find((v) => v.id === variantId);
    setSelectedVariant(variant ?? null);
  };

  const handleCalculate = () => {
    if (selectedVariant) {
      startTransition(() => {
        router.push(`/${selectedVariant.slug}`);
      });
    }
  };

  return (
    <div className="space-y-5">
      {/* Brand Select */}
      <div className="space-y-2">
        <Label htmlFor="brand" className="text-muted-foreground text-sm">
          Brand
        </Label>
        <Select
          value={selectedBrand?.id ?? ""}
          onValueChange={handleBrandChange}
        >
          <SelectTrigger
            id="brand"
            className="h-12 w-full bg-white text-base text-white"
          >
            <SelectValue placeholder="Select brand..." />
          </SelectTrigger>
          <SelectContent>
            {brands.map((brand) => (
              <SelectItem key={brand.id} value={brand.id}>
                {brand.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Model Select */}
      <div className="space-y-2">
        <Label htmlFor="model" className="text-muted-foreground text-sm">
          Model
        </Label>
        <Select
          value={selectedModel?.id ?? ""}
          onValueChange={handleModelChange}
          disabled={!selectedBrand || loadingModels}
        >
          <SelectTrigger
            id="model"
            className="h-12 w-full bg-white text-base text-white disabled:bg-gray-200 disabled:text-gray-500"
          >
            <SelectValue
              placeholder={
                loadingModels
                  ? "Loading models..."
                  : selectedBrand
                    ? "Select model..."
                    : "Select brand first"
              }
            />
          </SelectTrigger>
          <SelectContent>
            {models.map((model) => (
              <SelectItem key={model.id} value={model.id}>
                {model.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Storage Capacity Select */}
      <div className="space-y-2">
        <Label htmlFor="storage" className="text-muted-foreground text-sm">
          Storage Capacity
        </Label>
        <Select
          value={selectedVariant?.id ?? ""}
          onValueChange={handleVariantChange}
          disabled={!selectedModel || loadingVariants}
        >
          <SelectTrigger
            id="storage"
            className="h-12 w-full bg-white text-base text-white disabled:bg-gray-200 disabled:text-gray-500"
          >
            <SelectValue
              placeholder={
                loadingVariants
                  ? "Loading storage options..."
                  : selectedModel
                    ? "Select storage..."
                    : "Select model first"
              }
            />
          </SelectTrigger>
          <SelectContent>
            {variants.map((variant) => (
              <SelectItem key={variant.id} value={variant.id}>
                {variant.storageCapacity}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Calculate Button */}
      <Button
        onClick={handleCalculate}
        disabled={!isComplete || isPending}
        className="bg-friendly hover:bg-friendly/90 mt-4 h-12 w-full text-base font-semibold text-white disabled:opacity-50"
      >
        {isPending ? "Loading..." : "Calculate"}
      </Button>
    </div>
  );
}
