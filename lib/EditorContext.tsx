"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { Image, ImagesBySlot, Orientation, PhotobookDimensions, CoverType } from "@/types";
import { DEFAULT_PRESET_ID, DEFAULT_ORIENTATION } from "./dimension-presets";

interface EditorContextType {
  // Current spread state (0-5)
  currentSpread: number;
  setCurrentSpread: (spread: number) => void;

  // Uploaded images in the tray
  uploadedImages: Image[];
  addUploadedImages: (images: Image[]) => void;

  // Images placed in slots (keyed by slotId)
  imagesBySlot: ImagesBySlot;
  handleDrop: (targetSlotId: string, image: Image, sourceSlotId?: string) => void;

  // Photobook dimensions
  dimensions: PhotobookDimensions;
  setOrientation: (orientation: Orientation) => void;
  setPresetId: (presetId: string) => void;

  // Cover type
  coverType: CoverType;
  setCoverType: (coverType: CoverType) => void;

  // Reset state (useful for testing or starting over)
  resetState: () => void;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export function EditorProvider({ children }: { children: ReactNode }) {
  // Current spread state (0 = Cover, 1 = Page 1, 2 = Pages 2-3, etc.)
  const [currentSpread, setCurrentSpread] = useState(0);

  // Uploaded images in the tray
  const [uploadedImages, setUploadedImages] = useState<Image[]>([]);

  // Images placed in slots (keyed by slotId)
  const [imagesBySlot, setImagesBySlot] = useState<ImagesBySlot>({});

  // Photobook dimensions
  const [dimensions, setDimensions] = useState<PhotobookDimensions>({
    presetId: DEFAULT_PRESET_ID,
    orientation: DEFAULT_ORIENTATION,
  });

  const setOrientation = useCallback((orientation: Orientation) => {
    setDimensions((prev) => ({ ...prev, orientation }));
  }, []);

  const setPresetId = useCallback((presetId: string) => {
    setDimensions((prev) => ({ ...prev, presetId }));
  }, []);

  // Cover type
  const [coverType, setCoverTypeState] = useState<CoverType>("imagewrap");

  const setCoverType = useCallback((type: CoverType) => {
    setCoverTypeState(type);
  }, []);

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
    setCurrentSpread(0);
    setUploadedImages([]);
    setImagesBySlot({});
    setDimensions({
      presetId: DEFAULT_PRESET_ID,
      orientation: DEFAULT_ORIENTATION,
    });
    setCoverTypeState("imagewrap");
  }, []);

  return (
    <EditorContext.Provider
      value={{
        currentSpread,
        setCurrentSpread,
        uploadedImages,
        addUploadedImages,
        imagesBySlot,
        handleDrop,
        dimensions,
        setOrientation,
        setPresetId,
        coverType,
        setCoverType,
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
