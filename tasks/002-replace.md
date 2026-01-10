## Replace Mock Data With Database-Driven Data Flow

At this stage, replace all mock data with live data from the database.

The input page contains **three dropdown selection fields** that are sequentially dependent and mapped to database tables.

---

## UI → Database Mapping

### 1. Brand Selection (Dropdown #1)

- Connected to the **Brand** table
- Displays all available brands from the database
- Example option: `Apple`

**Behavior:**

- When a brand is selected, it acts as a filter for available device models

---

### 2. Model Selection (Dropdown #2)

- Connected to the **DeviceModel** table
- Displays only models that belong to the previously selected brand
- Example option: `iPhone 14 Pro`

**Dependency:**

- Filtered by `DeviceModel.brandId`

---

### 3. Storage Capacity Selection (Dropdown #3)

- Connected to the **DeviceVariant** table
- Displays available storage capacities for the selected device model
- Example option: `128GB`

**Dependency:**

- Filtered by `DeviceVariant.deviceModelId`

---

## Device Variant Resolution Logic

The **Model** and **Storage Capacity** selections together uniquely identify a record in the **DeviceVariant** table.

**Example:**

- Model: `iPhone 14 Pro`
- Storage Capacity: `128GB`
- → Corresponds to: `DeviceVariant: iPhone 14 Pro 128GB`

---

## Final Data Output

Once a specific **DeviceVariant** is resolved:

- Retrieve the related record from the **EmissionMetrics** table
- Display all available emission and sustainability metrics on the **report page**

**Relation Used:**

- `DeviceVariant.emissionMetrics`

---

## Expected Result

The system should:

- Dynamically populate dropdowns based on database data
- Enforce correct selection order
- Resolve a single DeviceVariant from user input
- Display accurate emission metrics for the selected device configuration
