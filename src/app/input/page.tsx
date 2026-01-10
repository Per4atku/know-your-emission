import Image from "next/image";
import { Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DeviceProvider } from "@/context/device-context";
import ProductInputForm from "@/components/ProductInputForm";
import { getBrands } from "@/app/actions/device";
import InputPageContent from "./InputPageContent";

async function BrandsFormLoader() {
  const brands = await getBrands();

  return (
    <DeviceProvider>
      <ProductInputForm brands={brands} />
    </DeviceProvider>
  );
}

export default function InputPage() {
  return (
    <InputPageContent>
      <Suspense
        fallback={
          <div className="space-y-5">
            <div className="space-y-2">
              <div className="h-4 w-12 animate-pulse rounded bg-zinc-700" />
              <div className="h-12 w-full animate-pulse rounded bg-zinc-700" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-12 animate-pulse rounded bg-zinc-700" />
              <div className="h-12 w-full animate-pulse rounded bg-zinc-700" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-28 animate-pulse rounded bg-zinc-700" />
              <div className="h-12 w-full animate-pulse rounded bg-zinc-700" />
            </div>
            <div className="mt-4 h-12 w-full animate-pulse rounded bg-zinc-700" />
          </div>
        }
      >
        <BrandsFormLoader />
      </Suspense>
    </InputPageContent>
  );
}
