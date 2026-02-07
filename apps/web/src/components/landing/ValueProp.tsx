"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function ValueProp() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-center">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white text-balance">
          Menos de <span className="text-[#2ECC71]">$0.01</span> por
          transferencia
        </h2>

        <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-white/90">
          Devolvemos el control financiero a las familias
        </h3>

        <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto text-balance">
          Millones de familias pierden acceso a dinero que legítimamente
          enviaron sus seres queridos. Puente ofrece un camino alternativo donde
          las familias pueden enviar, recibir y verificar fondos
          transparentemente, sin esperar aprobación de bancos tradicionales.
        </p>
      </motion.div>
    </section>
  );
}
