"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { PrivyProvider } from "@privy-io/react-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig, http } from "wagmi";
import { celo, celoSepolia } from "viem/chains";

const queryClient = new QueryClient();

const wagmiConfig = createConfig({
  chains: [celo, celoSepolia],
  transports: {
    [celo.id]: http(),
    [celoSepolia.id]: http(),
  },
  ssr: true,
});

import { useUserSync } from "@/lib/hooks/useUserSync";

function SyncWrapper({ children }: { children: React.ReactNode }) {
  useUserSync();
  return <>{children}</>;
}

// Get Privy App ID with fallback for build-time safety
const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

export function Providers({ children }: { children: React.ReactNode }) {
  // Prevent PrivyProvider from throwing during static prerendering
  // when environment variables are not available or invalid (e.g. CI placeholder)
  const isInvalidAppId = !PRIVY_APP_ID || PRIVY_APP_ID === "test-app-id";

  if (isInvalidAppId) {
    console.warn(
      `[Providers] NEXT_PUBLIC_PRIVY_APP_ID is missing or invalid (${PRIVY_APP_ID}), skipping PrivyProvider`
    );
    return (
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>
      </QueryClientProvider>
    );
  }

  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        loginMethods: ["email", "wallet"],
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "https://auth.privy.io/logos/privy-logo.png",
        },
        supportedChains: [celo, celoSepolia],
        embeddedWallets: {
          ethereum: {
            createOnLogin: "users-without-wallets",
          },
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          <SyncWrapper>{children}</SyncWrapper>
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}
