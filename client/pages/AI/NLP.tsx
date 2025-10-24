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
      title: "Intelligent Language Processing Solutions",
      description:
        "Use the power of NLP to analyze, interpret, and act on text data—improving automation, forecasting, and communication.",
    },
    {
      title: "Conversational AI & Smart Chatbot Development",
      description:
        "Furnish 24/7 call assistance with AI chatbots engineered for apps, websites, and e-commerce platforms—scaling user experience and support efficiency.",
    },
    {
      title: "Scalable Virtual Agents for Enterprises",
      description:
        "Deploy trained virtual models to streamline internal workflows, respond to FAQs, and link with CRMs or ERPs for smart AI-driven business operations.",
    },
    {
      title: "NLP Strategy & Implementation Consulting",
      description:
        "Get end-to-end assistance from NLP experts—find the right tools, frameworks, and models for your use case and enhance scalability, speed of integration across platforms.",
    },
    {
      title: "Voice AI & Speech Recognition Solutions",
      description:
        "Upgrade your software with real-time speech-to-text transcriptions, voice commands, and multilingual support with smart voice interaction and accessibility.",
    },
  ];
  
  const industries = [
    {
      title: "E-commerce & Retail",
      description: "Grow customer engagement with AI-driven chatbots, sentiment detection, and customer-product recommendations using NLP."
    },
    {
      title: "Automotive",
      description: "Enforce NLP for voice-controlled interfaces, driving assistance, and intelligent in-vehicle assistants."
    },
    {
      title: "Healthcare",
      description: "Enable AI-powered medical transcription, symptom diagnosis, and smart virtual assistants."
    },
    {
      title: "Education & E-learning",
      description: "Revamp learning with smart tutoring systems, automated essay checking, and real-time language translation."
    },
    {
      title: "Streaming & Entertainment",
      description: "Utilize NLP for content tagging, subtitle generation, speech-to-text transcription, and audience sentiment tracking."
    },
    {
      title: "Fintech",
      description: "Enhance customer support with AI chatbots, automate financial predictions, and detect fraudulent activities through NLP-based behavioral analysis."
    }
  ];
  
  const faqData = [
    {
      id: 1,
      question: "What is the purpose of NLP?",
      answer:
        "Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language. Its purpose is to bridge the gap between human communication and computer understanding, allowing for automated language translation, sentiment analysis, content summarization, chatbots, voice assistants, and information extraction from unstructured text data.",
    },
    {
      id: 2,
      question: "Is NLP supervised or unsupervised?",
      answer:
        "NLP can use both supervised and unsupervised learning approaches. Supervised NLP models require labeled training data with input-output pairs, used for tasks like sentiment classification or named entity recognition. Unsupervised approaches don't need labeled data and are used for tasks like topic modeling or word embeddings. Many modern NLP systems use a combination of both methods.",
    },
    {
      id: 3,
      question: "Does NLP have any link with AI?",
      answer:
        "Yes, NLP is a subfield of artificial intelligence focused specifically on interactions between computers and human language. It leverages AI techniques including machine learning, deep learning, and neural networks to process and analyze language data. NLP powers many AI applications such as virtual assistants, chatbots, translation services, and text analytics tools.",
    },
    {
      id: 4,
      question: "How can I hire your services?",
      answer:
        "You can hire our NLP services by contacting us through our website, scheduling a consultation call, or sending us an email detailing your project requirements. Our team will assess your needs, discuss potential solutions, and provide a tailored proposal outlining scope, timeline, and investment for implementing NLP technology in your business.",
    },
  ];

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
        <HeroSection
          title={{
            lines: [
              "Smart AI Solutions With",
              "Advanced Natural Language",
              "Processing (NLP)",
            ],
          }}
          onButtonHover={handleButtonHover}
          onButtonLeave={handleButtonLeave}
          imageSrc="/WP/NLP.png"
          description="Automate, interpret, and understand language like never before with our professional NLP development services."
        />

      {/* Technologies We Use Section */}
      <FriendsMarquee 
        title="Technologies We Use"
        techRow1={[
          "SpaCy",
          "Hugging Face",
          "OpenAI GPT",
          "ELMo"
        ]}
        techRow2={[
          "TensorFlow",
          "PyTorch",
          "Keras",
          "scikit-learn",
        ]}
        techRow3={[
          "Python",
          "Flask",
          "Django",
          "Node.js",
          "Docker",
          "AWS",
        ]}
      />

      {/* What Makes Our NLP Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our NLP Services Stand Out?"
        highlightedWords={[
          { text: "Our", position: "whole" },
          { text: "NLP", position: "whole" },
          { text: "Stand", position: "whole" },
          { text: "Out?", position: "whole" },
          // { text: "lopment", position: "after" },
        ]}
        firstColumnContent={{
          text: "With NLP, transform everyday language into actionable insight. We build AI-driven chatbots, emotion detection systems, AI voice calling assistants, and smart document processors that facilitate workflows and enhance user engagement.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: ""
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection industries={industries} />

      {/* Language Services Section */}
      <LanguageServicesSection
        sectionTitle={{
          mainText:
            "Explore What Else We Offer In NLP Development Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "NLP", position: "after" },
            { text: "Development", position: "after" },
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
        title="Advanced Natural Language Processing (NLP) Solutions"
        highlightedWords={[
          { text: "Language", position: "after" },
          { text: "Solutions", position: "after" },
          // { text: "Services", position: "after" },
          // { text: "Today", position: "after" },
        ]}
        description="Automate workflows, enhance customer interactions, and make smarter decisions with powerful Natural Language Processing solutions"
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
