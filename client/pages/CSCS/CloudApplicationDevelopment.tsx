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
      title: "Custom Cloud Application Development",
      description:
        "Design and develop custom cloud applications that align accurately with your unique business goals and operational needs.",
    },
    {
      title: "Cloud Software Development",
      description:
        "Develop high-performance, cloud-native software solutions with smooth third-party integrations and robust architecture.",
    },
    {
      title: "Cloud-Based SaaS Development",
      description:
        "Create scalable, secure, and cost-efficient SaaS applications that deliver smooth user experiences across platforms.",
    },
    {
      title: "Cloud Migration & Modernization",
      description:
        "Relocate legacy systems to the cloud and modernize your infrastructure with the tiniest downtime and maximum efficiency.",
    },
    {
      title: "AWS Cloud Application Development",
      description:
        "Utilize the power of AWS to develop scalable, secure, and high-performing cloud applications tailored to your business.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Build high-performance, scalable online shopping stores with custom cloud apps that facilitate inventory management, customized UX, and real-time analytics.",
    },
    {
      title: "Automotive",
      description:
        "Develop cloud-based platforms for vehicle tracking, smart mobility, dealership management, and fleet operations with robust performance and secure integrations.",
    },
    {
      title: "Healthcare",
      description:
        "Develop HIPAA-compliant cloud applications for patient management, remote monitoring, telemedicine, and data analytics, ensuring both security and scalability.",
    },
    {
      title: "Education & E-learning",
      description:
        "Build interactive, cloud-native learning solutions with real-time collaboration, user management, and content delivery—accessible anywhere, anytime.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Manage seamless media streaming and content delivery with cloud apps enriched with speed, storage, and high availability across devices.",
    },
    {
      title: "Fintech",
      description:
        "Develop secure, regulatory-compliant cloud applications for digital banking, payment gateways, and real-time financial tools, featuring advanced encryption and high uptime.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "How to develop cloud-based applications?",
      answer:
        "The process of cloud-based app development is based on; Market research, expert developers, product requirements, tech and tools research, MVP and tests, repetition until precise results.",
    },
    {
      id: 2,
      question: "Are cloud-based apps secure?",
      answer:
        "Cloud security is a broad field, and it is not possible to control every variety of attack. However, a well-structured cloud security strategy reduces the risk of cyber attacks.",
    },
    {
      id: 3,
      question: "How long does it take to build a cloud application?",
      answer:
        "The timeline varies depending on the complexity of the application, features required, and integration requirements. On average, a cloud app development project can take from a few weeks to several months.",
    },
    {
      id: 4,
      question: "How can I hire your services?",
      answer:
        "We offer full-time, part-time, and project-based services to our customers.",
    },
  ];
  const cloudAppTechRow1 = [
    "AWS",
    "Azure",
    "Kubernetes",
    "Docker",
    "Serverless",
    "Containers",
  ];

  const cloudAppTechRow2 = [
    "Node.js",
    "Python",
    "Java",
    "Go",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Kafka",
  ];

  const cloudAppTechRow3 = [
    "CI/CD",
    "Gitpod",
    "Terraform",
    "Helm",
    "GraphQL",
  ];

  // Then in the render section, update the Fr

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: [
            "Power Your Business With",
            "Custom Cloud Applications",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/cloud.png"
        description="Hire our DevOps services experts to develop secure, scalable cloud apps with high availability, fast performance, and seamless integration capabilities"
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={cloudAppTechRow1}
        techRow2={cloudAppTechRow2}
        techRow3={cloudAppTechRow3}
      />
      {/* What Makes Our NLP Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Cloud Application Services Stand Out?"
        highlightedWords={[
          {text: "Makes", position: "whole"},
          { text: "Our", position: "whole" },
          { text: "Application", position: "whole" },
          { text: "Stand", position: "whole" },
          { text: "Out?", position: "whole" },
          // { text: "lopment", position: "after" },
        ]}
        firstColumnContent={{
          text: "Cloud applications deliver unparalleled flexibility, scalability, and efficiency. Whether you require cloud-based software, custom cloud app development, or enterprise-grade cloud solutions, we help businesses reduce operational expenses, improve security, and performance.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "Connect with us to discuss your project and explore the perfect cloud application development solutions for your business to stay on top in a rapidly evolving digital landscape.",
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection industries={industries} />

      {/* Language Services Section */}
      <LanguageServicesSection
        sectionTitle={{
          mainText: "Explore What Else We Offer in Cloud Application Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "Cloud", position: "after" },
            { text: "Services", position: "after" },
            // { text: "Angular", position: "after" },
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
        title="Scale with Confidence Using Cloud Applications"
        highlightedWords={[
          { text: "Confidence", position: "after" },
          { text: "Applications", position: "after" },
          { text: "Using", position: "after" },
          // { text: "Today", position: "after" },
        ]}
        description="We develop secure, high-performance cloud apps that help your business lead in a fast-evolving market."
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
