"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePrivy } from "@privy-io/react-auth";
import { Loader2 } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function LandingHero() {
  const { login, ready, authenticated } = usePrivy();

  return (
    <section className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden bg-background">
      <AnimatedBackground />

      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-20">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
        >
          <div className="px-4 py-1.5 rounded-full glass-deep-frost border border-primary/20 text-primary text-sm font-semibold tracking-wide shadow-sm">
            ✨ MiniPay Native • Celo L2
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[1.1]">
            Dinero que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              se siente real.
            </span>
          </h1>

          <p className="text-lg text-muted-foreground lg:text-xl max-w-[500px] leading-relaxed">
            La billetera digital construida con estándares de &quot;Glass
            Vault&quot;. Envía dólares y bolívares sin fricción, sin comisiones
            ocultas, y con liquidación instantánea.
          </p>

          <div className="flex gap-4 mt-2">
            <Button
              size="lg"
              className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95"
              onClick={login}
              disabled={!ready || authenticated}
            >
              {!ready ? (
                <Loader2 className="animate-spin" />
              ) : authenticated ? (
                "Entrar al Vault"
              ) : (
                "Crear Billetera"
              )}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 rounded-full glass-deep-frost hover:bg-white/20 border-white/20"
            >
              Ver Demo
            </Button>
          </div>
        </motion.div>

        {/* Right Column: 3D Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="flex-1 relative w-full max-w-[600px] aspect-square flex items-center justify-center perspective-1000"
        >
          {/* Floating Phone */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[300px] md:w-[380px] z-20"
          >
            <Image
              src="/hero-mockup.png"
              width={800}
              height={800}
              alt="Puente Interface"
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Floating Coins (Parallax) */}
          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-10 right-10 w-24 h-24 z-30"
          >
            <Image
              src="/celo-coin.png"
              width={200}
              height={200}
              alt="Celo"
              className="drop-shadow-xl"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-20 left-10 w-20 h-20 z-10 blur-[1px]"
          >
            <Image
              src="/celo-coin.png"
              width={200}
              height={200}
              alt="Celo"
              className="opacity-80 drop-shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
