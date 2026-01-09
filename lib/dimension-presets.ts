import type { SizePreset, Orientation } from "@/types";

// Landscape/Portrait size presets (dimensions are for landscape; portrait swaps them)
export const SIZE_PRESETS: SizePreset[] = [
  { id: "8x6", widthInches: 8, heightInches: 6, label: '8" x 6"', labelCm: "20 x 15 cm" },
  { id: "11x8.5", widthInches: 11, heightInches: 8.5, label: '11" x 8.5"', labelCm: "28 x 22 cm" },
  { id: "14x10", widthInches: 14, heightInches: 10, label: '14" x 10"', labelCm: "36 x 25 cm" },
  { id: "15x11", widthInches: 15, heightInches: 11, label: '15" x 11"', labelCm: "38 x 28 cm" },
  { id: "16x12", widthInches: 16, heightInches: 12, label: '16" x 12"', labelCm: "41 x 30 cm" },
  { id: "17.5x12", widthInches: 17.5, heightInches: 12, label: '17.5" x 12"', labelCm: "44 x 30 cm" },
];

// Square presets (width === height)
export const SQUARE_PRESETS: SizePreset[] = [
  { id: "8x8", widthInches: 8, heightInches: 8, label: '8" x 8"', labelCm: "20 x 20 cm" },
  { id: "10x10", widthInches: 10, heightInches: 10, label: '10" x 10"', labelCm: "25 x 25 cm" },
  { id: "12x12", widthInches: 12, heightInches: 12, label: '12" x 12"', labelCm: "30 x 30 cm" },
];

export const DEFAULT_PRESET_ID = "11x8.5";
export const DEFAULT_ORIENTATION: Orientation = "landscape";

// Get preset by ID
export function getPresetById(id: string): SizePreset | undefined {
  return [...SIZE_PRESETS, ...SQUARE_PRESETS].find((p) => p.id === id);
}

// Get available presets for an orientation
export function getPresetsForOrientation(orientation: Orientation): SizePreset[] {
  if (orientation === "square") {
    return SQUARE_PRESETS;
  }
  return SIZE_PRESETS;
}

// Calculate CSS aspect-ratio string from preset + orientation
export function calculateAspectRatio(preset: SizePreset, orientation: Orientation): string {
  if (orientation === "square") {
    return "1 / 1";
  }

  const { widthInches, heightInches } = preset;

  if (orientation === "landscape") {
    return `${widthInches} / ${heightInches}`;
  }

  // Portrait: swap dimensions
  return `${heightInches} / ${widthInches}`;
}

// Get numeric aspect ratio for calculations
export function getAspectRatioValue(preset: SizePreset, orientation: Orientation): number {
  if (orientation === "square") return 1;

  const { widthInches, heightInches } = preset;
  return orientation === "landscape"
    ? widthInches / heightInches
    : heightInches / widthInches;
}
