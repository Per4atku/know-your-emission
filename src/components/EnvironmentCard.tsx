import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EnvironmentCard() {
  return (
    <Card className="container w-full space-y-6 rounded-2xl bg-transparent p-6 text-white">
      <CardContent className="space-y-6 p-0">
        {/* Header */}
        <div className="flex gap-8">
          <div className="space-y-1">
            <p className="text-gray-400">Your device:</p>
            <p className="text-lg font-semibold">IPhone 14 Pro</p>
          </div>

          <div className="space-y-1">
            <p className="text-gray-400">Storage capacity:</p>
            <p className="text-lg font-semibold">128GB</p>
          </div>
        </div>

        {/* Environment Impact Rating */}
        <div className="space-y-2 pt-4">
          <p className="text-gray-300">Environment impact rating:</p>
          <p className="text-xl font-bold text-yellow-400">
            Medium environment hazard
          </p>
        </div>

        {/* Carbon footprint */}
        <div className="space-y-1 pt-2">
          <p className="text-gray-300">Total carbon footprint:</p>
          <p className="text-3xl font-bold">65 kg CO2e</p>
          <p className="text-muted-foreground">(same as 1400 cows farting*)</p>
        </div>

        {/* Recycled / Renewable */}
        <div className="space-y-1 pt-2">
          <p className="text-gray-300">
            Percent of renewable or recycled content:
          </p>
          <p className="text-xl font-semibold">N/A</p>
          <p className="text-muted-foreground">
            (made the earth 100 times more polluted*)
          </p>
        </div>

        {/* Longevity */}
        <div className="space-y-1 pt-2">
          <p className="text-gray-300">Measures for longevity:</p>
          <p className="text-friendly text-xl font-semibold">Yes</p>
          <p className="text-muted-foreground">
            (Ceramic shield, IP68 Water and Dust Resistance)
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          <Button
            variant="secondary"
            className="bg-gray-200 text-black hover:bg-gray-300"
          >
            Go Back
          </Button>
          <Button className="bg-friendly hover:bg-friendly px-4 font-semibold text-black">
            Read a Full Analysis
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
