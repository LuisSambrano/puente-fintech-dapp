import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/marketing/Header";
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
    default: "Puente | The Glass Vault",
    template: "%s | Puente",
  },
  description:
    "Financial Dignity for the Venezuelan Diaspora. Send, Save, and Settle in cUSD with the security of Celo L2.",
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
    title: "Puente: Tu Bóveda de Cristal",
    description:
      "Envía y ahorra en dólares digitales sin fricción. Construido sobre Celo.",
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
    title: "Puente: Financial Dignity",
    description: "Zero fees. Instant settlement. The future of remittances.",
    creator: "@puente_app",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  manifest: "/manifest.json", // We will generate this via route or file
};

import MobileBottomNav from "@/components/marketing/MobileBottomNav";

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
