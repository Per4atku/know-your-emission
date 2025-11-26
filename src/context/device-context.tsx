"use client";

import { createContext, useContext, useState } from "react";

export type Device = {
  id: number;
  name: string;
  available_storages: string[];
};

type DeviceContextType = {
  selectedDevice: Device | null;
  setSelectedDevice: (d: Device | null) => void;
  selectedCapacity: string | null;
  setSelectedCapacity: (c: string | null) => void;
};

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export function DeviceProvider({ children }: { children: React.ReactNode }) {
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [selectedCapacity, setSelectedCapacity] = useState<string | null>(null);

  return (
    <DeviceContext.Provider
      value={{
        selectedDevice,
        setSelectedDevice,
        selectedCapacity,
        setSelectedCapacity,
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
