"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { motion } from "framer-motion";

const timelineItems = [
  {
    quarter: "Q1 2026",
    title: "REMESAS en Mainnet",
    status: "Completado",
    statusColor: "bg-[#2ECC71] text-black",
    description:
      "Lanzamiento oficial del protocolo de remesas instantáneas sobre Celo.",
  },
  {
    quarter: "Q2 2026",
    title: "CROWDFUNDING",
    status: "En Desarrollo",
    statusColor: "bg-yellow-500 text-black",
    description:
      "Plataforma para emergencias médicas y causas sociales directas.",
  },
  {
    quarter: "Q3 2026",
    title: "DONACIONES",
    status: "Planificado",
    statusColor: "bg-white/20 text-white",
    description: "Soporte para creadores y ONGs sin intermediarios.",
  },
  {
    quarter: "2027",
    title: "SUPER-APP",
    status: "Visión",
    statusColor: "bg-purple-500 text-white",
    description: "Integración total de servicios financieros descentralizados.",
  },
];

export default function Timeline() {
  return (
    <section id="roadmap" className="py-24 max-w-4xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Roadmap 2026</h2>
        <p className="text-white/60">La evolución del dinero libre.</p>
      </div>

      <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12 pb-12">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.quarter}
            className="relative pl-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-white/30" />

            <span className="text-sm font-mono text-white/40 mb-2 block tracking-widest uppercase">
              {item.quarter}
            </span>

            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-4 flex-wrap">
              {item.title}
              <span
                className={`text-[10px] px-2 py-1 rounded uppercase font-bold tracking-wide ${item.statusColor}`}
              >
                {item.status}
              </span>
            </h3>

            <p className="text-lg text-white/60">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
