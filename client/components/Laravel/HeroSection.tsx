import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { AnimatedBlobButton } from "../ui/animated-blob-button";
import { Link } from "react-router-dom";

export interface HeroSectionProps {
  title: {
    lines: string[];
  };
  description?: string;
  buttonText?: string;
  imageSrc?: string;
  imageAlt?: string;
  accentColor?: string;
  backgroundColor?: string;
  textColor?: string;
  onButtonHover?: () => void;
  onButtonLeave?: () => void;
}

export default function HeroSection({
  title = {
    lines: [
      "EXPAND YOUR DIGITAL EXISTENCE",
      "WITH LARAVEL-POWERED",
      "WEBSITES & APPS",
    ],
  },
  description = "Harness the power of Laravel to encompass next-gen, ingenious web solutions with responsive UIs, modular architecture, and security-oriented.",
  buttonText = "CONNECT WITH EXPERTS",
  imageSrc = "https://cdn.builder.io/api/v1/image/assets%2Fd97e508588be4bd3aa8e253089ddaba6%2F7a5781aa5faa4d108ce1e96abd1cdee6?format=webp&width=800",
  imageAlt = "Laravel Development Illustration",
  accentColor = "#AB322C",
  backgroundColor = "transparent",
  textColor = "white",
  onButtonHover = () => {},
  onButtonLeave = () => {},
}: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  // NEW: refs + state for responsive natural image sizing
  const imgRef = useRef<HTMLImageElement>(null);
  const [naturalSize, setNaturalSize] = useState<{
    w: number;
    h: number;
  } | null>(null);
  const [displayWidth, setDisplayWidth] = useState<number | null>(null);
  const MOBILE_BREAKPOINT = 768; // px

  const scrollToContact = () => {
    const target = document.getElementById("contact-section");
    if (target) {
      const header = document.querySelector("header");
      const headerOffset = header
        ? (header as HTMLElement).getBoundingClientRect().height
        : 0;
      const y =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset -
        16;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero text animation
    tl.from(".hero-line", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });

    tl.from(
      ".hero-button",
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5",
    );

    // Right side image animation - pop out effect (scale 0 to 1)
    tl.from(
      ".hero-image",
      {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        transformOrigin: "center center",
      },
      "-=0.3",
    );
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (!naturalSize) return;
      const vw = window.innerWidth;
      // On mobile: keep original (natural) size (will auto shrink via max-w-full if viewport narrower)
      if (vw <= MOBILE_BREAKPOINT) {
        setDisplayWidth(naturalSize.w);
        return;
      }
      // Between mobile and 1440: scale proportionally
      const scaled = (vw / 1440) * naturalSize.w;
      const finalW = Math.min(scaled, naturalSize.w); // never exceed natural
      setDisplayWidth(finalW);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [naturalSize]);

  const handleImgLoad = () => {
    if (imgRef.current && !naturalSize) {
      setNaturalSize({
        w: imgRef.current.naturalWidth,
        h: imgRef.current.naturalHeight,
      });
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative w-full lg:h-[calc(100vh-80px)] mt-10 lg:mt-0 z-10 px-2 xs:px-4 sm:px-6 lg:px-16 xl:px-[70px] 2xl:px-[90px] flex items-center"
      style={{ backgroundColor }}
    >
      <div className="w-full max-w-[1440px] 2xl:max-w-none mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between max-[1350px]:gap-8 max-[1168px]:gap-6 max-[1020px]:gap-10 2xl:gap-0">
          {/* Left Content */}
          <div className="flex flex-col w-full lg:max-w-[994px] 2xl:max-w-[1100px] text-center lg:text-left">
            {/* Red line accent */}
            <div
              className="hero-line w-[70px] sm:w-[85px] lg:w-[100px] max-[1020px]:w-[90px] h-[4px] sm:h-[5px] lg:h-[6px] mb-[15px] sm:mb-[32px] max-[1020px]:mb-[48px] mx-auto lg:mx-0"
              style={{ backgroundColor: accentColor }}
            ></div>

            {/* Main heading */}
            <div className="mb-[clamp(16px,4vw,50px)] max-[1020px]:mb-[clamp(20px,5vw,56px)]">
              <h1
                className="font-bold leading-[1.3] sm:leading-[1.4] lg:leading-[1.45] max-w-full max-[1020px]:max-w-none uppercase font-montserrat tracking-tight text-[clamp(18px,2.85vw,48px)] max-[1350px]:text-[clamp(20px,2.6vw,46px)] max-[1168px]:text-[clamp(18px,2.6vw,42px)] max-[1020px]:text-[clamp(20px,5.2vw,50px)] max-[1020px]:leading-[1.35] 2xl:text-[52px]"
                style={{ color: textColor }}
              >
                {title.lines.map((line, index) => (
                  <span key={index} className="hero-line block uppercase">
                    {line}
                  </span>
                ))}
              </h1>
            </div>

            {/* Description */}
            <div className="mb-[clamp(24px,4vw,50px)] max-[1020px]:mb-[clamp(20px,4.5vw,48px)]">
              <p
                className="hero-line font-semibold leading-[1.5] sm:leading-[1.6] max-w-[812px] max-[1020px]:max-w-none mx-auto lg:mx-0 font-montserrat text-[clamp(12px,1.35vw,19px)] max-[1350px]:text-[clamp(12px,1.25vw,18px)] max-[1168px]:text-[clamp(11px,1.1vw,17px)] max-[1020px]:text-[clamp(13px,2.2vw,20px)] max-[1020px]:leading-[1.7]"
                style={{ color: textColor }}
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            </div>

            {/* CTA Button */}
            <div className="hero-button ">
              <Link to={"/contact-us"}>
                <AnimatedBlobButton
                  blobColor={accentColor}
                  textColor={textColor}
                  className="w-[clamp(200px,60vw,260px)] sm:w-[300px] lg:w-[360px] xl:w-[366px] max-[1020px]:w-[360px] h-[40px] sm:h-[44px] xl:h-[46px]"
                  onHoverStart={onButtonHover}
                  onHoverEnd={onButtonLeave}
                  // onClick={scrollToContact}
                >
                  {buttonText}
                </AnimatedBlobButton>
              </Link>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="w-full lg:min-w-[500px] lg:flex-1  flex justify-center lg:justify-end items-center relative mt-8 lg:mt-0">
            <div
              className="relative hero-image max-w-full"
              style={{
                width: displayWidth ? `${displayWidth}px` : 471,
                maxWidth: naturalSize ? `${naturalSize.w}px` : 265,
              }}
            >
              <img
                ref={imgRef}
                src={imageSrc}
                alt={imageAlt}
                onLoad={handleImgLoad}
                className="block w-full h-auto object-contain border-none outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
