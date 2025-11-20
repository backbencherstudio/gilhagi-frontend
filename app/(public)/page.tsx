import FeatureSection from "@/components/pages/homepage/FeatureSection";
import Hero from "@/components/pages/homepage/HeroSection";
import TrustedCompany from "@/components/pages/homepage/TrustedCompany";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <TrustedCompany />
      <FeatureSection />
    </div>
  );
}
