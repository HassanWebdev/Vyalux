// Contact information data for use across the application

export interface ContactInfo {
  businessHours: any;
  phone: string;
  email: string;
  address: {
    country: ReactNode;
    state: ReactNode;
    line1: string;
    line2: string;
    city: string;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

export const contactData: ContactInfo = {
  phone: "(248) 923-4300",
  email: "info@vyalux.com",
  address: {
    line1: "2118 East 3900 South",
    line2: "Suite 200",
    city: "Salt Lake City, UT 84124",
  },
  socialMedia: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
};
