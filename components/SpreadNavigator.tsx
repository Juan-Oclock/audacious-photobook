"use client";

import { SPREAD_CONFIG } from "@/lib/spread-config";

interface SpreadNavigatorProps {
  currentSpread: number;
  onSpreadChange: (spread: number) => void;
}

/**
 * Navigation component for spread-based photobook view
 * Shows labeled buttons for each spread (Cover, Page 1, Pages 2-3, etc.)
 */
export default function SpreadNavigator({
  currentSpread,
  onSpreadChange,
}: SpreadNavigatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 p-4 bg-white border-t border-slate-200">
      <span className="text-sm text-slate-500 mr-4">Spread:</span>
      <div className="flex gap-1">
        {SPREAD_CONFIG.map((spread) => (
          <button
            key={spread.position}
            onClick={() => onSpreadChange(spread.position)}
            className={`
              px-3 h-10 rounded-lg font-medium text-sm transition-all
              focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2
              ${
                currentSpread === spread.position
                  ? "bg-teal-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }
            `}
            aria-label={`Go to ${spread.label}`}
            aria-current={currentSpread === spread.position ? "page" : undefined}
          >
            {spread.label}
          </button>
        ))}
      </div>
    </div>
  );
}
