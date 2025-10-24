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
      title: "AI-driven insights for smarter business decisions",
      description:
        "Power advanced analytics, driven by artificial intelligence, to identify opportunities, extract actionable insights, and streamline decision-making processes",
    },
    {
      title: "Transform complex data into interactive dashboards",
      description:
        "Make your data easy to understand with dynamic and user-friendly visualizations. We create custom dashboards that offer transparency, context, and control.",
    },
    {
      title: "Forecast trends with AI-powered analytics",
      description:
        "Predict future results using machine learning algorithms to make bold, informed business decisions across businesses, operations, and finance.",
    },
    {
      title: "Expert consultation for data-driven strategies",
      description:
        "Our professionals help you define KPIs, select the right tools, and develop a roadmap to unlock full potential from your data assets.",
    },
    {
      title: "Advanced visualization for large-scale datasets",
      description:
        "Visualize high-volume, high-velocity data in meaningful formats. Our experts handle complex datasets without compromising on speed or quality.",
    },
  ];
  
  const industries = [
    {
      title: "E-commerce & Retail",
      description: "Utilize data to track customer behavior, predict trends, and manage inventory in real time."
    },
    {
      title: "Automotive",
      description: "Envision telematics, trace vehicle performance, and examine user data to enhance fleet management, maintenance, and in-vehicle user experiences."
    },
    {
      title: "Healthcare",
      description: "Convert medical records, patient responses, and clinical data into smart dashboards. Enable predictive healthcare insights, resource management, and HIPAA-compliant decision-making tools."
    },
    {
      title: "Education & E-learning",
      description: "Get real-time analytics on student engagement, progress tracking, and learning results."
    },
    {
      title: "Streaming & Entertainment",
      description: "Explore viewing behavior, user preferences, and content performance."
    },
    {
      title: "Fintech",
      description: "Visualize transactions, detect fraud practices, and predict market trends. We develop strong, secure dashboards for real-time financial activities and regulatory compliance."
    }
  ];
  
  const faqData = [
    {
      id: 1,
      question: "What is the difference between data analytics and visualization?",
      answer: "Data analytics interprets and extracts the meaning from the given data, and data visualization is then applied to see the patterns of meaningful information."
    },
    {
      id: 2,
      question: "Which tools are used in data visualization?",
      answer: "Power BI and MS Excel are prominent examples of data visualization tools."
    },
    {
      id: 3,
      question: "Can we use SQL as a data analytics tool?",
      answer: "Yes. SQL (Structured Query Language) is an effective tool used in data analysis for querying and managing data stored in relational databases."
    },
    {
      id: 4,
      question: "How can I hire your services?",
      answer: "We offer full-time, part-time, and project-based services to our customers."
    }
  ];

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: [
            "Data Analytics and",
            "Visualization Services for",
            "Smarter Decision-Making",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/dav.png"
        description="Revamp raw data into actionable insights. Our solutions offer predictive analytics, real-time dashboards, and AI-driven data intelligence to enhance operations and accelerate business growth."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee 
        title="Technologies We Use"
        techRow1={[
          "Power BI",
          "D3.js",
          "Plotly",
          "Grafana",
          "Kibana",
          "Looker",
        ]}
        techRow2={[
          "Python",
          "SQL",
          "Pandas",
          "NumPy",
          "Bokeh"
        ]}
        techRow3={[
          "Spark",
          "BigQuery",
          "Snowflake",
          "MongoDB",
          "ElasticSearch",
          "Airflow"
        ]}
      />

      {/* What Makes Our AI Models Stand Out Section */}
      <ServicesSection
        title="What Makes Our Data Analytics & Visualization Services Stand Out?"
        highlightedWords={
          [
            { text: "Makes", position: "whole" },
            { text: "Our", position: "whole" },
            { text: "Analytics", position: "whole" },
            { text: "&", position: "whole" },
            { text: "Stand", position: "after" },
            { text: "Out?", position: "after" },
            { text: "Visualization", position: "after" }
          ]
        }
        firstColumnContent={{
          text: "Our AI-powered analytics solutions help businesses transform complex data into clear, actionable insights. By merging predictive analytics, real-time data visualization, and smart insights, we facilitate smarter decision-making, enhanced performance, deeper customer understanding, and optimized financial strategies. Every solution is customized to your unique business goals",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "",
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
          mainText: "Explore What Else We Offer In Data Analytics & Visualization Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "Visualization", position: "after" },
            { text: "Data", position: "after" },
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
        title="Get Started With Our Data Analytics & Visualization Services"
        highlightedWords={
          [
            { text: "Our", position: "after" },
            { text: "Data", position: "after" },
            { text: "Visualization", position: "after" },
          ]
        }
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
