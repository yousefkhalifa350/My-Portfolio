// lib/data.ts — single source of truth for all portfolio content.

export const profile = {
  firstName: "Yousef",
  fullName: "Yousef Hesham",
  role: "Front-End Developer",
  photo: "/projects/test1.webp",
  availability: "Available for work",
  resume: {
    url: "/CV/Yousef Hesham_Resume.pdf",
    fileName: "Yousef_Hesham_Resume.pdf",
  },
  tagline:    "Delivering fast, scalable web applications — engineered to load in under 1.5 seconds.",
  summary:
    "Delivering efficient, scalable and innovative web applications. Building high-performance interfaces with modern technologies.",
};

export const heroTitles = [
  "Design Systems",
  "Performance Optimization",
  "UI/UX Bridge",
];

export const heroTags = ["Frontend Developer", "React Expert", "UI Integrator"];

export const heroStats = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export const about = {
  heading: "About me >> who I'm",
  paragraph:
    "Frontend Developer specializing in building responsive, scalable, and high-performance web applications using React.js, Next.js, and TypeScript. Experienced in developing production-ready projects with REST APIs integration, authentication flows, and modern state management using Context API and TanStack Query. Skilled in form validation and handling with React Hook Form and Zod, and implementing SEO-friendly and optimized applications using SSR/SSG in Next.js. Focused on performance optimization techniques such as code splitting, lazy loading, and reusable component architecture. Passionate about writing clean, maintainable code and delivering seamless user experiences in Agile development environments.",
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Context API",
    "TanStack Query",
    "React Hook Form",
    "Zod",
    "REST APIs",
    "Git",
    "Vite",
    "Code Splitting",
    "SSR/SSG",
  ],
};

export const experience = {
  title: "Technical Support Specialist",
  company: "Linchpin",
  system: "AlMotakamel ERP",
  period: "11/2024 – Present",
  summary:
    "Managed ERP system installation, configuration, and support across on-site and remote environments",
  responsibilities: [
    "Handled Oracle database and application server setup",
    "Resolving technical issues",
    "ERP Installation",
    "Database Installation",
    "Oracle",
    "Application Server",
    "Client Support",
    "Troubleshooting",
  ],
};

export const careerGoal = {
  heading: "Career Goal",
  text: "Transition into a Front-End Developer role while leveraging my technical support and problem-solving experience",
};

export const skillCategories = [
  {
    id: "frontend",
    title: "Front-End",
    icon: "layout",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vite", "npm"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "backend",
    skills: ["REST API", "JSON", "Postman"],
  },
  {
    id: "enterprise",
    title: "Technical Support & Enterprise",
    icon: "enterprise",
    skills: [
      "Oracle Database",
      "Oracle APEX",
      "Application Server",
      "SQL",
      "Windows Server",
      "ERP Systems",
    ],
  },
];

export const projects = [
  {
    title: "ShopMart — E-Commerce Store",
    description:
      "Shop smarter, live better: premium products, trusted brands (LC Waikiki, Canon, Samsung, Sony, Dell) and seamless shopping, made for you.", 
    image:
      "/projects/shopmart.webp",
    live: "https://shopmart-ecommerce.vercel.app/",
    github: "https://github.com/yousefkhalifa350/shopmart-ecommerce",
    tech: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
    badge: "Production e-commerce",
  },
  {
    title: "Live Weather",
    description:
      "A weather dashboard with live conditions, photos, live camera and news — served through a clean, fully responsive layout.",
    image:
      "/projects/live-weather.webp",
    live: "https://yousefkhalifa350.github.io/live-weather/",
    github: "https://github.com/yousefkhalifa350/live-weather",
    tech: ["HTML5", "CSS3", "JavaScript", "Fully Responsive"],
    badge: "Weather data",
  },
  {
    title: "Start Framework",
    description:
      "A creative framework-driven multi-section site — portfolio, about and gallery pages with a modern, minimal aesthetic.",
    image:
      "/projects/start-framework.webp",
    live: "https://start-framework-three-sigma.vercel.app/About",
    github: "https://github.com/yousefkhalifa350/Start-Framework",
    tech: ["Bootstrap", "HTML5", "CSS3", "Vercel"],
    badge: "Bootstrap-based",
  },
  {
    title: "Daniels — Bootstrap Portfolio",
    description:
      "A polished Bootstrap portfolio: hero, services, works gallery, testimonials, counters and a working contact submit form.",
    image:
      "/projects/daniels.webp",
    live: "https://yousefkhalifa350.github.io/exam-bootstrap/",
    github: "https://github.com/yousefkhalifa350/exam-bootstrap",
    tech: ["Bootstrap", "HTML5", "CSS3", "JavaScript"],
    badge: "UI kit",
  },
  {
    title: "React Task Manager",
    description:
      "A modern task management app for organizing tasks, tracking progress and staying productive — built with React.",
    image:
      "/projects/task-manager.webp",
    live: "https://task-manager-six-pied-73.vercel.app/",
    github: "https://github.com/yousefkhalifa350/React-Task-Manager",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    badge: "Productivity",
  },

  {
    title: "Fokir",
    description:
      "A modern task management app for organizing tasks, tracking progress and staying productive — built with React.",
    image:
      "/projects/fokir.webp",
    live: "https://yousefkhalifa350.github.io/Assignment-4/",
    github: "https://github.com/yousefkhalifa350/Assignment-4",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    badge: "Productivity",
  },


];

export const contact = {
  heading: "Let's work together",
  copy: "Great ideas deserve great execution. I craft high-quality, user-centric web experiences that not only look good but work flawlessly. Let's bring your vision to life — contact me and let's build something extraordinary together!",
  email: "yousef.hesham@example.com",
  phone: "01128829775",
  phoneDisplay: "+20 112 882 9775",
  location: "Sheikh Zayed City, Egypt",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/",
      icon: "linkedin",
    },
  ],
};

export const footer = {
  line: `© ${new Date().getFullYear()} Yousef Hesham. All rights reserved.`,
};
