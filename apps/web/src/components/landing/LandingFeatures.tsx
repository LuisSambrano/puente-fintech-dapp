"use client";

import { motion } from "framer-motion";
import { Globe2, ShieldCheck, Wallet } from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Envíos Globales",
    description:
      "Conecta con cualquier billetera en la red Celo. Sin fronteras, sin esperas.",
    color: "bg-blue-500",
  },
  {
    icon: Wallet,
    title: "Cero Comisiones",
    description:
      "Paga con tokens estables (cUSD). Olvídate de la volatilidad y el gas impredecible.",
    color: "bg-green-500",
  },
  {
    icon: ShieldCheck,
    title: "Identidad Móvil",
    description:
      "Envía dinero a números de celular verificados. No más direcciones hexadecimales imposibles.",
    color: "bg-purple-500",
  },
];

export function LandingFeatures() {
  return (
    <section className="min-h-screen w-full snap-start flex items-center justify-center bg-bridge-brand-bg dark:bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-bridge-brand-text dark:text-white mb-6">
            Construido para la <span className="text-primary">Vida Real</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Puente simplifica la complejidad de blockchain en una experiencia
            que cualquiera puede usar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-800 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-50">
                <feature.icon
                  className={`w-24 h-24 text-${feature.color.replace(
                    "bg-",
                    ""
                  )}/10 -mr-8 -mt-8`}
                />
              </div>

              <div
                className={`w-14 h-14 rounded-full ${feature.color}/10 flex items-center justify-center mb-6 text-${feature.color} text-2xl`}
              >
                <feature.icon
                  className={`w-7 h-7 text-${feature.color.replace("bg-", "")}`}
                />
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
