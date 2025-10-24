import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FAQItem } from "../data/faqData";

// Ensure GSAP plugins are registered
gsap.registerPlugin(ScrollTrigger);

// Component props interface
interface FAQProps {
  faqData: FAQItem[];
  className?: string;
  title?: string;
  description?: string;
}

const FAQ = ({ 
  faqData, 
  className = "",
  title = "FAQs",
  description = "Got questions? We've got answers! Check out our FAQ section where we break down the most common questions in an easy-to-understand, friendly manner. Whether you're seeking quick info or in-depth insights, our FAQs provide clear, helpful guidance. Dive in and get informed!"
}: FAQProps) => {
  // State for tracking which FAQ item is open
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Refs for animation targets
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Toggle FAQ item open/close
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Set up animations
  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !descriptionRef.current || itemsRef.current.length === 0) {
      return;
    }

    const isMobile = window.matchMedia('(max-width: 639px)').matches;
    const items = itemsRef.current.filter(el => el);

    if (isMobile) {
      // Mobile: show everything immediately, skip ScrollTrigger
      gsap.set([titleRef.current, descriptionRef.current, ...items], {
        opacity: 1,
        y: 0
      });
      return; // Skip desktop animation setup
    }

    // Desktop / larger screens animation
    gsap.set([titleRef.current, descriptionRef.current], {
      opacity: 0,
      y: 50
    });

    gsap.set(items, {
      opacity: 0,
      y: 30
    });

    // Create timeline for FAQ section
    const faqTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    faqTl
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4")
      .to(items, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: { amount: 0.8, from: "start" }
      }, "-=0.2");
      
    // Cleanup function to kill animations when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className={`faq-section bg-[#040404] relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16 xl:px-20 ${className}`}>
      {/* Background Image Container */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
        className=" lg:w-[50%]"
      >
        <div style={{ 
          position: 'sticky', 
          top: 0, 
          height: '100vh', 
          width: '100%' 
        }}>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/56b4c97c62e3ae9614d9dcd78fe87da454ea1848?width=1578"
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 1
            }}
          />
        </div>
      </div>
      
      {/* Main Content Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
        {/* Left Side - Title & Description */}
        <div className="w-full">
          <div className="space-y-8 lg:space-y-10">
            {/* Title */}
            <h2 
              ref={titleRef} 
              className="faq-title font-montserrat text-4xl sm:text-5xl lg:text-[50px] font-bold text-[#F2F2F2] uppercase leading-tight"
            >
              {title}
            </h2>

            {/* Description */}
            <div ref={descriptionRef} className="faq-description">
              <p className="text-[#F2F2F2] text-lg sm:text-xl font-montserrat leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - FAQ Items */}
        <div className="w-full">
          <div className="faq-container space-y-0">
            {faqData.map((faq, index) => (
              <div 
                key={faq.id} 
                className="faq-item"
                ref={el => itemsRef.current[index] = el}
              >
                {/* FAQ Question */}
                <div 
                  className={`flex justify-between items-start py-6 lg:py-8 ${index > 0 ? 'border-t border-white/20' : ''} cursor-pointer group`} 
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex-1 pr-4 lg:pr-12">
                    <h3 className="text-[#F2F2F2] text-base sm:text-lg font-montserrat font-semibold leading-tight">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Button */}
                  <button className="flex-shrink-0 w-9 h-9 rounded-full border border-[#F2F2F2] flex items-center justify-center transition-all duration-300 group-hover:bg-white/10">
                    <svg
                      className={`w-3 h-3 text-white transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                      viewBox="0 0 10 11"
                      fill="none"
                    >
                      <path
                        d="M1.66675 6.19353L5.00008 9.52686L8.33341 6.19353M1.66675 1.52686L5.00008 4.86019L8.33341 1.52686"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* FAQ Answer */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaqIndex === index ? 'max-h-96 opacity-100 pb-6 lg:pb-8' : 'max-h-0 opacity-0'}`}>
                  <div className="pr-4 lg:pr-16">
                    <p className="text-[#F2F2F2]/80 text-sm sm:text-base font-montserrat leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
