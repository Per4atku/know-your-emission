"use client";

import { Pie, PieChart } from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";

const chartConfig = {
  manufacturing: {
    label: "Manufacturing",
    color: "var(--chart-1)",
  },
  transportation: {
    label: "Transportation",
    color: "var(--chart-2)",
  },
  use: {
    label: "Use Phase",
    color: "var(--chart-3)",
  },
  eol: {
    label: "End of Life",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const data = [
  { name: "manufacturing", value: 0.62, fill: "var(--chart-1)" },
  { name: "transportation", value: 0.12, fill: "var(--chart-2)" },
  { name: "use", value: 0.009, fill: "var(--chart-3)" },
  { name: "eol", value: 0.6, fill: "var(--chart-4)" },
];

function formatPercent(n: number): string {
  const percent = n * 100;
  const ceil = Math.ceil(percent);

  if (percent < 1) {
    return "<1%";
  }

  if (percent !== Math.floor(percent)) {
    return `<${ceil}%>`;
  }

  return `${percent}%`;
}

export default function CarbonFootprintPieChart() {
  return (
    <Card className="container bg-transparent">
      <CardHeader>
        <CardTitle className="text-xl">CO₂e Footprint Breakdown</CardTitle>
        <CardDescription>
          Fraction of lifecycle carbon emissions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Chart */}
          <ChartContainer
            config={chartConfig}
            className="aspect-square w-full max-w-[260px] sm:max-w-[300px]"
          >
            <PieChart>
              <ChartTooltip
                formatter={(value: number, name: string) => {
                  return [
                    chartConfig[name as keyof typeof chartConfig]?.label,
                    " - ",
                    formatPercent(value),
                  ];
                }}
                content={<ChartTooltipContent />}
              />
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius="100%" // responsive to container
                paddingAngle={1}
              />
            </PieChart>
            {/* Legend BELOW chart — fixes mobile layout */}
          </ChartContainer>
        </div>
        <div className="mt-12 grid grid-cols-2 text-sm">
          <div className="flex gap-2">
            <span className="bg-chart-1 h-4 w-4 self-center rounded-sm"></span>{" "}
            Manufacturing -{" "}
            {formatPercent(
              data.find((step) => step.name == "manufacturing")?.value || 0
            )}
          </div>

          <div className="flex gap-2">
            <span className="bg-chart-3 h-4 w-4 self-center rounded-sm"></span>{" "}
            Use Phase -{" "}
            {formatPercent(data.find((step) => step.name == "use")?.value || 0)}
          </div>
          <div className="flex gap-2">
            <span className="bg-chart-2 h-4 w-4 self-center rounded-sm"></span>{" "}
            Transportation -{" "}
            {formatPercent(
              data.find((step) => step.name == "transportation")?.value || 0
            )}
          </div>
          <div className="flex gap-2">
            <span className="bg-chart-4 h-4 w-4 self-center rounded-sm"></span>{" "}
            End of Life -{" "}
            {formatPercent(data.find((step) => step.name == "eol")?.value || 0)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
