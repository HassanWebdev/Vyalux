import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "../components/Laravel/HeroSection";
import CaseStudiesSection from "../components/Laravel/CaseStudiesSection";
import ContactSection from "../components/Laravel/ContactSection";
import Footer from "../components/Footer";
import DevelopmentProcess from "@/components/DevelopmentProcess";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      gsap.killTweensOf("*");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleButtonHover = () => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        width: "100%",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleButtonLeave = () => {
    if (overlayRef.current) {
      const isSmallScreen = window.innerWidth < 640;
      const initialWidth = isSmallScreen
        ? "55px"
        : window.innerWidth < 1024
          ? "60px"
          : "68px";
      gsap.to(overlayRef.current, {
        width: initialWidth,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <div className="bg-[#040404] text-white overflow-hidden">
      <HeroSection
        title={{
          lines: ["From Vision to Reality"],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/howitworks.png"
        description="From the first spark of an idea to establishing your MVP and scaling beyond — we unite with you at every step to transform concepts into high-impact, future-ready solutions."
      />

      <DevelopmentProcess />

      <CaseStudiesSection />

      <ContactSection />

      <Footer />
    </div>
  );
}
