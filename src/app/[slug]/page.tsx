import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Heart,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CarbonChart from "@/components/CarbonChart";
import { getReportBySlug } from "@/app/actions/device";
import type { EnvironmentRating } from "@/generated/prisma/client";

function getRatingColor(rating: EnvironmentRating) {
  switch (rating) {
    case "LOW":
      return "text-friendly";
    case "MEDIUM":
      return "text-yellow-400";
    case "HIGH":
      return "text-destructive";
    default:
      return "text-muted-foreground";
  }
}

function getRatingLabel(rating: EnvironmentRating) {
  switch (rating) {
    case "LOW":
      return "Low Environment Hazard";
    case "MEDIUM":
      return "Medium Environment Hazard";
    case "HIGH":
      return "High Environment Hazard";
    default:
      return "Unknown";
  }
}

function formatDate(date: Date | null): string {
  if (!date) return "N/A";
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatPercentage(value: number | null): string {
  if (value === null) return "N/A";
  return `${value}%`;
}

// Parse labour protection from string
function parseLabourProtection(text: string | null): {
  safeWorkplaces: boolean;
  dignityRespect: boolean;
  educationalOpportunities: boolean;
} {
  if (!text) {
    return {
      safeWorkplaces: false,
      dignityRespect: false,
      educationalOpportunities: false,
    };
  }
  const lowerText = text.toLowerCase();
  return {
    safeWorkplaces: lowerText.includes("safe") && lowerText.includes("healthy"),
    dignityRespect:
      lowerText.includes("dignity") && lowerText.includes("respect"),
    educationalOpportunities: lowerText.includes("educational"),
  };
}

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
      value: Math.round(((total * metrics.transportationPct) / 100) * 100) / 100,
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
  const labourProtection = parseLabourProtection(metrics.labourProtection);
  const hasLongevityMeasures = !!metrics.longevityMeasures;

  return (
    <main className="container mx-auto max-w-4xl py-8 px-4">
      {/* Hero Card */}
      <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 mb-12">
        <CardContent className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            {deviceModel.name} ({variant.storageCapacity})
          </h1>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Environment impact rating:
              </p>
              <p
                className={`text-xl md:text-2xl font-bold ${getRatingColor(metrics.environmentRating)}`}
              >
                {getRatingLabel(metrics.environmentRating)}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Total carbon footprint:
              </p>
              <p className="text-2xl md:text-3xl font-bold text-friendly">
                {metrics.totalCO2} kg CO2e
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Percent of recycled content:
              </p>
              <p className="text-xl font-semibold">
                {formatPercentage(metrics.recycledMaterialsPct)}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Measures for longevity:
              </p>
              <p
                className={`text-xl font-semibold ${hasLongevityMeasures ? "text-friendly" : ""}`}
              >
                {hasLongevityMeasures ? "Yes" : "No"}
              </p>
              {metrics.longevityMeasures && (
                <p className="text-sm text-muted-foreground">
                  {metrics.longevityMeasures}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <Button variant="outline" asChild className="gap-2">
              <Link href="/input">
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Link>
            </Button>
            {metrics.sourceUrl && (
              <Button
                className="bg-friendly hover:bg-friendly/90 text-black gap-2"
                asChild
              >
                <a
                  href={metrics.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read a Full Analysis
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Overview Section */}
      {carbonBreakdown.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Overview</h2>
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Total carbon footprint
            </p>
            <p className="text-sm text-muted-foreground">
              {deviceModel.name} {variant.storageCapacity}
            </p>
          </div>

          <CarbonChart
            carbonBreakdown={carbonBreakdown}
            totalCO2={metrics.totalCO2}
          />
        </section>
      )}

      {/* Details Section */}
      <section className="space-y-6">
        {/* Release Date */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">Release Date</p>
          <Separator className="mb-3" />
          <p className="text-2xl md:text-3xl font-bold">
            {formatDate(deviceModel.releaseDate)}
          </p>
        </div>

        {/* Percent of Recycled or Renewable Contents */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">
            Percent of Recycled or Renewable Contents
          </p>
          <Separator className="mb-3" />
          <p className="text-2xl md:text-3xl font-bold">
            {formatPercentage(metrics.recycledMaterialsPct)}
          </p>
        </div>

        {/* Percent of Clean Energy in Manufacturing */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">
            Percent of Clean Energy in Manufacturing
          </p>
          <Separator className="mb-3" />
          <p className="text-2xl md:text-3xl font-bold">
            {formatPercentage(metrics.cleanEnergyPct)}
          </p>
        </div>

        {/* Labour Protection */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">Labour Protection</p>
          <Separator className="mb-3" />
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-muted-foreground" />
              <span
                className={
                  labourProtection.safeWorkplaces
                    ? ""
                    : "text-muted-foreground line-through"
                }
              >
                Safe and Healthy Workplaces
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="h-5 w-5 text-muted-foreground" />
              <span
                className={
                  labourProtection.dignityRespect
                    ? ""
                    : "text-muted-foreground line-through"
                }
              >
                People are Treated with Dignity and Respect
              </span>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-muted-foreground" />
              <span
                className={
                  labourProtection.educationalOpportunities
                    ? ""
                    : "text-muted-foreground line-through"
                }
              >
                Educational Opportunities for Workers
              </span>
            </div>
          </div>
        </div>

        {/* Measures for Longevity */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">
            Measures for Longevity
          </p>
          <Separator className="mb-3" />
          <p
            className={`text-2xl md:text-3xl font-bold ${hasLongevityMeasures ? "text-friendly" : ""}`}
          >
            {hasLongevityMeasures ? "Yes" : "No"}
          </p>
          {metrics.longevityMeasures && (
            <p className="text-sm text-muted-foreground">
              {metrics.longevityMeasures}
            </p>
          )}
        </div>

        {/* Official Recycling Programs */}
        {metrics.recyclingProgram && (
          <div>
            <p className="text-sm text-muted-foreground mb-1">
              Official Recycling Programs
            </p>
            <Separator className="mb-3" />
            <p className="text-2xl md:text-3xl font-bold">
              {metrics.recyclingProgram}
            </p>
          </div>
        )}

        {/* Official Source */}
        {metrics.source && (
          <div>
            <p className="text-sm text-muted-foreground mb-1">Official Source</p>
            <Separator className="mb-3" />
            {metrics.sourceUrl ? (
              <a
                href={metrics.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl font-medium hover:text-friendly transition-colors underline underline-offset-4"
              >
                {metrics.source}
              </a>
            ) : (
              <p className="text-lg md:text-xl font-medium">{metrics.source}</p>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
