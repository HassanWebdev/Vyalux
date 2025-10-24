import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FriendsMarquee from "../components/FriendsMarquee";
import HeroSection from "../components/Laravel/HeroSection";
import ServicesSection from "../components/Laravel/ServicesSection";
import IndustriesSection from "../components/Laravel/IndustriesSection";
import CaseStudiesSection from "../components/Laravel/CaseStudiesSection";
import ContactSection from "../components/Laravel/ContactSection";
import LanguageServicesSection from "@/components/Laravel/LanguageServicesSection";
import FAQ from "../components/FAQ";
import ConversationSection from "../components/ConversationSection";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function NestJs() {
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
      title: "Cross-Platform Custom Mobile App Development Services",
      description:
        "Build your app the way you want with our custom Flutter app development services. We develop custom solutions crafted for your business needs.",
    },
    {
      title: "Cross Platform App Development for Enterprise",
      description:
        "We develop robust, secure, and scalable solutions that cater to the complex needs of large organizations.",
    },
    {
      title: "Hybrid Cross-Platform Apps Development",
      description:
        "By combining HTML, CSS, and JavaScript, we develop apps that work seamlessly on every device, keeping costs low.",
    },
    {
      title: "Cross-Platform Gaming Apps Development",
      description:
        "Frameworks like Unity help build immersive, high-performance gaming apps that work smoothly across devices from mobile to desktop.",
    },
    {
      title: "Affordable Cross-Platform App Development",
      description:
        "We offer efficient, cost-effective, and high-performance apps that suit your budget.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What is cross-platform app development?",
      answer:
        "Cross-platform app development is the process of creating mobile applications that can run on multiple operating systems (like iOS and Android) using a single codebase. This approach uses frameworks like React Native, Flutter, or Xamarin to write code once and deploy it across different platforms, significantly reducing development time and cost while maintaining consistent functionality.",
    },
    {
      id: 2,
      question: "What are the advantages of cross-platform app development?",
      answer:
        "Cross-platform development offers numerous advantages including cost-efficiency (single codebase for multiple platforms), faster time-to-market, easier maintenance, consistent user experience across devices, broader market reach, and simplified updates. It's particularly beneficial for businesses looking to launch quickly while targeting users on multiple platforms with limited resources.",
    },
    {
      id: 3,
      question: "Which cross-platform framework is best for my project?",
      answer:
        "The best framework depends on your specific requirements. Flutter offers excellent performance and a rich widget library. React Native provides great access to native APIs and a strong JavaScript ecosystem. Xamarin is ideal for C# developers and enterprise applications. We evaluate factors like your project complexity, performance needs, team expertise, and long-term maintenance requirements to recommend the optimal solution.",
    },
    {
      id: 4,
      question: "Do cross-platform apps perform as well as native apps?",
      answer:
        "Modern cross-platform frameworks have significantly closed the performance gap with native apps. While extremely graphics-intensive applications might still benefit from native development, frameworks like Flutter and React Native deliver near-native performance for most business applications. Our optimization techniques ensure your cross-platform app maintains excellent performance across all devices.",
    },
    {
      id: 5,
      question: "How long does it take to develop a cross-platform app?",
      answer:
        "Development time varies based on complexity, features, and scope. Simple apps might take 2-3 months, while complex applications with extensive features could require 4-6 months. Cross-platform development is typically 30-40% faster than building separate native apps. We provide detailed timelines during the consultation phase after understanding your specific requirements.",
    },
  ];

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: [
            "Accelerate Your Digital",
            "Business With Cross-",
            "Platform Apps",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/cross.png"
        description="From idea to launch, we build custom iOS and Android apps enriched with performance, security, and scalability."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={[
          "Flutter",
          "React Native",
          "Ionic",
          "NativeScript",
          "Capacitor",
          "Unity",
        ]}
        techRow2={[
          "Dart",
          "JavaScript",
          "TypeScript",
          "C#",
          "Kotlin",
          "Swift",
          "Java",
          "GraphQL",
        ]}
        techRow3={[
          "Firebase",
          "Supabase",
          "SQLite",
          "Realm",
          "AppCenter",
          "Fastlane",
          "CI/CD",
        ]}
      />

      {/* What Makes Our Laravel Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Cross- Platform Development Services Stand Out?"
        highlightedWords={[
          { text: "Platform", position: "whole" },
          { text: "Development", position: "whole" },
          { text: "Out?", position: "whole" },
          { text: "Makes", position: "whole" },
          { text: "Our", position: "after" },
          { text: "Stand", position: "after" },
        ]}
        firstColumnContent={{
          text: "As a mobile app development company, we develop next-gen mobile apps for Android, iOS, and Huawei, allowing businesses to expand across all major devices simultaneously with a single codebase",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "Our portfolio highlights the confidence and satisfaction of our customers. Whether it is e-commerce, an AI-powered social app, Fintech, or any other industry, our experts have hands-on experience in developing cross-platform apps that offer quality, stability, and scalability.",
          height: "h-16 sm:h-20 lg:h-[100px]",
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection
        industries={[
          {
            title: "E-commerce",
            description: "Build a seamless, user-friendly shopping experience",
          },
          {
            title: "Healthcare",
            description: "Guaranteed security with HIPAA-compliant mobile apps",
          },
          {
            title: "Education",
            description: "Build E-learning platforms with powerful tools",
          },
          {
            title: "Finance",
            description: "Safe and secure payment solutions",
          },
          {
            title: "Logistics",
            description: "Real-time tracking and transportation management",
          },
        ]}
      />

      <LanguageServicesSection
        sectionTitle={{
          mainText: "Explore What Else We Offer In Cross- Platform Services",
          highlightedWords: [
            { text: "What", position: "after" },
            { text: "Cross-", position: "after" },
            { text: "Else", position: "after" },
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
        title="One App, Multi Platforms, Endless Possibilities"
        highlightedWords={[
          { text: "Platforms,", position: "after" },
          { text: "Possibilities", position: "after" },
        ]}
        description="Leverage our cross-platform development expertise and build one solution that works uninterruptedly on every device from mobile to desktop, making your business progress sky high."
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
