"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    id: 1,
    label: "Paso 1",
    headline: "Conecta tu Wallet",
    body: "Email o wallet. Sin papeleos. Privy maneja la seguridad.",
    cta: "Probar Demo",
    image: "/process-1.png", // Ensure placeholders exist or handle missing
    align: "left",
  },
  {
    id: 2,
    label: "Paso 2",
    headline: "Envía en 5 Segundos",
    body: "Escribe el número. Elige monto. Confirma. Listo.",
    cta: "Ver Video",
    image: "/process-2.png",
    align: "right",
  },
  {
    id: 3,
    label: "Paso 3",
    headline: "Verifica en Blockchain",
    body: "Transparencia total. Cada transacción verificable on-chain.",
    cta: "Ver en Blockchain",
    image: "/process-3.png",
    align: "left",
  },
];

export default function ProcessSteps() {
  return (
    <section id="how-it-works" className="py-32 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple. Rápido. Transparente.
          </motion.h2>
        </div>

        <div className="space-y-32">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${
                step.align === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <motion.div
                className="flex-1 space-y-8"
                initial={{ opacity: 0, x: step.align === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[#2ECC71] font-mono tracking-widest text-sm uppercase font-bold border border-[#2ECC71]/30 px-3 py-1 rounded-full bg-[#2ECC71]/10">
                  {step.label}
                </span>

                <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  {step.headline}
                </h3>

                <p className="text-xl text-white/60 leading-relaxed max-w-lg">
                  {step.body}
                </p>

                <button className="flex items-center gap-2 text-white font-semibold group hover:text-[#2ECC71] transition-colors">
                  {step.cta}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </motion.div>

              {/* Media */}
              <motion.div
                className="flex-1 w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative aspect-[4/3] w-full bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />

                  {/* Placeholder Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black text-9xl">
                    {step.id}
                  </div>

                  {/* Scanline Effect */}
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
