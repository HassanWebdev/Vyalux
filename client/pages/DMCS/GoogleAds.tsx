import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FriendsMarquee from "../../components/FriendsMarquee";
import HeroSection from "../../components/Laravel/HeroSection";
import ServicesSection from "../../components/Laravel/ServicesSection";
import IndustriesSection from "../../components/Laravel/IndustriesSection";
import CaseStudiesSection from "../../components/Laravel/CaseStudiesSection";
import ContactSection from "../../components/Laravel/ContactSection";
import LanguageServicesSection from "@/components/Laravel/LanguageServicesSection";
import FAQ from "../../components/FAQ";
import ConversationSection from "../../components/ConversationSection";
import Footer from "../../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function GoogleAdsPage() {
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
      title: "Google Search Ads",
      description:
        "Rank at the top of search results and grab high-intent leads.",
    },
    {
      title: "Google Display Ads",
      description: "Boost brand awareness with visually appealing banners.",
    },
    {
      title: "Google Shopping Ads",
      description: "Enhance product listings for higher e-commerce sales.",
    },
    {
      title: "YouTube Advertising",
      description: "Leverage video ads for maximum audience engagement.",
    },
    {
      title: "Google Ads AI Management",
      description:
        "Employ AI-driven insights for smarter campaign optimizations.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Enhance online sales by displaying your products through Google Shopping Ads and targeted search campaigns customized for high-converting buyers.",
    },
    {
      title: "Automotive",
      description:
        "Bring quality leads with location-based Google Ads campaigns for vehicle dealers, rentals, and auto services—optimized for mobile and local search.",
    },
    {
      title: "Healthcare",
      description:
        "Correspond with patients with compliant, location-targeted Google Ads crafted for clinics, hospitals, and private practices, while preserving healthcare advertising policies.",
    },
    {
      title: "Education & E-learning",
      description:
        "Advertise courses, certifications, or e-learning solutions using trends-based Google Search and YouTube campaigns to attract motivated learners.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Increase viewership with Google Display and YouTube ads, perfect for promoting live streams, entertainment, and subscription-based platforms.",
    },
    {
      title: "Fintech",
      description:
        "Target financial users with accuracy through data-driven Google Ads for apps, investment opportunities, and digital banking, focusing on ROI and compliance.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What kind of Ads can be run on Google?",
      answer:
        "The following ad formats are available: App, Display, Smart, Performance Max, Local Search, Shopping, and Video. and campaign goal.",
    },
    {
      id: 2,
      question: "What is the purpose of Google Ad Manager?",
      answer:
        "Google Ad Manager is an ad control platform for large publishers with substantial direct sales.",
    },
    {
      id: 3,
      question: "Are there any limitations for Google Ad campaigns?",
      answer:
        "Yes. A Google Ad account can run 10000 ads per account, 20000 ad groups per campaign, and 50 text ads per ad group.",
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
            "Unlock Growth & Boost",
            "Conversion Rate With Our",
            "Google Ad Services",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/google.png"
        description="Tap into the power of Google Ads with our expert management services. We fine-tune your campaigns to enhance performance, reduce costs, and deliver targeted traffic that converts."
      />
     
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={[
          "Google Ads",
          "Google Analytics",
          "YouTube Ads",
          "Facebook Ads",
          "Instagram Ads",
          "LinkedIn Ads",
        ]}
        techRow2={[
          "SEMrush",
          "Ahrefs",
          "HubSpot",
          "Mailchimp",
          "Zapier",
          "Canva",
          "Buffer",
          "Hootsuite",
        ]}
        techRow3={[]}
      />
      {/* What Makes Our Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Google Ads Services Stand Out?"
        highlightedWords={[
          { text: "Our", position: "after" },
          { text: "Ads", position: "after" },
          { text: "Services", position: "after" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "Operating a successful Google Ads campaign goes beyond just setting up ads—it requires strategic foresight, real-time decision making, and skilled oversight. Our team leverages data-driven analytics, precise audience targeting, and seamless performance tuning to ensure your campaigns deliver the required results. We focus on reducing wasted spend, boosting click-through rates, and pushing high-converting traffic to grow your return on investment.",
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
          mainText: "Explore What Else We Offer In Google Ads Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "Google", position: "after" },
            { text: "Services", position: "after" },
            // { text: "Out?", position: "after" },
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
        title="Start Driving Results with Google Ads"
        highlightedWords={[
          { text: "Results", position: "after" },
          { text: "with", position: "after" },
        ]}
        description="Our experts are ready to help you scale smarter. Contact us today for a customized Google Ads strategy that enhances leads, boosts conversions, and maximizes revenue."
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
