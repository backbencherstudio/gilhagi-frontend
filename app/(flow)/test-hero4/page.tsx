import ContactSection from "@/components/pages/homepage/ContactSection";
import Hero from "@/components/pages/homepage/HeroSection";
import TrustedCompany from "@/components/pages/homepage/TrustedCompany";
import FeatureSection from "@/components/pages/homepage/FeatureSection";
import HowItWorks from "@/components/pages/homepage/HowItWorks";
import Testimonials from "@/components/pages/homepage/Testimonials";
import AboutUs from "@/components/pages/homepage/AboutUs";
import { TestHeroBgImage } from "../test-hero2/page";

export default function TestHero() {
    return (
        <div>

            <TestHeroBgImage bgImage="hero-banner5.jpg" />
            <TrustedCompany />
            <FeatureSection />

        </div>
    );
}