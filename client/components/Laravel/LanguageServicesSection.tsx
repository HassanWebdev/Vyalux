import {
  useEffect,
  useRef,
  forwardRef,
  useState,
  useLayoutEffect,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedBlobButton } from "../ui/animated-blob-button";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";

// Define the service item type
export type ServiceItem = {
  title: string;
  description: string;
};

// Define props for the component to make it reusable
export interface LanguageServicesSectionProps {
  sectionTitle: {
    mainText: string;
    highlightedWords: { text: string; position: "before" | "after" }[];
  };
  sectionDescription?: string; // Prop for section description
  serviceItems: ServiceItem[];
  backgroundColor?: string;
  accentColor?: string;
  mainTextColor?: string;
  minSectionHeight?: string;
  sectionClassName?: string;
  isVideoEnable?: boolean;
  // Button props
  showButton?: boolean;
  buttonText?: string;
  buttonColor?: string;
  onButtonClick?: () => void;
  width?: string;
}

export default function LanguageServicesSection({
  sectionTitle,
  sectionDescription,
  serviceItems,
  isVideoEnable,
  backgroundColor = "#040404",
  accentColor = "#AB322C",
  mainTextColor = "white",
  minSectionHeight = "min-h-screen",
  sectionClassName = "",
  width = "xl:w-[623px] lg:w-[500px]",

  // Button props with defaults
  showButton = false,
  buttonText = "Learn More",
  buttonColor = "#AB322C",
  onButtonClick,
}: LanguageServicesSectionProps) {
  // Create refs for the elements
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyContentRef = useRef<HTMLDivElement>(null);
  const serviceItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightSideRef = useRef<HTMLDivElement>(null);
  const listWrapperRef = useRef<HTMLDivElement>(null); // NEW
  const videoRef = useRef<HTMLVideoElement | null>(null); // NEW: ref for autoplay control
  const [isMobile, setIsMobile] = useState(false);

  console.log("is video enabled", isVideoEnable);

  // Check if we're on a mobile device
  useLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const stickyContent = stickyContentRef.current;
    const rightSideEl = rightSideRef.current;
    const listWrapper = listWrapperRef.current;
    const serviceItemElements = serviceItemsRef.current.filter((el) => el);
    const createdTriggers: ScrollTrigger[] = [];

    if (section && stickyContent && serviceItemElements.length > 0) {
      if (isMobile) {
        // Mobile: show everything immediately
        if (rightSideEl) {
          rightSideEl.style.opacity = "1";
          rightSideEl.style.transform = "none";
        }
        if (listWrapper) listWrapper.style.paddingTop = "0px";
        serviceItemElements.forEach((item) => {
          if (item) {
            item.style.opacity = "1";
            item.style.transform = "none";
          }
        });
      } else {
        if (rightSideEl) gsap.set(rightSideEl, { opacity: 0, y: 40 });

        // Center first item using padding so it contributes to scrollable distance
        const applyInitialLayout = () => {
          if (listWrapper) {
            listWrapper.style.paddingTop = "0px";
            const first = serviceItemElements[0];
            if (first) {
              const fh = first.getBoundingClientRect().height;
              const pad = Math.max(window.innerHeight / 2 - fh / 2, 0);
              listWrapper.style.paddingTop = pad + "px";
            }
          }
        };

        // NEW: distance based on absolute positions so last item center aligns with viewport center
        const computePinEnd = () => {
          const last = serviceItemElements[serviceItemElements.length - 1];
          if (!last || !section) return 0;
          const sectionTopAbs =
            section.getBoundingClientRect().top + window.scrollY;
          const lastCenterAbs =
            last.getBoundingClientRect().top +
            window.scrollY +
            last.clientHeight / 2;
          const viewportCenter = window.innerHeight / 2;
          const distance = lastCenterAbs - sectionTopAbs - viewportCenter;
          return Math.max(distance, 0);
        };

        applyInitialLayout();
        let pinEndDistance = computePinEnd();

        const pinTrigger = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=" + pinEndDistance,
          pin: stickyContent,
          pinSpacing: true,
          anticipatePin: 1,
          // markers: true,
          onEnter: () => {
            if (rightSideEl) {
              gsap.to(rightSideEl, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
              });
            }
          },
          onEnterBack: () => {
            if (rightSideEl) {
              gsap.to(rightSideEl, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
              });
            }
          },
          onLeaveBack: () => {
            if (rightSideEl) {
              gsap.to(rightSideEl, {
                opacity: 0,
                y: 40,
                duration: 0.4,
                ease: "power2.in",
              });
            }
          },
        });
        createdTriggers.push(pinTrigger);

        const recalc = () => {
          applyInitialLayout();
          const newDistance = computePinEnd();
          if (newDistance !== pinEndDistance) {
            pinEndDistance = newDistance;
            pinTrigger.vars.end = "+=" + pinEndDistance;
          }
          pinTrigger.refresh();
        };

        window.addEventListener("resize", recalc);
        ScrollTrigger.addEventListener("refreshInit", recalc);
        createdTriggers.push({
          kill: () => {
            window.removeEventListener("resize", recalc);
            ScrollTrigger.removeEventListener("refreshInit", recalc);
          },
        } as any);

        // Per-item fade triggers unchanged
        gsap.set(serviceItemElements, { opacity: 0, y: 50 });
        serviceItemElements.forEach((item) => {
          const t = ScrollTrigger.create({
            trigger: item,
            start: "top center+=150",
            end: "bottom center",
            onEnter: () => {
              gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out",
              });
            },
            onLeaveBack: () => {
              gsap.to(item, {
                opacity: 0,
                y: 50,
                duration: 0.5,
                ease: "power3.in",
              });
            },
          });
          createdTriggers.push(t);
        });
      }
    }

    return () => {
      createdTriggers.forEach((t) => t.kill && t.kill());
    };
  }, [isMobile, serviceItems]);

  // Function to render the section title with highlighted words
  const renderSectionTitle = () => {
    // Split the title into parts based on highlighted words
    let titleElements: JSX.Element[] = [];
    let currentIndex = 0;

    // Sort the highlighted words by their position in the text
    const sortedHighlights = [...sectionTitle.highlightedWords].sort((a, b) => {
      const posA = sectionTitle.mainText.indexOf(a.text);
      const posB = sectionTitle.mainText.indexOf(b.text);
      return posA - posB;
    });

    for (const highlight of sortedHighlights) {
      const textPos = sectionTitle.mainText.indexOf(
        highlight.text,
        currentIndex,
      );

      if (textPos > currentIndex) {
        // Add the text before the highlight
        titleElements.push(
          <span
            key={`text-${currentIndex}`}
            className="leading-[inherit]"
            style={{ color: mainTextColor }}
          >
            {sectionTitle.mainText.slice(currentIndex, textPos)}
          </span>,
        );
      }

      // Add the highlighted text
      titleElements.push(
        <span
          key={`highlight-${textPos}`}
          className="leading-[inherit]"
          style={{ color: accentColor }}
        >
          {highlight.text}
        </span>,
      );

      currentIndex = textPos + highlight.text.length;
    }

    // Add any remaining text after the last highlight
    if (currentIndex < sectionTitle.mainText.length) {
      titleElements.push(
        <span
          key={`text-${currentIndex}`}
          className="leading-[inherit]"
          style={{ color: mainTextColor }}
        >
          {sectionTitle.mainText.slice(currentIndex)}
        </span>,
      );
    }

    return titleElements;
  };

  useEffect(() => {
    if (!isVideoEnable || !videoRef.current) return;

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
  }, [isVideoEnable]);

  return (
    <div
      ref={sectionRef}
      className={`language-services-section  relative ${minSectionHeight} ${sectionClassName}`}
      style={{ backgroundColor }}
    >
      <div className="px-4 sm:px-6 lg:px-16 xl:px-[70px] pt-10 lg:pt-0">
        <div className="w-full">
          <div
            className={`flex flex-col ${isMobile ? "gap-5" : "lg:flex-row justify-between items-center lg:items-start gap-8 sm:gap-12 lg:gap-20"}`}
          >
            {/* Left Side - Only sticky on desktop */}
            <div
              ref={stickyContentRef}
              className={`w-full lg:w-1/2 lg:flex-none ${isMobile ? "mb-10" : "h-screen flex items-center sticky top-0"} relative`}
            >
              {/* Background images container - only visible on desktop */}
              <div className="absolute inset-y-0 -left-4 sm:-left-6 lg:-left-16 right-0 overflow-hidden z-0 hidden lg:block pointer-events-none">
                <div className="flex flex-col h-full">
                  <div className="transform-none hover:transform-none">
                    <img
                      src="/WP/Pattren1.png"
                      alt="Background design"
                      className="transform-none hover:transform-none transition-none opacity-[0.5]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10  w-full text-center lg:text-left relative z-10">
                {/* Title */}
                <div
                  className={`${width} flex flex-col justify-center items-center lg:items-start gap-5`}
                >
                  <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-[2.375rem] xl:text-[2.938rem] font-bold uppercase leading-[1] sm:leading-[1] md:leading-[1] lg:leading-[1] xl:leading-[1.1]">
                    {renderSectionTitle()}
                  </h2>

                  {/* Marketing video */}

                  {isVideoEnable && (
                    <div>
                      <video
                        ref={videoRef} // NEW
                        src="/video/VYALUX MARKETING VIDEO.mp4"
                        muted
                        controls
                        className="w-[90%] mt-2 rounded-2xl"
                      />
                    </div>
                  )}

                  {/* Description under the title */}
                  {sectionDescription && (
                    <p
                      className="font-montserrat mt-2 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed"
                      style={{ color: mainTextColor }}
                    >
                      {sectionDescription}
                    </p>
                  )}

                  {/* Button under description (if enabled) */}
                  {showButton && (
                    <div className="mt-4 lg:mt-6 flex justify-center lg:justify-start">
                      <Link to={"/contact-us"}>
                        <AnimatedBlobButton
                          onClick={onButtonClick}
                          blobColor={buttonColor}
                          textColor={mainTextColor}
                          className="w-[280px] sm:w-[320px] lg:w-[350px] xl:w-[480px] h-[42px] sm:h-[46px] xl:h-[50px]"
                        >
                          {buttonText}
                        </AnimatedBlobButton>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Scrolling Content */}
            <div
              ref={rightSideRef}
              className="w-full lg:w-1/2 lg:flex-none relative flex items-start justify-center"
            >
              <div
                ref={listWrapperRef} // NEW
                className={`flex flex-col ${isMobile ? "space-y-[5vh]" : "space-y-[20vh]"} pb-[10vh] w-full max-w-md`}
              >
                {serviceItems.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => (serviceItemsRef.current[index] = el)}
                    className="service-item flex items-center justify-center lg:justify-start min-h-[10vh]"
                  >
                    <div className="flex flex-col gap-3 sm:gap-4 w-full text-center lg:text-left">
                      <div className="flex items-start gap-4 sm:gap-6 justify-center lg:justify-start">
                        <div
                          className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1 rounded-sm"
                          style={{ backgroundColor: "#939498" }}
                        ></div>
                        <h3
                          className="font-montserrat text-base sm:text-lg lg:text-xl font-semibold leading-6 sm:leading-7"
                          style={{ color: mainTextColor }}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p
                        className="font-montserrat text-sm sm:text-lg lg:text-xl leading-6 sm:leading-7 max-w-full"
                        style={{ color: mainTextColor }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
