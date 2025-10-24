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
import LanguageServicesSection from "@/components/Laravel/LanguageServicesSection";
import FAQ from "../../components/FAQ";
import ConversationSection from "../../components/ConversationSection";
import Footer from "../../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function AIModelsPage() {
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
      title: "AI-Powered Marketing Solutions",
      description:
        "Boost your campaigns with AI tools for dynamic customer segmentation, custom content creation, and automated email workflows.",
    },
    {
      title: "Predictive Analytics for Smarter Campaigns",
      description:
        "Leverage AI-powered predictive analytics to examine customer behavior, future trends, and make informed decisions that increase ROI and efficiency.",
    },
    {
      title: "Automated Advertising with AI",
      description:
        "Streamline digital advertising using AI for real-time bidding strategies, optimization of targeting, and ad performance analytics across all platforms.",
    },
    {
      title: "AI-Enhanced CRM & Customer Intelligence",
      description:
        "Revolutionize customer relationship management with AI that studies behavior, detects sentiment, and provides actionable analytics for better retention and engagement.",
    },
    {
      title: "AI Marketing Automation Consulting",
      description:
        "Get strategic assistance for integrating AI into your marketing operations—planning, implementation, tool selection, and continuous performance improvement.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Streamline personalized product recommendations, customer segmentation, and email campaigns using AI.",
    },
    {
      title: "Automotive",
      description:
        "Leverage AI marketing to find potential buyers with customized ads, automate lead generation, and analyze buyer behavior to craft campaigns for dealerships and vehicle marketplaces.",
    },
    {
      title: "Healthcare",
      description:
        "Use AI to deliver customized health campaigns, automate patient interaction, and customize content for wellness programs, ensuring regulatory compliance and user-based outreach.",
    },
    {
      title: "Education & E-learning",
      description:
        "AI marketing automation facilitates student recruitment, automates onboarding workflows, and delivers specific course recommendations to enhance engagement and retention.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Deliver AI-powered content recommendations, automate viewer re-engagement campaigns, and prioritize ad placements based on viewer preferences and interest analytics.",
    },
    {
      title: "Fintech",
      description:
        "Use AI to segment financial customers, automate lead generation for loans and investments, and run data-based campaigns that enhance customer lifetime value and reduce churn.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "How does AI help in marketing?",
      answer:
        "AI marketing tools help marketers find actionable insights from data that is developed by a campaign in near real-time.",
    },
    {
      id: 2,
      question: "How to utilize AI for branding purposes?",
      answer:
        "Use AI tools to analyze the engagements, behavior, and sentiments of your followers.",
    },
    {
      id: 3,
      question: "How to generate free AI images?",
      answer:
        "Write a text prompt describing your requirements. Hit Enter and see results. If the image looks appropriate, give some finishing prompts to make the image more precise. In this way, you can create your image within seconds using AI.",
    },
    {
      id: 4,
      question: "Who invented AI?",
      answer:
        "John McCarthy is known as the founder of Artificial Intelligence.",
    },
    {
      id: 5,
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
          lines: ["Boost Conversions With", "Smart Marketing", "Automation"],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/market.png"
        description="Transform the way you engage with customers. From lead generation to behavioral targeting, our AI marketing automation tools facilitate decision-making and accelerate growth."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={["HubSpot", "Marketo", "Salesforce", "Mailchimp"]}
        techRow2={["Google Analytics", "Hotjar", "Mixpanel", "Optimizely"]}
        techRow3={["TensorFlow", "Python", "SQL", "Google Ads API"]}
      />

      {/* What Makes Our AI Models Stand Out Section */}
      <ServicesSection
        title="What Makes Our AI Marketing Automation Services Stand Out?"
        highlightedWords={[
          { text: "Makes", position: "whole" },
          { text: "Our", position: "whole" },
          { text: "Automation", position: "whole" },
          { text: "AI", position: "whole" },
          { text: "Stand", position: "whole" },
          { text: "Out?", position: "whole" },
          // { text: "lopment", position: "after" },
        ]}
        firstColumnContent={{
          text: "AI marketing automation streamlines complex marketing tasks—automating everything from email campaigns to customer segmentation. Analyze user behavior, analyze conversions in real-time, and revamp targeting strategies to deliver more meaningful results and boost ROI.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "",
          height: "h-16 sm:h-20 lg:h-[100px]",
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection industries={industries} />

      {/* Language Services Section */}
      <LanguageServicesSection
        sectionTitle={{
          mainText:
            "Explore What Else We Offer In AI Marketing Automation Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "AI", position: "after" },
            { text: "Services", position: "after" },
            { text: "What", position: "after" },
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
        title="Build AI-driven Marketing Automation and Campaigns Insights"
        highlightedWords={[
          { text: "Marketing", position: "after" },
          { text: "Campaigns", position: "after" },
          { text: "Insights", position: "after" },
          // { text: "Today", position: "after" },
        ]}
        description="Use AI to analyze customer behavior, campaign insights, and sales trends—enabling accurate targeting and data-driven marketing decisions."
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
