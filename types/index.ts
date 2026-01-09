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
