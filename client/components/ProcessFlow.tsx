import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(titleRef.current, { y: -50, opacity: 0 });
      gsap.set(processRef.current, { scale: 0.8, opacity: 0 });

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate title
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      })
      // Animate process diagram
      .to(processRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.6");

      // Animate individual circles and labels with stagger
      const circles = containerRef.current?.querySelectorAll('.process-circle');
      const labels = containerRef.current?.querySelectorAll('.process-label');
      
      if (circles && labels) {
        gsap.set([circles, labels], { scale: 0, opacity: 0 });
        
        tl.to(circles, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)"
        }, "-=0.8")
        .to(labels, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "power3.out"
        }, "-=1");
      }

      // Add subtle floating animation to circles
      if (circles) {
        circles.forEach((circle, index) => {
          gsap.to(circle, {
            y: -10,
            duration: 2 + index * 0.3,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.5
          });
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const processSteps = [
    { number: '1', topLabel: 'R&D Begins', bottomLabel: 'Shaping the big picture' },
    { number: '2', topLabel: '', bottomLabel: '' },
    { number: '3', topLabel: '', bottomLabel: 'Wireframes' },
    { number: '4', topLabel: 'Agile Development in Motion', bottomLabel: '' },
    { number: '5', topLabel: '', bottomLabel: 'Product Launch' }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-[#040404] flex items-center justify-center px-4 sm:px-8 lg:px-16 xl:px-20"
      style={{ padding: 'clamp(60px, 10vw, 110px) clamp(20px, 5vw, 75px) 10px' }}
    >
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Title */}
        <div ref={titleRef} className="mb-12 lg:mb-16">
          <h1 
            className="font-lato font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight"
            style={{
              background: 'linear-gradient(90deg, #FFF 17.13%, #AC2A28 18.21%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: 'clamp(2.5rem, 6vw, 3.375rem)'
            }}
          >
            IT STARTS WITH
          </h1>
        </div>

        {/* Process Flow */}
        <div ref={processRef} className="relative">
          
          {/* Mobile Layout - Vertical */}
          <div className="block lg:hidden">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  
                  {/* Top Label */}
                  {step.topLabel && (
                    <div className="process-label mb-4">
                      <p className="font-montserrat text-white text-sm font-medium">
                        {step.topLabel}
                      </p>
                    </div>
                  )}
                  
                  {/* Circle */}
                  <div className="process-circle relative mb-4">
                    <div className="w-16 h-16 rounded-full border-2 border-app-red flex items-center justify-center bg-black">
                      <span className="font-lato text-white text-xl font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Bottom Label */}
                  {step.bottomLabel && (
                    <div className="process-label">
                      <p className="font-montserrat text-white text-sm font-medium">
                        {step.bottomLabel}
                      </p>
                    </div>
                  )}
                  
                  {/* Connector Line (except for last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="w-px h-8 bg-app-red opacity-50 mt-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Horizontal */}
          <div className="hidden lg:block">
            
            {/* Top Labels */}
            <div className="flex justify-between items-end mb-8 px-8">
              {processSteps.map((step, index) => (
                <div key={`top-${index}`} className="process-label flex-1 text-center">
                  {step.topLabel && (
                    <p className="font-montserrat text-white text-base font-medium">
                      {step.topLabel}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Circles and Connecting Lines */}
            <div className="relative flex items-center justify-between px-8 mb-8">
              
              {/* Background connecting line */}
              <div className="absolute inset-0 flex items-center px-16">
                <div className="w-full h-px bg-app-red opacity-30"></div>
              </div>

              {/* Circles */}
              {processSteps.map((step, index) => (
                <div key={`circle-${index}`} className="process-circle relative z-10">
                  <div className="w-20 h-20 rounded-full border-2 border-app-red flex items-center justify-center bg-[#040404]">
                    <span className="font-lato text-white text-2xl font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Labels */}
            <div className="flex justify-between items-start px-8">
              {processSteps.map((step, index) => (
                <div key={`bottom-${index}`} className="process-label flex-1 text-center">
                  {step.bottomLabel && (
                    <p className="font-montserrat text-white text-base font-medium">
                      {step.bottomLabel}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
