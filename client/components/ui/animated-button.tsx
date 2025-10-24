import { useRef } from 'react';
import { gsap } from 'gsap';

// Button component for reuse across pages
export default function AnimatedButton({ 
  text = "CONNECT WITH EXPERTS", 
  width = "366px", 
  height = "46px", 
  className = "" 
}: {
  text?: string;
  width?: string;
  height?: string;
  className?: string;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleButtonHover = () => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        width: "100%",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleButtonLeave = () => {
    if (overlayRef.current) {
      const isSmallScreen = window.innerWidth < 640;
      const initialWidth = isSmallScreen ? "55px" : window.innerWidth < 1024 ? "60px" : "68px";
      gsap.to(overlayRef.current, {
        width: initialWidth,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleButtonHover}
      onMouseLeave={handleButtonLeave}
      className={`relative w-[280px] sm:w-[320px] lg:w-[350px] xl:w-[${width}] h-[42px] sm:h-[46px] xl:h-[${height}] overflow-hidden rounded-full group cursor-pointer flex items-center justify-center ${className}`}
    >
      <div
        ref={overlayRef}
        className="absolute left-0 top-0 w-[55px] sm:w-[60px] lg:w-[68px] h-full bg-[#AB322C] rounded-full"
      ></div>
      <span className="relative z-10 text-white font-montserrat font-medium text-[20px] leading-[20px] tracking-[3.5px] uppercase pl-[30px]">
        {text}
      </span>
    </button>
  );
}
