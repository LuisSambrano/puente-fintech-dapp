"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

export default function PartnersCarousel() {
  const partners = [
    "Celo",
    "Privy",
    "Supabase",
    "Vercel",
    "Next.js",
    "MiniPay",
    "Valora",
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-black/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/40">
          Powered by best-in-class infrastructure
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-12 md:gap-24 opacity-50 hover:opacity-100 transition-opacity duration-300">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-12 md:gap-24 items-center">
              {partners.map((partner) => (
                <div
                  key={`${setIndex}-${partner}`}
                  className="flex items-center gap-3"
                >
                  {/* Placeholder for Logos - Replacing with Stylized Text for now if SVGs missing */}
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 font-mono tracking-tight grayscale brightness-200">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Gradients for smooth fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </section>
  );
}
