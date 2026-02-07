"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { motion } from "framer-motion";
import { Zap, Globe, Gem } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const products = [
  {
    icon: Zap,
    title: "REMESAS",
    stage: "Disponible Ahora",
    stageColor: "bg-green-500/20 text-green-400 border-green-500/30",
    description: "Envía dinero a Venezuela en 5 segundos",
    details: [
      "Costo: <$0.01 por transacción",
      "Velocidad: Confirmación en 5 segundos",
      "Transparencia: Verificable en blockchain",
    ],
    cta: "Enviar Ahora",
    enabled: true,
  },
  {
    icon: Globe,
    title: "CROWDFUNDING",
    stage: "En Construcción",
    stageColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    description: "Emergencias médicas sin fees de GoFundMe",
    details: [
      "Costo: 2% (vs GoFundMe 10%)",
      "Directo a wallet",
      "100% transparente",
    ],
    cta: "Notifícame",
    enabled: false,
  },
  {
    icon: Gem,
    title: "DONACIONES",
    stage: "Próximamente",
    stageColor: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    description: "Apoya a creadores venezolanos",
    details: [
      "Costo: 1% (vs Patreon 10%)",
      "Sin restricciones geográficas",
      "Pagos instantáneos",
    ],
    cta: "Notifícame",
    enabled: false,
  },
];

export default function ServicesGrid() {
  return (
    <section id="products" className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4"
            variants={fadeInUp}
          >
            Nuestros Productos
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            variants={fadeInUp}
          >
            3 Fases. 1 Plataforma.
          </motion.h2>
          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            De remesas a crowdfunding y donaciones. El super-app financiero para
            la diáspora.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.div
                key={product.title}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all hover:-translate-y-1 group"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                {/* Icon */}
                <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit border border-white/10 group-hover:border-[#2ECC71]/30 transition-colors">
                  <Icon
                    className="w-8 h-8 text-white group-hover:text-[#2ECC71] transition-colors"
                    strokeWidth={2}
                  />
                </div>

                {/* Title & Stage */}
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {product.title}
                </h3>
                <span
                  className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold border mb-4 uppercase tracking-wide ${product.stageColor}`}
                >
                  {product.stage}
                </span>

                {/* Description */}
                <p className="text-white/70 mb-6 min-h-[50px]">
                  {product.description}
                </p>

                {/* Details List */}
                <ul className="space-y-3 mb-8">
                  {product.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-sm text-white/60 flex items-start gap-2"
                    >
                      <span className="text-[#2ECC71] mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    product.enabled
                      ? "bg-[#2ECC71] text-black hover:bg-[#27AE60] shadow-[0_0_15px_rgba(46,204,113,0.2)]"
                      : "bg-white/10 text-white/50 cursor-not-allowed border border-white/5"
                  }`}
                  disabled={!product.enabled}
                >
                  {product.cta}
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
