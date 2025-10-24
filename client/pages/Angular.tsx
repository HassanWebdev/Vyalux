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

export default function Angular() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register any global animations or ScrollTriggers

    return () => {
      // Cleanup all animations and ScrollTriggers when component unmesounts
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
      title: "Custom API Integration & Data Handling",
      description:
        "Smoothly integrate RESTful and GraphQL APIs into your Angular web applications for uninterrupted and secure data processing between services, databases, and third-party tools.",
    },
    {
      title: "Advanced Admin Dashboard & Reporting Panel",
      description:
        "We build dynamic and intuitive admin dashboards utilizing Angular components, Material UI, and reactive forms.",
    },
    {
      title: "Real-Time Features & Push Notifications",
      description:
        "Enforce responsive, real-time UXs with Angular and tools like WebSockets and Firebase.",
    },
    {
      title: "Enterprise Architecture & DevOps Enablement",
      description:
        "Develop Angular applications that advance with your business. We implement clean, modular architecture, Ahead-of Time (AOT) compilation, lazy loading, and Server-Side Rendering (SSR) for optimal performance.",
    },
  ];
  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Furnish fast, seamless shopping adventures with Angular-based frontends.",
    },
    {
      title: "Automotive",
      description:
        "Create feature-rich automotive web applications with Angular, from high-performance car rental apps to real-time vehicle tracking dashboards.",
    },
    {
      title: "Healthcare",
      description:
        "As specialists in HIPAA-compliant platform development, we build secure and interactive healthcare applications using Angular.",
    },
    {
      title: "Education & E-learning",
      description:
        "Recast learning adventures with Angular-based educational platforms. From online classrooms and LMS systems to quiz series and performance tracking, we develop everything.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Angular allows fast, adaptive media platforms for live streaming, movies-on-demand, and content subscription services.",
    },
    {
      title: "Fintech",
      description:
        "Build secure and optimized fintech applications using Angular. We create trendy dashboards, real-time data displays, stock tracking, and payment gateways.",
    },
  ];
  const faqData = [
    {
      id: 1,
      question: "What is Angular development?",
      answer:
        "Angular is a web framework that helps to develop responsive and reliable applications. It contains a broad set of tools, APIs, and libraries that offer aid in development workflows.",
    },
    {
      id: 2,
      question: "Is Angular a frontend or backend?",
      answer:
        "Angular is primarily a frontend framework, mostly used to develop single-page applications.",
    },
    {
      id: 3,
      question: "Is Angular development difficult?",
      answer:
        "It can be difficult for beginners, but it is achievable. It requires a solid understanding of JavaScript.",
    },
    {
      id: 4,
      question: "Is Angular a tool or framework?",
      answer:
        "It is a platform and framework used to develop single-page applications with HTML and TypeScript.",
    },
    {
      id: 5,
      question: "How can I hire your services?",
      answer:
        "We offer full-time, part-time, and project-based services to our customers.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: [
            "Revive Your E-Business",
            "With the Firepower of",
            "Angular Development",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/angular.png"
        description="Harness the potency of Angular development to invent next-gen, savvy web applications with interactive UIs and modular architecture."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee 
        title="Technologies We Use"
        techRow1={[
          "Angular",
          "Signal",
          "NgRx",
          "Styled Components",
        ]}
        techRow2={[
          "TypeScript",
          "JavaScript",
          "REST API",
          "GraphQL",
          "WebSockets",
          "Jest",
          "Cypress",
          "Playwright",
        ]}
        techRow3={[
          "Tailwind CSS",
          "Sass",
          "ESLint/Prettier",
          "Webpack",
          "Vite",
          "Azure DevOps",
          "Jenkins",
          "CI/CD",
        ]}
      />

      {/* What Makes Our Laravel Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Angular Development Services Stand Out?"
        highlightedWords={[
          { text: "Makes", position: "whole" },
          { text: "Our", position: "whole" },
          { text: "Development", position: "whole" },
          { text: "Stand", position: "whole" },
          { text: "Out?", position: "whole" },
          // { text: "lopment", position: "after" },
        ]}
        firstColumnContent={{
          text: "We are experts in robust and scalable Angular development, producing lightning-fast web applications with optimized UIs and enterprise-grade security. Using the latest Angular features, our developers craft modular and API-driven structures developed for scalability and flexibility.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "If you are launching a startup or updating legacy systems, our web application development services, powered by Angular, enhance business development and streamline your digital platforms.",
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
            "Explore What Else We Offer In Angular Development Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "What", position: "after" },
            { text: "In", position: "after" },
            { text: "Angular", position: "after" },
            { text: "Development", position: "after" },
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
        title="Get Started With Our Expert Angular Services"
        highlightedWords={[
          { text: "Expert", position: "after" },
          { text: "Angular", position: "after" },
          { text: "Services", position: "after" },
          // { text: "Started", position: "after" },
        ]}
        description="Whether you are starting a  website or an e-commerce platform, Angular is the perfect choice. Get connected with us for lightning-fast and seamless services. "
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
