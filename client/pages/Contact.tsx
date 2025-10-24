import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FriendsMarquee from "@/components/FriendsMarquee";
import HeroSection from "@/components/Laravel/HeroSection";
import ServicesSection from "@/components/Laravel/ServicesSection";
import IndustriesSection from "@/components/Laravel/IndustriesSection";
import CaseStudiesSection from "@/components/Laravel/CaseStudiesSection";
import ContactSection from "@/components/Laravel/ContactSection";
import LanguageServicesSection from "@/components/Laravel/LanguageServicesSection";
import FAQ from "@/components/FAQ";
import ConversationSection from "@/components/ConversationSection";
import Footer from "@/components/Footer";

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

  const faqData = [
    {
      id: 1,
      question:
        "Is it possible to integrate third-party applications with Laravel?",
      answer:
        "Yes, we are experts in integrating third-party applications with Laravel, such as APIs, payment gateways, CRMs, and more.",
    },
    {
      id: 2,
      question: "What is the cost of developing a Laravel application?",
      answer:
        "The cost varies based on the complexity, feature requirements, and customization needs. Contact us for a detailed quote.",
    },
    {
      id: 3,
      question: "What kind of solutions do you offer?",
      answer:
        "We build AI-powered chatbots, voice assistants, front-end and back-end solutions, graphic design, predictive analytics tools, and automation solutions.",
    },
    {
      id: 4,
      question: "How long does it take to develop a Laravel web application?",
      answer:
        "The timeline depends on the project scope and complexity, typically ranging from a few weeks to several months.",
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
          lines: ["Let's Talk", "Vyalux Support Team"],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/contact.png"
        description="Need help or assistance with our products? Our technical support team is ready to assist you. Know anything about product guidance, order management, or partnership opportunities? We're just a click away."
      />

      <ContactSection />

      <FAQ faqData={faqData} />

      <ConversationSection
        title="Have a big idea? Let’s build it together"
        highlightedWords={[
          { text: "Let’s", position: "after" },
          { text: "build", position: "after" },
          { text: "it", position: "after" },
        ]}
        description="From innovative solutions to expert-level SEO, our team knows how to rank high. We develop secure, high-quality, and future-ready solutions trusted by thousands of users daily."
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
