import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FriendsMarquee from "../components/FriendsMarquee";
import HeroSection from "../components/Laravel/HeroSection";
import ServicesSection from "../components/Laravel/ServicesSection";
import IndustriesSection from "../components/Laravel/IndustriesSection";
import MernServicesSection from "../components/Laravel/MernServicesSection";
import CaseStudiesSection from "../components/Laravel/CaseStudiesSection";
import ContactSection from "../components/Laravel/ContactSection";
import LanguageServicesSection from "@/components/Laravel/LanguageServicesSection";
import FAQ from "../components/FAQ";
import ConversationSection from "../components/ConversationSection";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function MernStack() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register any global animations or ScrollTriggers

    return () => {
      // Cleanup all animations and ScrollTriggers when component unmounts
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

  type ServiceItem = {
    title: string;
    description: string;
  };
  const services = [
    {
      title: "Custom Web Application Development",
      description:
        "Whether it's a SaaS platform, enterprise dashboard, or content management system, we deliver high-performing solutions.",
    },
    {
      title: "MERN-Based Progressive Web Apps (PWAs)",
      description:
        "Build mobile-like web apps with our PWA solutions. We use React.js for the frontend and Node.js on the backend to craft swift, installable, and offline-ready applications.",
    },
    {
      title: "AI & Real-Time App Integration",
      description:
        "Leverage the real strength of real-time with MERN. We are experts at developing live chat features and real-time dashboards.",
    },
    {
      title: "Cloud-Native MERN Applications",
      description:
        "We develop installable MERN stack apps optimized for deployment on Azure, AWS, or Google Cloud. Our solutions are designed with containerization and CI/CD pipelines to guarantee performance, flexibility, and easy scaling.",
    },
    {
      title: "API-First Architecture & Microservices",
      description:
        "We are experts at building RESTful and GraphQL APIs using Express and Node.js, fostering easy integration and seamless multi-platform support.",
    },
  ];
  // Industries content for MERN Stack page
  const industries = [
    {
      title: "Healthcare",
      description:
        "Revolutionize patient care with smart health solutions. We build AI-driven diagnostics, virtual consultations, automated medical workflows, and HIPAA-compliant patient portals.",
    },
    {
      title: "E-commerce",
      description:
        "We deliver unique, conversion-focused digital shopping experiences with endless commerce, multi-vendor e-stores, real-time inventory tracking, and lightning-fast checkouts — all backed by secure transactions.",
    },
    {
      title: "FinTech",
      description:
        "Automate financial services with real-time analytics, smart investment tools, AI-powered fraud detection, and uninterrupted digital banking platforms engineered for trust, transparency, and compliance.",
    },
    {
      title: "SaaS & Enterprise Automation",
      description:
        "Streamline processes with scalable SaaS platforms, real-time BI dashboards, business-oriented automation, and integrated workflows — developed for productivity and high results.",
    },
    {
      title: "Media, OTT & Streaming",
      description:
        "Launch AI-powered entertainment platforms with seamless video delivery, HD streaming, AI-based content discovery, and immersive digital media experiences adaptive for all devices.",
    },
    {
      title: "Startups & Tech Innovators",
      description:
        "Fuel your business growth with lean MVPs, latest backend systems, generative AI integrations, and cloud-native solutions crafted to overwhelm, adapt, and dominate competitive markets.",
    },
  ];

  // FAQ content specific to MERN Stack page
  const faqData = [
    {
      id: 1,
      question: "What is the future of MERN Stack development?",
      answer:
        "The MERN stack is a leading technology featuring serverless architecture, microservices, AI integrations, and DevOps. MERN stack developers utilize these facilities to develop scalable and innovative applications.",
    },
    {
      id: 2,
      question: "What are the meanings of MERN Stack?",
      answer:
        "MERN stands for four different technologies: MongoDB, Express, React, and Node.js. It is an open-source set of technologies that leverage JavaScript for both the browser and server-side of a web application.",
    },
    {
      id: 3,
      question: "Is the MERN stack cross-platform?",
      answer:
        "MERN, with its JavaScript-based components, is very effective at developing different applications that work seamlessly across platforms.",
    },
    {
      id: 4,
      question: "What is the significance of the MERN Stack?",
      answer:
        "MERN stack facilitates the development of a full-stack JavaScript application, allowing the frontend and backend to work together to furnish a complete user experience.",
    },
    {
      id: 5,
      question: "How can I hire your MERN Stack services?",
      answer: "We offer full-time, part-time, and project-based services.",
    },
  ];

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: [
            "Build Next-Gen Web",
            "Applications With MERN",
            "Stack Excellence",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/mern.png"
        description="Build future-ready, interactive, and innovative web applications using the powerful synergy of Express.js, MongoDB, React, and Node.js."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee 
        title="Technologies We Use"
        techRow1={[
          "MongoDB",
          "Express.js",
          "React",
          "Node.js",
          "Next.js",
        ]}
        techRow2={[
          "TypeScript",
          "JavaScript",
          "GraphQL",
          "REST API",
          "Mongoose",
          "Prisma",
        ]}
        techRow3={[
          "Docker",
          "Kubernetes",
          "Vite",
          "Webpack",
          "Jest",
          "Playwright",
          "AWS",
          "CI/CD",
        ]}
      />

      {/* What Makes Our Laravel Services Stand Out Section */}
      <ServicesSection
        title="Explore What Else We Offer In MERN Stack Development"
        highlightedWords={[
          { text: "What", position: "after" },
          { text: "Else", position: "whole" },
          { text: "In", position: "whole" },
          { text: "MERN", position: "whole" },
          { text: "lopment", position: "after" },
        ]}
        firstColumnContent={{
          text: "As a web design and development firm, we don't just build solutions—we engineer future-ready digital ecosystems. Our MERN Stack services, delivered with technical precision, offer creative UIs, responsive UXs, and ultra-high performance.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "Using the latest technologies like MongoDB, Express.js, React.js, and Node.js, our experts craft intelligent, innovative web apps that grow with your business.",
          height: "h-16 sm:h-20 lg:h-[100px]",
        }}
        accentColor="#AB322C"
      />

  {/* Industries We Cover Section */}
  <IndustriesSection industries={industries} />

      {/* MERN Stack Services Sticky Scroll Section */}
      {/* <MernServicesSection /> */}

      <LanguageServicesSection
        sectionTitle={{
          mainText:
            "Explore What Else We Offer In Mernstack Development Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "What", position: "after" },
            { text: "Services", position: "after" },
            { text: "Mernstack", position: "after" },
            // { text: "ment", position: "after" },
          ],
        }}
        serviceItems={services}
        backgroundColor="#040404"
        accentColor="#AB322C"
        mainTextColor="white"
      />

      {/* Top Case Studies Section */}
      <CaseStudiesSection />

      {/* Contact Form Section */}
      <ContactSection />

      <FAQ faqData={faqData} />

      <ConversationSection
        title="Hire Our Experts For MERN Stack Services Today"
        highlightedWords={[
          { text: "For", position: "after" },
          { text: "MERN", position: "after" },
          { text: "Stack", position: "after" },
          { text: "Services", position: "after" },
          { text: "Today", position: "after" },
        ]}
        description="We build blazing-fast, intelligent platforms that help your business grow immensely."
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
