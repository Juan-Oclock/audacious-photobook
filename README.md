# Audacious Photobook

A modern, slot-based photobook editor built with Next.js 14+, TypeScript, and Tailwind CSS. Users can select album layouts, customize dimensions and cover types, then drag and drop images into predefined slots.

## Features

- **Slot-Based Editor**: Drag and drop images into professionally designed layout slots
- **Multiple Orientations**: Choose between Square, Landscape, or Portrait formats
- **Customizable Sizes**: Various size options from 8"x6" to 17.5"x12"
- **Cover Types**: Softcover, Imagewrap Hardcover, Debossed Hardcover, and Deluxe Hardcover
- **8 Page Layouts**: 72 image slots across 8 uniquely designed pages
- **Session Persistence**: Your work persists during your editing session

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone git@github.com:Juan-Oclock/audacious-photobook.git
cd audacious-photobook

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available Scripts

```bash
npm run dev      # Development server with hot reload
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
├── app/                       # Next.js App Router pages
│   ├── page.tsx              # Landing page with hero
│   └── photobooks/
│       ├── page.tsx          # Album selection
│       ├── [albumId]/        # Album detail & configuration
│       └── editor/           # Main photobook editor
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── DimensionSelector.tsx # Size & orientation picker
│   ├── CoverTypeSelector.tsx # Cover type picker
│   ├── LayoutRenderer.tsx    # Recursive layout renderer
│   ├── ImageSlot.tsx         # Droppable image slot
│   ├── UploadTray.tsx        # Image upload sidebar
│   └── PageNavigator.tsx     # Page navigation
├── album-layouts/            # Layout definitions (immutable)
├── lib/
│   ├── EditorContext.tsx     # Global state management
│   └── dimension-presets.ts  # Size presets & helpers
└── types/                    # TypeScript type definitions
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero image |
| `/photobooks` | Album selection gallery |
| `/photobooks/[albumId]` | Album detail & configuration |
| `/photobooks/editor` | Photobook editor |

## How It Works

1. **Browse Albums**: View available photobook templates
2. **Configure Options**: Select orientation (Square/Landscape/Portrait), size, and cover type
3. **Upload Photos**: Drag images into the upload tray
4. **Place Images**: Drag photos from the tray into layout slots
5. **Navigate Pages**: Use the page navigator to edit all 8 pages

## Drag and Drop Behavior

- **Tray to Slot**: Copies image (original stays in tray)
- **Slot to Empty Slot**: Moves image (source cleared)
- **Slot to Occupied Slot**: Replaces target, clears source

## Layout Registry

Album 1 has 8 pages with 72 total slots:
- Page 1: 7 slots | Page 2: 8 slots | Page 3: 16 slots | Page 4: 11 slots
- Page 5: 8 slots | Page 6: 10 slots | Page 7: 3 slots | Page 8: 9 slots

Layouts are defined in `album-layouts/Album1_Layout_Registry.ts` and are **immutable**.

## License

MIT
