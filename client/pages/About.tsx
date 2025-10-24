import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FriendsMarquee from "@/components/FriendsMarquee";
import HeroSection from "@/components/Laravel/HeroSection";
import ServicesSection from "@/components/Laravel/ServicesSection";
import IndustriesSection from "@/components/Laravel/IndustriesSection";
import CaseStudiesSection from "@/components/Laravel/CaseStudiesSection";
import ContactSection from "@/components/Laravel/ContactSection";
import LanguageServicesSection from "@/components/Laravel/LanguageServicesSection";
import OurPurposeSection from "@/components/OurPurposeSection";
import FAQ from "@/components/FAQ";
import ConversationSection from "@/components/ConversationSection";
import Footer from "@/components/Footer";
import KnowOurLeaders from "@/components/KnowLeader";
import OurAmbition from "@/components/OurAmbition";
import OurBelief from "@/components/OurBlief";

gsap.registerPlugin(ScrollTrigger);

export default function DedicatedTeam() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Your animations here
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleButtonHover = () => {
    if (window.innerWidth >= 1024) {
      gsap.to(".btn-blob", {
        scale: 1.05,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleButtonLeave = () => {
    if (window.innerWidth >= 1024) {
      gsap.to(".btn-blob", {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  type ServiceItem = {
    title: string;
    description: string;
  };
  const services = [
    {
      title: "QA Testing Services",
      description:
        "Broad strategies to detect bugs, speed bottlenecks, and usability issues before launch.",
    },
    {
      title: "QA Software Testing Services",
      description:
        "End-to-end testing, including features, regression, and exploratory methods for reliable software performance.",
    },
    {
      title: "Performance Testing Services",
      description:
        "Ensure system stability and performance under peak load situations with stress and load testing.",
    },
    {
      title: "Manual Testing Services",
      description:
        "Extensive, user-focused testing to unveil real-world issues that automation may overlook.",
    },
    {
      title: "Automation Testing Services",
      description:
        "Enhance testing cycles and improve accuracy with the latest automation frameworks like Selenium and Appium.",
    },
    {
      title: "QA & Testing Consulting",
      description:
        "Specialists' guidance to develop or optimize QA team's tools and processes for lasting quality.",
    },
  ];
  const faqData = [
    {
      id: 1,
      question: "What types of platforms do you test?",
      answer:
        "The dedicated team model provides you with a full-time development team that works exclusively on your project. You get direct access to each team member and maintain full control over the development process, while we handle administrative tasks, workspace, equipment, and HR matters.",
    },
    {
      id: 2,
      question: "Do you offer manual and automated testing services?",
      answer:
        "Our dedicated teams can include a wide range of specialists such as front-end and back-end developers, UI/UX designers, QA engineers, DevOps specialists, business analysts, project managers, and more. We'll customize the team composition based on your project requirements.",
    },
    {
      id: 3,
      question: "Do you support ongoing QA needs or just one-time testing?",
      answer:
        "Depending on your requirements and team size, we can typically assemble a basic team within 2-4 weeks. For specialized roles or larger teams, it may take longer to ensure we find the perfect match for your needs.",
    },
    {
      id: 4,
      question: "How can I hire your services?",
      answer:
        "To hire our dedicated team services, start by contacting us through our website contact form or email. We'll schedule a discovery call to understand your project needs, team requirements, and business goals. After this assessment, we'll propose a team structure and provide detailed information about the specialists, timeline, and pricing. Once you approve, we'll begin assembling your team and start the onboarding process.",
    },
  ];

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: ["About VYALUX", " Where Ideas Meet Execution"],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/about1.png"
        description="Since 2017, VYALUX has been fueling businesses by converting ambitious
ideas into highly valuable digital products. Having nearly a decade of background in tech
innovation, we know that real success doesn’t come from just coding — it comes from
developing creative solutions that solve real-world problems and advance with purpose."
      />

      <LanguageServicesSection
        sectionTitle={{
          mainText: "Who We Are?",
          highlightedWords: [
            { text: "Are?", position: "after" },
            // { text: "?", position: "after" },
          ],
        }}
        serviceItems={services}
        isVideoEnable={true}
        backgroundColor="#040404"
        accentColor="#AB322C"
        mainTextColor="white"
      />

      {/* Our Purpose Section */}
      <OurPurposeSection backgroundColor="#040404" accentColor="#AB322C" />
      <KnowOurLeaders />
      <OurAmbition />
      <OurBelief />

      <ConversationSection
        title="Transform your idea into a success story With Us"
        highlightedWords={[
          { text: "idead", position: "after" },
          { text: "into", position: "after" },
          { text: "a", position: "after" },
          { text: "with", position: "after" },
          { text: "us", position: "after" },
        ]}
        description="Our professional team includes SEO specialists who supervise platforms with thousands of daily users. We focus on scalability, safety, and performance."
        buttonText="connect with experts"
        backgroundColor="#040404"
        textColor="white"
        highlightColor="#AB322C"
        buttonBackgroundColor="#AB322C"
      />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
