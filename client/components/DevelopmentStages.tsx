import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Custom useGsap hook for better animation management
function useGsap(scopeRef) {
  const [ctx] = useState(() => gsap.context(() => {}, scopeRef));

  useEffect(() => {
    return () => ctx.revert(); // Cleanup all animations when component unmounts
  }, [ctx]);

  return ctx;
}

// Define stage data structure
interface StageProps {
  number: number | string;
  isAlternate: boolean;
  topLabel?: string;
  bottomLabel?: string;
  stageIndex?: number; // Actual stage number (1-5)
}

interface StageCircleProps extends StageProps {
  index: number;
  triggerRef: React.RefObject<HTMLDivElement>;
  onStageHover: (stage: number | null) => void;
}

const stages = [
  {
    number: 1,
    isAlternate: false,
    bottomLabel: "Shaping the big picture",
    stageIndex: 1,
  },
  { number: "", isAlternate: true },
  { number: 2, isAlternate: false, topLabel: "R&D Begins", stageIndex: 2 },
  { number: "", isAlternate: true },
  { number: 3, isAlternate: false, bottomLabel: "Wireframes", stageIndex: 3 },
  { number: "", isAlternate: true },
  {
    number: 4,
    isAlternate: false,
    topLabel: "Agile Development in Motion",
    stageIndex: 4,
  },
  { number: "", isAlternate: true },
  {
    number: 5,
    isAlternate: false,
    bottomLabel: "Product Launch",
    stageIndex: 5,
  },
];

// Reusable Stage Circle component
const StageCircle: React.FC<StageCircleProps> = ({
  number,
  isAlternate,
  topLabel,
  bottomLabel,
  index,
  triggerRef,
  stageIndex,
  onStageHover,
}) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const topLabelRef = useRef<HTMLDivElement>(null);
  const bottomLabelRef = useRef<HTMLDivElement>(null);
  const topLabelBgRef = useRef<HTMLDivElement>(null);
  const bottomLabelBgRef = useRef<HTMLDivElement>(null);
  const circleContainerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<SVGCircleElement>(null);
  const componentRef = useRef(null);

  // Use our custom hook for animation context
  const gsapContext = useGsap(componentRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsapContext.add(() => {
      if (circleRef.current) {
        const circle = circleRef.current;
        const circumference = 2 * Math.PI * 50;

        gsap.set(circle, {
          strokeDasharray: circumference,
          strokeDashoffset: circumference,
        });

        gsap.to(circle, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 70%",
            delay: index * 0.15,
          },
        });
      }

      // Animation setup and initial states
      gsap.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 70%",
            delay: index * 0.15,
          },
        }
      );

      if (topLabelRef.current) {
        gsap.fromTo(
          topLabelRef.current,
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top 70%",
              delay: index * 0.15 + 0.3,
            },
          }
        );
      }

      if (bottomLabelRef.current) {
        gsap.fromTo(
          bottomLabelRef.current,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top 70%",
              delay: index * 0.15 + 0.3,
            },
          }
        );
      }

      // Set initial states for hover animations
      if (highlightRef.current) {
        gsap.set(highlightRef.current, {
          opacity: 0,
          scale: 1.05,
        });
      }

      if (topLabelBgRef.current) {
        gsap.set(topLabelBgRef.current, {
          scaleX: 0,
        });
      }

      if (bottomLabelBgRef.current) {
        gsap.set(bottomLabelBgRef.current, {
          scaleX: 0,
        });
      }
    });

    // No need for return cleanup - handled by our useGsap hook
  }, [index, triggerRef, gsapContext]);

  // Only add hover effects to circles with numbers (not the separator circles)
  useEffect(() => {
    if (circleContainerRef.current && stageIndex) {
      const container = circleContainerRef.current;
      let hoverAnimations = [];

      const handleMouseEnter = () => {
        // Kill any existing hover animations to prevent conflicts
        hoverAnimations.forEach((anim) => anim.kill());
        hoverAnimations = [];

        // Animate water-fill effect for top label with enhanced scale
        if (topLabelRef.current && topLabelBgRef.current) {
          const topLabelWrapperEl = topLabelRef.current.parentElement;

          // Scale up the entire label wrapper
          if (topLabelWrapperEl) {
            hoverAnimations.push(
              gsap.to(topLabelWrapperEl, {
                scale: 1.1,
                duration: 0.5,
                ease: "power2.out",
              })
            );
          }

          // Water fill animation
          hoverAnimations.push(
            gsap.to(topLabelBgRef.current, {
              scaleX: 1,
              duration: 0.5,
              ease: "power2.out",
            })
          );

          // Text effect
          hoverAnimations.push(
            gsap.to(topLabelRef.current, {
              // color: "#000000",
              fontWeight: "bold",
              duration: 0.3,
              ease: "power2.out",
            })
          );
        }

        // Animate water-fill effect for bottom label with enhanced scale
        if (bottomLabelRef.current && bottomLabelBgRef.current) {
          const bottomLabelWrapperEl = bottomLabelRef.current.parentElement;

          // Scale up the entire label wrapper
          if (bottomLabelWrapperEl) {
            hoverAnimations.push(
              gsap.to(bottomLabelWrapperEl, {
                scale: 1.1,
                duration: 0.9,
                ease: "power2.out",
              })
            );
          }

          // Water fill animation
          hoverAnimations.push(
            gsap.to(bottomLabelBgRef.current, {
              scaleX: 1,
              duration: 0.6,
              ease: "power2.out",
            })
          );

          // Text effect
          hoverAnimations.push(
            gsap.to(bottomLabelRef.current, {
              color: "#FFFFFF",
              fontWeight: "bold",
              duration: 0.5,
              ease: "power2.out",
            })
          );
        }

        // Circle glow effect
        if (highlightRef.current) {
          hoverAnimations.push(
            gsap.to(highlightRef.current, {
              opacity: 0.3,
              duration: 0.3,
              ease: "power2.out",
            })
          );
        }

        // Make text brighter and bigger
        if (textRef.current) {
          hoverAnimations.push(
            gsap.to(textRef.current, {
              fill: "#ffffff",
              fontSize: "34",
              duration: 0.3,
              ease: "power2.out",
            })
          );
        }

        // Notify parent about hover
        onStageHover(stageIndex);
      };

      const handleMouseLeave = () => {
        // Kill any existing hover animations to prevent conflicts
        hoverAnimations.forEach((anim) => anim.kill());
        hoverAnimations = [];

        // Reset water-fill animation for labels
        if (topLabelRef.current && topLabelBgRef.current) {
          const topLabelWrapperEl = topLabelRef.current.parentElement;

          if (topLabelWrapperEl) {
            hoverAnimations.push(
              gsap.to(topLabelWrapperEl, {
                scale: 1,
                duration: 0.4,
                ease: "power2.in",
              }) 
            );
          }

          hoverAnimations.push(
            gsap.to(topLabelBgRef.current, {
              scaleX: 0,
              duration: 0.4,
              ease: "power2.in",
            })
          );

          hoverAnimations.push(
            gsap.to(topLabelRef.current, {
              color: "inherit",
              fontWeight: "normal",
              duration: 0.3,
              ease: "power2.in",
            })
          );
        }

        if (bottomLabelRef.current && bottomLabelBgRef.current) {
          const bottomLabelWrapperEl = bottomLabelRef.current.parentElement;

          if (bottomLabelWrapperEl) {
            hoverAnimations.push(
              gsap.to(bottomLabelWrapperEl, {
                scale: 1,
                duration: 0.4,
                ease: "power2.in",
              })
            );
          }

          hoverAnimations.push(
            gsap.to(bottomLabelBgRef.current, {
              scaleX: 0,
              duration: 0.4,
              ease: "power2.in",
            })
          );

          hoverAnimations.push(
            gsap.to(bottomLabelRef.current, {
              color: "inherit",
              fontWeight: "normal",
              duration: 0.3,
              ease: "power2.in",
            })
          );
        }

        // Remove circle glow
        if (highlightRef.current) {
          hoverAnimations.push(
            gsap.to(highlightRef.current, {
              opacity: 0,
              duration: 0.3,
              ease: "power2.out",
            })
          );
        }

        // Reset text
        if (textRef.current) {
          hoverAnimations.push(
            gsap.to(textRef.current, {
              fill: "#ffff",
              fontSize: "28",
              duration: 0.3,
              ease: "power2.out",
            })
          );
        }

        // Clear hover state
        onStageHover(null);
      };

      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        // Kill any lingering animations on cleanup
        hoverAnimations.forEach((anim) => anim.kill());
      };
    }
  }, [stageIndex, onStageHover]);

  const gradientId = `circleGradient${isAlternate ? "Alt" : ""}${index}`;

  return (
    <div
      ref={componentRef}
      className="relative flex flex-col items-center"
      style={{ marginLeft: index === 0 ? "0" : "-24px", zIndex: 10 - index }}
    >
      {/* Top Label with connector line */}
      {topLabel && (
        <div className="flex flex-col items-center">
          <div
            className="absolute top-[-6rem]"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          >
            <div className="relative overflow-hidden text-center text-sm transform-gpu whitespace-nowrap">
              {/* Background fill element */}
              <div
                ref={topLabelBgRef}
                className="absolute top-0 left-0 w-full h-full bg-[#ac2a28] rounded-full z-0"
                style={{ transformOrigin: "left"}}
              ></div>

              {/* Label text */}
              <div
                ref={topLabelRef}
                className="relative z-10 px-4 py-[8px]  transition-colors duration-300"
              >
                {topLabel}
              </div>
            </div>
          </div>
          <div
            className="absolute"
            style={{ top: "-55px", left: "50%", transform: "translateX(-50%)" }}
          >
            <img src="/line.svg" alt="" />
          </div>
        </div>
      )}

      {/* Circle */}
      <div
        ref={circleContainerRef}
        className={`w-36 h-36 flex items-center justify-center ${stageIndex ? "cursor-pointer" : ""}`}
      >
        <svg width="100%" height="100%" viewBox="0 0 120 120">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              {isAlternate ? (
                <>
                  <stop offset="0%" stopColor="#AC2A28" />
                  <stop offset="50%" stopColor="#AC2A28" />
                  <stop offset="50%" stopColor="white" />
                  <stop offset="100%" stopColor="white" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="white" />
                  <stop offset="50%" stopColor="white" />
                  <stop offset="50%" stopColor="#AC2A28" />
                  <stop offset="100%" stopColor="#AC2A28" />
                </>
              )}
            </linearGradient>
            <radialGradient
              id={`glow${index}`}
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#AC2A28" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#AC2A28" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Glow highlight circle */}
          {stageIndex && (
            <circle
              ref={highlightRef}
              cx="60"
              cy="60"
              r="58"
              fill={`url(#glow${index})`}
              opacity="0"
            />
          )}

          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="transparent"
            stroke="#e5e5e5"
            strokeWidth="2"
          />

          {/* Animated circle */}
          <circle
            ref={circleRef}
            cx="60"
            cy="60"
            r="50"
            fill="transparent"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            transform="rotate(-90, 60, 60)"
            strokeLinecap="round"
          />

          {/* Four small circles on the border */}
          <circle cx="60" cy="10" r="4" fill="white" />
          <circle cx="110" cy="60" r="4" fill="white" />
          <circle cx="60" cy="110" r="4" fill="white" />
          <circle cx="10" cy="60" r="4" fill="white" />

          {/* Center number */}
          <text
            ref={textRef}
            x="60"
            y="60"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="28"
            fontWeight="bold"
            fill="#ffff"
          >
            {number}
          </text>
        </svg>
      </div>

      {/* Bottom Label with connector line */}
      {bottomLabel && (
        <div className="flex flex-col items-center">
          <div
            className="absolute"
            style={{
              bottom: "-55px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img src="/line.svg" alt="" />
          </div>
          <div
            className="absolute bottom-[-6rem]"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          >
            <div className="relative overflow-hidden text-center text-sm transform-gpu whitespace-nowrap">
              {/* Background fill element */}
              <div
                ref={bottomLabelBgRef}
                className="absolute top-0 left-0 w-full h-full bg-[#ac2a28] rounded-full z-0"
                style={{ transformOrigin: "right", }}
              ></div>

              {/* Label text */}
              <div
                ref={bottomLabelRef}
                className="relative z-10 px-4 py-[8px] transition-colors duration-300"
              >
                {bottomLabel}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface DevelopmentStagesProps {
  onStageHover: (stage: number | null) => void;
}

function DevelopmentStages({ onStageHover }: DevelopmentStagesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const gsapContext = useGsap(sectionRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsapContext.add(() => {
      // Animate header
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    });

    // No need for return cleanup - handled by our useGsap hook
  }, [gsapContext]);

  return (
    <div
      ref={sectionRef}
      className="w-full h-max pt-20 pb-20 xl:pb-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-[70px]"
    >
      <h2
        ref={headerRef}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-left w-full"
      >
        IT STARTS <span className="text-red-600">WITH</span>
      </h2>
      <div className="w-full flex justify-center">
        <div
          className="flex items-center justify-center relative"
          style={{ height: "320px" }}
        >
          {stages.map((stage, index) => (
            <StageCircle
              key={index}
              index={index}
              number={stage.number}
              isAlternate={stage.isAlternate}
              topLabel={stage.topLabel}
              bottomLabel={stage.bottomLabel}
              stageIndex={stage.stageIndex}
              triggerRef={sectionRef}
              onStageHover={onStageHover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DevelopmentStages;
