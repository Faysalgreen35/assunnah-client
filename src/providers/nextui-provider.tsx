"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReduxProvider } from "./redux-provider";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
}
