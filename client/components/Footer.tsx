import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "../hooks/use-mobile";
import { Link } from "react-router-dom";
import {
  servicesSubmenu,
  websiteDevelopmentSubmenu,
  appDevelopmentSubmenu,
  aiSubmenu,
  dmcsSubmenu,
  cscsSubmenu,
  epSubmenu,
  esSubmenu,
} from "../data/navigation/menuData";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const companyInfoRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleDropdown = (dropdownName: string) => {
    if (activeDropdown === dropdownName) {
      // Animate closing
      if (dropdownRefs.current[dropdownName]) {
        const element = dropdownRefs.current[dropdownName];
        gsap.to(element, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => setActiveDropdown(null),
        });
      } else {
        setActiveDropdown(null);
      }
    } else {
      setActiveDropdown(dropdownName);
      // Animation will happen in useEffect when the new dropdown is rendered
    }
  };

  // Animation for dropdown items when they appear
  useEffect(() => {
    if (activeDropdown && dropdownRefs.current[activeDropdown]) {
      const element = dropdownRefs.current[activeDropdown];
      const links = element.querySelectorAll(".footer-link");

      // First set the height to auto to measure it
      gsap.set(element, {
        height: "auto",
        opacity: 1,
        overflow: "hidden",
      });

      // Get the auto height
      const autoHeight = element.offsetHeight;

      // Set height to 0 before animating
      gsap.set(element, { height: 0, opacity: 0 });

      // Animate to the auto height
      gsap.to(element, {
        height: autoHeight,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      // Animate each link with a stagger
      gsap.fromTo(
        links,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.2,
          delay: 0.1,
        },
      );
    }
  }, [activeDropdown]);

  useEffect(() => {
    // Set immediate visibility on mobile to avoid animation issues
    if (isMobile) {
      if (footerRef.current) footerRef.current.style.opacity = "1";
      if (logoRef.current) logoRef.current.style.opacity = "1";
      if (companyInfoRef.current) {
        Array.from(companyInfoRef.current.children).forEach((child) => {
          (child as HTMLElement).style.opacity = "1";
        });
      }
      if (columnsRef.current) {
        Array.from(columnsRef.current.children).forEach((child) => {
          (child as HTMLElement).style.opacity = "1";
        });
      }
      const footerLinks = document.querySelectorAll(".footer-link");
      footerLinks.forEach((link) => {
        (link as HTMLElement).style.opacity = "1";
      });
      return;
    }

    // Only run animations on desktop/tablet
    // Animation for the entire footer section
    gsap.fromTo(
      footerRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6, // Slightly faster overall animation
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%", // Start animation sooner
          toggleActions: "play none none reverse",
        },
      },
    );

    // Animation for the logo
    gsap.fromTo(
      logoRef.current,
      {
        opacity: 0,
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5, // Faster animation
        delay: 0.2, // Reduced delay
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%", // Start animation sooner
          toggleActions: "play none none reverse",
        },
      },
    );

    // Animation for company info (location and social media)
    gsap.fromTo(
      companyInfoRef.current?.children,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1, // Faster stagger
        duration: 0.4, // Faster animation
        delay: 0.3, // Reduced delay
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%", // Start animation sooner
          toggleActions: "play none none reverse",
        },
      },
    );

    // Animation for footer columns
    gsap.fromTo(
      columnsRef.current?.children,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15, // Adjusted stagger
        duration: 0.5, // Faster animation
        delay: 0.2, // Reduced delay
        scrollTrigger: {
          trigger: columnsRef.current,
          start: "top 90%", // Start animation sooner
          toggleActions: "play none none reverse",
        },
      },
    );

    // Animation for footer links - enhancing the staggered effect
    const footerLinks = document.querySelectorAll(".footer-link");
    gsap.fromTo(
      footerLinks,
      {
        opacity: 0,
        y: 15, // Slightly more pronounced initial position
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.03, // Faster stagger for more items
        duration: 0.3, // Faster individual animations
        delay: 0.4, // Adjusted delay
        ease: "power1.out", // Smoother easing
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%", // Start slightly earlier
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => {
      // Clean up ScrollTrigger instances to prevent memory leaks
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  // NEW: force scroll to top after navigation (fix footer link scroll issue)
  const handleLinkClick = () => {
    // run after React Router updates location
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 0);
  };

  return (
    <div ref={footerRef} className="footer-section  bg-white relative  w-full">
      <div className="w-full h-auto py-[80px] sm:py-10 px-4 sm:px-6 lg:px-[70px]">
        {/* FLEX LAYOUT: left (logo) 25%, right (three columns) 75% */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 text-center lg:text-left">
          {/* Left Column (Logo & Info) */}
          <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start">
            <div className="space-y-6 lg:space-y-8" ref={companyInfoRef}>
              <div className="footer-logo" ref={logoRef}>
                <Link to="/" onClick={handleLinkClick}>
                  <img
                    src="/footer.png"
                    alt="Vyalux Logo"
                    className="w-[103px] sm:w-[123px] md:w-[143px] lg:w-[163px] xl:w-[183px] 2xl:w-[203px] -ml-1"
                  />
                </Link>
              </div>
              <div className="footer-location">
                <p className="text-black text-base sm:text-lg font-inter">
                  Detroit, MI, USA
                </p>
              </div>
              <div className="footer-social flex items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61578879161524"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <img src="/facebook.png" alt="" />
                </a>
                <a
                  href="https://www.instagram.com/vyalux_inc/?fbclid=IwY2xjawMcCTBleHRuA2FlbQIxMQBicmlkET
FDT0[…]tQLm-4be_uk6GwqsDQVU 68rIw9RGozUQQ_aem_idcQckD-hozk79mXYbggRw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <svg
                    className="w-5 h-5 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.0039 5.50781C7.51953 5.50781 5.51562 7.51172 5.51562 9.99609C5.51562 12.4805 7.51953 14.4844 10.0039 14.4844C12.4883 14.4844 14.4922 12.4805 14.4922 9.99609C14.4922 7.51172 12.4883 5.50781 10.0039 5.50781ZM10.0039 12.9141C8.39844 12.9141 7.08594 11.6055 7.08594 9.99609C7.08594 8.38672 8.39453 7.07812 10.0039 7.07812C11.6133 7.07812 12.9219 8.38672 12.9219 9.99609C12.9219 11.6055 11.6094 12.9141 10.0039 12.9141ZM15.7227 5.32422C15.7227 5.90625 15.2539 6.37109 14.6758 6.37109C14.0938 6.37109 13.6289 5.90234 13.6289 5.32422C13.6289 4.74609 14.0977 4.27734 14.6758 4.27734C15.2539 4.27734 15.7227 4.74609 15.7227 5.32422ZM18.6953 6.38672C18.6289 4.98438 18.3086 3.74219 17.2812 2.71875C16.2578 1.69531 15.0156 1.375 13.6133 1.30469C12.168 1.22266 7.83594 1.22266 6.39062 1.30469C4.99219 1.37109 3.75 1.69141 2.72266 2.71484C1.69531 3.73828 1.37891 4.98047 1.30859 6.38281C1.22656 7.82812 1.22656 12.1602 1.30859 13.6055C1.375 15.0078 1.69531 16.25 2.72266 17.2734C3.75 18.2969 4.98828 18.6172 6.39062 18.6875C7.83594 18.7695 12.168 18.7695 13.6133 18.6875C15.0156 18.6211 16.2578 18.3008 17.2812 17.2734C18.3047 16.25 18.625 15.0078 18.6953 13.6055C18.7773 12.1602 18.7773 7.83203 18.6953 6.38672ZM16.8281 15.1562C16.5234 15.9219 15.9336 16.5117 15.1641 16.8203C14.0117 17.2773 11.2773 17.1719 10.0039 17.1719C8.73047 17.1719 5.99219 17.2734 4.84375 16.8203C4.07812 16.5156 3.48828 15.9258 3.17969 15.1562C2.72266 14.0039 2.82813 11.2695 2.82813 9.99609C2.82813 8.72266 2.72656 5.98438 3.17969 4.83594C3.48438 4.07031 4.07422 3.48047 4.84375 3.17187C5.99609 2.71484 8.73047 2.82031 10.0039 2.82031C11.2773 2.82031 14.0156 2.71875 15.1641 3.17187C15.9297 3.47656 16.5195 4.06641 16.8281 4.83594C17.2852 5.98828 17.1797 8.72266 17.1797 9.99609C17.1797 11.2695 17.2852 14.0078 16.8281 15.1562Z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/vyalux-inc/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <img src="/linkedin.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Columns Wrapper */}
          <div className="w-full lg:w-3/4">
            <div
              ref={columnsRef}
              className="flex flex-col sm:flex-row gap-12 lg:gap-16 items-center sm:items-start"
            >
              {/* Services Column */}
              <div className="footer-column flex-1 basis-1/4">
                <h3 className="footer-heading text-black text-lg font-inter uppercase opacity-60 mb-4 lg:mb-6">
                  Services
                </h3>
                <div className="footer-links space-y-3 lg:space-y-4">
                  {servicesSubmenu.map((service, index) => (
                    <div key={index} className="footer-dropdown">
                      <button
                        onClick={() => toggleDropdown(service.name)}
                        className="footer-link inline-flex items-center gap-2 whitespace-nowrap text-black text-base lg:text-lg font-inter hover:text-[#AB322C] transition-colors duration-300"
                      >
                        {service.name}
                        {service.hasSubmenu && (
                          <svg
                            className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === service.name ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        )}
                      </button>
                      {service.hasSubmenu && (
                        <div
                          ref={(el) =>
                            (dropdownRefs.current[service.name] = el)
                          }
                          className={`mt-6 space-y-2 lg:pl-4 lg:border-l border-gray-200 ${activeDropdown === service.name ? "block" : "hidden"}`}
                        >
                          {service.name === "Website Development" &&
                            websiteDevelopmentSubmenu.map((subItem, idx) => (
                              <Link
                                key={idx}
                                to={subItem.href}
                                onClick={handleLinkClick}
                                className="footer-link block whitespace-nowrap text-black text-sm lg:text-base font-inter hover:text-[#AB322C] transition-colors duration-300"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          {service.name === "App Development" &&
                            appDevelopmentSubmenu.map((subItem, idx) => (
                              <Link
                                key={idx}
                                to={subItem.href}
                                onClick={handleLinkClick}
                                className="footer-link block whitespace-nowrap text-black text-sm lg:text-base font-inter hover:text-[#AB322C] transition-colors duration-300"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          {service.name === "AI" &&
                            aiSubmenu.map((subItem, idx) => (
                              <Link
                                key={idx}
                                to={subItem.href}
                                onClick={handleLinkClick}
                                className="footer-link block whitespace-nowrap text-black text-sm lg:text-base font-inter hover:text-[#AB322C] transition-colors duration-300"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          {service.name ===
                            "Digital Marketing & Content Services" &&
                            dmcsSubmenu.map((subItem, idx) => (
                              <Link
                                key={idx}
                                to={subItem.href}
                                onClick={handleLinkClick}
                                className="footer-link block whitespace-nowrap text-black text-sm lg:text-base font-inter hover:text-[#AB322C] transition-colors duration-300"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          {service.name ===
                            "Cloud Services & Cloud Solutions" &&
                            cscsSubmenu.map((subItem, idx) => (
                              <Link
                                key={idx}
                                to={subItem.href}
                                onClick={handleLinkClick}
                                className="footer-link block whitespace-nowrap text-black text-sm lg:text-base font-inter hover:text-[#AB322C] transition-colors duration-300"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          {service.name === "E-commerce & Platforms" &&
                            epSubmenu.map((subItem, idx) => (
                              <Link
                                key={idx}
                                to={subItem.href}
                                onClick={handleLinkClick}
                                className="footer-link block whitespace-nowrap text-black text-sm lg:text-base font-inter hover:text-[#AB322C] transition-colors duration-300"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          {service.name === "Enterprise Services" &&
                            esSubmenu.map((subItem, idx) => (
                              <Link
                                key={idx}
                                to={subItem.href}
                                onClick={handleLinkClick}
                                className="footer-link block whitespace-nowrap text-black text-sm lg:text-base font-inter hover:text-[#AB322C] transition-colors duration-300"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Column */}
              <div className="footer-column flex-1 ">
                <h3 className="footer-heading text-black text-lg font-inter uppercase opacity-60 mb-4 lg:mb-6">
                  Company
                </h3>
                <div className="footer-links space-y-3 lg:space-y-4">
                  <Link
                    to="/about"
                    onClick={handleLinkClick}
                    className="footer-link block text-black text-base lg:text-lg font-inter hover:text-[#AB322C] transition-colors duration-300"
                  >
                    About
                  </Link>
                  <Link
                    to="/how-it-works"
                    onClick={handleLinkClick}
                    className="footer-link block text-black text-base lg:text-lg font-inter hover:text-[#AB322C] transition-colors duration-300"
                  >
                    How it Works
                  </Link>
                  <Link
                    to="/contact"
                    onClick={handleLinkClick}
                    className="footer-link block text-black text-base lg:text-lg font-inter hover:text-[#AB322C] transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Get In Touch Column */}
              <div className="footer-column flex-1 ">
                <h3 className="footer-heading text-black text-lg font-inter uppercase opacity-60 mb-4 lg:mb-6">
                  Get In Touch
                </h3>
                <div className="footer-links space-y-3 lg:space-y-4">
                  <a
                    href="tel:+12489234300"
                    className="footer-link block text-black text-base lg:text-lg font-inter hover:text-[#AB322C] transition-colors duration-300"
                  >
                    +1 (248) 923-4300
                  </a>
                  <a
                    href="mailto:info@vyalux.com"
                    className="footer-link block text-black text-base lg:text-lg font-inter hover:text-[#AB322C] relative top-2 sm:block transition-colors  duration-300"
                  >
                    info@vyalux.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-400 my-6" />
        <div className="flex relative flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-0">
          <p className="text-black text-sm lg:text-base font-inter text-center sm:text-left py-2">
            ©2015-2025 VYALUX, Inc. ALL Rights Reserved
          </p>
          <p className="text-black text-sm lg:text-base font-inter text-center sm:text-left">
            <Link
              to="/terms-and-conditions"
              className="hover:text-[#AB322C] transition-colors duration-300"
            >
              Terms & Conditions
            </Link>{" "}
            <span className="mx-2 sm:mx-4">|</span>{" "}
            <Link
              to="/privacy-policy"
              className="hover:text-[#AB322C] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
