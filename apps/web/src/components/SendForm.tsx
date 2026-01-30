"use client";

import { useState, useEffect } from "react";
import { useTransferStable } from "@/hooks/useTransferStable";
import { useSocialConnect } from "@/hooks/useSocialConnect";
import { isAddress } from "viem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Search, CheckCircle2 } from "lucide-react";

export function SendForm() {
  const [mode, setMode] = useState<"address" | "phone">("phone");

  // Inputs
  const [recipient, setRecipient] = useState(""); // Stores final 0x address
  const [phoneNumber, setPhoneNumber] = useState("");
  const [displayAddress, setDisplayAddress] = useState(""); // Address typed by user

  const [amount, setAmount] = useState("");

  // Hooks
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
    resolvedAddress,
    isLoading: isLookingUp,
    error: lookupError,
  } = useSocialConnect();

  // Reset when switching modes
  useEffect(() => {
    setRecipient("");
    setDisplayAddress("");
    setPhoneNumber("");
  }, [mode]);

  // Handle direct address input
  const handleAddressChange = (val: string) => {
    setDisplayAddress(val);
    if (isAddress(val)) setRecipient(val);
    else setRecipient("");
  };

  // Handle Phone Lookup
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
    <Card className="w-full border-green-100 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl">
          <span>🌉</span> Puente Send
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs
          defaultValue="phone"
          onValueChange={(v) => setMode(v as any)}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="phone">📱 Mobile Number</TabsTrigger>
            <TabsTrigger value="address">🛡️ Crypto Address</TabsTrigger>
          </TabsList>

          {/* MODE: PHONE NUMBER */}
          <TabsContent value="phone" className="space-y-3">
            <div className="flex gap-2">
              <Input
                placeholder="+54 9 11..."
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setRecipient(""); // Reset recipient if phone changes
                }}
              />
              <Button
                variant="outline"
                onClick={handleLookup}
                disabled={!phoneNumber || isLookingUp}
              >
                {isLookingUp ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* Lookup Result Feedback */}
            {recipient && (
              <Alert className="bg-blue-50 text-blue-800 border-blue-200 py-2">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle className="text-xs font-bold">
                  Verified Identity
                </AlertTitle>
                <AlertDescription className="text-xs font-mono truncate">
                  {recipient}
                </AlertDescription>
              </Alert>
            )}

            {lookupError && (
              <p className="text-xs text-red-500 font-medium">{lookupError}</p>
            )}
          </TabsContent>

          {/* MODE: CRYPTO ADDRESS */}
          <TabsContent value="address" className="space-y-3">
            <Input
              placeholder="0x..."
              value={displayAddress}
              onChange={(e) => handleAddressChange(e.target.value)}
              className={
                displayAddress && !recipient
                  ? "border-red-300 ring-red-300"
                  : ""
              }
            />
          </TabsContent>
        </Tabs>

        {/* AMOUNT INPUT (Shared) */}
        <div className="space-y-2 pt-2 border-t">
          <label className="text-sm font-medium">Amount (cUSD)</label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-gray-500">$</span>
            <Input
              type="number"
              className="pl-7 font-mono text-lg"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* Gas Fee Badge */}
          <div className="flex justify-between items-center">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
              Gas: Paid in cUSD 💵
            </span>
          </div>
        </div>

        {/* MAIN ACTION */}
        <Button
          className="w-full bg-green-600 hover:bg-green-700 font-semibold h-11"
          onClick={handleSend}
          disabled={!recipient || !amount || isWriting || isConfirming}
        >
          {isWriting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Confirming...
            </>
          ) : isConfirming ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
            </>
          ) : (
            "Send Money"
          )}
        </Button>

        {/* FEEDBACK & ERRORS */}
        {transferError && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {(transferError as any).shortMessage || transferError.message}
            </AlertDescription>
          </Alert>
        )}

        {isConfirmed && (
          <Alert className="bg-green-50 border-green-200 text-green-800">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Stablecoin sent!
              <a
                href={`https://celoscan.io/tx/${hash}`}
                target="_blank"
                rel="noreferrer"
                className="underline ml-1 font-bold"
              >
                View Receipt
              </a>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
