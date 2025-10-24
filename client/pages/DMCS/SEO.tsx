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

export default function SEOPage() {
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
      title: "Comprehensive SEO Audits",
      description:
        "Unveil hidden issues that divert your website's search performance. Our in-depth audits pinpoint technical, structural, and content-related defects for accurate search engine optimization.",
    },
    {
      title: "On-Page & Off-Page SEO",
      description:
        "Enhance your site's visibility by optimizing content, metadata, and site structure while creating high-quality backlinks that increase authority and search engine trust.",
    },
    {
      title: "Local SEO Services",
      description:
        "Boost foot traffic and local leads by optimizing your Google Business Profile, local citations, and location-centric keywords to top local search results.",
    },
    {
      title: "Technical SEO Services",
      description:
        "Improve your website's infrastructure with responsiveness, fast loading, structured data, and enhanced indexing for enriched crawlability and performance.",
    },
    {
      title: "SEO Link Building Services",
      description:
        "Boost your domain authority and organic reach through legal, white-hat link-building campaigns targeting quality niches and high-authority domains.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Boost product discovery, retarget cart abandoners, and increase sales through visually compelling, platform-specific social media campaigns.",
    },
    {
      title: "Automotive",
      description:
        "Upgrade car listings, drive showroom traffic, and develop leads through geo-targeted Facebook, Instagram, and YouTube ads.",
    },
    {
      title: "Healthcare",
      description:
        "Develop trust, educate audiences, and highlight services compliantly with custom content and ad campaigns across social platforms.",
    },
    {
      title: "Education & E-learning",
      description:
        "Attract enrollments, promote success stories, and run lead-gen ads to enhance your student base via LinkedIn, Meta, and YouTube.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Boost reach and engagement for live shows, events, and releases with creative video ads and influencer promotions.",
    },
    {
      title: "Fintech",
      description:
        "Promote app installs, educate users, and build brand authority through paid social campaigns and niche-targeted content strategies.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "How can social media marketing help my business?",
      answer:
        "Social media marketing increases brand awareness, website traffic, and helps generate leads and sales by targeting the right audience through targeted campaigns.",
    },
    {
      id: 2,
      question: "How do paid ads differ from organic?",
      answer:
        "While organic content helps construct a community, paid ads boost reach and conversions, making social media marketing more effective and useful.",
    },
    {
      id: 3,
      question: "Do you help with social media crisis management?",
      answer:
        "Yes, we offer crisis management assistance to protect your brand integrity, including real-time response planning and reputation monitoring.",
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
          lines: ["Accelerate Your Business", "With Advanced SEO", "Services"],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/seo.png"
        description="From keyword selection to technical SEO and backlinking, we offer a full-suite approach to enhance your search engine performance and online credibility."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={[
          "Google Search Console",
          "Ahrefs",
          "SEMrush",
          "Moz",
          "Yoast SEO",
          "Google Analytics",
        ]}
        techRow2={["Google", "DuckDuckGo", "Yandex", "WordPress", "Shopify"]}
        techRow3={[]}
      />

      {/* What Makes Our Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our SEO Services Stand Out?"
        highlightedWords={[
          { text: "Our", position: "after" },
          { text: "SEO", position: "after" },
          { text: "Stand", position: "after" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "Rank top of the search engine results with personalised SEO strategies designed to grow your organic traffic, increase conversions, and develop long-term digital authority. Our experts combine technical SEO, on-page optimization, and white-hat link-building to deliver extraordinary results.",
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
          mainText: "Explore What Else We Offer In SEO Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "In", position: "after" },
            { text: "SEO", position: "after" },
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
        title="Connect With Our SEO Specialists And Get RankeD"
        highlightedWords={[
          { text: "Our", position: "after" },
          { text: "In", position: "after" },
          { text: "SEO", position: "after" },
          { text: "RankeD", position: "after" },
        ]}
        description="Ready to elevate your website ranking? Contact our SEO experts to get valuable insights on how to rank in a short period."
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
