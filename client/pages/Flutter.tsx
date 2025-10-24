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
      title: "Custom Flutter App Development",
      description:
        "Build your app the way you want with our custom Flutter app development services. We develop custom solutions crafted for your business needs.",
    },
    {
      title: "Flutter App UI/UX Development",
      description:
        "We develop not just beautiful-looking experiences, but also responsive and user-friendly ones.",
    },
    {
      title: "Flutter App Migration and Integration",
      description:
        "Seamlessly transition your existing apps to Flutter for optimized performance.",
    },
    {
      title: "Flutter App Maintenance & Support",
      description:
        "Our continuous maintenance and support services keep your app updated and uninterrupted.",
    },
  ];
  const faqData = [
    {
      id: 1,
      question: "Is Flutter app development popular in the USA?",
      answer:
        "Yes, Flutter has gained significant popularity in the USA for mobile app development. Many businesses are choosing Flutter for its ability to create cross-platform applications with a single codebase, reducing development time and costs while maintaining high performance and beautiful UI.",
    },
    {
      id: 2,
      question: "Which platforms does Flutter support for app development?",
      answer:
        "Flutter supports multiple platforms including iOS, Android, web (beta), and desktop applications (Windows, macOS, Linux). This allows developers to write code once and deploy it across various platforms with minimal adjustments.",
    },
    {
      id: 3,
      question: "How long does custom app development take?",
      answer:
        "The timeline for custom Flutter app development varies depending on the project complexity, features required, and scope. Typically, a basic app might take 2-3 months, while more complex applications can take 4-6 months or longer. We provide detailed timelines during our initial consultation.",
    },
    {
      id: 4,
      question: "Do you provide post-launch support services?",
      answer:
        "Yes, we offer comprehensive post-launch support and maintenance services to ensure your Flutter app continues to function optimally. Our support packages include bug fixes, performance optimization, feature updates, and technical assistance to keep your app running smoothly.",
    },
    {
      id: 5,
      question: "How can I hire your Flutter services?",
      answer:
        "You can hire our Flutter development services by contacting us through our website's contact form, scheduling a consultation call, or sending us an email with your project requirements. We'll discuss your needs, provide a custom quote, and establish a development plan tailored to your business goals.",
    },
  ];

  return (
    <div className=" bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: [
            "Next-Gen Mobile App",
            "Development Services to",
            "Power Your Vision",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/flutter.png"
        description="We design and develop AI-powered high-quality Android and iOS apps with the right tech, team, and texture."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee
        title="Technologies We Use"
        techRow1={[
          "Flutter",
          "Dart",
          "Firebase",
          "Supabase",
          "SQLite",
          "GraphQL",
          "REST API",
          "AWS Amplify",
        ]}
        techRow2={[]}
        techRow3={[
          "Codemagic",
          "Fastlane",
          "AppCenter",
          "Google Maps SDK",
          "Stripe",
          "OneSignal",
          "Push Notifications",
          "CI/CD",
        ]}
      />

      {/* What Makes Our Laravel Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Flutter App Development Services Stand Out?"
        highlightedWords={[
          { text: "Makes", position: "after" },
          { text: "Ap", position: "after" },
          { text: "Our", position: "after" },
          { text: "Development", position: "after" },
          { text: "Stand", position: "after" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "Flutter is a groundbreaking framework for building cross-platform applications. Its use of the Dart programming language enables swift deployment across desktop, mobile, and web. So why build multiple apps when one (built with Flutter) works everywhere?.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "As an iOS and Android app development company, we have experience building everything from MVPs to enterprise platforms with Flutter. Our experts always bring smart, cost-effective, and reliable solutions to your problems. If you are looking to scale up your business, contact our team. We’ll turn your idea into a Flutter-powered reality.",
          height: "h-16 sm:h-20 lg:h-[100px]",
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection />

      <LanguageServicesSection
        sectionTitle={{
          mainText: "Explore What Else We Offer In Flutter App Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "Flutter", position: "after" },
            { text: "Services", position: "after" },
            // { text: "Angular", position: "after" },
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
        title="The Future is Flutter—Speed, Performance, and Elegance."
        highlightedWords={[
          { text: "Flutter—Speed,", position: "after" },
          { text: "Performance", position: "after" },
          { text: "and", position: "after" },
        ]}
        description="Build high-performance, scalable, and cost-effective applications for your business needs."
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
