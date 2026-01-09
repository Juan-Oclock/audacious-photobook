"use client";

import Link from "next/link";
import { use } from "react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { DimensionSelector } from "@/components/DimensionSelector";
import { CoverTypeSelector } from "@/components/CoverTypeSelector";

interface AlbumData {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  pages: number;
  slots: number;
  isActive: boolean;
}

const albumsData: Record<string, AlbumData> = {
  "album-1": {
    id: "album-1",
    name: "Album 1",
    description: "A beautiful 8-page photobook with 72 image slots",
    longDescription: "Create a stunning photobook with 8 carefully designed pages featuring 72 image slots. Our layouts range from full-page heroes to intricate grids, giving you the flexibility to tell your story exactly how you want.",
    pages: 8,
    slots: 72,
    isActive: true,
  },
  "album-2": {
    id: "album-2",
    name: "Album 2",
    description: "A compact 6-page photobook",
    longDescription: "Perfect for special occasions, this compact album features 6 pages with elegant layouts designed to highlight your most precious moments.",
    pages: 6,
    slots: 48,
    isActive: false,
  },
  "album-3": {
    id: "album-3",
    name: "Album 3",
    description: "An extended 12-page photobook",
    longDescription: "For those with more memories to share, this extended album provides 12 pages of beautiful layouts with ample space for your complete photo collection.",
    pages: 12,
    slots: 96,
    isActive: false,
  },
};

interface PageProps {
  params: Promise<{ albumId: string }>;
}

export default function AlbumDetailPage({ params }: PageProps) {
  const { albumId } = use(params);
  const album = albumsData[albumId];

  if (!album) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <Link href="/photobooks" className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors">
            &larr; Back to Albums
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Album preview */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center">
              {album.isActive ? (
                <div className="grid grid-cols-4 gap-2 p-8 w-full max-w-[300px]">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-white rounded shadow-md flex items-center justify-center"
                    >
                      <span className="text-xs text-slate-400">{i + 1}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-200 mb-4">
                    <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-slate-500 font-medium">Coming Soon</p>
                </div>
              )}
            </div>

            {/* Page previews */}
            {album.isActive && (
              <div className="p-6 border-t border-slate-100">
                <h3 className="text-sm font-medium text-slate-700 mb-3">Page Layouts</h3>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {[7, 8, 16, 11, 8, 10, 3, 9].map((slots, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded flex flex-col items-center justify-center"
                    >
                      <span className="text-xs font-medium text-slate-600">P{i + 1}</span>
                      <span className="text-[10px] text-slate-400">{slots} slots</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Album title and description */}
            <div className="p-6 border-t border-slate-100">
              <h1 className="text-3xl font-bold text-slate-900 mb-4">{album.name}</h1>
              <p className="text-lg text-slate-600 mb-6">{album.longDescription}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="text-2xl font-bold text-teal-600">{album.pages}</div>
                  <div className="text-sm text-slate-500">Pages</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="text-2xl font-bold text-teal-600">{album.slots}</div>
                  <div className="text-sm text-slate-500">Photo Slots</div>
                </div>
              </div>

              {/* Features */}
              {album.isActive && (
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">What&apos;s Included</h3>
                  <ul className="space-y-2">
                    {[
                      "8 professionally designed page layouts",
                      "72 image slots with various sizes",
                      "Drag and drop photo placement",
                      "Instant preview of your photobook",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600">
                        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Album config */}
          <div>
            {/* Dimension Selector */}
            {album.isActive && (
              <div className="mb-6">
                <DimensionSelector />
              </div>
            )}

            {/* Cover Type Selector */}
            {album.isActive && (
              <div className="mb-8">
                <CoverTypeSelector />
              </div>
            )}

            {/* CTA */}
            {album.isActive ? (
              <Link href="/photobooks/editor">
                <Button size="lg" className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 h-14 px-8 text-lg">
                  Start Editing
                </Button>
              </Link>
            ) : (
              <div className="bg-slate-100 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 mb-3">
                  <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-700 mb-1">Coming Soon</h3>
                <p className="text-sm text-slate-500">This album is not yet available. Check back later!</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
