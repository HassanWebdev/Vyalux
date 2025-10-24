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

export default function PPCPage() {
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
      title: "Google Ads Management Services",
      description:
        "Run result-oriented ad campaigns on Google to bring traffic, capture leads, and dominate search results.",
    },
    {
      title: "Facebook & Instagram Ads",
      description:
        "Encourage your audience on Facebook and Instagram with visually exciting and conversion-focused advertisements.",
    },
    {
      title: "PPC Campaign Management",
      description:
        "From keyword analysis to bid strategy and analytics, we manage all types of your pay-per-click campaigns for maximum results.",
    },
    {
      title: "E-commerce PPC",
      description:
        "Drive more sales through expertly managed ads specified for platforms like Amazon and Google Shopping.",
    },
    {
      title: "Landing Page Optimization",
      description:
        "Increase ad performance by optimizing landing pages for responsiveness, clarity, and compelling design that encourages action.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Boost sales with targeted PPC campaigns on Google Shopping, Amazon, and social platforms—driving potential traffic to your product pages.",
    },
    {
      title: "Automotive",
      description:
        "Produce high-intent leads with targeted PPC ads for dealerships, car rentals, and vehicle services—optimized for conversions.",
    },
    {
      title: "Healthcare",
      description:
        "Enhance healthcare services, clinics, and telemedicine platforms with compliant and keyword-based PPC techniques for patient acquisition.",
    },
    {
      title: "Education & E-learning",
      description:
        "Engage students in online courses, LMS platforms, and internship programs using PPC campaigns customized for academic search and display networks.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Boost views and viewers through YouTube ads and social PPC campaigns that target the ideal audience with effective content.",
    },
    {
      title: "Fintech",
      description:
        "Drive app downloads, demo requests, and lead generation for fintech platforms with high-converting ads and data-driven budget allocation.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "How much does a PPC campaign cost?",
      answer:
        "On average, small to midsize campaigns cost around $10,000-$20,000 per month, with an average cost per click CPC of $2.59, as per WebFX data.",
    },
    {
      id: 2,
      question: "How a PPC Campaign works?",
      answer:
        "PPC campaign follows the set of instructions given to it in the form of target audience, goals of the campaign, researched keywords, and landing page optimization.",
    },
    {
      id: 3,
      question: "Who pays for PPC?",
      answer:
        "Pay-per-click advertising is a system of advertising in which the advertiser pays a specific amount each time an ad is clicked.",
    },
    {
      id: 4,
      question: "Does Google offer PPC?",
      answer:
        "Yes. Google Ads is a PPC advertising solution that allows online platforms to bid on keywords for a chance to show ads in Google search results.",
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
          lines: [
            "Boost Conversions With",
            "High-Performance PPC",
            "Campaigns",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/ppc.png"
        description="Target the exact audience at the right time. Our PPC specialists leverage modern strategies, keyword intelligence, and A/B testing to enhance ROI and drive real business outcomes."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={[
          "Google Ads",
          "Facebook Ads",
          "Instagram Ads",
          "LinkedIn Ads",
        ]}
        techRow2={[]}
        techRow3={[
          "Google Analytics",
          "Google Marketing Platform",
          "YouTube Ads",
          "TikTok Ads",
        ]}
      />

      {/* What Makes Our Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our AI Model Development Services Stand Out?"
        highlightedWords={[
          { text: "Our", position: "after" },
          { text: "AI", position: "after" },
          { text: "Stand", position: "after" },
          { text: "Development", position: "after" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "A persuasive PPC strategy delivers immediate results, reaches the target audience, and ensures cost-efficient advertising. Our method focuses on keyword targeting, ongoing campaign optimization, and analytical conversion tracking to improve ROI.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "We use A/B testing to identify the most effective ads and perform competitive research to fine-tune your approach. With a data-centric mindset, we reduce wasted spend and drive consistent, measurable growth for your business.",
          height: "h-16 sm:h-20 lg:h-[100px]",
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection industries={industries} />

      {/* Language Services Section */}
      <LanguageServicesSection
        sectionTitle={{
          mainText: "Explore What Else We Offer In PPC Campaign Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "We", position: "after" },
            { text: "In", position: "after" },
            { text: "PPC", position: "after" },
            { text: "Campaign", position: "after" },
          ],
        }}
        serviceItems={services}
        backgroundColor="#040404"
        accentColor="#AB322C"
        mainTextColor="white"
        sectionClassName="bg-red-400"
        width="xl:w-[700px] lg:w-[600px]"
      />

      {/* Top Case Studies Section */}
      <CaseStudiesSection />

      {/* Contact Form Section */}
      <ContactSection />

      <FAQ faqData={faqData} />

      <ConversationSection
        title="Drive Growth With Targeted PPC Campaigns"
        highlightedWords={[
          { text: "With", position: "after" },
          { text: "Campaigns", position: "after" },
          // { text: "In", position: "after" },
        ]}
        description="Connect with our PPC experts to start data-driven campaigns that turn clicks into customers. Start seeing results today."
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
