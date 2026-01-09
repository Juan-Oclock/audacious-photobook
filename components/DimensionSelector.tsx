"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useEditor } from "@/lib/EditorContext";
import {
  getPresetsForOrientation,
  getPresetById,
} from "@/lib/dimension-presets";
import type { Orientation } from "@/types";

const ORIENTATIONS: { value: Orientation; label: string }[] = [
  { value: "square", label: "Square" },
  { value: "landscape", label: "Landscape" },
  { value: "portrait", label: "Portrait" },
];

function OrientationIcon({ orientation, className }: { orientation: Orientation; className?: string }) {
  if (orientation === "square") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="1" />
      </svg>
    );
  }
  if (orientation === "landscape") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="6" width="20" height="12" rx="1" />
      </svg>
    );
  }
  // portrait
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="6" y="2" width="12" height="20" rx="1" />
    </svg>
  );
}

export function DimensionSelector() {
  const { dimensions, setOrientation, setPresetId } = useEditor();
  const [showCm, setShowCm] = useState(false);

  const availablePresets = getPresetsForOrientation(dimensions.orientation);
  const currentPreset = getPresetById(dimensions.presetId);

  // When orientation changes, reset to first available preset if current is invalid
  const handleOrientationChange = (orientation: Orientation) => {
    setOrientation(orientation);

    const newPresets = getPresetsForOrientation(orientation);
    const currentStillValid = newPresets.some((p) => p.id === dimensions.presetId);

    if (!currentStillValid) {
      setPresetId(newPresets[0].id);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-6">
      {/* Section Title */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-slate-900 uppercase text-sm tracking-wide">
            Orientation & Size
          </h3>
        </div>
        <button
          onClick={() => setShowCm(!showCm)}
          className="flex items-center gap-2 text-sm"
        >
          <span className={cn(!showCm ? "text-slate-900 font-medium" : "text-slate-400")}>
            inch
          </span>
          <div className="relative w-10 h-5 bg-slate-200 rounded-full">
            <div
              className={cn(
                "absolute top-0.5 w-4 h-4 bg-teal-500 rounded-full transition-transform",
                showCm ? "translate-x-5" : "translate-x-0.5"
              )}
            />
          </div>
          <span className={cn(showCm ? "text-slate-900 font-medium" : "text-slate-400")}>
            cm
          </span>
        </button>
      </div>

      {/* Orientation Selector */}
      <div className="flex gap-3">
        {ORIENTATIONS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => handleOrientationChange(value)}
            className={cn(
              "flex-1 flex flex-col items-center gap-2 py-4 px-4 rounded-lg border-2 transition-all",
              dimensions.orientation === value
                ? "border-teal-500 bg-teal-50 text-teal-700"
                : "border-slate-200 hover:border-slate-300 text-slate-500"
            )}
          >
            <OrientationIcon orientation={value} className="w-8 h-8" />
            <span className={cn(
              "text-sm font-medium",
              dimensions.orientation === value ? "text-teal-700" : "text-slate-600"
            )}>
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* Size Selector */}
      <div className="grid grid-cols-3 gap-3">
        {availablePresets.map((preset) => (
          <button
            key={preset.id}
            onClick={() => setPresetId(preset.id)}
            className={cn(
              "py-4 px-3 rounded-lg border-2 text-center transition-all",
              dimensions.presetId === preset.id
                ? "border-teal-500 bg-teal-50"
                : "border-slate-200 hover:border-slate-300"
            )}
          >
            <div className="mb-2 flex justify-center">
              <OrientationIcon
                orientation={dimensions.orientation}
                className={cn(
                  "w-10 h-10",
                  dimensions.presetId === preset.id ? "text-teal-600" : "text-slate-400"
                )}
              />
            </div>
            <span className={cn(
              "block text-sm font-medium",
              dimensions.presetId === preset.id ? "text-teal-700" : "text-slate-700"
            )}>
              {showCm ? preset.labelCm : preset.label}
            </span>
          </button>
        ))}
      </div>

      {/* Preview indicator */}
      {currentPreset && (
        <div className="pt-4 border-t border-slate-100">
          <p className="text-sm text-slate-500">
            Selected:{" "}
            <span className="font-medium text-slate-700">
              {showCm ? currentPreset.labelCm : currentPreset.label}
            </span>{" "}
            ({dimensions.orientation})
          </p>
        </div>
      )}
    </div>
  );
}
