"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-32 px-6 text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2ECC71]/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
          ¿Listo para ahorrar?
        </h2>

        <p className="text-xl md:text-2xl text-white/70 mb-12">
          Tu próxima remesa puede costar{" "}
          <span className="text-[#2ECC71] font-bold">$0.01</span> en vez de $15.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-5 bg-[#2ECC71] text-black font-bold rounded-lg hover:bg-[#27AE60] transition text-xl shadow-[0_0_30px_rgba(46,204,113,0.4)] hover:scale-105">
            Enviar Ahora
          </button>
          <button className="px-10 py-5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition text-xl">
            Hablar con Soporte
          </button>
        </div>
      </motion.div>
    </section>
  );
}
