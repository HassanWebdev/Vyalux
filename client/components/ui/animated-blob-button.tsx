import { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { cn } from "../../lib/utils";

export interface AnimatedBlobButtonProps {
  /**
   * Button text content
   */
  children: React.ReactNode;
  /**
   * Color of the blob that fills the button on hover
   */
  blobColor?: string;
  /**
   * Text color
   */
  textColor?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional class name for additional styling and dimensions
   */
  className?: string;
  /**
   * Optional callback when hover starts
   */
  onHoverStart?: () => void;
  /**
   * Optional callback when hover ends
   */
  onHoverEnd?: () => void;
  /**
   * Optional disable state
   */
  disabled?: boolean;
  /**
   * Optional type attribute
   */
  type?: "button" | "submit" | "reset";
}

export function AnimatedBlobButton({
  children,
  blobColor = "#AB322C",
  textColor = "white",
  onClick,
  className,
  onHoverStart,
  onHoverEnd,
  disabled = false,
  type = "button",
}: AnimatedBlobButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  // Debounced resize handler for better performance
  const checkMobile = useCallback(() => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }

    resizeTimeoutRef.current = setTimeout(() => {
      setIsMobile(window.innerWidth < 1024);
    }, 150);
  }, []);

  // Check if we're on a mobile device with debouncing
  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [checkMobile]);

  const handleButtonHover = useCallback(() => {
    if (overlayRef.current && !disabled) {
      // Expand width from left position
      const buttonWidth = isMobile
        ? "108%"
        : spanRef.current?.offsetWidth + 35 + "px";
      gsap.to(overlayRef.current, {
        width: buttonWidth,
        duration: 0.4,
        ease: "power2.out",
      });
    }
    // Call the parent's onHoverStart if provided
    if (onHoverStart) onHoverStart();
  }, [isMobile, onHoverStart, disabled]);

  const handleButtonLeave = useCallback(() => {
    if (overlayRef.current && !disabled) {
      // Return to initial width based on screen size
      const initialWidth = isMobile
        ? "55px"
        : window.innerWidth < 1024
          ? "60px"
          : "68px";
      gsap.to(overlayRef.current, {
        width: initialWidth,
        duration: 0.4,
        ease: "power2.out",
      });
    }
    // Call the parent's onHoverEnd if provided
    if (onHoverEnd) onHoverEnd();
  }, [isMobile, onHoverEnd, disabled]);

  return (
    <div className={cn("relative", className)}>
      <div
        ref={overlayRef}
        className="absolute top-0 w-[68px] h-full rounded-full transition-colors duration-300"
        style={{ backgroundColor: blobColor }}
      ></div>
      <button
        ref={buttonRef}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        type={type}
        className={cn(
          "relative z-10 w-full h-full flex items-center  bg-transparent border-none cursor-pointer",
          disabled && "opacity-60 cursor-not-allowed",
        )}
      >
        <span
          ref={spanRef}
          className="font-montserrat relative left-[20px] font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[20px] tracking-[2px] sm:tracking-[3px] lg:tracking-[3.5px] uppercase"
          style={{ color: textColor }}
        >
          {children}
        </span>
      </button>
    </div>
  );
}
