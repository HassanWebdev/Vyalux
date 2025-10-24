import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { faqData } from "../data/faqData";
import LanguageServicesSection from "../components/Laravel/LanguageServicesSection";
import CaseStudiesSection from "../components/Laravel/CaseStudiesSection";
import FriendsMarquee from "../components/FriendsMarquee";
import ConversationSection from "../components/ConversationSection";
import { AnimatedBlobButton } from "@/components/ui/animated-blob-button";
import { Link, useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const globeRef1 = useRef<HTMLImageElement>(null);
  const globeRef2 = useRef<HTMLImageElement>(null);
  const aiButtonRef = useRef<HTMLButtonElement>(null);
  const aiOverlayRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const [testimonialsPerView, setTestimonialsPerView] = useState<number>(() =>
    typeof window !== "undefined"
      ? window.innerWidth < 640
        ? 1
        : window.innerWidth < 1024
          ? 2
          : 3
      : 3,
  );
  const carouselRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const isSlideChanging = useRef(false); // prevents overlapping slide animations
  const videoRef = useRef<HTMLVideoElement | null>(null); // ref for autoplay control

  // Testimonials data - flat array for individual scrolling
  const testimonialsData = [
    {
      id: 1,
      text: "VYALUX's team has designed two websites for us and they have also designed several promotional materials. They are a phenomenal company to work with. They are well-organized and execute all projects in a timely manner. They are easy to communicate with and are quick to make adjustments as needed. They are awesome!",
      author: "Lacey Anderson, Autism Solutions",
    },
    {
      id: 2,
      text: "We really cannot say enough about this team and their company. This was the most seamless media creation experience I've had in 20 years. Thoughtful personal attention, a sincere drive to understand our goals, our unique demographic and keep the Montana vibe. In addition, efficient and responsive service even now, long after our project concludes.",
      author: "Liah Allison, Belgrade Liquor",
    },
    {
      id: 3,
      text: "VYALUX's team is really great. Chance is really great at communicating and moving projects forward and we've been very happy with the work they've done for us. We built 3 websites with them in the past 1 year and are very happy with them. Highly recommended!",
      author: "Ashrey Sharma, Wazoodle Fabrics",
    },
    {
      id: 4,
      text: "Outstanding work and professional service. The team delivered exactly what we needed and exceeded our expectations. Great communication throughout the project.",
      author: "Michael Chen, Tech Innovations",
    },
    {
      id: 5,
      text: "Exceptional design and development services. The team's attention to detail and creativity brought our vision to life perfectly. Highly recommend their services!",
      author: "Sarah Johnson, Creative Studios",
    },
    {
      id: 6,
      text: "Professional, reliable, and creative. VYALUX helped us launch our online presence with a stunning website that converts visitors into customers.",
      author: "David Rodriguez, E-commerce Plus",
    },
    {
      id: 7,
      text: "The best investment we made for our business. Their strategic approach and technical expertise resulted in a 300% increase in our online engagement.",
      author: "Emma Thompson, Digital Marketing Pro",
    },
    {
      id: 8,
      text: "From concept to completion, the team was amazing. They understood our brand and created something truly unique that stands out in our industry.",
      author: "James Wilson, Brand Excellence",
    },
    {
      id: 9,
      text: "Incredible team with amazing results. They transformed our outdated website into a modern, user-friendly platform that our customers love.",
      author: "Lisa Martinez, Retail Solutions",
    },
    {
      id: 10,
      text: "Top-notch service and exceptional quality. The team's expertise in both design and development is evident in every aspect of our project.",
      author: "Robert Kim, Innovation Labs",
    },
    {
      id: 11,
      text: "Professional, creative, and results-driven. VYALUX helped us establish a strong online presence that has significantly boosted our business growth.",
      author: "Amanda Foster, Growth Dynamics",
    },
    {
      id: 12,
      text: "Amazing experience working with this team. They delivered a website that not only looks great but also performs exceptionally well in search results.",
      author: "Christopher Lee, Digital Success",
    },
  ];
  const services = [
    {
      title: "Custom AI Solution",
      description:
        "We design smart AI Solutions to accelerate your business growth.",
    },
    {
      title: "AI Calling Assistant",
      description: "Let AI handle your calls—fast, smart, and 24/7 available.",
    },
    {
      title: "LLMs Pre-trained Models",
      description:
        "We deploy NLP solutions powered by LLMs for content creation, customer support, and data analysis.",
    },
    {
      title: "Transcribers",
      description:
        "Convert your meetings, calls, and content into a textual format effortlessly.",
    },
  ];

  // Carousel data
  const carouselData = [
    {
      id: "fullstack",
      badge: "OUR EXPERTISE",
      title: "FULL STACK DEVELOPMENT",
      description:
        "We build scalable full stack web applications with seamless front-end and powerful back-end solutions. From concept to launch, we deliver robust, user-centric digital products.",
      image: "fullstack",
      services: [
        {
          title: "Web Application Development",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/47cbd36ccd9cee2ff393810108ee5e0f508174b4?width=74",
        },
        {
          title: "Mobile App Solutions",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/418322be0d398a08e0df4b79939422c479482e32?width=74",
        },
        {
          title: "API Integration Services",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/e07aa6f07472f9f70dcb15e4712d605b808dbc94?width=74",
        },
        {
          title: "Enterprise Software Systems",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/0b3536cf7d02aa02002fc224a0c6e5c12f5d754e?width=74",
        },
        {
          title: "Legacy System Upgrades",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/78f75c658b2a79a61c2049469267afae2ab82791?width=74",
        },
      ],
    },
    {
      id: "ai",
      badge: "OUR EXPERTISE",
      title: "AI SOLUTIONS",
      description:
        "We deliver smart AI solutions that automate tasks, enhance decision-making, and boost efficiency. From chatbots to predictive analytics, we tailor AI to fit your business needs.",
      image: "ai",
      services: [
        {
          title: "AI Chatbot Development",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/0b7a8e1cc3ca653e27e77e16868c9f637d5bdde3?width=76",
        },
        {
          title: "Computer Vision Models",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/0a2fcc97339805f92de3e9a8c75b0db60e7a9e50?width=74",
        },
        {
          title: "Predictive Data Analytics",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/f4d53286e031131cb159284e7fd80bf69066eadb?width=74",
        },
        {
          title: "Document Data Extraction",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/0c67c29d4520d866659cfa71661ceee59cb31eea?width=74",
        },
        {
          title: "Custom NLP Solutions",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/242d3b076da0ffa646238c2d132d601b4120e8c8?width=74",
        },
      ],
    },
    {
      id: "product",
      badge: "OUR EXPERTISE",
      title: "PRODUCT MANAGEMENT",
      description:
        "We drive product success with clear roadmaps, seamless stakeholder collaboration, and in-depth market research. By continuously analyzing user feedback, we deliver iterative improvements that stay aligned with your business goals.",
      image: "product",
      services: [
        {
          title: "Product Strategy Planning",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/47cbd36ccd9cee2ff393810108ee5e0f508174b4?width=74",
        },
        {
          title: "User Experience Research",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/418322be0d398a08e0df4b79939422c479482e32?width=74",
        },
        {
          title: "Agile Project Management",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/e07aa6f07472f9f70dcb15e4712d605b808dbc94?width=74",
        },
        {
          title: "Stakeholder Collaboration",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/0b3536cf7d02aa02002fc224a0c6e5c12f5d754e?width=74",
        },
        {
          title: "Product Analytics & KPIs",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/78f75c658b2a79a61c2049469267afae2ab82791?width=74",
        },
      ],
    },
    {
      id: "ecommerce",
      badge: "OUR EXPERTISE",
      title: "ECOMMERCE SOLUTIONS",
      description:
        "We drive product success through strategic roadmap planning, stakeholder collaboration, and market research. Continuous user feedback analysis ensures iterative improvements that align with business goals.",
      image: "ecommerce",
      services: [
        {
          title: "Shopify Store Development",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/3a02d0b26dd34c61286fb552f40271416939637f?width=74",
        },
        {
          title: "WooCommerce Website Setup",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/e84312fd47fb816058e45309d78955d90476e014?width=74",
        },
        {
          title: "Custom Checkout Experience",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/450a2d47bcabd5a123cc33c430750271926688ad?width=74",
        },
        {
          title: "Payment Gateway Integration",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/1e3a4df0776b49b01253148bf0b756fe655da01a?width=74",
        },
        {
          title: "Order and Inventory Management",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/444d698041f33b9180e59cb955ca78d7a3d8bdd7?width=74",
        },
      ],
    },
    {
      id: "marketing",
      badge: "OUR EXPERTISE",
      title: "MARKETING SERVICES",
      description:
        "We craft data-driven marketing strategies to boost brand visibility and engagement. From content creation to campaign execution, we help you reach the right audience effectively.",
      image: "marketing",
      services: [
        {
          title: "Search Engine Optimization (SEO)",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/f63a474ff52b2245c6349a4536b3576270fafdc8?width=74",
        },
        {
          title: "Google Ads and PPC Campaigns",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/cd29c7316cd8dfffef6d34cd8a7c4777a7a17366?width=74",
        },
        {
          title: "Social Media Marketing",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/ad26b299cac293d5d3140c1f6334920cb0d1f1f9?width=74",
        },
        {
          title: "Email Campaign Automation",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/bdacb0ef99f90424536b2b9229d16bdc83b8aed8?width=74",
        },
        {
          title: "Content Strategy and Copywriting",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/a82bbe49ffda2c4f3d386589f2eeb1f388be1af1?width=74",
        },
      ],
    },
    {
      id: "devops",
      badge: "OUR EXPERTISE",
      title: "DEVOPS SERVICES",
      description:
        "We streamline development and operations with automated CI/CD pipelines, cloud deployments, and container orchestration. Our DevOps solutions ensure faster releases, reliable infrastructure, and optimal performance across AWS and Azure.",
      image: "devops",
      services: [
        {
          title: "AWS and Azure Deployment",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/eddb940b0a40df2782c341305e29e5bcb37a551a?width=74",
        },
        {
          title: "Docker and Kubernetes Setup",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/62f17e3f7ad6b4970829a11fb62fa8d1cdb6a85d?width=74",
        },
        {
          title: "CI/CD Pipeline Automation",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/b30875265a259e359ec4a8f77f28ece82ca0b5c1?width=74",
        },
        {
          title: "Cloud Infrastructure Management",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/5a95de41b3b24416376c1d47d4c9df0180ab3f99?width=74",
        },
        {
          title: "Monitoring and Performance Optimization",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/de57b16b1ace7ce98e44abfabb827a6c3bae4eee?width=74",
        },
      ],
    },
  ];

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();

    // Globe spinning animation
    gsap.to(globeRef1.current, {
      rotation: 360,
      duration: 110,
      repeat: -1,
      ease: "linear",
      transformOrigin: "center center",
    });

    // Navbar animation
    gsap.from("nav", {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Hero text animation
    tl.from(".hero-line", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.3,
    });

    tl.from(
      ".hero-button",
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5",
    );

    // Expertise Section Animations (fluid22.com inspired)  (UPDATED)
    const isSmallScreen = window.innerWidth < 640;
    const hasExpertiseContent = document.querySelector(".expertise-content");
    const hasExpertiseVisual = document.querySelector(".expertise-visual");

    if (hasExpertiseContent) {
      const expertiseTimeline = gsap.timeline(
        isSmallScreen
          ? {}
          : {
              scrollTrigger: {
                trigger: ".expertise-content",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            },
      );

      expertiseTimeline.from(".expertise-badge", {
        scale: 0,
        rotation: -180,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      });
      expertiseTimeline.from(
        ".expertise-title",
        {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4",
      );
      expertiseTimeline.from(
        ".expertise-description",
        {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6",
      );
      expertiseTimeline.from(
        ".expertise-button",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4",
      );
    }

    if (hasExpertiseVisual) {
      const visualTimeline = gsap.timeline(
        isSmallScreen
          ? {}
          : {
              scrollTrigger: {
                trigger: ".expertise-visual",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            },
      );

      visualTimeline.from(".expertise-circle", {
        scale: 0,
        rotation: 360,
        duration: 1.2,
        ease: "power3.out",
      });
      visualTimeline.from(
        ".expertise-device",
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8",
      );
    }

    // Services grid animations (SMOOTHED)
    if (isSmallScreen) {
      gsap.set(".service-item", { opacity: 1, y: 0, clearProps: "transform" });
    } else {
      ScrollTrigger.batch(".service-item", {
        start: "top 85%",
        once: true, // prevent reverse flicker / glitch
        onEnter: (els) => {
          gsap.fromTo(
            els,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power2.out",
              stagger: { each: 0.08 },
              onComplete: () => gsap.set(els, { clearProps: "transform" }),
            },
          );
        },
      });
    }

    // Service icons hover animation enhancement
    document.querySelectorAll(".service-icon").forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          scale: 1.2,
          rotation: 10,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Carousel navigation arrows hover effects
    document
      .querySelectorAll(".absolute.left-0, .absolute.right-0")
      .forEach((arrow) => {
        arrow.addEventListener("mouseenter", () => {
          gsap.to(arrow, {
            scale: 1.1,
            duration: 0.2,
            ease: "power2.out",
          });
        });

        arrow.addEventListener("mouseleave", () => {
          gsap.to(arrow, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          });
        });
      });

    // Globe animations removed - keeping them static as per Figma design

    // AI Expertise Sticky Scroll Animation (controlled step-by-step with snap behavior)
    const aiSection = document.querySelector(".ai-expertise-section");
    const aiStickyContent = document.querySelector(".ai-sticky-content");
    const aiServiceItems = document.querySelectorAll(".ai-service-item");

    if (aiSection && aiStickyContent && aiServiceItems.length > 0) {
      // Set initial state
      gsap.set(aiServiceItems, {
        opacity: 1,
        y: 0,
        scale: 1,
      });

      // Create sticky pin for left content (desktop only)
      const stickyTrigger = ScrollTrigger.create({
        trigger: aiSection,
        start: "top top",
        end: "bottom bottom",
        pin: window.innerWidth >= 1024 ? aiStickyContent : false,
        pinSpacing: false,
        invalidateOnRefresh: true,
        refreshPriority: -1,
      });

      // Create controlled scroll with consolidated ScrollTrigger instances
      const aiScrollTriggers = [];

      aiServiceItems.forEach((item, index) => {
        const itemTrigger = ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          end: "bottom 40%",
          invalidateOnRefresh: true,
          onEnter: () => {
            // Kill any existing animations for this item
            gsap.killTweensOf(item);

            // Smooth entrance when section enters viewport
            gsap.fromTo(
              item,
              {
                opacity: 0.7,
                y: 30,
                scale: 0.95,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1.02,
                duration: 0.8,
                ease: "power3.out",
              },
            );
          },
          onLeave: () => {
            // Kill any existing animations for this item
            gsap.killTweensOf(item);

            // Gentle exit when leaving viewport
            gsap.to(item, {
              opacity: 0.8,
              scale: 0.98,
              duration: 0.5,
              ease: "power2.out",
            });
          },
          onEnterBack: () => {
            // Kill any existing animations for this item
            gsap.killTweensOf(item);

            // Re-entering from below
            gsap.to(item, {
              opacity: 1,
              y: 0,
              scale: 1.02,
              duration: 0.6,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            // Kill any existing animations for this item
            gsap.killTweensOf(item);

            // Leaving back to top
            gsap.to(item, {
              opacity: 0.7,
              y: 30,
              scale: 0.95,
              duration: 0.5,
              ease: "power2.out",
            });
          },
        });

        aiScrollTriggers.push(itemTrigger);
      });

      // Mobile responsiveness adjustments
      const refreshHandler = () => {
        if (window.innerWidth < 1024) {
          stickyTrigger.disable();
        } else {
          stickyTrigger.enable();
        }
      };

      ScrollTrigger.addEventListener("refreshInit", refreshHandler);

      // Store triggers for cleanup
      aiScrollTriggers.push(stickyTrigger);
    }

    // Top Case Studies Section Animations (Logo hide + Zoom out effect)
    const caseStudiesSection = document.querySelector(
      ".home-case-studies-section",
    ); // Change selector
    const caseStudiesTitle = document.querySelector(".home-case-studies-title"); // Change selector
    const caseStudyCards = document.querySelectorAll(".home-case-study-card"); // Change selector

    if (caseStudiesSection && caseStudiesTitle && caseStudyCards.length > 0) {
      // Set initial state for all elements
      gsap.set(caseStudiesTitle, {
        opacity: 0,
        y: 50,
      });

      gsap.set(caseStudyCards, {
        opacity: 0,
        y: 60,
        scale: 0.95,
      });

      // Create single ScrollTrigger timeline for case studies section
      const caseStudiesTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: caseStudiesSection,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          onRefresh: () => {
            // Ensure proper state on refresh
            if (!caseStudiesTimeline.isActive()) {
              gsap.set(caseStudiesTitle, { opacity: 0, y: 50 });
              gsap.set(caseStudyCards, { opacity: 0, y: 60, scale: 0.95 });
            }
          },
        },
      });

      // Title animation
      caseStudiesTimeline.to(caseStudiesTitle, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Staggered card entrance animations
      caseStudiesTimeline.to(
        caseStudyCards,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: {
            amount: 0.6,
            from: "start",
          },
        },
        "-=0.5",
      );

      // Enhanced hover animations with logo hide and zoom IN
      caseStudyCards.forEach((card, cardIndex) => {
        const image = card.querySelector("img");
        const logo = card.querySelector(
          ".absolute.bottom-6, .absolute.bottom-8",
        );
        const overlay = card.querySelector(
          ".absolute.inset-0.bg-gradient-to-t",
        );

        // Set initial states
        gsap.set(image, {
          scale: 1,
          transformOrigin: "center center",
        });
        gsap.set(logo, {
          opacity: 0.75,
          y: 0,
        });
        gsap.set(card, {
          y: 0,
          scale: 1,
        });

        // Store hover state to prevent conflicts
        let isHovered = false;

        const handleMouseEnter = () => {
          if (isHovered) return;
          isHovered = true;

          // Kill any existing hover animations
          gsap.killTweensOf([card, image, logo, overlay]);

          // Create hover timeline
          const hoverTl = gsap.timeline();

          hoverTl
            .to(card, {
              y: -10,
              scale: 1.02,
              duration: 0.6,
              ease: "power3.out",
            })
            .to(
              image,
              {
                scale: 1.1,
                duration: 0.8,
                ease: "power2.out",
              },
              0,
            )
            .to(
              logo,
              {
                opacity: 0,
                y: 10,
                duration: 0.5,
                ease: "power2.out",
              },
              0,
            )
            .to(
              overlay,
              {
                opacity: 0.8,
                duration: 0.4,
                ease: "power2.out",
              },
              0,
            );
        };

        const handleMouseLeave = () => {
          if (!isHovered) return;
          isHovered = false;

          // Kill any existing hover animations
          gsap.killTweensOf([card, image, logo, overlay]);

          // Create leave timeline
          const leaveTl = gsap.timeline();

          leaveTl
            .to(card, {
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "power3.out",
            })
            .to(
              image,
              {
                scale: 1,
                duration: 0.8,
                ease: "power2.out",
              },
              0,
            )
            .to(
              logo,
              {
                opacity: 0.75,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
              },
              0,
            )
            .to(
              overlay,
              {
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
              },
              0,
            );
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        // Subtle parallax scroll effect with individual ScrollTrigger
        gsap.to(card, {
          y: cardIndex % 2 === 0 ? -20 : 20,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            invalidateOnRefresh: true,
          },
        });
      });
    }

    // Customer Testimonials Section Animations (UPDATED)
    const testimonialsSection = document.querySelector(".testimonials-section");
    const testimonialsTitle = document.querySelector(".testimonials-title");
    const testimonialCards = document.querySelectorAll(".testimonial-card");

    if (
      testimonialsSection &&
      testimonialsTitle &&
      testimonialCards.length > 0
    ) {
      if (isSmallScreen) {
        // Mobile: show immediately, no ScrollTrigger so they appear after refresh
        gsap.set(testimonialsTitle, { opacity: 1, y: 0 });
        gsap.set(testimonialCards, { opacity: 1, y: 0, scale: 1 });
      } else {
        // Desktop / tablet (unchanged animation logic)
        gsap.set(testimonialsTitle, { opacity: 0, y: 50 });
        gsap.set(testimonialCards, { opacity: 0, y: 60, scale: 0.95 });
        gsap.to(testimonialsTitle, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialsSection,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
        ScrollTrigger.batch(testimonialCards, {
          onEnter: (elements) => {
            gsap.fromTo(
              elements,
              { opacity: 0, y: 60, scale: 0.95 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: { amount: 0.6, from: "start" },
              },
            );
          },
          start: "top 90%",
          end: "bottom 10%",
        });
      }

      // Hover effects keep working
      testimonialCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: "power2.out" });
        });
      });
    }

    // Expert Consultation Section Animations
    const expertSection = document.querySelector(
      ".expert-consultation-section",
    );
    const expertImage = document.querySelector(".expert-image");
    const expertImageContainer = document.querySelector(
      ".expert-image-container",
    );
    const expertTitle = document.querySelector(".expert-title");
    const expertDescription = document.querySelector(".expert-description");
    const expertButton = document.querySelector(".expert-button");

    if (
      expertSection &&
      expertImage &&
      expertTitle &&
      expertDescription &&
      expertButton
    ) {
      const isSmallScreenExpert = window.innerWidth < 768; // mobile / small tablet fallback

      if (isSmallScreenExpert) {
        // Mobile: show immediately (bypass ScrollTrigger to fix non-appearance)
        gsap.set(
          [expertImageContainer, expertTitle, expertDescription, expertButton],
          { opacity: 1, clearProps: "all" },
        );
        gsap.set(expertImage, { scale: 1, clearProps: "all" });
      } else {
        // Desktop / larger screens: animate with ScrollTrigger
        gsap.set(
          [expertImageContainer, expertTitle, expertDescription, expertButton],
          {
            opacity: 0,
          },
        );
        gsap.set(expertImage, { scale: 1.2 });
        gsap.set(expertTitle, { y: 50 });
        gsap.set(expertDescription, { y: 30 });
        gsap.set(expertButton, { y: 40 });

        const expertTl = gsap.timeline({
          scrollTrigger: {
            trigger: expertSection,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });

        expertTl
          .to(expertImageContainer, {
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          })
          .to(
            expertImage,
            {
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
            },
            "-=0.6",
          )
          .to(
            expertTitle,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.8",
          )
          .to(
            expertDescription,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.4",
          )
          .to(
            expertButton,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.2",
          );

        // Image hover animation (desktop only)
        if (expertImageContainer) {
          expertImageContainer.addEventListener("mouseenter", () => {
            gsap.to(expertImage, {
              scale: 1.05,
              duration: 0.6,
              ease: "power2.out",
            });
          });
          expertImageContainer.addEventListener("mouseleave", () => {
            gsap.to(expertImage, {
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
            });
          });
        }
      }
    }

    const footerSection = document.querySelector(".footer-section");
    const footerCompany = document.querySelector(".footer-company");
    const footerLogo = document.querySelector(".footer-logo");
    const footerLocation = document.querySelector(".footer-location");
    const footerSocial = document.querySelector(".footer-social");
    const footerColumns = document.querySelectorAll(".footer-column");
    const footerHeadings = document.querySelectorAll(".footer-heading");
    const footerLinks = document.querySelectorAll(".footer-link");

    if (footerSection && footerCompany && footerColumns.length > 0) {
      // Set initial states
      gsap.set([footerLogo, footerLocation, footerSocial], {
        opacity: 0,
        y: 30,
      });

      gsap.set(footerHeadings, {
        opacity: 0,
        y: 20,
      });

      gsap.set(footerLinks, {
        opacity: 0,
        y: 15,
      });

      // Create timeline for footer section
      const footerTl = gsap.timeline({
        scrollTrigger: {
          trigger: footerSection,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      footerTl
        .to(footerLogo, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        })
        .to(
          footerLocation,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .to(
          footerSocial,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .to(
          footerHeadings,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: {
              amount: 0.3,
              from: "start",
            },
          },
          "-=0.4",
        )
        .to(
          footerLinks,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power3.out",
            stagger: {
              amount: 0.8,
              from: "start",
            },
          },
          "-=0.2",
        );
    }

    // Cleanup
    return () => {
      // Kill all GSAP animations and ScrollTrigger instances
      gsap.killTweensOf("*");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.refresh();
    };
  }, []);

  // Responsive testimonials per-view handling (NEW)
  useEffect(() => {
    const computePerView = () => {
      const w = window.innerWidth;
      return w < 640 ? 1 : w < 1024 ? 2 : 3;
    };
    const apply = () => {
      const perView = computePerView();
      setTestimonialsPerView((prev) => {
        if (prev !== perView) {
          setCurrentTestimonialSlide((cur) =>
            Math.min(cur, Math.max(0, testimonialsData.length - perView)),
          );
        }
        return perView;
      });
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, [testimonialsData.length]);

  // Video autoplay control effect
  useEffect(() => {
    if (!videoRef.current) return;

    const vid = videoRef.current;

    // IntersectionObserver to auto play/pause
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(vid);

    // Pause when tab not visible
    const handleVisibility = () => {
      if (document.hidden) vid.pause();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const handleAiButtonHover = () => {
    if (aiOverlayRef.current) {
      gsap.to(aiOverlayRef.current, {
        width: "100%",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleAiButtonLeave = () => {
    if (aiOverlayRef.current) {
      const isSmallScreen = window.innerWidth < 640;
      const initialWidth = isSmallScreen
        ? "55px"
        : window.innerWidth < 1024
          ? "60px"
          : "65px";
      gsap.to(aiOverlayRef.current, {
        width: initialWidth,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const nextTestimonialSlide = () => {
    setCurrentTestimonialSlide((cur) =>
      cur < testimonialsData.length - testimonialsPerView ? cur + 1 : cur,
    );
  };
  const prevTestimonialSlide = () => {
    setCurrentTestimonialSlide((cur) => (cur > 0 ? cur - 1 : 0));
  };
  const goToTestimonialSlide = (index: number) => {
    setCurrentTestimonialSlide(
      Math.min(
        Math.max(0, index),
        Math.max(0, testimonialsData.length - testimonialsPerView),
      ),
    );
  };

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % carouselData.length;
    animateSlideChange(newSlide);
  };

  const prevSlide = () => {
    const newSlide =
      currentSlide === 0 ? carouselData.length - 1 : currentSlide - 1;
    animateSlideChange(newSlide);
  };

  // Ensure new slide's service items are hidden & pre-positioned BEFORE first paint to avoid flicker
  useLayoutEffect(() => {
    if (isSlideChanging.current) {
      const newItems = gsap.utils.toArray<HTMLElement>(
        ".carousel-services .service-item",
      );
      gsap.set(newItems, {
        y: 26,
        opacity: 0,
        scale: 0.985,
        willChange: "transform,opacity",
        force3D: true,
      });
    }
  }, [currentSlide]);

  // Prevent initial flicker: pre-hide services grid items before first paint (desktop only)
  useLayoutEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 640) {
      gsap.set(".services-grid .service-item", {
        opacity: 0,
        y: 30,
      });
    }
  }, []);

  const animateSlideChange = (newSlide: number) => {
    if (newSlide === currentSlide || isSlideChanging.current) return;
    isSlideChanging.current = true;

    const oldServiceItems = gsap.utils.toArray<HTMLElement>(
      ".carousel-services .service-item",
    );

    const exitTl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        // Switch slide; useLayoutEffect will instantly hide new items pre-paint
        setCurrentSlide(newSlide);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const newServiceItems = gsap.utils.toArray<HTMLElement>(
              ".carousel-services .service-item",
            );

            const enterTl = gsap.timeline({
              defaults: { force3D: true },
              onComplete: () => {
                gsap.set(newServiceItems, {
                  clearProps: "transform,opacity,scale,willChange",
                });
                isSlideChanging.current = false;
              },
            });

            enterTl
              .fromTo(
                ".carousel-content",
                { x: 35, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.55, ease: "power2.out" },
              )
              .fromTo(
                ".carousel-visual",
                { scale: 0.95 },
                {
                  scale: 1,
                  duration: 0.65,
                  ease: "expo.out",
                  clearProps: "transform",
                },
                "-=0.35",
              )
              // Animate in (initial state already set by useLayoutEffect => no flicker)
              .to(
                newServiceItems,
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 0.65,
                  ease: "power3.out",
                  stagger: { each: 0.09 },
                },
                "-=0.30",
              );
          });
        });
      },
    });

    exitTl
      .addLabel("start")
      .to(
        ".carousel-content",
        { x: -35, opacity: 0, duration: 0.4, ease: "power2.inOut" },
        "start",
      )
      .to(
        ".carousel-visual",
        { scale: 0.95, duration: 0.4, ease: "power2.out" },
        "start",
      )
      .to(
        oldServiceItems,
        {
          y: 18,
          opacity: 0,
          duration: 0.32,
          stagger: { each: 0.05 },
          ease: "power1.inOut",
        },
        "start",
      );
  };

  return (
    <div
      className="bg-[#040404] h-auto text-white relative overflow-hidden font-montserrat p-0 m-0"
      style={{ marginTop: 0 }}
    >
      {/* Background Globes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          ref={globeRef1}
          src="/WP/globe.png"
          alt=""
          className="absolute w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[900px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] opacity-30 sm:opacity-40 lg:opacity-50 -left-32 sm:-left-48 lg:-left-64 xl:-left-80 2xl:-left-96  transform -rotate-[9deg]"
        />
      </div>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative  sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-16 xl:px-20"
      >
        <div className="max-w-7xl 2xl:max-w-none h-[calc(100vh-80px)] flex flex-col justify-center">
          {/* Red line accent */}
          <div className="hero-line w-[70px] sm:w-[85px] bg-[#AB322C] lg:w-[100px] max-[1020px]:w-[90px] h-[4px] sm:h-[5px] lg:h-[6px] mx-auto lg:mx-0"></div>

          {/* Main heading */}
          <div className="lg:pt-8 lg:pb-16 min-[1430px]:py-12">
            <h1
              className="
            font-bold
            text-[32px] leading-[42px]
            sm:text-[38px] sm:leading-[50px]
            md:text-[44px] md:leading-[58px]
            lg:text-[40px] lg:leading-[52px]
            xl:text-[46px] xl:leading-[62px]
            2xl:text-[50px] 2xl:leading-[80px]
          "
            >
              <span className="hero-line block mb-1 sm:mb-2">
                WE HELP BUSINESSES TRANSFORM IDEAS
              </span>
              <span className="hero-line block mb-1 sm:mb-2">
                INTO POWERFUL IT SOLUTIONS USING AI,
              </span>
              <span className="hero-line block mb-1 sm:mb-2">
                AGILE PRACTICES, AND THE LATEST
              </span>
              <span className="hero-line block"> TECHNOLOGIES.</span>
            </h1>
          </div>

          {/* CTA Button (replaced with AnimatedBlobButton) */}
          <div className="hero-button w-[280px] sm:w-[320px] lg:w-[320px] xl:w-[350px] 2xl:w-[420px]">
            <Link to={"/contact-us"} >
              <AnimatedBlobButton
                blobColor="#AB322C"
                textColor="white"
                className="w-[280px] sm:w-[320px] lg:w-[320px] xl:w-[350px] 2xl:w-[420px] h-[42px] sm:h-[46px] lg:h-[46px] xl:h-[48px] 2xl:h-[54px]"
              >
                SPEAK WITH EXPERTS
              </AnimatedBlobButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Clients Marquee Section */}
      <FriendsMarquee
        title="EXPERTS IN TECHNOLOGY"
        subtitle="Our team of experts uses cutting-edge technologies and applications to bring your vision to life."
      />

      {/* Expertise Carousel Section */}
      <div className="expertise-section relative z-10 py-16 sm:py-20 lg:py-28 bg-[#040404] px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="max-w-7xl 2xl:max-w-none 2xl:mx-auto mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">
            {/* Left Content */}
            <div className="expertise-content lg:w-[40%]">
              <div className="carousel-content">
                {/* Badge */}
                <div className="expertise-badge inline-flex items-center px-6 py-1 bg-[#AB322C] rounded-full mb-8 lg:mb-10">
                  <span className="text-white font-inter text-xs font-bold uppercase tracking-wider">
                    {carouselData[currentSlide].badge}
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="expertise-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight mb-8 lg:mb-10">
                  {carouselData[currentSlide].title}
                </h2>

                {/* Description */}
                <p className="expertise-description text-base sm:text-lg lg:text-xl text-white leading-relaxed mb-8 lg:mb-12 max-w-lg">
                  {carouselData[currentSlide].description}
                </p>

                {/* CTA Button */}
                <div className="expertise-button">
                  <Link to={"/contact-us"}>
                    <AnimatedBlobButton
                      blobColor="#AB322C"
                      textColor="white"
                      className="w-[280px] sm:w-[320px] lg:w-[350px] h-[46px] sm:h-[50px]"
                    >
                      {" "}
                      SPEAK WITH EXPERTS
                    </AnimatedBlobButton>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Carousel Visual */}
            <div
              className="expertise-visual lg:w-[60%] flex justify-center lg:justify-center relative"
              ref={carouselRef}
            >
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#AB322C] rounded-full flex items-center justify-center hover:bg-[#9A2B26] transition-colors duration-300 shadow-lg"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#AB322C] rounded-full flex items-center justify-center hover:bg-[#9A2B26] transition-colors duration-300 shadow-lg"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="carousel-visual relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                {/* Background Circle */}
                <div className="expertise-circle absolute inset-0 w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] mx-auto">
                  <div className="w-full h-full rounded-full bg-[#D9D9D9] opacity-80"></div>
                  <div className="absolute inset-[67px] rounded-full bg-gradient-to-b from-[#2E2E2E] to-[#2E2E2E] opacity-80"></div>
                </div>

                {/* Dynamic Content Based on Slide */}
                <div className="expertise-device relative z-10 flex items-center justify-center h-[350px] sm:h-[400px] lg:h-[450px] xl:h-[500px]">
                  {carouselData[currentSlide].id === "fullstack" ? (
                    <div className=" relative overflow-hidden">
                      {/* Full Stack Image */}
                      <img
                        src="/WP/img9.png"
                        alt="Full Stack Development"
                        className="object-contain rounded-2xl border border-white/20"
                      />
                    </div>
                  ) : carouselData[currentSlide].id === "ai" ? (
                    <div className=" relative overflow-hidden">
                      {/* AI Figma Image */}
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/a99091308f6901e77d294a6709e7fb8389f81215?width=1548"
                        alt="AI Solutions"
                        className="w-full h-full object-cover rounded-2xl border border-white/20"
                      />
                    </div>
                  ) : carouselData[currentSlide].id === "product" ? (
                    <div className=" relative overflow-hidden">
                      {/* Product Management Workspace Image */}
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2Fd97e508588be4bd3aa8e253089ddaba6%2F241e92a64c7a44f78385b64aecb3acd9?format=webp&width=800"
                        alt="Product Management"
                        className="w-full h-full object-cover rounded-2xl border border-white/20"
                      />
                    </div>
                  ) : carouselData[currentSlide].id === "ecommerce" ? (
                    <div className="relative overflow-hidden">
                      {/* Ecommerce Solutions Image */}
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2Fd97e508588be4bd3aa8e253089ddaba6%2F08a421932b614ecb9460d80f59692b6e?format=webp&width=800"
                        alt="Ecommerce Solutions"
                        className="w-full h-full object-cover rounded-2xl border border-white/20"
                      />
                    </div>
                  ) : carouselData[currentSlide].id === "marketing" ? (
                    <div className=" relative overflow-hidden">
                      {/* Marketing Services Image */}
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2Fd97e508588be4bd3aa8e253089ddaba6%2Ff812fc898a794d35966a88ef642bb674?format=webp&width=800"
                        alt="Marketing Services"
                        className="w-full h-full object-cover rounded-2xl border border-white/20"
                      />
                    </div>
                  ) : (
                    <div className="relative overflow-hidden">
                      {/* DevOps Services Image */}
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2Fd97e508588be4bd3aa8e253089ddaba6%2F8d0daf8adceb40d4bb027304a72d9c55?format=webp&width=800"
                        alt="DevOps Services"
                        className="w-full h-full object-cover rounded-2xl border border-white/20"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Services Grid */}
          <div className="carousel-services services-grid mt-16 lg:mt-20 xl:mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 mb-8 lg:mb-12">
              {carouselData[currentSlide].services
                .slice(0, 3)
                .map((service, index) => (
                  <div
                    key={`${carouselData[currentSlide].id}-${index}`}
                    className="service-item will-change-transform will-change-opacity flex flex-col items-center text-center group"
                  >
                    <div className="service-icon w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-9 h-9"
                      />
                    </div>
                    <h3 className="service-title text-white font-montserrat text-lg lg:text-xl font-medium text-center">
                      {service.title}
                    </h3>
                  </div>
                ))}
            </div>

            {/* Second Row */}
            {carouselData[currentSlide].services.length > 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 max-w-2xl mx-auto">
                {carouselData[currentSlide].services
                  .slice(3, 5)
                  .map((service, index) => (
                    <div
                      key={`${carouselData[currentSlide].id}-${index + 3}`}
                      className="service-item will-change-transform will-change-opacity flex flex-col items-center text-center group"
                    >
                      <div className="service-icon w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="w-9 h-9"
                        />
                      </div>
                      <h3 className="service-title text-white font-montserrat text-lg lg:text-xl font-medium text-center">
                        {service.title}
                      </h3>
                    </div>
                  ))}
              </div>
            )}

            {/* Slide Indicators */}
            <div className="flex justify-center mt-12 gap-3">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => animateSlideChange(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-[#AB322C] scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <LanguageServicesSection
        sectionTitle={{
          mainText: "Our AI Expertise",
          highlightedWords: [{ text: "Expertise", position: "after" }],
        }}
        serviceItems={services}
        sectionDescription="At the heart of innovation, our AI capabilities are designed to streamline operations, enhance customer experiences, and drive growth. Here’s how we bring AI to life in your business:"
        backgroundColor="#040404"
        showButton={true}
        buttonText="book a free consultation now"
        buttonColor="#AB322C"
        accentColor="#AB322C"
        mainTextColor="white"
      />

      <CaseStudiesSection />

      {/* Customer Testimonials Carousel Section */}
      {/* <div className="testimonials-section bg-[#040404] relative py-16 sm:py-20 lg:py-28">
        <div className="w-full">
          <div className="testimonials-title mb-10 lg:mb-16">
            <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl xl:text-[40px] font-bold text-white uppercase px-4 lg:px-[70px]">
              HEAR FROM OUR CUSTOMERS - VOICE OF TRUST
            </h2>
          </div>

          <div className="relative px-4" ref={testimonialsRef}>
            <div className="overflow-hidden mb-20">
              <div
                className="flex transition-transform duration-500 ease-in-out py-3 gap-6 lg:gap-8 xl:gap-10"
                style={{
                  transform: `translateX(-${
                    currentTestimonialSlide * (100 / testimonialsPerView + 6)
                  }%)`,
                }}
              >
                {testimonialsData.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="testimonial-card bg-white/5 rounded-2xl p-6 lg:p-8 backdrop-blur-sm border  border-white/10 flex-shrink-0"
                    style={{ flex: `0 0 ${100 / testimonialsPerView}%` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.56 12.7769C22.56 11.9969 22.49 11.2469 22.36 10.5269H12V14.7869H17.92C17.66 16.1569 16.88 17.3169 15.71 18.0969V20.8669H19.28C21.36 18.9469 22.56 16.1269 22.56 12.7769Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12.0001 23.527C14.9701 23.527 17.4601 22.547 19.2801 20.867L15.7101 18.097C14.7301 18.757 13.4801 19.157 12.0001 19.157C9.14005 19.157 6.71005 17.227 5.84005 14.627H2.18005V17.467C3.99005 21.057 7.70005 23.527 12.0001 23.527Z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.6167C5.62 13.9567 5.49 13.2567 5.49 12.5267C5.49 11.7967 5.62 11.0967 5.84 10.4367V7.59668H2.18C1.43 9.07668 1 10.7467 1 12.5267C1 14.3067 1.43 15.9767 2.18 17.4567L5.03 15.2367L5.84 14.6167Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12.0001 5.90686C9.88756 5.90686 7.53755 6.74586 5.84005 8.43686L9.15631 10.8081L10.0532 1.08936C10.2189 0.745605 10.5689 0.526855 10.9532 0.526855C11.3376 0.526855 11.6876 0.745605 11.8563 1.08936L13.8532 5.22373L18.3407 5.88623C18.7157 5.94248 19.0282 6.20498 19.1438 6.56436C19.2594 6.92373 19.1657 7.32061 18.896 7.58623L15.6394 10.8081L16.4082 15.3612C16.4707 15.7362 16.3144 16.1175 16.0051 16.3394C15.6957 16.5612 15.2863 16.5894 14.9488 16.4112L10.9532 14.2706L5.84005 16.4112C5.50255 16.5894 5.09318 16.5644 4.78382 16.3394C4.47447 16.1144 4.31818 15.7362 4.38068 15.3612L5.16255 10.8081L1.90631 7.58623C1.62755 7.32061 1.53068 6.92373 1.64947 6.56436C1.76826 6.20498 2.07763 5.94248 2.45263 5.88623L7.10943 5.22373L10.0532 1.08936Z"
                            fill="#EA4335"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-inter text-sm">
                          5.0
                        </span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, starIndex) => (
                            <svg
                              key={starIndex}
                              width="16"
                              height="16"
                              viewBox="0 0 19 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.0532 1.08936C9.88756 0.745605 9.53755 0.526855 9.15318 0.526855C8.76881 0.526855 8.42193 0.745605 8.25318 1.08936L6.2438 5.22373L1.7563 5.88623C1.3813 5.94248 1.0688 6.20498 0.95318 6.56436C0.837555 6.92373 0.931305 7.32061 1.20005 7.58623L4.45631 10.8081L3.68755 15.3612C3.62505 15.7362 3.7813 16.1175 4.09068 16.3394C4.40005 16.5612 4.80943 16.5894 5.14693 16.4112L9.15631 14.2706L13.1657 16.4112C13.5032 16.5894 13.9126 16.5644 14.2219 16.3394C14.5313 16.1144 14.6876 15.7362 14.6251 15.3612L13.8532 10.8081L17.1094 7.58623C17.3782 7.32061 17.4751 6.92373 17.3563 6.56436C17.2376 6.20498 16.9282 5.94248 16.5532 5.88623L12.0626 5.22373L10.0532 1.08936Z"
                                fill="#EAB308"
                              />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mb-6">
                      <p className="text-white font-inter text-sm sm:text-base lg:text-lg leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white/60 font-inter text-sm">
                        — {testimonial.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mb-8">
              <button
                onClick={prevTestimonialSlide}
                disabled={currentTestimonialSlide === 0}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm border border-white/20 ${
                  currentTestimonialSlide === 0
                    ? "bg-white/5 text-white/30 cursor-not-allowed"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonialSlide}
                disabled={
                  currentTestimonialSlide >=
                  testimonialsData.length - testimonialsPerView
                }
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm border border-white/20 ${
                  currentTestimonialSlide >=
                  testimonialsData.length - testimonialsPerView
                    ? "bg-white/5 text-white/30 cursor-not-allowed"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex justify-center gap-2">
              {Array.from(
                {
                  length: Math.max(
                    1,
                    testimonialsData.length - testimonialsPerView + 1,
                  ),
                },
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonialSlide(index)}
                    className={`w-12 h-1 rounded-full transition-all duration-300 ${
                      currentTestimonialSlide === index
                        ? "bg-white"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div> */}

      {/* Expert Consultation Section */}
      <div className="expert-consultation-section bg-[#040404] relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative">
                {/* Main Image */}
                <video
                  ref={videoRef}
                  src="/video/VYALUX MARKETING VIDEO.mp4"
                  muted
                  controls
                  className="rounded-2xl"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col  gap-8 lg:gap-10 text-center lg:text-left">
              {/* Title */}
              <div className="w-full">
                <h2 className="expert-title font-montserrat text-3xl sm:text-4xl lg:text-5xl xl:text-[50px] font-bold uppercase leading-tight">
                  <span className="text-white">LET OUR </span>
                  <span className="text-[#AB322C]">EXPERTS</span>
                  <span className="text-white"> BUILD </span>
                  <span className="text-[#AB322C]">YOUR</span>
                  <span className="text-white"> DIGITAL </span>
                  <span className="text-[#AB322C]">EMPIRE</span>
                </h2>
              </div>

              {/* Description */}
              <div className="w-full max-w-[576px]">
                <p className="expert-description text-white text-lg sm:text-xl font-montserrat leading-relaxed">
                  Partner with a skilled team that offers a variety of technical
                  support from UI design to QA services and more.
                </p>
              </div>

              {/* CTA Animated Blob Button (integrated with GSAP .expert-button selector) */}
              <Link to={"/contact-us"}>
                <AnimatedBlobButton
                  className="expert-button w-[300px] sm:w-[340px] lg:w-[480px] h-[54px]"
                  blobColor="#AB322C"
                  textColor="white"
                >
                  BOOK A FREE CONSULTATION NOW
                </AnimatedBlobButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ faqData={faqData} />

      {/* Start a Conversation Section */}
      <ConversationSection
        index={true}
        title="START A CONVERSATION"
        highlightedWords={[{ text: "CONVERSATION", position: "after" }]}
        description="We love to help brands succeed.<br />Let's <span class='text-[#AB322C] font-semibold'>Start</span> a Winning Project Together."
        buttonText="BOOK A FREE CONSULTATION NOW"
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
