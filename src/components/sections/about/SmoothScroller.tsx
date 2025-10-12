"use client";

import { useEffect } from "react";
import type Lenis from "lenis"; // ✅ Import only the type

export function SmoothScroller() {
  useEffect(() => {
    let rafId: number | null = null;
    let lenis: Lenis | null = null; // ✅ Use proper type

    import("lenis")
      .then(({ default: LenisClass }) => {
        lenis = new LenisClass({ smoothWheel: true });
        const raf = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      })
      .catch(() => {
        // Lenis not available; no-op
      });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy?.(); // ✅ Safe cleanup
    };
  }, []);

  return null;
}
