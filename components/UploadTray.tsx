"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import type { Image } from "@/types";

interface UploadTrayProps {
  images: Image[];
  onUpload: (newImages: Image[]) => void;
}

export default function UploadTray({ images, onUpload }: UploadTrayProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    setIsUploading(true);

    const newImages: Image[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Only accept image files
      if (!file.type.startsWith("image/")) continue;

      try {
        // Convert to base64 data URL
        const dataUrl = await readFileAsDataURL(file);

        newImages.push({
          id: `img-${Date.now()}-${i}`,
          src: dataUrl,
          name: file.name,
        });
      } catch (error) {
        console.error("Failed to read file:", error);
      }
    }

    if (newImages.length > 0) {
      onUpload(newImages);
    }

    setIsUploading(false);

    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleDragStart = (e: React.DragEvent, image: Image) => {
    e.dataTransfer.setData(
      "application/json",
      JSON.stringify({ image, sourceSlotId: null })
    );
    e.dataTransfer.effectAllowed = "copy";
  };

  const handleDropzoneDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Only show drag over for file drops, not image drags
    if (e.dataTransfer.types.includes("Files")) {
      setIsDragOver(true);
    }
  };

  const handleDropzoneDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDropzoneDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files);
    }
  };

  return (
    <div className="h-full flex flex-col bg-white border-r border-slate-200">
      {/* Header */}
      <div className="p-4 border-b border-slate-200">
        <h2 className="font-semibold text-slate-900">Upload Photos</h2>
        <p className="text-xs text-slate-500 mt-1">
          Drag photos to the page or drop files here
        </p>
      </div>

      {/* Upload area */}
      <div
        className={`
          m-4 p-4 border-2 border-dashed rounded-lg transition-colors
          ${isDragOver ? "border-teal-400 bg-teal-50" : "border-slate-200 bg-slate-50"}
        `}
        onDragOver={handleDropzoneDragOver}
        onDragLeave={handleDropzoneDragLeave}
        onDrop={handleDropzoneDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFileSelect(e.target.files)}
        />
        <Button
          variant="outline"
          className="w-full"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
        >
          {isUploading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Uploading...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Choose Files
            </span>
          )}
        </Button>
        <p className="text-xs text-slate-400 text-center mt-2">
          or drop files here
        </p>
      </div>

      {/* Image grid */}
      <div className="flex-1 overflow-y-auto p-4">
        {images.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-32 text-slate-400">
            <svg
              className="h-8 w-8 mb-2"
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
            <span className="text-sm">No images yet</span>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {images.map((image) => (
              <div
                key={image.id}
                className="aspect-square rounded-lg overflow-hidden cursor-grab active:cursor-grabbing hover:ring-2 hover:ring-teal-400 transition-all"
                draggable
                onDragStart={(e) => handleDragStart(e, image)}
              >
                <img
                  src={image.src}
                  alt={image.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image count */}
      {images.length > 0 && (
        <div className="p-4 border-t border-slate-200 text-center">
          <span className="text-sm text-slate-500">
            {images.length} photo{images.length !== 1 ? "s" : ""} uploaded
          </span>
        </div>
      )}
    </div>
  );
}
