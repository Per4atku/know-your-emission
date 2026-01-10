import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function InputLoading() {
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
          <h1 className="text-foreground text-3xl font-bold tracking-tight md:text-4xl">
            Calculate Your Emissions
          </h1>
          <p className="text-muted-foreground mt-2">
            Start by choosing your device below
          </p>
        </div>

        {/* Form Card Skeleton */}
        <Card className="border-border/50">
          <CardContent className="space-y-5 pt-6">
            {/* Brand Select Skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-12 w-full" />
            </div>

            {/* Model Select Skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-12 w-full" />
            </div>

            {/* Storage Select Skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-12 w-full" />
            </div>

            {/* Button Skeleton */}
            <Skeleton className="mt-4 h-12 w-full" />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
