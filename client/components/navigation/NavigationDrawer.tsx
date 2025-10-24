import React, { useRef, useEffect, useState, useCallback } from "react";
import { Drawer } from "antd";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MenuLevel,
  getMenuTitle,
  getBackButtonText,
  getCurrentMenuItems,
} from "../../data/navigation/menuData";
import {
  animateToSubmenu,
  animateBack,
  applyBackButtonHoverAnimation,
  revealElements,
} from "@/utils/animationUtils";
import ContactInformation from "./ContactInformation";
import { useScroll } from "@/hooks/use-scroll";
import useWindowWidth from "./getwidthhook";

// Register GSAP plugins
gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

// Import custom CSS
import "../../utils/navigationDrawer.css";

interface NavigationDrawerProps {
  open: boolean;
  onClose: () => void;
  currentMenu: MenuLevel;
  setCurrentMenu: (menu: MenuLevel) => void;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  open,
  onClose,
  currentMenu,
  setCurrentMenu,
}) => {
  const navigate = useNavigate();
  const menuItemsRef = useRef<HTMLDivElement[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isSubmenu, setIsSubmenu] = useState(false);
  const hasContactAnimated = useRef(false); // NEW: track contact/social animation

  const { windowWidth, windowHeight } = useWindowWidth();

  console.log("Window Width:", windowWidth);
  console.log("Window Height:", windowHeight);
  // Use custom scroll hook to handle scrolling
  useScroll(contentRef, {
    speed: 1.5,
    preventDefaultWheel: true,
    enableTouchScroll: true,
  });

  // Lock body scroll when drawer is open (style + class for robustness)
  useEffect(() => {
    if (!open) return;
    const { body, documentElement } = document;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlOverflow = documentElement.style.overflow;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const prevPaddingRight = body.style.paddingRight;

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    body.classList.add("no-scroll");
    documentElement.classList.add("no-scroll");
    if (scrollbarWidth > 0) {
      // Before: body.style.paddingRight = `${scrollbarWidth + 120}px`;
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      body.style.overflow = prevBodyOverflow;
      documentElement.style.overflow = prevHtmlOverflow;
      body.style.paddingRight = prevPaddingRight;
      body.classList.remove("no-scroll");
      documentElement.classList.remove("no-scroll");
    };
  }, [open]);

  // Contain wheel/touch events so they don't bubble to the page
  const handleWheelCapture = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      const el = contentRef.current;
      if (!el) return;
      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      const scrollingUp = e.deltaY < 0;
      const scrollingDown = e.deltaY > 0;
      e.stopPropagation();
      if ((atTop && scrollingUp) || (atBottom && scrollingDown)) {
        e.preventDefault();
      }
    },
    [],
  );

  const handleTouchMoveCapture = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      e.stopPropagation();
    },
    [],
  );

  const handleNavigation = (item: any) => {
    if (item.name === "Services" && item.hasSubmenu) {
      animateToSubmenu(menuItemsRef, setCurrentMenu, "services");
    } else if (item.name === "Website Development" && item.hasSubmenu) {
      animateToSubmenu(menuItemsRef, setCurrentMenu, "website-development");
    } else if (item.name === "App Development" && item.hasSubmenu) {
      animateToSubmenu(menuItemsRef, setCurrentMenu, "app-development");
    } else if (item.name === "AI" && item.hasSubmenu) {
      animateToSubmenu(menuItemsRef, setCurrentMenu, "ai");
    } else if (
      item.name === "Digital Marketing & Content Services" &&
      item.hasSubmenu
    ) {
      animateToSubmenu(menuItemsRef, setCurrentMenu, "dmcs");
    } else if (
      item.name === "Cloud Services & Cloud Solutions" &&
      item.hasSubmenu
    ) {
      animateToSubmenu(menuItemsRef, setCurrentMenu, "cscs");
    } else if (item.name === "E-commerce & Platforms" && item.hasSubmenu) {
      animateToSubmenu(menuItemsRef, setCurrentMenu, "ep");
    } else if (item.name === "Enterprise Services" && item.hasSubmenu) {
      animateToSubmenu(menuItemsRef, setCurrentMenu, "es");
    } else if (item.href && item.href.startsWith("/")) {
      // Navigate to page and close drawer
      navigate(item.href);
      onClose();
    } else {
      // Handle anchor links or other navigation
      onClose();
    }
  };

  const handleBackToMain = () => {
    animateBack(menuItemsRef, setCurrentMenu, "main");
  };

  const handleBackToServices = () => {
    animateBack(menuItemsRef, setCurrentMenu, "services");
  };

  // Reset contact animation flag when drawer fully closes
  useEffect(() => {
    if (!open) {
      hasContactAnimated.current = false;
    }
  }, [open]);

  // Setup animations (menu always; contact/social only first time per open)
  useEffect(() => {
    if (!open || !contentRef.current) return;
    setAnimationComplete(false);

    // Always reset menu/nav initial states
    gsap.set(menuRef.current, { x: -50, opacity: 0 });
    gsap.set(navLinksRef.current?.children || [], { y: 30, opacity: 0 });

    // Only set initial states for contact/social if they will animate
    if (!hasContactAnimated.current) {
      gsap.set(contactRef.current?.children || [], { x: 50, opacity: 0 });
      gsap.set(socialRef.current?.children || [], { scale: 0, opacity: 0 });
    }

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        setAnimationComplete(true);
        hasContactAnimated.current = true;
      },
    });

    tl.to(menuRef.current, { x: 0, opacity: 1, duration: 0.8 }).to(
      navLinksRef.current?.children || [],
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
      "-=0.4",
    );

    if (!hasContactAnimated.current) {
      tl.to(
        contactRef.current?.children || [],
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        "-=0.3",
      ).to(
        socialRef.current?.children || [],
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.2",
      );
    }
  }, [open, currentMenu]);

  // Reset menu items ref array when menu changes
  useEffect(() => {
    menuItemsRef.current = [];
  }, [currentMenu]);

  // Reset scroll position when menu changes
  useEffect(() => {
    if (open && contentRef.current) {
      // Reset scroll position when menu changes
      contentRef.current.scrollTop = 0;
    }
  }, [currentMenu, open]);

  // Detect if current menu is a submenu
  useEffect(() => {
    setIsSubmenu(currentMenu !== "main");
  }, [currentMenu]);

  // Add menu items ref function
  const addToMenuItemsRef = (el: HTMLDivElement) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current.push(el);
    }
  };

  return (
    <Drawer
      title={null}
      placement="right"
      onClose={onClose}
      open={open}
      width="100%"
      height="calc(100% - 80px)"
      styles={{
        body: {
          padding: 0,
          overflow: "hidden", // contain overflow to inner scroller
          height: "calc(100vh - 80px)",
        },
        header: { display: "none" },
        mask: { background: "rgba(0, 0, 0, 0.65)" },
        content: {
          overflow: "hidden", // let inner container scroll
          background: "#222",
          boxShadow: "0 0 40px rgba(0,0,0,0.2)",
          marginTop: "80px",
        },
        wrapper: {
          overflow: "hidden", // no scroll here
        },
      }}
      maskClosable={true}
    >
      {/* Background Image */}
      <div className="absolute right-36 flex items-center justify-center">
        <div className="w-full h-full bg-[#222] opacity-100">
          <img
            src="/WP/bgrec.png"
            alt=""
            className="w-full h-full object-contain "
          />
        </div>
      </div>

      {/* Drawer Content */}
      <div
        ref={contentRef}
        onWheel={handleWheelCapture}
        onTouchMove={handleTouchMoveCapture}
        className="drawer-scroll  relative z-10  mx-auto min-h-full flex flex-col h-full pt-6 overflow-y-auto custom-scrollbar"
      >
        {/* Main Content Area */}
        <div className="flex-1  flex flex-col lg:flex-row justify-between items-start lg:items-center pt-0 lg:pt-8">
          {/* Left Side - Menu and Navigation */}

          <div
            className={`flex-1 flex flex-col justify-start items-start lg:mb-0 pl-12 md:pl-16 lg:pl-20 pr-4 w-full lg:w-2/3 relative ${isSubmenu ? "pb-20" : "pb-0"}`}
          >
            {/* Back Button */}
            {currentMenu !== "main" && (
              <div className="mb-6 self-start mt-8">
                <button
                  onClick={
                    currentMenu === "services"
                      ? handleBackToMain
                      : handleBackToServices
                  }
                  className="flex items-center bg-transparent border-none text-gray-400 text-sm font-medium uppercase tracking-wider cursor-pointer transition-colors hover:text-[#AB322C]"
                  onMouseEnter={(e) =>
                    applyBackButtonHoverAnimation(e.currentTarget, true)
                  }
                  onMouseLeave={(e) =>
                    applyBackButtonHoverAnimation(e.currentTarget, false)
                  }
                >
                  <svg
                    className="mr-2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8332 10H4.1665"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.99984 15.8334L4.1665 10.0001L9.99984 4.16675"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {getBackButtonText(currentMenu)}
                </button>
              </div>
            )}

            {/* MENU Label */}
            {/* <div ref={menuRef} className="absolute  h-full">
              <div
                className="font-montserrat text-[#F2F2F2] text-sm font-medium tracking-[3px] transform -rotate-90 origin-left whitespace-nowrap"
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "left top",
                  position: "absolute",
                  top: "50%",
                  left: 0,
                }}
              >
                MENU
              </div>
            </div> */}

            {/* Menu Content Container - Adjusted to be at the top for submenus */}
            <div
              className={`w-full ${isSubmenu ? "mt-6" : " flex items-center h-full"}`}
            >
              {/* Menu Title */}
              {getMenuTitle(currentMenu) && (
                <div className="mb-6">
                  <h2 className="text-[#F2F2F2] text-2xl md:text-4xl font-montserrat font-bold uppercase m-0 leading-tight">
                    {getMenuTitle(currentMenu)}
                  </h2>
                </div>
              )}

              {/* Navigation Links */}
              <div className=" relative flex">
                {" "}
                <div
                  className="font-montserrat text-[#F2F2F2] text-sm font-medium tracking-[3px] transform -rotate-90 origin-left whitespace-nowrap"
                  style={{
                    transform: "rotate(-90deg)",
                    transformOrigin: "left top",
                    position: "absolute",
                    top: "20%",
                    left: -40,
                  }}
                >
                  MENU
                </div>
                <nav
                  ref={navLinksRef}
                  className={`space-y-4 lg:space-y-6 ${isSubmenu ? "pt-2" : "pt-0"} pb-8`}
                >
                  {getCurrentMenuItems(currentMenu).map((item, index) => (
                    <div
                      key={index}
                      ref={addToMenuItemsRef}
                      className={`flex items-center ${isSubmenu ? "mb-5" : "block"}`}
                      onClick={() => handleNavigation(item)}
                    >
                      {isSubmenu && (
                        <div className="h-[1px] w-12 bg-[#F2F2F2] mr-4 opacity-70"></div>
                      )}
                      <span className="font-montserrat  text-[#F2F2F2] text-3xl sm:text-4xl md:text-2xl lg:text-4xl  font-bold leading-tight hover:text-[#AB322C] transition-colors cursor-pointer block">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 px-8 md:px-12 w-full">
            <div ref={contactRef} className="space-y-4 max-w-md">
              {/* Contact Information */}
              <div className="rounded-lg">
                <ContactInformation />
              </div>

              {/* Social Media Links */}
              <div
                ref={socialRef}
                className="flex items-center gap-4 mt-4 justify-start"
              >
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61578879161524"
                  className="text-lg hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6038 11.48L13.1592 7.86048H9.68618V5.51165C9.68618 4.52142 10.1713 3.55618 11.7268 3.55618H13.3057V0.474542C13.3057 0.474542 11.8729 0.230011 10.503 0.230011C7.64282 0.230011 5.77329 1.9636 5.77329 5.10189V7.86048H2.59399V11.48H5.77329V20.23H9.68618V11.48H12.6038Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/vyalux_inc/?fbclid=IwY2xjawMcCTBleHRuA2FlbQIxMQBicmlkET
FDT0[…]tQLm-4be_uk6GwqsDQVU 68rIw9RGozUQQ_aem_idcQckD-hozk79mXYbggRw"
                  className="hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4539 5.73782C7.96948 5.73782 5.96558 7.74173 5.96558 10.2261C5.96558 12.7105 7.96948 14.7144 10.4539 14.7144C12.9382 14.7144 14.9421 12.7105 14.9421 10.2261C14.9421 7.74173 12.9382 5.73782 10.4539 5.73782ZM10.4539 13.1441C8.84839 13.1441 7.53589 11.8355 7.53589 10.2261C7.53589 8.61673 8.84448 7.30814 10.4539 7.30814C12.0632 7.30814 13.3718 8.61673 13.3718 10.2261C13.3718 11.8355 12.0593 13.1441 10.4539 13.1441ZM16.1726 5.55423C16.1726 6.13626 15.7039 6.60111 15.1257 6.60111C14.5437 6.60111 14.0789 6.13235 14.0789 5.55423C14.0789 4.9761 14.5476 4.50735 15.1257 4.50735C15.7039 4.50735 16.1726 4.9761 16.1726 5.55423ZM19.1453 6.61673C19.0789 5.21439 18.7585 3.9722 17.7312 2.94876C16.7078 1.92532 15.4656 1.60501 14.0632 1.5347C12.6179 1.45267 8.28589 1.45267 6.84058 1.5347C5.44214 1.6011 4.19995 1.92142 3.17261 2.94485C2.14526 3.96829 1.82886 5.21048 1.75854 6.61282C1.67651 8.05814 1.67651 12.3902 1.75854 13.8355C1.82495 15.2378 2.14526 16.48 3.17261 17.5034C4.19995 18.5269 5.43823 18.8472 6.84058 18.9175C8.28589 18.9995 12.6179 18.9995 14.0632 18.9175C15.4656 18.8511 16.7078 18.5308 17.7312 17.5034C18.7546 16.48 19.075 15.2378 19.1453 13.8355C19.2273 12.3902 19.2273 8.06204 19.1453 6.61673ZM17.2781 15.3863C16.9734 16.1519 16.3835 16.7417 15.614 17.0503C14.4617 17.5074 11.7273 17.4019 10.4539 17.4019C9.18042 17.4019 6.44214 17.5034 5.2937 17.0503C4.52808 16.7456 3.93823 16.1558 3.62964 15.3863C3.17261 14.2339 3.27808 11.4995 3.27808 10.2261C3.27808 8.95267 3.17651 6.21439 3.62964 5.06595C3.93433 4.30032 4.52417 3.71048 5.2937 3.40189C6.44604 2.94485 9.18042 3.05032 10.4539 3.05032C11.7273 3.05032 14.4656 2.94876 15.614 3.40189C16.3796 3.70657 16.9695 4.29642 17.2781 5.06595C17.7351 6.21829 17.6296 8.95267 17.6296 10.2261C17.6296 11.4995 17.7351 14.2378 17.2781 15.3863Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/vyalux-inc/?viewAsMember=true"
                  className="hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.61714 17.73H1.98901V6.04642H5.61714V17.73ZM3.80112 4.45267C2.64097 4.45267 1.69995 3.49173 1.69995 2.33157C1.69995 1.77431 1.92132 1.23987 2.31537 0.845819C2.70942 0.451773 3.24386 0.2304 3.80112 0.2304C4.35839 0.2304 4.89283 0.451773 5.28688 0.845819C5.68092 1.23987 5.9023 1.77431 5.9023 2.33157C5.9023 3.49173 4.96089 4.45267 3.80112 4.45267ZM19.196 17.73H15.5757V12.0425C15.5757 10.687 15.5484 8.94876 13.6894 8.94876C11.8031 8.94876 11.514 10.4214 11.514 11.9449V17.73H7.8898V6.04642H11.3695V7.64017H11.4203C11.9046 6.7222 13.0878 5.75345 14.8531 5.75345C18.525 5.75345 19.2 8.17142 19.2 11.312V17.73H19.196Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default NavigationDrawer;
