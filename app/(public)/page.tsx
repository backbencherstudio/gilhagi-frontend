import FeatureSection from "@/components/pages/homepage/FeatureSection";
import Hero from "@/components/pages/homepage/HeroSection";
import HowItWorks from "@/components/pages/homepage/HowItWorks";
import TrustedCompany from "@/components/pages/homepage/TrustedCompany";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <TrustedCompany />
      <FeatureSection />
      <HowItWorks/>
    </div>
  );
}
