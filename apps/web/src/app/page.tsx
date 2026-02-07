"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { usePrivy } from "@privy-io/react-auth";
import Header from "@/components/landing/Header";
import LandingHero from "@/components/landing/LandingHero";
import ServicesGrid from "@/components/landing/ServicesGrid";
import InfrastructurePartners from "@/components/landing/InfrastructurePartners";
import AnnouncementsBar from "@/components/landing/AnnouncementsBar";
import CallToAction from "@/components/landing/CallToAction";
import Testimonial from "@/components/landing/Testimonial";
import Timeline from "@/components/landing/Timeline";
import Footer from "@/components/landing/Footer";

export default function Home() {
  const { ready, authenticated } = usePrivy();

  // Loading State
  if (!ready) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <div className="animate-pulse text-[#2ECC71] font-mono tracking-widest">
          INITIALIZING PROTOCOL...
        </div>
      </main>
    );
  }

  // Dashboard View (Logged In)
  // In a real implementation this would likely be handled by middleware or a separate layout
  if (authenticated) {
    import("next/navigation").then(({ redirect }) => redirect("/dashboard"));
    return null;
  }

  // Public/Landing View (Logged Out)
  return (
    <div className="bg-black min-h-screen selection:bg-[#2ECC71]/30 text-white">
      {/* 
        Header is already in Layout.tsx, but checks if we should duplicate or remove from layout.
        The spec has Header in Page.tsx (line 950), but Layout.tsx is better for persistence.
        Since I replaced FloatingNavbar in Layout.tsx with Header.tsx, I should NOT render it here again 
        UNLESS I want it only on the landing page.
        
        Given the structure, I will let Layout handle Header to keep it consistent across pages 
        if there are others (like /privacy), OR I can just keep it implicitly.
        
        Wait, if Layout has it, then Home shouldn't. 
        However, for the specific "Pump.fun" structure, Header is often part of the main flow.
        I'll assume Layout.tsx handles the Header to avoid double rendering.
      */}

      {/* 
        NOTE: Header is currently in `app/layout.tsx`. 
        So we start with Marquee.
      */}

      <AnnouncementsBar />
      <LandingHero />
      <InfrastructurePartners />
      <ServicesGrid />
      <CallToAction />
      <Testimonial />
      <Timeline />
      <CallToAction />
      <Footer />
    </div>
  );
}
