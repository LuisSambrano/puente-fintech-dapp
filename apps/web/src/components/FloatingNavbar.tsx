"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ConnectButton } from "@/components/connect-button";
import { ModeToggle } from "./ModeToggle";

import { useMiniPay } from "@/hooks/useMiniPay";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Docs", href: "https://docs.celo.org", external: true },
];

export function FloatingNavbar() {
  const pathname = usePathname();
  const { isMiniPay } = useMiniPay();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-6 inset-x-0 mx-auto w-[90%] max-w-5xl z-50 pointer-events-none"
    >
      <div className="pointer-events-auto flex h-14 items-center justify-between px-4 rounded-full glass-deep-frost border border-white/20 dark:border-white/10 shadow-2xl">
        {/* Left: Brand & Mobile Menu */}
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full w-8 h-8 hover:bg-white/10"
              >
                <Menu className="h-4 w-4 text-foreground" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-80 glass-deep-frost border-r border-white/10"
            >
              <div className="flex items-center gap-2 mb-8">
                <span className="font-bold text-lg text-foreground">
                  Puente 🌉
                </span>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-2 text-base font-medium transition-colors hover:text-primary ${
                      pathname === link.href
                        ? "text-foreground"
                        : "text-foreground/70"
                    }`}
                  >
                    {link.name}
                    {link.external && <ExternalLink className="h-4 w-4" />}
                  </Link>
                ))}

                {/* Mobile Actions */}
                <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">
                      Appearance
                    </span>
                    <ModeToggle />
                  </div>
                  {!isMiniPay && <ConnectButton />}
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity pl-2"
          >
            <span className="font-bold text-lg tracking-tight text-foreground">
              Puente
            </span>
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-full px-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all hover:bg-white/10 ${
                pathname === link.href
                  ? "bg-white text-black shadow-sm"
                  : "text-foreground/70"
              }`}
            >
              <div className="flex items-center gap-1">
                {link.name}
                {link.external && (
                  <ExternalLink className="h-3 w-3 opacity-50" />
                )}
              </div>
            </Link>
          ))}
        </nav>

        {/* Right: Connect & Theme */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <div className="hidden sm:block">
            {!isMiniPay && <ConnectButton />}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
