"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  ArrowUpRight,
  ArrowDownLeft,
  QrCode,
  CreditCard,
} from "lucide-react";
import Image from "next/image";

interface BalanceCardProps {
  onSend: () => void;
  onReceive: () => void;
  onQR: () => void;
}

export function BalanceCard({ onSend, onReceive, onQR }: BalanceCardProps) {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full aspect-[1.586] overflow-hidden rounded-3xl p-6 text-white shadow-2xl group transition-all hover:scale-[1.01]"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-neutral-800 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(46,204,113,0.4),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,rgba(39,174,96,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
        {/* Glass Overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-white/5 border border-white/10 rounded-3xl" />
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Card Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
              <span className="text-xl">🌉</span>
            </div>
            <span className="font-bold tracking-wider opacity-80">PUENTE</span>
          </div>

          <button
            onClick={() => setShowBalance(!showBalance)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white"
          >
            {showBalance ? (
              <Eye className="w-5 h-5" />
            ) : (
              <EyeOff className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Balance Section */}
        <div className="space-y-1 my-auto">
          <p className="text-sm font-medium text-white/60 uppercase tracking-widest">
            Saldo Disponible
          </p>
          <div className="flex items-baseline gap-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-md">
              {showBalance ? "$1,250.00" : "*******"}
            </h1>
            <span className="text-lg font-medium text-emerald-400">cUSD</span>
          </div>
        </div>

        {/* Card Actions / Footer */}
        <div className="flex justify-between items-end">
          <div className="flex gap-4">
            <ActionButton icon={ArrowUpRight} label="Enviar" onClick={onSend} />
            <ActionButton
              icon={ArrowDownLeft}
              label="Recibir"
              onClick={onReceive}
            />
            <ActionButton icon={QrCode} label="QR" onClick={onQR} />
          </div>

          <div className="text-right hidden sm:block">
            <p className="text-[10px] opacity-40 uppercase tracking-widest">
              Puente Debit
            </p>
            <CreditCard className="w-8 h-8 text-white/20 ml-auto" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ActionButton({
  icon: Icon,
  label,
  onClick,
}: {
  icon: any;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 group/btn"
    >
      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md transition-all group-hover/btn:bg-emerald-500 group-hover/btn:border-emerald-400 group-hover/btn:text-white group-active/btn:scale-95">
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-[10px] font-medium opacity-60 group-hover/btn:opacity-100 transition-opacity">
        {label}
      </span>
    </button>
  );
}
