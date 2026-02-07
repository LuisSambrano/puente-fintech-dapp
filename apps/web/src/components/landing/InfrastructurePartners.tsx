"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { motion } from "framer-motion";
import { ShieldCheck, Code2, Lock } from "lucide-react";

export default function InfrastructurePartners() {
  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="container px-4 text-center">
        <p className="text-sm font-medium text-zinc-500 mb-8 uppercase tracking-widest">
          Infraestructura Segura & Verificable
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Mock Logos - In a real scenario, use SVGs of Celo, Privy, etc. */}
          {/* Using text/icon placeholders for now to match the "Text-First" vibe */}

          <div className="flex items-center gap-2 group">
            <div className="h-10 w-10 bg-zinc-900 rounded-full flex items-center justify-center group-hover:bg-yellow-400/10 transition-colors">
              <span className="font-black text-xl text-zinc-300 group-hover:text-yellow-400">
                ⚡
              </span>
            </div>
            <span className="text-xl font-bold text-zinc-400 group-hover:text-white">
              Celo
            </span>
          </div>

          <div className="flex items-center gap-2 group">
            <div className="h-10 w-10 bg-zinc-900 rounded-full flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
              <Lock className="h-5 w-5 text-zinc-300 group-hover:text-blue-500" />
            </div>
            <span className="text-xl font-bold text-zinc-400 group-hover:text-white">
              Privy
            </span>
          </div>

          <div className="flex items-center gap-2 group">
            <div className="h-10 w-10 bg-zinc-900 rounded-full flex items-center justify-center group-hover:bg-green-500/10 transition-colors">
              <Code2 className="h-5 w-5 text-zinc-300 group-hover:text-green-500" />
            </div>
            <span className="text-xl font-bold text-zinc-400 group-hover:text-white">
              Supabase
            </span>
          </div>

          <div className="flex items-center gap-2 group">
            <div className="h-10 w-10 bg-zinc-900 rounded-full flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
              <ShieldCheck className="h-5 w-5 text-zinc-300 group-hover:text-purple-500" />
            </div>
            <span className="text-xl font-bold text-zinc-400 group-hover:text-white">
              Audited
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
