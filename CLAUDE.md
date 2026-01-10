# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Know Your Emission is a Next.js sustainability platform that visualizes the environmental impact of personal devices (smartphones, laptops, etc.) based on Life Cycle Assessment (LCA) reports and Product Environment Reports (PER). The project helps users understand manufacturing CO₂ emissions, recycled materials, and sustainable measures for their devices.

## Development Commands

### Setup and Installation

```bash
pnpm install                    # Install dependencies
```

### Development

```bash
pnpm build                      # Build for production
pnpm dev   (never run this command yourself, use pnpm build for tests)  # Start Next.js development server
pnpm start                      # Start production server
```

### Code Quality

```bash
pnpm lint                       # Run ESLint
pnpm lint:fix                   # Run ESLint with auto-fix
pnpm format                     # Format code with Prettier
```

### Database Operations

```bash
pnpm prisma:generate            # Generate Prisma client from schema
pnpm prisma:migrate             # Create and run a migration
pnpm prisma:migrate:deploy      # Deploy migrations (production)
pnpm prisma:studio              # Open Prisma Studio GUI
pnpm db:push                    # Push schema changes without migrations
pnpm db:seed                    # Seed the database
```

## Architecture Overview

### Next.js App Router Structure

The application uses Next.js 16 with the App Router pattern:

- **Home page** (`src/app/page.tsx`): Device selection interface with combobox for device picker, storage capacity selector, and a "Go" button that navigates to the device report page.
- **Dynamic device page** (`src/app/[slug]/page.tsx`): Displays environmental metrics for a specific device+storage combination, using a URL slug generated from device name and capacity.

### Database Schema

The application uses **Prisma ORM** with PostgreSQL (via Neon) with **Prisma Postgres adapter** (`@prisma/adapter-pg`). The schema includes two main models:

### Prisma Configuration

The project uses a **non-standard Prisma setup** with `prisma.config.ts` instead of the traditional `prisma/schema.prisma` approach. This is part of Prisma's newer configuration system:

- Configuration file: `prisma.config.ts` (TypeScript-based)
- Schema path: `prisma/schema.prisma` (currently deleted in working tree)
- Migrations path: `prisma/migrations/` (currently deleted in working tree)
- Generated client: `src/generated/prisma/`

The singleton Prisma client instance is initialized in `src/lib/prisma.ts` using `PrismaPg` adapter for PostgreSQL connection pooling.

### State Management

Client-side state uses **React Context** pattern:

- **DeviceContext** (`src/context/device-context.tsx`): Manages device selection flow
  - `selectedDevice`: Currently selected device object with id, name, and available_storages
  - `selectedCapacity`: Currently selected storage capacity string
  - Used by: `SelectDevice`, `SelectCapacity`, and `GoButton` components

This pattern enables the multi-step selection flow where selecting a device resets the capacity choice, and both must be selected before navigation is enabled.

### URL Structure and Routing

- **Slug generation** (`src/helper/slug.ts`): Converts device name + capacity into URL-safe slugs
  - Example: "iPhone 15 Pro" + "256GB" → "iphone-15-pro-256gb"
  - Process: lowercase → trim → remove special chars → spaces to dashes → collapse multiple dashes
- Navigation flow: User selects device → selects capacity → clicks Go → navigates to `/{slug}`

### Component Architecture

**UI Components**: Uses shadcn/ui with Tailwind CSS

- Base components in `src/components/ui/`
- Custom components:
  - `SelectDevice`: Searchable combobox (Radix UI Popover + Command)
  - `SelectCapacity`: Storage capacity selector
  - `GoButton`: Navigation button (disabled until both selections made)
  - `EnvironmentCard`: Environmental metrics display
  - `FractionChart`: Carbon footprint breakdown visualization (uses shadcn charts)

**Data Flow Pattern**:

1. Server Components fetch data from Prisma in route handlers/pages
2. Pass data as props to Client Components marked with "use client"
3. Client Components handle interactivity and context state
4. URL slug determines which Report to fetch and display

### Styling

- **Tailwind CSS v4** with `@tailwindcss/postcss` plugin
- **Typography plugin** for prose styles (`prose`, `prose-invert`, `prose-neutral`)
- Custom animation utilities via `tw-animate-css`
- Global styles: `src/app/globals.css`

### TypeScript Configuration

- Strict mode disabled for generated Prisma types (`@ts-nocheck` in generated files)
- Path alias: `@/*` maps to `src/*`
- Target: ES6+

## Key Implementation Details

### Database Connection

- Uses Neon PostgreSQL with connection pooling via `@prisma/adapter-pg`
- Connection string stored in `.env` as `DATABASE_URL`
- Singleton pattern prevents multiple Prisma instances in development

### Server vs Client Boundaries

- Database queries (Prisma) MUST happen in Server Components or API routes
- Device selection state lives in Client Components via React Context
- Data is fetched server-side, then passed to client components for interactivity

### Migration Strategy

Since the prisma directory is currently deleted in the working tree, when adding new schema changes:

1. Recreate or update `prisma/schema.prisma` following the `prisma.config.ts` configuration
2. Run `pnpm prisma:migrate` to create migrations
3. Run `pnpm prisma:generate` to regenerate the client

## Environment Variables

Required in `.env`:

```
DATABASE_URL="postgresql://..."  # Neon PostgreSQL connection string
```

## Tech Stack Summary

- **Framework**: Next.js 16 (App Router, Server Components, React 19)
- **Language**: TypeScript 5
- **Database**: PostgreSQL (Neon) with Prisma ORM 7
- **UI Library**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS v4
- **Charts**: shadcn/ui charts
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Deployment Target**: Vercel
