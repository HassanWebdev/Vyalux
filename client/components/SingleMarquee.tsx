import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimationControls,
  easeInOut,
} from "framer-motion";

interface SingleMarqueeProps {
  images?: string[];
  images2?: string[];
  images3?: string[];
  title?: string;
  subtitle?: string;
}

export default function SingleMarquee({
  images = [
    "/WP/svg/svg1.png",
    "/WP/svg/svg2.png",
    "/WP/svg/svg3.png",
    "/WP/svg/svg4.png",
    "/WP/svg/svg1.png",
    "/WP/svg/svg2.png",
  ],
  images2 = [
    "/WP/svg/svg5.png",
    "/WP/svg/svg6.png",
    "/WP/svg/svg7.png",
    "/WP/svg/svg8.png",
    "/WP/svg/svg5.png",
    "/WP/svg/svg6.png",
  ],
  images3 = [
    "/WP/svg/svg9.png",
    "/WP/svg/svg10.png",
    "/WP/svg/svg11.png",
    "/WP/svg/svg12.png",
    "/WP/svg/svg9.png",
    "/WP/svg/svg10.png",
  ],
}: SingleMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Controls for each marquee row
  const controlsRow1 = useAnimationControls();
  const controlsRow2 = useAnimationControls();
  const controlsRow3 = useAnimationControls();

  // Get scroll information
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState(1);
  const [scrollSpeed, setScrollSpeed] = useState(1.2); // Consistent default speed
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Consistent animation settings across all rows
  const BASE_DURATION = 35; // Same duration for all rows
  const SCROLL_SPEED = 2.5; // Higher speed when scrolling
  const IDLE_SPEED = 1.2; // Normal speed when idle

  // Track scroll direction and speed
  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - lastScrollY;

    // Clear existing timer
    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
    }

    // Mark that we're actively scrolling
    if (!isScrolling) {
      setIsScrolling(true);
      // Immediately apply scrolling speed
      setScrollSpeed(SCROLL_SPEED);
    }

    // Update scroll direction - only if there's significant movement
    if (Math.abs(delta) > 2) {
      const newDirection = delta > 0 ? 1 : -1;
      // Only update if the direction actually changed
      if (newDirection !== scrollDirection) {
        setScrollDirection(newDirection);
      }
    }

    setLastScrollY(latest);

    // Set a timer to detect when scrolling stops
    scrollTimerRef.current = setTimeout(() => {
      setIsScrolling(false);
      // Reset to consistent idle speed when not scrolling
      setScrollSpeed(IDLE_SPEED);
    }, 150);
  });

  // Animation variants for fade-in effects
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Setup animations for marquee effect - all with consistent timing
  useEffect(() => {
    if (isInView) {
      // Common transition settings for all rows
      const getTransition = () => ({
        duration: BASE_DURATION / scrollSpeed,
        ease: "linear", // Using string "linear" instead of an imported constant
        repeat: Infinity,
        repeatType: "loop" as const,
      });

      // Apply animations with consistent speeds
      // First row - direction changes based on scroll direction
      controlsRow1.start({
        x: scrollDirection > 0 ? "-100%" : "0%",
        transition: getTransition(),
      });

      // Second row - opposite to the first row
      controlsRow2.start({
        x: scrollDirection > 0 ? "0%" : "-100%",
        transition: getTransition(),
      });

      // Third row - same as first row
      controlsRow3.start({
        x: scrollDirection > 0 ? "-100%" : "0%",
        transition: getTransition(),
      });
    }

    return () => {
      // Clean up the scroll timer if component unmounts
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, [
    isInView,
    scrollSpeed,
    scrollDirection,
    controlsRow1,
    controlsRow2,
    controlsRow3,
  ]);

  return (
    <div className="relative z-10 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl 2xl:max-w-none 2xl:mx-auto mx-auto text-center">
        <motion.div
          ref={containerRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          // variants={fadeInVariants}
          onViewportEnter={() => setIsInView(true)}
          onViewportLeave={() => setIsInView(false)}
          className=" w-full overflow-hidden flex flex-col gap-8"
        >
          {/* First row */}
          <div className="marquee-row overflow-hidden flex whitespace-nowrap ">
            <motion.div
              className="flex items-center gap-8 sm:gap-12 lg:gap-16 whitespace-nowrap "
              animate={controlsRow1}
              style={{
                width: "fit-content",
                x: scrollDirection > 0 ? "0%" : "-100%",
              }}
            >
              {/* Double the images for continuous loop */}
              {[...images, ...images].map((src, index) => (
                <div
                  key={`row1-a-${index}`}
                  className="flex items-center justify-center opacity-50 w-[200px] h-[80px]"
                >
                  <img
                    src={src}
                    alt={`Technology ${(index % images.length) + 1}`}
                    className="h-16 w-auto object-contain "
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              className="flex items-center gap-8 sm:gap-12 lg:gap-16 whitespace-nowrap opacity-50"
              animate={controlsRow1}
              style={{
                width: "fit-content",
                x: scrollDirection > 0 ? "0%" : "-100%",
              }}
            >
              {/* Double the images for continuous loop */}
              {[...images, ...images].map((src, index) => (
                <div
                  key={`row1-b-${index}`}
                  className="flex items-center justify-center w-[200px] h-[80px]"
                >
                  <img
                    src={src}
                    alt={`Technology ${(index % images.length) + 1}`}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second row */}
          <div className="marquee-row overflow-hidden flex whitespace-nowrap">
            <motion.div
              className="flex items-center gap-8 sm:gap-12 lg:gap-16 whitespace-nowrap opacity-50"
              animate={controlsRow2}
              style={{
                width: "fit-content",
                x: scrollDirection > 0 ? "-100%" : "0%",
              }}
            >
              {/* Double the images for continuous loop */}
              {[...images2, ...images2].map((src, index) => (
                <div
                  key={`row2-a-${index}`}
                  className="flex items-center justify-center w-[200px] h-[80px]"
                >
                  <img
                    src={src}
                    alt={`Technology ${(index % images2.length) + 1}`}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              className="flex items-center gap-8 sm:gap-12 lg:gap-16 whitespace-nowrap opacity-50"
              animate={controlsRow2}
              style={{
                width: "fit-content",
                x: scrollDirection > 0 ? "-100%" : "0%",
              }}
            >
              {/* Double the images for continuous loop */}
              {[...images2, ...images2].map((src, index) => (
                <div
                  key={`row2-b-${index}`}
                  className="flex items-center justify-center w-[200px] h-[80px]"
                >
                  <img
                    src={src}
                    alt={`Technology ${(index % images2.length) + 1}`}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Third row */}
          <div className="marquee-row overflow-hidden flex whitespace-nowrap">
            <motion.div
              className="flex items-center gap-8 sm:gap-12 lg:gap-16 whitespace-nowrap opacity-50"
              animate={controlsRow3}
              style={{
                width: "fit-content",
                x: scrollDirection > 0 ? "0%" : "-100%",
              }}
            >
              {/* Double the images for continuous loop */}
              {[...images3, ...images3].map((src, index) => (
                <div
                  key={`row3-a-${index}`}
                  className="flex items-center justify-center w-[200px] h-[80px]"
                >
                  <img
                    src={src}
                    alt={`Technology ${(index % images3.length) + 1}`}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              className="flex items-center gap-8 sm:gap-12 lg:gap-16 whitespace-nowrap opacity-50"
              animate={controlsRow3}
              style={{
                width: "fit-content",
                x: scrollDirection > 0 ? "0%" : "-100%",
              }}
            >
              {/* Double the images for continuous loop */}
              {[...images3, ...images3].map((src, index) => (
                <div
                  key={`row3-b-${index}`}
                  className="flex items-center justify-center w-[200px] h-[80px]"
                >
                  <img
                    src={src}
                    alt={`Technology ${(index % images3.length) + 1}`}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
