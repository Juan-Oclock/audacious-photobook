"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import UploadTray from "@/components/UploadTray";
import PageNavigator from "@/components/PageNavigator";
import LayoutRenderer from "@/components/LayoutRenderer";
import { getPageLayout } from "@/album-layouts/Album1_Layout_Registry";
import type { Image, ImagesBySlot } from "@/types";

export default function EditorPage() {
  // Current page state
  const [currentPage, setCurrentPage] = useState(1);

  // Uploaded images in the tray
  const [uploadedImages, setUploadedImages] = useState<Image[]>([]);

  // Images placed in slots (keyed by slotId)
  const [imagesBySlot, setImagesBySlot] = useState<ImagesBySlot>({});

  // Get the current page layout
  const currentLayout = getPageLayout(currentPage);

  // Handle new image uploads
  const handleUpload = useCallback((newImages: Image[]) => {
    setUploadedImages((prev) => [...prev, ...newImages]);
  }, []);

  // Handle dropping an image into a slot
  const handleDrop = useCallback(
    (targetSlotId: string, image: Image, sourceSlotId?: string) => {
      setImagesBySlot((prev) => {
        const updated = { ...prev };

        // If source is a slot, clear it (move operation)
        if (sourceSlotId) {
          updated[sourceSlotId] = null;
        }

        // Place image in target slot (replaces any existing image)
        updated[targetSlotId] = image;

        return updated;
      });
    },
    []
  );

  // Handle drag start from a slot (for move operations)
  const handleDragStart = useCallback(() => {
    // Currently we handle this in the drop handler
    // but this can be extended for visual feedback
  }, []);

  // Handle page change
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  if (!currentLayout) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Layout not found for page {currentPage}</p>
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
          Page {currentPage} of 8
        </div>
      </header>

      {/* Main editor area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Upload tray sidebar */}
        <aside className="w-[280px] flex-shrink-0">
          <UploadTray images={uploadedImages} onUpload={handleUpload} />
        </aside>

        {/* Page canvas */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Canvas area */}
          <div className="flex-1 flex items-center justify-center p-8 overflow-auto">
            <div
              className="bg-white shadow-xl rounded-lg overflow-hidden"
              style={{
                width: "min(100%, 800px)",
                aspectRatio: "1 / 1",
              }}
            >
              <div className="w-full h-full p-2">
                <LayoutRenderer
                  node={currentLayout}
                  imagesBySlot={imagesBySlot}
                  onDrop={handleDrop}
                  onDragStart={handleDragStart}
                />
              </div>
            </div>
          </div>

          {/* Page navigation */}
          <PageNavigator
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </main>
      </div>
    </div>
  );
}
