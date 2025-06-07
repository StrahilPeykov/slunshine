"use client";

import { ThemeProvider } from "./theme-provider";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}