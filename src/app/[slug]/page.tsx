import { notFound } from "next/navigation";
import { getReportBySlug } from "@/app/actions/device";
import ReportContent from "@/components/ReportContent";

// Build carbon breakdown from metrics
function buildCarbonBreakdown(metrics: {
  totalCO2: number;
  productionPct: number | null;
  transportationPct: number | null;
  usePct: number | null;
  endOfLifePct: number | null;
}) {
  const breakdown = [];
  const total = metrics.totalCO2;

  if (metrics.productionPct !== null) {
    breakdown.push({
      category: "production",
      value: Math.round(((total * metrics.productionPct) / 100) * 100) / 100,
      percentage: metrics.productionPct,
      fill: "var(--color-production)",
    });
  }

  if (metrics.usePct !== null) {
    breakdown.push({
      category: "use",
      value: Math.round(((total * metrics.usePct) / 100) * 100) / 100,
      percentage: metrics.usePct,
      fill: "var(--color-use)",
    });
  }

  if (metrics.transportationPct !== null) {
    breakdown.push({
      category: "transportation",
      value:
        Math.round(((total * metrics.transportationPct) / 100) * 100) / 100,
      percentage: metrics.transportationPct,
      fill: "var(--color-transportation)",
    });
  }

  if (metrics.endOfLifePct !== null) {
    breakdown.push({
      category: "endOfLife",
      value: Math.round(((total * metrics.endOfLifePct) / 100) * 100) / 100,
      percentage: metrics.endOfLifePct,
      fill: "var(--color-endOfLife)",
    });
  }

  return breakdown;
}

interface ReportPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ReportPage({ params }: ReportPageProps) {
  const { slug } = await params;
  const report = await getReportBySlug(slug);

  if (!report) {
    notFound();
  }

  const { variant, deviceModel, metrics } = report;
  const carbonBreakdown = buildCarbonBreakdown(metrics);

  return (
    <ReportContent
      variant={variant}
      deviceModel={deviceModel}
      metrics={metrics}
      carbonBreakdown={carbonBreakdown}
    />
  );
}
