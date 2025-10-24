import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FriendsMarquee from "../../components/FriendsMarquee";
import HeroSection from "../../components/Laravel/HeroSection";
import ServicesSection from "../../components/Laravel/ServicesSection";
import IndustriesSection from "../../components/Laravel/IndustriesSection";
import CaseStudiesSection from "../../components/Laravel/CaseStudiesSection";
import ContactSection from "../../components/Laravel/ContactSection";
import LanguageServicesSection from "../../components/Laravel/LanguageServicesSection";
import FAQ from "../../components/FAQ";
import ConversationSection from "../../components/ConversationSection";
import Footer from "../../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function DedicatedTeam() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Your animations here
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleButtonHover = () => {
    if (window.innerWidth >= 1024) {
      gsap.to(".btn-blob", {
        scale: 1.05,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleButtonLeave = () => {
    if (window.innerWidth >= 1024) {
      gsap.to(".btn-blob", {
        scale: 1,
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
      title: "SEO Services",
      description:
        "Enhance your website's visibility with effective SEO practices tailored to your audience and market.",
    },
    {
      title: "PPC Advertising",
      description:
        "Drive instant traffic and conversions with cost-effective, high-performing pay-per-click campaigns.",
    },
    {
      title: "Social Media Marketing",
      description:
        "Build your online presence and interact with your audience through engaging social strategies.",
    },
    {
      title: "Content Marketing",
      description:
        "Lift your brand with content that informs, inspires, and drives action",
    },
    {
      title: "Email Marketing",
      description:
        "Bring leads and customers with targeted emails that nurture and convert.",
    },
    {
      title: "Digital Marketing Consulting Services",
      description:
        "Get strategic direction and insights to maximize your marketing effectiveness.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Boost online presence, improve product sales, and retarget abandoned carts with SEO, PPC, and email automation.",
    },
    {
      title: "Automotive",
      description:
        "Build leads for dealerships and auto services through local SEO, paid ads, and targeted content marketing.",
    },
    {
      title: "Healthcare",
      description:
        "Develop trust and attract patients with compliant digital marketing techniques, including SEO, reputation management, and informative content.",
    },
    {
      title: "Education & E-learning",
      description:
        "Sell courses and increase enrollments with multi-channel techniques including social media campaigns, search ads, and content marketing.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Drive subscriptions and viewer engagement with trending content, influencer marketing, and account-based user targeting.",
    },
    {
      title: "Fintech",
      description:
        "Build user trust and increase sign-ups with performance-based marketing, informative content, and data-driven strategies.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question:
        "What makes you stand out as a digital marketing services company?",
      answer:
        "We build customized strategies, expert teams, and data-driven implementation across all major digital marketing channels.",
    },
    {
      id: 2,
      question: "Do you provide digital marketing services near me?",
      answer:
        "Yes! We offer our services globally and can tailor local SEO and advertising strategies for your specific area.",
    },
    {
      id: 3,
      question: "What if I have a small budget?",
      answer:
        "We provide affordable digital marketing services that deliver impact without disturbing your budget.",
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
            "Accelerate Your Online Success",
            "With Our Smart Digital",
            "Marketing Services",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/digital.png"
        description="Our full-fledged digital marketing services are designed to attract, engage, and convert. We blend creativity and insights to help you reach the right audience at the right time, with the right message."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={[
          "Google Analytics",
          "Google Ads",
          "Facebook Ads",
          "Instagram Ads",
          "LinkedIn Ads",
        ]}
        techRow2={[, "HubSpot", "Salesforce", "Marketo", "Buffer"]}
        techRow3={[
          "Hootsuite",
          "Sprout Social",
          "Canva",
          "SEMrush",
          "Ahrefs",
          "Moz",
        ]}
      />

      {/* What Makes Our Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Digital Marketing  Services Stand Out?"
        highlightedWords={[
          { text: "Our", position: "after" },
          { text: "Stand", position: "after" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "Join our digital marketing experts to acquire growth through data-driven techniques and high-performing campaigns.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "We blend creativity, analytics, and strategy to create custom solutions tailored to your industry, goals, and audience. Whether you need to drive more traffic, generate potential leads, or increase brand awareness, we deliver growth with accuracy and speed.",
          height: "h-16 sm:h-20 lg:h-[100px]",
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection industries={industries} />

      <LanguageServicesSection
        sectionTitle={{
          mainText: "Explore What Else We Offer In Digital Marketing Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "We", position: "after" },
            { text: "Digital", position: "after" },
            { text: "Services", position: "after" },
          ],
        }}
        serviceItems={services}
        backgroundColor="#040404"
        accentColor="#AB322C"
        mainTextColor="white"
        width="xl:w-[700px] lg:w-[550px]"
      />

      {/* Top Case Studies Section */}
      <CaseStudiesSection />

      {/* Contact Form Section */}
      <ContactSection />

      <FAQ faqData={faqData} />

      <ConversationSection
        title="Crush the Competition Online"
        highlightedWords={[{ text: "Competition", position: "after" }]}
        description="Rank on top with VYALUX’s expert digital marketing solutions. We transform clicks into customers and campaigns into revenue."
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
