"use client";

import { useAccount, useSwitchChain } from "wagmi";
import { useEffect, useState } from "react";
import { celoSepolia } from "viem/chains";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, AlertTriangle } from "lucide-react";

export function NetworkGuard({ children }: { children: React.ReactNode }) {
  const { chainId, isConnected } = useAccount();
  const { switchChain, isPending } = useSwitchChain();
  const [isClient, setIsClient] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  const TARGET_CHAIN_ID = celoSepolia.id;

  // If not connected or on correct chain, render children (Privy handles initial connect)
  // We only block if Connected AND Wrong Chain
  if (!isClient) return <>{children}</>;

  if (isConnected && chainId !== TARGET_CHAIN_ID) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <Card className="w-full max-w-md border-yellow-500 shadow-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
            <CardTitle className="text-2xl">Wrong Network</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-muted-foreground">
              Puente Labs operates exclusively on <strong>Celo Sepolia</strong>.
              Please switch your wallet to continue.
            </p>

            <div className="p-4 bg-muted rounded-lg font-mono text-xs text-left">
              <p>Current Chain ID: {chainId}</p>
              <p>Required Chain ID: {TARGET_CHAIN_ID}</p>
            </div>

            <Button
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold h-12 text-lg"
              onClick={() => switchChain({ chainId: TARGET_CHAIN_ID })}
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Switching...
                </>
              ) : (
                "Switch to Celo Sepolia"
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
}
