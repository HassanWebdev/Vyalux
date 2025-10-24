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

export default function ContentStrategyPage() {
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
      title: "Website Content Writing",
      description: "SEO-optimized content that defines your digital identity.",
    },
    {
      title: "Blog & Article Writing",
      description: "Consistent, value-driven writing to enhance visibility.",
    },
    {
      title: "SEO Content Strategy",
      description: "Target the right keywords to rank search results.",
    },
    {
      title: "Content Marketing for Business Growth",
      description: "Strategic content optimization for scalable growth.",
    },
    {
      title: "Landing Page Content",
      description: "Content that inspires action and drives results.",
    },
    {
      title: "Content Strategy Consulting",
      description: "Expert direction for impactful content execution.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Deliver high-value product descriptions, services pages, and promotional content that drive online sales and enhance customer experience.",
    },
    {
      title: "Automotive",
      description:
        "Produce detailed vehicle descriptions, category pages, and blogs that boost dealership visibility and educate potential buyers.",
    },
    {
      title: "Healthcare",
      description:
        "Create HIPAA-compliant, informative healthcare content like service pages, fitness blogs, and patient FAQs that build trust and improve patient engagement.",
    },
    {
      title: "Education & E-learning",
      description:
        "Create compelling course descriptions, LMS content, and academic blogs customized to learners, educators, and institutions.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Craft engaging show descriptions, artist bios, platform details, and trending content blogs to keep users informed and entertained.",
    },
    {
      title: "Fintech",
      description:
        "Produce quality fintech content, including investment opportunities guides, service pages, product details, and regulatory insights to gain trust and SEO traction.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What is content strategy?",
      answer:
        "It is a roadmap of content marketing efforts, from keyword research to blog and articles, and landing page content, depending on the project.",
    },
    {
      id: 2,
      question: "What are the 4 Cs of content writing?",
      answer:
        '"Four Cs": clear, concise, compelling, credible. The easiest formula for getting traffic to your blog.',
    },
    {
      id: 3,
      question: "What is the main purpose of a 50:50 content strategy?",
      answer:
        "The purpose of these techniques is to gain customer attention and direct them to required actions.",
    },
    {
      id: 4,
      question: "How long does it take to make a content strategy?",
      answer:
        "Setting goals and objectives can take a few days to a week, while examining your target audience and conducting content research and planning can take up to a month.",
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
          lines: ["Rank On Top With Strategic", "Content Marketing"],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/content.png"
        description="Boost your digital presence with content that delivers. Our professional team creates SEO-friendly, value-driven content crafted to attract, engage, and convert your potential audience, driving real growth for your business."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={["WordPress", "HubSpot", "Contentful", "Webflow"]}
        techRow2={["Ghost", "Sanity", "Strapi", "Shopify Blog"]}
        techRow3={[
          "Google Analytics",
          "Ahrefs",
          "SEMrush",
          "Grammarly",
        ]}
      />

      {/* What Makes Our Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Content Strategy & Writing Services Stand Out?"
        highlightedWords={[
          { text: "Our", position: "after" },
          { text: "Strategy", position: "after" },
          { text: "Services", position: "after" },
          { text: "&", position: "after" },
          // { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "High-quality content is the core of effective digital marketing. If you're planning to strengthen your online presence, our content experts are here to help. We specialize in SEO-optimized blogs, engaging web content, and account based marketing AMB messaging that enhances brand authority, improves search rankings, and drives quality leads.",
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
            "Explore What Else We Offer In Content Strategy & Writing Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "Content", position: "after" },
            { text: "Writing", position: "after" },
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
        title="Begin Your Content Marketing Journey with Us"
        highlightedWords={[
          { text: "with", position: "after" },
          { text: "Content", position: "after" },
          { text: "Us", position: "after" },
        ]}
        description="Our content marketing experts are ready to craft exceptional strategies that resonate with your audience. Let’s build content that fuels growth and delivers sky-high results."
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
