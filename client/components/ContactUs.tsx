import { useEffect } from "react";
import Footer from "./Footer";

export default function ContactSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Custom Calendly styling
    const style = document.createElement("style");
    style.textContent = `
      .calendly-inline-widget iframe {
        border-radius: 12px !important;
        border: 1px solid #333 !important;
        box-shadow: 0 10px 30px rgba(171, 50, 44, 0.1) !important;
      }
      
      .calendly-badge-widget {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="contact-section bg-gradient-to-br from-[#040404] via-[#0a0a0a] to-[#151515] relative  overflow-hidden">
      {/* Background decorative elements */}
      <div className="py-20 px-4 lg:px-[70px]">
        {" "}
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's <span className="text-[#AB322C]">Connect</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to transform your vision into reality? Schedule a
              consultation with our expert team and discover how we can elevate
              your business to new heights.
            </p>
          </div>

          {/* Calendly Widget Section - Full Width */}
          <div className="w-full">
            <div
              className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 shadow-2xl "
              style={{}}
            >
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Schedule Your Consultation
                </h3>
                <p className="text-gray-400">
                  Choose a time that works best for you. All meetings are
                  conducted professionally and confidentially.
                </p>
              </div>

              <div
                className="calendly-inline-widget w-full"
                data-url="https://calendly.com/vyalux-info/30min?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=AB322C"
                style={{
                  height: "100vh",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
