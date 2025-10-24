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
      title: "Business Process Outsourcing Services",
      description:
        "Streamlined solutions to handle your back-office operations efficiently.",
    },
    {
      title: "Software Development Outsourcing Company",
      description:
        "Develop scalable software with a remote team of professionals.",
    },
    {
      title: "BPO Consulting",
      description: "Get strategic advice to enhance operations and cut costs.",
    },
    {
      title: "Outsourced Customer Service",
      description: "Build exceptional support with a dedicated team.",
    },
    {
      title: "Custom BPO Solutions",
      description: "Outsourcing customized to your unique workflows and needs.",
    },
    {
      title: "IT Helpdesk and Technical Support",
      description: "Fast, reliable support to keep your systems running.",
    },
  ];
  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Ensure smooth user experience, safe transactions, and seamless performance across devices with thorough functional and performance testing.",
    },
    {
      title: "Automotive",
      description:
        "Formalize embedded systems, connected apps, and automotive software with accuracy testing for safety, flexibility, and compliance.",
    },
    {
      title: "Healthcare",
      description:
        "Ensure data privacy, system integrity, and regulatory compliance (including HIPAA and HL7) through agile QA practices in healthcare technology platforms.",
    },
    {
      title: "Education & E-learning",
      description:
        "Test scalability, content delivery, and cross-device compatibility for LMS, online classes, and educational apps.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Deliver lightning-fast experiences and flawless UI by load testing streaming platforms and optimizing performance across networks.",
    },
    {
      title: "Fintech",
      description:
        "Perform secure, fail-safe testing for financial applications with a focus on data integrity, compliance (PCI-DSS), and real-time transactions.",
    },
  ];
  const faqData = [
    {
      id: 1,
      question: "How does business process outsourcing (BPO) work?",
      answer:
        "Business process outsourcing involves handing over specific business tasks such as customer service, data entry, or IT support to third-party service providers to reduce time, cost, and improve efficiency.",
    },
    {
      id: 2,
      question: " What industries benefit most from outsourcing?",
      answer:
        "Industries including e-commerce, healthcare, fintech, real estate, logistics, and IT often outsource tasks to reduce time, cost, and focus on core functions.",
    },
    {
      id: 3,
      question: "How secure is your outsourcing process?",
      answer:
        "We follow strict data protection protocols, secure infrastructure, and comply with global data regulations, including GDPR, to keep your information safe and secure.",
    },
    {
      id: 4,
      question: "How can I hire your services? ",
      answer:
        "We offer full-time, part-time, and project-based services to our customers.",
    },
  ];

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: ["Outsource Smartly With", "Our BPO & Development", "Experts"],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/BPO.png"
        description="From back-office assistance to full-cycle product development, we offer cost-effective BPO services customized for startups, enterprises, and everything in between."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={["Salesforce", "Zendesk", "HubSpot", "Zoho"]}
        techRow2={["Call Center Software", "OCR Technology", "SAP", "QNAP"]}
        techRow3={[]}
      />

      {/* What Makes Our Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Business Outsourcing Services Stand Out?"
        highlightedWords={[
          { text: "Our", position: "after" },
          { text: "Outsourcing", position: "after" },
          { text: "Out?", position: "after" },
          { text: "Stand", position: "after" },
        ]}
        firstColumnContent={{
          text: "At VYALUX, we provide customized BPO and software outsourcing services that help businesses scale operations without compromising quality. Our combination of skilled professionals, automation tools, and agile practices ensures every process is efficient, accurate, and scalable.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "Expand faster, cut expenditures, and stay concentrated on your business objectives—while we manage the backend with precision.",
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
            "Explore What Else We Offer In Business Outsourcing Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "We", position: "after" },
            { text: "Outsourcing", position: "after" },
            { text: "Services", position: "after" },
            { text: "Business", position: "after" },
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
        title="Contact Our Expert BPO Consultant Today"
        highlightedWords={[
          { text: "Expert", position: "after" },
          { text: "BPO", position: "after" },
          { text: "Today", position: "after" },
        ]}
        description="Ready to outsource and upgrade your platform? Collaborate with our experts and discover how our BPO and software outsourcing services can transform your business."
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
