import GoButton from "@/components/GoButton";
import SelectCapacity from "@/components/SelectCapacity";
import SelectDevice from "@/components/SelectDevice";
import { DeviceProvider } from "@/context/device-context";

import prisma from "@/lib/prisma";

export default async function Home() {
  const devices = await prisma.device.findMany();
  const reports = await prisma.report.findFirst();
  console.log(reports);

  return (
    <main className="prose prose-invert prose-neutral max-w-none">
      <div className="container">
        <h1>Know Your Emission</h1>

        <div className="space-y-4">
          <DeviceProvider>
            <SelectDevice devices={devices} />
            <SelectCapacity />
            <GoButton />
          </DeviceProvider>
        </div>
      </div>
    </main>
  );
}
