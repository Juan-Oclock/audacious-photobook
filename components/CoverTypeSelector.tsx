"use client";

import { cn } from "@/lib/utils";
import { useEditor } from "@/lib/EditorContext";
import type { CoverType } from "@/types";

const COVER_TYPES: { value: CoverType; label: string; sublabel: string }[] = [
  { value: "softcover", label: "Softcover", sublabel: "Photobook" },
  { value: "imagewrap", label: "Imagewrap", sublabel: "Hardcover" },
  { value: "debossed", label: "Debossed", sublabel: "Hardcover" },
  { value: "deluxe", label: "Deluxe", sublabel: "Hardcover" },
];

function CoverIcon({ type, className }: { type: CoverType; className?: string }) {
  // Different visual representations for each cover type
  if (type === "softcover") {
    return (
      <div className={cn("relative", className)}>
        <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-sm border border-slate-300 shadow-sm" />
        <div className="absolute inset-1 bg-gradient-to-br from-blue-100 to-blue-200 rounded-sm" />
      </div>
    );
  }
  if (type === "imagewrap") {
    return (
      <div className={cn("relative", className)}>
        <div className="w-full h-full bg-gradient-to-br from-sky-200 to-sky-300 rounded-sm border border-sky-400 shadow-md" />
        <div className="absolute inset-2 bg-white/80 rounded-sm flex items-center justify-center">
          <div className="w-1/2 h-1/2 bg-sky-100 rounded-sm" />
        </div>
      </div>
    );
  }
  if (type === "debossed") {
    return (
      <div className={cn("relative", className)}>
        <div className="w-full h-full bg-gradient-to-br from-teal-300 to-teal-400 rounded-sm border border-teal-500 shadow-md" />
        <div className="absolute top-1 right-1 w-1/4 h-full bg-teal-500/30 rounded-r-sm" />
      </div>
    );
  }
  // deluxe
  return (
    <div className={cn("relative", className)}>
      <div className="w-full h-full bg-gradient-to-br from-teal-600 to-teal-700 rounded-sm border border-teal-800 shadow-md" />
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-teal-400/50 rounded-full" />
      <div className="absolute top-1 right-1 w-1/5 h-full bg-teal-800/30 rounded-r-sm" />
    </div>
  );
}

export function CoverTypeSelector() {
  const { coverType, setCoverType } = useEditor();

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
      {/* Section Title */}
      <h3 className="font-semibold text-slate-900 uppercase text-sm tracking-wide">
        Choose Cover Type
      </h3>

      {/* Cover Options */}
      <div className="grid grid-cols-4 gap-3">
        {COVER_TYPES.map(({ value, label, sublabel }) => (
          <button
            key={value}
            onClick={() => setCoverType(value)}
            className={cn(
              "flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all",
              coverType === value
                ? "border-teal-500 bg-teal-50"
                : "border-slate-200 hover:border-slate-300"
            )}
          >
            <CoverIcon type={value} className="w-16 h-16" />
            <div className="text-center">
              <span
                className={cn(
                  "block text-sm font-medium",
                  coverType === value ? "text-teal-700" : "text-slate-700"
                )}
              >
                {label}
              </span>
              <span
                className={cn(
                  "block text-xs",
                  coverType === value ? "text-teal-600" : "text-slate-500"
                )}
              >
                {sublabel}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
