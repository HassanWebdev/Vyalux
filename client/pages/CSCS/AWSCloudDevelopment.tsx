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
      title: "AWS Cloud Consulting Services",
      description:
        "Get expert guidance on business integration, architecture, and data-based cloud strategies.",
    },
    {
      title: "AWS Cloud Migration Services",
      description:
        "Shift to AWS smoothly with low downtime and enhanced security.",
    },
    {
      title: "AWS Managed Services",
      description:
        "Enable smooth cloud operations with consistent monitoring and expert optimization.",
    },
    {
      title: "AWS Application Development",
      description:
        "Build reliable, secure, and scaling AWS cloud applications.",
    },
    {
      title: "AWS DevOps Consulting",
      description:
        "Automate workflows and boost deployment efficiency using AWS DevOps.",
    },
    {
      title: "AWS Infrastructure Management",
      description:
        "Deploy high availability site security with optimized AWS architecture.",
    },
    {
      title: "AWS Cloud Security Solutions",
      description:
        "Guard your cloud deployments with state-of-the-art security measures.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Leverage the flexibility of AWS to manage high-traffic online stores, customize customer experiences with AI, and ensure secure transactions with robust cloud infrastructure.",
    },
    {
      title: "Automotive",
      description:
        "Develop smart mobility solutions, fleet tracking systems, or connected vehicle platforms driven by AWS IoT, machine learning, and scalable backend systems.",
    },
    {
      title: "Healthcare",
      description:
        "Ensure HIPAA-compliant data storage, deploy secure patient portals, enable real-time data insights, and enhance telemedicine applications with AWS's reliable cloud infrastructure.",
    },
    {
      title: "Education & E-learning",
      description:
        "Furnish engaging, cloud-native learning platforms with low-latency video streaming, global accessibility, and adaptive learning features using AWS tools.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Enable impactful content delivery networks (CDNs), smooth media streaming, and real-time insights with AWS Media Services and cloud storage solutions.",
    },
    {
      title: "Fintech",
      description:
        "Develop secure, scalable financial platforms with AWS's compliance-ready architecture, smart data encryption, and real-time transaction processing capabilities.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What are AWS Cloud services?",
      answer:
        "AWS offers a wide range of services, including compute, storage, and databases, enabling organizations to reduce costs, scale swiftly, and deploy globally.",
    },
    {
      id: 2,
      question: "How AWS works?",
      answer:
        "AWS is designed to enable application providers, ISVs, and vendors to quickly and securely host their applications, whether existing or new SaaS-based applications.",
    },
    {
      id: 3,
      question: "Is AWS Better than Azure?",
      answer:
        "AWS offers networking features, such as VPC and Direct Connect. It is suitable for organizations that need low-latency performance across different regions. Azure offers network services like ExpressRoute, but AWS delivers robust networking capabilities.",
    },
    {
      id: 4,
      question: "How can I hire your services?",
      answer:
        "We offer full-time, part-time, and project-based services to our customers.",
    },
  ];

  const awsTechRow1 = [
    "EC2",
    "S3",
    "Lambda",
    "CloudFront",
    "RDS",
    "DynamoDB",
  ];

  const awsTechRow2 = [
  ];

  const awsTechRow3 = [
    "Terraform",
    "Docker",
    "Kubernetes",
    "Serverless",
    "CI/CD",
    "Node.js",
    "Python",
  ];

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: [
            "Transform Your Business",
            "With Secure, Scalable AWS",
            "Cloud Solutions",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/aws.png"
        description="Leverage scalable, secure, and optimized AWS services—from cloud migration to management and deployment—to drive innovation and growth with our DevOps services."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={awsTechRow1}
        techRow2={awsTechRow2}
        techRow3={awsTechRow3}
      />

      {/* What Makes Our NLP Services Stand Out Section */}
      <ServicesSection
        title=" What Makes Our AWS Cloud Services Stand Out?"
        highlightedWords={[
          { text: "Our", position: "whole" },
          { text: "Makes", position: "whole" },
          { text: "Services", position: "whole" },
          { text: "Out?", position: "whole" },
          // { text: "lopment", position: "after" },
        ]}
        firstColumnContent={{
          text: "AWS cloud services deliver scalable, secure, and reliable infrastructure that enables businesses to accelerate digital transformation. Whether you're migrating to the cloud or optimizing existing workloads, our AWS services reduce costs, boost performance, and ensure enterprise-grade security",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "Start with us today to unlock the full power of AWS and drive smarter cloud adoption",
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection industries={industries} />

      {/* Language Services Section */}
      <LanguageServicesSection
        sectionTitle={{
          mainText:
            "Explore What Else We Offer In AWS Cloud Development Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "What", position: "after" },
            { text: "AWS", position: "after" },
            { text: "Development", position: "after" },
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
        title="Get Scalable & Secure AWS Cloud Solutions Today"
        highlightedWords={[
          { text: "Secure", position: "after" },
          { text: "AWS", position: "after" },
          { text: "Today", position: "after" },
          // { text: "Today", position: "after" },
        ]}
        description="We help businesses leverage AWS for seamless cloud migration, intelligent deployments, and optimized performance—securely and cost-effectively."
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
