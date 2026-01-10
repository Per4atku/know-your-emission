"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell, Label } from "recharts";

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

interface CarbonBreakdownItem {
  category: string;
  value: number;
  percentage: number;
  fill: string;
}

interface CarbonChartProps {
  carbonBreakdown: CarbonBreakdownItem[];
  totalCO2: number;
}

export default function CarbonChart({
  carbonBreakdown,
  totalCO2,
}: CarbonChartProps) {
  return (
    <div className="bg-zinc-900/50 rounded-2xl p-6 md:p-8">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[350px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={carbonBreakdown}
            dataKey="value"
            nameKey="category"
            innerRadius={80}
            outerRadius={140}
            strokeWidth={2}
            stroke="var(--background)"
          >
            {carbonBreakdown.map((entry, index) => (
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
                        {totalCO2} kg
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
        {carbonBreakdown.map((item) => (
          <div key={item.category} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-sm shrink-0"
              style={{
                backgroundColor:
                  chartConfig[item.category as keyof typeof chartConfig]?.color,
              }}
            />
            <span className="text-sm text-muted-foreground">
              {chartConfig[item.category as keyof typeof chartConfig]?.label}
            </span>
            <span className="text-sm font-medium ml-auto">
              {item.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
