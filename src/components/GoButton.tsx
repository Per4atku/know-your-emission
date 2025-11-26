"use client";

import { Button } from "@/components/ui/button";
import generatedSlug from "@/helper/slug";
import { useDevice } from "@/context/device-context";
import { useRouter } from "next/navigation";

export default function GoButton() {
  const { selectedDevice, selectedCapacity } = useDevice();
  const router = useRouter();

  if (!selectedDevice || !selectedCapacity)
    return (
      <Button className="w-60" disabled>
        Go
      </Button>
    );

  const href =
    selectedCapacity &&
    "/" +
      generatedSlug({
        modelName: selectedDevice.name,
        capacity: selectedCapacity,
      });

  return (
    <Button onClick={() => router.push(href)} className="w-60">
      Go
    </Button>
  );
}
