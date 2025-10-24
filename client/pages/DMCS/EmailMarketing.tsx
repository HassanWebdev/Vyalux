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

export default function EmailMarketingPage() {
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
      title: "Email Campaign Strategy & Planning",
      description:
        "Well-built campaign planning with industry requirements to make every marketing initiative effective and results-oriented.",
    },
    {
      title: "Automated Email Sequences",
      description:
        "Automated email flows. Add triggers and build a journey through the transformation stage.",
    },
    {
      title: "Transactional Email Services",
      description:
        "Ensure timely and appropriate delivery of order confirmations, shipping notices, and password resets.",
    },
    {
      title: "Copy & Personalized Email Campaigns",
      description:
        "Get branded emails with captivating copy that keeps subscribers engaged, increase open rates, and drive action.",
    },
    {
      title: "Newsletter Design & Development",
      description:
        "Custom newsletter designs made visually appealing and mobile-friendly with valuable insights, tips, and offers directly to their inbox.",
    },
    {
      title: "Performance Tracking & Optimization",
      description:
        "Enhance email performance and maximize campaign returns by optimizing performance through detailed analytics and A/B testing.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description:
        "Engage customers with customized product recommendations, cart abandonment emails, seasonal promotions, and loyalty program updates to drive repeat orders and increase lifetime value.",
    },
    {
      title: "Automotive",
      description:
        "Use email marketing to promote new vehicle launches, finance offers, service reminders, and post-purchase follow-ups, developing long-term customer relationships and boosting dealership traffic.",
    },
    {
      title: "Healthcare",
      description:
        "Send appointment reminders, health tips, patient onboarding emails, and policy updates securely and efficiently—perfect for clinics, hospitals, and telehealth platforms maintaining HIPAA compliance.",
    },
    {
      title: "Education & E-learning",
      description:
        "Keep students and educators updated with course alerts, enrollment updates, certification announcements, and performance summaries. Email marketing also promotes drip campaigns for lead nurturing.",
    },
    {
      title: "Streaming & Entertainment",
      description:
        "Deliver personalized recommendations, subscription renewal alerts, new content releases, and exclusive access to events or previews to maximize user engagement and retention.",
    },
    {
      title: "Fintech",
      description:
        "Update users about financial tips, product details, account summaries, and transactional alerts. Email is also crucial for onboarding, security verifications, and investor interactions.",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What is the biggest challenge of email marketing?",
      answer:
        "The biggest challenge of email marketing is the high spam ratio. When a marketer delivers emails to his prospects, most of the emails end up in the recipients' spam folders.",
    },
    {
      id: 2,
      question: "What is ABM marketing?",
      answer:
        "Account-based marketing ABM is a type of marketing in which personalized marketing emails and messages are designed for specific businesses and audiences.",
    },
    {
      id: 3,
      question: "What kind of marketing can be achieved through emails?",
      answer:
        "Promotional emails, Newsletter emails, Survey emails, Milestone emails, Lead nurturing emails, Dedicated emails, Welcome emails, Re-engagement emails, and more.",
    },
    {
      id: 4,
      question: "What is the cost of email marketing?",
      answer:
        "Compared to other marketing techniques, email marketing is a low-budget but highly effective marketing campaign.",
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
          lines: ["Power Your Growth With", "Strategic Email Marketing"],
        }}
        onButtonHover={handleButtonHover}
        onButtonLeave={handleButtonLeave}
        imageSrc="/WP/email.png"
        description="Reach the right prospects at the right time with smartly crafted email campaigns. We handle planning, design, and execution—leveraging advanced AI tools to help you improve retention, grow revenue, and communicate effectively."
      />

      <FriendsMarquee
        title="Technologies We Use"
        techRow1={["Mailchimp", "HubSpot", "SendGrid", "Campaign Monitor"]}
        techRow2={[]}
        techRow3={[
          "Google Analytics",
          "Facebook",
          "Instagram",
          "LinkedIn",
          "Twitter",
          "Shopify",
          "WooCommerce",
          "WordPress",
          "Canva",
        ]}
      />

      {/* What Makes Our Services Stand Out Section */}
      <ServicesSection
        title="What Makes Our Email Marketing Services Stand Out?"
        highlightedWords={[
          { text: "Makes", position: "after" },
          { text: "Our", position: "after" },
          { text: "Marketing", position: "after" },
          { text: "Stand", position: "after" },
          { text: "Out?", position: "after" },
        ]}
        firstColumnContent={{
          text: "Impactful email marketing goes beyond blasting emails—it’s about delivering the right content to the right people at the perfect time. We combine strategic segmentation, AI automation, compelling copy, and real-time insights to create campaigns that truly convert.",
          height: "h-24 sm:h-32 lg:h-[180px]",
        }}
        secondColumnContent={{
          text: "With deep expertise in SEO services and a focus on ROI-driven automation, we help businesses increase deliverability and impact. Whether you're looking to enhance eCommerce sales, nurture B2B leads, or grow your SaaS outreach, we’ll design a solution to fit your goals.",
          height: "h-16 sm:h-20 lg:h-[100px]",
        }}
        accentColor="#AB322C"
      />

      {/* Industries We Cover Section */}
      <IndustriesSection industries={industries} />

      {/* Language Services Section */}
      <LanguageServicesSection
        sectionTitle={{
          mainText: "Explore What Else We Offer in Email Marketing Services",
          highlightedWords: [
            { text: "What", position: "after" },
            { text: "Else", position: "after" },
            { text: "Email", position: "after" },
            { text: "Services", position: "after" },
            // { text: "Out?", position: "after" },
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
        title="Connect with Our Email Marketing Experts Today"
        highlightedWords={[
          { text: "Our", position: "after" },
          { text: "Experts", position: "after" },
          { text: "Email", position: "after" },
          { text: "Today", position: "after" },
        ]}
        description="Let’s design personalized email strategies that fascinate your audience and drive measurable results"
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
