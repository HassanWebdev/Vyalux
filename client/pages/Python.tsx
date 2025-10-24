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

export default function PythonPage() {
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
      title: "Custom Python Development",
      description:
        "We develop tailor-made Python solutions designed for your unique business needs—whether it's an automation script or a specialized business application.",
    },
    {
      title: "Django Web Development",
      description:
        "Build fast, secure, and innovative web applications using Django. From MVPs to large-scale business platforms, we deliver performance and security.",
    },
    {
      title: "Python App Development",
      description:
        "We build high-performance solutions powered by Python, leveraging AI, data analytics, and machine learning to foster intelligent, future-ready solutions.",
    },
    {
      title: "API Development & Integration",
      description:
        "Develop and integrate rich RESTful and GraphQL APIs to join services, applications, and third-party platforms.",
    },
    {
      title: "Django Support & Maintenance",
      description:
        "We provide comprehensive support and maintenance services, including security updates, performance monitoring, and feature enhancements.",
    },
  ];
  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Establish secure and scalable e-stores with Python and Django. We create customized e-commerce platforms featuring real-time stock management, innovative dashboards, and secure payment integrations.",
    },
    {
      title: "Automotive",
      description:
        "Introduce innovation in the automotive industry with Django-powered platforms. From vehicle listing platforms and rental systems to real-time vehicle tracking and dealership management, we build solutions.",
    },
    {
      title: "Healthcare",
      description:
        "Build HIPAA-compliant healthcare solutions that prioritize data security and unwavering performance.",
    },
    {
      title: "Education & E-learning",
      description:
        "Drive learning with robust Django-driven platforms. We build LMS systems, AI-powered classrooms, content delivery tools, and data-driven dashboards with ease.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Develop high-traffic content solutions with Django as the backend giant. We create movie-on-demand websites, live streaming platforms, and subscription-based content platforms.",
    },
    {
      title: "Fintech",
      description:
        "Develop secure and acquiescent financial platforms with Python and Django. From digital wallets and investment dashboards to banking platforms.",
    },
  ];
  const faqData = [
    {
      id: 1,
      question: "Django vs Python. Explain?",
      answer:
        "Python is a high-level programming language, famous for its readability and ease of use, while Django is a Python web framework that offers rapid development.",
    },
    {
      id: 2,
      question: "Is Django a frontend or backend?",
      answer: "Django is a web framework that is used for backend development.",
    },
    {
      id: 3,
      question: "Is Django only for website development?",
      answer:
        "It is a Python-driven framework and can be used to build everything from a website to a complex application.",
    },
    {
      id: 4,
      question: "Which is better for the backend, Django or Flask?",
      answer:
        "Django is a good choice for large, complex solutions because it has built-in tools, security, and scalability.",
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
              "Build Data-Driven",
              "Solutions with Python &",
              "Django",
            ],
          }}
          onButtonHover={handleButtonHover}
          onButtonLeave={handleButtonLeave}
          imageSrc="/WP/python.png"
          description="No templates, no limitations. We design and develop custom solutions tailored to your business requirements, using RESTful APIs and modular codebases."
        />

      {/* Technologies We Use Section */}
      <FriendsMarquee 
        title="Technologies We Use"
        techRow1={[
          "Python",
          "Django",
          "Flask",
          "FastAPI",
          "Celery",
          "Pydantic",
          "SQLAlchemy",
        ]}
        techRow2={[
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "Redis",
          "GraphQL",
          "REST API",
          "Pandas",
          "NumPy",
        ]}
        techRow3={[
          "Docker",
          "Kubernetes",
          "AWS",
          "Azure",
          "CI/CD",
          "OpenAPI",
        ]}
      />

      {/* What Makes Our Python Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Python & Django Services Stand Out?"
        highlightedWords={[
          { text: "Makes", position: "whole" },
          { text: "Our", position: "whole" },
          { text: "Django", position: "whole" },
          { text: "Stand", position: "whole" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "Python and Django serve as a powerful combination for developing everyday, secure, and scalable web applications. Django's incorporated features and perspective accelerate the development process, authorizing you to build solutions faster without compromising quality.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "Django comes with a variety of built-in modules for the admin panel, authentication, database management, and more. From AI-driven platforms and machine learning tools to custom CRMs, Python, and Django deliver cost-effective solutions.",
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
            "Explore What Else We Offer In Python & Django Development",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "What", position: "after" },
            { text: "Python", position: "after" }, 
            { text: "&", position: "after" },
            { text: "Development", position: "after" },
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

      {/* Conversation Section */}
      <ConversationSection
        title="Start Your Digital Voyage With Our Django & Python Experts"
        highlightedWords={[
          { text: "Digital", position: "after" },
          { text: "Django", position: "after" },
          // { text: "Services", position: "after" },
          // { text: "Today", position: "after" },
        ]}
        description="Kick-start your journey with our expert developers today and transform your ideas into innovative digital solutions."
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
