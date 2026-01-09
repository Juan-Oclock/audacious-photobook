"use client";

import { useState } from "react";
import type { Image } from "@/types";

interface ImageSlotProps {
  slotId: string;
  image: Image | null;
  onDrop: (slotId: string, image: Image, sourceSlotId?: string) => void;
  onDragStart: (slotId: string, image: Image) => void;
}

export default function ImageSlot({
  slotId,
  image,
  onDrop,
  onDragStart,
}: ImageSlotProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const imageData = e.dataTransfer.getData("application/json");
    if (imageData) {
      try {
        const { image: droppedImage, sourceSlotId } = JSON.parse(imageData);
        if (droppedImage) {
          onDrop(slotId, droppedImage, sourceSlotId);
        }
      } catch (error) {
        console.error("Failed to parse dropped image data:", error);
      }
    }
  };

  const handleDragStart = (e: React.DragEvent) => {
    if (image) {
      e.dataTransfer.setData(
        "application/json",
        JSON.stringify({ image, sourceSlotId: slotId })
      );
      e.dataTransfer.effectAllowed = "move";
      onDragStart(slotId, image);
    }
  };

  return (
    <div
      className={`
        relative w-full h-full overflow-hidden transition-all duration-200
        ${image ? "cursor-grab active:cursor-grabbing" : "cursor-default"}
        ${isDragOver ? "ring-4 ring-teal-400 ring-inset bg-teal-50" : ""}
        ${!image ? "border-2 border-dashed border-slate-300 bg-slate-50" : ""}
      `}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      draggable={!!image}
      onDragStart={handleDragStart}
    >
      {image ? (
        // Filled slot - show image
        <img
          src={image.src}
          alt={image.name}
          className="w-full h-full object-cover"
          draggable={false}
        />
      ) : (
        // Empty slot - show placeholder
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
          <svg
            className="w-8 h-8 mb-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-xs">Drop image</span>
        </div>
      )}

      {/* Drop highlight overlay */}
      {isDragOver && (
        <div className="absolute inset-0 bg-teal-400/20 pointer-events-none" />
      )}
    </div>
  );
}
