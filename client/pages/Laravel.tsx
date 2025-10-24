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

export default function Laravel() {
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

  // Industries content for Laravel page
  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "We are experts in developing online shopping stores, marketplaces, and E-commerce platforms with Flutter that offer real-time inventory management, personalized user dashboard, order tracking, and much more.",
    },
    {
      title: "Automotive",
      description:
        "Laravel is an ideal framework for developing high-performance platforms, such as a marketplace for vehicle buying and selling, vehicle tracking, or a rental platform.",
    },
    {
      title: "Healthcare",
      description:
        "With Laravel, we develop HIPAA-compliant healthcare platforms that ensure security and performance. Whether it is a custom appointment booking system, a telemedicine portal, an advanced AI diagnostic system, or a real-time patient data dashboard, Laravel can do everything you want.",
    },
    {
      title: "Education & E-learning",
      description:
        "Do you want to create a virtual learning platform? Tell us. We can create e-learning platforms powered by AI & Laravel that enable your students to learn new ideas in a whole new environment.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Streamline your movies, sports, or entertainment platforms with Laravel at the backend, providing customized settings for payments, subscriptions, authentication, and content management.",
    },
    {
      title: "Fintech",
      description:
        "Build banking, trading, or other fintech-related platforms with secure payment methods, financial news, and updates within the same platform.",
    },
  ];

  // FAQ content specific to Laravel page
  const laravelFaqData = [
    {
      id: 1,
      question: "Is Laravel development popular in the USA?",
      answer:
        "Laravel is becoming a popular choice in the US because of its latest web development tools and seamless services.",
    },
    {
      id: 2,
      question: "Is Laravel related to the frontend or the backend?",
      answer:
        "Laravel is a backend framework. It is designed to develop web applications with a primary focus on backend operations, i.e., server-side logic, database interactions, routing, and authentication.",
    },
    {
      id: 3,
      question: "How much load can Laravel handle?",
      answer:
        "Too much load on the system can slow down application performance. Laravel offers a variety of built-in tools that efficiently manage a large amount of data without putting any load on the server.",
    },
    {
      id: 4,
      question: "Is Laravel safe to use?",
      answer:
        "Absolutely! Laravel's built-in CSRF (Cross-Site Request Forgery) protection helps prevent cyberattacks and other potential threats.",
    },
    {
      id: 5,
      question: "How can I hire your Laravel services?",
      answer:
        "We offer full-time, part-time, and project-based services to our customers.",
    },
  ];
  const laravelServiceItems: ServiceItem[] = [
    {
      title: "Custom API & Third-Party Integrations",
      description:
        "We develop creative and secure RESTful and GraphQL APIs for uninterrupted communication between systems, applications, and services.",
    },
    {
      title: "Admin Dashboard & Analytics",
      description:
        "We develop dynamic, user-friendly admin dashboards using Laravel Nova and Laravel Blade. Gain full control of your operations with our role-based access control (RBAC) functionality.",
    },
    {
      title: "Real Time Functionalities & Notification Features",
      description:
        " We utilize Laravel Echo, WebSockets, and event broadcasting to implement real-time features, including order tracking, live chat, and notification centers.",
    },
    {
      title: "Robust Architecture & DevOps",
      description:
        "Build websites with high-performance architectures—supporting multiple operations, modular monoliths, and micro services. Our CI/CD pipelines, automated testing, Docker support, and high-performance Laravel services boost your products’ efficiency and productivity.",
    },
    {
      title: "Laravel API-First Architecture & Microservices",
      description:
        "We are experts at building RESTful APIs using Laravel, fostering easy integration and seamless multi-platform support.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: [
            "EXPAND YOUR DIGITAL EXISTENCE",
            "WITH LARAVEL-POWERED",
            "WEBSITES & APPS",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/laravel.png"
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={[
          "Laravel",
          "PHP",
          "Laravel Nova",
          "Laravel Horizon",
        ]}
        techRow2={[
          "MySQL",
          "PostgreSQL",
          "Redis",
          "Prisma",
          "REST API",
          "GraphQL",
        ]}
        techRow3={[
          "Docker",
          "Nginx",
          "CI/CD",
          "Nginx Manager",
        ]}
      />

      {/* What Makes Our Laravel Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Laravel Web Development Services Stand Out?"
        highlightedWords={[
          { text: "Our", position: "after" },
          { text: "Stand", position: "after" },
          { text: "Web", position: "after" },

          { text: "Development", position: "after" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "As a web development services company, we specialize in robust and scalable Laravel development, producing blazing-fast performance, optimized UX, and enterprise-grade security. Utilizing the latest Laravel features, our developers tailor modular and API-driven structures designed for scalability and flexibility.",
        }}
        secondColumnContent={{
          text: "Whether you are developing a startup or upgrading legacy systems, our Laravel solutions enhance business growth and streamline your digital platforms.",
        }}
      />

      {/* Industries We Cover Section */}
      <IndustriesSection industries={industries} />

      <LanguageServicesSection
        sectionTitle={{
          mainText:
            "Explore What Else We Offer In Laravel Development Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "What", position: "after" },
            { text: "Laravel", position: "after" },
            { text: "Development", position: "after" },
            // { text: "ment", position: "after" },
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

      <FAQ faqData={laravelFaqData} />

      <ConversationSection
        title="Kick Start Your Digital Journey With Our Laravel Services"
        highlightedWords={[
          { text: "With", position: "after" },
          { text: "Our", position: "after" },
          { text: "Laravel", position: "after" },
          { text: "Services", position: "after" },
        ]}
        description="Looking to start a blogging website or an e-commerce platform? Your wait is over. Click the button and get connected with our experts to get valuable insights on your project."
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
