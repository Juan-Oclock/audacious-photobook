"use client";

import { ReactNode } from "react";
import { EditorProvider } from "@/lib/EditorContext";

export function Providers({ children }: { children: ReactNode }) {
  return <EditorProvider>{children}</EditorProvider>;
}
