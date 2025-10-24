import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FriendsMarquee from "../components/FriendsMarquee";
import HeroSection from "../components/Laravel/HeroSection";
import ServicesSection from "../components/Laravel/ServicesSection";
import IndustriesSection from "../components/Laravel/IndustriesSection";
import MernServicesSection from "../components/Laravel/MernServicesSection";
import CaseStudiesSection from "../components/Laravel/CaseStudiesSection";
import ContactSection from "../components/Laravel/ContactSection";
import LanguageServicesSection from "@/components/Laravel/LanguageServicesSection";
import FAQ from "../components/FAQ";
import ConversationSection from "../components/ConversationSection";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function QaPage() {
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
      title: "Manual Software Testing",
      description:
        "We perform thorough, human-based functional and usability testing to ensure every field of your software provides an intuitive and smooth user experience.",
    },
    {
      title: "Automated Software Testing Services",
      description:
        "We utilize the power of AI-driven tools for incredibly fast, efficient, and repeatable testing.",
    },
    {
      title: "Performance Testing",
      description:
        "Our expertise in load, stress, and scalability testing ensures your applications remain stable and responsive under any user demand.",
    },
    {
      title: "Security Testing",
      description:
        "Proactively pinpoint and rectify errors, safeguarding sensitive information and bracing your applications against potential threats.",
    },
    {
      title: "QA Consulting & Support",
      description:
        "Besides QA, we provide 24/7 monitoring and maintenance for long-term reliability and trust.",
    },
  ];
  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "We guarantee flawless shopping experiences through relentless SQA, utilizing both manual and automated testing to validate inventory sync, payment gateways, and user flows.",
    },
    {
      title: "Automotive",
      description:
        "We utilize manual and automated testing for automobile diagnostics, tracking systems, and in-car software, ensuring high performance and safety.",
    },
    {
      title: "Healthcare",
      description:
        "As experts in HIPAA-compliant SQA, we carefully test healthcare applications using manual validation and automation for data integrity and security.",
    },
    {
      title: "Education & E-learning",
      description:
        "Recast learning adventures through our comprehensive SQA. We apply manual and automated testing to LMS systems and online classrooms.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Our SQA ensures fast, adaptive entertainment platforms by extensively testing live streaming, on-demand, and subscription services.",
    },
    {
      title: "Fintech",
      description:
        "Our manual and automated testing optimize dashboards, payment gateways, and real-time data, ensuring precision, security, and compliance in financial operations.",
    },
  ];
  const faqData = [
    {
      id: 1,
      question: "What is manual SQA?",
      answer:
        "A manual QA tester applies several written testing techniques and documented steps to validate software quality and performance.",
    },
    {
      id: 2,
      question: "What is Automated QA?",
      answer:
        "Automated QA has been performed using AI-powered automation tools and frameworks that write and execute testing scripts automatically.",
    },
    {
      id: 3,
      question: "Is SQA a difficult field?",
      answer:
        "The answer would be no. Especially, manual testing is quite easy to understand for a person who has a basic knowledge of websites and apps, UI/UX, etc.",
    },
    {
      id: 4,
      question: "How is a test case written?",
      answer:
        "By writing a reasonable description of the requirements, detailing the testing process, and providing details of the software undergoing testing. This would include software version, data points, hardware, registration, date, time, etc.",
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
            lines: [
              "We Guarantee You",
              "Flawless Websites and",
              "Mobile Apps Experiences",
            ],
          }}
          onButtonHover={handleButtonHover}
          onButtonLeave={handleButtonLeave}
          imageSrc="/WP/sqa.png"
          description="Software glitches often hinder your business. We offer end-to-end software testing services tailored to ensure a seamless user experience. Our expert QA enhances your software, strengthens its security, and boosts its performance."
        />

      {/* Technologies We Use Section */}
      <FriendsMarquee 
        title="Technologies We Use"
        techRow1={[
          "Selenium",
          "Cypress",
          "Playwright",
          "Appium",
          "Postman",
        ]}
        techRow2={[
          "Java",
          "JavaScript",
          "TypeScript",
          "Python",
          "C#",
          "Testin",
        ]}
        techRow3={[
          "CI/CD",
          "SonarQube",
          "OWASP",
          "Jira",
          "Mock Service Worker",
        ]}
      />

      {/* What Makes Our SQA Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our SQA Testing Services Stand Out?"
        highlightedWords={[
          { text: "Our", position: "whole" },
          { text: "SQA", position: "whole" },
          { text: "Out?", position: "whole" },
          { text: "Services", position: "whole" },
          // { text: "lopment", position: "after" },
        ]}
        firstColumnContent={{
          text: "As a web design and development company, we comprehend that flawless software boosts business growth. Our professional testing services meticulously notice and deter bugs, ensuring unwavering reliability and an unparalleled user experience. We focus on security, identifying vulnerabilities to save sensitive data and sustain compliance. Furthermore, our performance testing enhances efficiency and ensures your software grows effortlessly with demand.",
          height: "h-28 sm:h-32 lg:h-[280px]",
        }}
        secondColumnContent={{
          text: "Partner with VYALUX for SQA manual/Automation testing that elevates your product's performance, quality, and security.",
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
            "Explore What Else We Offer In SQA Testing Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "What", position: "after" },
            { text: "SQA", position: "after" },
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
        title="Partner With Our Testing & SQA Specialists"
        highlightedWords={[
          { text: "Our", position: "after" },
          { text: "Testing", position: "after" },
          // { text: "Services", position: "after" },
          // { text: "Today", position: "after" },
        ]}
        description="Ensure bug-free software performance and reliability with VYALUX. Contact us today for insights on quality assurance and testing services designed for your business needs."
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
