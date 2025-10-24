import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FriendsMarquee from "../components/FriendsMarquee";
import HeroSection from "../components/Laravel/HeroSection";
import ServicesSection from "../components/Laravel/ServicesSection";
import IndustriesSection from "../components/Laravel/IndustriesSection";
import CaseStudiesSection from "../components/Laravel/CaseStudiesSection";
import ContactSection from "../components/Laravel/ContactSection";
import LanguageServicesSection from "@/components/Laravel/LanguageServicesSection";
import FAQ from "../components/FAQ";
import ConversationSection from "../components/ConversationSection";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function ReactJs() {
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
      title: "Custom React.js Web Applications",
      description:
        "Whether it's a SaaS platform, enterprise dashboard, or content management system, we deliver high-performing React.js solutions with clean, maintainable code.",
    },
    {
      title: "React-Based Progressive Web Apps (PWAs)",
      description:
        "Build mobile-like web apps with our PWA solutions. We use React.js to craft swift, installable, and offline-ready applications with exceptional user experiences.",
    },
    {
      title: "React Component Libraries & UI Systems",
      description:
        "We build custom reusable component libraries that maintain consistency across your applications while speeding up development time and reducing costs.",
    },
    {
      title: "Cloud-Native React Applications",
      description:
        "We develop scalable React.js applications optimized for deployment on Azure, AWS, or Google Cloud, designed with containerization and CI/CD pipelines to guarantee performance and flexibility.",
    },
    {
      title: "React State Management & Integration",
      description:
        "Our experts implement efficient state management solutions using Redux, Context API, or other state management libraries to ensure your React applications are performant and maintainable.",
    },
  ];
  // Industries content for React.js page
  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Develop lightning-fast, interactive shopping platforms with React.js. We create e-commerce platforms that offer dynamic product listings, real-time updates, customized dashboards, and seamless checkout flows.",
    },
    {
      title: "Automotive",
      description:
        "With React.js, build responsive, real-time automotive platforms—be it for automobile listings, car rentals, or GPS tracking apps.",
    },
    {
      title: "Healthcare",
      description:
        "Using React.js, we create scalable and intuitive healthcare products from HIPAA-compliant patient portals and telemedicine venues to real-time monitoring dashboards.",
    },
    {
      title: "Education & E-learning",
      description:
        "Develop React-powered e-learning platforms with features like AI-enabled classroom tools, quizzes, and engaging content modules that adjust to student performance in real time.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "For movies-on-demand, live streaming, or entertainment platforms, React.js offers the performance and flexibility you need.",
    },
    {
      title: "Fintech",
      description:
        "Build modern fintech apps for investment, digital wallets, budgeting, or cryptocurrency trading that offer unmatched performance and reliability.",
    },
  ];

  // FAQ content specific to React.js page
  const faqData = [
    {
      id: 1,
      question: "What is the future of React.js development?",
      answer:
        "With continuous dominance and evolution, the future of React.js seems bright.",
    },
    {
      id: 2,
      question: "What is React.js?",
      answer:
        "Owned by Meta, React.js, often described as React, is an open-source and free JavaScript library used to develop user interfaces (UIs).",
    },
    {
      id: 3,
      question: "Is React.js cross-platform?",
      answer:
        "Yes, it is. React Native is a cross-platform mobile app development technology used to develop mobile apps using web development code.",
    },
    {
      id: 4,
      question: "What is the significance of React.js?",
      answer:
        "React.js is a JavaScript library for building UIs. Developers create interactive and dynamic interfaces using features like component-based architecture, virtual DOM, unidirectional data flow, and reusability.",
    },
    {
      id: 5,
      question: "How can I hire your React.js services?",
      answer: "We offer full-time, part-time, and project-based services.",
    },
  ];

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: [
            "Unlock The Power Of React.js",
            "Solutions With Us To Scale",
            "Your Vision",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/react.png"
        description=" Partner with our expert React.js developers to build interactive, modular, and maintainable applications to enhance your business model."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={[
          "React",
          "Next.js",
          "Vercel",
          "Vite",
        ]}
        techRow2={["TypeScript","GraphQL","materialdesign","Tailwind CSS"]}
        techRow3={[]}
      />

      {/* What Makes Our React.js Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our React.js Development Services Stand Out?"
        highlightedWords={[
          { text: "Our", position: "after" },
          { text: "Development", position: "after" },
          { text: "Stand", position: "after" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "We develop high-performance React.js applications that offer speed, compatibility, and accessibility. Our engineers are experts in developing scalable, modernized front-end architectures, crafted to meet evolving business requirements.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "Front-end development not only needs field experience but also a sense of understanding of the latest designs and technologies that enhance aesthetics, modern UIs, and interactive themes.",
          height: "h-16 sm:h-20 lg:h-[100px]",
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection industries={industries} />

      <LanguageServicesSection
        sectionTitle={{
          mainText: "Explore What Else We Offer In React.js Development",
          highlightedWords: [
            { text: "What", position: "after" },
            { text: "Else", position: "after" },
            { text: "React.js", position: "after" },
            { text: "In", position: "after" },
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
        title="Hire Our Experts For React.js Services Today"
        highlightedWords={[
          { text: "For", position: "after" },
          { text: "React.js", position: "after" },
          { text: "Services", position: "after" },
          { text: "Today", position: "after" },
        ]}
        description="We build blazing-fast, interactive user interfaces that help your business grow immensely."
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
