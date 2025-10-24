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
      title: "Custom Software Development Services",
      description:
        "We develop tailored software solutions from scratch to meet your specific business requirements and goals.",
    },
    {
      title: "Mobile Software Development",
      description:
        "We develop intuitive, feature-rich mobile applications for Android and iOS platforms to expand your digital presence.",
    },
    {
      title: "Enterprise Software Development",
      description:
        "We build custom enterprise apps to address specific business challenges, improve workflows, and increase operational efficiency.",
    },
    {
      title: "Cloud-Based Software Development",
      description:
        "Leverage the power of the cloud for building high-performance cloud-native applications.",
    },
    {
      title: "UI Software Development",
      description:
        "Empower your business with intuitive UI design that delivers exceptional user experiences, streamlined analytics, and NLP.",
    },
    {
      title: "IoT & Embedded Software Development",
      description:
        "Create innovative IoT solutions that seamlessly connect the physical and digital worlds.",
    },
  ];
  
  const industries = [
    {
      title: "E-commerce & Retail",
      description: "Develop scalable, high-performing eCommerce solutions, POS systems, and customer interaction tools to drive conversions and streamline operations."
    },
    {
      title: "Automotive",
      description: "From fleet management systems to integrated car apps and inventory solutions, we furnish software that powers the future of mobility."
    },
    {
      title: "Healthcare",
      description: "Build HIPAA-compliant software solutions for patient administration, telemedicine, diagnostics, and healthcare insights."
    },
    {
      title: "Education & E-learning",
      description: "Set up learning management systems (LMS), online classrooms, and e-learning apps that boost digital education experiences."
    },
    {
      title: "Streaming & Entertainment",
      description: "Develop content delivery platforms, live streaming apps, and user engagement tools that offer smooth entertainment across devices."
    },
    {
      title: "Fintech",
      description: "Create secure financial solutions, payment processing systems, digital wallets, and AI-powered insights platforms tailored to your financial needs."
    }
  ];
  
  const faqData = [
    {
      id: 1,
      question: "How are your software development services different?",
      answer: "We deliver industry-specific, AI-driven solutions with a focus on flexibility, security, and innovation. Our agile approach ensures rapid delivery and continuous optimization."
    },
    {
      id: 2,
      question: "What technologies do you specialize in?",
      answer: "We utilize advanced technologies, including Python, Java, Flutter, React, Node.js, Laravel, Ruby on Rails, and frameworks for mobile, AI, and cloud solutions like AWS, Azure, and GCP."
    },
    {
      id: 3,
      question: "Do you develop healthcare or fintech software?",
      answer: "Absolutely! We have vast experience in developing HIPAA-compliant healthcare systems and secure fintech platforms customized to regulatory standards."
    },
    {
      id: 4,
      question: "How can I hire your services?",
      answer: "We offer full-time, part-time, and project-based services to our customers."
    },
  ];

  return (
    <div className="bg-[#040404] text-white relative overflow-hidden font-montserrat">
      {/* Hero Section */}
      <HeroSection
        title={{
          lines: [
            "Custom Software Solutions",
            "That Scale With Your Vision",
          ],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/sqa1.png"
        description="Transform your business with smart, scalable software customized to your unique goals. We furnish secure, efficient, and high-performance solutions that support innovation and long-term growth."
      />

      {/* Technologies We Use Section */}
      <FriendsMarquee 
        title="Technologies We Use"
        techRow1={[
          "React",
          "Angular",
          "Vue.js",
          "Next.js",
          "Node.js",
          "Laravel",
          "Spring Boot",
          "Django"
        ]}
        techRow2={[
          "AWS",
          "Azure",
          "Docker",
          "Kubernetes",
          "CI/CD",
          "Git",
          "Jenkins"
        ]}
        techRow3={[
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "Redis",
          "GraphQL",
          "Microservices",
        ]}
      />

      {/* What Makes Our Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Software Development Services Stand Out?"
        highlightedWords={[
          { text: "Our", position: "after" },
          { text: "Development", position: "after" },
          { text: "Stand", position: "after" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "Our software development services are engineered to enhance performance, flexibility, and growth. With a deep focus on agile methods, automation, and advanced technologies, we help businesses accelerate innovation while minimizing risk. From cloud-native applications to AI-driven platforms, our solutions are future-proof, cost-effective, and scalable.",
          height: "h-24 sm:h-32 lg:h-[80px]",
        }}
        secondColumnContent={{
          text: "VYALUX stands out with a client-first approach, industry-specific expertise, and a proven history of delivering high-quality digital solutions. Our team of developers, product analysts, and strategists collaborates with you at every stage of the project. We utilize the latest technology stacks, ensure robust security, and remain flexible to scale with your evolving needs.",
          height: "h-16 sm:h-20 lg:h-[100px]",
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
          mainText:
            "Explore What Else We Offer In Software Development Services",
          highlightedWords: [
            { text: "Else", position: "after" },
            { text: "We", position: "after" },
            { text: "Software", position: "after" },
            { text: "Services", position: "after" },
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
        title="Turn Your Idea Into a Scalable Software Solution"
        highlightedWords={[
          { text: "Into", position: "after" },
          { text: "a", position: "after" },
          { text: "Software", position: "after" },
        ]}
        description="Connect with our expert developers to develop secure, high-performing software tailored to your business needs."
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
