## Database Initialization Instructions

Initialize a new relational database for the project.

The database represents a **step-by-step user selection flow**:

1. User selects a **Brand**
2. User selects a **Device Model**
3. User selects a **Device Variant (storage capacity)**
4. System returns **Emission Metrics** for the selected variant

The database contains **4 tables**:

- Brand
- DeviceModel
- DeviceVariant
- EmissionMetrics

Each table corresponds to one step of the user journey.

---

## 1. Brand Table

Represents a device manufacturer and acts as the first filter in the selection process.

**Fields:**

- `id`: String (primary key)
- `name`: String
- `devices`: DeviceModel[]

**Relations:**

- One Brand → Many DeviceModels
- Connected to `DeviceModel.brand`

---

## 2. DeviceModel Table

Represents a specific device model produced by a brand.

**Fields:**

- `id`: String (primary key)
- `brandId`: String (foreign key → Brand.id)
- `brand`: Brand
- `name`: String
- `deviceType`: String
- `releaseDate`: DateTime? (nullable)
- `variants`: DeviceVariant[]

**Relations:**

- Belongs to one Brand
- One DeviceModel → Many DeviceVariants
- Connected to `Brand.devices`
- Connected to `DeviceVariant.deviceModel`

---

## 3. DeviceVariant Table

Represents a specific configuration of a device model (e.g. storage capacity).

**Fields:**

- `id`: String (primary key)
- `deviceModelId`: String (foreign key → DeviceModel.id)
- `deviceModel`: DeviceModel
- `storageCapacity`: String
- `emissionMetrics`: EmissionMetrics?

**Relations:**

- Belongs to one DeviceModel
- One DeviceVariant → One EmissionMetrics (optional)
- Connected to `DeviceModel.variants`

---

## 4. EmissionMetrics Table

Contains environmental and sustainability data for a specific device variant.

**Fields:**

- `id`: String (primary key)
- `deviceVariantId`: String (foreign key → DeviceVariant.id)
- `deviceVariant`: DeviceVariant

**Environmental Metrics:**

- `environmentImpact`: String
-

- `totalCO2`: Float?
- `productionCO2`: Float?
- `transportationCO2`: Float?
- `useCO2`: Float?
- `endOfLifeCO2`: Float?

**Sustainability Indicators:**

- `recycledMaterialsPct`: Float?
- `cleanEnergyPct`: Float?
- `labourProtection`: String?
- `longevityMeasures`: String?
- `recyclingAbility`: String?
- `source`: String?

**Relations:**

- Belongs to exactly one DeviceVariant
- Connected to `DeviceVariant.emissionMetrics`

---

## Example User Selection Path

- **Brand:** Apple
- **DeviceModel:** iPhone 14 Pro
- **DeviceVariant:** iPhone 14 Pro 128GB
- **Result:** EmissionMetrics for iPhone 14 Pro 128GB

---

## Goal

This schema must support:

- Clear relational integrity
- Step-by-step filtering
- Accurate emission data retrieval for a specific device configuration
