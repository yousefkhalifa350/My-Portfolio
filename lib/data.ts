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
  tagline:   "Delivering fast, scalable web applications — optimized for exceptional performance.",
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
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Satisfaction" },
];

export const about = {
  heading: "About me >> who I'm",
  paragraph:
    "Frontend Developer with experience building scalable web applications using React.js Next.js and TypeScript Skilled in developing production-ready solutions including authentication systems API integrations payment workflows and performance optimization Combines technical support and business systems experience with modern frontend engineering to deliver reliable and user-focused digital products",
  technologies: [
 
   "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Context API",
  "REST APIs",
    "Git & GitHub",
    "Vite",
    "SSR/SSG",
    "NextAuth.js"
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
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Context API",
      "React Hook Form, NextAuth.js",
      "Tailwind CSS, shadcn/ui, Bootstrap, Framer Motion",
     "SEO fundamentals, SSR/SSG (Next.js)"
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vite", "npm", "OpenCode", "Copilot Chat"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "backend",
    skills: ["REST API", "JSON", "Postman","Authentication / NextAuth.js","API Integration"],
  },
  {
    id: "enterprise",
    title: "Technical Support & Enterprise",
    icon: "enterprise",
    skills: [
      "Oracle Database",
      "Application Server",
      "6i - Handling",
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
      "Developed a full-featured e-commerce application with Next.js and TypeScript, featuring secure NextAuth authentication, cart and wishlist management, Stripe payment integration, and a responsive user-friendly interface.",
    image:
      "/projects/shopmart.webp",
    live: "https://shopmart-ecommerce.vercel.app/",
    github: "https://github.com/yousefkhalifa350/shopmart-ecommerce",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NextAuth.js", "REST APIs", "Git", "GitHub", "Vercel"],
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
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap","Fully Responsive" ,"GitHub", ],
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
    tech: ["React.js", "JavaScript" ,"(ES6+)", "Tailwind CSS", "React Router", "Git", "GitHub", "Vercel"],
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
    tech: ["Bootstrap", "HTML5", "CSS3", "JavaScript" , "GitHub"],
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
    tech: ["React", "JavaScript", "Tailwind CSS","GitHub",  "Vercel" , "Redux"],
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
    tech: ["Bootstrap", "HTML5", "CSS3", "JavaScript","GitHub"],
    badge: "Productivity",
  },


];

export const contact = {
  heading: "Let's work together",
  copy: "Great ideas deserve great execution. I craft high-quality, user-centric web experiences that not only look good but work flawlessly. Let's bring your vision to life — contact me and let's build something extraordinary together!",
  email: "yousefkhalifa329@gmail.com",
  phone: "01128829775",
  phoneDisplay: "+20 112 882 9775",
  location: "Sheikh Zayed City, Egypt",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/yousefkhalifa350",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yousef-hesham-8197a5284/",
      icon: "linkedin",
    },
  ],
};

export const footer = {
  line: `© ${new Date().getFullYear()} Yousef Hesham. All rights reserved.`,
};
