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

export default function Laravel() {
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
      title: "Custom Vue.js Development",
      description:
        " We develop custom-made Vue.js applications that are flexible, maintainable, and optimized for better performance across platforms.",
    },
    {
      title: " Vue.js Enterprise Solutions",
      description:
        "Build enterprise-grade web solutions with robust architecture, evolved security layers, and endless scalability—ideal for complex business systems.",
    },
    {
      title: "Performance Tuning & Vue.js App Optimization",
      description:
        " Enhance your existing Vue.js apps with our performance optimization and code audit strategies to furnish smooth and fast user experiences.",
    },
    {
      title: "Migration & API Integration with Vue.js",
      description:
        "Elevate legacy systems or old frameworks with a smooth migration to Vue.js.",
    },
  ];

  // Industries content for Vue.js page
  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Build high-speed, reflexive shopping stores with Vue.js. Whether it’s a smart online storefront or a complicated multi-vendor e-store, we offer solutions with AI-driven recommendations, real-time analytics, and personalized user experiences.",
    },
    {
      title: "Automotive",
      description:
        "Enhance your automotive platforms with Vue.js. From trendy vehicle marketplaces to real-time rental and tracking solutions, Vue.js fosters ultra-responsive user interfaces and fast search capabilities.",
    },
    {
      title: "Healthcare",
      description:
        "Develop secure, speed-optimized healthcare apps with Vue.js. We build HIPAA-compliant platforms including telehealth systems, patient dashboards, digital appointment schedulers, and real-time monitoring tools.",
    },
    {
      title: "Education & E-learning",
      description:
        "Supercharge learning with intelligent Vue.js-based education platforms. We build engaging Learning Management Systems (LMS), AI-powered tutoring portals, real-time quizzes, and interactive content delivery tools.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Launch lightning-fast entertainment and multimedia platforms with Vue.js. From customized video apps to live broadcasting and impulsive content feeds, Vue delivers highly responsive media interfaces.",
    },
    {
      title: "Fintech",
      description:
        "Elevate your digital finance platforms with Vue.js. We build sleek, AI-driven fintech solutions—ranging from secure digital wallets and dynamic analytical dashboards to real-time updates and fraud detection systems.",
    },
  ];

  // FAQ content specific to Vue.js page
  const faqData = [
    {
      id: 1,
      question: "What is Vue.js?",
      answer:
        "It is a JavaScript framework that helps in creating dynamic user interfaces UIs that are adaptive and interactive.",
    },
    {
      id: 2,
      question: "What are the main features of Vue.js?",
      answer:
        "Declarative rendering, two-way data binding, component-based architecture, directives, and virtual DOM are the main features of Vue.js.",
    },
    {
      id: 3,
      question: "For what reasons does Vue.js stand out?",
      answer:
        "It is a perfect choice for developers who prefer simplicity and maintainability. Its component-based architecture and simple learning techniques make it a popular choice among beginners searching for web application development.",
    },
    {
      id: 4,
      question: "Is Vue.js a frontend or backend?",
      answer:
        "Vue.js is a front-end framework used to build and manage user interfaces and the view layers of web applications.",
    },
    {
      id: 5,
      question: "How can I hire your services?",
      answer: "We offer full-time, part-time, and project-based services.",
    },
  ];

  return (
    <div className=" bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/vue.png"
        title={{
          lines: ["Elevate Your Digital", "Vision with Vue.js", "Development"],
        }}
        description="Leverage the adaptability of Vue.js to create interactive, innovative, and impressive interfaces with the help of our expert developers"
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={[
          "Vue.js",
          "Nuxt.js",
          "Vuex",
          "Vite",
          "Veed"
        ]}
        techRow2={[
          "TypeScript",
          "JavaScript",
          "REST API",
          "GraphQL",
          "Axios",
          "WebSockets",
          "Vitest",
          "Cypress",
        ]}
        techRow3={[
          "Tailwind CSS",
          "SASS",
          "Element Plus",
          "uikit",
          "Vuetify",
        ]}
      />

      {/* What Makes Our Laravel Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Vue.js Development Services Stand Out?"
        highlightedWords={[
          { text: "Makes", position: "after" },
          { text: "Our", position: "after" },
          { text: "Development", position: "after" },
          { text: "Stand", position: "after" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "We have developed various apps and websites, ranging from healthcare, e-commerce, automotive, fintech, and many others. Our engineers have hands-on experience in developing modern solutions for small and large-scale business setups.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "Vue.js offers flexibility and scalability, enabling developers to create interactive, intuitive, and modular UIs that cater to your business needs. ",
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
          mainText: "Explore What Else We Offer In Vue.js Development Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "In", position: "after" },
            { text: "Vue.js", position: "after" },
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
        title="Start Your Journey With Our Vue.js Experts Today"
        highlightedWords={[
          { text: "Journey", position: "after" },
          { text: "Today", position: "after" },
          { text: "Vue.js", position: "after" },
          // { text: "Services", position: "after" },
        ]}
        description="Contact our developers or email us, and kick-start your digital journey with us. We are specialists at developing modern and interactive UIs using Vue.js and its components."
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
