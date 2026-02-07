"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { motion } from "framer-motion";
import { stagger, fadeInUp } from "@/lib/animations";

const stats = [
  { label: "Mercado Anual", value: "$3.8B", color: "text-primary" },
  { label: "Ahorro vs Bancos", value: "99%", color: "text-white" },
  { label: "Tiempo de Envío", value: "< 5s", color: "text-white" },
  { label: "Costo Promedio", value: "$0.01", color: "text-primary" },
];

export default function LiveStats() {
  return (
    <section className="border-y border-zinc-900 bg-black py-16">
      <div className="container px-4">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex flex-col items-center justify-center text-center space-y-2"
            >
              <span
                className={`text-4xl font-black tracking-tighter sm:text-5xl/none ${stat.color}`}
              >
                {stat.value}
              </span>
              <span className="text-sm font-medium uppercase tracking-widest text-zinc-500">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
