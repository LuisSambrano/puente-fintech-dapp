'use client';

import { usePrivy } from '@privy-io/react-auth';
import { LoginButton } from "@/components/LoginButton";
import { UserDashboard } from "@/components/UserDashboard";

export default function Home() {
  const { ready, authenticated } = usePrivy();

  // Loading State
  if (!ready) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="animate-pulse">Loading Puente...</div>
      </main>
    );
  }

  // Dashboard View (Logged In)
  if (authenticated) {
    return (
      <main className="flex min-h-screen flex-col items-center p-4 pt-10 bg-slate-50 dark:bg-slate-950">
        <h1 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Puente 🌉</h1>
        <UserDashboard />
      </main>
    );
  }

  // Public/Landing View (Logged Out)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Remesas P2P con MiniPay
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 before:blur-2xl after:absolute after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-to-conic after:from-sky-900 after:via-blue-800 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
         <div className="flex flex-col gap-6 items-center z-10">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Puente
            </h1>
            <p className="text-muted-foreground text-center max-w-[400px]">
              Envía dinero a Venezuela rápido, seguro y con bajas comisiones usando Celo.
            </p>
            <LoginButton />
         </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
         {/* Footer items */}
      </div>
    </main>
  );
}
