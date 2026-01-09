"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Album {
  id: string;
  name: string;
  description: string;
  pages: number;
  slots: number;
  isActive: boolean;
}

const albums: Album[] = [
  {
    id: "album-1",
    name: "Album 1",
    description: "A beautiful 8-page photobook with 72 image slots. Perfect for capturing your favorite memories.",
    pages: 8,
    slots: 72,
    isActive: true,
  },
  {
    id: "album-2",
    name: "Album 2",
    description: "A compact 6-page photobook ideal for special occasions and celebrations.",
    pages: 6,
    slots: 48,
    isActive: false,
  },
  {
    id: "album-3",
    name: "Album 3",
    description: "An extended 12-page photobook for your complete photo collection.",
    pages: 12,
    slots: 96,
    isActive: false,
  },
];

export default function PhotobooksPage() {
  const [showComingSoon, setShowComingSoon] = useState<string | null>(null);

  const handleDisabledClick = (albumId: string) => {
    setShowComingSoon(albumId);
    setTimeout(() => setShowComingSoon(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <Link href="/" className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Choose Your Album</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Select a photobook album to start creating. Each album comes with
            professionally designed layouts to showcase your photos.
          </p>
        </div>

        {/* Album grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <div key={album.id} className="relative">
              {/* Coming Soon feedback */}
              {showComingSoon === album.id && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-900/50 rounded-xl">
                  <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                    <span className="font-medium text-slate-900">Coming Soon!</span>
                  </div>
                </div>
              )}

              {album.isActive ? (
                <Link href={`/photobooks/${album.id}`}>
                  <Card className="h-full cursor-pointer transition-all hover:shadow-lg hover:border-teal-300 border-2 border-transparent">
                    {/* Album preview placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-teal-50 to-teal-100 rounded-t-xl flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-2 p-6 w-full max-w-[200px]">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="aspect-square bg-white/80 rounded shadow-sm"
                          />
                        ))}
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl">{album.name}</CardTitle>
                      <CardDescription>{album.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex justify-between text-sm text-slate-500 mb-4">
                        <span>{album.pages} pages</span>
                        <span>{album.slots} photo slots</span>
                      </div>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">
                        Select Album
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ) : (
                <Card
                  className="h-full cursor-not-allowed opacity-60"
                  onClick={() => handleDisabledClick(album.id)}
                >
                  {/* Coming Soon badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-slate-800 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Coming Soon
                    </span>
                  </div>

                  {/* Album preview placeholder (grayed) */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-xl flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-2 p-6 w-full max-w-[200px]">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square bg-white/50 rounded shadow-sm"
                        />
                      ))}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-slate-500">{album.name}</CardTitle>
                    <CardDescription className="text-slate-400">{album.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex justify-between text-sm text-slate-400 mb-4">
                      <span>{album.pages} pages</span>
                      <span>{album.slots} photo slots</span>
                    </div>
                    <Button disabled className="w-full">
                      Coming Soon
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
