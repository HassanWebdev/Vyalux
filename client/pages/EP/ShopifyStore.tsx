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
      title: "Shopify Website Development",
      description:
        "Build a successful online shop, convert Shopify store layouts into performance-optimized online shops.",
    },
    {
      title: "Shopify Custom Theme Development",
      description:
        "Transform your eCommerce vision into a unique Shopify store with captivating custom themes that align with your brand.",
    },
    {
      title: "Shopify Store Design & Configuration",
      description:
        "Create professionally designed, feature-rich Shopify stores with intuitive navigation and visually appealing functionality.",
    },
    {
      title: "Shopify Plus Development",
      description:
        "Level up your enterprise with our custom Shopify Plus solutions tailored for high-volume businesses.",
    },
    {
      title: "E-commerce Velocity Solutions",
      description:
        "Optimize your Shopify store with industry-best features like automated inventory management, improved checkout support, and robust marketing tools.",
    },
    {
      title: "Shopify App Development",
      description:
        "Enhance your online store's capabilities with custom Shopify apps that adapt to your unique business challenges.",
    },
  ];
  
  const industries = [
    {
      title: "E-commerce & Retail",
      description: "Customize your Shopify store with tailored themes, dynamic filters, and conversion-focused features to deliver a smooth shopping experience and boost online sales."
    },
    {
      title: "Automotive",
      description: "Develop custom product catalogs for auto parts, accessories, or listings with VIN filters, compatibility checkers, and examination forms to drive more qualified leads."
    },
    {
      title: "Healthcare",
      description: "Build secure, HIPAA-compliant storefronts for marketing health products, scheduling appointments, or managing subscriptions."
    },
    {
      title: "Education & E-learning",
      description: "Offer courses, academic materials, or digital subscriptions with Shopify customizations like gated content, secure payments, and individual dashboards."
    },
    {
      title: "Streaming & Entertainment",
      description: "Propose media subscriptions, merch, or digital downloads with Shopify functionalities like membership gating, exclusive product access, and smooth media integrations."
    },
    {
      title: "Fintech",
      description: "Develop credibility with secure, interactive, and regulation-friendly Shopify storefronts, furnishing financial tools, subscription models, or SaaS services with custom dashboards and app integrations."
    }
  ];
  
  const faqData = [
    {
      id: 1,
      question: "How long does it take to set up a Shopify store?",
      answer: "It depends on the complexity of the store. A basic Shopify store can be set up within a few days, while a custom store may take a few weeks."
    },
    {
      id: 2,
      question: "Do you provide Shopify migration services?",
      answer: "Yes, we provide seamless Shopify migration services with minimal downtime."
    },
    {
      id: 3,
      question: "Can we integrate AI features into a Shopify store?",
      answer: "Absolutely! We deliver AI-powered solutions like chatbots, smart recommendations, and automated customer support."
    },
    {
      id: 4,
      question: "How can I hire your services?",
      answer: "We offer full-time, part-time, and project-based services to our customers."
    },
  ];

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: [
            "Expert Shopify Development",
            "Services For Scalable E-",
            "Commerce Growth",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/shopify.png"
        description="We develop fast, mobile-friendly, and SEO-optimized Shopify stores that boost user experience and maximize conversions."
      />

        <FriendsMarquee 
          title="Technologies We Use"
          techRow1={[
            "Shopify",
            "Liquid",
            "JavaScript",
            "React"
          ]}
          techRow2={[
            "HTML5",
            "CSS3",
            "Node.js",
            "GraphQL"
          ]}
          techRow3={[

          ]}
        />

        {/* What Makes Our Shopify Services Stand Out Section */}
      <ServicesSection
        title="What makes our shopify service stand out?"
        highlightedWords={
          [
            { text: "our", position: "whole" },
            { text: "service", position: "whole" },
            { text: "out?", position: "whole" },
            // { text: "MERN", position: "whole" },
            // { text: "lopment", position: "after" },
          ]
        }
        firstColumnContent={{
          text: " Shopify delivers a powerful and flexible eCommerce platform that allows businesses to launch, manage, and scale online stores effortlessly. With its tailored themes, safe payment gateways, and vast app ecosystem, Shopify empowers brands to furnish exceptional user experiences and drive more sales.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "At VYALUX, expert Shopify developers create high-converting, mobile-friendly, and scalable online stores for your unique goals. From smooth third-party integrations to performance optimization, we ensure your Shopify store is developed for growth, reliability, and long-term success.",
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection
        industries={industries}
      />

      {/* Language Services Section */}
      <LanguageServicesSection
        sectionTitle={{
          mainText: "Explore What Else We Offer In Shopify Customization Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "Shopify", position: "after" },
            { text: "Services", position: "after" },
            { text: "We", position: "after" },
            // { text: "ment", position: "after" },
          ],
        }}
        serviceItems={services}
        backgroundColor="#040404"
        accentColor="#AB322C"
        mainTextColor="white"
        width="xl:w-[680px] lg:w-[550px]"
      />

      {/* Top Case Studies Section */}
      <CaseStudiesSection />

      {/* Contact Form Section */}
      <ContactSection />

      <FAQ faqData={faqData} />

      <ConversationSection
        title="Develop, Customize, and Grow Your Shopify Store Today"
        highlightedWords={
          [
            { text: "Customize,", position: "after" },
            { text: "Shopify", position: "after" },
            { text: "Store", position: "after" },
            { text: "and", position: "after" },
          ]
        }
        description="We manage everything from initial setup to state-of-the-art customizations—so you can focus on selling more, faster."
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
