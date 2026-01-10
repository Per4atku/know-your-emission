"use client";

import { useRouter } from "next/navigation";
import { Device, useDevice } from "@/context/device-context";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import generatedSlug from "@/helper/slug";

interface ProductInputFormProps {
  devices: Device[];
  brands: string[];
}

export default function ProductInputForm({
  devices,
  brands,
}: ProductInputFormProps) {
  const router = useRouter();
  const {
    selectedBrand,
    setSelectedBrand,
    selectedDevice,
    setSelectedDevice,
    selectedCapacity,
    setSelectedCapacity,
    isComplete,
  } = useDevice();

  // Filter devices by selected brand
  const filteredDevices = selectedBrand
    ? devices.filter((d) => d.brand === selectedBrand)
    : [];

  // Get available storage options for selected device
  const storageOptions = selectedDevice?.available_storages ?? [];

  const handleCalculate = () => {
    if (selectedDevice && selectedCapacity) {
      const slug = generatedSlug({
        modelName: selectedDevice.name,
        capacity: selectedCapacity,
      });
      router.push(`/${slug}`);
    }
  };

  return (
    <div className="space-y-5">
      {/* Brand Select */}
      <div className="space-y-2">
        <Label htmlFor="brand" className="text-muted-foreground text-sm">
          Brand
        </Label>
        <Select value={selectedBrand ?? ""} onValueChange={setSelectedBrand}>
          <SelectTrigger
            id="brand"
            className="h-12 w-full bg-white text-base text-white"
          >
            <SelectValue placeholder="Select brand..." />
          </SelectTrigger>
          <SelectContent>
            {brands.map((brand) => (
              <SelectItem key={brand} value={brand}>
                {brand}
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
          value={selectedDevice?.id.toString() ?? ""}
          onValueChange={(value) => {
            const device = devices.find((d) => d.id.toString() === value);
            setSelectedDevice(device ?? null);
          }}
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
            {filteredDevices.map((device) => (
              <SelectItem key={device.id} value={device.id.toString()}>
                {device.name}
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
          value={selectedCapacity ?? ""}
          onValueChange={setSelectedCapacity}
          disabled={!selectedDevice}
        >
          <SelectTrigger
            id="storage"
            className="h-12 w-full bg-white text-base text-white disabled:bg-gray-200 disabled:text-gray-500"
          >
            <SelectValue
              placeholder={
                selectedDevice ? "Select storage..." : "Select model first"
              }
            />
          </SelectTrigger>
          <SelectContent>
            {storageOptions.map((storage) => (
              <SelectItem key={storage} value={storage}>
                {storage}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Calculate Button */}
      <Button
        onClick={handleCalculate}
        disabled={!isComplete}
        className="bg-friendly hover:bg-friendly/90 mt-4 h-12 w-full text-base font-semibold text-white disabled:opacity-50"
      >
        Calculate
      </Button>
    </div>
  );
}
