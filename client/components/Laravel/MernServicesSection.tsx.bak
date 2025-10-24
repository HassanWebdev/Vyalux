import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type ServiceItem = {
  title: string;
  description: string;
};

const serviceItems: ServiceItem[] = [
  {
    title: "Custom Web Application Development",
    description: "Whether it's a SaaS platform, enterprise dashboard, or content management system, we deliver high-performing solutions."
  },
  {
    title: "MERN-Based Progressive Web Apps (PWAs)",
    description: "Build mobile-like web apps with our PWA solutions. We use React.js for the frontend and Node.js on the backend to craft swift, installable, and offline-ready applications."
  },
  {
    title: "AI & Real-Time App Integration",
    description: "Leverage the real strength of real-time with MERN. We are experts at developing live chat features and real-time dashboards."
  },
  {
    title: "Cloud-Native MERN Applications",
    description: "We develop installable MERN stack apps optimized for deployment on Azure, AWS, or Google Cloud. Our solutions are designed with containerization and CI/CD pipelines to guarantee performance, flexibility, and easy scaling."
  },
  {
    title: "API-First Architecture & Microservices",
    description: "We are experts at building RESTful and GraphQL APIs using Express and Node.js, fostering easy integration and seamless multi-platform support."
  }
];

export default function MernServicesSection() {
  useEffect(() => {
    // MERN Services Sticky Scroll Animation (matching home page AI section)
    const mernSection = document.querySelector('.mern-services-section');
    const mernStickyContent = document.querySelector('.mern-sticky-content');
    const mernServiceItems = document.querySelectorAll('.mern-service-item');

    if (mernSection && mernStickyContent && mernServiceItems.length > 0) {
      // Create the sticky scroll effect
      gsap.set(mernServiceItems, { opacity: 0, y: 50 });
      
      mernServiceItems.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center+=150",
          end: "bottom center",
          onEnter: () => {
            gsap.to(item, {
              opacity: 1, 
              y: 0,
              duration: 0.7, 
              ease: "power3.out"
            });
          },
          onLeaveBack: () => {
            gsap.to(item, {
              opacity: 0,
              y: 50,
              duration: 0.5,
              ease: "power3.in"
            });
          }
        });
      });
    }

    return () => {
      // Cleanup scrolltriggers when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div className="mern-services-section bg-[#040404] relative min-h-[200vh] sm:min-h-[250vh] lg:min-h-[300vh]">
      <div className="sticky-wrapper relative px-4 sm:px-6 lg:px-16 xl:px-[70px]">
        <div className="w-full pt-8 sm:pt-16 lg:pt-28">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 sm:gap-12 lg:gap-20">
            {/* Left Side - Sticky Content */}
            <div className="mern-sticky-content w-full lg:w-1/2 h-auto lg:h-screen flex items-center justify-center lg:justify-start">
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full text-center lg:text-left">
                {/* Title */}
                <div className="flex flex-col justify-center items-center lg:items-start">
                  <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[49.64px] font-bold leading-tight uppercase">
                    <span className="text-white">Explore </span>
                    <span className="text-[#AB322C]">W</span>
                    <span className="text-white">hat Else We Offer </span>
                    <span className="text-[#AB322C]">In </span>
                    <span className="text-white">Mernst</span>
                    <span className="text-[#AB322C]">ack </span>
                    <span className="text-white">Develop</span>
                    <span className="text-[#AB322C]">ment </span>
                    <span className="text-white">Services</span>
                  </h2>
                </div>
              </div>
            </div>

            {/* Right Side - Scrolling Content */}
            <div className="mern-scroll-content w-full lg:w-1/2 relative flex items-start justify-center">
              <div className="flex flex-col space-y-[30vh] sm:space-y-[35vh] lg:space-y-[40vh] pb-[50vh] w-full max-w-md">
                {serviceItems.map((item, index) => (
                  <ServiceItem 
                    key={index}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ServiceItemProps {
  title: string;
  description: string;
}

function ServiceItem({ title, description }: ServiceItemProps) {
  return (
    <div className="mern-service-item flex items-center justify-center lg:justify-start min-h-[40vh] sm:min-h-[45vh] lg:min-h-[50vh]">
      <div className="flex flex-col gap-3 sm:gap-4 w-full text-center lg:text-left">
        <div className="flex items-start gap-4 sm:gap-6 justify-center lg:justify-start">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-400 rounded-sm flex-shrink-0 mt-1"></div>
          <h3 className="text-white font-montserrat text-base sm:text-lg lg:text-xl font-semibold leading-6 sm:leading-7">
            {title}
          </h3>
        </div>
        <p className="text-white font-montserrat text-sm sm:text-lg lg:text-xl leading-6 sm:leading-7 max-w-full">
          {description}
        </p>
      </div>
    </div>
  );
}
