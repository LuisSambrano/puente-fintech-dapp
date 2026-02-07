"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface AccountSummaryProps {
  cUSD: string; // Formatted balance (e.g., "1,250.00")
  isLoading?: boolean;
}

export function AccountSummary({ cUSD, isLoading }: AccountSummaryProps) {
  const [showLocal, setShowLocal] = useState(false);
  const VES_RATE = 75; // Hardcoded generic rate for MVP

  // Parse for calculation
  const numericBalance = parseFloat(cUSD.replace(/,/g, "")) || 0;
  const vesBalance = (numericBalance * VES_RATE).toLocaleString("es-VE", {
    minimumFractionDigits: 2,
  });

  return (
    <div className="flex flex-col items-center justify-center py-8 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 blur-[60px] rounded-full point-events-none" />

      {/* Label */}
      <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-2 z-10">
        Vault Balance
      </span>

      {/* Main Balance (cUSD) */}
      <motion.div
        layout
        className="relative z-10"
        onClick={() => setShowLocal(!showLocal)}
      >
        {isLoading ? (
          <div className="h-16 w-48 bg-gray-200/20 animate-pulse rounded-lg" />
        ) : (
          <h1
            className="text-6xl md:text-7xl font-bold tracking-tighter text-foreground cursor-pointer select-none"
            style={{
              textShadow:
                "0 4px 12px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <span className="text-4xl align-top opacity-50">$</span>
            {cUSD}
          </h1>
        )}
      </motion.div>

      {/* Secondary View (Dual Ledger) */}
      {showLocal && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.6, y: 0 }}
          className="mt-2 text-xl font-medium text-foreground/60 font-mono z-10"
        >
          ≈ Bs. {vesBalance}
        </motion.div>
      )}

      {/* Interaction Hint */}
      <span className="text-[10px] text-muted-foreground/50 mt-4 font-mono">
        Protected by Celo L2
      </span>
    </div>
  );
}
