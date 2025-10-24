import React, { useRef, useEffect, useMemo } from "react";
import { TextScroll } from "./ui/text-scroll1";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FriendsMarqueeProps {
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  techRow1?: string[];
  techRow2?: string[];
  techRow3?: string[];
}

function FriendsMarquee({
  title = "Technologies We Work With",
  subtitle = "",
  showHeader = true,
  techRow1 = [
    "Laravel",
    "React",
    "Vue.js",
    "Angular",
    "Next.js",
    "Node.js",
    "WordPress",
    "Nest.js",
    "PHP",
    "Python",
    "Java",
    "TypeScript",
  ],
  techRow2 = [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "REST API",
    "Firebase",
    "Supabase",
  ],
  techRow3 = [
    "Tailwind CSS",
    "Bootstrap",
    "SASS",
    "Webpack",
    "Vite",
    "Git",
    "GitHub",
    "GitLab",
    "CI/CD",
    "Jest",
    "Cypress",
    "Shopify",
  ],
}: FriendsMarqueeProps) {
  const headerWrapRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  // Filter out empty arrays and create an array of non-empty rows
  const activeRows = useMemo(() => {
    const rows = [];
    if (techRow1 && techRow1.length > 0) rows.push(techRow1);
    if (techRow2 && techRow2.length > 0) rows.push(techRow2);
    if (techRow3 && techRow3.length > 0) rows.push(techRow3);
    return rows;
  }, [techRow1, techRow2, techRow3]);

  useEffect(() => {
    if (!showHeader) return;
    
    // Check if screen is laptop size or larger (1024px and above)
    const isLaptopOrLarger = window.innerWidth >= 1024;
    
    if (!isLaptopOrLarger) {
      // On mobile/tablet, show elements immediately without animation
      if (titleRef.current) {
        gsap.set(titleRef.current, { autoAlpha: 1, y: 0 });
      }
      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { autoAlpha: 1, y: 0 });
      }
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerWrapRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(titleRef.current, {
        y: 40,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        opacity: 0,
      }).from(
        subtitleRef.current,
        {
          y: 30,
          autoAlpha: 0,
          duration: 0.6,
          ease: "power3.out",
          opacity: 0,
        },
        "-=0.3",
      );
    }, headerWrapRef);

    return () => ctx.revert();
  }, [showHeader]);

  return (
    <div className=" py-12">
      {showHeader && (
        <div className="relative z-10" ref={headerWrapRef}>
          <div className=" 2xl:max-w-none 2xl:mx-auto px-5 mx-auto text-center">
            <h2
              ref={titleRef}
              className="friends-title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold text-[#F2F2F2] mb-6 sm:mb-8 uppercase"
            >
              {title}
            </h2>
            <p
              ref={subtitleRef}
              className="friends-subtitle text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#F2F2F2] mb-10 sm:mb-14 lg:mb-20 max-w-2xl xl:max-w-4xl 2xl:max-w-5xl mx-auto"
            >
              {subtitle}
            </p>
          </div>
        </div>
      )}
      <div className="mt-6 mb-12">
        <TextScroll
          default_velocity={0.8}
          techRows={activeRows}
        />
      </div>
    </div>
  );
}

export default FriendsMarquee;
