-- AlterTable
ALTER TABLE "Device" ADD COLUMN     "available_storages" TEXT[];

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "deviceId" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "storage" TEXT NOT NULL,
    "carbon_footprint_kg" INTEGER,
    "carbon_fraction_production" DOUBLE PRECISION,
    "carbon_fraction_transportation" DOUBLE PRECISION,
    "carbon_fraction_use" DOUBLE PRECISION,
    "carbon_fraction_end" DOUBLE PRECISION,
    "recycled_renewable_contents" DOUBLE PRECISION,
    "clean_energy" DOUBLE PRECISION,
    "recycled_rare_elements" DOUBLE PRECISION,
    "recycled_content_fiber_packaging" DOUBLE PRECISION,
    "labout_protection" TEXT,
    "measures_for_longevity" TEXT,
    "harmful_resources_usage" TEXT,
    "ability_to_recycle" TEXT,
    "source_links" TEXT[],

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Report_slug_key" ON "Report"("slug");

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
