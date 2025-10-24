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

export default function NestJs() {
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
      title: "Custom NestJS Development",
      description:
        "Acquire custom backend solutions crafted to your business dynamics—whether it's RESTful APIs, full-stack integrations, or GraphQL endpoints—developed with adaptability and scalability.",
    },
    {
      title: "API Development & Integration",
      description:
        "Develop blazing-fast and secure APIs with NestJS. We deliver unwavering results for both web and mobile applications.",
    },
    {
      title: "Scalable NestJS Backend Engineering",
      description:
        "Leverage NestJS to form high-performance backends that are modular, adaptive, and maintainable. Suitable for real-time apps, CRMs, marketplaces, and enterprise systems.",
    },
    {
      title: "Microservices Architecture with NestJS",
      description:
        "Reconstruct your monolithic system into a distributed architecture using NestJS microservices. Gain flexibility, fault tolerance, and swift deployments across your systems.",
    },
    {
      title: "NestJS Consulting & Architecture Strategy",
      description:
        "Our specialists help you determine robust backend strategies—selecting the right patterns, tools, and implementation approaches for future-ready, developer-friendly foundations.",
    },
  ];
  // Industries content for Nest.js page
  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Develop scalable, lightning-fast backends for e-commerce outlets, marketplaces, and retail management systems—guaranteeing real-time updates, fast payments, and smooth customer experience.",
    },
    {
      title: "Healthcare",
      description:
        "Build safe, HIPAA-compliant healthcare applications using NestJS. From telemedicine platforms to patient segments, we create backend systems that prioritize privacy, performance, and reliability.",
    },
    {
      title: "Finance & Banking",
      description:
        "Boost your fintech applications with secure NestJS architecture. Enable digital transactions, investment hunt, and fraud detection with seamless performance.",
    },
    {
      title: "EdTech",
      description:
        "Build powerful backend search engines for e-learning platforms, virtual classrooms, AI-driven assessments, and content management tools that evolve with your increasing user base.",
    },
    {
      title: "Retail & Logistics",
      description:
        "Streamline your stock, shipment monitoring, and supply chain management with real-time, data-driven backend systems built on NestJS.",
    },
  ];

  // FAQ content specific to Nest.js page
  const faqData = [
    {
      id: 1,
      question: "What solutions does Nest.js provide?",
      answer:
        "Nest.js offers a robust architecture for backend applications. Fostering well-organized structures and established design patterns, it helps many developers to understand the underlying architecture.",
    },
    {
      id: 2,
      question: "Is Nest.js popular?",
      answer:
        "Yes, it is. It authorizes a robust framework for building a scalable and reliable backend. It is often recalled when a need arises for a modular and sustainable architecture, for handling HTTP requests, and data processing.",
    },
    {
      id: 3,
      question: "What are the benefits of Nest.js?",
      answer:
        "Modularity, scalability, type safety, rich ecosystem, microservices, etc., are the benefits of Nest.js.",
    },
    {
      id: 4,
      question: "What language does Nest.js utilize?",
      answer:
        "It uses progressive JavaScript, supports TypeScript, OOP (Object Oriented Programming), and FRP (Functional Reactive Programming).",
    },
    {
      id: 5,
      question: "How can I hire your Nest.js services?",
      answer:
        "We offer full-time, part-time, and project-based services to our customers.",
    },
  ];

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: [
            "Next-Gen Backend",
            "Engineering with Nest.js",
            "Development Services",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/nest.png"
        description="Accelerate your digital existence with advanced Nest.js development—designed to furnish high-class results, speed, and performance."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={[
          "NestJS",
          "Node.js",
          "Express.js",
          "Fastify",
        ]}
        techRow2={[
          "TypeScript",
          "TypeORM",
          "Prisma",
          "Swagger",
          "PostgreSQL",
          "Redis",
        ]}
        techRow3={[
          "Docker",
          "Kubernetes",
          "CI/CD",
          "AWS",
          ".Net",
        ]}
      />

      {/* What Makes Our Laravel Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Nest.js Development Services Stand Out?"
        highlightedWords={[
          { text: "Makes", position: "after" },
          { text: "Our", position: "after" },
          { text: "Development", position: "after" },
          { text: "Stand", position: "after" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "As a web design and development firm, we don't just build solutions—we engineer future-ready digital ecosystems. Our Nest.js services, delivered with technical precision, offer creative UIs, responsive UXs, and ultra-high performance.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "Using the latest technologies and the power of Nest.js, our experts craft intelligent, innovative web apps that grow with your business.",
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
            "Explore What Else We Offer In Nest.js Development Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "What", position: "after" },
            { text: "In", position: "after" },
            { text: "Nest.js", position: "after" },
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
        title="Explore What Else We Offer Besides Nest.js Development"
        highlightedWords={[
          { text: "Explore", position: "after" },
          { text: "Besides", position: "after" },
          { text: "Development", position: "after" },
          { text: "To", position: "after" },
          { text: "Offer", position: "after" },
          // { text: "Today", position: "after" },
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
