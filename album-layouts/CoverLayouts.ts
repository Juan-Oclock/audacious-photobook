/**
 * Cover Layouts for Photobook
 *
 * Defines layouts for the front and back cover pages.
 * These are separate from the content page layouts in Album1_Layout_Registry.
 */

import { LayoutNode } from '@/types';

/**
 * Back Cover Layout
 * Full-page slot for back cover image
 */
export const backCoverLayout: LayoutNode = {
  rows: [
    {
      heightRatio: 1,
      slot: 'cover_back'
    }
  ]
};

/**
 * Front Cover Layout
 * Full-page slot for front cover hero image
 */
export const frontCoverLayout: LayoutNode = {
  rows: [
    {
      heightRatio: 1,
      slot: 'cover_front'
    }
  ]
};

/**
 * Get cover layout by side
 */
export function getCoverLayout(side: 'back' | 'front'): LayoutNode {
  return side === 'back' ? backCoverLayout : frontCoverLayout;
}

/**
 * Cover slot IDs for validation
 */
export const COVER_SLOT_IDS = ['cover_back', 'cover_front'] as const;
