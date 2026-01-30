"use client";

import { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useBalance, useAccount } from "wagmi";
import { NetworkGuard } from "./NetworkGuard";
import { BalanceHero } from "./dashboard/BalanceHero";
import { ActionRing } from "./dashboard/ActionRing";
import { TrustBadge } from "./dashboard/TrustBadge";
import { SendForm } from "./SendForm";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowUpRight,
  ArrowDownLeft,
  Users,
  History,
  LogOut,
} from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export function UserDashboard() {
  const { user, getAccessToken, logout } = usePrivy();
  const { address } = useAccount();
  const { data: balance, isLoading: isBalanceLoading } = useBalance({
    address,
  });

  const [profile, setProfile] = useState<any>(null);
  const [view, setView] = useState<"home" | "send" | "activity">("home");

  // Fetch Profile Logic (Preserved)
  useEffect(() => {
    async function fetchProfile() {
      if (!user) return;
      try {
        const token = await getAccessToken();
        const res = await fetch("/api/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.user) setProfile(data.user);
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    }
    fetchProfile();
  }, [user, getAccessToken]);

  // Actions Map
  const actions = [
    { icon: ArrowUpRight, label: "Send", onClick: () => setView("send") },
    {
      icon: ArrowDownLeft,
      label: "Receive",
      onClick: () => alert("Scan QR (Coming Phase 4)"),
    },
    {
      icon: Users,
      label: "Contacts",
      onClick: () => alert("SocialConnect (Coming Phase 4)"),
    },
    {
      icon: History,
      label: "Activity",
      onClick: () => alert("History (Coming Phase 4)"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center pt-6 px-4 pb-20 max-w-md mx-auto relative overflow-hidden">
      {/* Header: User Profile Small Pill (Preserved for context, but simplified) */}
      <div className="w-full flex justify-center items-center mb-6">
        <div className="flex items-center gap-3 glass-deep-frost px-4 py-2 rounded-full border border-white/10 dark:border-white/5 shadow-sm">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-emerald-600 flex items-center justify-center text-primary-foreground text-xs font-bold">
            {profile?.full_name?.[0] ||
              user?.email?.address?.[0]?.toUpperCase()}
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-foreground">
              {profile?.full_name || "Puente User"}
            </span>
            <span className="text-[10px] text-muted-foreground truncate max-w-[100px]">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </span>
          </div>
        </div>
      </div>

      {/* View Switcher Container */}
      <div className="w-full flex-1 flex flex-col relative z-20">
        {view === "home" && (
          <>
            {/* 1. Glass Vault Hero */}
            <BalanceHero
              cUSD={balance ? parseFloat(balance.formatted).toFixed(2) : "0.00"}
              isLoading={isBalanceLoading}
            />

            {/* 2. Action Rings Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 mb-8 px-2 w-full max-w-sm mx-auto">
              {actions.map((action, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <ActionRing
                    icon={action.icon}
                    label={
                      ""
                    } /* Remove label from component if we put it outside, or keep it. Let's keep strict component usage. */
                    onClick={action.onClick}
                  />
                  <span className="text-xs font-semibold tracking-wide text-foreground/80">
                    {action.label}
                  </span>
                </div>
              ))}
            </div>

            {/* 3. Recent Activity (Placeholder for Phase 4) */}
            <div className="flex-1 w-full bg-white/40 dark:bg-black/20 backdrop-blur-xl rounded-t-3xl border-t border-white/20 p-6 mt-4">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                Recent Moves
              </h3>
              <div className="flex flex-col gap-4 items-center justify-center h-full text-muted-foreground/50 text-sm">
                <History className="w-8 h-8 mb-2 opacity-20" />
                No recent transactions
              </div>
            </div>
          </>
        )}

        {view === "send" && (
          <div className="space-y-4">
            <button
              onClick={() => setView("home")}
              className="text-sm text-muted-foreground hover:text-primary mb-2 flex items-center gap-1"
            >
              ← Back to Vault
            </button>
            <SendForm />
          </div>
        )}
      </div>
    </div>
  );
}
