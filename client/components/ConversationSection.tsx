import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

// Define the types for the component props
interface ConversationSectionProps {
  title: string;
  highlightedWords: { text: string; position: "before" | "after" }[];
  description: string;
  buttonText: string;
  backgroundColor?: string;
  textColor?: string;
  highlightColor?: string;
  buttonBackgroundColor?: string;
  index?: boolean;
}

export default function ConversationSection({
  title,
  highlightedWords,
  description,
  buttonText,
  backgroundColor = "#040404",
  textColor = "white",
  highlightColor = "#AB322C",
  buttonBackgroundColor = "#AB322C",
  index = false,
}: ConversationSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const target = document.getElementById("contact-section");
    if (target) {
      const header = document.querySelector("header");
      const headerOffset = header
        ? (header as HTMLElement).getBoundingClientRect().height
        : 0;
      const y =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset -
        16;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Check if we're on mobile using window width
    const isMobile = window.innerWidth < 768;

    if (
      sectionRef.current &&
      titleRef.current &&
      descriptionRef.current &&
      buttonRef.current
    ) {
      if (isMobile) {
        // On mobile, make elements visible immediately without animation
        gsap.set(
          [titleRef.current, descriptionRef.current, buttonRef.current],
          {
            clearProps: "all",
            opacity: 1,
            y: 0,
          },
        );
      } else {
        // On desktop, apply animations
        // Set initial states
        gsap.set(
          [titleRef.current, descriptionRef.current, buttonRef.current],
          {
            opacity: 0,
            y: 50,
          },
        );

        // Create timeline for CTA section
        const ctaTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });

        ctaTl
          .to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          })
          .to(
            descriptionRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.4",
          )
          .to(
            buttonRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.2",
          );
      }
    }

    // Cleanup
    return () => {
      const triggers = ScrollTrigger.getAll().filter(
        (trigger) => trigger.vars.trigger === sectionRef.current,
      );
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  // Process title to highlight specific words
  const renderTitle = () => {
    // Create a copy of the title
    let titleParts = title.split(" ");

    // Process each highlighted word
    highlightedWords.forEach((highlight) => {
      const index = titleParts.findIndex(
        (word) => word.toLowerCase() === highlight.text.toLowerCase(),
      );

      if (index !== -1) {
        titleParts[index] =
          `<span class="text-[${highlightColor}]">${titleParts[index]}</span>`;
      }
    });

    return (
      <h2
        ref={titleRef}
        className="font-montserrat font-bold uppercase leading-tight"
        style={{
          fontSize: "clamp(1.75rem, 3vw, 3rem)",
          wordBreak: "break-word",
          lineHeight: 1.2,
          color: textColor,
        }}
        dangerouslySetInnerHTML={{ __html: titleParts.join(" ") }}
      />
    );
  };

  return (
    <div
      ref={sectionRef}
      className="conversation-section relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-16 xl:px-20"
      style={{ backgroundColor }}
    >
      <div className="w-full ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left w-full">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Title */}
              <div className="conversation-title max-w-4xl text-4xl lg:text-[50px] mx-auto lg:mx-0">
                {renderTitle()}
              </div>
            </div>
          </div>

          {/* Right Side - CTA Button */}
          <div
            ref={buttonRef}
            className="conversation-button mt-6 lg:mt-0 w-full sm:w-auto"
          >
            <Link to={"/contact-us"}>
              <button
                className="border rounded-lg px-5 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 font-montserrat text-sm sm:text-base lg:text-xl font-medium uppercase tracking-[1.5px] sm:tracking-[2px] lg:tracking-[3px] transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                style={{
                  backgroundColor: buttonBackgroundColor,
                  borderColor: buttonBackgroundColor,
                  color: textColor,
                }}
              >
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
        <div
          ref={descriptionRef}
          className="conversation-description pt-4 sm:pt-6 lg:pt-8 max-w-4xl"
        >
          <p
            className="text-base sm:text-lg lg:text-xl font-montserrat leading-relaxed"
            style={{ color: textColor }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
}
