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

export default function SaasPage() {
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
      title: "Custom SaaS Solutions Engineering",
      description:
        "Building custom cloud applications accurately engineered to address your complex operational challenges and market gaps.",
    },
    {
      title: "Full-Lifecycle SaaS Product Realization",
      description:
        "From initial idea and Minimum Viable Product (MVP) validation to formation and launching feature-full, large-scale SaaS platforms.",
    },
    {
      title: "Cloud-Native Web Application Development",
      description:
        "Building powerful, high-performance web applications developed natively for the cloud environment.",
    },
    {
      title: "Enterprise-Grade SaaS Platform Development",
      description:
        "We prioritize developing the foundational infrastructure for compliant, secure, and future-oriented SaaS ecosystems.",
    },
  ];
  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Offer custom SaaS solutions for online shopping, stock control, multi-vendor shops, and consumer engagement platforms, delivering smooth and efficient retail experiences.",
    },
    {
      title: "Automotive",
      description:
        "Develop effective SaaS platforms for vehicle management, vehicle booking systems, dealership operations, and real-time tracking.",
    },
    {
      title: "Healthcare",
      description:
        "Build HIPAA-compliant SaaS applications for patient administration, telehealth, appointment booking, and e-health record (EHR) systems—ensuring security, privacy, and efficiency.",
    },
    {
      title: "Education & E-learning",
      description:
        "Design feature-rich SaaS platforms for e-learning, online classes, LMS systems, and performance analytics, quiz modules—engineered to enhance educational activities.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Deliver powerful SaaS solutions for streaming, content-on-demand, media libraries, and subscription management, ensuring fast, reliable, and innovative entertainment experiences.",
    },
    {
      title: "Fintech",
      description:
        "Develop secure and high-performing SaaS applications for financial services, including payment processing, real-time analytics, stock tracking, and digital wallets.",
    },
  ];
  const faqData = [
    {
      id: 1,
      question: "What can be an example of a SaaS application?",
      answer:
        "The best example of a SaaS application is a third-party web-based email application that helps send and receive emails without maintaining additional servers and systems for workflow continuity.",
    },
    {
      id: 2,
      question: "Which programming language is used for SaaS?",
      answer:
        "Commonly used programming languages for SaaS are PHP, Java, Python, and Ruby on Rails.",
    },
    {
      id: 3,
      question: "Can we develop a SaaS application without coding?",
      answer:
        "Yes. SaaS has no-code platforms designed for beginners with no coding experience.",
    },
    {
      id: 4,
      question: "Can a single developer build a SaaS application?",
      answer:
        "Yes. A single developer can easily build a SaaS application.",
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
              "Build Your SaaS Products",
              "With Us Featuring Security,",
              "Scalability, and Innovation",
            ],
          }}
          onButtonHover={handleButtonHover}
          onButtonLeave={handleButtonLeave}
          imageSrc="/WP/saas.png"
          description="We offer end-to-end SaaS application development services. Initiate, innovate, and optimize cloud-based solutions by building secure, fast, and flexible applications tailored to your requirements."
        />

      {/* Technologies We Use Section */}
      <FriendsMarquee 
        title="Technologies We Use"
        techRow1={[
          "React",
          "Next.js",
          "Angular",
          "Vue.js",
          "Node.js",
          "NestJS",
          "Python/Django",
          "Laravel/PHP",
        ]}
        techRow2={[
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "GraphQL",
          "REST API",
          "gRPC",
          "AWS",
          "Azure/GCP",
        ]}
        techRow3={[
          "Docker",
          "Kubernetes",
          "Terraform",
          "CI/CD",
          "Stripe/PayPal",
          "Auth0/Keycloak",
          "OpenTelemetry",
          "Feature Flags",
        ]}
      />

      {/* What Makes Our Python Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our SaaS Development Services Stand Out?"
        highlightedWords={[
           { text: "Makes", position: "after" },
          { text: "Our", position: "after" },
          { text: "Development", position: "after" },
          { text: "Stand", position: "after" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "Choosing the right and market-leading SaaS application development company is important to scale your product to the next level. At VYALUX, we don't just develop SaaS applications; we craft secure, highly scalable, and intuitive products that set you apart. Our custom solutions integrate easily, delivering optimized performance and high data security, all supported by cutting-edge tools and agile practices to launch you ahead of the competition.",
          height: "h-24 sm:h-32 lg:h-[280px]",
        }}
        secondColumnContent={{
          text: "",
          height: "h-16 sm:h-0 lg:h-[0px]",
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection industries={industries} />

      {/* Language Services Section */}
      <LanguageServicesSection
        sectionTitle={{
          mainText:
            "Explore What Else We Offer In SaaS Application Development Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "What", position: "after" },
            { text: "In", position: "after" },
            { text: "SaaS", position: "after" },
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

      <ConversationSection
        title="Hire Our Expert SaaS Application Development Services Today"
        highlightedWords={[
          { text: "Expert", position: "after" },
          { text: "SaaS", position: "after" },
          { text: "Development", position: "after" },
          { text: "Today", position: "after" },
        ]}
        description="Connect with our specialists today for a one-on-one discussion and elevate your business to the cloud—securely, smartly, and confidently."
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
