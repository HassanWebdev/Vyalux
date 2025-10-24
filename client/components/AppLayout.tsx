import { useState, useEffect, useRef } from "react";
import { Layout } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Lenis from "lenis";
import { AnimatedBlobButton } from "./ui/animated-blob-button";
import { MenuLevel } from "../data/navigation/menuData";
import NavigationDrawer from "./navigation/NavigationDrawer";

const { Header, Content } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<MenuLevel>("main");
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null,
  );
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  const navigate = useNavigate();
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  // Initialize Lenis smooth scroll app-wide
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    setLenisInstance(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  // Set loaded state after mount with a slight delay for animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 100); // Small delay to ensure DOM is fully ready

    return () => clearTimeout(timer);
  }, []);

  // Reset menu to main when drawer closes
  useEffect(() => {
    if (!drawerOpen) {
      setCurrentMenu("main");
    }
  }, [drawerOpen]);

  // Add a class to body when drawer is open to prevent scrolling
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Handle scroll behavior for navbar
  useEffect(() => {
    if (drawerOpen) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setIsVisible(true);
        setScrollDirection(null);
      } else {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setScrollDirection("down");
          setIsVisible(false);
        } else {
          // Scrolling up
          setScrollDirection("up");
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, drawerOpen]);

  return (
    <>
      {/* Fixed Navbar with animations */}
      <Header
        className={`px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[70px] 2xl:px-[70px] transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "white",
          borderBottom: "1px solid #f0f0f0",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo with slide-in from left animation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            minWidth: 0,
            flex: 1,
          }}
          className={`transition-all duration-700 ease-out ${
            hasLoaded
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          <button
            onClick={() => {
              setDrawerOpen(false);
              navigate("/");
            }}
            className="transition-transform duration-300 hover:scale-105"
            style={{
            
              padding: 0,
              cursor: "pointer",
              display: "inline-block",
            }}
          >
            <img
              src="/logo.png"
              alt="Vyalux Logo"
            
              className="w-[99px] sm:w-[110px] md:w-[123px] lg:w-[143px] xl:w-[158px] 2xl:w-[178px]"
            />
          </button>
        </div>

        {/* Desktop CTA + Menu Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            flexShrink: 0,
          }}
          className="gap-4 lg:gap-[30px]"
        >
          {/* CTA Button with slide-in from top animation - Hidden on mobile */}
          <div
            className={`hidden lg:block transition-all duration-700 ease-out ${
              hasLoaded
                ? "translate-y-0 opacity-100"
                : "-translate-y-20 opacity-0"
            }`}
          >
            <Link to={"/contact-us"}>
              <AnimatedBlobButton
                blobColor="#AB322C"
                textColor="#040404"
                className="w-[393px] h-[48px]"
              >
                Start a Conversation
              </AnimatedBlobButton>
            </Link>
          </div>

          {/* Menu/Close Button with slide-in from right animation */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className={`transition-all duration-700 ease-out hover:scale-110 ${
              hasLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
            style={{
              position: "relative",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            {drawerOpen ? (
              // Cross/Close Icon when drawer is open
              <>
                <div
                  className="transition-all duration-300"
                  style={{
                    position: "absolute",
                    width: "32px",
                    height: "2px",
                    backgroundColor: "#040404",
                    transform: "rotate(45deg)",
                  }}
                />
                <div
                  className="transition-all duration-300"
                  style={{
                    position: "absolute",
                    width: "32px",
                    height: "2px",
                    backgroundColor: "#040404",
                    transform: "rotate(-45deg)",
                  }}
                />
              </>
            ) : (
              <>
                <div
                  className="transition-all duration-300"
                  style={{
                    position: "absolute",
                    width: "32px",
                    height: "2px",
                    backgroundColor: "#040404",
                    left: "8px",
                    top: "16px",
                  }}
                />
                <div
                  className="transition-all duration-300"
                  style={{
                    position: "absolute",
                    width: "24px",
                    height: "2px",
                    backgroundColor: "#040404",
                    left: "16px",
                    top: "24px",
                  }}
                />
              </>
            )}
          </button>
        </div>
      </Header>

      {/* Full-Screen Navigation Drawer */}
      <NavigationDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        currentMenu={currentMenu}
        setCurrentMenu={setCurrentMenu}
      />

      {/* Main Content - Full Width */}
      <Layout style={{ marginTop: "80px" }}>
        <Content
          style={{
            minHeight: "calc(100vh - 80px)",
            backgroundColor: "#040404",
          }}
        >
          {children}
        </Content>
      </Layout>
    </>
  );
};

export default AppLayout;
