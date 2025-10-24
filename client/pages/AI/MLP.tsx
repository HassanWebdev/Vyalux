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
      title: "Custom Machine Learning Solutions",
      description:
        "Custom AI models developed to solve your complex business challenges and drive measurable impact.",
    },
    {
      title: "Machine Learning App Development",
      description:
        "Develop intelligent solutions with advanced ML capabilities for automation, prediction, and smart decision making.",
    },
    {
      title: "Machine Learning in Manufacturing",
      description:
        "Enhance operations with AI applications for predictive maintenance, quality assurance, and production line automation.",
    },
    {
      title: "AI & Machine Learning Consulting Services",
      description:
        "Get expert opinion on AI project strategy, model selection, and execution for scalable success.",
    },
    {
      title: "Machine Learning on Blockchain",
      description:
        "AI combined with blockchain produces secure, decentralized ML systems for finance, supply chain, and more.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Optimize shopping experiences with machine learning solutions like personalized recommendations, dynamic pricing, fraud alerts, and demand /supply analytics.",
    },
    {
      title: "Automotive",
      description:
        "Bring innovation with ML-driven solutions for predictive maintenance, autonomous functions, driving analysis, and fleet management.",
    },
    {
      title: "Healthcare",
      description:
        "Enhance diagnostics, treatment strategies, and patient results with machine learning models.",
    },
    {
      title: "Education & E-learning",
      description:
        "Grow learning with ML-powered solutions such as customized learning paths, intelligent tutoring systems, automated grading, and student performance assessment.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Deliver customized content with machine learning models for recommendation engines, user segmentation, trend prediction, and real-time analytics.",
    },
    {
      title: "Fintech",
      description:
        "Secure and enhanced financial services with ML models for fraud alerts, credit rating, algorithmic trading, and financial planning.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What can ML solutions do?",
      answer:
        "They are capable of facial recognition, product recommendation, automation, prediction, social media optimization, diagnosis, voice-to-text or predictive text, data analysis, etc.",
    },
    {
      id: 2,
      question: "What are ML limitations?",
      answer:
        "While machine learning is a game-changer innovation, it has some limitations. It comes with challenges like inadequate training data, algorithmic biases, and data quality issues.",
    },
    {
      id: 3,
      question: "What is generative AI?",
      answer:
        "It is a type of AI that leverages machine learning to create new content such as images, audio, video, and text.",
    },
    {
      id: 4,
      question: "What does LLM stand for?",
      answer: "LLM stands for Large Language Model.",
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
            "Build Smart Machine Learning",
            "Solutions For Real-World",
            "Problems",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/MLP.png"
        description="From automation to predictive analytics, our professional ML development services leverage intelligent, advanced systems that grow your business."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={[
          "TensorFlow",
          "PyTorch",
          "scikit-learn",
          "Keras",
          "XGBoost",
          "ONNX",
        ]}
        techRow2={["Python", "NumPy", "Pandas", "SciPy", "MLflow", "Ray"]}
        techRow3={["Docker", "Kubernetes", "Google Cloud AI", "Jupyter", "DVC"]}
      />

      {/* What Makes Our AI Models Stand Out Section */}
      <ServicesSection
        title="What Makes Our Machine Learning Services Stand Out?"
        highlightedWords={[
          { text: "Makes", position: "whole" },
          { text: "Our", position: "whole" },
          { text: "Learning", position: "whole" },
          { text: "Stand", position: "whole" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "Machine learning is revolutionizing industries by automating processes, improving efficiency, and empowering smarter decision-making. At VYALUX, our ML specialists develop scalable AI solutions, ensuring seamless integration, analytical insights, and advanced automation. Whether you're enhancing manufacturing workflows, optimizing healthcare analytics, or building recommendation engines, machine learning keeps your business sky-high and future-ready.",
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
          mainText: "Explore What Else We Offer In Machine Learning Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "What", position: "after" },

            { text: "Machine", position: "after" },
            { text: "Services", position: "after" },
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
        title="Transform How Your Business Works With Machine Learning"
        highlightedWords={[
          { text: "Your", position: "after" },
          { text: "With", position: "after" },
          // { text: "Services", position: "after" },
          // { text: "Today", position: "after" },
        ]}
        description="Our custom-built ML solutions transform businesses and streamline operations, gain predictive analysis, and lead with data-driven innovation."
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
