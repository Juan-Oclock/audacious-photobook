"use client";

import type { LayoutNode, Image } from "@/types";
import ImageSlot from "./ImageSlot";

interface LayoutRendererProps {
  node: LayoutNode;
  imagesBySlot: Record<string, Image | null>;
  onDrop: (slotId: string, image: Image, sourceSlotId?: string) => void;
  onDragStart: (slotId: string, image: Image) => void;
}

/**
 * Recursive layout renderer component
 * Renders LayoutNode tree using flexbox
 * - rows: flex-col (children stack vertically)
 * - columns: flex-row (children stack horizontally)
 * - slot: renders ImageSlot component
 *
 * Respects widthRatio and heightRatio via flex-grow
 */
export default function LayoutRenderer({
  node,
  imagesBySlot,
  onDrop,
  onDragStart,
}: LayoutRendererProps) {
  // Leaf node - render image slot
  if (node.slot) {
    return (
      <div
        className="relative flex-shrink-0 min-h-0 min-w-0 overflow-hidden"
        style={{
          flexGrow: node.widthRatio || node.heightRatio || 1,
        }}
      >
        <ImageSlot
          slotId={node.slot}
          image={imagesBySlot[node.slot] || null}
          onDrop={onDrop}
          onDragStart={onDragStart}
        />
      </div>
    );
  }

  // Container node with rows (vertical stacking)
  if (node.rows) {
    return (
      <div
        className="flex flex-col gap-1 h-full"
        style={{
          flexGrow: node.heightRatio || node.widthRatio || 1,
        }}
      >
        {node.rows.map((row, index) => (
          <div
            key={index}
            className="flex-shrink-0 min-h-0 overflow-hidden"
            style={{
              flexGrow: row.heightRatio || 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <LayoutRenderer
              node={row}
              imagesBySlot={imagesBySlot}
              onDrop={onDrop}
              onDragStart={onDragStart}
            />
          </div>
        ))}
      </div>
    );
  }

  // Container node with columns (horizontal stacking)
  if (node.columns) {
    return (
      <div
        className="flex flex-row gap-1 h-full"
        style={{
          flexGrow: node.heightRatio || node.widthRatio || 1,
        }}
      >
        {node.columns.map((col, index) => (
          <div
            key={index}
            className="flex-shrink-0 min-w-0 overflow-hidden"
            style={{
              flexGrow: col.widthRatio || 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <LayoutRenderer
              node={col}
              imagesBySlot={imagesBySlot}
              onDrop={onDrop}
              onDragStart={onDragStart}
            />
          </div>
        ))}
      </div>
    );
  }

  // Fallback for invalid nodes
  return null;
}
