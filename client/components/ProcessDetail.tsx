import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProcessDetailsProps {
  hoveredStage: number | null;
}

export default function ProcessDetails({ hoveredStage }: ProcessDetailsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  // Clear and set up refs array
  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardRefs.current[index] = el;
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Get all cards
      const cards = cardsRef.current?.querySelectorAll(".process-card");

      if (cards) {
        // Set initial states
        gsap.set(cards, { y: 50, opacity: 0, scale: 0.9 });

        // Create timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });

        // Animate cards with stagger
        tl.to(cards, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Effect to handle hover state changes
  useEffect(() => {
    // Create an array to store all animations so we can kill them properly
    const animations = [];
    
    // Check if we should hide the first row (stages 4 or 5)
    const shouldHideFirstRow = hoveredStage === 4 || hoveredStage === 5;
    // Check if we're coming from stages 4 or 5 (for reverse animation)
    const wasHidingFirstRow = hoveredStage === null && cardRefs.current.length > 0;
    
    // Animate first row visibility
    if (firstRowRef.current) {
      gsap.killTweensOf(firstRowRef.current);
      
      if (shouldHideFirstRow) {
        animations.push(
          gsap.to(firstRowRef.current, {
            opacity: 0,
            y: -50,
            scale: 0.9,
            duration: 0.4,
            ease: "power2.out",
            pointerEvents: "none"
          })
        );
      } else {
        // Only use reverse animation if we have opacity 0 (meaning we were hiding first row)
        const currentOpacity = gsap.getProperty(firstRowRef.current, "opacity");
        
        if (currentOpacity === 0) {
          // Reverse animation - first row comes back from top (only when leaving hover from 4 or 5)
          animations.push(
            gsap.fromTo(firstRowRef.current, 
              {
                opacity: 0,
                y: -100,
                scale: 0.8
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.9, // Increased duration
                ease: "power2.out",
                pointerEvents: "auto"
              }
            )
          );
        } else {
          // Normal state (for hovering 1, 2, 3 or initial state)
          animations.push(
            gsap.to(firstRowRef.current, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
              pointerEvents: "auto"
            })
          );
        }
      }
    }

    // Animate second row position
    if (secondRowRef.current) {
      gsap.killTweensOf(secondRowRef.current);
      
      if (shouldHideFirstRow) {
        // Move second row to first row position
        animations.push(
          gsap.to(secondRowRef.current, {
            y: -480, // Approximate height of first row + gap
            duration: 0.5,
            ease: "power2.out"
          })
        );
      } else {
        // Check if second row is currently moved up (meaning we were hiding first row)
        const currentY = gsap.getProperty(secondRowRef.current, "y");
        
        if (currentY !== 0) {
          // Reverse animation - second row slides down to original position (longer duration)
          animations.push(
            gsap.to(secondRowRef.current, {
              y: 0,
              duration: 2, // Increased duration
              ease: "power2.out"
            })
          );
        } else {
          // Normal state - ensure it stays at original position
          animations.push(
            gsap.to(secondRowRef.current, {
              y: 0,
              duration: 0.9,
              ease: "power2.out"
            })
          );
        }
      }
    }
    
    if (hoveredStage !== null && hoveredStage >= 1 && hoveredStage <= 5) {
      const index = hoveredStage - 1;
      
      // Reset all cards to normal state
      cardRefs.current.forEach((card, i) => {
        if (card && i !== index) {
          // Kill any existing animations on this element
          gsap.killTweensOf(card);
          
          // Create new animation and store it
          animations.push(
            gsap.to(card, {
              scale: 0.97,
              opacity: 0.7,
              duration: 0.3,
              filter: "blur(3px)",
              boxShadow: "none", // Explicitly reset boxShadow
              ease: "power2.out",
            })
          );
        }
      });
      
      // Animate the hovered card
      if (cardRefs.current[index]) {
        // Kill any existing animations
        gsap.killTweensOf(cardRefs.current[index]);
        
        // Create new animation and store it
        animations.push(
          gsap.to(cardRefs.current[index], {
            scale: 1.05,
            opacity: 1,
            boxShadow: "0 0 20px rgba(171, 44, 44, 0.4)",
            filter: "blur(0px)", // Explicitly reset filter
            duration: 0.4,
            ease: "power3.out",
          })
        );
      }
    } else {
      // Reset all cards to normal state
      cardRefs.current.forEach((card) => {
        if (card) {
          // Kill any existing animations
          gsap.killTweensOf(card);
          
          // Create new animation and store it
          animations.push(
            gsap.to(card, {
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              boxShadow: "none",
              duration: 0.3,
              ease: "power2.out",
            })
          );
        }
      });
    }
    
    // Cleanup function to kill all animations when component unmounts or dependencies change
    return () => {
      animations.forEach(animation => {
        if (animation) {
          animation.kill();
        }
      });
      
      // Additional safety measure: ensure all elements are reset to default state
      cardRefs.current.forEach(card => {
        if (card) {
          gsap.killTweensOf(card);
          gsap.set(card, {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            boxShadow: "none"
          });
        }
      });

      // Reset row positions without animation (for component unmount)
      if (firstRowRef.current) {
        gsap.killTweensOf(firstRowRef.current);
        gsap.set(firstRowRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          pointerEvents: "auto"
        });
      }

      if (secondRowRef.current) {
        gsap.killTweensOf(secondRowRef.current);
        gsap.set(secondRowRef.current, {
          y: 0
        });
      }
    };
  }, [hoveredStage]);

  const processData = [
    {
      title: "Shaping the Big Picture",
      points: [
        "We dive deep into your idea, key objectives, and long-term goals.",
        "Comparative analysis enables us to understand untapped potential and identify competitive advantages.",
      ],
    },
    {
      title: "R&D Begins",
      points: [
        "Every individual brings their expertise to the table — from UI/UX to engineering.",
        "We empower ideation with data-driven market analysis, brainstorming, and hands-on strategy sessions.",
      ],
    },
    {
      title: "Wireframes",
      points: [
        "We design the structural framework of the app or platform.",
        "Collaborate with you to get input and suggestions.",
        "Iterations produce precise wireframes, ensuring perfection before design starts.",
      ],
    },
    {
      title: "Agile Development in Motion",
      points: [
        "Strategic planning transforms vision into actionable milestones.",
        "Engaging Figma designs allow stakeholders to envision the ultimate product.",
        "Development follows agile practices with sprint-based progress and periodic reviews.",
        "Our multi-functional team remains aligned through stand-ups, retrospectives, and demos.",
      ],
    },
    {
      title: "Product Launch",
      points: [
        "After testing and refining, your product is launched on the relevant platforms.",
        "We observe performance and offer real-time support during the process.",
        "Continuous updates and advancements are made based on real user feedback.",
      ],
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black flex items-center justify-center px-4 sm:px-8 lg:px-16 xl:px-20"
      style={{
        paddingLeft: "clamp(30px, 5vw, 75px)",
        paddingRight: "clamp(30px, 5vw, 75px)",
        paddingBottom: "clamp(30px, 5vw, 75px)",
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div ref={cardsRef}>
          {/* Top Row - 3 Cards */}
          <div 
            ref={firstRowRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-6 lg:mb-10"
          >
            {processData.slice(0, 3).map((process, index) => (
              <div
                key={index}
                ref={(el) => setCardRef(el, index)}
                className={`process-card bg-black border-2 border-[#949494] rounded-[20px] p-5 lg:p-8 pt-8 lg:pt-10 min-h-[400px] lg:min-h-[434px] flex flex-col transition-all duration-300 ${
                  hoveredStage === index + 1 ? "z-10" : ""
                }`}
              >
                {/* Red top border */}
                <div className="w-[52px] h-[6px] border-t-4 border-[#AB2C2C] mb-6"></div>

                {/* Title */}
                <h3 className="font-roboto text-white text-xl lg:text-2xl font-bold leading-tight mb-6">
                  {process.title}
                </h3>

                {/* Points */}
                <div className="space-y-6 flex-1">
                  {process.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start gap-3">
                      <div
                        className="w-6 h-[22.7px] mt-1 rounded-[4px] bg-[#6E6E6E] flex-shrink-0"
                        aria-hidden="true"
                      ></div>
                      <p className="font-montserrat text-white text-base lg:text-lg leading-6 font-normal">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Cards (Centered) */}
          <div ref={secondRowRef} className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 max-w-4xl">
              {processData.slice(3, 5).map((process, index) => (
                <div
                  key={index + 3}
                  ref={(el) => setCardRef(el, index + 3)}
                  className={`process-card bg-black border-2 border-[#949494] rounded-[20px] p-5 lg:p-8 pt-8 lg:pt-10 min-h-[480px] lg:min-h-[534px] flex flex-col transition-all duration-300 ${
                    hoveredStage === index + 4 ? "z-10" : ""
                  }`}
                >
                  {/* Red top border */}
                  <div className="w-[52px] h-[6px] border-t-4 border-[#AB2C2C] mb-6"></div>

                  {/* Title */}
                  <h3 className="font-roboto text-white text-xl lg:text-2xl font-bold leading-tight mb-6">
                    {process.title}
                  </h3>

                  {/* Points */}
                  <div className="space-y-6 flex-1">
                    {process.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3">
                        <div
                          className="w-6 h-[22.7px] mt-1 rounded-[4px] bg-[#6E6E6E] flex-shrink-0"
                          aria-hidden="true"
                        ></div>
                        <p className="font-montserrat text-white text-base lg:text-lg leading-6 font-normal">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
