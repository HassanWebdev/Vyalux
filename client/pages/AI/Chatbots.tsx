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

export default function ChatbotsPage() {
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
      title: "Custom AI Chatbot Solutions",
      description:
        "Custom AI-powered chatbot development for startups, SMEs, and enterprises—developed to match your industry, audience, and goals.",
    },
    {
      title: "Scalable Enterprise Chatbots",
      description:
        "Automate complex workflows and manage large volumes of interactions with adaptable enterprise chatbot solutions for customer service and internal operations.",
    },
    {
      title: "Conversational AI Chatbots",
      description:
        "Build natural, human-like AI chatbots for e-commerce platforms, websites, and mobile apps to enhance user engagement and drive conversions.",
    },
    {
      title: "AI-Driven Customer Support Bots",
      description:
        "Reduce post-launch support load and enhance response speed with smart chatbots that resolve FAQs, handle queries, and escalate complex issues.",
    },
    {
      title: "Chatbot Strategy & Consulting",
      description:
        "Get expert opinion to design, strategize, and execute high-performance chatbot solutions aligned with your business goals.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Enhance shopping experiences with AI-powered chatbots that help customers, recommend products, reply to FAQs, and handle orders 24/7.",
    },
    {
      title: "Automotive",
      description:
        "Streamline vehicle bookings and customer service with AI chatbots for car dealerships, rental platforms, and automotive service centers.",
    },
    {
      title: "Healthcare",
      description:
        "Develop HIPAA-compliant healthcare chatbots that manage appointment scheduling, symptom checking, patient attention, and medical FAQs.",
    },
    {
      title: "Education & E-learning",
      description:
        "Build smart chatbots for virtual classrooms, student questions, course navigation, and real-time academic assistance.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Build engaging chatbots that offer customized content suggestions, manage subscriptions, and answer FAQs across entertainment platforms.",
    },
    {
      title: "Fintech",
      description:
        "Furnish secure, AI-powered chatbots for banking and finance—handling balance checks, transaction queries, onboarding, and fraud detection with AI financial services.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What are the best examples of AI chatbots?",
      answer:
        "Virtual assistants, e-commerce bots, and customer support bots on websites, etc, are the best examples.",
    },
    {
      id: 2,
      question: "Are AI chatbots freely available?",
      answer:
        "Yes, most AI chatbots are freely available on different platforms with limitations or fewer features.",
    },
    {
      id: 3,
      question: "Is AI good or bad?",
      answer:
        "Although experts talk about the features of AI and how it assists humans in repetitive tasks, it has a downside. According to some analysts, AI is causing a loss of skill and creativity in people.",
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
          lines: ["Build Chatbots That Talk,", "Think & Deliver"],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/chatbot.png"
        description="Boost customer engagement, automate support, and manage operations with custom AI customer service chatbots built by our expert developers."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={[
          "OpenAI GPT",
          "Google Dialogflow",
          "Rasa",
          "TensorFlow",
          "PyTorch",
        ]}
        techRow2={[
          "FastAPI",
          "Express.js",
          "Flask",
          "Django",
          "MongoDB",
          "Redis",
        ]}
        techRow3={[
          "React",
          "Next.js",
          "Node.js",
          "WebSockets",
          "Socket.io",
          "REST API",
          "GraphQL",
          "Docker",
        ]}
      />

      {/* What Makes Our Chatbot Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our AI Chatbot Development Services Stand Out?"
        highlightedWords={[
          { text: "Development", position: "whole" },
          { text: "AI", position: "whole" },
          { text: "Our", position: "whole" },
          { text: "Stand", position: "whole" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "From faster support to smarter automation, AI chatbots are transforming how businesses interact with customers. As an AI solutions development company, our professional chatbot development services provide smart, custom-built solutions that offer 24/7 assistance, reduce support costs, and boost customer satisfaction. Let’s develop your AI chatbot and transform your service experience.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "",
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
            "Explore What Else We Offer In AI Chatbot Development Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "AI", position: "after" },
            { text: "Development", position: "after" },
            { text: "In", position: "after" },
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
        title="Get Our Expert AI Chatbot Development Services"
        highlightedWords={[
          { text: "Chatbot", position: "after" },
          { text: "Services", position: "after" },
          // { text: "Services", position: "after" },
          // { text: "Today", position: "after" },
        ]}
        description="Revolutionize customer interaction with custom AI chatbots—smartly built for 24/7 support, automation, and business efficiency."
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
