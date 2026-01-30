"use client";

import { motion } from "framer-motion";
import { Download, Share } from "lucide-react";

export function InstallPrompt() {
  return (
    <section className="h-screen w-full snap-start flex items-center justify-center bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/40 via-slate-900 to-slate-900" />

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium">
            <Download className="w-4 h-4" />
            <span>Instalable</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Lleva tu banco <br /> en el bolsillo.
          </h2>
          <p className="text-slate-400 text-lg max-w-md">
            Instala Puente como una aplicación nativa. Sin descargas pesadas,
            actualizaciones instantáneas y acceso directo desde tu inicio.
          </p>
        </div>

        <div className="flex-1 w-full max-w-sm">
          <motion.div
            initial={{ rotate: 3 }}
            whileInView={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-bold text-2xl">
                  P
                </div>
                <div>
                  <h4 className="font-bold text-lg">Puente Web App</h4>
                  <p className="text-sm text-slate-400">verify.celo.org</p>
                </div>
              </div>

              <div className="h-[1px] bg-white/10 w-full" />

              <div className="flex flex-col gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs">
                    1
                  </span>
                  <span>
                    Presiona el botón <Share className="w-3 h-3 inline mx-1" />{" "}
                    Compartir
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs">
                    2
                  </span>
                  <span>Selecciona &quot;Agregar a Inicio&quot;</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
