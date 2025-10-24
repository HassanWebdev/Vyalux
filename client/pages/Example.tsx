import LanguageServicesSection, { ServiceItem } from '../components/Laravel/LanguageServicesSection';

// Example 1: Define the service items for Laravel services
const laravelServiceItems: ServiceItem[] = [
  {
    title: "Custom Laravel Web Application Development",
    description: "Whether it's a SaaS platform, enterprise dashboard, or content management system, we deliver high-performing Laravel solutions."
  },
  {
    title: "Laravel-Based Progressive Web Apps (PWAs)",
    description: "Build mobile-like web apps with our Laravel PWA solutions. We use Laravel for the backend to craft swift, installable, and offline-ready applications."
  },
  {
    title: "Laravel AI & Real-Time App Integration",
    description: "Leverage the real strength of real-time with Laravel. We are experts at developing live chat features and real-time dashboards using Laravel Echo and Pusher."
  },
  {
    title: "Cloud-Native Laravel Applications",
    description: "We develop installable Laravel apps optimized for deployment on Azure, AWS, or Google Cloud. Our solutions are designed with containerization and CI/CD pipelines to guarantee performance, flexibility, and easy scaling."
  },
  {
    title: "Laravel API-First Architecture & Microservices",
    description: "We are experts at building RESTful APIs using Laravel, fostering easy integration and seamless multi-platform support."
  }
];

// Example 2: Define the service items for MERN services (migrating from MernServicesSection)
const mernServiceItems: ServiceItem[] = [
  {
    title: "Custom Web Application Development",
    description: "Whether it's a SaaS platform, enterprise dashboard, or content management system, we deliver high-performing solutions."
  },
  {
    title: "MERN-Based Progressive Web Apps (PWAs)",
    description: "Build mobile-like web apps with our PWA solutions. We use React.js for the frontend and Node.js on the backend to craft swift, installable, and offline-ready applications."
  },
  {
    title: "AI & Real-Time App Integration",
    description: "Leverage the real strength of real-time with MERN. We are experts at developing live chat features and real-time dashboards."
  },
  {
    title: "Cloud-Native MERN Applications",
    description: "We develop installable MERN stack apps optimized for deployment on Azure, AWS, or Google Cloud. Our solutions are designed with containerization and CI/CD pipelines to guarantee performance, flexibility, and easy scaling."
  },
  {
    title: "API-First Architecture & Microservices",
    description: "We are experts at building RESTful and GraphQL APIs using Express and Node.js, fostering easy integration and seamless multi-platform support."
  }
];

// Example 3: Define the service items for Python services
const pythonServiceItems: ServiceItem[] = [
  {
    title: "Python Web Application Development",
    description: "We build scalable web applications using Django, Flask, and FastAPI frameworks to deliver robust, secure, and efficient solutions."
  },
  {
    title: "Data Science & Machine Learning",
    description: "Leverage the power of Python for data analysis, predictive modeling, and machine learning solutions tailored to your business needs."
  },
  {
    title: "Automation & Scripting",
    description: "Our Python experts develop custom automation scripts and tools to streamline your workflows and increase productivity."
  },
  {
    title: "API Development & Integration",
    description: "We create powerful REST APIs using Python frameworks that seamlessly integrate with your existing systems and third-party services."
  },
  {
    title: "Python-based Microservices",
    description: "Design and implement scalable microservices architecture using Python to build modular, maintainable, and flexible applications."
  }
];

export default function ExamplePage() {
  // Example usage of the LanguageServicesSection component with different data sets
  return (
    <div className="example-page">
      {/* Example 1: Laravel Services */}
      <h1 className="text-3xl font-bold p-4 text-center bg-gray-100">Example 1: Laravel Services (Red Accent)</h1>
      <LanguageServicesSection
        sectionTitle={{
          mainText: "Explore What We Offer In Laravel Development Services",
          highlightedWords: [
            { text: "W", position: 'after' },
            { text: "In", position: 'after' },
            { text: "Laravel", position: 'after' },
            { text: "Development", position: 'after' }
          ]
        }}
        serviceItems={laravelServiceItems}
        backgroundColor="#040404"
        accentColor="#AB322C"
        mainTextColor="white"
      />
      
      {/* Example 2: MERN Stack Services (Original content migrated) */}
      <h1 className="text-3xl font-bold p-4 text-center bg-gray-100">Example 2: MERN Stack Services (Blue Accent)</h1>
      <LanguageServicesSection
        sectionTitle={{
          mainText: "Explore What Else We Offer In Mernstack Development Services",
          highlightedWords: [
            { text: "W", position: 'after' },
            { text: "In", position: 'after' },
            { text: "Mernstack", position: 'after' },
            { text: "Development", position: 'after' }
          ]
        }}
        serviceItems={mernServiceItems}
        backgroundColor="#040404"
        accentColor="#0070f3"
        mainTextColor="white"
      />
      
      {/* Example 3: Python Services (Different color scheme) */}
      <h1 className="text-3xl font-bold p-4 text-center bg-gray-100">Example 3: Python Services (Green Accent)</h1>
      <LanguageServicesSection
        sectionTitle={{
          mainText: "Explore Our Python Development Services",
          highlightedWords: [
            { text: "Explore", position: 'before' },
            { text: "Python", position: 'after' },
            { text: "Development", position: 'after' }
          ]
        }}
        serviceItems={pythonServiceItems}
        backgroundColor="#1a1a1a"
        accentColor="#4CAF50"
        mainTextColor="white"
        sectionClassName="custom-python-section"
      />
    </div>
  );
}
