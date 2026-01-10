"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Heart,
  GraduationCap,
  ChevronDown,
  Calendar,
  Recycle,
  Zap,
  Users,
  Clock,
  Link2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CarbonChart from "@/components/CarbonChart";
import type { EnvironmentRating } from "@/generated/prisma/client";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

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
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatPercentage(value: number | null): string {
  if (value === null) return "N/A";
  return `${value}%`;
}

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

interface ReportContentProps {
  variant: {
    storageCapacity: string;
  };
  deviceModel: {
    name: string;
    releaseDate: Date | null;
  };
  metrics: {
    environmentRating: EnvironmentRating;
    totalCO2: number;
    recycledMaterialsPct: number | null;
    cleanEnergyPct: number | null;
    longevityMeasures: string | null;
    labourProtection: string | null;
    recyclingProgram: string | null;
    source: string | null;
    sourceUrl: string | null;
    productionPct: number | null;
    transportationPct: number | null;
    usePct: number | null;
    endOfLifePct: number | null;
  };
  carbonBreakdown: Array<{
    category: string;
    value: number;
    percentage: number;
    fill: string;
  }>;
}

export default function ReportContent({
  variant,
  deviceModel,
  metrics,
  carbonBreakdown,
}: ReportContentProps) {
  const overviewRef = useRef<HTMLDivElement>(null);
  const labourProtection = parseLabourProtection(metrics.labourProtection);
  const hasLongevityMeasures = !!metrics.longevityMeasures;

  const scrollToOverview = () => {
    overviewRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.main
      className="container mx-auto max-w-4xl px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Card */}
      <motion.div variants={itemVariants}>
        <Card className="mb-12 border-zinc-700 bg-gradient-to-br from-zinc-900 to-zinc-800">
          <CardContent className="p-6 md:p-8">
            <h1 className="mb-6 text-2xl font-bold md:text-3xl">
              {deviceModel.name} ({variant.storageCapacity})
            </h1>

            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground text-sm">
                  Environment impact rating:
                </p>
                <p
                  className={`text-xl font-bold md:text-2xl ${getRatingColor(metrics.environmentRating)}`}
                >
                  {getRatingLabel(metrics.environmentRating)}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground text-sm">
                  Total carbon footprint:
                </p>
                <p className="text-friendly text-2xl font-bold md:text-3xl">
                  {metrics.totalCO2} kg CO2e
                </p>
              </div>

              <div>
                <p className="text-muted-foreground text-sm">
                  Percent of recycled content:
                </p>
                <p className="text-xl font-semibold">
                  {formatPercentage(metrics.recycledMaterialsPct)}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground text-sm">
                  Measures for longevity:
                </p>
                <p
                  className={`text-xl font-semibold ${hasLongevityMeasures ? "text-friendly" : ""}`}
                >
                  {hasLongevityMeasures ? "Yes" : "No"}
                </p>
                {metrics.longevityMeasures && (
                  <p className="text-muted-foreground text-sm">
                    {metrics.longevityMeasures}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="outline" asChild className="gap-2">
                <Link href="/input">
                  <ArrowLeft className="size-4" />
                  Go Back
                </Link>
              </Button>
              <Button
                onClick={scrollToOverview}
                className="bg-friendly hover:bg-friendly/90 gap-2 text-black"
              >
                Read a Full Analysis
                <ChevronDown className="size-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Overview Section */}
      <div
        ref={overviewRef}
        className="mb-12 scroll-mt-8"
      >
        <h2 className="mb-2 text-3xl font-bold md:text-4xl">Overview</h2>
        <div className="mb-6">
          <p className="text-muted-foreground text-sm">
            Total carbon footprint
          </p>
          <p className="text-muted-foreground text-sm">
            {deviceModel.name} {variant.storageCapacity}
          </p>
        </div>

        {carbonBreakdown.length > 0 && (
          <CarbonChart
            carbonBreakdown={carbonBreakdown}
            totalCO2={metrics.totalCO2}
          />
        )}
      </div>

      {/* Details Section with Accordions */}
      <motion.section variants={itemVariants}>
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Details</h2>

        <Accordion
          type="multiple"
          defaultValue={[
            "release",
            "recycled",
            "clean-energy",
            "labour",
            "longevity",
          ]}
          className="space-y-2"
        >
          {/* Release Date */}
          <AccordionItem
            value="release"
            className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4"
          >
            <AccordionTrigger className="text-base font-semibold hover:no-underline">
              <div className="flex items-center gap-3">
                <Calendar className="text-friendly size-5" />
                Release Date
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-2xl font-bold md:text-3xl">
                {formatDate(deviceModel.releaseDate)}
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Percent of Recycled or Renewable Contents */}
          <AccordionItem
            value="recycled"
            className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4"
          >
            <AccordionTrigger className="text-base font-semibold hover:no-underline">
              <div className="flex items-center gap-3">
                <Recycle className="text-friendly size-5" />
                Percent of Recycled or Renewable Contents
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-2xl font-bold md:text-3xl">
                {formatPercentage(metrics.recycledMaterialsPct)}
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Percent of Clean Energy in Manufacturing */}
          <AccordionItem
            value="clean-energy"
            className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4"
          >
            <AccordionTrigger className="text-base font-semibold hover:no-underline">
              <div className="flex items-center gap-3">
                <Zap className="text-friendly size-5" />
                Percent of Clean Energy in Manufacturing
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-2xl font-bold md:text-3xl">
                {formatPercentage(metrics.cleanEnergyPct)}
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Labour Protection */}
          <AccordionItem
            value="labour"
            className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4"
          >
            <AccordionTrigger className="text-base font-semibold hover:no-underline">
              <div className="flex items-center gap-3">
                <Users className="text-friendly size-5" />
                Labour Protection
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck
                    className={`size-5 ${labourProtection.safeWorkplaces ? "text-friendly" : "text-muted-foreground"}`}
                  />
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
                  <Heart
                    className={`size-5 ${labourProtection.dignityRespect ? "text-friendly" : "text-muted-foreground"}`}
                  />
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
                  <GraduationCap
                    className={`size-5 ${labourProtection.educationalOpportunities ? "text-friendly" : "text-muted-foreground"}`}
                  />
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
            </AccordionContent>
          </AccordionItem>

          {/* Measures for Longevity */}
          <AccordionItem
            value="longevity"
            className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4"
          >
            <AccordionTrigger className="text-base font-semibold hover:no-underline">
              <div className="flex items-center gap-3">
                <Clock className="text-friendly size-5" />
                Measures for Longevity
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p
                className={`text-2xl font-bold md:text-3xl ${hasLongevityMeasures ? "text-friendly" : ""}`}
              >
                {hasLongevityMeasures ? "Yes" : "No"}
              </p>
              {metrics.longevityMeasures && (
                <p className="text-muted-foreground mt-2 text-sm">
                  {metrics.longevityMeasures}
                </p>
              )}
            </AccordionContent>
          </AccordionItem>

          {/* Official Recycling Programs */}
          {metrics.recyclingProgram && (
            <AccordionItem
              value="recycling"
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4"
            >
              <AccordionTrigger className="text-base font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Recycle className="text-friendly size-5" />
                  Official Recycling Programs
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-2xl font-bold md:text-3xl">
                  {metrics.recyclingProgram}
                </p>
              </AccordionContent>
            </AccordionItem>
          )}

          {/* Official Source */}
          {metrics.source && (
            <AccordionItem
              value="source"
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4"
            >
              <AccordionTrigger className="text-base font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Link2 className="text-friendly size-5" />
                  Official Source
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {metrics.sourceUrl ? (
                  <a
                    href={metrics.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-friendly inline-flex items-center gap-2 text-lg font-medium underline underline-offset-4 transition-colors md:text-xl"
                  >
                    {metrics.source}
                    <ExternalLink className="size-4" />
                  </a>
                ) : (
                  <p className="text-lg font-medium md:text-xl">
                    {metrics.source}
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </motion.section>
    </motion.main>
  );
}
