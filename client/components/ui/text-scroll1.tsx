import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
// Import from simple-icons library
import * as SimpleIcons from "simple-icons";
import { cn } from "../../lib/utils";

interface TextScrollProps {
  default_velocity?: number;
  techRows?: string[][];
  techRow1?: string[];
  techRow2?: string[];
  techRow3?: string[];
}

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
  className?: string;
}

// Updated wrap function to properly handle the seamless loop
export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const TextScroll: React.FC<TextScrollProps> = ({
  default_velocity = 0.8,
  techRows,
  techRow1 = [
    "Laravel",
    "React",
    "Vue.js",
    "Angular",
    "Next.js",
    "Node.js",
    "WordPress",
    "Nest.js",
    "PHP",
    "Python",
    "Java",
    "TypeScript",
  ],
  techRow2 = [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "REST API",
    "Firebase",
    "Supabase",
  ],
  techRow3 = [
    "Tailwind CSS",
    "Bootstrap",
    "SASS",
    "Webpack",
    "Vite",
    "Git",
    "GitHub",
    "GitLab",
    "CI/CD",
    "Jest",
    "Cypress",
    "Shopify",
  ],
}) => {
  // Use techRows if provided, otherwise fall back to individual props
  const rows = useMemo(() => {
    if (techRows && techRows.length > 0) {
      return techRows;
    }
    // Filter out empty arrays from individual props
    const fallbackRows = [];
    if (techRow1 && techRow1.length > 0) fallbackRows.push(techRow1);
    if (techRow2 && techRow2.length > 0) fallbackRows.push(techRow2);
    if (techRow3 && techRow3.length > 0) fallbackRows.push(techRow3);
    return fallbackRows;
  }, [techRows, techRow1, techRow2, techRow3]);
  // Function to generate a unique text style for each item
  const getUniqueTextStyle = (rowIndex: number, itemIndex: number) => {
    // A fancier, consistent look with subtle variety.
    const fontWeights = ["font-semibold", "font-bold", "font-extrabold"];
    const textTransforms = ["uppercase"];
    const letterSpacings = [
      "tracking-wide",
      "tracking-wider",
      "tracking-[0.15em]",
    ];
    const fontStyles = ["", "italic"];
    const textSizes = ["text-xl", "text-2xl", "text-3xl"]; // baseline; rows override with their own sizes too

    const weightIndex = (rowIndex * 5 + itemIndex * 3) % fontWeights.length;
    const transformIndex =
      (rowIndex * 2 + itemIndex * 7) % textTransforms.length;
    const spacingIndex = (rowIndex * 3 + itemIndex * 2) % letterSpacings.length;
    const styleIndex = (rowIndex + itemIndex * 5) % fontStyles.length;
    const sizeIndex = (rowIndex * 2 + itemIndex * 4) % textSizes.length;

    // Add a subtle glow/drop-shadow; keep white text.
    const decorative = "drop-shadow-[0_1px_6px_rgba(255,255,255,0.25)]";

    return `ml-3 ${decorative} font-serif ${fontWeights[weightIndex]} ${textTransforms[transformIndex]} ${letterSpacings[spacingIndex]} ${fontStyles[styleIndex]} ${textSizes[sizeIndex]}`;
  };

  // --- Icon selection utilities with uniqueness across the page ---
  const toIconKey = (slug: string) =>
    `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
  const hasIcon = (slug: string) => !!(SimpleIcons as any)[toIconKey(slug)];
  const getIconObj = (slug: string) => (SimpleIcons as any)[toIconKey(slug)];

  const directSlug: Record<string, string> = {
    Laravel: "laravel",
    PHP: "php",
    React: "react",
    "Vue.js": "vuedotjs",
    Angular: "angular",
    "Next.js": "nextdotjs",
    "Node.js": "nodedotjs",
    WordPress: "wordpress",
    "Nest.js": "nestjs",
    Python: "python",
    Java: "java",
    TypeScript: "typescript",
    MongoDB: "mongodb",
    MySQL: "mysql",
    PostgreSQL: "postgresql",
    Redis: "redis",
    AWS: "amazonaws",
    Azure: "microsoftazure",
    Docker: "docker",
    Kubernetes: "kubernetes",
    GraphQL: "graphql",
    "REST API": "postman",
    Firebase: "firebase",
    Supabas: "supabase",
    "Tailwind CSS": "tailwindcss",
    Bootstrap: "bootstrap",
    SASS: "sass",
    Webpack: "webpack",
    Vite: "vite",
    Git: "git",
    GitHub: "github",
    GitLab: "gitlab",
    "CI/CD": "githubactions",
    Jest: "jest",
    Cypress: "cypress",
    Shopify: "shopify",
    materialdesign: "materialdesign",
    "Laravel Nova": "laravelnova",
    "Laravel Horizon": "laravelhorizon",
    Prisma: "prisma",
    Nginx: "nginx",
    "Nginx Manager": "nginxproxymanager",
    "Express.js": "express",
    JavaScript: "javascript",
    Mongoose: "mongoose",
    "Nuxt.js": "nuxt",
    uikit: "uikit",
    Vuetify: "vuetify",
    Vuex: "v2ex",
    Veed: "veed",
    NestJS: "nestjs",
    Fastify: "fastify",
    Swagger: "swagger",
    TypeORM: "typeorm",
    ".Net": "dotnet",
    Sass: "sass",
    "ESLint/Prettier": "eslint",
    Signal: "signal",
    WebSockets: "socketdotio",
    NgRx: "ngrx",
    "Styled Components": "styledcomponents",
    Flask: "flask",
    Django: "django",
    FastAPI: "fastapi",
    SQLAlchemy: "sqlalchemy",
    Celery: "celery",
    Pydantic: "pydantic",
    OpenAPI: "openai",
    NumPy: "numpy",
    Pandas: "pandas",
    Symfony: "symfony",
    CodeIgniter: "codeigniter",
    phpstorm: "phpstorm",
    Apache: "apache",
    Composer: "composer",
    Selenium: "selenium",
    Playwright: "playerdotme",
    Appium: "appium",
    Postman: "postman",
    "C#": "sharp",
    Testin: "testin",
    SonarQube: "sonarqubecloud",
    OWASP: "owasp",
    Jira: "jira",
    "Mock Service Worker": "mockserviceworker",
    Terraform: "terraform",
    "Python/Django": "python",
    gRPC: "trpc",
    "Stripe/PayPal": "stripe",
    "Auth0/Keycloak": "auth0",
    OpenTelemetry: "opentelemetry",
    Flutter: "flutter",
    "React Native": "reactnative",
    Ionic: "ionic",
    NativeScript: "nativescript",
    Capacitor: "capacitor",
    Unity: "unity",
    Swift: "swift",
    Kotlin: "kotlin",
    Dart: "dart",
    Supabase: "supabase",
    SQLite: "sqlite",
    AppCenter: "appcenter",
    Realm: "realm",
    Fastlane: "fastlane",
    "Objective-C": "objectivec",
    "Jetpack Compose": "jetpackcompose",
    SwiftUI: "swiftui",
    "Android SDK": "android",
    "iOS SDK": "apple",
    Xcode: "xcode",
    "Android Studio": "androidstudio",
    Gradle: "gradle",
    CocoaPods: "cocoapods",
    Room: "room",
    "Core Data": "coredata",
    TestFlight: "testflight",
    "Play Console": "googleplay",
    "Push Notifications": "onesignal",
    Stripe: "stripe",
    "Google Maps SDK": "googlemaps",
    "AWS Amplify": "awsamplify",
    OneSignal: "signal",
    Codemagic: "codemagic",
    Workbox: "workbox",
    IndexedDB: "indexeddb",
    "Web Push": "webpush",
    Rollup: "rollupdotjs",
    Netlify: "netlify",
    Vercel: "vercel",
    "Firebase Hosting": "firebase",
    "Service Workers": "mockserviceworker",
    Serverless: "serverless",
    EC2: "/Ec2.svg",
    Lambda: "/Lambda.svg",
    S3: "/S3.svg",
    CloudFront: "/CloudFont.svg",
    RDS: "/rds.svg",
    DynamoDB: "/dynamodb.svg",
    Go: "go",
    Containers: "linuxcontainers",
    Kafka: "apachekafka",
    Gitpod: "gitpod",
    Helm: "helm",
    "Facebook Ads": "facebook",
    "TikTok Ads": "tiktok",
    "Instagram Ads": "instagram",
    "Google Ads": "googleads",
    "LinkedIn Ads": "LinkedIn",
    "YouTube Ads": "youtube",
    "Google Marketing Platform": "googlemarketingplatform",
    "Google Analytics": "googleanalytics",
    Facebook: "facebook",
    TikTok: "tiktok",
    Instagram: "instagram",
    Twitter: "x",
    LinkedIn: "LinkedIn",
    Buffer: "buffer",
    Hootsuite: "hootsuite",
    "Meta Business Suite": "meta",
    Pinterest: "pinterest",
    Snapchat: "snapchat",
    YouTube: "youtube",
    Figma: "figma",
    HubSpot: "hubspot",
    Contentful: "contentful",
    Webflow: "webflow",
    Ghost: "ghost",
    "Shopify Blog": "shopify",
    Sanity: "sanity",
    Strapi: "strapi",
    SEMrush: "semrush",
    Ahrefs: "roamresearch",
    Grammarly: "grammarly",
    SendGrid: "sendgrid",
    "Campaign Monitor": "campaignmonitor",
    Mailchimp: "mailchimp",
    "Email Automation": "maildotcom",
    Zapier: "zapier",
    WooCommerce: "woocommerce",
    Canva: "canva",
    Moz: "maze",
    "Google Search Console": "googlesearchconsole",
    "Yoast SEO": "yoast",
    DuckDuckGo: "duckduckgo",
    Yandex: "yandex",
    Google: "google",
    Bing: "bing",
    PyTorch: "pytorch",
    TensorFlow: "tensorflow",
    "OpenAI GPT": "openai",
    "Google Dialogflow": "googledataflow",
    Rasa: "rasa",
    "scikit-learn": "scikitlearn",
    Keras: "keras",
    XGBoost: "boosty",
    ONNX: "onnx",
    SciPy: "scipy",
    MLflow: "mlflow",
    Ray: "ray",
    "Google Cloud AI": "googlecloudspanner",
    Jupyter: "jupyter",
    DVC: "dvc",
    "Power BI": "powers",
    "D3.js": "d3",
    Plotly: "plotly",
    Grafana: "grafana",
    Kibana: "kibana",
    Looker: "looker",
    SQL: "sqlite",
    Bokeh: "bosch",
    Spark: "sparkar",
    BigQuery: "googlebigquery",
    Snowflake: "snowflake",
    ElasticSearch: "elasticsearch",
    SpaCy: "spacy",
    "Hugging Face": "huggingface",
    ELMo: "elm",
    JAX: "max",
    "C++": "cplusplus",
    Julia: "julia",
    Marketo: "cardmarket",
    Salesforce: "salesforce",
    Autopilot: "autoit",
    Hotjar: "hotjar",
    Mixpanel: "mixpanel",
    Optimizely: "optimism",
    "Google Ads API": "googleads",
    Elementor: "elementor",
    "WP Rocket": "wprocket",
    CSS3: "css",
    HTML5: "html5",
    jQuery: "jquery",
    "AWS Migration Hub": "/migration.svg",
    Ansible: "ansible",
    CloudEndure: "cloudinary",
    "AWS Database Migration": "/DatabaseMigration.svg",
    "AWS Application Migration": "/applicationMigration.svg",
    "VM Migration": "/VM.svg",
    "Storage Migration": "/storage.svg",
    Containerization: "linuxcontainers",
    "AWS Server Migration": "/server.svg",
    "Azure Hybrid Cloud": "/hybird.svg",
    "AWS Systems Manager": "/systemmanager.svg",
    "Azure Monitor": "/moniter.svg",
    CloudWatch: "cloudways",
    Prometheus: "prometheus",
    Jenkins: "jenkins",
    Splunk: "splunk",
    Liquid: "liquibase",
    Microservices: "/microservice.png",
    "AI/ML Integration": "/integration.png",
    PayPal: "paypal",
    "Zoho CRM": "zoho",
    "Database Design": "h2database",
    SugarCRM: "sega",
    "Ruby on Rails": "rubyonrails",
    ".NET": "dotnet",
    "Spring Boot": "springboot",
    "Scikit-learn": "scikitlearn",
    "OpenAI API": "openai",
    "Google AI": "googlecloudspanner",
    Ruby: "ruby",
    TestNG: "testin",
    Cucumber: "cucumber",
    JIRA: "jira",
    Zoho: "zoho",
    Zendesk: "zendesk",
    SAP: "sap",
    QNAP: "qnap",
    "Call Center Software": "/callcenter.png",
    "OCR Technology": "/ocr.png"
  };

  const getCandidates = (tech: string): string[] => {
    const main = directSlug[tech];
    if (main) {
      return [main];
    }
    return [];
  };

  const iconAssignments = useMemo(() => {
    const used = new Set<string>();
    const result: string[][] = [];

    for (let r = 0; r < rows.length; r++) {
      const row = rows[r];
      const assigned: string[] = [];
      for (let i = 0; i < row.length; i++) {
        const tech = row[i];
        const candidates = getCandidates(tech);

        // Debug log for AWS specifically
        if (tech === "AWS") {
          console.log("AWS candidates:", candidates);
        }

        let chosen =
          candidates.find((c) => !used.has(c)) || candidates[0] || "";

        // Debug log for AWS specifically
        if (tech === "AWS") {
          console.log("AWS chosen icon:", chosen);
        }

        if (chosen) {
          used.add(chosen);
        }
        assigned.push(chosen);
      }
      result.push(assigned);
    }
    return result; // [ [slugs for row1], [slugs for row2], [slugs for row3] ]
  }, [rows]);

  const ParallaxText: React.FC<ParallaxProps> = ({
    children,
    baseVelocity = 100,
    className,
  }) => {
    // Start centered so the marquee shows its middle on initial load
    const baseX = useMotionValue(-50);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    // Improved spring settings for smoother transitions
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50, // Reduced damping for smoother movement
      stiffness: 200, // Reduced stiffness for more gentle motion
      mass: 0.8, // Increased mass for more inertia
    });

    // Map scroll velocity to a compact range to drive speed and direction.
    // Positive => scrolling down, Negative => scrolling up
    const velocityFactor = useTransform(
      smoothVelocity,
      [-1000, 0, 1000],
      [-2, 0, 2],
      { clamp: false },
    );

    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // Track content width for proper wrapping
    const [contentWidth, setContentWidth] = useState(0);

    // Direction polarity for this row (1 or -1) and current state
    const initialDirection = useRef<number>(baseVelocity > 0 ? 1 : -1);
    const currentDirection = useRef<number>(initialDirection.current);
    const currentSpeed = useRef<number>(0); // start paused

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && contentRef.current) {
          try {
            const containerWidth = containerRef.current.offsetWidth;
            const contentItemWidth = contentRef.current.offsetWidth;
            setContentWidth(contentItemWidth);

            // Increase repetitions to ensure smoother looping
            const minRepetitions = Math.ceil(
              (containerWidth * 3) / contentItemWidth,
            );
            const newRepetitions = Math.max(minRepetitions, 6); // At least 6 repetitions for smoother looping
            setRepetitions(newRepetitions);
          } catch (error) {
            console.error("Error calculating repetitions:", error);
            // Fallback to a reasonable default
            setRepetitions(8); // Increased default
          }
        }
      };

      // Delay calculation to ensure DOM is ready
      const timer = setTimeout(calculateRepetitions, 200); // Increased timeout

      window.addEventListener("resize", calculateRepetitions);
      return () => {
        window.removeEventListener("resize", calculateRepetitions);
        clearTimeout(timer);
      };
    }, [children]);

    // Improved transform function for seamless looping
    const x = useTransform(baseX, (v) => {
      if (contentWidth === 0) return "0%";

      // Improved wrapping logic for seamless loop
      return `${wrap(0, -100, v)}%`;
    });

    useAnimationFrame((t, delta) => {
      if (contentWidth === 0) return;

      try {
        const vf = velocityFactor.get();
        const mag = Math.abs(vf);
        const isScrolling = mag > 0.01; // small dead-zone to consider "stopped"

        // Update direction only while actively scrolling
        if (isScrolling) {
          const scrollDir = vf > 0 ? 1 : -1; // down = 1, up = -1
          // Direction per row:
          // - Row1 & Row3: initialDirection = 1
          // - Row2: initialDirection = -1
          // Effective direction = scrollDir * initialDirection
          currentDirection.current = scrollDir * initialDirection.current;
        }

        // Compute speed purely from scroll activity so we pause when stopped
        const baseSpeed = Math.abs(baseVelocity); // row-specific speed factor
        const targetSpeed = isScrolling ? baseSpeed * mag : 0;

        // Ease toward target; snap to zero when nearly stopped
        if (!isScrolling && currentSpeed.current < 0.01) {
          currentSpeed.current = 0;
        } else {
          currentSpeed.current += (targetSpeed - currentSpeed.current) * 0.2;
        }

        // Advance position only if there's speed
        if (currentSpeed.current !== 0) {
          const moveBy =
            currentDirection.current * currentSpeed.current * (delta / 1000);
          baseX.set(baseX.get() + moveBy);
        }
      } catch (error) {
        console.error("Animation frame error:", error);
      }
    });

    return (
      <div
        className="w-full overflow-hidden whitespace-nowrap"
        ref={containerRef}
      >
        <motion.div className={cn("inline-flex", className)} style={{ x }}>
          {Array.from({ length: repetitions }).map((_, i) => (
            <div
              key={i}
              ref={i === 0 ? contentRef : undefined}
              className="inline-block flex-shrink-0"
            >
              {children}
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  // Render a specific Simple Icons slug (pre-chosen for uniqueness)
  const TechIcon = ({ slug, title }: { slug: string; title?: string }) => {
    // Debug log
    if (title === "AWS") {
      console.log("TechIcon received slug for AWS:", slug);
    }

    try {
      // Custom AWS SVG
      if (slug === "amazonaws") {
        console.log("Rendering custom AWS SVG");
        return (
          <span className="flex items-center justify-center w-20 h-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="80"
              height="80"
              viewBox="0,0,256,256"
              className="transition-transform duration-300 hover:scale-110"
              aria-label={title || slug}
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(10.66667,10.66667)">
                  <path d="M20.45508,5.41211c-0.351,0 -0.68586,0.04072 -1.00586,0.13672c-0.319,0.096 -0.59108,0.23202 -0.83008,0.41602c-0.239,0.176 -0.43022,0.3983 -0.57422,0.6543c-0.144,0.255 -0.2168,0.55172 -0.2168,0.88672c0,0.415 0.13544,0.80525 0.39844,1.15625c0.263,0.359 0.69434,0.63145 1.27734,0.81445l1.15625,0.35938c0.391,0.128 0.66264,0.26206 0.80664,0.41406c0.144,0.152 0.21484,0.33459 0.21484,0.55859c0,0.327 -0.14306,0.58281 -0.41406,0.75781c-0.271,0.176 -0.66402,0.26367 -1.16602,0.26367c-0.319,0 -0.63022,-0.0317 -0.94922,-0.0957c-0.311,-0.064 -0.60791,-0.1603 -0.87891,-0.2793c-0.08,-0.032 -0.15122,-0.06408 -0.19922,-0.08008c-0.048,-0.016 -0.09653,-0.02344 -0.14453,-0.02344c-0.12,0 -0.18359,0.07909 -0.18359,0.24609v0.4082c0,0.072 0.01683,0.15166 0.04883,0.22266c0.033,0.075 0.12105,0.15261 0.24805,0.22461c0.208,0.12 0.51897,0.22431 0.91797,0.32031c0.399,0.096 0.81352,0.14453 1.22852,0.14453c0.407,0 0.78162,-0.05792 1.14063,-0.16992c0.343,-0.104 0.63972,-0.24531 0.88672,-0.44531c0.247,-0.192 0.43803,-0.43212 0.58203,-0.70312c0.136,-0.271 0.20898,-0.58278 0.20898,-0.92578c0,-0.415 -0.12019,-0.79019 -0.36719,-1.11719c-0.247,-0.327 -0.66328,-0.58263 -1.23828,-0.76562l-1.13281,-0.35937c-0.423,-0.136 -0.71695,-0.28745 -0.87695,-0.43945c-0.16,-0.152 -0.24023,-0.34241 -0.24023,-0.56641c0,-0.327 0.128,-0.55798 0.375,-0.70898c0.247,-0.152 0.6075,-0.22461 1.0625,-0.22461c0.567,0 1.0782,0.1055 1.5332,0.3125c0.136,0.064 0.23873,0.0957 0.30273,0.0957c0.12,0 0.18359,-0.08886 0.18359,-0.25586v-0.37695c0,-0.112 -0.02427,-0.19872 -0.07227,-0.26172c-0.048,-0.072 -0.12728,-0.13717 -0.23828,-0.20117c-0.08,-0.048 -0.19098,-0.09653 -0.33398,-0.14453c-0.144,-0.048 -0.29508,-0.08695 -0.45508,-0.12695c-0.168,-0.032 -0.33553,-0.06389 -0.51953,-0.08789c-0.176,-0.024 -0.35916,-0.0332 -0.53516,-0.0332zM3.99414,5.42969c-0.439,0 -0.85509,0.04834 -1.24609,0.15234c-0.392,0.095 -0.72686,0.21537 -1.00586,0.35938c-0.112,0.056 -0.18266,0.11102 -0.22266,0.16602c-0.04,0.056 -0.05664,0.15325 -0.05664,0.28125v0.39063c0,0.168 0.05597,0.24609 0.16797,0.24609c0.032,0 0.07291,-0.00744 0.12891,-0.02344c0.055,-0.016 0.14934,-0.04752 0.27734,-0.10352c0.279,-0.112 0.56828,-0.19853 0.86328,-0.26953c0.295,-0.072 0.58233,-0.10547 0.86133,-0.10547c0.615,0 1.04578,0.12019 1.30078,0.36719c0.247,0.247 0.375,0.67034 0.375,1.27734v0.58398c-0.319,-0.072 -0.62197,-0.13773 -0.91797,-0.17773c-0.295,-0.04 -0.5747,-0.0625 -0.8457,-0.0625c-0.822,0 -1.46808,0.20805 -1.95508,0.62305c-0.486,0.415 -0.72656,0.96458 -0.72656,1.64258c0,0.639 0.19884,1.1492 0.58984,1.5332c0.391,0.383 0.92766,0.57617 1.59766,0.57617c0.942,0 1.7227,-0.36852 2.3457,-1.10352c0.088,0.184 0.16905,0.33666 0.24805,0.47266c0.08,0.128 0.17611,0.255 0.28711,0.375c0.08,0.072 0.15928,0.11133 0.23828,0.11133c0.064,0 0.13698,-0.02427 0.20898,-0.07227l0.50195,-0.33398c0.104,-0.08 0.15234,-0.16124 0.15234,-0.24024c0,-0.056 -0.01664,-0.11959 -0.05664,-0.18359c-0.112,-0.208 -0.19091,-0.39822 -0.25391,-0.57422c-0.056,-0.176 -0.08789,-0.41594 -0.08789,-0.71094h-0.01758v-2.58789c0,-0.878 -0.22211,-1.53189 -0.66211,-1.96289c-0.446,-0.43 -1.13984,-0.64648 -2.08984,-0.64648zM7.70508,5.62109c-0.128,0 -0.19141,0.07317 -0.19141,0.20117c0,0.056 0.02427,0.15936 0.07227,0.31836l1.875,6.16992c0.048,0.152 0.10397,0.26255 0.16797,0.31055c0.064,0.056 0.15973,0.08008 0.30273,0.08008h0.68555c0.144,0 0.25631,-0.02408 0.32031,-0.08008c0.064,-0.056 0.11234,-0.15936 0.15234,-0.31836l1.22851,-5.14062l1.23633,5.14844c0.032,0.16 0.08834,0.26431 0.15234,0.32031c0.064,0.056 0.16736,0.08008 0.31836,0.08008h0.6875c0.136,0 0.23873,-0.03208 0.30273,-0.08008c0.064,-0.048 0.11997,-0.1535 0.16797,-0.3125l1.92383,-6.16992c0.032,-0.088 0.04669,-0.15122 0.05469,-0.19922c0.008,-0.048 0.01758,-0.08891 0.01758,-0.12891c0,-0.136 -0.07317,-0.19922 -0.20117,-0.19922h-0.74219c-0.144,0 -0.24655,0.03208 -0.31055,0.08008c-0.056,0.048 -0.11216,0.15155 -0.16016,0.31055l-1.38086,5.34766l-1.26172,-5.34766c-0.032,-0.152 -0.08639,-0.26255 -0.15039,-0.31055c-0.064,-0.056 -0.16931,-0.08008 -0.32031,-0.08008h-0.63867c-0.144,0 -0.25436,0.03208 -0.31836,0.08008c-0.064,0.048 -0.11234,0.15155 -0.15234,0.31055l-1.24219,5.28516l-1.3418,-5.2832c-0.048,-0.152 -0.09616,-0.2645 -0.16016,-0.3125c-0.056,-0.056 -0.15955,-0.08008 -0.31055,-0.08008zM3.9707,9.46094c0.247,0 0.495,0.01683 0.75,0.04883c0.255,0.032 0.50142,0.07877 0.73242,0.13477v0.33594c0,0.271 -0.03208,0.50236 -0.08008,0.69336c-0.048,0.192 -0.14253,0.35972 -0.26953,0.51172c-0.216,0.239 -0.47081,0.41376 -0.75781,0.50976c-0.287,0.096 -0.55927,0.14453 -0.82227,0.14453c-0.367,0 -0.64689,-0.09592 -0.83789,-0.29492c-0.2,-0.192 -0.29492,-0.4707 -0.29492,-0.8457c0,-0.399 0.12763,-0.70197 0.39063,-0.91797c0.263,-0.216 0.65445,-0.32031 1.18945,-0.32031zM22.23633,14.36133c-0.84013,0.01187 -1.83203,0.19956 -2.58203,0.72656c-0.231,0.168 -0.19155,0.39138 0.06445,0.35938c0.854,-0.104 2.73922,-0.32749 3.07422,0.10351c0.335,0.423 -0.37631,2.20414 -0.69531,2.99414c-0.096,0.239 0.11313,0.33339 0.32813,0.15039c1.404,-1.181 1.76942,-3.64686 1.48242,-4.00586c-0.1435,-0.1755 -0.83175,-0.34 -1.67187,-0.32812zM0.17578,14.83789c-0.17583,0.0217 -0.25436,0.23509 -0.06836,0.40234c3.129,2.826 7.27214,4.52539 11.86914,4.52539c3.281,0 7.0947,-1.02975 9.7207,-2.96875c0.431,-0.32 0.05619,-0.80742 -0.38281,-0.60742c-2.945,1.245 -6.14459,1.85352 -9.05859,1.85352c-4.318,0 -8.49295,-1.1903 -11.87695,-3.1543c-0.07375,-0.044 -0.14452,-0.05802 -0.20312,-0.05078z" />
                </g>
              </g>
            </svg>
          </span>
        );
      }

      // Custom Azure SVG
      if (slug === "microsoftazure") {
        console.log("Rendering custom Azure SVG");
        return (
          <span className="flex items-center justify-center w-20 h-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="80"
              height="80"
              viewBox="0,0,256,256"
              className="transition-transform duration-300 hover:scale-110"
              aria-label={title || slug}
            >
              <defs>
                <linearGradient
                  x1="21.75469"
                  y1="8.66825"
                  x2="10.01406"
                  y2="43.35262"
                  gradientUnits="userSpaceOnUse"
                  id="azure-color-1"
                >
                  <stop offset="0" stopColor="#ffffff"></stop>
                  <stop offset="1" stopColor="#ffffff"></stop>
                </linearGradient>
                <linearGradient
                  x1="25.42188"
                  y1="24.83075"
                  x2="22.70625"
                  y2="25.7495"
                  gradientUnits="userSpaceOnUse"
                  id="azure-color-2"
                >
                  <stop
                    offset="0"
                    stopColor="#ffffff"
                    stopOpacity="0.30196"
                  ></stop>
                  <stop
                    offset="0.071"
                    stopColor="#ffffff"
                    stopOpacity="0.2"
                  ></stop>
                  <stop
                    offset="0.321"
                    stopColor="#fdfdfd"
                    stopOpacity="0.10196"
                  ></stop>
                  <stop
                    offset="0.623"
                    stopColor="#ffffff"
                    stopOpacity="0.05098"
                  ></stop>
                  <stop offset="1" stopColor="#fbfbfb" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  x1="24.0125"
                  y1="7.6245"
                  x2="36.9"
                  y2="41.96044"
                  gradientUnits="userSpaceOnUse"
                  id="azure-color-3"
                >
                  <stop offset="0" stopColor="#ffffff"></stop>
                  <stop offset="1" stopColor="#ffffff"></stop>
                </linearGradient>
              </defs>
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.33333,5.33333)">
                  <path
                    d="M17.634,6h11.305l-11.736,34.773c-0.247,0.733 -0.934,1.226 -1.708,1.226h-8.798c-0.994,0 -1.8,-0.806 -1.8,-1.8c0,-0.196 0.032,-0.39 0.094,-0.576l10.935,-32.396c0.247,-0.733 0.934,-1.227 1.708,-1.227z"
                    fill="url(#azure-color-1)"
                  ></path>
                  <path
                    d="M34.062,29.324h-17.927c-0.458,-0.001 -0.83,0.371 -0.831,0.829c0,0.231 0.095,0.451 0.264,0.608l11.52,10.752c0.335,0.313 0.777,0.487 1.236,0.487h10.151z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M17.634,6c-0.783,-0.003 -1.476,0.504 -1.712,1.25l-10.917,32.345c-0.335,0.934 0.151,1.964 1.085,2.299c0.196,0.07 0.403,0.106 0.612,0.106h9.026c0.684,-0.122 1.25,-0.603 1.481,-1.259l2.177,-6.416l7.776,7.253c0.326,0.27 0.735,0.419 1.158,0.422h10.114l-4.436,-12.676l-12.931,0.003l7.913,-23.327z"
                    fill="url(#azure-color-2)"
                  ></path>
                  <path
                    d="M32.074,7.225c-0.247,-0.732 -0.933,-1.225 -1.706,-1.225h-12.6c0.772,0 1.459,0.493 1.705,1.224l10.935,32.399c0.318,0.942 -0.188,1.963 -1.13,2.281c-0.185,0.064 -0.379,0.096 -0.575,0.096h12.6c0.994,0 1.8,-0.806 1.8,-1.801c0,-0.196 -0.032,-0.39 -0.095,-0.575z"
                    fill="url(#azure-color-3)"
                  ></path>
                </g>
              </g>
            </svg>
          </span>
        );
      }
      if (slug.startsWith("/")) {
        console.log("Rendering custom Azure SVG");
        return (
          <span className="flex items-center justify-center w-20 h-20">
            <svg
              viewBox="0 0 24 24"
              width="80"
              height="80"
              fill="#FFFFFF"
              className="transition-transform duration-300 hover:scale-110"
              aria-label={title || slug}
            >
              {/* You'll need to replace this with the actual path from your EC2 SVG */}
              <image
                href={slug}
                width="24"
                height="24"
                className="brightness-0 invert"
              />
            </svg>
          </span>
        );
      }
      if (slug === "LinkedIn") {
        console.log("Rendering custom AWS SVG");
        return (
          <span className="flex items-center justify-center w-20 h-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h32c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-32c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM14,11.01172c-1.09522,0 -2.08078,0.32736 -2.81055,0.94141c-0.72977,0.61405 -1.17773,1.53139 -1.17773,2.51367c0,1.86718 1.61957,3.32281 3.67969,3.4668c0.0013,0.00065 0.0026,0.0013 0.00391,0.00195c0.09817,0.03346 0.20099,0.05126 0.30469,0.05273c2.27301,0 3.98828,-1.5922 3.98828,-3.52148c-0.00018,-0.01759 -0.00083,-0.03518 -0.00195,-0.05274c-0.10175,-1.90023 -1.79589,-3.40234 -3.98633,-3.40234zM14,12.98828c1.39223,0 1.94197,0.62176 2.00195,1.50391c-0.01215,0.85625 -0.54186,1.51953 -2.00195,1.51953c-1.38541,0 -2.01172,-0.70949 -2.01172,-1.54492c0,-0.41771 0.15242,-0.7325 0.47266,-1.00195c0.32023,-0.26945 0.83428,-0.47656 1.53906,-0.47656zM11,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-5.86523v-13.13477c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM20,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10c0,-0.82967 0.22639,-1.65497 0.625,-2.19531c0.39861,-0.54035 0.90147,-0.86463 1.85742,-0.84766c0.98574,0.01695 1.50758,0.35464 1.90234,0.88477c0.39477,0.53013 0.61523,1.32487 0.61523,2.1582v10c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10.73828c0,-2.96154 -0.87721,-5.30739 -2.38086,-6.89453c-1.50365,-1.58714 -3.59497,-2.36719 -5.80664,-2.36719c-2.10202,0 -3.70165,0.70489 -4.8125,1.42383v-0.42383c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM12,21h4v12.13477v4.86523h-4zM21,21h4v1.56055c0.00013,0.43 0.27511,0.81179 0.68291,0.94817c0.40781,0.13638 0.85714,-0.00319 1.11591,-0.34661c0,0 1.57037,-2.16211 5.01367,-2.16211c1.75333,0 3.25687,0.58258 4.35547,1.74219c1.0986,1.15961 1.83203,2.94607 1.83203,5.51953v9.73828h-4v-9c0,-1.16667 -0.27953,-2.37289 -1.00977,-3.35352c-0.73023,-0.98062 -1.9584,-1.66341 -3.47266,-1.68945c-1.52204,-0.02703 -2.77006,0.66996 -3.50195,1.66211c-0.73189,0.99215 -1.01562,2.21053 -1.01562,3.38086v9h-4z"></path>
                </g>
              </g>
            </svg>
          </span>
        );
      }
      if (slug === "java") {
        console.log("Rendering custom AWS SVG");
        return (
          <span className="flex items-center justify-center w-20 h-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              fill="#FFFFFF"
            >
              <path d="M 28.1875 0 C 30.9375 6.363281 18.328125 10.292969 17.15625 15.59375 C 16.082031 20.464844 24.648438 26.125 24.65625 26.125 C 23.355469 24.109375 22.398438 22.449219 21.09375 19.3125 C 18.886719 14.007813 34.535156 9.207031 28.1875 0 Z M 36.5625 8.8125 C 36.5625 8.8125 25.5 9.523438 24.9375 16.59375 C 24.6875 19.742188 27.847656 21.398438 27.9375 23.6875 C 28.011719 25.558594 26.0625 27.125 26.0625 27.125 C 26.0625 27.125 29.609375 26.449219 30.71875 23.59375 C 31.949219 20.425781 28.320313 18.285156 28.6875 15.75 C 29.039063 13.324219 36.5625 8.8125 36.5625 8.8125 Z M 19.1875 25.15625 C 19.1875 25.15625 9.0625 25.011719 9.0625 27.875 C 9.0625 30.867188 22.316406 31.089844 31.78125 29.25 C 31.78125 29.25 34.296875 27.519531 34.96875 26.875 C 28.765625 28.140625 14.625 28.28125 14.625 27.1875 C 14.625 26.179688 19.1875 25.15625 19.1875 25.15625 Z M 38.65625 25.15625 C 37.664063 25.234375 36.59375 25.617188 35.625 26.3125 C 37.90625 25.820313 39.84375 27.234375 39.84375 28.84375 C 39.84375 32.46875 34.59375 35.875 34.59375 35.875 C 34.59375 35.875 42.71875 34.953125 42.71875 29 C 42.71875 26.296875 40.839844 24.984375 38.65625 25.15625 Z M 16.75 30.71875 C 15.195313 30.71875 12.875 31.9375 12.875 33.09375 C 12.875 35.417969 24.5625 37.207031 33.21875 33.8125 L 30.21875 31.96875 C 24.351563 33.847656 13.546875 33.234375 16.75 30.71875 Z M 18.1875 35.9375 C 16.058594 35.9375 14.65625 37.222656 14.65625 38.1875 C 14.65625 41.171875 27.371094 41.472656 32.40625 38.4375 L 29.21875 36.40625 C 25.457031 37.996094 16.015625 38.238281 18.1875 35.9375 Z M 11.09375 38.625 C 7.625 38.554688 5.375 40.113281 5.375 41.40625 C 5.375 48.28125 40.875 47.964844 40.875 40.9375 C 40.875 39.769531 39.527344 39.203125 39.03125 38.9375 C 41.933594 45.65625 9.96875 45.121094 9.96875 41.15625 C 9.96875 40.253906 12.320313 39.390625 14.5 39.8125 L 12.65625 38.75 C 12.113281 38.667969 11.589844 38.636719 11.09375 38.625 Z M 44.625 43.25 C 39.226563 48.367188 25.546875 50.222656 11.78125 47.0625 C 25.542969 52.695313 44.558594 49.535156 44.625 43.25 Z"></path>
            </svg>
          </span>
        );
      }

      const icon = getIconObj(slug) || (SimpleIcons as any).siCode;

      // Render the SVG icon with white fill
      return (
        <span className="flex items-center justify-center w-20 h-20">
          <svg
            viewBox="0 0 24 24"
            width="80"
            height="80"
            fill="#FFFFFF"
            className="transition-transform duration-300 hover:scale-110"
            aria-label={title || slug}
          >
            <path d={icon.path} />
          </svg>
        </span>
      );
    } catch (error) {
      console.error(`Error rendering icon for ${slug}:`, error);
      // Fallback to a letter representation
      return (
        <span className="text-6xl flex items-center justify-center w-20 h-20 text-white font-bold">
          {slug.charAt(1).toUpperCase()}
        </span>
      );
    }
  };

  return (
    <section className="relative w-full flex flex-col">
      {rows.map((row, rowIndex) => {
        // Determine base velocity for each row
        const getBaseVelocity = (index: number) => {
          if (index === 0) return default_velocity;
          if (index === 1) return -default_velocity;
          if (index === 2) return default_velocity * 0.7;
          // For additional rows, alternate direction with some variation
          return index % 2 === 0
            ? default_velocity * 0.8
            : -default_velocity * 0.9;
        };

        const baseVelocity = getBaseVelocity(rowIndex);
        const isLastRow = rowIndex === rows.length - 1;

        return (
          <ParallaxText key={rowIndex} baseVelocity={baseVelocity}>
            <div
              className={`flex whitespace-nowrap ${!isLastRow ? "pb-14" : ""}`}
            >
              {row.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-24 px-12 opacity-50 text-white hover:opacity-100 transition-opacity duration-300"
                >
                  <TechIcon
                    slug={iconAssignments[rowIndex]?.[index]}
                    title={tech}
                  />
                  <span
                    className={`${getUniqueTextStyle(rowIndex, index)} text-3xl`}
                  >
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </ParallaxText>
        );
      })}
    </section>
  );
};
