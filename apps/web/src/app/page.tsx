"use client";

import { usePrivy } from "@privy-io/react-auth";
import { LoginButton } from "@/components/LoginButton";
import { UserDashboard } from "@/components/UserDashboard";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingFeatures } from "@/components/landing/LandingFeatures";
import { InstallPrompt } from "@/components/landing/InstallPrompt";

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
      <main className="flex min-h-screen flex-col items-center p-4 bg-background transition-colors duration-300">
        <UserDashboard />
      </main>
    );
  }

  // Public/Landing View (Logged Out)
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-proximity scroll-smooth">
      <LandingHero />
      <LandingFeatures />
      <InstallPrompt />
    </main>
  );
}
