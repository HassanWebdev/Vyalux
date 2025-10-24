import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "../hooks/use-mobile";

gsap.registerPlugin(ScrollTrigger);

export default function OurAmbition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const paragraph1Ref = useRef<HTMLDivElement>(null);
  const paragraph2Ref = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Clean up any existing ScrollTrigger instances
    if (containerRef.current) {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === containerRef.current) {
          st.kill();
        }
      });
    }

    // Make content immediately visible on mobile
    if (
      isMobile &&
      titleRef.current &&
      paragraph1Ref.current &&
      paragraph2Ref.current &&
      ctaRef.current
    ) {
      gsap.set(
        [
          titleRef.current,
          paragraph1Ref.current,
          paragraph2Ref.current,
          ctaRef.current,
        ],
        {
          clearProps: "all",
          opacity: 1,
          y: 0,
        },
      );
    } else {
      // Desktop animations with a context
      const ctx = gsap.context(() => {
        // Set initial states for desktop animations
        gsap.set(
          [
            titleRef.current,
            paragraph1Ref.current,
            paragraph2Ref.current,
            ctaRef.current,
          ],
          {
            y: 50,
            opacity: 0,
          },
        );

        // Create timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        });

        // Animate elements in sequence
        tl.to(titleRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        })
          .to(
            paragraph1Ref.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.6",
          )
          .to(
            paragraph2Ref.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.4",
          )
          .to(
            ctaRef.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.2",
          );
      }, containerRef);

      // Clean up context when component unmounts
      return () => ctx.revert();
    }

    // Add subtle hover effect on CTA (works on both mobile and desktop)
    if (ctaRef.current) {
      gsap.set(ctaRef.current, { cursor: "pointer" });

      const onEnter = () => {
        gsap.to(ctaRef.current, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        gsap.to(ctaRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      ctaRef.current.addEventListener("mouseenter", onEnter);
      ctaRef.current.addEventListener("mouseleave", onLeave);

      // Clean up event listeners
      return () => {
        if (ctaRef.current) {
          ctaRef.current.removeEventListener("mouseenter", onEnter);
          ctaRef.current.removeEventListener("mouseleave", onLeave);
        }

        // Kill any remaining animations
        ScrollTrigger.getAll().forEach((st) => {
          if (st.vars.trigger === containerRef.current) {
            st.kill();
          }
        });
      };
    }

    setIsInitialized(true);
  }, [isMobile]);

  return (
    <section
      ref={containerRef}
      className="relative py-20 flex items-center justify-center bg-[#040404] px-4 sm:px-8 lg:px-[70px]"
    >
      <div className="w-full mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24">
          {/* Title Section */}

          <div ref={titleRef} className="relative flex-1  ">
            <h1
              className="font-montserrat inline-block text-center  font-bold uppercase leading-tight text-white"
              style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                fontSize: "clamp(2.5rem, 6vw, 3.1rem)",
              }}
            >
              OUR <span style={{ color: "#AB322C" }}>AMBITION</span>
            </h1>
          </div>

          {/* Content Section */}
          <div className="flex-1  space-y-10">
            {/* First Paragraph */}
            <div ref={paragraph1Ref}>
              <p className="font-montserrat text-white text-lg sm:text-xl leading-7 font-normal">
                We're more than just designers, developers, and product
                managers—we're thinkers, creators, and problem-solvers working
                side by side. From AI experts to full-stack developers, our team
                incorporates human skills with AI innovation to craft
                state-of-the-art solutions.
              </p>
            </div>

            {/* Second Paragraph */}
            <div ref={paragraph2Ref}>
              <p className="font-montserrat text-white text-lg sm:text-xl leading-7 font-normal">
                We know great solutions aren't just coded—they're envisioned,
                executed, and refined by people who care. That's what keeps us
                moving forward every day.
              </p>
            </div>

            {/* Call to Action */}
            <div ref={ctaRef} className="transition-transform duration-300">
              <p
                className="font-montserrat font-bold text-lg leading-7"
                style={{
                  background:
                    "linear-gradient(90deg, #FFF 71.62%, #AB322C 71.63%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Let's build what matters—together.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 pointer-events-none">
        <img
          src="/WP/bgrec.png"
          alt="Decorative pattern"
          className="w-[40rem]"
        />
      </div>
    </section>
  );
}
