"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calculator, BarChart3, Play } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Simular", href: "#calculator", icon: Calculator },
  { name: "Impacto", href: "#stats", icon: BarChart3 },
  { name: "Demo", href: "#demo", icon: Play },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  // Only show on mobile/tablet (hidden on lg screens)
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-zinc-800 bg-black/80 backdrop-blur-lg pb-safe lg:hidden">
      <nav className="grid h-16 grid-cols-4 items-center justify-items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href; // Simple check, might need hash check for anchors if on same page

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center space-y-1 ${
                isActive ? "text-primary" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <Icon className="h-6 w-6" strokeWidth={isActive ? 3 : 2} />
              <span className="text-[10px] font-medium">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="bottom-nav-indicator"
                  className="absolute bottom-0 h-1 w-8 rounded-t-full bg-primary"
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
