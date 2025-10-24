import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "../hooks/use-mobile";

gsap.registerPlugin(ScrollTrigger);

export default function OurBelief() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
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
      visionRef.current &&
      missionRef.current
    ) {
      gsap.set(titleRef.current, { clearProps: "all", opacity: 1, y: 0 });
      gsap.set([visionRef.current, missionRef.current], {
        clearProps: "all",
        opacity: 1,
        x: 0,
      });
    } else {
      // Desktop animations
      const ctx = gsap.context(() => {
        // Set initial states for desktop animations
        gsap.set(titleRef.current, { y: -50, opacity: 0 });
        gsap.set(visionRef.current, { x: -100, opacity: 0 });
        gsap.set(missionRef.current, { x: 100, opacity: 0 });

        // Create timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });

        // Animate elements
        tl.to(titleRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        })
          .to(
            visionRef.current,
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power3.out",
            },
            "-=0.6",
          )
          .to(
            missionRef.current,
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power3.out",
            },
            "-=0.9",
          );
      });
    }

    // Add subtle floating animation to the bullet points (for both mobile and desktop)
    const bullets = containerRef.current?.querySelectorAll(".bullet-point");
    if (bullets) {
      bullets.forEach((bullet, index) => {
        gsap.to(bullet, {
          y: -5,
          duration: 2 + index * 0.5,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.3,
        });
      });
    }

    setIsInitialized(true);

    return () => {
      // Clean up all animations and scroll triggers
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === containerRef.current) {
          st.kill();
        }
      });
      gsap.killTweensOf([
        titleRef.current,
        visionRef.current,
        missionRef.current,
      ]);
      gsap.killTweensOf(bullets);
    };
  }, [isMobile]);

  return (
    <section
      ref={containerRef}
      className="relative py-10  flex items-center justify-center bg-[#040404] px-4 sm:px-8 lg:px-[70px] xl:px-[70px]"
    >
      <div className="w-full  mx-auto">
        {/* Title */}
        <div ref={titleRef} className="mb-10 lg:mb-16">
          <h1
            className="font-montserrat font-bold uppercase leading-tight text-white"
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              fontSize: "clamp(2.5rem, 6vw, 3.1rem)",
            }}
          >
            OUR <span style={{ color: "#AB322C" }}>BELIEF</span>
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Our Vision */}
          <div ref={visionRef} className="space-y-5">
            <div className="flex items-center gap-5">
              <div className="bullet-point w-6 h-6 rounded bg-[#939498] flex-shrink-0" />
              <h2 className="font-montserrat text-white text-lg font-bold leading-7">
                Our Vision
              </h2>
            </div>
            <p className="font-montserrat text-white text-lg sm:text-xl leading-7 font-normal">
              In a world where innovation moves fast and expectations evolve
              even faster, businesses need more than just tools—they need
              trusted partners who can turn vision into value. We exist to
              empower entrepreneurs, creators, and businesses with smart,
              scalable, and secure solutions that remove friction, spark growth,
              and unlock new opportunities.
            </p>
          </div>

          {/* Our Mission */}
          <div ref={missionRef} className="space-y-5">
            <div className="flex items-center gap-5">
              <div className="bullet-point w-6 h-6 rounded bg-[#939498] flex-shrink-0" />
              <h2 className="font-montserrat text-white text-lg font-bold leading-7">
                Our Mission
              </h2>
            </div>
            <p className="font-montserrat text-white text-lg sm:text-xl leading-7 font-normal">
              Our mission is to blend strategy, creativity, and technology to
              craft digital solutions that are not only functional—but truly
              transformative. By combining creative thinking with technical
              expertise, our team designs experiences that are intuitive,
              engaging, and impactful—from integrated applications to reliable,
              scalable, and secure enterprise software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
