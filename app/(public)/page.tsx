import AboutUs from "@/components/pages/homepage/AboutUs";
import ContactSection from "@/components/pages/homepage/ContactSection";
import FeatureSection from "@/components/pages/homepage/FeatureSection";
import Hero from "@/components/pages/homepage/HeroSection";
import HowItWorks from "@/components/pages/homepage/HowItWorks";
import Testimonials from "@/components/pages/homepage/Testimonials";
import TrustedCompany from "@/components/pages/homepage/TrustedCompany";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <TrustedCompany />
      <FeatureSection />
      <HowItWorks/>
      <Testimonials/>
      <AboutUs/>
      <ContactSection/>
    </div>
  );
}
