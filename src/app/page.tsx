"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NumbersStrip from "@/components/NumbersStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MegaInfraSection from "@/components/MegaInfraSection";
import HealthcareEPCSection from "@/components/HealthcareEPCSection";
import GovernmentLiaisoningSection from "@/components/GovernmentLiaisoningSection";
import ApproachSection from "@/components/ApproachSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ComplianceSection from "@/components/ComplianceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PlaceholderNotice from "@/components/PlaceholderNotice";

// Fixed full-viewport 3D canvas — lazy loaded after hero text renders
const WorldScene3D = dynamic(() => import("@/components/3d/WorldScene3D"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        background: "linear-gradient(180deg, #4A7E9F 0%, #73A5C5 30%, #D4E3ED 60%, #E9E6DF 85%, #F7F5F0 100%)",
        pointerEvents: "none",
      }}
    />
  ),
});

export default function Home() {
  return (
    <>
      {/* Single fixed 3D canvas behind everything */}
      <WorldScene3D />

      {/* Navigation */}
      <Navbar />

      <main style={{ position: "relative", zIndex: 10 }}>
        {/* 1. Hero — transparent so 3D shows through */}
        <HeroSection />

        {/* 2. Numbers Strip */}
        <NumbersStrip />

        {/* 3. About + Vision + Mission */}
        <AboutSection />

        {/* 4. Core Services */}
        <ServicesSection />

        {/* 5. Mega Infrastructure — cream wash left, 3D shows right */}
        <MegaInfraSection />

        {/* 6. Healthcare EPC */}
        <HealthcareEPCSection />

        {/* 7. Government Liaisoning + Advisory */}
        <GovernmentLiaisoningSection />

        {/* 8. Approach Timeline */}
        <ApproachSection />

        {/* 9. Why Choose Infrazen */}
        <WhyChooseUsSection />

        {/* Project portfolio placeholder */}
        <div
          className="section-wash-opaque"
          style={{ paddingLeft: "max(1rem, calc(50% - 42rem))", paddingRight: "max(1rem, calc(50% - 42rem))" }}
        >
          <PlaceholderNotice
            title="Project Portfolio & Site Documentation"
            category="NDA & Client Discretion"
            note="Engineering case studies and site photography are available on request under Non-Disclosure Agreement for government tenders and formal procurement processes."
          />
        </div>

        {/* 10. Registrations & Compliance */}
        <ComplianceSection />

        {/* 11. Contact */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />
    </>
  );
}
