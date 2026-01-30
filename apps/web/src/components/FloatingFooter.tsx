"use client";

import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingFooter() {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      className="fixed bottom-6 inset-x-0 mx-auto w-fit z-40 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center gap-3 px-6 py-2 rounded-full glass-deep-frost border border-white/20 dark:border-white/10 shadow-lg hover:scale-105 transition-transform cursor-default">
        <ShieldCheck className="w-4 h-4 text-primary" />
        <span className="text-[10px] font-semibold text-foreground/80 tracking-widest uppercase">
          Secured by Celo L2
        </span>
      </div>
    </motion.footer>
  );
}
