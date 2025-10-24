import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
// Register GSAP plugin
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(useGSAP);

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface ContentSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const TermsAndConditions = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [sidebarLeft, setSidebarLeft] = useState(0);

  useEffect(() => {
    const updateSidebarLeft = () => {
      if (sidebarRef.current) {
        const rect = sidebarRef.current.getBoundingClientRect();
        setSidebarLeft(rect.left);
      }
    };

    updateSidebarLeft();
    window.addEventListener("resize", updateSidebarLeft);
    return () => {
      window.removeEventListener("resize", updateSidebarLeft);
    };
  }, []);

  useGSAP(() => {
    if (contentRef.current) {
      gsap.from(contentRef.current, {
        opacity: 0,
        duration: 1,
        y: 50,
      });
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const w: any = window as any;
    if (w && w.lenis && typeof w.lenis.scrollTo === "function") {
      w.lenis.scrollTo(target, {
        offset: -80,
        duration: 0.2,
        lock: true,
        immediate: true,
      });
    } else if (gsap && (gsap as any).to) {
      gsap.to(window, {
        duration: 0.2,
        scrollTo: { y: target, offsetY: 80 },
        ease: "linear",
      });
    } else {
      const y = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setIsMobileMenuOpen(false);
  };

  const navigationItems: NavItem[] = [
    {
      id: "welcome",
      label: "Welcome to VYALUX!",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.13342 17.0443V4.54427C4.13342 3.99174 4.35292 3.46183 4.74362 3.07113C5.13432 2.68043 5.66422 2.46094 6.21676 2.46094H17.4668V19.1276H6.21676C5.66422 19.1276 5.13432 18.9081 4.74362 18.5174C4.35292 18.1267 4.13342 17.5968 4.13342 17.0443ZM4.13342 17.0443C4.13342 16.4917 4.35292 15.9618 4.74362 15.5711C5.13432 15.1804 5.66422 14.9609 6.21676 14.9609H17.4668"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "terminologies",
      label: "Terminologies",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3001 2.46094H5.80009C5.35806 2.46094 4.93414 2.63653 4.62158 2.94909C4.30902 3.26165 4.13342 3.68558 4.13342 4.1276V17.4609C4.13342 17.903 4.30902 18.3269 4.62158 18.6394C4.93414 18.952 5.35806 19.1276 5.80009 19.1276H15.8001C16.2421 19.1276 16.666 18.952 16.9786 18.6394C17.2912 18.3269 17.4668 17.903 17.4668 17.4609V6.6276L13.3001 2.46094Z"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.4667 2.46094V5.79427C12.4667 6.2363 12.6423 6.66022 12.9548 6.97278C13.2674 7.28534 13.6913 7.46094 14.1333 7.46094H17.4667"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.13334 8.29688H7.46667"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1333 11.6328H7.46667"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1333 14.9609H7.46667"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "website-access",
      label: "Website Access",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1333 18.2969V16.6302C14.1333 15.7462 13.7822 14.8983 13.157 14.2732C12.5319 13.6481 11.6841 13.2969 10.8 13.2969H5.80001C4.91595 13.2969 4.06811 13.6481 3.44299 14.2732C2.81786 14.8983 2.46667 15.7462 2.46667 16.6302V18.2969"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.30001 9.96354C10.141 9.96354 11.6333 8.47116 11.6333 6.63021C11.6333 4.78926 10.141 3.29688 8.30001 3.29688C6.45906 3.29688 4.96667 4.78926 4.96667 6.63021C4.96667 8.47116 6.45906 9.96354 8.30001 9.96354Z"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.1334 18.2979V16.6312C19.1329 15.8927 18.8871 15.1752 18.4346 14.5915C17.9821 14.0078 17.3485 13.5909 16.6334 13.4062"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1334 3.40625C14.8504 3.58983 15.486 4.00683 15.9398 4.59151C16.3936 5.17618 16.64 5.89527 16.64 6.63542C16.64 7.37556 16.3936 8.09465 15.9398 8.67932C15.486 9.264 14.8504 9.681 14.1334 9.86458"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "intellectual-property",
      label: "Intellectual Property",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4668 11.628C17.4668 15.7946 14.5501 17.878 11.0834 19.0863C10.9019 19.1478 10.7047 19.1449 10.5251 19.078C7.05009 17.878 4.13342 15.7946 4.13342 11.628V5.79465C4.13342 5.57363 4.22122 5.36167 4.3775 5.20539C4.53378 5.04911 4.74574 4.96131 4.96676 4.96131C6.63342 4.96131 8.71676 3.96131 10.1668 2.69465C10.3433 2.54381 10.5679 2.46094 10.8001 2.46094C11.0323 2.46094 11.2569 2.54381 11.4334 2.69465C12.8918 3.96965 14.9668 4.96131 16.6334 4.96131C16.8544 4.96131 17.0664 5.04911 17.2227 5.20539C17.379 5.36167 17.4668 5.57363 17.4668 5.79465V11.628Z"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "service-engagement",
      label: "Service Engagement",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4667 6.63281H4.13334C3.21287 6.63281 2.46667 7.379 2.46667 8.29948V16.6328C2.46667 17.5533 3.21287 18.2995 4.13334 18.2995H17.4667C18.3871 18.2995 19.1333 17.5533 19.1333 16.6328V8.29948C19.1333 7.379 18.3871 6.63281 17.4667 6.63281Z"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1333 18.2969V4.96354C14.1333 4.52151 13.9577 4.09759 13.6452 3.78503C13.3326 3.47247 12.9087 3.29688 12.4667 3.29688H9.13334C8.69131 3.29688 8.26739 3.47247 7.95483 3.78503C7.64227 4.09759 7.46667 4.52151 7.46667 4.96354V18.2969"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "privacy-control",
      label: "Privacy & Control",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8 7.46094C14.9422 7.46094 18.3 6.34165 18.3 4.96094C18.3 3.58023 14.9422 2.46094 10.8 2.46094C6.65791 2.46094 3.30005 3.58023 3.30005 4.96094C3.30005 6.34165 6.65791 7.46094 10.8 7.46094Z"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.30005 4.96094V16.6276C3.30005 17.2906 4.09023 17.9265 5.49675 18.3954C6.90327 18.8642 8.81093 19.1276 10.8 19.1276C12.7892 19.1276 14.6968 18.8642 16.1033 18.3954C17.5099 17.9265 18.3 17.2906 18.3 16.6276V4.96094"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.30005 10.7969C3.30005 11.4599 4.09023 12.0958 5.49675 12.5646C6.90327 13.0335 8.81093 13.2969 10.8 13.2969C12.7892 13.2969 14.6968 13.0335 16.1033 12.5646C17.5099 12.0958 18.3 11.4599 18.3 10.7969"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "limitation-liability",
      label: "Limitation of Liability",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9083 15.8006L12.2417 4.13398C12.0963 3.87748 11.8855 3.66413 11.6308 3.5157C11.376 3.36727 11.0865 3.28906 10.7917 3.28906C10.4968 3.28906 10.2073 3.36727 9.95255 3.5157C9.69782 3.66413 9.48702 3.87748 9.34166 4.13398L2.67499 15.8006C2.52806 16.0551 2.45101 16.3439 2.45166 16.6377C2.45231 16.9316 2.53064 17.22 2.6787 17.4738C2.82675 17.7276 3.03928 17.9378 3.29474 18.083C3.55019 18.2282 3.8395 18.3033 4.13332 18.3006H17.4667C17.7591 18.3003 18.0463 18.2231 18.2994 18.0767C18.5525 17.9303 18.7627 17.7199 18.9088 17.4666C19.0548 17.2133 19.1317 16.926 19.1316 16.6335C19.1315 16.3411 19.0545 16.0539 18.9083 15.8006Z"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.8 8.29688V11.6302"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.8 14.9609H10.8084"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "third-party-links",
      label: "Third-Party Links",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3 3.29688H18.3V8.29687"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.13342 12.4635L18.3001 3.29688"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8 11.6302V16.6302C15.8 17.0722 15.6245 17.4962 15.3119 17.8087C14.9993 18.1213 14.5754 18.2969 14.1334 18.2969H4.96672C4.52469 18.2969 4.10076 18.1213 3.7882 17.8087C3.47564 17.4962 3.30005 17.0722 3.30005 16.6302V7.46354C3.30005 7.02151 3.47564 6.59759 3.7882 6.28503C4.10076 5.97247 4.52469 5.79688 4.96672 5.79688H9.96672"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "reservation-rights",
      label: "Reservation of Rights",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1334 14.1276L16.6334 7.46094L19.1334 14.1276C18.4084 14.6693 17.5334 14.9609 16.6334 14.9609C15.7334 14.9609 14.8584 14.6693 14.1334 14.1276Z"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.46667 14.1276L4.96667 7.46094L7.46667 14.1276C6.74167 14.6693 5.86667 14.9609 4.96667 14.9609C4.06667 14.9609 3.19167 14.6693 2.46667 14.1276Z"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.63342 18.2969H14.9668"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.8 3.29688V18.2969"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.30005 6.6276H4.96672C6.63338 6.6276 9.13338 5.79427 10.8 4.96094C12.4667 5.79427 14.9667 6.6276 16.6334 6.6276H18.3"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "governing-law",
      label: "Governing Law",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8834 11.2109L6.21674 17.8776C5.88522 18.2091 5.43558 18.3954 4.96674 18.3954C4.4979 18.3954 4.04826 18.2091 3.71674 17.8776C3.38522 17.5461 3.19897 17.0964 3.19897 16.6276C3.19897 16.1588 3.38522 15.7091 3.71674 15.3776L10.3834 8.71094"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1334 14.1328L19.1334 9.13281"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.46667 7.46094L12.4667 2.46094"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.30005 6.63281L14.9667 13.2995"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3001 9.96354L11.6334 3.29688"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "contact-us",
      label: "Contact Us",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4667 4.13281H4.13334C3.21287 4.13281 2.46667 4.879 2.46667 5.79948V15.7995C2.46667 16.72 3.21287 17.4661 4.13334 17.4661H17.4667C18.3871 17.4661 19.1333 16.72 19.1333 15.7995V5.79948C19.1333 4.879 18.3871 4.13281 17.4667 4.13281Z"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.1333 6.63281L11.6583 11.3828C11.4011 11.544 11.1036 11.6295 10.8 11.6295C10.4964 11.6295 10.1989 11.544 9.94167 11.3828L2.46667 6.63281"
            stroke="#CDCDCD"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const contentSections: ContentSection[] = [
    {
      id: "welcome",
      title: "Welcome to VYALUX!",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.13342 17.0443V4.54427C4.13342 3.99174 4.35292 3.46183 4.74362 3.07113C5.13432 2.68043 5.66422 2.46094 6.21676 2.46094H17.4668V19.1276H6.21676C5.66422 19.1276 5.13432 18.9081 4.74362 18.5174C4.35292 18.1267 4.13342 17.5968 4.13342 17.0443ZM4.13342 17.0443C4.13342 16.4917 4.35292 15.9618 4.74362 15.5711C5.13432 15.1804 5.66422 14.9609 6.21676 14.9609H17.4668"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      content: (
        <p className="text-white font-normal text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.625rem,1.8vw,1.875rem)]">
          These terms and conditions outline the rules and regulations for the
          use of VYALUX's website and services. By accessing this website and
          engaging our services, we assume you accept these terms and
          conditions. Do not continue to use VYALUX if you do not agree to take
          all of the terms and conditions stated on this page.
        </p>
      ),
    },
    {
      id: "terminologies",
      title: "Terminologies",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3001 2.0625H5.80009C5.35806 2.0625 4.93414 2.23809 4.62158 2.55066C4.30902 2.86322 4.13342 3.28714 4.13342 3.72917V17.0625C4.13342 17.5045 4.30902 17.9284 4.62158 18.241C4.93414 18.5536 5.35806 18.7292 5.80009 18.7292H15.8001C16.2421 18.7292 16.666 18.5536 16.9786 18.241C17.2912 17.9284 17.4668 17.5045 17.4668 17.0625V6.22917L13.3001 2.0625Z"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.4667 2.0625V5.39583C12.4667 5.83786 12.6423 6.26178 12.9548 6.57434C13.2674 6.88691 13.6913 7.0625 14.1333 7.0625H17.4667"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.13334 7.89844H7.46667"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1333 11.2344H7.46667"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1333 14.5625H7.46667"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-white font-normal text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.625rem,1.8vw,1.875rem)]">
            The following terminology applies to these terms and conditions:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-vyalux-primary mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-white text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.5rem,1.8vw,1.75rem)]">
                <span className="font-bold">"Company"</span> (or "we" or "us" or
                "our") refers to VYALUX
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-vyalux-primary mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-white text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.5rem,1.8vw,1.75rem)]">
                <span className="font-bold">"You"</span> refers to the person or
                entity accessing our services
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-vyalux-primary mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-white text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.5rem,1.8vw,1.75rem)]">
                <span className="font-bold">"Services"</span> refers to all IT
                consulting, development, and support services provided
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-vyalux-primary mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-white text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.5rem,1.8vw,1.75rem)]">
                <span className="font-bold">"Agreement"</span> refers to these
                terms and any service-specific contracts
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "website-access",
      title: "Website Access",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1333 17.5V15.8333C14.1333 14.9493 13.7822 14.1014 13.157 13.4763C12.5319 12.8512 11.6841 12.5 10.8 12.5H5.80001C4.91595 12.5 4.06811 12.8512 3.44299 13.4763C2.81786 14.1014 2.46667 14.9493 2.46667 15.8333V17.5"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.30001 9.16667C10.141 9.16667 11.6333 7.67428 11.6333 5.83333C11.6333 3.99238 10.141 2.5 8.30001 2.5C6.45906 2.5 4.96667 3.99238 4.96667 5.83333C4.96667 7.67428 6.45906 9.16667 8.30001 9.16667Z"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.1334 17.501V15.8344C19.1329 15.0958 18.8871 14.3784 18.4346 13.7946C17.9821 13.2109 17.3485 12.794 16.6334 12.6094"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1334 2.60938C14.8504 2.79296 15.486 3.20996 15.9398 3.79463C16.3936 4.37931 16.64 5.0984 16.64 5.83854C16.64 6.57868 16.3936 7.29777 15.9398 7.88245C15.486 8.46712 14.8504 8.88412 14.1334 9.06771"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      content: (
        <p className="text-white font-normal text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.625rem,1.8vw,1.875rem)]">
          By using our website, you agree not to misuse it by any means,
          including attempts to divert traffic, disrupt functionalities, upload
          illegal content, or engage in harmful activities.
        </p>
      ),
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4668 11.4249C17.4668 15.5915 14.5501 17.6749 11.0834 18.8832C10.9019 18.9447 10.7047 18.9418 10.5251 18.8749C7.05009 17.6749 4.13342 15.5915 4.13342 11.4249V5.59152C4.13342 5.37051 4.22122 5.15855 4.3775 5.00226C4.53378 4.84598 4.74574 4.75819 4.96676 4.75819C6.63342 4.75819 8.71676 3.75819 10.1668 2.49152C10.3433 2.34069 10.5679 2.25781 10.8001 2.25781C11.0323 2.25781 11.2569 2.34069 11.4334 2.49152C12.8918 3.76652 14.9668 4.75819 16.6334 4.75819C16.8544 4.75819 17.0664 4.84598 17.2227 5.00226C17.379 5.15855 17.4668 5.37051 17.4668 5.59152V11.4249Z"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-white font-normal text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.625rem,1.8vw,1.875rem)]">
            All content, features, and functionality on this website are owned
            by VYALUX and are protected by international copyright, trademark,
            and other intellectual property laws.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-vyalux-primary mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-white text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.5rem,1.8vw,1.75rem)]">
                You may not modify, distribute, or create derivative works
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-vyalux-primary mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-white text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.5rem,1.8vw,1.75rem)]">
                Commercial use requires explicit written permission
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-vyalux-primary mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-white text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.5rem,1.8vw,1.75rem)]">
                Reverse engineering of our software solutions is prohibited
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "service-engagement",
      title: "Service Engagement",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4667 6.03125H4.13334C3.21287 6.03125 2.46667 6.77744 2.46667 7.69792V16.0312C2.46667 16.9517 3.21287 17.6979 4.13334 17.6979H17.4667C18.3871 17.6979 19.1333 16.9517 19.1333 16.0312V7.69792C19.1333 6.77744 18.3871 6.03125 17.4667 6.03125Z"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1333 17.6953V4.36198C14.1333 3.91995 13.9577 3.49603 13.6452 3.18347C13.3326 2.87091 12.9087 2.69531 12.4667 2.69531H9.13334C8.69131 2.69531 8.26739 2.87091 7.95483 3.18347C7.64227 3.49603 7.46667 3.91995 7.46667 4.36198V17.6953"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      content: (
        <p className="text-white font-normal text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.625rem,1.8vw,1.875rem)]">
          All IT services are provided on a project basis as outlined in
          individual service agreements. Our contracts include detailed scope of
          work, deliverables, timelines, and payment terms. Changes to project
          scope require written approval and may result in additional charges.
          We maintain professional standards and deliver solutions that meet
          agreed specifications and industry best practices.
        </p>
      ),
    },
    {
      id: "privacy-control",
      title: "Privacy & Control",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8 7.46094C14.9422 7.46094 18.3 6.34165 18.3 4.96094C18.3 3.58023 14.9422 2.46094 10.8 2.46094C6.65791 2.46094 3.30005 3.58023 3.30005 4.96094C3.30005 6.34165 6.65791 7.46094 10.8 7.46094Z"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.30005 4.96094V16.6276C3.30005 17.2906 4.09023 17.9265 5.49675 18.3954C6.90327 18.8642 8.81093 19.1276 10.8 19.1276C12.7892 19.1276 14.6968 18.8642 16.1033 18.3954C17.5099 17.9265 18.3 17.2906 18.3 16.6276V4.96094"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.30005 10.7969C3.30005 11.4599 4.09023 12.0958 5.49675 12.5646C6.90327 13.0335 8.81093 13.2969 10.8 13.2969C12.7892 13.2969 14.6968 13.0335 16.1033 12.5646C17.5099 12.0958 18.3 11.4599 18.3 10.7969"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      content: (
        <p className="text-white font-normal text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.625rem,1.8vw,1.875rem)]">
          We collect and process personal data in accordance with our Privacy
          Policy and applicable data protection laws. Your data is used solely
          for service delivery, communication, and business operations. We
          implement appropriate security measures to protect your information
          and do not sell or share your data with third parties without your
          explicit consent, except as required by law.
        </p>
      ),
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9083 15.4022L12.2417 3.73554C12.0963 3.47904 11.8855 3.2657 11.6308 3.11726C11.376 2.96883 11.0865 2.89062 10.7917 2.89062C10.4968 2.89062 10.2073 2.96883 9.95255 3.11726C9.69782 3.2657 9.48702 3.47904 9.34166 3.73554L2.67499 15.4022C2.52806 15.6567 2.45101 15.9455 2.45166 16.2393C2.45231 16.5331 2.53064 16.8216 2.6787 17.0754C2.82675 17.3292 3.03928 17.5394 3.29474 17.6846C3.55019 17.8298 3.8395 17.9048 4.13332 17.9022H17.4667C17.7591 17.9019 18.0463 17.8247 18.2994 17.6783C18.5525 17.5319 18.7627 17.3214 18.9088 17.0681C19.0548 16.8148 19.1317 16.5275 19.1316 16.2351C19.1315 15.9427 19.0545 15.6554 18.9083 15.4022Z"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.8 7.89844V11.2318"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.8 14.5625H10.8084"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-white font-normal text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.625rem,1.8vw,1.875rem)]">
            VYALUX shall not be liable for any indirect, incidental, special, or
            consequential damages, including:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-vyalux-primary mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-white text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.5rem,1.8vw,1.75rem)]">
                Loss of profits, data, or business opportunities
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-vyalux-primary mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-white text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.5rem,1.8vw,1.75rem)]">
                Service interruptions due to third-party systems
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-vyalux-primary mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-white text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.5rem,1.8vw,1.75rem)]">
                Damages resulting from unauthorized access to your systems
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-vyalux-primary mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-white text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.5rem,1.8vw,1.75rem)]">
                Force majeure events beyond our reasonable control
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "third-party-links",
      title: "Third-Party Links",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3 2.5H18.3V7.5"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.13342 11.6667L18.3001 2.5"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8 10.8333V15.8333C15.8 16.2754 15.6245 16.6993 15.3119 17.0118C14.9993 17.3244 14.5754 17.5 14.1334 17.5H4.96672C4.52469 17.5 4.10076 17.3244 3.7882 17.0118C3.47564 16.6993 3.30005 16.2754 3.30005 15.8333V6.66667C3.30005 6.22464 3.47564 5.80072 3.7882 5.48816C4.10076 5.17559 4.52469 5 4.96672 5H9.96672"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      content: (
        <p className="text-white font-normal text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.625rem,1.8vw,1.875rem)]">
          Our website may contain links to third-party websites or services that
          are not owned or controlled by VYALUX. We have no control over and
          assume no responsibility for the content, privacy policies, or
          practices of any third-party websites or services. You acknowledge and
          agree that VYALUX shall not be responsible for any damage or loss
          caused by your use of such websites or services.
        </p>
      ),
    },
    {
      id: "reservation-rights",
      title: "Reservation of Rights",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1334 13.9245L16.6334 7.25781L19.1334 13.9245C18.4084 14.4661 17.5334 14.7578 16.6334 14.7578C15.7334 14.7578 14.8584 14.4661 14.1334 13.9245Z"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.46667 13.9245L4.96667 7.25781L7.46667 13.9245C6.74167 14.4661 5.86667 14.7578 4.96667 14.7578C4.06667 14.7578 3.19167 14.4661 2.46667 13.9245Z"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.63342 18.0938H14.9668"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.8 3.09375V18.0937"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.30005 6.42448H4.96672C6.63338 6.42448 9.13338 5.59115 10.8 4.75781C12.4667 5.59115 14.9667 6.42448 16.6334 6.42448H18.3"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-white font-normal text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.625rem,1.8vw,1.875rem)]">
            VYALUX reserves the following rights:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-vyalux-primary mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-white text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.5rem,1.8vw,1.75rem)]">
                Modify or discontinue services with reasonable notice
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-vyalux-primary mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-white text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.5rem,1.8vw,1.75rem)]">
                Update these terms and conditions as needed
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-vyalux-primary mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-white text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.5rem,1.8vw,1.75rem)]">
                Refuse service to any individual or organization
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-vyalux-primary mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-white text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.5rem,1.8vw,1.75rem)]">
                Protect our intellectual property and proprietary methods
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8834 10.6094L6.21674 17.276C5.88522 17.6076 5.43558 17.7938 4.96674 17.7938C4.4979 17.7938 4.04826 17.6076 3.71674 17.276C3.38522 16.9445 3.19897 16.4949 3.19897 16.026C3.19897 15.5572 3.38522 15.1076 3.71674 14.776L10.3834 8.10938"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1334 13.5312L19.1334 8.53125"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.46667 6.85937L12.4667 1.85938"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.30005 6.03125L14.9667 12.6979"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3001 9.36198L11.6334 2.69531"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      content: (
        <p className="text-white font-normal text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.625rem,1.8vw,1.875rem)]">
          These terms and conditions are governed by and construed in accordance
          with the laws of the jurisdiction where VYALUX operates. Any disputes
          arising from these terms or our services shall be subject to the
          exclusive jurisdiction of the courts in that jurisdiction. If any
          provision of these terms is found to be unenforceable, the remaining
          provisions shall remain in full force and effect.
        </p>
      ),
    },
    {
      id: "contact-us",
      title: "Contact Us",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4667 4.13281H4.13334C3.21287 4.13281 2.46667 4.879 2.46667 5.79948V15.7995C2.46667 16.72 3.21287 17.4661 4.13334 17.4661H17.4667C18.3871 17.4661 19.1333 16.72 19.1333 15.7995V5.79948C19.1333 4.879 18.3871 4.13281 17.4667 4.13281Z"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.1333 6.63281L11.6583 11.3828C11.4011 11.544 11.1036 11.6295 10.8 11.6295C10.4964 11.6295 10.1989 11.544 9.94167 11.3828L2.46667 6.63281"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <div className="bg-vyalux-black border border-vyalux-black rounded-lg p-6">
            <p className="text-white font-normal text-[clamp(1rem,1.05vw,1.125rem)] leading-[clamp(1.625rem,1.8vw,1.875rem)] mb-4">
              For any questions or information regarding these terms and
              conditions, please contact us:
            </p>
            <div className="flex items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9335 3.25781H3.26681C2.53043 3.25781 1.93347 3.85477 1.93347 4.59115V12.5911C1.93347 13.3275 2.53043 13.9245 3.26681 13.9245H13.9335C14.6699 13.9245 15.2668 13.3275 15.2668 12.5911V4.59115C15.2668 3.85477 14.6699 3.25781 13.9335 3.25781Z"
                  stroke="#AB322C"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.2668 5.25781L9.28681 9.05781C9.08099 9.18676 8.84302 9.25515 8.60014 9.25515C8.35726 9.25515 8.11929 9.18676 7.91347 9.05781L1.93347 5.25781"
                  stroke="#AB322C"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a
                href="mailto:legal@vyalux.com"
                className="ml-2 text-vyalux-primary text-base font-medium leading-6 hover:underline"
              >
                info@vyalux.com
              </a>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-vyalux-dark font-montserrat">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-[5vw] py-8 sm:py-16 lg:pt-[110px]">
        {/* Mobile Header with Menu Toggle */}
        <div className="lg:hidden mb-6">
          <div className="space-y-4 ">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight uppercase">
              Terms and Conditions
            </h1>
            <p className="text-white text-base sm:text-lg font-semibold leading-6">
              All you need to know about VYALUX Terms & Conditions.
            </p>
            <div className="h-1 bg-gradient-to-r from-vyalux-primary to-vyalux-primary rounded-full"></div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mt-4 flex items-center justify-between w-full bg-vyalux-black border border-vyalux-border rounded-xl p-4"
          >
            <span className="text-vyalux-secondary text-lg font-semibold">
              Table of Contents
            </span>
            <svg
              className={`w-5 h-5 text-vyalux-text-gray transform transition-transform ${isMobileMenuOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="mt-2 bg-vyalux-black border border-vyalux-border rounded-xl p-4">
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center w-full p-3 rounded-lg hover:bg-vyalux-primary/10 transition-colors duration-200 group"
                  >
                    <div className="text-vyalux-text-gray group-hover:text-vyalux-primary transition-colors duration-200">
                      {item.icon}
                    </div>
                    <span className="ml-3 text-vyalux-text-gray text-[clamp(0.875rem,0.9vw,1rem)] font-normal leading-[clamp(1.25rem,1.4vw,1.5rem)] group-hover:text-vyalux-primary transition-colors duration-200">
                      {item.label}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          {/* Desktop Fixed Left Sidebar */}
          <div
            className="hidden lg:block w-[22vw] min-w-[300px] max-w-[420px] flex-shrink-0"
            ref={sidebarRef}
          >
            <div
              className="fixed z-20"
              style={{
                top: 165,
                left: sidebarLeft,
                width: "clamp(300px,22vw,420px)",
              }}
            >
              <div
                onWheel={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  const el = e.currentTarget;
                  el.scrollTop += e.deltaY;
                }}
                data-lenis-prevent=""
                data-lenis-prevent-wheel=""
                data-lenis-prevent-touch=""
                className="bg-vyalux-black border border-vyalux-border rounded-xl p-6 max-h-[calc(100vh-145px)] overflow-y-auto overscroll-contain"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#AEB1B5 transparent",
                }}
              >
                <h3 className="text-vyalux-secondary text-lg font-semibold leading-7 mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center w-full p-3 rounded-lg hover:bg-vyalux-primary/10 transition-colors duration-200 group"
                    >
                      <div className="text-vyalux-text-gray group-hover:text-vyalux-primary transition-colors duration-200">
                        {item.icon}
                      </div>
                      <span className="ml-3 text-vyalux-text-gray text-[clamp(0.875rem,0.9vw,1rem)] font-normal leading-[clamp(1.25rem,1.4vw,1.5rem)] group-hover:text-vyalux-primary transition-colors duration-200">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div className="space-y-6">
              {/* Desktop Header */}
              <div className="hidden lg:block space-y-4">
                <h1 className="text-white font-bold uppercase text-[clamp(2.5rem,3.5vw,5rem)] leading-[clamp(3rem,4vw,5rem)]">
                  Terms and Conditions
                </h1>
                <p className="text-white font-semibold text-[clamp(1.125rem,1.4vw,1.5rem)] leading-[clamp(1.75rem,2vw,2rem)]">
                  All you need to know about VYALUX Terms & Conditions.
                </p>
                <div className="h-1 bg-gradient-to-r from-vyalux-primary to-vyalux-primary rounded-full"></div>
              </div>

              {/* Content Sections */}
              <div ref={contentRef} className="space-y-6 pt-2">
                {contentSections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="bg-vyalux-black border border-vyalux-border rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm"
                  >
                    <div className="flex items-center mb-4 lg:mb-6">
                      <div className="bg-vyalux-primary p-2 rounded-lg">
                        {section.icon}
                      </div>
                      <h2 className="ml-3 text-white font-bold text-[clamp(1.125rem,1.6vw,2rem)] leading-[clamp(1.75rem,2.2vw,2.5rem)]">
                        {section.title}
                      </h2>
                    </div>
                    <div className="text-vyalux-text">{section.content}</div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-6 text-center">
                <p className="text-vyalux-text-muted text-sm font-normal leading-5">
                  Last updated: October 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
