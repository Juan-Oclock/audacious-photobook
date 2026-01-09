"use client";

import type { SpreadConfig, Image } from "@/types";
import SpreadPage from "./SpreadPage";

interface SpreadRendererProps {
  spread: SpreadConfig;
  imagesBySlot: Record<string, Image | null>;
  onDrop: (slotId: string, image: Image, sourceSlotId?: string) => void;
  onDragStart: (slotId: string, image: Image) => void;
  aspectRatio: string;
}

/**
 * Get label for a page based on its config
 */
function getPageLabel(config: { type: string; coverSide?: string; pageNumber?: number }): string | null {
  if (config.type === 'cover') {
    return config.coverSide === 'back' ? 'Back cover' : 'Front cover';
  }
  return null;
}

/**
 * Main spread component that renders two pages side-by-side
 * Simulates how a physical book opens
 */
export default function SpreadRenderer({
  spread,
  imagesBySlot,
  onDrop,
  onDragStart,
  aspectRatio,
}: SpreadRendererProps) {
  const leftLabel = getPageLabel(spread.left);
  const rightLabel = getPageLabel(spread.right);
  const showLabels = leftLabel || rightLabel;

  // Calculate spread aspect ratio (double width for two pages)
  // Parse the page aspect ratio and double the width component
  const [widthRatio, heightRatio] = aspectRatio.split('/').map(s => parseFloat(s.trim()));
  const spreadAspectRatio = `${widthRatio * 2} / ${heightRatio}`;

  return (
    <div className="flex flex-col items-center w-full max-w-[1600px]">
      {/* Spread container with combined aspect ratio */}
      <div
        className="w-full shadow-xl rounded-lg overflow-hidden"
        style={{ aspectRatio: spreadAspectRatio }}
      >
        <div className="flex h-full">
          {/* Left page */}
          <div className="flex-1 h-full overflow-hidden">
            <SpreadPage
              config={spread.left}
              side="left"
              imagesBySlot={imagesBySlot}
              onDrop={onDrop}
              onDragStart={onDragStart}
            />
          </div>

          {/* Center spine indicator */}
          <div className="w-[2px] bg-slate-300 shadow-inner flex-shrink-0" />

          {/* Right page */}
          <div className="flex-1 h-full overflow-hidden">
            <SpreadPage
              config={spread.right}
              side="right"
              imagesBySlot={imagesBySlot}
              onDrop={onDrop}
              onDragStart={onDragStart}
            />
          </div>
        </div>
      </div>

      {/* Page labels for cover spread */}
      {showLabels && (
        <div className="flex w-full mt-3">
          <div className="flex-1 text-center text-sm text-slate-500">
            {leftLabel}
          </div>
          <div className="w-[2px]" />
          <div className="flex-1 text-center text-sm text-slate-500">
            {rightLabel}
          </div>
        </div>
      )}
    </div>
  );
}
