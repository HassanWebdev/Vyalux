import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ConfigProvider } from "antd";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import AppLayout from "./components/AppLayout";
import SplashAnimation from "./components/SplashAnimation";
import Index from "./pages/Index";
import Laravel from "./pages/Laravel";
import MernStack from "./pages/MernSatck";
import React from "./pages/React";
import Vue from "./pages/Vue";
import Nest from "./pages/Nest";
import Angular from "./pages/Angular"; // Placeholder for Angular page
import PythonDjango from "./pages/Python"; // Placeholder for Python & Django page
import Php from "./pages/Php"; // Placeholder for PHP page
import Qa from "./pages/Qa"; // Placeholder for QA page
import Saas from "./pages/Saas"; // Placeholder for SaaS page
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CrossPlatform from "./pages/CrossPlateform";
import PWA from "./pages/PWA";
import FlutterDevelopment from "./pages/Flutter";
import WP from "./pages/WP-ios";
import ChatbotsPage from "./pages/AI/Chatbots";
import NlpPage from "./pages/AI/NLP";
import MlpPage from "./pages/AI/MLP";
import DAV from "./pages/AI/DAV";
import AIDevelopment from "./pages/AI/AIDevelopment";
import AIMarketing from "./pages/AI/AIMarketing";
import SEOPage from "./pages/DMCS/SEO";
import PPCPage from "./pages/DMCS/PPC";
import SocialMediaPage from "./pages/DMCS/SocialMedia";
import ContentStrategyPage from "./pages/DMCS/ContentStrategy";
import EmailMarketingPage from "./pages/DMCS/EmailMarketing";
import GoogleAdsPage from "./pages/DMCS/GoogleAds";
import About from "./pages/About";
import Howitworks from "@/pages/Howitworks";

// Import CSCS pages
import AWSCloudDevelopment from "./pages/CSCS/AWSCloudDevelopment";
import CloudApplicationDevelopment from "./pages/CSCS/CloudApplicationDevelopment";
import CloudMigrationService from "./pages/CSCS/CloudMigrationService";
import CloudMaintenanceSupport from "./pages/CSCS/CloudMaintenanceSupport";

// Import EP pages
import WordPress from "./pages/EP/WordPress";
import ShopifyStore from "./pages/EP/ShopifyStore";
import CustomEcommerce from "./pages/EP/CustomEcommerce";
import CrmSolutions from "./pages/EP/CrmSolutions";

// Import additional ES pages
import DedicatedTeam from "./pages/ES/DedicatedTeam";
import AIEngineer from "./pages/ES/AIEngineer";
import DigitalMarketingExpert from "./pages/ES/DigitalMarketingExpert";
import QASpecialist from "./pages/ES/QASpecialist";
import BPO from "./pages/ES/BPO";
import { ToastContainer } from "react-toastify";
import ContactUsPage from "./components/ContactUs";
import TermsAndConditions from "./components/TermAndCondtions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import HelpScoutBeacon from "./components/HelpScoutBeccon";

const queryClient = new QueryClient();

// Improved ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  const resettingRef = useRef(false);

  const performScrollReset = () => {
    if (resettingRef.current) return;
    resettingRef.current = true;
    try {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    } catch {}
    const hardReset = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
    };
    hardReset();
    const raf1 = requestAnimationFrame(hardReset);
    const raf2 = requestAnimationFrame(() => {
      hardReset();
      setTimeout(hardReset, 0);
      setTimeout(hardReset, 50);
      setTimeout(hardReset, 120);
    });
    setTimeout(() => {
      // @ts-ignore
      if (window?.ScrollTrigger?.refresh) {
        // @ts-ignore
        window.ScrollTrigger.refresh();
      }
    }, 140);
    // Release the lock a bit later so rapid clicks still coalesce
    setTimeout(() => {
      resettingRef.current = false;
    }, 200);
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  };

  useEffect(() => {
    // Route path changed
    const cleanup = performScrollReset();
    return cleanup;
  }, [pathname]);

  useEffect(() => {
    // Handle clicks on links pointing to the same pathname
    const handleClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return; // only left click
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      let el = e.target as HTMLElement | null;
      while (el && el !== document.body) {
        if (el.tagName === "A") break;
        el = el.parentElement;
      }
      if (!el || el.tagName !== "A") return;

      const anchor = el as HTMLAnchorElement;
      if (anchor.target && anchor.target !== "_self") return;
      if (!anchor.href) return;

      // Ignore external
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      // Same path (ignore hash differences unless empty hash)
      if (url.pathname === pathname) {
        // If navigating to a different hash let browser handle (optional: still reset)
        if (url.hash && url.hash !== window.location.hash) return;
        // Defer until after react-router decides (even if it ignores because same path)
        requestAnimationFrame(() => {
          performScrollReset();
        });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* <SplashAnimation /> */}
        <Toaster />
        <Sonner />
        <ToastContainer
          position="top-right"
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#AB322C",
              fontFamily:
                "Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
            },
          }}
        >
          <BrowserRouter>
            <ScrollToTop /> {/* Add this component inside BrowserRouter */}
            <AppLayout>
              <Routes>
                <Route path="/" element={<Index />} />

                {/* Website Development Technology Routes */}
                <Route
                  path="/services/website-development/laravel"
                  element={<Laravel />}
                />
                <Route
                  path="/services/website-development/mern-stack"
                  element={<MernStack />}
                />
                <Route
                  path="/services/website-development/react"
                  element={<React />}
                />
                <Route
                  path="/services/website-development/vue"
                  element={<Vue />}
                />
                <Route
                  path="/services/website-development/nestjs"
                  element={<Nest />}
                />
                <Route
                  path="/services/website-development/angular"
                  element={<Angular />}
                />
                <Route
                  path="/services/website-development/python-django"
                  element={<PythonDjango />}
                />
                <Route
                  path="/services/website-development/php"
                  element={<Php />}
                />

                <Route
                  path="/services/website-development/qa"
                  element={<Qa />}
                />
                <Route
                  path="/services/website-development/saas"
                  element={<Saas />}
                />

                {/* App Development Routes */}
                <Route
                  path="/services/app-development/Cross-Platform"
                  element={<CrossPlatform />}
                />
                <Route
                  path="/services/app-development/IOS-Android"
                  element={<WP />}
                />
                <Route
                  path="/services/app-development/flutter"
                  element={<FlutterDevelopment />}
                />
                <Route path="/services/app-development/PWA" element={<PWA />} />

                {/* AI Service*/}
                <Route
                  path="/services/ai/Chatbots"
                  element={<ChatbotsPage />}
                />
                <Route path="/services/ai/Nlp" element={<NlpPage />} />
                <Route path="/services/ai/Mlp" element={<MlpPage />} />
                <Route path="/services/ai/DAV" element={<DAV />} />
                <Route
                  path="/services/ai/AI-Marketing"
                  element={<AIMarketing />}
                />
                <Route
                  path="/services/ai/AI-Development"
                  element={<AIDevelopment />}
                />

                {/* EP Routes - existing */}
                <Route path="/services/ep/wordpress" element={<WordPress />} />
                <Route
                  path="/services/ep/shopify-store"
                  element={<ShopifyStore />}
                />
                <Route
                  path="/services/ep/custom-ecommerce"
                  element={<CustomEcommerce />}
                />
                <Route
                  path="/services/ep/crm-solutions"
                  element={<CrmSolutions />}
                />

                {/* EP Routes - new */}
                <Route
                  path="/services/es/dedicated-team"
                  element={<DedicatedTeam />}
                />
                <Route
                  path="/services/es/ai-engineer"
                  element={<AIEngineer />}
                />
                <Route
                  path="/services/es/digital-marketing-expert"
                  element={<DigitalMarketingExpert />}
                />
                <Route
                  path="/services/es/qa-specialist"
                  element={<QASpecialist />}
                />
                <Route path="/services/es/bpo" element={<BPO />} />

                {/* DMCS Routes */}
                <Route path="/services/dmcs/seo" element={<SEOPage />} />
                <Route path="/services/dmcs/ppc" element={<PPCPage />} />
                <Route
                  path="/services/dmcs/social-media"
                  element={<SocialMediaPage />}
                />
                <Route
                  path="/services/dmcs/content-strategy"
                  element={<ContentStrategyPage />}
                />
                <Route
                  path="/services/dmcs/email-marketing"
                  element={<EmailMarketingPage />}
                />
                <Route
                  path="/services/dmcs/google-ads"
                  element={<GoogleAdsPage />}
                />

                {/* CSCS Routes */}
                <Route
                  path="/services/cscs/aws-cloud-development"
                  element={<AWSCloudDevelopment />}
                />
                <Route
                  path="/services/cscs/cloud-application-development"
                  element={<CloudApplicationDevelopment />}
                />
                <Route
                  path="/services/cscs/cloud-migration-service"
                  element={<CloudMigrationService />}
                />
                <Route
                  path="/services/cscs/cloud-maintenance-support"
                  element={<CloudMaintenanceSupport />}
                />

                <Route path="/about" element={<About />} />
                <Route path="/how-it-works" element={<Howitworks />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route
                  path="/terms-and-conditions"
                  element={<TermsAndConditions />}
                />
                <Route
                  path="/Privacy-Policy"
                  element={<PrivacyPolicy />}
                />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <HelpScoutBeacon />
            </AppLayout>
          </BrowserRouter>
        </ConfigProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
