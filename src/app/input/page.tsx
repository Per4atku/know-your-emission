import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { DeviceProvider } from "@/context/device-context";
import ProductInputForm from "@/components/ProductInputForm";
import { getBrands } from "@/app/actions/device";

export default async function InputPage() {
  const brands = await getBrands();

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
              <ProductInputForm brands={brands} />
            </DeviceProvider>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
