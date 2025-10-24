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
      title: "AI Development Services",
      description:
        "Develop and deploy custom AI solutions using the latest technologies like computer vision, NLP, and data science to crack complex business challenges",
    },
    {
      title: "AI Software Engineering",
      description:
        "Integrate AI with full-stack development to build smart, high-performing software systems that learn, adapt, and grow with your business.",
    },
    {
      title: "AI Chatbot Development",
      description:
        "Develop conversational AI chatbots for 24/7 customer support, lead generation, and workflow automation with natural language understanding.",
    },
    {
      title: "AI & ML Development Services",
      description:
        "Train and execute machine learning models customized to your specific domain—whether it's recommendation engines, fraud detection, or predictive analytics.",
    },
    {
      title: "AI App Development Services",
      description:
        "Develop smart mobile and web applications driven by AI for personalized content, real-time automation, and improved user engagement.",
    },
  ];
  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Utilize AI for customized shopping experiences, customer segmentation, dynamic pricing, smart product recommendations, and inventory forecasting.",
    },
    {
      title: "Automotive",
      description:
        "Use AI for autonomous driving support, predictive maintenance, GPS optimization, driver behavior analysis, and voice-controlled interfaces.",
    },
    {
      title: "Healthcare",
      description:
        "Drive AI for diagnostic imaging, patient data study, medical chatbots, predictive healthcare insights, and smart appointment systems.",
    },
    {
      title: "Education & E-learning",
      description:
        "Integrate AI for customized learning paths, automated grading, smart tutoring systems, content recommendation, and online teaching assistants.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Boost user interaction with AI-powered content recommendation engines, sentiment examination, automated editing tools, and audience behavior tracking.",
    },
    {
      title: "Fintech",
      description:
        "Use AI for fraud alerts, credit rating, customer verification (KYC), robo-advisors, and smart financial forecasting and risk assessment.",
    },
  ];
  const faqData = [
    {
      id: 1,
      question: "What does an AI engineer do?",
      answer:
        "An AI engineer architects, develops, and deploys AI models and solutions that automate, predict, or enhance decision-making in business applications.",
    },
    {
      id: 2,
      question: "Can I hire a dedicated AI software engineer for my project?",
      answer:
        "Absolutely. You can hire our dedicated AI engineers for custom AI development or to augment your in-house team.",
    },
    {
      id: 3,
      question: "What makes your AI development services stand out?",
      answer:
        "We blend advanced AI technologies with business models to deliver custom, future-ready solutions, backed by strong cloud and software engineering expertise.",
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
          lines: ["Accelerate Innovation With", "AI-Powered Solutions"],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/aieng.png"
        description="We are experts in building advanced AI models, machine learning systems, and smart chatbots that enhance decision-making, improve efficiency, and deliver outstanding user experiences."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={[
          "TensorFlow",
          "PyTorch",
          "Keras",
          "Scikit-learn",
          "OpenAI API",
        ]}
        techRow2={["Python", "R", "Java", "C++"]}
        techRow3={["NumPy", "Pandas", "Google AI", "Hugging Face"]}
      />

      {/* What Makes Our Services Stand Out Section */}
      <ServicesSection
        title="What Makes our AI Development Services Stand Out?"
        highlightedWords={[
          { text: "Development", position: "after" },
          { text: "our", position: "after" },
          { text: "AI", position: "after" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "Harness the strength of AI with solutions developed to scale. Our experts deliver state-of-the-art AI solutions fueled by deep learning, machine learning, and NLP to enhance workflows, reduce costs, and unlock new growth opportunities.",
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
          mainText: "Explore What Else We Offer In AI Development Services",
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
        width="xl:w-[640px] lg:w-[550px]"
      />

      {/* Top Case Studies Section */}
      <CaseStudiesSection />

      {/* Contact Form Section */}
      <ContactSection />

      <FAQ faqData={faqData} />

      <ConversationSection
        title="Shape Tomorrow with Intelligent AI Solutions"
        highlightedWords={[
          { text: "with", position: "after" },
          { text: "Solutions", position: "after" },
          // { text: "Services", position: "after" },
        ]}
        description="Our AI engineers invent real-world applications using machine learning, NLP, and computer vision to resolve your toughest business challenges."
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
