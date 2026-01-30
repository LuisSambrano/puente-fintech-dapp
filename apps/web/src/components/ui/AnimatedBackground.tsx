"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Soft Mesh Gradient */}
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow opacity-30 dark:opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-purple-500 to-pink-500 blur-[120px]" />

      {/* Secondary Orb */}
      <div className="absolute bottom-[-20%] right-[-20%] w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse-slow" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] dark:opacity-[0.05]" />
    </div>
  );
}
