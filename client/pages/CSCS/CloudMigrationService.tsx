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
      title: "End-to-End Cloud Migration Services",
      description:
        "Experience a fully organized cloud migration journey from strategy to implementation, tailored to your business needs.",
    },
    {
      title: "Cloud Application Migration Services",
      description:
        "Rehost, refactor, or redevelop your applications in the cloud for improved agility and performance.",
    },
    {
      title: "Cloud Infrastructure Migration Services",
      description:
        "Shift your on-premise infrastructure to the cloud with expert planning, minimal downtime, and full security",
    },
    {
      title: "Cloud Data Migration Services",
      description:
        "Safely transfer and sync complex datasets across cloud platforms with accuracy and integrity.",
    },
    {
      title: "Cloud Migration Managed Services",
      description:
        "Ensure long-term cloud success with proactive monitoring, continuous optimization, and expert post-migration support.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Move legacy e-commerce systems to the cloud to enable faster load times, real-time stock sync, customized shopping experiences, and scalable infrastructure during high-traffic events.",
    },
    {
      title: "Automotive",
      description:
        "Transfer automotive platforms, IoT systems, and fleet management tools to the cloud for enhanced real-time data processing, vehicle diagnostics, and improved operational functionality.",
    },
    {
      title: "Healthcare",
      description:
        "Easily migrate patient data, EMR systems, and telehealth solutions to secure, HIPAA-compliant cloud environments.",
    },
    {
      title: "Education & E-learning",
      description:
        "Move learning platforms, content libraries, and student portals to the cloud for seamless access, optimized performance during peak usage, and lower infrastructure costs.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Shift content management systems, streaming channels, and media archives to the cloud to ensure low latency, global expansion, and efficient content delivery.",
    },
    {
      title: "Fintech",
      description:
        "Safely migrate financial tools, customer data, and analytics platforms to the cloud with compliance-based strategies, high availability, and real-time processing power.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "How long does the cloud migration process take?",
      answer:
        "The time depends on the complexity of your applications and features. On average, cloud migration services can take a few weeks to several months to complete the migration.",
    },
    {
      id: 2,
      question: "Which cloud platforms do you support for migration?",
      answer:
        "We offer migration services for AWS, Google Cloud, Azure, and hybrid cloud environments, ensuring smooth integration with your business needs.",
    },
    {
      id: 3,
      question: "What are the benefits of cloud migration for my business?",
      answer:
        "Cloud migration enhances scalability, security, reduces IT costs, and enables remote access, allowing businesses to grow more efficiently.",
    },
    {
      id: 4,
      question: "How can I hire your services?",
      answer:
        "We offer full-time, part-time, and project-based services to our customers.",
    },
  ];
  // In CloudMigrationService.tsx
  // Add this after the services and industries declarations

  // Cloud Migration Service specific technology arrays
  const cloudMigrationTechRow1 = [
    "AWS Migration Hub",
    "CloudEndure",
    "AWS Database Migration",
    "Terraform",
  ];

  const cloudMigrationTechRow2 = [
    "AWS Application Migration",
    "VM Migration",
    "Database Migration",
    "Storage Migration",
  ];
  const cloudMigrationTechRow3 = [
    "AWS Server Migration",
    "Azure Hybrid Cloud",
    "Containerization",
    "Ansible",
  ];

  // Then in the render section, update the FriendsMarquee component:

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: [
            "Cloud Migration Services",
            "That Ensure Seamless",
            "Transitions",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/migration.png"
        description="We help you migrate applications, data, and workloads to the cloud securely and efficiently, reducing downtime and enhancing scalability and performance."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={cloudMigrationTechRow1}
        techRow2={cloudMigrationTechRow2}
        techRow3={cloudMigrationTechRow3}
      />

      {/* What Makes Our NLP Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Cloud Migration Services Stand Out?"
        highlightedWords={[
          { text: "Our", position: "whole" },
          { text: "Migration", position: "whole" },
          { text: "Stand", position: "whole" },
          { text: "Out?", position: "whole" },
          // { text: "lopment", position: "after" },
        ]}
        firstColumnContent={{
          text: "Moving to the cloud enables businesses to enhance agility, achieve cost savings, and improve security. Our cloud transition consulting services ensure a seamless shift by analyzing your infrastructure, mitigating risks, and implementing the optimal cloud migration solutions tailored to your needs.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "Get professional cloud migration consulting services and move to the cloud with low downtime and maximum efficiency.",
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection industries={industries} />

      {/* Language Services Section */}
      <LanguageServicesSection
        sectionTitle={{
          mainText: "Explore What Else We Offer In Cloud Migration Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "We", position: "after" },
            { text: "Cloud", position: "after" },
            { text: "Services", position: "after" },
            // { text: "ment", position: "after" },
          ],
        }}
        serviceItems={services}
        backgroundColor="#040404"
        accentColor="#AB322C"
        mainTextColor="white"
        width="xl:w-[700px] lg:w-[560px]"
      />

      {/* Top Case Studies Section */}
      <CaseStudiesSection />

      {/* Contact Form Section */}
      <ContactSection />

      <FAQ faqData={faqData} />

      <ConversationSection
        title="Move to the Cloud with Confidence"
        highlightedWords={[
          { text: "Cloud", position: "after" },
          { text: "with", position: "after" },
          // { text: "Services", position: "after" },
          // { text: "Today", position: "after" },
        ]}
        description="We perform seamless cloud migrations that boost performance, reduce costs, and set the foundation for future scalability."
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
