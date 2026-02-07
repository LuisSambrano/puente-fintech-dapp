"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { ShieldCheck } from "lucide-react";

export function VerificationStatus() {
  return (
    <div className="flex justify-center w-full py-6 opacity-60 hover:opacity-100 transition-opacity duration-500">
      <div className="flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/5 rounded-full backdrop-blur-sm border border-black/5 dark:border-white/5">
        <ShieldCheck className="w-3 h-3 text-bridge-brand-text dark:text-gray-300" />
        <span className="text-[10px] font-medium text-bridge-brand-text dark:text-gray-300 uppercase tracking-widest">
          Powered by Celo Open Infrastructure
        </span>
      </div>
    </div>
  );
}
