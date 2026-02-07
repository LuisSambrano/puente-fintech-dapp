"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { useState, useEffect } from "react";
import { useTransferStable } from "@/lib/hooks/useTransferStable";
import { useSocialConnect } from "@/lib/hooks/useSocialConnect";
import { isAddress } from "viem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Loader2,
  Search,
  CheckCircle2,
  Send,
  Smartphone,
  Wallet,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SendForm() {
  const [mode, setMode] = useState<"address" | "phone">("phone");
  const [recipient, setRecipient] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [displayAddress, setDisplayAddress] = useState("");
  const [amount, setAmount] = useState("");

  const {
    transferStable,
    hash,
    isWriting,
    isConfirming,
    isConfirmed,
    error: transferError,
  } = useTransferStable();

  const {
    lookupPhone,
    isLoading: isLookingUp,
    error: lookupError,
  } = useSocialConnect();

  useEffect(() => {
    setRecipient("");
    setDisplayAddress("");
    setPhoneNumber("");
  }, [mode]);

  const handleAddressChange = (val: string) => {
    setDisplayAddress(val);
    if (isAddress(val)) setRecipient(val);
    else setRecipient("");
  };

  const handleLookup = async () => {
    if (!phoneNumber) return;
    const addr = await lookupPhone(phoneNumber);
    if (addr) setRecipient(addr);
  };

  const handleSend = async () => {
    if (!recipient || !amount) return;
    try {
      await transferStable(recipient, amount);
    } catch (err) {
      console.error("Send failed:", err);
    }
  };

  return (
    <div className="w-full glass-deep-frost p-6 rounded-3xl border border-white/10 shadow-xl overflow-hidden relative">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <Send className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-foreground">Enviar Dinero</h2>
      </div>

      <Tabs
        defaultValue="phone"
        onValueChange={(v) => setMode(v as any)}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 mb-6 bg-black/5 dark:bg-white/5 p-1 rounded-full">
          <TabsTrigger
            value="phone"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
          >
            <Smartphone className="w-4 h-4 mr-2" />
            Celular
          </TabsTrigger>
          <TabsTrigger
            value="address"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
          >
            <Wallet className="w-4 h-4 mr-2" />
            Billetera
          </TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          {mode === "phone" ? (
            <motion.div
              key="phone"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="flex gap-2">
                <Input
                  placeholder="+58 412..."
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    setRecipient("");
                  }}
                  className="bg-white/5 border-white/10 rounded-xl h-12 focus:border-primary/50"
                />
                <Button
                  variant="outline"
                  onClick={handleLookup}
                  disabled={!phoneNumber || isLookingUp}
                  className="h-12 w-12 rounded-xl border-white/10 bg-white/5 hover:bg-primary/20"
                >
                  {isLookingUp ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <Search className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="address"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Input
                placeholder="0x..."
                value={displayAddress}
                onChange={(e) => handleAddressChange(e.target.value)}
                className={`bg-white/5 border-white/10 rounded-xl h-12 focus:border-primary/50 ${
                  displayAddress && !recipient
                    ? "border-red-400/50 text-red-400"
                    : ""
                }`}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Verification Badge */}
        {recipient && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="mt-3 flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-xs font-mono truncate">{recipient}</span>
          </motion.div>
        )}

        {/* Error Badge */}
        {lookupError && (
          <p className="text-xs text-red-400 mt-2 ml-2">{lookupError}</p>
        )}
      </Tabs>

      {/* Amount Input */}
      <div className="mt-6 space-y-2">
        <label className="text-sm font-medium text-muted-foreground ml-1">
          Monto (cUSD)
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-light text-muted-foreground">
            $
          </span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full bg-transparent border-b border-white/10 text-4xl font-bold py-2 pl-8 focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/20"
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        className="w-full mt-8 h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
        onClick={handleSend}
        disabled={!recipient || !amount || isWriting || isConfirming}
      >
        {isWriting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Confirmando...
          </>
        ) : isConfirming ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Procesando...
          </>
        ) : (
          "Confirmar Envío"
        )}
      </Button>

      {/* Success Feedback */}
      {isConfirmed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 z-50 glass-deep-frost flex flex-col items-center justify-center p-6 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-4 shadow-xl shadow-emerald-500/30">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            ¡Envío Exitoso!
          </h3>
          <p className="text-muted-foreground mb-6">
            Has enviado ${amount} cUSD
          </p>
          <a
            href={`https://celoscan.io/tx/${hash}`}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline text-sm"
          >
            Ver en Explorador
          </a>
          <Button
            variant="ghost"
            className="mt-8"
            onClick={() => window.location.reload()} // Simple reset
          >
            Realizar otro envío
          </Button>
        </motion.div>
      )}

      {/* Transaction Error */}
      {transferError && (
        <p className="text-xs text-red-400 text-center mt-4">
          {(transferError as any).shortMessage || transferError.message}
        </p>
      )}
    </div>
  );
}
