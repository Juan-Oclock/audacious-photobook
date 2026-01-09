# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development server (http://localhost:3000)
npm run dev

# Type checking
npm run type-check

# Lint
npm run lint

# Production build
npm run build

# Start production server
npm run start
```

## Architecture

This is a **slot-based photobook editor** built with Next.js 14+ App Router, TypeScript, and Tailwind CSS. Users select an album, then drag and drop images into predefined layout slots. Layouts are immutable - this is NOT a design tool.

### State Management

All editor state is managed via React Context in `lib/EditorContext.tsx`:
- `currentPage` - Active page number (1-8)
- `uploadedImages` - Array of images in the upload tray
- `imagesBySlot` - Record mapping slot IDs to placed images

The `EditorProvider` wraps the app via `components/Providers.tsx` in the root layout.

### Layout System

Layouts are defined as recursive `LayoutNode` trees in `album-layouts/Album1_Layout_Registry.ts`:
- **This file is IMMUTABLE** - do not modify layout structures
- Each node has either `rows` (vertical), `columns` (horizontal), or `slot` (leaf)
- `widthRatio`/`heightRatio` control flex-grow proportions
- 8 pages total, 72 slots across all pages

The `LayoutRenderer` component recursively renders these trees using flexbox. Each leaf `slot` renders an `ImageSlot` component.

### Drag and Drop Flow

1. **Tray to Slot**: Image copied (stays in tray), placed in slot
2. **Slot to Empty Slot**: Image moved (source cleared)
3. **Slot to Occupied Slot**: Target replaced, source cleared
4. No swapping - images are replaced, not exchanged

Data is passed via `dataTransfer` as JSON with `{ image, sourceSlotId }`.

### Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/photobooks` | Album selection |
| `/photobooks/[albumId]` | Album detail |
| `/photobooks/editor` | Main editor |

### Key Types (`types/index.ts`)

- `Image` - Uploaded image with id, src (data URL), name
- `LayoutNode` - Recursive layout tree node
- `ImagesBySlot` - Record<string, Image | null>
