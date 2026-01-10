import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { DeviceProvider } from "@/context/device-context";
import ProductInputForm from "@/components/ProductInputForm";

// Mock devices until database is set up
const mockDevices = [
  { id: 1, name: "iPhone 15 Pro", brand: "Apple", available_storages: ["128GB", "256GB", "512GB", "1TB"] },
  { id: 2, name: "iPhone 15", brand: "Apple", available_storages: ["128GB", "256GB", "512GB"] },
  { id: 3, name: "iPhone 14 Pro", brand: "Apple", available_storages: ["128GB", "256GB", "512GB", "1TB"] },
  { id: 4, name: "iPhone 14", brand: "Apple", available_storages: ["128GB", "256GB", "512GB"] },
  { id: 5, name: "MacBook Pro 14", brand: "Apple", available_storages: ["512GB", "1TB", "2TB"] },
  { id: 6, name: "MacBook Air M3", brand: "Apple", available_storages: ["256GB", "512GB", "1TB"] },
  { id: 7, name: "Galaxy S24 Ultra", brand: "Samsung", available_storages: ["256GB", "512GB", "1TB"] },
  { id: 8, name: "Galaxy S24", brand: "Samsung", available_storages: ["128GB", "256GB"] },
  { id: 9, name: "Galaxy Z Fold5", brand: "Samsung", available_storages: ["256GB", "512GB", "1TB"] },
  { id: 10, name: "XPS 15", brand: "Dell", available_storages: ["512GB", "1TB", "2TB"] },
  { id: 11, name: "XPS 13", brand: "Dell", available_storages: ["256GB", "512GB", "1TB"] },
  { id: 12, name: "Pixel 8 Pro", brand: "Google", available_storages: ["128GB", "256GB", "512GB", "1TB"] },
  { id: 13, name: "Pixel 8", brand: "Google", available_storages: ["128GB", "256GB"] },
];

// Extract unique brands from devices
const brands = [...new Set(mockDevices.map((d) => d.brand))];

export default function InputPage() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 pt-24 pb-8">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/image.svg"
            alt="Know Your eMission logo"
            width={40}
            height={40}
          />
          <span className="text-sm font-semibold tracking-tight">
            <span className="text-friendly">Know Your</span>
            <br />
            <span className="text-friendly">e</span>
            <span className="text-foreground">Mission</span>
          </span>
        </div>

        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Calculate Your Emissions
          </h1>
          <p className="mt-2 text-muted-foreground">
            Start by choosing your device below
          </p>
        </div>

        {/* Form Card */}
        <Card className="border-border/50">
          <CardContent className="pt-6">
            <DeviceProvider>
              <ProductInputForm devices={mockDevices} brands={brands} />
            </DeviceProvider>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
