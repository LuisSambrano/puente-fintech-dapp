"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { useEffect, useRef } from "react";

export function AmbientBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Soft Mesh Gradient */}
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow opacity-30 dark:opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-teal-500 to-cyan-500 blur-[120px]" />

      {/* Secondary Orb */}
      <div className="absolute bottom-[-20%] right-[-20%] w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse-slow" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] dark:opacity-[0.05]" />
    </div>
  );
}
