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
import LanguageServicesSection from "@/components/Laravel/LanguageServicesSection";
import FAQ from "../../components/FAQ";
import ConversationSection from "../../components/ConversationSection";
import Footer from "../../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function AIModelsPage() {
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
      title: "Custom AI Model Development",
      description:
        "Develop intelligent AI systems tailored to individual business needs—developing smarter decisions, automation, and operational efficiency.",
    },
    {
      title: "AI/ML Model Development",
      description:
        "Leverage state-of-the-art machine learning solutions for real-time analysis, behavior examination, and data-driven decision-making.",
    },
    {
      title: "AI Data Modeling & Training",
      description:
        "Introduce high-quality AI solutions with clear, structured, and refined datasets, ensuring accuracy and scalability.",
    },
    {
      title: "Generative AI Model Development",
      description:
        "Create pro-level generative AI models for image, text, audio, and video platforms—enhancing creativity and efficiency.",
    },
    {
      title: "AI Calling & Virtual Voice Assistance",
      description:
        "Deploy AI-powered voice assistants for 24/7 customer support, lead generation, and automated communication experiences.",
    },
  ];
  
  const industries = [
    {
      title: "E-commerce & Retail",
      description: "Level-up customer experience and increase sales with AI systems for product recommendations, demand feasibility, active pricing, and customer behavior analysis."
    },
    {
      title: "Automotive",
      description: "Bring innovation with AI-powered models for automated systems, fault diagnosis, live vehicle tracking, and smart navigation."
    },
    {
      title: "Healthcare",
      description: "Furnish better patient outcomes with AI models engineered for diagnostics, patient risk inspection, medical imaging, and treatment projections."
    },
    {
      title: "Education & E-learning",
      description: "Evolve learning methods with AI models that enable customized education paths, student performance assessment, auto-grading, and intelligent tutoring systems."
    },
    {
      title: "Streaming & Entertainment",
      description: "Revolutionize content delivery with AI models for recommendations, user behavior examination, content type, and real-time analytics."
    },
    {
      title: "Fintech",
      description: "Innovate and streamline financial processes using AI solutions for fraud detection, credit rating, risk management, algorithmic trading, and personalized financing."
    }
  ];
  
  const faqData = [
    {
      id: 1,
      question: "What does AI model development stand for?",
      answer: "AI model development is a process of developing and training artificial intelligence machines to perform intended tasks, such as learning, problem-solving, reasoning, and language understanding."
    },
    {
      id: 2,
      question: "What steps are involved in AI Model development?",
      answer: "Usually, the following steps are needed for AI model development: understanding of the project and its current stage, setting a vision and planning, data preparation and infrastructure, testing, iteration, deployment, and scaling."
    },
    {
      id: 3,
      question: "How do AI models work?",
      answer: "AI models work by processing input data, mining the data using algorithms and other techniques to understand the underlying patterns and correlations, and then using the input data to act upon."
    },
    {
      id: 4,
      question: "Is AI going to replace humans?",
      answer: "AI is evolving rapidly and automating many workflows. Still, it is not right to say AI is going to replace human beings because it lacks human abilities, empathy, creativity, and complex reasoning."
    },
    {
      id: 5,
      question: "How can I hire your AI services?",
      answer: "We offer full-time, part-time, and project-based services to our customers."
    },
  ];

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: [
            "AI-Powered Solutions For",
            "Your Business, Engineered",
            "With Precision",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/AIDevelopment.png"
        description="We develop automated workflows, AI-driven tools for predictive analysis, and custom AI models specified for your complex business needs."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee 
        title="Technologies We Use"
        techRow1={[
          "TensorFlow",
          "PyTorch",
          "JAX",
          "Keras",
          "Hugging Face",
          "ONNX",
          "TensorRT",
          "OpenVINO"
        ]}
        techRow2={[
          "Python",
          "Julia",
          "C++",
          "MLflow",
          "DVC",
        ]}
        techRow3={[
          "Docker",
          "Kubernetes",
          "Azure",
          "Ray"
        ]}
      />

      {/* What Makes Our AI Models Stand Out Section */}
      <ServicesSection
        title="What Makes Our AI Model Development Services Stand Out?"
        highlightedWords={
          [
            { text: "Out?", position: "whole" },
            { text: "Development", position: "whole" },
            { text: "Our", position: "whole" },
            { text: "AI", position: "whole" },
            // { text: "lopment", position: "after" },
          ]
        }
        firstColumnContent={{
          text: "Artificial Intelligence is evolving business operations. Through custom AI solutions, it has become easier to automate workflows, reduce operational expenses, and make quick, smart decisions.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "We provide advanced AI services that smoothly integrate into your systems, enhancing precision, performance, and growth.",
          height: "h-16 sm:h-20 lg:h-[100px]",
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection
        industries={industries}
      />

      {/* Language Services Section */}
      <LanguageServicesSection
        sectionTitle={{
          mainText: "Explore What Else We Offer In AI Model Development Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "Development", position: "after" },
            { text: "Model", position: "after" },
            { text: "AI", position: "after" },
       
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
        title="Transform Your Raw Data Into Intelligence With Custom AI Model Development"
        highlightedWords={
          [
            { text: "Your", position: "after" },
            { text: "Raw", position: "after" },
            { text: "Data", position: "after" },
            { text: "With", position: "after" },
          ]
        }
        description="We offer innovative AI solutions using advanced machine and deep learning techniques, engineered to streamline operations and fuel innovation."
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
