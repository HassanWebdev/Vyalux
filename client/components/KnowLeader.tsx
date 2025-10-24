import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useIsMobile } from "../hooks/use-mobile";

gsap.registerPlugin(ScrollTrigger);

export default function KnowOurLeaders() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useGSAP(
    () => {
      // Ensure elements exist
      if (!textRef.current || !imageRef.current || !containerRef.current)
        return;

      // Clean up any existing ScrollTriggers for this element
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === containerRef.current) {
          trigger.kill();
        }
      });

      // Skip animations on mobile - set final states immediately
      if (isMobile) {
        gsap.set([textRef.current, imageRef.current], {
          opacity: 1,
          x: 0,
          clearProps: "transform",
        });
        return;
      }

      // Set initial states - left element from left, right element from right
      gsap.set(textRef.current, { x: -100, opacity: 0 });
      gsap.set(imageRef.current, { x: 100, opacity: 0 });

      // Add a small delay to ensure DOM is ready
      gsap.delayedCall(0.1, () => {
        // Refresh ScrollTrigger to recalculate positions
        ScrollTrigger.refresh();

        // Create scroll trigger animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            refreshPriority: -1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(textRef.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }).to(
          imageRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5",
        );
      });

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === containerRef.current) {
            trigger.kill();
          }
        });
      };
    },
    { scope: containerRef, dependencies: [isMobile] },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex items-center lg:py-16 justify-center bg-[#040404] px-4 sm:px-8 lg:px-[70px] xl:px-[70px]"
    >
      <div className="w-full ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 xl:gap-32">
          {/* Text Section */}
          <div ref={textRef} className="flex-1 text-start lg:text-left">
            <h1
              className="font-montserrat text-xl lg:text-[2rem] xl:text-[2.5rem] 3xl:text-[3rem]  font-bold uppercase leading-tight text-white"
              style={{
                wordBreak: "break-word",
                hyphens: "auto",
              }}
            >
              <span className="inline-block mr-2 mb-1">Know</span>
              <span className="inline-block mr-2 mb-1">our</span>
              <span className="inline-block" style={{ color: "#AB322C" }}>
                leaders
              </span>
            </h1>
            <img
              className="w-[300px] xl:w-[400px] 2xl:w-[550px] mt-5 "
              src="/groupcsmo.png"
              alt=""
            />
          </div>

          {/* Image Section */}
          <div ref={imageRef} className="flex-shrink-0">
            <div className="relative">
              <img
                src="/group2.png"
                alt="Leadership team member"
                className="sm:w-[25rem] xl:w-[34rem] 2xl:w-[45rem] 3xl:w-[50rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
