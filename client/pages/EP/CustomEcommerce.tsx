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
      title: "E-commerce Website Development",
      description:
        "Develop robust and scalable e-commerce websites tailored to your brand, engineered for smooth performance and business growth.",
    },
    {
      title: "E-commerce Web Design",
      description:
        "Build stunning, conversion-optimized storefronts that deliver intuitive navigation and an exceptional customer experience.",
    },
    {
      title: "AI-Powered E-commerce Solutions",
      description:
        "Enhance sales with intelligent e-commerce solutions like AI-driven search, product recommendation, and automated customer support.",
    },
    {
      title: "E-commerce App Development",
      description:
        "Build fast, feature-rich mobile apps for Android and iOS to deliver smooth and engaging shopping experiences on the go.",
    },
    {
      title: "E-commerce Website Management Services",
      description:
        "Ensure your online store is running at peak performance with continuous updates, security alerts, and expert technical support.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Build fully customized e-commerce platforms with advanced product filters, active pricing, real-time stock, and smooth checkout to boost sales and brand loyalty.",
    },
    {
      title: "Automotive",
      description:
        "Develop feature-rich platforms for selling vehicles, spare parts, or services—complete with vehicle search filters, inquiry modules, and compatibility checkers for buyers and dealerships.",
    },
    {
      title: "Healthcare",
      description:
        "Develop secure, regulation-compliant e-commerce solutions for pharmacies, medical supplies, or healthcare services.",
    },
    {
      title: "Education & E-learning",
      description:
        "Set up e-commerce platforms to sell courses, digital content, or educational products with gated access, individual dashboards, subscriptions, and content delivery tools.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Create custom platforms for media subscriptions, content rentals, or pay-per-view services—featuring user dashboards, media libraries, and secure payment models.",
    },
    {
      title: "Fintech",
      description:
        "Establish robust platforms for financial services, SaaS products, or subscription-based models with role-based access, real-time insights, and secure digital transactions.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "How long does it take to build a custom e-commerce platform?",
      answer:
        "The timeline differs based on project complexity, but a fully functional store can be developed within 4-8 weeks.",
    },
    {
      id: 2,
      question: "Can you integrate AI into my existing e-commerce store?",
      answer:
        "Yes! We are experts in AI integration, including chatbots, recommendation engines, and automated marketing tools.",
    },
    {
      id: 3,
      question:
        "Which payment gateways do you integrate into e-commerce development?",
      answer:
        "We use multiple payment gateways, including VYAFAC, PayPal, Stripe, Razorpay, and custom payment solutions.",
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
          lines: ["Smarter E-Commerce With AI-", "Driven Web Development"],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/custom.png"
        description="Leverage the power of AI to develop personalized, high-performing e-commerce platforms that adapt to customer interests and maximize conversions."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={[
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "PostgreSQL",
          "Next.js",
          "GraphQL",
          "RESTful APIs",
        ]}
        techRow2={[
          "AWS",
          "Azure",
          "Docker",
          "Kubernetes",
          "Redis",
        ]}
        techRow3={["Microservices", "AI/ML Integration", "Stripe", "PayPal"]}
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
          text: "AI-driven ecommerce development enhances automation, customization, and efficiency in online stores. From AI-powered product suggestions and chatbots to state-of-the-art security, integrating AI in e-commerce can push higher conversions, enhance user experience, and streamline business operations.",
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
            "Explore What Else We Offer In Custom E- Commerce Development Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "We", position: "after" },
            { text: "Custom", position: "after" },
            { text: "E-", position: "after" },
            { text: "Development", position: "after" },
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
        title="Launch Your Custom E- Commerce Platform with Confidence"
        highlightedWords={[
          { text: "Custom", position: "after" },
          { text: "Platform", position: "after" },
          { text: "with", position: "after" },
          { text: "E-", position: "after" },
        ]}
        description="From AI-powered features to smooth scalability, we develop powerful e-commerce solutions built for your industry and growth goals."
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
