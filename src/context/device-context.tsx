"use client";

import { createContext, useContext, useState } from "react";
import type {
  Brand,
  DeviceModel,
  DeviceVariant,
} from "@/generated/prisma/client";

type DeviceContextType = {
  // Brand selection
  selectedBrand: Brand | null;
  setSelectedBrand: (b: Brand | null) => void;
  // Model selection
  selectedModel: DeviceModel | null;
  setSelectedModel: (m: DeviceModel | null) => void;
  // Variant (storage) selection
  selectedVariant: DeviceVariant | null;
  setSelectedVariant: (v: DeviceVariant | null) => void;
  // Helper to check if all selections are made
  isComplete: boolean;
};

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export function DeviceProvider({ children }: { children: React.ReactNode }) {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [selectedModel, setSelectedModel] = useState<DeviceModel | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<DeviceVariant | null>(
    null
  );

  const handleSetBrand = (brand: Brand | null) => {
    setSelectedBrand(brand);
    setSelectedModel(null);
    setSelectedVariant(null);
  };

  const handleSetModel = (model: DeviceModel | null) => {
    setSelectedModel(model);
    setSelectedVariant(null);
  };

  const isComplete = !!(selectedBrand && selectedModel && selectedVariant);

  return (
    <DeviceContext.Provider
      value={{
        selectedBrand,
        setSelectedBrand: handleSetBrand,
        selectedModel,
        setSelectedModel: handleSetModel,
        selectedVariant,
        setSelectedVariant,
        isComplete,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
}

export function useDevice() {
  const ctx = useContext(DeviceContext);
  if (!ctx) throw new Error("useDevice must be used inside DeviceProvider");
  return ctx;
}
