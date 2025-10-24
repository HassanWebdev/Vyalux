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
      title: "Custom Native App Development",
      description:
        "Build customized apps specifically for iOS and Android, leveraging native languages like Java, Swift, and Objective-C",
    },
    {
      title: "Interactive UI/UX for Mobile Apps",
      description:
        "Enhance user retention and engagement by making an intuitive and interactive mobile interface design.",
    },
    {
      title: "API & Third Party Integration Services",
      description:
        "Get unlimited access to the third-party tools and applications (payment gateways, maps, CRMs) to enhance the efficiency of your existing apps.",
    },
    {
      title: "Maintenance and Support",
      description:
        "Don't worry about performance checks, bug fixes, feature enhancements, and continuous updates after app launch.",
    },
    {
      title: "Migration to Native Apps",
      description:
        "Reconstruct or upgrade your existing apps to fully native iOS or Android versions for optimized performance.",
    },
  ];

  const industriesData = [
    {
      title: "E-commerce",
      description: "Highly interactive and secure shopping experience",
    },
    {
      title: "Healthcare",
      description: "High-performance HIPAA-compliant mobile apps",
    },
    {
      title: "Education",
      description: "Powerful E-learning platforms with AI advancements",
    },
    {
      title: "Finance",
      description: "Digital banking solutions with multi-payment gateways",
    },
    {
      title: "Logistics",
      description: "Real-time delivery tracking and transportation management",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What is a native app?",
      answer:
        "An app that is built for a particular operating system, such as iOS or Android, only. Native apps can access the full features of a device, i.e., camera, GPS, and microphone.",
    },
    {
      id: 2,
      question:
        "What are the benefits of choosing native mobile app development?",
      answer:
        "Native mobile app development offers high performance, enhanced UX, and full access to features. It is more secure, advanced, and easy to handle compared to other approaches.",
    },
    {
      id: 3,
      question: "Which frameworks are better for mobile app development?",
      answer:
        "Flutter, React Native, Ionic, SwiftUI, Corona SDK, Xamarin, and Apache Cordova are notable frameworks for mobile app development.",
    },
    {
      id: 4,
      question: "What industries have you served so far?",
      answer:
        "We have worked and are still working with various industries, including e-commerce, healthcare, fintech, real estate, and automotive.",
    },
  ];

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: ["Build Custom Native Apps", "for iOS & Android"],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/android.png"
        description="From idea to launch, we build custom iOS and Android apps enriched with performance, security, and scalability."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={[
          "Swift",
          "Objective-C",
          "Kotlin",
          "Java",
          "Jetpack Compose",
          "SwiftUI",
          "Android SDK",
          "iOS SDK",
        ]}
        techRow2={[
          "Xcode",
          "Android Studio",
          "Gradle",
          "CocoaPods",
          "REST API",
          "GraphQL",
          "Room",
          "Core Data",
        ]}
        techRow3={[
          "Firebase",
          "AppCenter",
          "Fastlane",
          "TestFlight",
          "Play Console",
          "Push Notifications",
          "Stripe",
          "Google Maps SDK",
        ]}
      />

      {/* What Makes Our Laravel Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our IOS & Android App Development Services Stand Out?"
        highlightedWords={[
          { text: "Makes", position: "whole" },
          { text: "Our", position: "whole" },
          { text: "IOS", position: "whole" },
          { text: "App", position: "whole" },
          { text: "Stand", position: "whole" },
          { text: "Out?", position: "whole" },
        ]}
        firstColumnContent={{
          text: "As technological advancements continue to evolve, your software requires deep access to native APIs and enhanced device capabilities. Here comes the role of our native development service, where we have extensive experience and the latest tools to execute the innovations.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "We have developed several native applications across various industries, including e-commerce, entertainment, real estate, and archaeology. We deliver trusted solutions with proven results.",
          height: "h-16 sm:h-20 lg:h-[100px]",
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection industries={industriesData} />

      <LanguageServicesSection
        sectionTitle={{
          mainText:
            "Explore What Else We Offer In iOS & Android App Development",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "iOS", position: "after" },
            { text: "App", position: "after" },
            { text: "Development", position: "after" },
            { text: "&", position: "after" },
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
        title="Grow Your Business With High- Performance iOS & Android Apps"
        highlightedWords={[
          { text: "Business", position: "after" },
          { text: "With", position: "after" },
          { text: "iOS", position: "after" },
          { text: "&", position: "after" },
          { text: "Performance", position: "after" },
        ]}
        description="We build customized mobile apps tailored to your complex business needs. Our primary focus is security, stability, and seamless user experience across all devices."
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
