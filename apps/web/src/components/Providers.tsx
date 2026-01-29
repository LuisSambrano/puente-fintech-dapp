"use client";

import {PrivyProvider} from '@privy-io/react-auth';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {WagmiProvider, createConfig, http} from 'wagmi';
import {celo, celoSepolia} from 'viem/chains';

const queryClient = new QueryClient();

const wagmiConfig = createConfig({
  chains: [celo, celoSepolia],
  transports: {
    [celo.id]: http(),
    [celoSepolia.id]: http(),
  },
  ssr: true,
});

import { useUserSync } from '@/hooks/useUserSync';

function SyncWrapper({children}: {children: React.ReactNode}) {
  useUserSync();
  return <>{children}</>;
}

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
      config={{
        loginMethods: ['email', 'sms', 'google', 'wallet'],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          logo: 'https://auth.privy.io/logos/privy-logo.png',
        },
        supportedChains: [celo, celoSepolia],
        embeddedWallets: {
          ethereum: {
            createOnLogin: 'users-without-wallets',
          }
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          <SyncWrapper>
            {children}
          </SyncWrapper>
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}

