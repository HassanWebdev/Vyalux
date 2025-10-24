// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { useNavigate } from "react-router-dom";

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// type MenuLevel =
//   | "main"
//   | "services"
//   | "website-development"
//   | "app-development";

// export default function Sidebar({ isOpen, onClose }: SidebarProps) {
//   const overlayRef = useRef<HTMLDivElement>(null);
//   const shutterRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const menuItemsRef = useRef<HTMLDivElement[]>([]);
//   const logoRef = useRef<HTMLDivElement>(null);
//   const contactRef = useRef<HTMLDivElement>(null);
//   const socialRef = useRef<HTMLDivElement>(null);
//   const [currentMenu, setCurrentMenu] = useState<MenuLevel>("main");
//   const navigate = useNavigate();

//   // Shutter animation effect and body scroll prevention
//   useEffect(() => {
//     if (overlayRef.current && shutterRef.current && contentRef.current) {
//       if (isOpen) {
//         // Prevent body scroll but allow sidebar to scroll using a less restrictive approach
//         document.body.style.overflow = "hidden";

//         // Set initial state
//         gsap.set(overlayRef.current, { display: "block" });
//         gsap.set(shutterRef.current, { scaleY: 0, transformOrigin: "top" });
//         gsap.set(contentRef.current, { opacity: 0, y: 50 });
//         gsap.set(menuItemsRef.current, { opacity: 0, x: -30 });

//         // Shutter opening animation
//         const timeline = gsap.timeline();

//         timeline
//           .to(shutterRef.current, {
//             scaleY: 1,
//             duration: 0.8,
//             ease: "power3.out",
//           })
//           .to(
//             contentRef.current,
//             {
//               opacity: 1,
//               y: 0,
//               duration: 0.6,
//               ease: "power2.out",
//             },
//             "-=0.3",
//           );
//       } else if (overlayRef.current) {
//         // Restore body scroll
//         document.body.style.overflow = "";

//         // Closing animation
//         gsap.to(shutterRef.current, {
//           scaleY: 0,
//           duration: 0.6,
//           ease: "power3.in",
//           onComplete: () => {
//             gsap.set(overlayRef.current, { display: "none" });
//           },
//         });
//       }
//     }

//     // Cleanup function to restore scroll on unmount
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   const navigationItems = [
//     { name: "Services", href: "#services", hasSubmenu: true },
//     { name: "Case Studies", href: "#case-studies", hasSubmenu: false },
//     { name: "About", href: "#about", hasSubmenu: false },
//     { name: "Insights", href: "#insights", hasSubmenu: false },
//     { name: "Contact", href: "#contact", hasSubmenu: false },
//   ];

//   const servicesSubmenu = [
//     {
//       name: "Website Development",
//       href: "#website-development",
//       hasSubmenu: true,
//     },
//     { name: "App Development", href: "#app-development", hasSubmenu: true }, // New item
//     { name: "eCommerce", href: "#ecommerce", hasSubmenu: false },

//     { name: "Content Writing", href: "#content-writing", hasSubmenu: false },
//     {
//       name: "ES",
//       href: "#es",
//       hasSubmenu: true,
//     },
//   ];

//   const websiteDevelopmentSubmenu = [
//     { name: "Laravel", href: "/services/website-development/laravel" },
//     { name: "MERN Stack", href: "/services/website-development/mern-stack" },
//     { name: "React.js", href: "/services/website-development/react" },
//     { name: "Vue.js", href: "/services/website-development/vue" },
//     { name: "NestJS", href: "/services/website-development/nestjs" },
//     { name: "Angular", href: "/services/website-development/angular" },
//     {
//       name: "Python & Django",
//       href: "/services/website-development/python-django",
//     },
//     { name: "PHP", href: "/services/website-development/php" },
//     {
//       name: "Custom Software",
//       href: "/services/website-development/custom-software",
//     },
//     {
//       name: "QA (Manual & Automation)",
//       href: "/services/website-development/qa",
//     },
//     {
//       name: "SaaS Application Development",
//       href: "/services/website-development/saas",
//     },
//   ];

//   const appDevelopmentSubmenu = [
//     { name: "iOS Development", href: "/services/app-development/ios" },
//     { name: "Android Development", href: "/services/app-development/android" },
//     { name: "Flutter Development", href: "/services/app-development/flutter" },
//     { name: "React Native", href: "/services/app-development/react-native" },
//     { name: "PWA Development", href: "/services/app-development/pwa" },
//   ];

//   // New Es submenu section
//   const esSubmenu = [
//     { name: "Dedicated Team for SD", href: "/services/es/dedicated-team" },
//     {
//       name: "AI Engineer for Custom Projects",
//       href: "/services/es/ai-engineer",
//     },
//     {
//       name: "Digital Marketing Expert",
//       href: "/services/es/digital-marketing-expert",
//     },
//     {
//       name: "Quality Assurance Specialist",
//       href: "/services/es/qa-specialist",
//     },
//     { name: "Business Process Outsourcing", href: "/services/es/bpo" },
//   ];

//   // Update the handleNavigation function
//   const handleNavigation = (item: any) => {
//     if (item.name === "Services" && item.hasSubmenu) {
//       animateToSubmenu("services");
//     } else if (item.name === "Website Development" && item.hasSubmenu) {
//       animateToSubmenu("website-development");
//     } else if (item.name === "App Development" && item.hasSubmenu) {
//       animateToSubmenu("app-development");
//     } else if (item.href && item.href.startsWith("/")) {
//       // Navigate to page and close drawer
//       navigate(item.href);
//       setDrawerOpen(false);
//     } else {
//       // Handle anchor links or other navigation
//       setDrawerOpen(false);
//     }
//   };

//   const animateToSubmenu = (newMenu: MenuLevel) => {
//     // Animate current menu out
//     gsap.to(menuItemsRef.current, {
//       x: -50,
//       opacity: 0,
//       duration: 0.3,
//       ease: "power2.out",
//       onComplete: () => {
//         setCurrentMenu(newMenu);
//         // Reset array for new menu items
//         menuItemsRef.current = [];
//       },
//     });
//   };

//   const handleBackToMain = () => {
//     animateBack("main");
//   };

//   const handleBackToServices = () => {
//     animateBack("services");
//   };

//   const animateBack = (targetMenu: MenuLevel) => {
//     // Animate current menu out
//     gsap.to(menuItemsRef.current, {
//       x: 50,
//       opacity: 0,
//       duration: 0.3,
//       ease: "power2.out",
//       onComplete: () => {
//         setCurrentMenu(targetMenu);
//         // Reset array for new menu items
//         menuItemsRef.current = [];
//       },
//     });
//   };

//   // Reset menu to main when sidebar closes
//   useEffect(() => {
//     if (!isOpen) {
//       setCurrentMenu("main");
//     }
//   }, [isOpen]);

//   const getCurrentMenuItems = () => {
//     switch (currentMenu) {
//       case "services":
//         return servicesSubmenu;
//       case "website-development":
//         return websiteDevelopmentSubmenu;
//       case "app-development":
//         return appDevelopmentSubmenu;
//       case "es":
//         return esSubmenu;
//       default:
//         return navigationItems;
//     }
//   };

//   const getMenuTitle = () => {
//     switch (currentMenu) {
//       case "services":
//         return "Services";
//       case "website-development":
//         return "Website Development";
//       case "app-development":
//         return "App Development";
//       case "es":
//         return "Enterprise Services";
//       default:
//         return null;
//     }
//   };

//   const getBackButtonText = () => {
//     switch (currentMenu) {
//       case "services":
//         return "Main Menu";
//       case "website-development":
//       case "app-development":
//         return "Services";
//       case "Enterprise Services":
//         return "Services";
//       default:
//         return "";
//     }
//   };

//   // Animate in new menu items when menu changes
//   useEffect(() => {
//     if (isOpen && menuItemsRef.current.length > 0) {
//       // Set initial state for new menu items
//       gsap.set(menuItemsRef.current, { x: 30, opacity: 0 });

//       // Animate them in with stagger
//       gsap.to(menuItemsRef.current, {
//         x: 0,
//         opacity: 1,
//         duration: 0.5,
//         ease: "power3.out",
//         stagger: 0.08,
//         delay: 0.1,
//       });
//     }
//   }, [currentMenu, isOpen]);

//   return (
//     <div
//       ref={overlayRef}
//       className={`fixed inset-0 z-[100] ${isOpen ? "block" : "hidden"}`}
//     >
//       {/* Full Page Shutter */}
//       <div
//         ref={shutterRef}
//         className="absolute inset-0 bg-white overflow-y-auto scrollbar-custom"
//         style={{
//           scrollbarWidth: "thin",
//           scrollbarColor: "#AB322C #f1f1f1",
//         }}
//       >
//         {/* Content Container */}
//         <div
//           ref={contentRef}
//           className="min-h-screen flex flex-col pb-16 lg:pb-20 xl:pb-24"
//         >
//           {/* Header with Close Button */}
//           <div className="flex justify-between items-center px-8 pt-2 pb-6 lg:px-12 lg:pt-3 lg:pb-8 xl:px-16 xl:pt-4 xl:pb-10 shrink-0">
//             <div ref={logoRef}>
//               <img
//                 src="https://api.builder.io/api/v1/image/assets/TEMP/3edd7caac97715f7acba6475663e5e545775d1b8?width=400"
//                 alt="Vyalux Logo"
//                 className="w-[180px] lg:w-[200px] xl:w-[220px] h-auto"
//               />
//             </div>

//             <button
//               onClick={onClose}
//               className="w-12 h-12 flex items-center justify-center text-black hover:text-[#AB322C] transition-colors"
//             >
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M18 6L6 18M6 6L18 18"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Main Content Area */}
//           <div className="flex-1 flex min-h-0">
//             {/* Left Side - Navigation */}
//             <div className="w-1/2 px-8 lg:px-12 xl:px-16 flex flex-col justify-start py-4 lg:py-6 xl:py-8">
//               {/* Back Button */}
//               {currentMenu !== "main" && (
//                 <div className="mb-8 lg:mb-12">
//                   <button
//                     onClick={
//                       currentMenu === "website-development"
//                         ? handleBackToServices
//                         : handleBackToMain
//                     }
//                     className="flex items-center text-black/60 hover:text-[#AB322C] transition-all duration-300 text-base lg:text-lg font-montserrat group transform hover:translate-x-1"
//                   >
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="mr-3 group-hover:-translate-x-1 transition-transform duration-300"
//                     >
//                       <path
//                         d="M19 12H5M12 19L5 12L12 5"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     <span className="uppercase tracking-wider font-medium">
//                       {getBackButtonText()}
//                     </span>
//                   </button>
//                 </div>
//               )}

//               {/* Menu Title */}
//               {getMenuTitle() && (
//                 <div className="mb-8 lg:mb-12">
//                   <h2 className="text-black text-3xl lg:text-4xl xl:text-5xl font-bold font-montserrat uppercase">
//                     {getMenuTitle()}
//                   </h2>
//                 </div>
//               )}

//               {/* Menu Items */}
//               <div className="space-y-6 lg:space-y-8 xl:space-y-10 flex-1">
//                 {getCurrentMenuItems().map((item, index) => (
//                   <div
//                     key={item.name}
//                     ref={(el) => {
//                       if (el) menuItemsRef.current[index] = el;
//                     }}
//                     className="group cursor-pointer"
//                   >
//                     <button
//                       onClick={() => handleNavigation(item)}
//                       className="flex items-center justify-between text-black text-xl lg:text-2xl xl:text-3xl font-medium font-montserrat uppercase hover:text-[#AB322C] transition-all duration-300 transform hover:translate-x-2 text-left w-full py-2"
//                     >
//                       <span>{item.name}</span>
//                       {item.hasSubmenu && (
//                         <svg
//                           width="20"
//                           height="20"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform duration-300"
//                         >
//                           <path
//                             d="M9 18L15 12L9 6"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       )}
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Side - Contact Information */}
//             <div className="w-1/2 px-8 lg:px-12 xl:px-16 flex flex-col justify-start py-4 lg:py-6 xl:py-8">
//               <div
//                 ref={contactRef}
//                 className="space-y-6 lg:space-y-8 xl:space-y-10 mt-8 lg:mt-12 xl:mt-16"
//               >
//                 {/* Contact Details */}
//                 <div>
//                   <h3 className="text-[#AB322C] text-xl lg:text-2xl font-montserrat font-medium mb-4 lg:mb-6">
//                     GET IN TOUCH
//                   </h3>
//                   <div className="space-y-3 lg:space-y-4">
//                     <a
//                       href="tel:+18012065678"
//                       className="block text-black text-lg lg:text-xl font-montserrat hover:text-[#AB322C] transition-colors"
//                     >
//                       801-206-5678
//                     </a>
//                     <a
//                       href="mailto:sales@vyalux.com"
//                       className="block text-black text-lg lg:text-xl font-montserrat hover:text-[#AB322C] transition-colors"
//                     >
//                       sales@vyalux.com
//                     </a>
//                   </div>
//                 </div>

//                 {/* Office Location */}
//                 <div>
//                   <div className="text-black/70 text-base lg:text-lg font-montserrat space-y-1">
//                     <p>2118 East 3900 South</p>
//                     <p>Suite 200</p>
//                     <p>Salt Lake City, UT 84124</p>
//                   </div>
//                 </div>

//                 {/* Social Media */}
//                 <div ref={socialRef}>
//                   <div className="flex space-x-4">
//                     <a
//                       href="https://facebook.com"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center text-black hover:text-[#AB322C] hover:bg-black/20 transition-all duration-300"
//                     >
//                       <svg
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </a>

//                     <a
//                       href="https://instagram.com"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center text-black hover:text-[#AB322C] hover:bg-black/20 transition-all duration-300"
//                     >
//                       <svg
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <rect
//                           x="2"
//                           y="2"
//                           width="20"
//                           height="20"
//                           rx="5"
//                           ry="5"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                         />
//                         <path
//                           d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                         />
//                         <line
//                           x1="17.5"
//                           y1="6.5"
//                           x2="17.51"
//                           y2="6.5"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                         />
//                       </svg>
//                     </a>

//                     <a
//                       href="https://linkedin.com"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center text-black hover:text-[#AB322C] hover:bg-black/20 transition-all duration-300"
//                     >
//                       <svg
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <circle
//                           cx="4"
//                           cy="4"
//                           r="2"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
