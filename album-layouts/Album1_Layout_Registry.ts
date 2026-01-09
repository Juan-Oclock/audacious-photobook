/**
 * Album 1 Layout Registry
 *
 * AUTHORITATIVE SOURCE OF TRUTH for Album 1 layouts.
 * This file is IMMUTABLE - do NOT modify layout structures.
 *
 * Layout Rules:
 * - Every page has exactly 2 top-level rows
 * - Every slot = exactly one image
 * - Width and height ratios MUST be respected
 * - Nested rows/columns MUST be rendered as defined
 * - Do NOT add, remove, or modify slots
 * - Do NOT simplify layouts
 */

import { LayoutNode, PageLayout } from '@/types';

/**
 * Page 1: 7 slots
 * Slots: p1_left_hero, p1_r1_a, p1_r1_b, p1_r2_a, p1_r2_b, p1_bottom_left, p1_bottom_right
 */
const page1Layout: LayoutNode = {
  rows: [
    {
      heightRatio: 2,
      columns: [
        {
          widthRatio: 1,
          slot: 'p1_left_hero'
        },
        {
          widthRatio: 1,
          rows: [
            {
              heightRatio: 1,
              columns: [
                { widthRatio: 1, slot: 'p1_r1_a' },
                { widthRatio: 1, slot: 'p1_r1_b' }
              ]
            },
            {
              heightRatio: 1,
              columns: [
                { widthRatio: 1, slot: 'p1_r2_a' },
                { widthRatio: 1, slot: 'p1_r2_b' }
              ]
            }
          ]
        }
      ]
    },
    {
      heightRatio: 1,
      columns: [
        { widthRatio: 1, slot: 'p1_bottom_left' },
        { widthRatio: 1, slot: 'p1_bottom_right' }
      ]
    }
  ]
};

/**
 * Page 2: 8 slots
 * Slots: p2_r1_c1_full, p2_r1_c1_a, p2_r1_c1_b, p2_r1_c2_full, p2_r2_c1_a, p2_r2_c1_b, p2_r2_c2_a, p2_r2_c2_b
 */
const page2Layout: LayoutNode = {
  rows: [
    {
      heightRatio: 1,
      columns: [
        {
          widthRatio: 1,
          rows: [
            { heightRatio: 2, slot: 'p2_r1_c1_full' },
            {
              heightRatio: 1,
              columns: [
                { widthRatio: 1, slot: 'p2_r1_c1_a' },
                { widthRatio: 1, slot: 'p2_r1_c1_b' }
              ]
            }
          ]
        },
        {
          widthRatio: 1,
          slot: 'p2_r1_c2_full'
        }
      ]
    },
    {
      heightRatio: 1,
      columns: [
        {
          widthRatio: 1,
          columns: [
            { widthRatio: 1, slot: 'p2_r2_c1_a' },
            { widthRatio: 1, slot: 'p2_r2_c1_b' }
          ]
        },
        {
          widthRatio: 1,
          columns: [
            { widthRatio: 1, slot: 'p2_r2_c2_a' },
            { widthRatio: 1, slot: 'p2_r2_c2_b' }
          ]
        }
      ]
    }
  ]
};

/**
 * Page 3: 16 slots
 * Slots: p3_a1, p3_a2, p3_b, p3_c1, p3_c2, p3_d1, p3_d2, p3_e, p3_f1, p3_f2, p3_g, p3_h1, p3_h2, p3_h3, p3_h4, p3_i
 */
const page3Layout: LayoutNode = {
  rows: [
    {
      heightRatio: 1,
      columns: [
        {
          widthRatio: 1,
          rows: [
            {
              heightRatio: 1,
              columns: [
                { widthRatio: 1, slot: 'p3_a1' },
                { widthRatio: 1, slot: 'p3_a2' }
              ]
            },
            { heightRatio: 1, slot: 'p3_b' }
          ]
        },
        {
          widthRatio: 1,
          rows: [
            {
              heightRatio: 1,
              columns: [
                { widthRatio: 1, slot: 'p3_c1' },
                { widthRatio: 1, slot: 'p3_c2' }
              ]
            },
            {
              heightRatio: 1,
              columns: [
                { widthRatio: 1, slot: 'p3_d1' },
                { widthRatio: 1, slot: 'p3_d2' }
              ]
            }
          ]
        },
        {
          widthRatio: 1,
          rows: [
            { heightRatio: 1, slot: 'p3_e' },
            {
              heightRatio: 1,
              columns: [
                { widthRatio: 1, slot: 'p3_f1' },
                { widthRatio: 1, slot: 'p3_f2' }
              ]
            }
          ]
        }
      ]
    },
    {
      heightRatio: 1,
      columns: [
        { widthRatio: 1, slot: 'p3_g' },
        {
          widthRatio: 2,
          rows: [
            {
              heightRatio: 1,
              columns: [
                { widthRatio: 1, slot: 'p3_h1' },
                { widthRatio: 1, slot: 'p3_h2' },
                { widthRatio: 1, slot: 'p3_h3' },
                { widthRatio: 1, slot: 'p3_h4' }
              ]
            }
          ]
        },
        { widthRatio: 1, slot: 'p3_i' }
      ]
    }
  ]
};

/**
 * Page 4: 11 slots
 * Slots: p4_a1, p4_a2, p4_b1, p4_b2, p4_c1, p4_c2, p4_d1, p4_d2, p4_e, p4_f, p4_g
 */
const page4Layout: LayoutNode = {
  rows: [
    {
      heightRatio: 2,
      columns: [
        {
          widthRatio: 1,
          rows: [
            {
              heightRatio: 1,
              columns: [
                { widthRatio: 1, slot: 'p4_a1' },
                { widthRatio: 1, slot: 'p4_a2' }
              ]
            },
            {
              heightRatio: 1,
              columns: [
                { widthRatio: 1, slot: 'p4_b1' },
                { widthRatio: 1, slot: 'p4_b2' }
              ]
            }
          ]
        },
        {
          widthRatio: 1,
          rows: [
            {
              heightRatio: 1,
              columns: [
                { widthRatio: 1, slot: 'p4_c1' },
                { widthRatio: 1, slot: 'p4_c2' }
              ]
            },
            {
              heightRatio: 1,
              columns: [
                { widthRatio: 1, slot: 'p4_d1' },
                { widthRatio: 1, slot: 'p4_d2' }
              ]
            }
          ]
        },
        {
          widthRatio: 1,
          slot: 'p4_e'
        }
      ]
    },
    {
      heightRatio: 1,
      columns: [
        { widthRatio: 1, slot: 'p4_f' },
        { widthRatio: 2, slot: 'p4_g' }
      ]
    }
  ]
};

/**
 * Page 5: 8 slots
 * Slots: p5_a, p5_b1, p5_b2, p5_c1, p5_c2, p5_d, p5_e, p5_f
 */
const page5Layout: LayoutNode = {
  rows: [
    {
      heightRatio: 2,
      columns: [
        { widthRatio: 2, slot: 'p5_a' },
        {
          widthRatio: 1,
          rows: [
            { heightRatio: 1, slot: 'p5_b1' },
            { heightRatio: 1, slot: 'p5_b2' }
          ]
        }
      ]
    },
    {
      heightRatio: 1,
      columns: [
        {
          widthRatio: 1,
          columns: [
            { widthRatio: 1, slot: 'p5_c1' },
            { widthRatio: 1, slot: 'p5_c2' }
          ]
        },
        { widthRatio: 1, slot: 'p5_d' },
        { widthRatio: 1, slot: 'p5_e' },
        { widthRatio: 1, slot: 'p5_f' }
      ]
    }
  ]
};

/**
 * Page 6: 10 slots
 * Slots: p6_a, p6_b, p6_c, p6_d, p6_e, p6_f, p6_g, p6_h, p6_i, p6_j
 */
const page6Layout: LayoutNode = {
  rows: [
    {
      heightRatio: 1,
      columns: [
        { widthRatio: 1, slot: 'p6_a' },
        {
          widthRatio: 1,
          rows: [
            { heightRatio: 1, slot: 'p6_b' },
            { heightRatio: 1, slot: 'p6_c' }
          ]
        },
        { widthRatio: 1, slot: 'p6_d' },
        {
          widthRatio: 1,
          rows: [
            { heightRatio: 1, slot: 'p6_e' },
            { heightRatio: 1, slot: 'p6_f' }
          ]
        }
      ]
    },
    {
      heightRatio: 1,
      columns: [
        {
          widthRatio: 1,
          rows: [
            { heightRatio: 1, slot: 'p6_g' },
            { heightRatio: 1, slot: 'p6_h' }
          ]
        },
        { widthRatio: 2, slot: 'p6_i' },
        { widthRatio: 1, slot: 'p6_j' }
      ]
    }
  ]
};

/**
 * Page 7: 3 slots
 * Slots: p7_a, p7_b, p7_c
 */
const page7Layout: LayoutNode = {
  rows: [
    {
      heightRatio: 2,
      columns: [
        { widthRatio: 2, slot: 'p7_a' },
        { widthRatio: 1, slot: 'p7_b' }
      ]
    },
    {
      heightRatio: 1,
      slot: 'p7_c'
    }
  ]
};

/**
 * Page 8: 9 slots
 * Slots: p8_a, p8_b, p8_c, p8_d, p8_e, p8_f, p8_g, p8_h, p8_i
 */
const page8Layout: LayoutNode = {
  rows: [
    {
      heightRatio: 1,
      columns: [
        {
          widthRatio: 1,
          rows: [
            { heightRatio: 1, slot: 'p8_a' },
            { heightRatio: 1, slot: 'p8_b' }
          ]
        },
        { widthRatio: 1, slot: 'p8_c' },
        {
          widthRatio: 1,
          rows: [
            { heightRatio: 1, slot: 'p8_d' },
            { heightRatio: 1, slot: 'p8_e' }
          ]
        }
      ]
    },
    {
      heightRatio: 1,
      columns: [
        { widthRatio: 1, slot: 'p8_f' },
        {
          widthRatio: 1,
          rows: [
            { heightRatio: 1, slot: 'p8_g' },
            { heightRatio: 1, slot: 'p8_h' }
          ]
        },
        { widthRatio: 1, slot: 'p8_i' }
      ]
    }
  ]
};

/**
 * Album 1 Page Layouts
 * Total: 8 pages, 72 slots
 */
export const Album1Pages: PageLayout[] = [
  { pageNumber: 1, layout: page1Layout },
  { pageNumber: 2, layout: page2Layout },
  { pageNumber: 3, layout: page3Layout },
  { pageNumber: 4, layout: page4Layout },
  { pageNumber: 5, layout: page5Layout },
  { pageNumber: 6, layout: page6Layout },
  { pageNumber: 7, layout: page7Layout },
  { pageNumber: 8, layout: page8Layout },
];

/**
 * Get layout for a specific page number
 */
export function getPageLayout(pageNumber: number): LayoutNode | null {
  const page = Album1Pages.find(p => p.pageNumber === pageNumber);
  return page?.layout ?? null;
}

/**
 * Get total number of pages in Album 1
 */
export const ALBUM1_PAGE_COUNT = 8;

/**
 * Get all slot IDs for a given layout node (recursive)
 */
export function getAllSlotIds(node: LayoutNode): string[] {
  const slots: string[] = [];

  if (node.slot) {
    slots.push(node.slot);
  }

  if (node.rows) {
    for (const row of node.rows) {
      slots.push(...getAllSlotIds(row));
    }
  }

  if (node.columns) {
    for (const col of node.columns) {
      slots.push(...getAllSlotIds(col));
    }
  }

  return slots;
}

/**
 * Get all slot IDs for a specific page
 */
export function getPageSlotIds(pageNumber: number): string[] {
  const layout = getPageLayout(pageNumber);
  if (!layout) return [];
  return getAllSlotIds(layout);
}

/**
 * Get all slot IDs across all pages
 */
export function getAllAlbumSlotIds(): string[] {
  return Album1Pages.flatMap(page => getAllSlotIds(page.layout));
}

/**
 * Expected slot counts per page (for validation)
 */
export const EXPECTED_SLOT_COUNTS: Record<number, number> = {
  1: 7,
  2: 8,
  3: 16,
  4: 11,
  5: 8,
  6: 10,
  7: 3,
  8: 9,
};

/**
 * Total expected slots across all pages
 */
export const TOTAL_SLOT_COUNT = 72;
