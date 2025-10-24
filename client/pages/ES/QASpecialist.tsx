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
      title: "QA Testing Services",
      description:
        "Broad strategies to detect bugs, speed bottlenecks, and usability issues before launch.",
    },
    {
      title: "QA Software Testing Services",
      description:
        "End-to-end testing, including features, regression, and exploratory methods for reliable software performance.",
    },
    {
      title: "Performance Testing Services",
      description:
        "Ensure system stability and performance under peak load situations with stress and load testing.",
    },
    {
      title: "Manual Testing Services",
      description:
        "Extensive, user-focused testing to unveil real-world issues that automation may overlook.",
    },
    {
      title: "Automation Testing Services",
      description:
        "Enhance testing cycles and improve accuracy with the latest automation frameworks like Selenium and Appium.",
    },
    {
      title: "QA & Testing Consulting",
      description:
        "Specialists' guidance to develop or optimize QA team's tools and processes for lasting quality",
    },
  ];
  const faqData = [
    {
      id: 1,
      question: "What types of platforms do you test?",
      answer:
        "The dedicated team model provides you with a full-time development team that works exclusively on your project. You maintain full control over the development process, while we handle administrative tasks, workspace, equipment, and HR matters.",
    },
    {
      id: 2,
      question: "Do you offer manual and automated testing services?",
      answer:
        "Our dedicated teams can include a wide range of specialists such as front-end and back-end developers, UI/UX designers, QA engineers, DevOps specialists, business analysts, project managers, and more. We'll customize the team composition based on your project requirements.",
    },
    {
      id: 3,
      question: "Do you support ongoing QA needs or just one-time testing?",
      answer:
        "Depending on your requirements and team size, we can typically assemble a basic team within 2-4 weeks. For specialized roles or larger teams, it may take longer to ensure we find the perfect match for your needs.",
    },
    {
      id: 4,
      question: "How can I hire your services?",
      answer:
        "To hire our dedicated team services, start by contacting us through our website contact form or email. We'll schedule a discovery call to understand your project needs, team requirements, and business goals. After this assessment, we'll propose a team structure and provide detailed information about the specialists, timeline, and pricing. Once you approve, we'll begin assembling your team and start the onboarding process.",
    },
  ];

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: ["End-to-End QA Testing For", "High-Performance", "Software"],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/qa.png"
        description="Our software quality assurance specialists identify and resolve issues before they affect your users. From manual to automation testing, we ensure your product meets the highest industry standards."
      />
      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={["Selenium", "Cypress", "Appium", "TestNG"]}
        techRow2={["Java", "Python", "JavaScript", "C#"]}
        techRow3={["Cucumber", "Postman", "JIRA", "Ruby", "SQL"]}
      />
      {/* What Makes Our Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Quality Assurance Services Stand Out ?"
        highlightedWords={[
          { text: "Our", position: "after" },
          { text: "Assurance", position: "after" },
          { text: "?", position: "after" },
        ]}
        firstColumnContent={{
          text: "VYALUX blends deep industry knowledge with state-of-the-art QA techniques to deliver unwavering software quality. Our unique and transparent software testing services ensure that every feature, function, and code is tested for high performance, security, and scalability. With rapid onboarding, flexible engagement models, and access to modern testing tools, we empower quality-driven organizations to release with confidence.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "Collaborate with our experienced QA engineers to identify defects early, minimize costs, and accelerate online presence. Whether it's manual, automated, or performance optimization testing, we ensure accuracy, reliability, and performance at every stage.",
          height: "h-16 sm:h-20 lg:h-[100px]",
        }}
        accentColor="#AB322C"
      />
      /* Industries We Cover Section */
      <IndustriesSection
        industries={[
          {
            title: "E-commerce & Retail",
            description:
              "Ensure shopping carts, payment gateways, and user accounts function flawlessly through comprehensive functional and security testing.",
          },
          {
            title: "Automotive",
            description:
              "Validate complex automotive software systems with specialized testing for in-vehicle infotainment, telematics, and diagnostic applications.",
          },
          {
            title: "Healthcare",
            description:
              "Deliver HIPAA-compliant testing solutions that ensure patient data security, system reliability, and regulatory adherence for medical applications.",
          },
          {
            title: "Education & E-learning",
            description:
              "Test learning management systems, interactive content, and assessment modules across devices to ensure seamless educational experiences.",
          },
          {
            title: "Streaming & Entertainment",
            description:
              "Validate media playback quality, content delivery networks, and user experience through performance and compatibility testing across platforms.",
          },
          {
            title: "Fintech",
            description:
              "Conduct thorough security, compliance, and transaction testing to ensure financial applications perform reliably under all conditions.",
          },
        ]}
      />
      {/* Language Services Section */}
      <LanguageServicesSection
        sectionTitle={{
          mainText: "Explore What Else We Offer In Quality Assurance Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "We", position: "after" },
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
        title="Stop Bugs Before They Hit Production"
        highlightedWords={[
          { text: "They", position: "after" },
          { text: "Hit", position: "after" },
        ]}
        description="With modern QA testing, we help you develop stable, high-performing apps that users can trust."
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
