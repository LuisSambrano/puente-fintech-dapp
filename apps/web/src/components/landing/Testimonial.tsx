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

export default function Testimonial() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.blockquote
          className="text-2xl md:text-4xl font-medium leading-relaxed font-serif italic text-white/90 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          &quot;15% de $3.8 mil millones ={" "}
          <span className="text-[#2ECC71]">$570 millones perdidos</span>{" "}
          anualmente en fees de remesas. Puente existe para devolver ese dinero
          a las familias que lo ganaron.&quot;
        </motion.blockquote>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/20">
            <Image
              src="/images/logo.png"
              alt="Puente Founder"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-white font-bold text-lg">Misión de Puente</p>
            <p className="text-white/50 text-sm">
              Financial Freedom for Venezuela
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
