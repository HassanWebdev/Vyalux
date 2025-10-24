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
      title: "Custom PWA Development",
      description:
        "Custom-made progressive web applications crafted to meet your business needs—ensuring consistency, smooth functionality, and outstanding performance across devices.",
    },
    {
      title: "Responsive Web App Development",
      description:
        "Your app, everywhere. Our PWA solutions are fully responsive and adaptive to all screen sizes—from smartphones to desktops",
    },
    {
      title: "Offline Functionalities",
      description:
        "Our PWAs are expertly engineered to work with poor or no internet connectivity, enhancing efficiency and reducing bounce rate.",
    },
    {
      title: "PWA Migration & Advancements",
      description:
        "We upgrade your existing web app into a snappy, installable PWA with mobile-like responsiveness across all platforms.",
    },
    {
      title: "Cross-Browser Compatibility",
      description:
        "We ensure uninterrupted functionality of your PWA across all popular browsers—Chrome, Edge, Safari, Firefox, and others.",
    },
  ];

  const industriesData = [
    {
      title: "E-commerce",
      description:
        "Build multi-vendor e-stores for a seamless shopping experience",
    },
    {
      title: "Healthcare",
      description:
        "Manufactured for compliance—our health products meet HIPAA standards.",
    },
    {
      title: "Education",
      description: "Create smart E-learning platforms with our PWA services",
    },
    {
      title: "Finance",
      description: "Smart fintech solutions with end-to-end encryption",
    },
    {
      title: "Logistics",
      description:
        "Optimize delivery operations, logistics solutions with live tracking",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What are progressive web applications PWAs?",
      answer:
        "In simple words, PWAs are websites built to resemble mobile applications, using a single codebase with HTML, CSS, and JavaScript. They are built to overcome the limitations of both websites and native apps.",
    },
    {
      id: 2,
      question: "What are the advantages of PWAs?",
      answer:
        "Progressive web applications offer a dynamic digital experience with multiple advantages over native mobile apps and traditional websites for startups. PWAs are easy to launch and accessible across all devices.",
    },
    {
      id: 3,
      question: "Can PWAs work offline as well?",
      answer:
        "PWAs are designed to work with limited internet connectivity or no internet, whereas native apps require strong internet connections to work.",
    },
    {
      id: 4,
      question: "Why should PWA be preferred over others?",
      answer:
        "Lower cost, increased visibility, optimized performance, higher engagement, and seamless integration make it a preferable choice over others.",
    },
  ];

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: [
            "Accelerate Your Business ",
            "With Our Progressive Web ",
            "App Development Services",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/PWA.png"
        description="Experience the lightweight, fast-loading progressive web apps, a perfect choice for startups looking for a reliable, cost-effective digital solution."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={[
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Vue.js",
          "Nuxt.js",
          "Angular",
          "Svelte",
        ]}
        techRow2={[
          "Service Workers",
          "Workbox",
          "IndexedDB",
          "Web Push",
        ]}
        techRow3={[
          "Vite",
          "Webpack",
          "Rollup",
          "Tailwind CSS",
          "SASS",
          "Firebase Hosting",
          "Netlify",
          "Vercel",
        ]}
      />

      {/* What Makes Our Laravel Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our PWA Development Services Stand Out?"
        highlightedWords={[
          { text: "Makes", position: "after" },
          { text: "Our", position: "after" },
          { text: "Development", position: "after" },
          { text: "Stand", position: "after" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "We develop lightning-fast, secure, and adaptable progressive web apps that offer a native like experience on all devices. We ensure each solution is optimized for responsiveness and high performance.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "",
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection industries={industriesData} />

      <LanguageServicesSection
        sectionTitle={{
          mainText: "Explore What Else We Offer In PWA Development",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "PWA", position: "after" },
            { text: "Development", position: "after" },
            // { text: "Angular", position: "after" },
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
        title="Build Lightning Fast, High- Performance PWAs That Work Everywhere"
        highlightedWords={[
          { text: "Fast", position: "after" },
          { text: "High-", position: "after" },
          { text: "PWAs", position: "after" },
          { text: "That", position: "after" },
          // { text: "Work", position: "after" },
          { text: "Everywhere", position: "after" },
        ]}
        description="Leverage our cross-platform development expertise and build one solution that works uninterruptedly on every device from mobile to desktop, making your business progress sky high."
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
