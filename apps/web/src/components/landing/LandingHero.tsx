"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function LandingHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      <motion.div
        className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Content */}
        <div>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6 text-white"
            variants={fadeInUp}
          >
            Remesas Sin
            <br />
            Intermediarios
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl"
            variants={fadeInUp}
          >
            $3.8 mil millones enviados anualmente. 15% perdido en fees.{" "}
            <span className="text-[#2ECC71] font-semibold">Ya no más.</span>
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" variants={fadeInUp}>
            <button className="px-8 py-4 bg-[#2ECC71] text-black font-bold rounded-lg hover:bg-[#27AE60] transition text-lg shadow-[0_0_20px_rgba(46,204,113,0.3)] hover:scale-105">
              Enviar Ahora
            </button>
            <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-white/40 transition text-lg backdrop-blur-sm">
              Ver Demo
            </button>
          </motion.div>
        </div>

        {/* Media */}
        <motion.div
          className="relative aspect-square md:aspect-[4/3]"
          variants={fadeInUp}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71]/20 to-transparent opacity-50" />

            {/* Placeholder for Video/Mockup */}
            <Image
              src="/hero-mockup.png"
              alt="Puente App Demo"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />

            {/* Play Button Placeholder */}
            <div className="relative z-10 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 cursor-pointer hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
