# Device Report Data Schema

This document outlines all data fields available in device environmental reports. Use this as a reference when designing the database schema.

## Overview

Each report represents the environmental impact data for a specific device + storage capacity combination, typically sourced from manufacturer Product Environment Reports (PER) or Life Cycle Assessment (LCA) documents.

---

## Core Device Information

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `deviceName` | string | Yes | Name of the device | `"iPhone 14 Pro"` |
| `storage` | string | Yes | Storage capacity variant | `"128GB"` |
| `slug` | string | Yes | URL-safe identifier (generated from name + storage) | `"iphone-14-pro-128gb"` |
| `releaseDate` | string/date | Yes | Device release date | `"07.09.2022"` |

---

## Environmental Impact Rating

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `environmentRating` | enum | Yes | Overall environmental hazard level | `"Low"` \| `"Medium"` \| `"High"` |

### Rating Criteria (for reference)
- **Low**: < 50 kg CO2e total footprint
- **Medium**: 50-80 kg CO2e total footprint
- **High**: > 80 kg CO2e total footprint

---

## Carbon Footprint Data

### Total Footprint

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `totalCarbonFootprint` | number | Yes | Total lifecycle CO2 equivalent in kg | `65` |
| `funFact` | string | No | Relatable comparison for the footprint | `"same as 1400 cows farting*"` |

### Carbon Breakdown (Lifecycle Phases)

Array of objects representing CO2e distribution across lifecycle phases:

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `category` | string | Yes | Lifecycle phase identifier | `"production"` |
| `value` | number | Yes | Absolute CO2e value in kg | `52.65` |
| `percentage` | number | Yes | Percentage of total footprint | `81` |

#### Standard Categories

| Category | Description |
|----------|-------------|
| `production` | Manufacturing and assembly emissions |
| `transportation` | Shipping and logistics emissions |
| `use` | Energy consumption during product lifetime |
| `endOfLife` | Disposal and recycling process emissions |

### Example Carbon Breakdown
```json
[
  { "category": "production", "value": 52.65, "percentage": 81 },
  { "category": "use", "value": 9.75, "percentage": 15 },
  { "category": "transportation", "value": 1.95, "percentage": 3 },
  { "category": "endOfLife", "value": 0.65, "percentage": 1 }
]
```

---

## Recycled & Renewable Content

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `recycledContent` | string \| null | No | Percentage of recycled materials in device | `"20%"` or `null` |
| `recycledContentNote` | string | No | Additional context about recycled content | `"made the earth 100 times more polluted*"` |
| `recycledRenewablePercent` | string \| null | No | Combined recycled/renewable content percentage | `"35%"` or `null` |
| `recycledRenewableNote` | string | No | Clarification on what's included/excluded | `"Excluding Packaging or In-box Accessories"` |

---

## Clean Energy in Manufacturing

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `cleanEnergyPercent` | string \| null | No | Percentage of clean energy used in manufacturing | `"100%"` or `null` |

---

## Longevity Measures

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `measuresForLongevity` | boolean | Yes | Whether device has durability features | `true` |
| `longevityDescription` | string | No | Description of longevity features | `"Ceramic shield, IP68 Water and Dust Resistance"` |

### Common Longevity Features
- Water/dust resistance ratings (IP67, IP68)
- Scratch-resistant glass (Ceramic Shield, Gorilla Glass)
- Extended software support
- Repairability features
- Battery health management

---

## Labour Protection

Object containing boolean flags for labour standards compliance:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `safeWorkplaces` | boolean | Yes | Safe and healthy workplace conditions |
| `dignityRespect` | boolean | Yes | Workers treated with dignity and respect |
| `educationalOpportunities` | boolean | Yes | Educational opportunities provided for workers |

### Example
```json
{
  "safeWorkplaces": true,
  "dignityRespect": true,
  "educationalOpportunities": true
}
```

---

## Recycling Programs

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `officialRecyclingProgram` | string | No | Name of manufacturer's recycling program | `"Apple Trade In"` |
| `recyclingProgramDescription` | string | No | Description of the program | `"Ensures Your Device a Long Life or Recycle for Free"` |

---

## Source Information

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `officialSource` | string | Yes | Name of the source document | `"iPhone 14 Pro Product Environment Report"` |
| `sourceUrl` | string | Yes | URL to the official report PDF | `"https://www.apple.com/environment/..."` |

---

## Complete Data Example

```json
{
  "deviceName": "iPhone 14 Pro",
  "storage": "128GB",
  "slug": "iphone-14-pro-128gb",
  "releaseDate": "2022-09-07",
  "environmentRating": "Medium",
  "totalCarbonFootprint": 65,
  "funFact": "same as 1400 cows farting*",
  "recycledContent": null,
  "recycledContentNote": "made the earth 100 times more polluted*",
  "recycledRenewablePercent": null,
  "recycledRenewableNote": "Excluding Packaging or In-box Accessories",
  "cleanEnergyPercent": null,
  "measuresForLongevity": true,
  "longevityDescription": "Ceramic shield, IP68 Water and Dust Resistance",
  "labourProtection": {
    "safeWorkplaces": true,
    "dignityRespect": true,
    "educationalOpportunities": true
  },
  "officialRecyclingProgram": "Apple Trade In",
  "recyclingProgramDescription": "Ensures Your Device a Long Life or Recycle for Free",
  "officialSource": "iPhone 14 Pro Product Environment Report",
  "sourceUrl": "https://www.apple.com/environment/pdf/products/iphone/iPhone_14_Pro_PER_Sept2022.pdf",
  "carbonBreakdown": [
    { "category": "production", "value": 52.65, "percentage": 81 },
    { "category": "use", "value": 9.75, "percentage": 15 },
    { "category": "transportation", "value": 1.95, "percentage": 3 },
    { "category": "endOfLife", "value": 0.65, "percentage": 1 }
  ]
}
```

---

## Database Schema Considerations

### Suggested Tables

1. **devices** - Core device info (name, manufacturer, category)
2. **device_variants** - Storage/color variants with slugs
3. **reports** - Environmental report data linked to variants
4. **carbon_breakdown** - Lifecycle phase emissions (one-to-many with reports)
5. **labour_protection** - Labour standards data (one-to-one with reports)

### Relationships
- Device → has many → Variants
- Variant → has one → Report
- Report → has many → CarbonBreakdown entries
- Report → has one → LabourProtection

### Indexing Recommendations
- `slug` - unique index for URL lookups
- `deviceName` - for search functionality
- `environmentRating` - for filtering
- `totalCarbonFootprint` - for sorting/filtering

---

## Data Sources

Reports are typically sourced from:
- Apple Product Environmental Reports
- Samsung Environmental Reports
- Google Pixel Environmental Reports
- Manufacturer LCA (Life Cycle Assessment) documents
- Third-party environmental certifications (EPEAT, TCO)
