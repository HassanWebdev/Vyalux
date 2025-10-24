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

export default function PhpPage() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register any global animations or ScrollTriggers

    return () => {
      // Cleanup all animations and ScrollTriggers when component unmounts
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
  const laravelServiceItems: ServiceItem[] = [
    {
      title: "Custom PHP Development",
      description:
        "As a custom web application development firm, we create custom PHP solutions tailored to meet your unique business needs.",
    },
    {
      title: "PHP Web Development",
      description:
        "Build fast, secure, and responsive web solutions using pure PHP or contemporary frameworks like Laravel and Symfony for improved performance.",
    },
    {
      title: "PHP CMS Development",
      description:
        "Build custom content management systems for intuitive site management, adaptable publishing workflows, and easy scalability.",
    },
    {
      title: "PHP API Development & Integration",
      description:
        "We provide secure, RESTful APIs and smooth third-party integrations to expand your application's capabilities and guarantee cross-platform compatibility.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Build robust and advanced online stores, marketplaces, and B2B platforms using PHP, from shopping cart management to inventory and user control systems.",
    },
    {
      title: "Automotive",
      description:
        "Utilize PHP to develop feature-rich automotive platforms, including vehicle listing sites, rental management systems, and GPS-enabled tracking platforms.",
    },
    {
      title: "Healthcare",
      description:
        "Develop HIPAA-compliant healthcare solutions with PHP, including appointment booking, patient portals, telemedicine systems, and patient records management.",
    },
    {
      title: "Education & E-learning",
      description:
        "Build scalable e-learning solutions, LMS systems, and educational platforms tailored to your institution's needs.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Power entertainment platforms with PHP-driven content management systems, whether it's movies-on-demand, live streaming, or user subscriptions.",
    },
    {
      title: "Fintech",
      description:
        "Create custom fintech apps for digital payments, personal finance, investment portals, and banking operations using PHP.",
    },
  ];

  // Update the PHP FAQ data
  const phpFaqData = [
    {
      id: 1,
      question: "What is Custom PHP development?",
      answer:
        "Custom PHP development refers to developing PHP-backed solutions uniquely based on the project requirements. It helps in flexibility, performance, and security compared with pre-built solutions.",
    },
    {
      id: 2,
      question: "Which software is suitable for PHP development?",
      answer:
        "One can use Aptana, Eclipse, NetBeans, Rapid PHP, Brackets, and CodeLobster for WordPress development. Visual Coder, sublime, and Notepad++ editors are also better options.",
    },
    {
      id: 3,
      question: "Is PHP a dead language?",
      answer:
        "Nope. It's still a worthy backend programming language for website development.",
    },
    {
      id: 4,
      question: "What does PHP stand for?",
      answer:
        'Previously, it was known as "Personal Home Page", but now it stands for "PHP: Hypertext Preprocessor".',
    },
    {
      id: 5,
      question: "How can I hire your services?",
      answer:
        "We offer full-time, part-time, and project-based services to our customers.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/php.png"
        title={{
          lines: ["Build Your Future", "With Our PHP", "Development Services"],
        }}
        description="Collaborate with one of the leading PHP development companies for customized solutions. We are experts in building secure, performance-optimized web applications that perfectly suit your business goals."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={[
          "PHP",
          "Laravel",
          "Symfony",
          "CodeIgniter",
          "WordPress",
          "Composer",
        ]}
        techRow2={[
          "MySQL",
          "PostgreSQL",
          "Redis",
          "REST API",
          "GraphQL",
          "phpstorm",
        ]}
        techRow3={["Nginx", "Apache", "Docker", "AWS", "CI/CD"]}
      />

      {/* What Makes Our PHP Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our PHP Custom Software Development Stand Out?"
        highlightedWords={[
          { text: "Our", position: "whole" },
          { text: "PHP", position: "whole" },
          { text: "Software", position: "whole" },
          { text: "Stand", position: "whole" },
          // { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "PHP is a strong, adaptable, and time-tested programming language that facilitates the development of dynamic, innovative, and secure web applications. As an open-source technology, it delivers cost-effective development supported by a vast global community. With pre-built security features and smooth integration capabilities, PHP is perfect for businesses of all sizes—from startups to large enterprises.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "As a web application development company, we specialize in custom PHP development crafted to your unique business objectives. Our team furnishes high-performance, smart applications that support long-term growth, security, and reliability.",
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
            "Explore What Else We Offer In PHP Custom Software Development",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "What", position: "after" },
            { text: "PHP", position: "after" },
            { text: "Development", position: "after" },
            { text: "Software", position: "after" },
          ],
        }}
        serviceItems={laravelServiceItems}
        backgroundColor="#040404"
        accentColor="#AB322C"
        mainTextColor="white"
      />

      {/* Top Case Studies Section */}
      <CaseStudiesSection />

      {/* Contact Form Section */}
      <ContactSection />

      <FAQ faqData={phpFaqData} />

      <ConversationSection
        title="Catch Up With Our PHP Custom Software Developers Today"
        highlightedWords={[
          { text: "With", position: "after" },
          { text: "Our", position: "after" },
          { text: "PHP", position: "after" },
          { text: "Today", position: "after" },
        ]}
        description="Join our expert team at VYALUX for a free consultation. Whether you require a custom web application, an adaptable backend, or a secure business platform, we’re ready to bring your vision to life!"
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
