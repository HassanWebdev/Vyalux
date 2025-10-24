// Define the FAQ item interface
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// FAQ data
export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What sets VYALUX web design approach apart from typical one-size-fits-all solutions?",
    answer: "Our approach is highly customized and tailored to each client's unique needs. We don't believe in cookie-cutter solutions. Instead, we take the time to understand your business, target audience, and specific goals to create a website that truly represents your brand and drives results."
  },
  {
    id: 2,
    question: "How does VYALUX view its relationship with clients?",
    answer: "We view our clients as partners in success. We believe in building long-term relationships based on trust, transparency, and mutual respect. Our team works closely with you throughout the entire process, ensuring your vision is brought to life while providing expert guidance and support."
  },
  {
    id: 3,
    question: "How does VYALUX handle the complexity of digital needs for businesses?",
    answer: "We have a comprehensive approach to digital solutions. Our team of experts covers everything from web design and development to digital marketing, SEO, and ongoing maintenance. We break down complex projects into manageable phases and ensure seamless integration across all digital touchpoints."
  },
  {
    id: 4,
    question: "In what ways does VYALUX ensure the success of its clients?",
    answer: "We ensure client success through detailed planning, regular communication, thorough testing, and ongoing support. We set clear expectations, provide regular updates, and measure success through key performance indicators. Our goal is not just to deliver a website, but to help your business thrive online."
  },
  {
    id: 5,
    question: "How often should a website be updated or redesigned?",
    answer: "We recommend reviewing your website every 2-3 years for major updates, with regular content updates happening more frequently. However, this depends on your industry, technology changes, and business growth. We offer ongoing maintenance and can advise when updates or redesigns would benefit your business most."
  },
  {
    id: 6,
    question: "How much should a website cost?",
    answer: "Website costs vary significantly based on complexity, features, and requirements. A basic website might start around $3,000-$5,000, while complex e-commerce or custom applications can range from $10,000-$50,000+. We provide detailed quotes after understanding your specific needs and budget."
  },
  {
    id: 7,
    question: "How long does it take to create a website with VYALUX?",
    answer: "Timeline depends on the project scope and complexity. A standard business website typically takes 4-8 weeks, while more complex projects with custom functionality can take 12-16 weeks. We provide a detailed timeline during the planning phase and keep you updated throughout the process."
  },
  {
    id: 8,
    question: "Does VYALUX provide maintenance and hosting?",
    answer: "Yes, we offer comprehensive maintenance packages and reliable hosting solutions. Our maintenance services include security updates, backups, performance optimization, and content updates. We also provide hosting on secure, fast servers with a 99.9% uptime guarantee."
  }
];
