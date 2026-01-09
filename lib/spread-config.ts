/**
 * Spread Configuration for Photobook Editor
 *
 * Defines how pages are grouped into spreads (two-page views).
 *
 * Spread structure:
 * - Position 0: Cover spread (back cover left, front cover right)
 * - Position 1: End paper (left) + Page 1 (right)
 * - Position 2: Page 2 (left) + Page 3 (right)
 * - Position 3: Page 4 (left) + Page 5 (right)
 * - Position 4: Page 6 (left) + Page 7 (right)
 * - Position 5: Page 8 (left) + End paper (right)
 */

import type { SpreadConfig, SpreadPosition } from '@/types';

export const SPREAD_CONFIG: SpreadConfig[] = [
  {
    position: 0 as SpreadPosition,
    label: 'Cover',
    left: { type: 'cover', coverSide: 'back' },
    right: { type: 'cover', coverSide: 'front' },
  },
  {
    position: 1 as SpreadPosition,
    label: 'Page 1',
    left: { type: 'endpaper' },
    right: { type: 'content', pageNumber: 1 },
  },
  {
    position: 2 as SpreadPosition,
    label: 'Pages 2-3',
    left: { type: 'content', pageNumber: 2 },
    right: { type: 'content', pageNumber: 3 },
  },
  {
    position: 3 as SpreadPosition,
    label: 'Pages 4-5',
    left: { type: 'content', pageNumber: 4 },
    right: { type: 'content', pageNumber: 5 },
  },
  {
    position: 4 as SpreadPosition,
    label: 'Pages 6-7',
    left: { type: 'content', pageNumber: 6 },
    right: { type: 'content', pageNumber: 7 },
  },
  {
    position: 5 as SpreadPosition,
    label: 'Page 8',
    left: { type: 'content', pageNumber: 8 },
    right: { type: 'endpaper' },
  },
];

export const TOTAL_SPREADS = 6;

/**
 * Get spread config by position
 */
export function getSpreadConfig(position: number): SpreadConfig | undefined {
  return SPREAD_CONFIG.find(s => s.position === position);
}
