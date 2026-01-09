# Audrey Photobook Editor

A simplified photobook web editor MVP where users can choose a photobook album, configure basic options, and upload photos into a fixed-layout editor.

## Overview

This is a **slot-based** photobook editor, NOT a design tool:
- Layouts are predefined and immutable
- Users drag and drop images into slots
- No text editing, layout editing, or image effects

## Features

- **Landing Page**: Hero section with call-to-action
- **Album Selection**: Choose from 3 albums (only Album 1 active for MVP)
- **Album Detail**: View album info and start editing
- **Photobook Editor**:
  - Upload tray sidebar for image uploads
  - 8 pages with predefined layouts (72 total slots)
  - Drag and drop images between tray and slots
  - Page navigation with state persistence

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Deployment**: Vercel

## Prerequisites

- Node.js 18+
- npm or pnpm

## Quick Start

```bash
# Make init.sh executable (first time only)
chmod +x init.sh

# Run the setup and development server
./init.sh
```

Or manually:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero and CTA |
| `/photobooks` | Album selection (3 albums) |
| `/photobooks/[albumId]` | Album detail page |
| `/photobooks/editor` | Photobook editor |

## Project Structure

```
audrey-photobook/
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Landing page
│   ├── photobooks/
│   │   ├── page.tsx          # Album selection
│   │   ├── [albumId]/
│   │   │   └── page.tsx      # Album detail
│   │   └── editor/
│   │       └── page.tsx      # Editor page
├── components/               # React components
│   ├── ui/                   # shadcn/ui components
│   ├── LayoutRenderer.tsx    # Recursive layout renderer
│   ├── ImageSlot.tsx         # Individual image slot
│   ├── UploadTray.tsx        # Upload sidebar
│   └── PageNavigator.tsx     # Page navigation
├── album-layouts/            # Layout definitions
│   └── Album1_Layout_Registry.ts
├── lib/                      # Utilities
└── types/                    # TypeScript types
```

## Layout Registry

Album 1 has 8 pages with the following slot counts:
- Page 1: 7 slots
- Page 2: 8 slots
- Page 3: 16 slots
- Page 4: 11 slots
- Page 5: 8 slots
- Page 6: 10 slots
- Page 7: 3 slots
- Page 8: 9 slots
- **Total: 72 image slots**

Layouts are defined in `album-layouts/Album1_Layout_Registry.ts` and are **immutable**.

## Drag and Drop Behavior

- **Tray to Slot**: Copies image (original stays in tray)
- **Slot to Empty Slot**: Moves image (source cleared)
- **Slot to Occupied Slot**: Replaces target, clears source
- **No swapping**: Images are replaced, not swapped

## MVP Scope

### Included
- Album 1 full functionality
- All 8 pages with layouts
- Drag and drop editing
- Client-side state management

### Explicitly Out of Scope
- Payments/checkout
- Authentication
- Backend persistence
- Text editing
- Layout customization
- Image effects (filters, cropping)
- Album 2 and 3 (Coming Soon placeholder)

## Development

```bash
# Development server with hot reload
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build

# Start production server
npm run start
```

## Deployment

The project is configured for Vercel deployment:

```bash
# Deploy to Vercel
vercel
```

## License

Private - Audrey Photobook
