"use client";

import { createContext, useContext, useState } from "react";

export type Device = {
  id: number;
  name: string;
  brand: string;
  available_storages: string[];
};

type DeviceContextType = {
  // Brand selection
  selectedBrand: string | null;
  setSelectedBrand: (b: string | null) => void;
  // Device (model) selection
  selectedDevice: Device | null;
  setSelectedDevice: (d: Device | null) => void;
  // Storage capacity selection
  selectedCapacity: string | null;
  setSelectedCapacity: (c: string | null) => void;
  // Helper to check if all selections are made
  isComplete: boolean;
};

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export function DeviceProvider({ children }: { children: React.ReactNode }) {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [selectedCapacity, setSelectedCapacity] = useState<string | null>(null);

  const handleSetBrand = (brand: string | null) => {
    setSelectedBrand(brand);
    setSelectedDevice(null);
    setSelectedCapacity(null);
  };

  const handleSetDevice = (device: Device | null) => {
    setSelectedDevice(device);
    setSelectedCapacity(null);
  };

  const isComplete = !!(selectedBrand && selectedDevice && selectedCapacity);

  return (
    <DeviceContext.Provider
      value={{
        selectedBrand,
        setSelectedBrand: handleSetBrand,
        selectedDevice,
        setSelectedDevice: handleSetDevice,
        selectedCapacity,
        setSelectedCapacity,
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
