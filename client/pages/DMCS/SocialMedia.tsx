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

export default function SocialMediaPage() {
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
      title: "Social Media Ads Management",
      description:
        "Target and convert potential customers with platform-oriented ad campaigns.",
    },
    {
      title: "Social Media Strategy & Consulting",
      description:
        "Strategize, refine, and enhance your brand with expert-led strategies.",
    },
    {
      title: "Content Creation & Scheduling",
      description:
        "Keep your customers engaged with continuous, scroll-stopping content.",
    },
    {
      title: "Paid Social Media Advertising",
      description:
        "Enhance your ad spend with customized targeting and creative assets.",
    },
    {
      title: "Social Media Analytics & Reporting",
      description:
        "Get actionable analytics to enhance your social performance.",
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
          lines: [
            "Boost Your Online",
            "Presence With Our Social",
            "Media Marketing Services",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/sm.png"
        description="Drive potential leads and boost your brand visibility with our expert social media strategies. From custom campaign design to continuous optimization, we ensure your business reaches the right audience."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={["Facebook", "Instagram", "Twitter", "LinkedIn"]}
        techRow2={["Meta Business Suite", "Hootsuite", "Buffer", "TikTok"]}
        techRow3={["Pinterest", "YouTube", "Snapchat", "Figma"]}
      />

      {/* What Makes Our Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Social Media Marketing Services Stand Out?"
        highlightedWords={[
          { text: "Our", position: "after" },
          { text: "Social", position: "after" },
          // { text: "Media", position: "after" },
          { text: "Marketing", position: "after" },
          // { text: "Services", position: "after" },
          { text: "Stand", position: "after" },
          { text: "Out?", position: "after" },
          // { text: "Stand", position: "after" },
        ]}
        firstColumnContent={{
          text: "A well-performed social media strategy enhances brand visibility, develops customer trust, and drives revenue. We persist in crafting customized campaigns tailored to your business goals. We design result-driven strategies that increase engagement, drive traffic, and boost conversions across social media platform.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "Our social media marketing services include data-driven audience targeting, continuous campaign optimization, interactive ad creation, and performance examination to ensure maximum ROI.",
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
            "Explore What Else We Offer In Social Media Marketing Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "Social", position: "after" },
            { text: "Marketing", position: "after" },
            { text: "What", position: "after" },
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
        title="Partner with Our Social Media Marketing Team"
        highlightedWords={[
          { text: "Social", position: "after" },
          { text: "Team", position: "after" },
        ]}
        description="Let’s turn likes into leads! Reach out today to design a custom social media campaign that motivates your audience and scales your business."
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
