// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Mobile Accessories E-commerce",
    description:
      "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
    href: "",
    image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Plant Shop E-commerce",
    description:
      "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
    href: "",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Apple Tech Marketplace",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    href: "",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Blazor" },
      { id: 2, name: "ASP.NET Core" },
      { id: 3, name: "SQL Server" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "Electronics & Gadgets Store",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    href: "",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Home Decor Marketplace",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
  {
    id: 7,
    name: "Rn Animations Components",
    description: "A project focused on rn animations components.",
    href: "https://github.com/NuralamMRH/rn-animations-components",
    image:
      "https://github.com/NuralamMRH/rn-animations-components/blob/main/season1/src/01-React-Native-Custom-Switch/Demo1.gif",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "JavaScript",
      },
      {
        id: 3,
        name: "Kotlin",
      },
      {
        id: 4,
        name: "Ruby",
      },
      {
        id: 5,
        name: "Swift",
      },
    ],
  },
  {
    id: 8,
    name: "Tiktok Adult",
    description: "A project focused on tiktok adult.",
    href: "https://github.com/NuralamMRH/tiktok-adult",
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8ia7odl3vkqcurq6v91s.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "Python",
      },
      {
        id: 3,
        name: "HTML",
      },
      {
        id: 4,
        name: "JavaScript",
      },
      {
        id: 5,
        name: "CSS",
      },
      {
        id: 6,
        name: "Shell",
      },
      {
        id: 7,
        name: "Dockerfile",
      },
    ],
  },
  {
    id: 9,
    name: "React Native Instagram Navigation Test",
    description: "A project focused on react native instagram navigation test.",
    href: "https://github.com/NuralamMRH/react-native-instagram-navigation-test",
    image: "https://i.ytimg.com/vi/dBBfsFTpGhc5/maxresdefault.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "Java",
      },
      {
        id: 3,
        name: "Ruby",
      },
      {
        id: 4,
        name: "Objective-C",
      },
      {
        id: 5,
        name: "Objective-C++",
      },
      {
        id: 6,
        name: "TypeScript",
      },
    ],
  },
  {
    id: 10,
    name: "React Native Header Transition Test",
    description: "A project focused on react native header transition test.",
    href: "https://github.com/NuralamMRH/react-native-header-transition-test",
    image: "https://i.ytimg.com/vi/kQ7ss1dalFdk/hqdefault.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "Java",
      },
      {
        id: 2,
        name: "Ruby",
      },
      {
        id: 3,
        name: "Objective-C",
      },
      {
        id: 4,
        name: "JavaScript",
      },
      {
        id: 5,
        name: "Objective-C++",
      },
      {
        id: 6,
        name: "TypeScript",
      },
    ],
  },
  {
    id: 11,
    name: "React Native Dynamic Island Test",
    description: "A project focused on react native dynamic island test.",
    href: "https://github.com/NuralamMRH/react-native-dynamic-island-test",
    image: "https://i.ytimg.com/vi/czm65fkJOG53/maxresdefault.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "Java",
      },
      {
        id: 2,
        name: "Swift",
      },
      {
        id: 3,
        name: "Objective-C",
      },
      {
        id: 4,
        name: "Ruby",
      },
      {
        id: 5,
        name: "JavaScript",
      },
      {
        id: 6,
        name: "Objective-C++",
      },
      {
        id: 7,
        name: "TypeScript",
      },
      {
        id: 8,
        name: "C",
      },
    ],
  },
  {
    id: 12,
    name: "Opensource Alternative",
    description: "A project focused on opensource alternative.",
    href: "https://github.com/NuralamMRH/opensource-alternative",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*kkmSZ64TI_wJl2cD4q4Svg.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [],
  },
  {
    id: 7,
    name: "3D Portfolio",
    description: "A project focused on 3d portfolio.",
    href: "https://github.com/NuralamMRH/3d-portfolio",
    image:
      "https://github.com/user-attachments/assets/9b0ed20e-074e-4f2a-81d8-20c9da751e9e",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "HTML",
      },
    ],
  },
  {
    id: 13,
    name: "3D Adidas Shop",
    description: "A project focused on 3d adidas shop.",
    href: "https://github.com/NuralamMRH/3d-adidas-shop",
    image: "/assets/projects/default.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "JavaScript",
      },
      {
        id: 3,
        name: "CSS",
      },
    ],
  },
  {
    id: 14,
    name: "Portfolio Awwwards",
    description: "A project focused on portfolio awwwards.",
    href: "https://github.com/NuralamMRH/portfolio-awwwards",
    image:
      "https://github.com/user-attachments/assets/4eaf9399-fd02-4a90-83f7-2b5a361bc032",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "HTML",
      },
    ],
  },
  {
    id: 15,
    name: "Fish Classification",
    description: "A project focused on fish classification.",
    href: "https://github.com/NuralamMRH/fish-classification",
    image:
      "https://www.frontiersin.org/files/Articles/813414/fmars-09-813414-HTML/image_m/fmars-09-813414-g001.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "Jupyter Notebook",
      },
      {
        id: 2,
        name: "Python",
      },
    ],
  },
  {
    id: 16,
    name: "Saas Ai Agent Web Tools Next.Js",
    description: "A project focused on SaaS AI Agent web Tools Next.js.",
    href: "https://github.com/NuralamMRH/SaaS-AI-Agent-web-Tools-Next.js",
    image: "https://i.ytimg.com/vi/7dBgxNhD4XjW/maxresdefault.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "JavaScript",
      },
      {
        id: 3,
        name: "HTML",
      },
      {
        id: 4,
        name: "CSS",
      },
    ],
  },
  {
    id: 17,
    name: "Uifig Mobile Agent Saas",
    description: "A project focused on UIFig Mobile Agent SaaS.",
    href: "https://github.com/NuralamMRH/UIFig-Mobile-Agent-SaaS",
    image: "https://cdn.dribbble.com/userupload/12345678/file.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "JavaScript",
      },
    ],
  },
  {
    id: 18,
    name: "Fish Ditection Ai",
    description: "A project focused on fish ditection ai.",
    href: "https://github.com/NuralamMRH/fish-ditection-ai",
    image: "/assets/projects/default.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "Jupyter Notebook",
      },
      {
        id: 2,
        name: "Python",
      },
      {
        id: 3,
        name: "HTML",
      },
      {
        id: 4,
        name: "Shell",
      },
      {
        id: 5,
        name: "JavaScript",
      },
      {
        id: 6,
        name: "TypeScript",
      },
      {
        id: 7,
        name: "PureBasic",
      },
    ],
  },
  {
    id: 19,
    name: "Rancoded Components",
    description: "A project focused on rancoded components.",
    href: "https://github.com/NuralamMRH/rancoded-components",
    image: "/assets/projects/default.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "TypeScript",
      },
      {
        id: 3,
        name: "CSS",
      },
      {
        id: 4,
        name: "HTML",
      },
    ],
  },
  {
    id: 20,
    name: "Full Stack Tinder",
    description: "A project focused on Full Stack Tinder.",
    href: "https://github.com/NuralamMRH/Full-Stack-Tinder",
    image:
      "https://raw.githubusercontent.com/NuralamMRH/Full-Stack-Tinder/main/client/public/screenshot-for-readme.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "HTML",
      },
      {
        id: 3,
        name: "CSS",
      },
    ],
  },
  {
    id: 21,
    name: "Pern Ecommerce",
    description: "A project focused on pern ecommerce.",
    href: "https://github.com/NuralamMRH/pern-ecommerce",
    image:
      "https://raw.githubusercontent.com/NuralamMRH/pern-ecommerce/main/frontend/public/screenshot-for-readme.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "HTML",
      },
      {
        id: 3,
        name: "CSS",
      },
    ],
  },
  {
    id: 22,
    name: "Fullstack Chat Video Calling App",
    description: "A project focused on Fullstack Chat Video Calling App.",
    href: "https://github.com/NuralamMRH/Fullstack-Chat-Video-Calling-App",
    image:
      "https://raw.githubusercontent.com/NuralamMRH/Fullstack-Chat-Video-Calling-App/main/frontend/public/screenshot-for-readme.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "HTML",
      },
    ],
  },
  {
    id: 23,
    name: "Real Time Social Media App",
    description: "A project focused on Real Time Social Media App.",
    href: "https://github.com/NuralamMRH/Real-Time-Social-Media-App",
    image:
      "https://raw.githubusercontent.com/NuralamMRH/Real-Time-Social-Media-App/main/assets/images/screenshot-for-readme.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "JavaScript",
      },
    ],
  },
  {
    id: 24,
    name: "Slack Chat Video Calling",
    description: "A project focused on Slack Chat Video Calling.",
    href: "https://github.com/NuralamMRH/Slack-Chat-Video-Calling",
    image:
      "https://raw.githubusercontent.com/NuralamMRH/Slack-Chat-Video-Calling/main/frontend/public/screenshot-for-readme.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "HTML",
      },
    ],
  },
  {
    id: 20,
    name: "Full Stack Chat App",
    description: "A project focused on Full Stack Chat App.",
    href: "https://github.com/NuralamMRH/Full-Stack-Chat-App",
    image:
      "https://raw.githubusercontent.com/NuralamMRH/Full-Stack-Chat-App/main/frontend/public/screenshot-for-readme.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "HTML",
      },
    ],
  },
  {
    id: 21,
    name: "Full Stack Expo Native Commerce",
    description: "A project focused on full stack expo native commerce.",
    href: "https://github.com/NuralamMRH/full-stack-expo-native-commerce",
    image: "https://i.ytimg.com/vi/sON40mokW5I3/maxresdefault.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [],
  },
  {
    id: 22,
    name: "Rangpt Web App",
    description: "A project focused on rangpt web app.",
    href: "",
    image:
      "https://raw.githubusercontent.com/NuralamMRH/rangpt-web-app/main/public/screenshot.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [],
  },
  {
    id: 23,
    name: "Rangpt",
    description: "A project focused on rangpt.",
    href: "",
    image:
      "https://raw.githubusercontent.com/NuralamMRH/rangpt/main/public/screenshot.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [],
  },
  {
    id: 24,
    name: "Ai Chatbot",
    description: "A project focused on ai chatbot.",
    href: "",
    image:
      "https://raw.githubusercontent.com/vercel/ai-chatbot/main/public/screenshot.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [],
  },
  {
    id: 25,
    name: "Ranplexica",
    description: "A project focused on ranplexica.",
    href: "",
    image:
      "https://raw.githubusercontent.com/ItzCrazyKns/Perplexica/main/public/screenshot.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [],
  },
  {
    id: 26,
    name: "Open Ranai",
    description: "A project focused on open ranai.",
    href: "",
    image:
      "https://raw.githubusercontent.com/open-webui/open-webui/main/public/screenshot.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [],
  },
  {
    id: 27,
    name: "Tinybase Local First Grocery List",
    description: "A project focused on tinybase local first grocery list.",
    href: "",
    image: "https://tinybase.org/img/logo.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [],
  },
  {
    id: 28,
    name: "Todo App With Tinybase",
    description: "A project focused on todo app with tinybase.",
    href: "",
    image: "https://tinybase.org/img/logo.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [],
  },
  {
    id: 29,
    name: "Gradio Build Machine Learning Web Apps",
    description: "A project focused on Gradio Build Machine Learning Web Apps.",
    href: "",
    image: "https://gradio.app/assets/img/logo.svg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [],
  },
];

export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/rancoded/" },
  {
    name: "Youtube",
    href: "https://www.youtube.com/channel/rancoded",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/md-nuralam-b5a792212/",
  },
  { name: "GitHub", href: "https://github.com/NuralamMRH" },
];
