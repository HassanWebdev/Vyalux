import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FriendsMarquee from "../../components/FriendsMarquee";
import HeroSection from "../../components/Laravel/HeroSection";
import ServicesSection from "../../components/Laravel/ServicesSection";
import IndustriesSection from "../../components/Laravel/IndustriesSection";
import MernServicesSection from "../../components/Laravel/MernServicesSection";
import CaseStudiesSection from "../../components/Laravel/CaseStudiesSection";
import ContactSection from "../../components/Laravel/ContactSection";
import LanguageServicesSection from "../../components/Laravel/LanguageServicesSection";
import FAQ from "../../components/FAQ";
import ConversationSection from "../../components/ConversationSection";
import Footer from "../../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function NLPPage() {
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
      title: "WordPress Design & Development",
      description:
        "Engaging architecture and responsive layouts with smooth user experiences across all devices.",
    },
    {
      title: "WooCommerce Store Development",
      description:
        "End-to-end WooCommerce store development with secure payments, product management, and performance optimization.",
    },
    {
      title: "WooCommerce Plugin Development",
      description:
        "Custom WooCommerce plugins are customized to your specific eCommerce features and workflow needs.",
    },
    {
      title: "WooCommerce Theme Development",
      description:
        "Create tailored WooCommerce themes that are visually appealing, fast-loading, and conversion-focused.",
    },
    {
      title: "WooCommerce API Integration",
      description:
        "Connect your WooCommerce store with CRMs, ERPs, and third-party platforms for seamless operations.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Develop scalable, fast, and secure online stores with WooCommerce from tailored product pages to seamless checkout and payment gateway integrations.",
    },
    {
      title: "Automotive",
      description:
        "Build dealership websites, parts catalogs, vehicle listings, and appointment booking systems using WordPress and WooCommerce.",
    },
    {
      title: "Healthcare",
      description:
        "Build HIPAA-compliant, user-friendly websites for clinics, hospitals, and medical distributors.",
    },
    {
      title: "Education & E-learning",
      description:
        "Develop up-to-date e-learning portals, course platforms, and students' websites using WordPress and LMS plugins.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Set up dynamic content platforms and media-rich websites for creators, artists, and entertainment brands.",
    },
    {
      title: "Fintech",
      description:
        "Build high-performance, secure websites for financial services, SaaS tools, and digital wallets.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "Why is a WordPress developer important?",
      answer:
        "A professional WordPress website developer guarantees a secure, performance-optimized, and customized website that meets your business needs.",
    },
    {
      id: 2,
      question:
        "What is the time frame for building a WordPress or WooCommerce website",
      answer:
        "Generally, it depends on project complexity. A normal websites take 2-4 weeks, while advanced WooCommerce website development services may take 6-8 weeks.",
    },
    {
      id: 3,
      question: "Do you offer post-launch services and support?",
      answer:
        "Yes. We provide post-launch services, maintenance, and support throughout.",
    },
    {
      id: 4,
      question: "How can I hire your services?",
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
            "Your Vision, Our Code – Custom",
            "WordPress Websites For",
            "Powerful Online Presence",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/wordpress.png"
        description="Transform your ideas into impactful, high-performing websites with our specialist WordPress developers. From custom themes to WooCommerce integration—we make it happen."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={["WordPress", "WooCommerce", "Elementor", "Yoast SEO"]}
        techRow2={["PHP", "MySQL", "JavaScript", "WP Rocket"]}
        techRow3={["jQuery", "CSS3", "HTML5", "REST API"]}
      />

      {/* What Makes Our NLP Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our WordPress Services Stand Out?"
        highlightedWords={[
          { text: "Our", position: "whole" },
          { text: "Services", position: "whole" },
          // { text: "In", position: "whole" },
          // { text: "MERN", position: "whole" },
          // { text: "lopment", position: "after" },
        ]}
        firstColumnContent={{
          text: " As a trusted WordPress development company, we offer end-to-end solutions engineered for flexibility, scalability, and superior performance. Whether you require a content-focused website or a fully functional eCommerce platform, our WordPress development services ensure SEO-friendly UI/UX, mobile responsiveness, and top-tier security.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "Our professional WooCommerce experts provide ongoing support and maintenance to keep your online business running smoothly, securely, and efficiently, so you can concentrate on growth while we handle the rest.",
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection industries={industries} />

      {/* Language Services Section */}
      <LanguageServicesSection
        sectionTitle={{
          mainText:
            "Explore What Else We Offer In WordPress Development Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "WordPress", position: "after" },
            { text: "In", position: "after" },
            { text: "Development", position: "after" },
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
        title="Start Your Next Project with WordPress Professionals"
        highlightedWords={[
          { text: "with", position: "after" },
          { text: "Project", position: "after" },
          { text: "Professionals", position: "after" },
          // { text: "Today", position: "after" },
        ]}
        description="Tailored websites, smart eCommerce solutions, secure payment systems—we do it all. Connect with us to bring your vision to life."
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
