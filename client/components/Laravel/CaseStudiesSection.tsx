// import { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

// export default function CaseStudiesSection() {
//   useEffect(() => {
//     const isMobile = window.matchMedia('(max-width: 639px)').matches;

//     const caseStudiesSection = document.querySelector('.case-studies-section');
//     const caseStudyCards = document.querySelectorAll('.case-study-card');
//     const titleEl = document.querySelector('.case-studies-title');

//     // Mobile fallback: show everything immediately and skip ScrollTriggers
//     if (isMobile) {
//       if (titleEl) gsap.set(titleEl, { opacity: 1, y: 0 });
//       caseStudyCards.forEach(card => {
//         gsap.set(card, { opacity: 1, y: 0 });
//         const image = card.querySelector('img:not([alt*="Logo"])');
//         if (image) gsap.set(image, { scale: 1 }); // no initial zoom on mobile
//       });
//       return; // skip desktop animation logic
//     }

//     // Top Case Studies Section Animations (matching home page exactly)
//     if (caseStudiesSection && caseStudyCards.length > 0) {
//       const caseStudiesTrigger = ScrollTrigger.create({
//         trigger: caseStudiesSection,
//         start: "top 80%",
//         end: "bottom 20%",
//         onEnter: () => {
//           gsap.to(".case-studies-title", {
//             opacity: 1,
//             y: 0,
//             duration: 1,
//             ease: "power3.out"
//           });

//           gsap.to(caseStudyCards, {
//             opacity: 1,
//             y: 0,
//             stagger: 0.15,
//             duration: 0.8,
//             ease: "power3.out",
//             delay: 0.3
//           });
//         }
//       });

//       // Enhanced hover animations for each card
//       caseStudyCards.forEach((card) => {
//         const image = card.querySelector('img:not([alt*="Logo"])');
//         const logo = card.querySelector('.logo-container');
//         const svg = card.querySelector('svg');

//         if (card instanceof HTMLElement) {
//           // Initial setup for animation - images initially zoomed in
//           gsap.set(card, { opacity: 0, y: 30 });
          
//           if (image) {
//             gsap.set(image, { scale: 1.15 });
//           }

//           // Mouse enter animation - zoom out images and hide logos
//           card.addEventListener('mouseenter', () => {
//             if (image) {
//               gsap.to(image, {
//                 scale: 1,
//                 duration: 0.5,
//                 ease: "power2.out"
//               });
//             }

//             if (logo) {
//               gsap.to(logo, {
//                 opacity: 0, // Change from 1 to 0 to hide logos on hover
//                 duration: 0.4,
//                 ease: "power2.out"
//               });
//             }
//           });

//           // Mouse leave animation - return to zoomed in state and show logos
//           card.addEventListener('mouseleave', () => {
//             if (image) {
//               gsap.to(image, {
//                 scale: 1.15,
//                 duration: 0.5,
//                 ease: "power2.out"
//               });
//             }

//             if (logo) {
//               gsap.to(logo, {
//                 opacity: 0.85, // Return to original opacity when not hovering
//                 duration: 0.4,
//                 ease: "power2.out"
//               });
//             }
//           });
//         }
//       });
//     }

//     return () => {
//       // Cleanup
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);
  
//   return (
//     <div className="case-studies-section bg-[#040404] relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-[70px] xl:px-[70px]  overflow-hidden">
//       <div className="w-full mx-auto">
//         {/* Section Title */}
//         <div className="case-studies-title flex justify-center mb-10 lg:mb-16">
//           <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl xl:text-[40px] font-bold text-white uppercase text-center">
//             TOP CASE STUDIES
//           </h2>
//         </div>

//         {/* Case Studies Grid - Fully responsive 3-2-3 layout */}
//         <div className="case-studies-grid grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full 
//           lg:grid lg:grid-cols-6 lg:gap-5 xl:gap-6 3xl:gap-8
//           max-w-none mx-auto">
//           {/* First row - 3 cards */}
//           <CaseStudyCard 
//             imageSrc="/WP/img8.png"
//             logoSrc="https://api.builder.io/api/v1/image/assets/TEMP/38bdec27a8baa8114d5a887f6741998700015c3c?width=244"
//             altText="Belgrade Liquor Case Study"
//             logoAltText="Belgrade Liquor Logo"
//             className="lg:col-span-2 lg:h-[320px] xl:h-[352px] 2xl:h-[420px] 3xl:h-[min(calc(50vw/3),560px)]"
//           />

//           <CaseStudyCard 
//             imageSrc="/WP/img4.png"
//             logoSrc="https://api.builder.io/api/v1/image/assets/TEMP/eaea5cb64cbc198c15c6a0c081c15594a46e0070?width=320"
//             altText="Premiere Baby Imaging Case Study"
//             logoAltText="Premiere Baby Imaging Logo"
//             className="lg:col-span-2 lg:h-[320px] xl:h-[352px] 2xl:h-[420px] 3xl:h-[min(calc(50vw/3),560px)]"
//           />

//           <CaseStudyCard 
//             imageSrc="/WP/img3.png"
//             altText="Trail Trailer Case Study"
//             className="lg:col-span-2 lg:h-[320px] xl:h-[352px] 2xl:h-[420px] 3xl:h-[min(calc(50vw/3),560px)]"
//             logoSvg={
//               <svg className="w-full h-auto max-w-[80%]" width="161" height="106" viewBox="0 0 161 106" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <g clipPath="url(#clip0_3009_12215)">
//                   <path d="M0.978333 0.591064V105.527H160.978V0.591064H0.978333ZM155.361 100.105L155.328 100.138H6.66113V6.01258H155.361V100.105ZM66.0365 36.3208C66.0365 37.7578 65.1547 38.5417 63.587 38.5417H61.4968V34.0999H63.587C65.1547 34.0999 66.0365 34.8838 66.0365 36.3208ZM144.779 16.3984H17.1449V61.1095H144.779V16.3984ZM44.5791 49.3194H37.3939V38.5417H44.5791V49.3194ZM50.5885 35.0797H37.3939H31.3845V28.5805H50.5885V35.0797ZM65.7426 49.3194L63.2931 43.7999H61.5948V49.3194H54.475V28.5805H64.7301C69.9883 28.5805 73.189 31.4872 73.189 36.1902C73.189 40.8932 72.0786 41.0891 70.1516 42.3955L73.6136 49.3194H65.7426ZM91.0212 49.3194H90.9885L90.0741 46.7393H83.9994L83.0849 49.3194H75.6058L83.3135 28.5805H90.7926L98.5329 49.3194H91.0212ZM109.409 49.3194H102.223V28.5805H109.409V49.3194ZM129.952 49.3194H114.895V28.5805H122.081V42.7874H129.952V49.3194ZM87.102 36.3208L88.931 42.0036H85.1751L86.9714 36.3208H87.102ZM56.8591 76.329C56.8591 71.626 53.6585 68.7193 48.4003 68.7193H38.1451V89.4582H45.2649V83.9387H46.9632L49.4127 89.4582H57.2837L53.8218 82.5343C55.7487 81.2279 56.8591 81.032 56.8591 76.329ZM47.2572 78.6805H45.1669V74.2387H47.2572C48.8248 74.2387 49.7066 75.0226 49.7066 76.4596C49.7066 77.8966 48.8248 78.6805 47.2572 78.6805ZM65.22 68.7193L57.5123 89.4582H64.9914L65.9059 86.8781H71.9806L72.8951 89.4582H80.4068L72.6664 68.7193H65.22ZM67.049 82.1424L68.8452 76.4596H68.9759L70.8048 82.1424H67.049ZM81.7458 68.7193H88.931V89.4582H81.7458V68.7193ZM99.2188 82.9262H107.09V89.4908H92.0336V68.7193H99.2188V82.9262ZM116.071 84.0367H124.334V89.4255H109.115V68.7193H124.04V74.0101H116.071V76.3943H123.256V81.5545H116.071V84.0367ZM145.465 76.329C145.465 71.626 142.264 68.7193 137.006 68.7193H126.751V89.4582H133.871V83.9387H135.569L138.019 89.4582H145.89L142.428 82.5343C144.355 81.2279 145.465 81.032 145.465 76.329ZM135.863 78.6805H133.773V74.2387H135.863C137.431 74.2387 138.312 75.0226 138.312 76.4596C138.312 77.8966 137.431 78.6805 135.863 78.6805ZM36.0222 75.2185H16.8183V68.7167H36.0222V75.2185Z" fill="white"/>
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_3009_12215">
//                     <rect width="160" height="104.936" fill="white" transform="translate(0.978333 0.591064)"/>
//                   </clipPath>
//                 </defs>
//               </svg>
//             }
//           />

//           {/* Second row - 2 cards side by side */}
//           <CaseStudyCard 
//             imageSrc="/WP/img2.png"
//             logoSrc="https://api.builder.io/api/v1/image/assets/TEMP/babaa53b5bce10a36be352f0bac1b01d77d379d6?width=225"
//             altText="Revel Roll Case Study"
//             logoAltText="Revel Roll Logo"
//             className="lg:col-span-3 lg:h-[320px] xl:h-[352px] 2xl:h-[420px] 3xl:h-[min(calc(50vw/3),560px)] hidden lg:block"
//           />

//           <CaseStudyCard 
//             imageSrc="/WP/img1.png"
//             logoSrc="https://api.builder.io/api/v1/image/assets/TEMP/dc9ac8d94fcd10ffdd229946ef09c8d3e43cadf3?width=320"
//             altText="Dressage Adventures Case Study"
//             logoAltText="Dressage Adventures Logo"
//             className="lg:col-span-3 lg:h-[320px] xl:h-[352px] 2xl:h-[420px] 3xl:h-[min(calc(50vw/3),560px)] hidden lg:block"
//           />

//           {/* Mobile/tablet versions of wide cards */}
//           <CaseStudyCard 
//             imageSrc="/WP/img2.png"
//             logoSrc="https://api.builder.io/api/v1/image/assets/TEMP/babaa53b5bce10a36be352f0bac1b01d77d379d6?width=225"
//             altText="Revel Roll Case Study"
//             logoAltText="Revel Roll Logo"
//             className="lg:hidden"
//           />

//           <CaseStudyCard 
//             imageSrc="/WP/img1.png"
//             logoSrc="https://api.builder.io/api/v1/image/assets/TEMP/dc9ac8d94fcd10ffdd229946ef09c8d3e43cadf3?width=320"
//             altText="Dressage Adventures Case Study"
//             logoAltText="Dressage Adventures Logo"
//             className="lg:hidden"
//           />

//           {/* Third row - 3 cards */}
//           <CaseStudyCard 
//             imageSrc="/WP/img7.png"
//             logoSrc="https://api.builder.io/api/v1/image/assets/TEMP/d7f738bdf192f19169b7cb60ec50b9d6cea1d5ec?width=320"
//             altText="Thought Gym Case Study"
//             logoAltText="Thought Gym Logo"
//             className="lg:col-span-2 lg:h-[320px] xl:h-[352px] 2xl:h-[420px] 3xl:h-[min(calc(50vw/3),560px)]"
//           />

//           <CaseStudyCard 
//             imageSrc="/WP/img6.png"
//             logoSrc="https://api.builder.io/api/v1/image/assets/TEMP/6607ab653c4735d46be2ec54c98429e821a422d0?width=320"
//             altText="NCCS Case Study"
//             logoAltText="NCCS Logo"
//             className="lg:col-span-2 lg:h-[320px] xl:h-[352px] 2xl:h-[420px] 3xl:h-[min(calc(50vw/3),560px)]"
//           />

//           <CaseStudyCard 
//             imageSrc="/WP/img5.png"
//             logoSrc="https://api.builder.io/api/v1/image/assets/TEMP/edd80e80c4881b9694b58d22abee4f95bba1e41d?width=224"
//             altText="Crafted Copper Case Study"
//             logoAltText="Crafted Copper Logo"
//             className="lg:col-span-2 lg:h-[320px] xl:h-[352px] 2xl:h-[420px] 3xl:h-[min(calc(50vw/3),560px)]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// interface CaseStudyCardProps {
//   imageSrc: string;
//   logoSrc?: string;
//   logoSvg?: React.ReactNode;
//   altText: string;
//   logoAltText?: string;
//   className?: string;
// }

// function CaseStudyCard({ imageSrc, logoSrc, logoSvg, altText, logoAltText, className = "" }: CaseStudyCardProps) {
//   return (
//     <div className={`case-study-card relative rounded-2xl overflow-hidden cursor-pointer will-change-transform w-full  h-[220px] sm:h-[260px] md:h-[300px] ${className}`}>
//       <img
//         src={imageSrc}
//         alt={altText}
//         className="absolute inset-0 w-full h-full object-cover will-change-transform"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//       <div className="logo-container absolute bottom-6 left-6 sm:bottom-8 sm:left-8 opacity-85 pointer-events-none will-change-transform">
//         {logoSrc && (
//           <img
//             src={logoSrc}
//             alt={logoAltText || "Logo"}
//             className="w-auto h-auto max-w-[160px]"
//           />
//         )}
//         {logoSvg && <div className="w-[160px]">{logoSvg}</div>}
//       </div>
//     </div>
//   );
// }
import React from 'react'

function CaseStudiesSection() {
  return (
    <div>
      
    </div>
  )
}

export default CaseStudiesSection

