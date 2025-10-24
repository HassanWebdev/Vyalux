import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define types for the component props
interface HighlightedWord {
  text: string;
  position: "before" | "after" | "whole";
}

interface SectionContent {
  text: string;
  height?: string; // Now optional and not used for vertical bars
}

interface ServicesSectionProps {
  title: string;
  highlightedWords: HighlightedWord[];
  firstColumnContent: SectionContent;
  secondColumnContent: SectionContent;
  backgroundColor?: string;
  accentColor?: string;
}

export default function ServicesSection({
  title = "What Makes Our Laravel Web Development Services Stand Out?",
  highlightedWords = [],
  firstColumnContent = {
    text: "As a web development services company, we specialize in robust and scalable Laravel development, producing blazing-fast performance, optimized UX, and enterprise-grade security. Utilizing the latest Laravel features, our developers tailor modular and API-driven structures designed for scalability and flexibility.",
  },
  secondColumnContent = {
    text: "Whether you are developing a startup or upgrading legacy systems, our Laravel solutions enhance business growth and streamline your digital platforms.",
  },
  backgroundColor = "#040404",
  accentColor = "#AB322C",
}: ServicesSectionProps) {
  // Create refs for content elements
  const firstContentRef = useRef<HTMLDivElement>(null);
  const secondContentRef = useRef<HTMLDivElement>(null);
  const firstBarRef = useRef<HTMLDivElement>(null);
  const secondBarRef = useRef<HTMLDivElement>(null);

  // Animation refs
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const firstBlockRef = useRef<HTMLDivElement>(null);
  const secondBlockRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Process the title with highlighted words
  const processedTitle = () => {
    const words = title.split(" ");
    return words.map((word, index) => {
      // Check if this word should be highlighted
      const highlightInfo = highlightedWords.find((hw) => {
        if (hw.position === "whole") return word === hw.text;
        if (hw.position === "after") return word.endsWith(hw.text);
        if (hw.position === "before") return word.startsWith(hw.text);
        return false;
      });

      // Return the word with appropriate styling
      return (
        <span
          key={index}
          style={highlightInfo ? { color: accentColor } : { color: "#FFFFFF" }}
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      );
    });
  };

  useEffect(() => {
    // Update the vertical bars height to match their content
    const updateBarHeights = () => {
      if (firstContentRef.current && firstBarRef.current) {
        firstBarRef.current.style.height = `${firstContentRef.current.offsetHeight}px`;
      }
      if (secondContentRef.current && secondBarRef.current) {
        secondBarRef.current.style.height = `${secondContentRef.current.offsetHeight}px`;
      }
    };

    // Initial update
    updateBarHeights();

    // Update on window resize
    window.addEventListener("resize", updateBarHeights);

    const isMobile = window.matchMedia("(max-width: 639px)").matches;

    // If mobile: skip GSAP animations and ensure elements are visible
    if (isMobile) {
      [leftColumnRef, firstBlockRef, secondBlockRef].forEach((r) => {
        if (r.current) {
          r.current.style.opacity = "1";
          r.current.style.transform = "translateX(0px)";
        }
      });
      // Also ensure bars sized
      updateBarHeights();
      return () => {
        window.removeEventListener("resize", updateBarHeights);
      };
    }

    // Desktop / tablet animations
    const ctx = gsap.context(() => {
      const commonTrigger = sectionRef.current;

      // Use matchMedia to only run on min-width 640px
      ScrollTrigger.matchMedia({
        "(min-width: 640px)": () => {
          if (leftColumnRef.current) {
            gsap.fromTo(
              leftColumnRef.current,
              { x: -100, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: commonTrigger,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              },
            );
          }
          if (firstBlockRef.current) {
            gsap.fromTo(
              firstBlockRef.current,
              { x: 100, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: commonTrigger,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              },
            );
          }
          if (secondBlockRef.current) {
            gsap.fromTo(
              secondBlockRef.current,
              { x: 100, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.25,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: commonTrigger,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              },
            );
          }
        },
      });
    }, sectionRef);

    const refreshScrollTrigger = () => {
      updateBarHeights();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", refreshScrollTrigger);

    // Fallback: force visible after 2s in case ScrollTrigger fails
    const fallback = setTimeout(() => {
      [leftColumnRef, firstBlockRef, secondBlockRef].forEach((r) => {
        if (r.current && Number(getComputedStyle(r.current).opacity) === 0) {
          r.current.style.opacity = "1";
          r.current.style.transform = "translateX(0px)";
        }
      });
    }, 2000);

    return () => {
      clearTimeout(fallback);
      window.removeEventListener("resize", updateBarHeights);
      window.removeEventListener("resize", refreshScrollTrigger);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ctx.revert();
    };
  }, [
    firstColumnContent.text,
    secondColumnContent.text,
    accentColor,
    backgroundColor,
  ]);

  return (
    <div
      ref={sectionRef}
      style={{ backgroundColor }}
      className={`relative z-10 px-4 sm:px-6 lg:px-16 xl:px-[75px] py-16 sm:py-20 lg:py-28 xl:py-[110px]`}
    >
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-8 sm:gap-12 lg:gap-16 xl:gap-[130px]">
          {/* Left Column - Heading */}
          <div
            ref={leftColumnRef}
            className="flex flex-col lg:w-[600px] xl:flex-1  gap-6 lg:gap-[40px]"
          >
            <div className="flex flex-col justify-center items-start lg:items-center">
              <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[43px] 2xl:text-[50px] font-semibold leading-tight lg:leading-normal uppercase text-white">
                {processedTitle()}
              </h2>
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            ref={rightColumnRef}
            className="flex flex-col w-full lg:w-auto flex-1 min-w-0 gap-6 lg:gap-[28px]"
          >
            {/* First Text Block */}
            <div
              ref={firstBlockRef}
              className="flex items-start gap-4 lg:gap-[16px]"
            >
              <div
                ref={firstBarRef}
                className="flex-shrink-0 w-1 bg-[#929497]"
              ></div>
              <div
                ref={firstContentRef}
                className="flex flex-col justify-center flex-1"
              >
                <p className="text-white font-montserrat text-base sm:text-lg lg:text-xl xl:text-[20px] font-normal leading-relaxed lg:leading-[28px]">
                  {firstColumnContent.text}
                </p>
              </div>
            </div>

            {/* Second Text Block */}
            <div
              ref={secondBlockRef}
              className="flex items-start gap-4 lg:gap-[16px]"
            >
              <div
                ref={secondBarRef}
                className="flex-shrink-0 w-1 bg-[#929497]"
              ></div>
              <div
                ref={secondContentRef}
                className="flex flex-col justify-center flex-1"
              >
                <p className="text-white font-montserrat text-base sm:text-lg lg:text-xl xl:text-[20px] font-normal leading-relaxed lg:leading-[28px]">
                  {secondColumnContent.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
