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
      title: "Custom CRM Development",
      description:
        "Build fully customized CRM systems that align with your unique workflows, goals, and customer interaction strategies.",
    },
    {
      title: "CRM Software Development Services",
      description:
        "Build smart, scalable CRM software to enhance customer management, collaboration, and improve sales performance.",
    },
    {
      title: "CRM Application Development",
      description:
        "Develop intuitive, mobile-friendly CRM applications that keep your business growing and productive—anytime, anywhere.",
    },
    {
      title: "CRM System Development",
      description:
        "Build secure, automated CRM platforms that streamline processes, centralize data, and improve customer lifecycle management.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Track customer intent, manage loyalty programs, automate workflows, and customize communication to boost repeat purchases and customer loyalty.",
    },
    {
      title: "Automotive",
      description:
        "Enhance leads, track service history, automate follow-ups, and streamline dealership and service center processes for customer trust and sales performance.",
    },
    {
      title: "Healthcare",
      description:
        "Manage patient data, appointment booking, and communication while ensuring HIPAA compliance.",
    },
    {
      title: "Education & E-learning",
      description:
        "Handle student inquiries, course enrollments, and communication in one place. Automate reminders, feedback, and support for better learner engagement.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Manage viewer preferences, subscriptions, and automate personalized recommendations and promotions to enhance user retention and monetization.",
    },
    {
      title: "Fintech",
      description:
        "Securely manage customer onboarding, KYC steps, financial tracking, and customized communication experiences while ensuring compliance with regulatory standards.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What is the estimated cost of custom CRM development?",
      answer:
        "The cost varies based on features, functionalities, and integrations. Contact us for a tailored quote.",
    },
    {
      id: 2,
      question: "How long does it take to build a custom CRM system?",
      answer:
        "Depending on the requirements, a custom CRM can take around 6 to 12 weeks to develop.",
    },
    {
      id: 3,
      question: "What makes a custom CRM better than a pre-built solution?",
      answer:
        "A custom CRM is developed specifically for your business needs, offering enhanced automation, flexibility, and efficiency compared to generic solutions.",
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
          lines: ["Build Custom CRM Solutions", "To Power Your Business"],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/crm.png"
        description="From lead tracking to workflow automation, we build secure and smart CRM solutions tailored to your operational goals."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={["Salesforce", "HubSpot", "Zoho CRM", "SugarCRM"]}
        techRow2={["React", "Angular", "Node.js", "Python", "PHP", "Java"]}
        techRow3={["GraphQL", "Database Design", ".NET", "Ruby on Rails"]}
      />

      {/* What Makes Our NLP Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Custom E-Commerce Development Services Stand Out?"
        highlightedWords={[
          { text: "Our", position: "whole" },
          { text: "E-Commerce", position: "whole" },
          { text: "Development", position: "whole" },
          { text: "Services", position: "whole" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "A custom CRM solution offers flexibility, automation, and supremacy that other basic CRM software cannot. With our CRM software development services, organizations gain full access over customer data, workflow automation, and enhanced customer relationships.Our custom CRM solutions strategy ensures that your system is secure, adaptable, and tailored to your unique business goals.",
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
            "Explore What Else We Offer In Custom CRM Solution Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "What", position: "after" },
            { text: "We", position: "after" },
            { text: "Custom", position: "after" },
            { text: "CRM", position: "after" },
            { text: "Services", position: "after" },
          ],
        }}
        serviceItems={services}
        backgroundColor="#040404"
        accentColor="#AB322C"
        mainTextColor="white"
        width="xl:w-[680px] lg:w-[550px]"
      />

      {/* Top Case Studies Section */}
      <CaseStudiesSection />

      {/* Contact Form Section */}
      <ContactSection />

      <FAQ faqData={faqData} />

      <ConversationSection
        title="Connect with Our CRM Experts Today"
        highlightedWords={[
          { text: "Our", position: "after" },
          { text: "CRM", position: "after" },
          // { text: "Services", position: "after" },
          // { text: "Today", position: "after" },
        ]}
        description="Let us help you build a custom CRM solution that suits your operations and drives growth—secure, flexible, and built just for you."
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
