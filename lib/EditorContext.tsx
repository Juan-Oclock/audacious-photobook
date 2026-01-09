"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { Image, ImagesBySlot } from "@/types";

interface EditorContextType {
  // Current page state
  currentPage: number;
  setCurrentPage: (page: number) => void;

  // Uploaded images in the tray
  uploadedImages: Image[];
  addUploadedImages: (images: Image[]) => void;

  // Images placed in slots (keyed by slotId)
  imagesBySlot: ImagesBySlot;
  handleDrop: (targetSlotId: string, image: Image, sourceSlotId?: string) => void;

  // Reset state (useful for testing or starting over)
  resetState: () => void;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export function EditorProvider({ children }: { children: ReactNode }) {
  // Current page state
  const [currentPage, setCurrentPage] = useState(1);

  // Uploaded images in the tray
  const [uploadedImages, setUploadedImages] = useState<Image[]>([]);

  // Images placed in slots (keyed by slotId)
  const [imagesBySlot, setImagesBySlot] = useState<ImagesBySlot>({});

  // Handle new image uploads
  const addUploadedImages = useCallback((newImages: Image[]) => {
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

  // Reset all state
  const resetState = useCallback(() => {
    setCurrentPage(1);
    setUploadedImages([]);
    setImagesBySlot({});
  }, []);

  return (
    <EditorContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        uploadedImages,
        addUploadedImages,
        imagesBySlot,
        handleDrop,
        resetState,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error("useEditor must be used within an EditorProvider");
  }
  return context;
}
