"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useDevice } from "@/context/device-context";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getModelsByBrand, getVariantsByModel } from "@/app/actions/device";
import type {
  Brand,
  DeviceModel,
  DeviceVariant,
} from "@/generated/prisma/client";

interface ProductInputFormProps {
  brands: Brand[];
}

const formItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

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
    <motion.div
      className="space-y-5"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {/* Brand Select */}
      <motion.div className="space-y-2" variants={formItemVariants}>
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
      </motion.div>

      {/* Model Select */}
      <motion.div className="space-y-2" variants={formItemVariants}>
        <Label htmlFor="model" className="text-muted-foreground text-sm">
          Model
        </Label>
        <AnimatePresence mode="wait">
          {loadingModels ? (
            <motion.div
              key="model-skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Skeleton className="h-12 w-full" />
            </motion.div>
          ) : (
            <motion.div
              key="model-select"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Select
                value={selectedModel?.id ?? ""}
                onValueChange={handleModelChange}
                disabled={!selectedBrand}
              >
                <SelectTrigger
                  id="model"
                  className="h-12 w-full bg-white text-base text-white disabled:bg-gray-200 disabled:text-gray-500"
                >
                  <SelectValue
                    placeholder={
                      selectedBrand ? "Select model..." : "Select brand first"
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Storage Capacity Select */}
      <motion.div className="space-y-2" variants={formItemVariants}>
        <Label htmlFor="storage" className="text-muted-foreground text-sm">
          Storage Capacity
        </Label>
        <AnimatePresence mode="wait">
          {loadingVariants ? (
            <motion.div
              key="storage-skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Skeleton className="h-12 w-full" />
            </motion.div>
          ) : (
            <motion.div
              key="storage-select"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Select
                value={selectedVariant?.id ?? ""}
                onValueChange={handleVariantChange}
                disabled={!selectedModel}
              >
                <SelectTrigger
                  id="storage"
                  className="h-12 w-full bg-white text-base text-white disabled:bg-gray-200 disabled:text-gray-500"
                >
                  <SelectValue
                    placeholder={
                      selectedModel ? "Select storage..." : "Select model first"
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Calculate Button */}
      <motion.div variants={formItemVariants}>
        <Button
          onClick={handleCalculate}
          disabled={!isComplete || isPending}
          className="bg-friendly hover:bg-friendly/90 mt-4 h-12 w-full text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
        >
          <AnimatePresence mode="wait">
            {isPending ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="inline-block size-4 rounded-full border-2 border-white border-t-transparent"
                />
                Loading...
              </motion.span>
            ) : (
              <motion.span
                key="calculate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Calculate
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </motion.div>
  );
}
