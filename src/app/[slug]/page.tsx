"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck, Heart, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell, Label } from "recharts";

// Mock data types
interface CarbonBreakdown {
  category: string;
  value: number;
  percentage: number;
  fill: string;
}

interface LabourProtection {
  safeWorkplaces: boolean;
  dignityRespect: boolean;
  educationalOpportunities: boolean;
}

interface DeviceReport {
  deviceName: string;
  storage: string;
  environmentRating: "Low" | "Medium" | "High";
  totalCarbonFootprint: number;
  funFact: string;
  recycledContent: string | null;
  recycledContentNote: string;
  measuresForLongevity: boolean;
  longevityDescription: string;
  releaseDate: string;
  recycledRenewablePercent: string | null;
  recycledRenewableNote: string;
  cleanEnergyPercent: string | null;
  labourProtection: LabourProtection;
  officialRecyclingProgram: string;
  recyclingProgramDescription: string;
  officialSource: string;
  sourceUrl: string;
  carbonBreakdown: CarbonBreakdown[];
}

// Mock data for iPhone 14 Pro 128GB
const mockDeviceReport: DeviceReport = {
  deviceName: "iPhone 14 Pro",
  storage: "128GB",
  environmentRating: "Medium",
  totalCarbonFootprint: 65,
  funFact: "same as 1400 cows farting*",
  recycledContent: null,
  recycledContentNote: "made the earth 100 times more polluted*",
  measuresForLongevity: true,
  longevityDescription: "Ceramic shield, IP68 Water and Dust Resistance",
  releaseDate: "07.09.2022",
  recycledRenewablePercent: null,
  recycledRenewableNote: "Excluding Packaging or In-box Accessories",
  cleanEnergyPercent: null,
  labourProtection: {
    safeWorkplaces: true,
    dignityRespect: true,
    educationalOpportunities: true,
  },
  officialRecyclingProgram: "Apple Trade In",
  recyclingProgramDescription: "Ensures Your Device a Long Life or Recycle for Free",
  officialSource: "iPhone 14 Pro Product Environment Report",
  sourceUrl: "https://www.apple.com/environment/pdf/products/iphone/iPhone_14_Pro_PER_Sept2022.pdf",
  carbonBreakdown: [
    { category: "production", value: 52.65, percentage: 81, fill: "var(--color-production)" },
    { category: "use", value: 9.75, percentage: 15, fill: "var(--color-use)" },
    { category: "transportation", value: 1.95, percentage: 3, fill: "var(--color-transportation)" },
    { category: "endOfLife", value: 0.65, percentage: 1, fill: "var(--color-endOfLife)" },
  ],
};

const chartConfig = {
  production: {
    label: "Production",
    color: "var(--chart-2)",
  },
  use: {
    label: "Use",
    color: "var(--chart-3)",
  },
  transportation: {
    label: "Transportation",
    color: "var(--chart-4)",
  },
  endOfLife: {
    label: "End-of-life Processing",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

function getRatingColor(rating: string) {
  switch (rating) {
    case "Low":
      return "text-friendly";
    case "Medium":
      return "text-yellow-400";
    case "High":
      return "text-destructive";
    default:
      return "text-muted-foreground";
  }
}

function getRatingLabel(rating: string) {
  switch (rating) {
    case "Low":
      return "Low Environment Hazard";
    case "Medium":
      return "Medium Environment Hazard";
    case "High":
      return "High Environment Hazard";
    default:
      return "Unknown";
  }
}

export default function ReportPage() {
  const report = mockDeviceReport;

  return (
    <main className="container mx-auto max-w-4xl py-8 px-4">
      {/* Hero Card */}
      <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 mb-12">
        <CardContent className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            {report.deviceName} ({report.storage})
          </h1>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Environment impact rating:</p>
              <p className={`text-xl md:text-2xl font-bold ${getRatingColor(report.environmentRating)}`}>
                {getRatingLabel(report.environmentRating)}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Total carbon footprint:</p>
              <p className="text-2xl md:text-3xl font-bold text-friendly">
                {report.totalCarbonFootprint} kg CO2e
              </p>
              <p className="text-sm text-muted-foreground">({report.funFact})</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Percent of recycled content:</p>
              <p className="text-xl font-semibold">
                {report.recycledContent ?? "N/A"}
              </p>
              <p className="text-sm text-muted-foreground">{report.recycledContentNote}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Measures for longevity:</p>
              <p className={`text-xl font-semibold ${report.measuresForLongevity ? "text-friendly" : ""}`}>
                {report.measuresForLongevity ? "Yes" : "No"}
              </p>
              <p className="text-sm text-muted-foreground">{report.longevityDescription}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <Button variant="outline" asChild className="gap-2">
              <Link href="/input">
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Link>
            </Button>
            <Button className="bg-friendly hover:bg-friendly/90 text-black gap-2" asChild>
              <a href={report.sourceUrl} target="_blank" rel="noopener noreferrer">
                Read a Full Analysis
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Overview Section */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Overview</h2>
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">Total carbon footprint</p>
          <p className="text-sm text-muted-foreground">
            {report.deviceName} {report.storage}
          </p>
        </div>

        {/* Donut Chart */}
        <div className="bg-zinc-900/50 rounded-2xl p-6 md:p-8">
          <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[350px]">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={report.carbonBreakdown}
                dataKey="value"
                nameKey="category"
                innerRadius={80}
                outerRadius={140}
                strokeWidth={2}
                stroke="var(--background)"
              >
                {report.carbonBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {report.totalCarbonFootprint} kg
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground text-sm"
                          >
                            CO2e
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-4 mt-6 max-w-md mx-auto">
            {report.carbonBreakdown.map((item) => (
              <div key={item.category} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-sm shrink-0"
                  style={{ backgroundColor: chartConfig[item.category as keyof typeof chartConfig]?.color }}
                />
                <span className="text-sm text-muted-foreground">
                  {chartConfig[item.category as keyof typeof chartConfig]?.label}
                </span>
                <span className="text-sm font-medium ml-auto">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="space-y-6">
        {/* Release Date */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">Release Date</p>
          <Separator className="mb-3" />
          <p className="text-2xl md:text-3xl font-bold">{report.releaseDate}</p>
        </div>

        {/* Percent of Recycled or Renewable Contents */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">
            Percent of Recycled or Renewable Contents
          </p>
          <Separator className="mb-3" />
          <p className="text-2xl md:text-3xl font-bold">
            {report.recycledRenewablePercent ?? "N/A"}
          </p>
          <p className="text-sm text-muted-foreground">{report.recycledRenewableNote}</p>
        </div>

        {/* Percent of Clean Energy in Manufacturing */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">
            Percent of Clean Energy in Manufacturing
          </p>
          <Separator className="mb-3" />
          <p className="text-2xl md:text-3xl font-bold">
            {report.cleanEnergyPercent ?? "N/A"}
          </p>
        </div>

        {/* Labour Protection */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">Labour Protection</p>
          <Separator className="mb-3" />
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-muted-foreground" />
              <span className={report.labourProtection.safeWorkplaces ? "" : "text-muted-foreground line-through"}>
                Safe and Healthy Workplaces
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="h-5 w-5 text-muted-foreground" />
              <span className={report.labourProtection.dignityRespect ? "" : "text-muted-foreground line-through"}>
                People are Treated with Dignity and Respect
              </span>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-muted-foreground" />
              <span className={report.labourProtection.educationalOpportunities ? "" : "text-muted-foreground line-through"}>
                Educational Opportunities for Workers
              </span>
            </div>
          </div>
        </div>

        {/* Measures for Longevity */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">Measures for Longevity</p>
          <Separator className="mb-3" />
          <p className={`text-2xl md:text-3xl font-bold ${report.measuresForLongevity ? "text-friendly" : ""}`}>
            {report.measuresForLongevity ? "Yes" : "No"}
          </p>
          <p className="text-sm text-muted-foreground">{report.longevityDescription}</p>
        </div>

        {/* Official Recycling Programs */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">Official Recycling Programs</p>
          <Separator className="mb-3" />
          <p className="text-2xl md:text-3xl font-bold">{report.officialRecyclingProgram}</p>
          <p className="text-sm text-muted-foreground">{report.recyclingProgramDescription}</p>
        </div>

        {/* Official Source */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">Official Source</p>
          <Separator className="mb-3" />
          <a
            href={report.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl font-medium hover:text-friendly transition-colors underline underline-offset-4"
          >
            {report.officialSource}
          </a>
        </div>
      </section>
    </main>
  );
}
