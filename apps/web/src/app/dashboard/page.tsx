"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  History,
  LogOut,
  Eye,
  EyeOff,
  QrCode,
} from "lucide-react";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { Button } from "@/components/ui/button";
import { SendForm } from "@/features/transactions/components/SendForm";
import { BalanceCard } from "@/features/dashboard/components/BalanceCard";

// Mock data for initial implementation
const TRANSACTIONS = [
  {
    id: 1,
    type: "receive",
    counterparty: "Maria G.",
    amount: "50.00",
    currency: "cUSD",
    date: "Hoy, 10:23 AM",
  },
  {
    id: 2,
    type: "send",
    counterparty: "Pago Móvil",
    amount: "1,200.00",
    currency: "VES",
    date: "Ayer, 4:15 PM",
  },
  {
    id: 3,
    type: "receive",
    counterparty: "MiniPay Reward",
    amount: "0.10",
    currency: "cUSD",
    date: "Ayer, 9:00 AM",
  },
];

export default function DashboardPage() {
  const { ready, authenticated, user, logout } = usePrivy();
  const router = useRouter();
  const [showBalance, setShowBalance] = useState(true);
  const [view, setView] = useState<"home" | "send">("home");

  // Protected route logic
  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/");
    }
  }, [ready, authenticated, router]);

  if (!ready || !authenticated) {
    return null; // Or a loading spinner
  }

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-background text-foreground">
      <AmbientBackground />

      <div className="relative z-10 container mx-auto px-4 py-6 flex flex-col gap-6 max-w-md md:max-w-2xl">
        {/* Header */}
        <header className="flex justify-between items-center py-2">
          <div className="flex items-center gap-3">
            {/* Avatar Placeholder */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-emerald-400 p-[2px]">
              <div className="w-full h-full rounded-full bg-black/50 flex items-center justify-center text-xs font-bold">
                {user?.email?.address?.substring(0, 2).toUpperCase() || "YO"}
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Hola,</p>
              <h2 className="font-semibold text-lg leading-none">
                {user?.email?.address?.split("@")[0] || "Usuario"}
              </h2>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={logout}
            className="rounded-full hover:bg-red-500/10 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-5 h-5" />
          </Button>
        </header>

        {/* Dynamic Content Area */}
        {view === "home" ? (
          <>
            <BalanceCard
              onSend={() => setView("send")}
              onReceive={() => console.log("Receive clicked")}
              onQR={() => console.log("QR clicked")}
            />

            {/* Transactions */}
            <section>
              <div className="flex justify-between items-center mb-4 px-2">
                <h3 className="font-semibold text-lg">Actividad Reciente</h3>
                <button className="text-sm text-primary hover:underline">
                  Ver todo
                </button>
              </div>

              <div className="space-y-3">
                {TRANSACTIONS.map((tx, idx) => (
                  <motion.div
                    key={tx.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-2xl glass-frost border border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          tx.type === "receive"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-orange-500/20 text-orange-400"
                        }`}
                      >
                        {tx.type === "receive" ? (
                          <ArrowDownLeft className="w-5 h-5" />
                        ) : (
                          <ArrowUpRight className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{tx.counterparty}</p>
                        <p className="text-xs text-muted-foreground">
                          {tx.date}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-medium ${
                          tx.type === "receive"
                            ? "text-emerald-400"
                            : "text-foreground"
                        }`}
                      >
                        {tx.type === "receive" ? "+" : "-"}${tx.amount}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {tx.currency}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full"
          >
            <button
              onClick={() => setView("home")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4 pl-1"
            >
              <ArrowDownLeft className="w-4 h-4 rotate-90" /> Volver al Inicio
            </button>
            <SendForm />
          </motion.div>
        )}
      </div>

      {/* Bottom Nav Placeholder (MiniPay style) */}
      <nav className="fixed bottom-0 left-0 w-full glass-deep-frost border-t border-white/10 pb-6 pt-4 px-8 z-50 flex justify-between items-center md:hidden">
        <NavItem icon={Wallet} label="Inicio" active />
        <NavItem icon={History} label="Actividad" />
        <div className="w-12" /> {/* Spacer for FAB if needed */}
        <NavItem icon={LogOut} label="Perfil" />
      </nav>
    </div>
  );
}

function ActionButton({
  icon: Icon,
  label,
  active = false,
  onClick,
}: {
  icon: any;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 rounded-2xl transition-all border ${
        active
          ? "bg-primary/20 border-primary/30 text-primary hover:bg-primary/30"
          : "bg-white/5 border-white/10 hover:bg-white/10 text-muted-foreground hover:text-foreground"
      }`}
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}

function NavItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: any;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-1 ${
        active ? "text-primary" : "text-muted-foreground"
      }`}
    >
      <Icon className={`w-6 h-6 ${active ? "fill-current" : ""}`} />
      <span className="text-[10px] font-medium">{label}</span>
    </div>
  );
}
