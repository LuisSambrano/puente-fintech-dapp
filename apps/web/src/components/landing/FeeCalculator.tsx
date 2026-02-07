"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeeCalculator() {
  const [amount, setAmount] = useState<number | string>(100);

  const numAmount = Number(amount) || 0;
  const westernUnionFee = numAmount * 0.15;
  const puenteFee = 0.01;
  const savings = westernUnionFee - puenteFee;

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: Text Context */}
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-400">
              <Calculator className="mr-2 h-4 w-4" />
              Simulador de Ahorro
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl">
              Las matemáticas <br />
              <span className="text-primary">no mienten.</span>
            </h2>
            <p className="max-w-[500px] text-zinc-400 text-lg">
              Los bancos y remesadoras tradicionales cobran hasta un 15% en
              comisiones ocultas y tipo de cambio.
              <br />
              <br />
              Puente usa blockchain para eliminar intermediarios.
            </p>
          </div>

          {/* Right: Interactive Calculator Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-md mx-auto bg-black border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

            <h3 className="text-2xl font-bold text-white mb-6">
              ¿Cuánto envías?
            </h3>

            <div className="relative mb-8">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-zinc-500">
                $
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-10 pr-4 text-3xl font-mono text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-zinc-700"
                placeholder="100"
              />
            </div>

            <div className="space-y-4 mb-8">
              {/* Western Union Row */}
              <div className="flex justify-between items-center p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                <div className="flex flex-col">
                  <span className="text-red-400 font-medium">
                    Western Union (Est. 15%)
                  </span>
                  <span className="text-red-300/60 text-xs">
                    Comisión + Spread
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xl font-mono text-red-400">
                    -${westernUnionFee.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Puente Row */}
              <div className="flex justify-between items-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex flex-col">
                  <span className="text-primary font-bold">
                    Comisión Puente
                  </span>
                  <span className="text-primary/60 text-xs">
                    Gas Fee (Celo)
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xl font-mono text-primary">
                    -${puenteFee.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            {/* Total Savings */}
            <div className="border-t border-zinc-800 pt-6 mb-6">
              <div className="flex justify-between items-baseline">
                <span className="text-zinc-400">Tu familia recibe extra:</span>
                <span className="text-4xl font-black text-white tracking-tight">
                  ${savings > 0 ? savings.toFixed(2) : "0.00"}
                </span>
              </div>
            </div>

            <Button className="w-full h-14 text-lg font-bold bg-white text-black hover:bg-zinc-200">
              Enviar ${amount} Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-center text-xs text-zinc-600 mt-4">
              *Comparación basada en tarifas promedio de mercado para envíos de
              efectivo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
