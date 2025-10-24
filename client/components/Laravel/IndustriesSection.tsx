import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define data types
type Industry = {
  title: string;
  description: string;
};

interface IndustriesSectionProps {
  industries?: Industry[];
  accentColor?: string;
}

export default function IndustriesSection({
  industries = [],
  accentColor = "#AB322C"
}: IndustriesSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Default industries if none are provided
  const defaultIndustries: Industry[] = [
    {
      title: "E-commerce",
      description: "Build a seamless, user-friendly shopping experience"
    },
    {
      title: "Healthcare",
      description: "Guaranteed security with HIPAA-compliant mobile apps"
    },
    {
      title: "Education",
      description: "Build E-learning platforms with powerful tools"
    },
    {
      title: "Finance",
      description: "Safe and secure payment solutions"
    },
    {
      title: "Logistics",
      description: "Real-time tracking and transportation management"
    }
  ];

  // Use provided industries or default ones
  const industriesList = industries.length > 0 ? industries : defaultIndustries;

  // Split industries into groups of 3 for each slide
  const industrySlides: Industry[][] = [];
  for (let i = 0; i < industriesList.length; i += 3) {
    industrySlides.push(industriesList.slice(i, i + 3));
  }
  
  // Make sure we have at least one slide, even if empty
  if (industrySlides.length === 0) {
    industrySlides.push([]);
  }

  const totalSlides = industrySlides.length;

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % totalSlides;
    setCurrentSlide(newSlide);
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: `-${newSlide * (100 / totalSlides)}%`,
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => {
          // Refresh ScrollTrigger after slide animation completes
          ScrollTrigger.refresh();
        }
      });
    }
  };

  const prevSlide = () => {
    const newSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: `-${newSlide * (100 / totalSlides)}%`,
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => {
          // Refresh ScrollTrigger after slide animation completes
          ScrollTrigger.refresh();
        }
      });
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: `-${index * (100 / totalSlides)}%`,
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => {
          // Refresh ScrollTrigger after slide animation completes
          ScrollTrigger.refresh();
        }
      });
    }
  };
  
  // Inline hover handlers to avoid dynamic Tailwind arbitrary color classes being purged
  const handleArrowEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.currentTarget.style.backgroundColor = accentColor);
    (e.currentTarget.style.borderColor = accentColor);
  };
  const handleArrowLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.borderColor = '#939498';
  };

  // Initialize ScrollTrigger when component mounts
  useEffect(() => {
    // Refresh ScrollTrigger to make sure animations work
    ScrollTrigger.refresh();
    
    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative z-10 bg-[#040404] px-4  sm:px-6 lg:px-16 xl:px-[70px]  ">
      <div className="w-full">
        {/* Section Title */}
        <div className="mb-12 lg:mb-[59px]">
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl xl:text-[49.64px] font-bold leading-tight uppercase">
            <span className="text-white">Industries </span>
            <span style={{ color: accentColor }}>WE</span>
            <span style={{ color: accentColor }} className="text-white"> Cover</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[80px]">
          {/* Industries Carousel */}
          <div className="relative overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-800 ease-out"
              style={{
                width: `${totalSlides * 100}%`,
                transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`
              }}
            >
              {industrySlides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 px-4 sm:px-6 lg:px-0"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[80px] w-full">
                    {slide.map((industry, index) => (
                      <IndustryCard 
                        key={`${slideIndex}-${index}`}
                        title={industry.title}
                        description={industry.description}
                        index={index} // Pass the index for staggered animation
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            {/* Pagination Dots */}
            <div className="flex gap-2 sm:gap-4 items-center">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-8 sm:w-12 h-1 rounded transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-[#F2F2F2]"
                      : "bg-[rgba(148,148,148,0.8)] hover:bg-[rgba(148,148,148,1)]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                onClick={prevSlide}
                onMouseEnter={handleArrowEnter}
                onMouseLeave={handleArrowLeave}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#939498] flex items-center justify-center text-white transition-all duration-300 active:scale-95"
                aria-label="Previous slide"
              >
                <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <span className="text-white font-montserrat text-sm sm:text-base">
                {currentSlide + 1} / {totalSlides}
              </span>

              <button
                onClick={nextSlide}
                onMouseEnter={handleArrowEnter}
                onMouseLeave={handleArrowLeave}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#939498] flex items-center justify-center text-white transition-all duration-300 active:scale-95"
                aria-label="Next slide"
              >
                <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface IndustryCardProps {
  title: string;
  description: string;
  index?: number;
}

function IndustryCard({ title, description, index = 0 }: IndustryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const isMobile = window.matchMedia('(max-width: 639px)').matches;
    if (isMobile) {
      // Skip animation on mobile: ensure visible immediately
      card.style.opacity = '1';
      card.style.transform = 'none';
      return;
    }

    // Initial hidden state for desktop/tablet
    gsap.set(card, { y: 50, opacity: 0 });

    const anim = gsap.to(card, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      delay: index * 0.2,
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        end: 'bottom center',
        toggleActions: 'play none none none'
      }
    });

    return () => {
      anim.scrollTrigger && anim.scrollTrigger.kill();
      anim.kill();
    };
  }, [index]);

  return (
    <div ref={cardRef} className="flex flex-col gap-4 sm:gap-5 lg:gap-[20px] w-full">
      {/* Industry Header */}
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-[20px]">
        <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[22.704px] bg-[#939498] rounded-[4px] flex-shrink-0"></div>
        <h3 className="text-white font-montserrat text-base sm:text-lg lg:text-[20px] font-normal leading-6 sm:leading-7 lg:leading-[28px]">
          {title}
        </h3>
      </div>

      {/* Industry Description */}
      <p className="text-white font-montserrat text-sm sm:text-base lg:text-[20px] font-normal leading-5 sm:leading-6 lg:leading-[28px]">
        {description}
      </p>
    </div>
  );
}
