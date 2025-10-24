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
      title: "Cloud Cost Optimization Services",
      description:
        "Reduce cloud expenses with expert cost analysis, workload equivalence, and budget-friendly cloud strategies.",
    },
    {
      title: "Cloud Disaster Recovery Solutions",
      description:
        "Execute robust backup and recovery strategies to ensure business continuity in case of failures.",
    },
    {
      title: "Cloud Security Monitoring Services",
      description:
        "Proactive security checks, threat detection, and compliance management to safeguard your cloud environment.",
    },
    {
      title: "Cloud Performance Optimization",
      description:
        "Boost speed, scalability, and performance with real-time monitoring and optimization.",
    },
    {
      title: "Cloud Application Support",
      description:
        "Keep your cloud-based applications updated, secure, and ready for peak performance.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Ensure 24/7 functioning, seamless user experiences, and secure transaction environments.",
    },
    {
      title: "Automotive",
      description:
        "Support affiliated vehicle platforms, real-time data processing, and IoT integrations with reliable cloud maintenance.",
    },
    {
      title: "Healthcare",
      description:
        "Maintain HIPAA-compliant cloud environments with zero tolerance for downtime.",
    },
    {
      title: "Education & E-learning",
      description:
        "Equip students and educators with always-on access to platforms and content. We fine-tune learning management systems for performance optimization, cost control, and 24/7 availability.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Deliver seamless streaming experiences and ultra-fast content loading with cloud environments tuned for low latency and high scalability.",
    },
    {
      title: "Fintech",
      description:
        "Protect complex financial operations with smart security protocols, real-time monitoring, and disaster recovery strategies.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What is cloud support?",
      answer:
        "Cloud Support means technical aid provided for cloud-based services and applications, ensuring smooth and efficient operation.",
    },
    {
      id: 2,
      question: "How to handle cloud service?",
      answer:
        "Monitor your cloud resources. One of the most important aspects of cloud maintenance is monitoring your cloud resources, such as servers, storage, databases, and applications.",
    },
    {
      id: 3,
      question: "What is the function of cloud storage?",
      answer:
        "Cloud Storage allows organizations to store, access, and maintain data so that they do not need to own and operate their own data centers, moving expenses from a capital expenditure model to operational.",
    },
    {
      id: 4,
      question: "How can I hire your services?",
      answer:
        "We offer full-time, part-time, and project-based services to our customers.",
    },
  ];

  // In CloudMaintenanceSupport.tsx
  // Add this after the services and industries declarations

  // Cloud Maintenance & Support specific technology arrays
  const cloudMaintenanceTechRow1 = [
    "AWS Systems Manager",
    "Azure Monitor",
    "CloudWatch",
    "Prometheus",
    "Grafana",
  ];

  const cloudMaintenanceTechRow2 = [
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "Ansible",
  ];

  const cloudMaintenanceTechRow3 = [
    "Redis",
    "MongoDB",
    "PostgreSQL",
    "Nginx",
  ];

  // Then in the render section, update the FriendsMarquee component:

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: [
            "Comprehensive Cloud",
            "Maintenance &",
            "Infrastructure Support",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/maintain.png"
        description="Our professionals deliver real-time monitoring, security patching, resource upgrading, and cost tuning to ensure your cloud environment remains optimized and secure."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={cloudMaintenanceTechRow1}
        techRow2={cloudMaintenanceTechRow2}
        techRow3={cloudMaintenanceTechRow3}
      />

      {/* What Makes Our NLP Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Cloud Maintenance & Support Services Stand Out?"
        highlightedWords={[
          { text: "Our", position: "whole" },
          { text: "Maintenance", position: "whole" },
          { text: "Services", position: "whole" },
          // { text: "MERN", position: "whole" },
          // { text: "lopment", position: "after" },
        ]}
        firstColumnContent={{
          text: "Routine maintenance is key to ensuring your cloud environment runs seamlessly, securely, and cost-effectively. We help businesses minimize unnecessary cloud costs through strategic cost optimization and safeguard their operations with smart disaster recovery solutions. From infrastructure monitoring to performance improvements and 24/7 technical support, we offer cloud support tailored to your business.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "",
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection industries={industries} />

      {/* Language Services Section */}
      <LanguageServicesSection
        sectionTitle={{
          mainText:
            "Explore What Else We Offer In Cloud Maintenance & Support Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "Cloud", position: "after" },
            { text: "&", position: "after" },
            { text: "Services", position: "after" },
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
        title="Avail Expert Cloud Maintenance & Support Services Today"
        highlightedWords={[
          { text: "Cloud", position: "after" },
          { text: "Support", position: "after" },
          // { text: "Services", position: "after" },
          // { text: "Today", position: "after" },
        ]}
        description="Ensure the smooth functionality, security, and performance of your cloud infrastructure with our professional cloud maintenance and support services."
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
