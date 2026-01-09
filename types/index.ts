// Image type for uploaded images
export interface Image {
  id: string;
  src: string;
  name: string;
}

// Layout node structure for the recursive layout renderer
export interface LayoutNode {
  rows?: LayoutNode[];
  columns?: LayoutNode[];
  widthRatio?: number;
  heightRatio?: number;
  slot?: string;
}

// Page layout type
export interface PageLayout {
  pageNumber: number;
  layout: LayoutNode;
}

// Album definition
export interface Album {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  pages: PageLayout[];
}

// Editor state type
export type ImagesBySlot = Record<string, Image | null>;

// Photobook orientation options
export type Orientation = "square" | "landscape" | "portrait";

// Size preset definition
export interface SizePreset {
  id: string;
  widthInches: number;
  heightInches: number;
  label: string;
  labelCm: string;
}

// Combined dimension selection
export interface PhotobookDimensions {
  presetId: string;
  orientation: Orientation;
}

// Cover type options
export type CoverType = "softcover" | "imagewrap" | "debossed" | "deluxe";

// Spread navigation types
export type SpreadPosition = 0 | 1 | 2 | 3 | 4 | 5;

export interface SpreadPageConfig {
  type: 'cover' | 'content' | 'endpaper';
  pageNumber?: number;
  coverSide?: 'back' | 'front';
}

export interface SpreadConfig {
  position: SpreadPosition;
  label: string;
  left: SpreadPageConfig;
  right: SpreadPageConfig;
}
