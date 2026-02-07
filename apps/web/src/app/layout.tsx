/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/landing/Header";
import { FloatingFooter } from "@/components/FloatingFooter";
import { Providers } from "@/components/Providers";
import { NetworkGuard } from "@/components/NetworkGuard";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://puente.lat"),
  title: {
    default: "Puente | Remittances Without Intermediaries",
    template: "%s | Puente",
  },
  description:
    "Send money to Venezuela for <$0.01 in 5 seconds. No intermediaries. Built on Celo blockchain.",
  applicationName: "Puente App",
  authors: [{ name: "Puente Team", url: "https://puente.lat" }],
  keywords: [
    "celo",
    "minipay",
    "remittances",
    "stablecoins",
    "venezuela",
    "cusd",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: "https://puente.lat",
    siteName: "Puente",
    title: "Puente: Remesas Sin Intermediarios",
    description:
      "$3.8B enviados anualmente. 15% perdido en fees. Ya no más. Remesas blockchain para Venezuela.",
    images: [
      {
        url: "/og-preview.jpg", // We need to ensure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "Puente Dashboard Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puente: Remittances Without Intermediaries",
    description:
      "<$0.01 fees • 5 seconds • Transparent blockchain. Send money to Venezuela.",
    creator: "@puente_app",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  manifest: "/manifest.json", // We will generate this via route or file
};

import MobileBottomNav from "@/components/landing/MobileBottomNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col bg-background selection:bg-primary/20 pb-16 lg:pb-0">
          <Providers>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark" // Force Dark Mode
              enableSystem={false} // Disable System
              disableTransitionOnChange
            >
              <NetworkGuard>
                <Header />
                <main className="flex-1">{children}</main>
                <MobileBottomNav />
                {/* <FloatingFooter /> */}
              </NetworkGuard>
            </ThemeProvider>
          </Providers>
        </div>
      </body>
    </html>
  );
}
