"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ActionRingProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  gradient?: string; // Optional custom gradient
}

export function ActionRing({
  icon: Icon,
  label,
  onClick,
  gradient,
}: ActionRingProps) {
  // Default Conic Gradient simulating metal/glass reflection
  const defaultGradient =
    "conic-gradient(from 180deg at 50% 50%, #E8F5EE 0deg, #2EB078 120deg, #E8F5EE 240deg, #2EB078 360deg)";

  return (
    <div className="flex flex-col items-center gap-3">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="relative group w-16 h-16 rounded-full flex items-center justify-center glass-deep-frost shadow-lg"
        style={{
          // The "Ring" Border
          padding: "2px",
          background: gradient || defaultGradient,
        }}
      >
        {/* Inner Content (Masking the center to create ring effect if needed, but here we just fill) */}
        <div className="w-full h-full rounded-full bg-background/80 flex items-center justify-center backdrop-blur-xl">
          <Icon className="w-6 h-6 text-foreground opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
      </motion.button>

      <span className="text-xs font-semibold tracking-wide text-foreground/80">
        {label}
      </span>
    </div>
  );
}
