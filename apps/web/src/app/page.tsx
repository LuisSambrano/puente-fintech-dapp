"use client";

import { usePrivy } from "@privy-io/react-auth";
import Header from "@/components/marketing/Header";
import MarqueeBanner from "@/components/marketing/MarqueeBanner";
import Hero from "@/components/marketing/Hero";
import ValueProp from "@/components/marketing/ValueProp";
import ThreeProducts from "@/components/marketing/ThreeProducts";
import PartnersCarousel from "@/components/marketing/PartnersCarousel";
import ProcessSteps from "@/components/marketing/ProcessSteps";
import Testimonial from "@/components/marketing/Testimonial";
import Timeline from "@/components/marketing/Timeline";
import FinalCTA from "@/components/marketing/FinalCTA";
import Footer from "@/components/marketing/Footer";

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

      <MarqueeBanner />
      <Hero />
      <ValueProp />
      <ThreeProducts />
      <PartnersCarousel />
      <ProcessSteps />
      <Testimonial />
      <Timeline />
      <FinalCTA />
      <Footer />
    </div>
  );
}
