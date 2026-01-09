"use client";

import { ALBUM1_PAGE_COUNT } from "@/album-layouts/Album1_Layout_Registry";

interface PageNavigatorProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function PageNavigator({
  currentPage,
  onPageChange,
}: PageNavigatorProps) {
  const pages = Array.from({ length: ALBUM1_PAGE_COUNT }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 p-4 bg-white border-t border-slate-200">
      <span className="text-sm text-slate-500 mr-4">Page:</span>
      <div className="flex gap-1">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              w-10 h-10 rounded-lg font-medium text-sm transition-all
              focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2
              ${
                currentPage === page
                  ? "bg-teal-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }
            `}
            aria-label={`Go to page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
