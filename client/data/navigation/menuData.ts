export type MenuLevel =
  | "main"
  | "services"
  | "website-development"
  | "app-development"
  | "ai"
  | "ep"
  | "es"
  | "dmcs"
  | "cscs";

export interface MenuItem {
  name: string;
  href: string;
  hasSubmenu?: boolean;
}

// Main navigation items
export const navigationItems: MenuItem[] = [
  { name: "Services", href: "#services", hasSubmenu: true },
  { name: "About", href: "/about", hasSubmenu: false },
  { name: "How it Works", href: "/how-it-works", hasSubmenu: false },
  { name: "Contact", href: "/contact", hasSubmenu: false },
];

export const servicesSubmenu: MenuItem[] = [
  {
    name: "Digital Marketing & Content Services",
    href: "#dmcs",
    hasSubmenu: true,
  },
  {
    name: "Cloud Services & Cloud Solutions",
    href: "#cscs",
    hasSubmenu: true,
  },
  {
    name: "E-commerce & Platforms",
    href: "#ep",
    hasSubmenu: true,
  },
  {
    name: "Website Development",
    href: "#website-development",
    hasSubmenu: true,
  },
  {
    name: "Enterprise Services",
    href: "#es",
    hasSubmenu: true,
  },

  {
    name: "App Development",
    href: "#app-development",
    hasSubmenu: true,
  },
  {
    name: "AI",
    href: "#ai",
    hasSubmenu: true,
  },
];

export const websiteDevelopmentSubmenu: MenuItem[] = [
  { name: "Laravel", href: "/services/website-development/laravel" },
  { name: "MERN Stack", href: "/services/website-development/mern-stack" },
  { name: "React.Js", href: "/services/website-development/react" },
  { name: "Vue.Js", href: "/services/website-development/vue" },
  { name: "Nest.JS", href: "/services/website-development/nestjs" },
  { name: "Angular", href: "/services/website-development/angular" },
  {
    name: "Python & Django",
    href: "/services/website-development/python-django",
  },
  { name: "PHP", href: "/services/website-development/php" },
  {
    name: "QA (Manual & Automation)",
    href: "/services/website-development/qa",
  },
  {
    name: "SaaS Application Development",
    href: "/services/website-development/saas",
  },
];

export const appDevelopmentSubmenu: MenuItem[] = [
  {
    name: "Cross-Platform Development",
    href: "/services/app-development/Cross-Platform",
  },
  {
    name: "IOS & Android Development",
    href: "/services/app-development/IOS-Android",
  },
  { name: "Flutter Development", href: "/services/app-development/flutter" },
  { name: "PWA Development", href: "/services/app-development/PWA" },
];

export const aiSubmenu: MenuItem[] = [
  { name: "AI Chatbots", href: "/services/ai/Chatbots" },
  { name: "Machine Learning Solutions", href: "/services/ai/Mlp" },
  { name: "Data Analytics and Visualization", href: "/services/ai/DAV" },
  { name: "Natural Language Processing", href: "/services/ai/Nlp" },
  { name: "AI Model Development", href: "/services/ai/AI-Development" },
  { name: "AI for Marketing Automation", href: "/services/ai/AI-Marketing" },
];

export const dmcsSubmenu: MenuItem[] = [
  { name: "SEO", href: "/services/dmcs/seo" },
  { name: "Pay Per Click PPC Campaigns", href: "/services/dmcs/ppc" },
  {
    name: "Social Media Marketing and Ads",
    href: "/services/dmcs/social-media",
  },
  {
    name: "Content Strategy and Writing",
    href: "/services/dmcs/content-strategy",
  },
  { name: "Email Marketing", href: "/services/dmcs/email-marketing" },
  { name: "Google Ads Management", href: "/services/dmcs/google-ads" },
];

export const cscsSubmenu: MenuItem[] = [
  {
    name: "AWS Cloud Development",
    href: "/services/cscs/aws-cloud-development",
  },
  {
    name: "Cloud Application Development",
    href: "/services/cscs/cloud-application-development",
  },
  {
    name: "Cloud Migration Service",
    href: "/services/cscs/cloud-migration-service",
  },
  {
    name: "Cloud Maintenance and Support",
    href: "/services/cscs/cloud-maintenance-support",
  },
];

export const epSubmenu: MenuItem[] = [
  { name: "WordPress", href: "/services/ep/wordpress" },
  { name: "Shopify Store", href: "/services/ep/shopify-store" },
  { name: "Custom E-commerce", href: "/services/ep/custom-ecommerce" },
  { name: "CRM Solutions", href: "/services/ep/crm-solutions" },
];

export const esSubmenu: MenuItem[] = [
  { name: "Dedicated Team for SD", href: "/services/es/dedicated-team" },
  { name: "AI Engineer for Custom Projects", href: "/services/es/ai-engineer" },
  {
    name: "Digital Marketing Expert",
    href: "/services/es/digital-marketing-expert",
  },
  { name: "Quality Assurance Specialist", href: "/services/es/qa-specialist" },
  { name: "Business Process Outsourcing", href: "/services/es/bpo" },
];

// Helper function to get menu title
export const getMenuTitle = (currentMenu: MenuLevel): string | null => {
  switch (currentMenu) {
    case "services":
      return "Services";
    case "website-development":
      return "Website Development";
    case "app-development":
      return "App Development";
    case "ai":
      return "AI Solutions";
    case "dmcs":
      return "Digital Marketing & Content Services";
    case "cscs":
      return "Cloud Services & Cloud Solutions";
    case "ep":
      return "E-commerce & Platforms";
    case "es":
      return "Enterprise Services";
    default:
      return null;
  }
};

// Helper function to get back button text
export const getBackButtonText = (currentMenu: MenuLevel): string => {
  switch (currentMenu) {
    case "services":
      return "Main Menu";
    case "website-development":
    case "app-development":
    case "ai":
    case "dmcs":
    case "cscs":
    case "ep":
    case "es":
      return "Services";
    default:
      return "";
  }
};

// Helper function to get current menu items
export const getCurrentMenuItems = (currentMenu: MenuLevel): MenuItem[] => {
  switch (currentMenu) {
    case "services":
      return servicesSubmenu;
    case "website-development":
      return websiteDevelopmentSubmenu;
    case "app-development":
      return appDevelopmentSubmenu;
    case "ai":
      return aiSubmenu;
    case "dmcs":
      return dmcsSubmenu;
    case "cscs":
      return cscsSubmenu;
    case "ep":
      return epSubmenu;
    case "es":
      return esSubmenu;
    default:
      return navigationItems;
  }
};
