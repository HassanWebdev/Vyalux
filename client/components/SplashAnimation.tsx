import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(DrawSVGPlugin);
}

export default function SplashAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const shutterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setTimeout(() => containerRef.current?.remove(), 500);
      },
    });

    // Group each letter's paths
    const letterGroups = svgRef.current?.querySelectorAll("g");

    gsap.set(svgRef.current, { opacity: 1, y: 20 });
    gsap.set(letterGroups, { opacity: 1, scale: 1 });
    letterGroups?.forEach((group) => {
      gsap.set(group.querySelectorAll("path"), { drawSVG: "0%" });
    });
    gsap.set(shutterRef.current, { scaleY: 1, transformOrigin: "top" });

    // Animate each letter in sequence
    letterGroups?.forEach((group, i) => {
      const paths = group.querySelectorAll("path");
      tl.to(paths, {
        drawSVG: "100%",
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
      })
        .to(
          group,
          { scale: 1.1, duration: 0.2, ease: "power2.out" },
          `-=0.2` // little overlap for smoothness
        )
        .to(group, { scale: 1, duration: 0.2, ease: "power2.in" });
    });

    // Closing shutter
    tl.to({}, { duration: 0.5 }).to(shutterRef.current, {
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.8,
      ease: "power3.inOut",
    });

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[#040404] flex items-center justify-center"
    >
      <div ref={shutterRef} className="absolute inset-0 bg-[#fff]"></div>

      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 720 100"
        width="720"
        height="100"
      >
        {/* V */}
        <g>
          <path d="M10 10 L40 90 L70 10" fill="none" stroke="black" strokeWidth="8" strokeLinecap="square" />
        </g>

        {/* Y */}
        <g>
          <path d="M110 10 L140 40" fill="none" stroke="black" strokeWidth="8" strokeLinecap="square" />
          <path d="M170 10 L140 40" fill="none" stroke="black" strokeWidth="8" strokeLinecap="square" />
          <path d="M140 40 L140 90" fill="none" stroke="black" strokeWidth="8" strokeLinecap="square" />
        </g>

        {/* A without middle bar */}
        <g>
          <path d="M210 90 L240 10" fill="none" stroke="black" strokeWidth="8" strokeLinecap="square" />
          <path d="M270 90 L240 10" fill="none" stroke="black" strokeWidth="8" strokeLinecap="square" />
        </g>

        {/* L */}
        <g>
          <path d="M310 10 L310 90 L350 90" fill="none" stroke="black" strokeWidth="8" strokeLinecap="square" />
        </g>

        {/* U */}
        <g>
          <path d="M390 10 L390 70 Q390 90 410 90 L430 90 Q450 90 450 70 L450 10" fill="none" stroke="black" strokeWidth="8" strokeLinecap="square" />
        </g>

        {/* X */}
        <g>
          <path d="M490 10 L530 90" fill="none" stroke="black" strokeWidth="8" strokeLinecap="square" />
          <path d="M530 10 L490 90" fill="none" stroke="black" strokeWidth="8" strokeLinecap="square" />
        </g>
      </svg>
    </div>
  );
}
