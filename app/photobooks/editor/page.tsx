"use client";

import { useCallback } from "react";
import Link from "next/link";
import UploadTray from "@/components/UploadTray";
import SpreadNavigator from "@/components/SpreadNavigator";
import SpreadRenderer from "@/components/SpreadRenderer";
import { getSpreadConfig } from "@/lib/spread-config";
import { useEditor } from "@/lib/EditorContext";
import { getPresetById, calculateAspectRatio } from "@/lib/dimension-presets";
import type { Image } from "@/types";

export default function EditorPage() {
  // Get state from context (persists during session)
  const {
    currentSpread,
    setCurrentSpread,
    uploadedImages,
    addUploadedImages,
    imagesBySlot,
    handleDrop,
    dimensions,
  } = useEditor();

  // Calculate aspect ratio from selected dimensions
  const preset = getPresetById(dimensions.presetId);
  const aspectRatio = preset
    ? calculateAspectRatio(preset, dimensions.orientation)
    : "16 / 9";

  // Get the current spread configuration
  const currentSpreadConfig = getSpreadConfig(currentSpread);

  // Handle new image uploads
  const handleUpload = useCallback((newImages: Image[]) => {
    addUploadedImages(newImages);
  }, [addUploadedImages]);

  // Handle drag start from a slot (for move operations)
  const handleDragStart = useCallback(() => {
    // Currently we handle this in the drop handler
    // but this can be extended for visual feedback
  }, []);

  // Handle spread change
  const handleSpreadChange = useCallback((spread: number) => {
    setCurrentSpread(spread);
  }, [setCurrentSpread]);

  if (!currentSpreadConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Spread not found</p>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/photobooks/album-1"
            className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            &larr; Back
          </Link>
          <div className="h-6 w-px bg-slate-200" />
          <h1 className="font-semibold text-slate-900">Album 1 Editor</h1>
        </div>
        <div className="text-sm text-slate-500">
          {currentSpreadConfig.label}
        </div>
      </header>

      {/* Main editor area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Upload tray sidebar */}
        <aside className="w-[280px] flex-shrink-0">
          <UploadTray images={uploadedImages} onUpload={handleUpload} />
        </aside>

        {/* Spread canvas */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Canvas area */}
          <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
            <SpreadRenderer
              spread={currentSpreadConfig}
              imagesBySlot={imagesBySlot}
              onDrop={handleDrop}
              onDragStart={handleDragStart}
              aspectRatio={aspectRatio}
            />
          </div>

          {/* Spread navigation */}
          <SpreadNavigator
            currentSpread={currentSpread}
            onSpreadChange={handleSpreadChange}
          />
        </main>
      </div>
    </div>
  );
}
