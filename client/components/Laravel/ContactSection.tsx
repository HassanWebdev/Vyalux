import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import { toast } from "react-toastify";
gsap.registerPlugin(ScrollTrigger);

// Small inline loader (spinner)
const ButtonLoader = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="status"
    aria-label="Loading"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

export default function ContactSection() {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    const contactSection = document.querySelector(".contact-section");
    const contactFormCard = document.querySelector(".contact-form-card");
    const contactInputs = document.querySelectorAll(".contact-input-wrapper");
    const contactSubmitBtn = document.querySelector(".contact-submit-btn");
    const contactContent = document.querySelector(".contact-content");

    if (!contactSection) return;

    if (isMobile) {
      // Mobile: show immediately, no scroll dependency
      gsap.set(
        [contactFormCard, contactContent, contactInputs, contactSubmitBtn],
        { opacity: 1, y: 0, x: 0, scale: 1 },
      );
      return; // Skip desktop animations
    }

    // Contact Form Section Animations
    // Set initial states
    gsap.set([contactFormCard, contactContent], {
      opacity: 0,
      y: 60,
    });

    gsap.set(contactInputs, {
      opacity: 0,
      x: -30,
    });

    gsap.set(contactSubmitBtn, {
      opacity: 0,
      scale: 0.9,
    });

    // Contact section entrance animation
    const contactTrigger = ScrollTrigger.create({
      trigger: contactSection,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(contactContent, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.to(contactFormCard, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
        });

        gsap.to(contactInputs, {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.4,
        });

        gsap.to(contactSubmitBtn, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.9,
        });
      },
    });

    // Form input focus animations
    contactInputs.forEach((inputWrapper) => {
      const input = inputWrapper.querySelector("input");
      if (!input) return;
      input.addEventListener("focus", () => {
        gsap.to(inputWrapper, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      input.addEventListener("blur", () => {
        gsap.to(inputWrapper, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

    // Submit button hover animation
    if (contactSubmitBtn) {
      contactSubmitBtn.addEventListener("mouseenter", () => {
        gsap.to(contactSubmitBtn, {
          scale: 1.03,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      contactSubmitBtn.addEventListener("mouseleave", () => {
        gsap.to(contactSubmitBtn, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      // Click animation
      contactSubmitBtn.addEventListener("click", () => {
        gsap.to(contactSubmitBtn, {
          scale: 0.97,
          duration: 0.15,
          ease: "power2.in",
          yoyo: true,
          repeat: 1,
        });
      });
    }

    // Form card border glow animation
    if (contactFormCard) {
      gsap.to(contactFormCard, {
        boxShadow: "0 0 30px rgba(255,255,255,0.1)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }

    return () => {
      contactTrigger && contactTrigger.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="contact-section bg-[#040404] relative py-16 sm:py-20 lg:py-[110px] px-4 sm:px-6 lg:px-[70px] overflow-hidden right-0">
      {/* New right-half decorative background (larger) */}
      <div className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-end pointer-events-none">
        <img
          src="/WP/bgrec.png"
          alt="Decorative pattern"
          className="w-full h-full object-contain max-w-none"
        />
      </div>

      <div className="w-full mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-16 xl:gap-[106px]">
          {/* Left Side - Contact Form */}
          <div className="contact-form-container w-full lg:w-auto lg:max-w-[502px] order-2 lg:order-1">
            <div className="contact-form-card border border-white rounded-[30px] p-6 lg:p-[30px] bg-transparent w-full lg:w-[502px]">
              {/* Form Header */}
              <div className="contact-form-header mb-6 lg:mb-[25px]">
                <h3 className="contact-form-title text-white font-montserrat text-lg lg:text-[20px] font-bold leading-6 lg:leading-[28px] mb-4 lg:mb-[25px]">
                  Ready To Unlock The Tech Treasure Through AI Innovations?
                </h3>
                <p className="contact-form-subtitle text-white font-montserrat text-base lg:text-[20px] font-normal leading-6 lg:leading-[28px]">
                  Share your Ideas or requirements below and get connected with
                  our experts.
                </p>
              </div>

              {/* Contact Us Heading */}
              <div className="contact-heading mb-6 lg:mb-[30px]">
                <h4 className="text-white font-montserrat text-2xl lg:text-[30px] font-bold leading-8 lg:leading-[42px]">
                  Contact Us
                </h4>
              </div>

              {/* Form Fields */}
              <ContactForm />
            </div>
          </div>

          {/* Right Side - Get Connected Content */}
          <div className="contact-content w-full lg:w-auto lg:max-w-[598px] order-1 lg:order-2 relative">
            <div className="contact-content-wrapper text-center lg:text-left">
              {/* Main Heading */}
              <h2 className="contact-main-title font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-[49.64px] font-semibold leading-tight lg:leading-normal uppercase mb-3 lg:mb-[14px]">
                <span className="text-white">Get</span>
                <span className="text-[#AB322C]"> Connected</span>
              </h2>

              {/* Subtitle */}
              <p className="contact-main-subtitle text-white font-montserrat text-base sm:text-lg lg:text-[20px] font-normal leading-6 lg:leading-[28px]">
                Have an Idea? Let's connect and shape the future together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  // Local state for form fields
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Added: generic change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.email.trim()) return "Email is required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return "Invalid email";
    if (!form.message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        "https://staging-be.vyafac.com/api/vyalux/contact",
        {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-VYALUX-Team-Secret":
              "dm4EUX392J5tSuKMzCeStJf9vX0HwnIpjyze4M6S3yM=",
          },
          timeout: 15000,
        },
      );
      if (res.data?.success) {
        toast.success(res.data.message || "Message sent.");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(res.data?.message || "Failed to submit.");
      }
    } catch (error: any) {
      const apiMsg =
        error?.response?.data?.message ||
        error?.message ||
        "Network / Server error";
      toast.error(apiMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-section">
      <form onSubmit={handleSubmit}>
        <div className="contact-form-fields space-y-5 lg:space-y-[25px] mb-6 lg:mb-[25px]">
          {/* Name Field */}
          <div className="contact-input-wrapper">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              disabled={loading}
              className="contact-input w-full lg:w-[446px] h-[55px] px-4 lg:px-[16px] py-3 lg:py-[18.5px] rounded-[5px] border-2 border-white bg-white text-black font-montserrat text-base lg:text-[17px] font-normal focus:outline-none focus:border-[#AB322C] transition-colors duration-300 shadow-[0_9px_24px_0_rgba(26,47,106,0.05)] disabled:opacity-60"
            />
          </div>
          {/* Email Field */}
          <div className="contact-input-wrapper">
            <input
              name="email"
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              disabled={loading}
              className="contact-input w-full lg:w-[446px] h-[55px] px-4 lg:px-[16px] py-3 lg:py-[18.5px] rounded-[5px] border-2 border-white bg-white text-black font-montserrat text-base lg:text-[17px] font-normal focus:outline-none focus:border-[#AB322C] transition-colors duration-300 shadow-[0_9px_24px_0_rgba(26,47,106,0.05)] disabled:opacity-60"
            />
          </div>
          {/* Phone Field */}
          <div className="contact-input-wrapper">
            <input
              name="phone"
              type="tel"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
              disabled={loading}
              className="contact-input w-full lg:w-[446px] h-[55px] px-4 lg:px-[16px] py-3 lg:py-[18.5px] rounded-[5px] border-2 border-white bg-white text-black font-montserrat text-base lg:text-[17px] font-normal focus:outline-none focus:border-[#AB322C] transition-colors duration-300 shadow-[0_9px_24px_0_rgba(26,47,106,0.05)] disabled:opacity-60"
            />
          </div>
          {/* Message Field */}
          <div className="contact-input-wrapper">
            <input
              name="message"
              type="text"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              disabled={loading}
              className="contact-input w-full lg:w-[450px] h-[55px] px-4 lg:px-[16px] py-3 lg:py-[18.5px] rounded-[5px] border-2 border-white bg-white text-black font-montserrat text-base lg:text-[17px] font-normal focus:outline-none focus:border-[#AB322C] transition-colors duration-300 shadow-[0_9px_24px_0_rgba(26,47,106,0.05)] disabled:opacity-60"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          aria-live="polite"
          className="contact-submit-btn w-full lg:w-[450px] h-[70px] bg-[#AB322C] border border-[#681110] rounded-[10px] py-4 lg:py-[25px] px-6 lg:px-[25px] text-white font-montserrat text-lg lg:text-[20px] font-medium leading-5 lg:leading-[20px] tracking-[3.5px] uppercase hover:bg-[#8B2822] transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-3">
              <ButtonLoader />
              <span className="tracking-[3.5px]">SENDING</span>
            </span>
          ) : (
            "SUBMIT"
          )}
        </button>
      </form>
    </div>
  );
}
