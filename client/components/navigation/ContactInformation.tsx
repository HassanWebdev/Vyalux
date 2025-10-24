import React, { useRef } from "react";
import { applyContactLinkHoverAnimation } from "../../utils/animationUtils";
import { contactData } from "../../data/contactData";

const ContactInformation: React.FC = () => {
  const contactContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={contactContainerRef} className="text-white">
      {/* Contact Details */}
      <div className="mb-4">
        <h3 className="text-[#AB322C] font-medium mb-2 font-montserrat leading-tight text-[clamp(1rem,1.2vw+1rem,1.6rem)]">
          Contact Us
        </h3>
        <a
          href={`tel:+1${contactData.phone.replace(/-/g, "")}`}
          className="block text-[#F2F2F2] font-montserrat no-underline transition-colors hover:text-[#AB322C] leading-snug text-[clamp(1rem,0.55vw+0.75rem,1.5rem)]"
          onMouseEnter={(e) =>
            applyContactLinkHoverAnimation(e.currentTarget, true)
          }
          onMouseLeave={(e) =>
            applyContactLinkHoverAnimation(e.currentTarget, false)
          }
        >
          {contactData.phone}
        </a>

        <a
          href={`mailto:${contactData.email}`}
          className="block text-[#F2F2F2] font-montserrat no-underline transition-colors hover:text-[#AB322C] leading-snug text-[clamp(1rem,0.55vw+0.75rem,1.5rem)]"
          onMouseEnter={(e) =>
            applyContactLinkHoverAnimation(e.currentTarget, true)
          }
          onMouseLeave={(e) =>
            applyContactLinkHoverAnimation(e.currentTarget, false)
          }
        >
          {contactData.email}
        </a>
      </div>

      {/* Location */}
      <div className="mb-4">
        <h3 className="text-[#AB322C] font-medium mb-2 font-montserrat leading-tight text-[clamp(1rem,1.2vw+1rem,1.6rem)]">
          Location
        </h3>
        <p className="font-montserrat text-[#F2F2F2] leading-snug text-[clamp(1rem,0.55vw+0.75rem,1.5rem)]">
          Detroit, MI USA
        </p>
      </div>

      {/* Call to Action Button */}
      <div className="mt-6">
        <a
          href="/contact-us"
          className="inline-block bg-[#AB322C] hover:text-black  text-white py-3 px-6 rounded-lg font-montserrat font-medium transition hover:bg-opacity-80 text-[clamp(1rem,0.55vw+0.75rem,1.5rem)]"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default ContactInformation;
