// ============================================================
// PORTFOLIO DATA — DINESH AREKAR
// Structured source of truth for all portfolio content.
// ============================================================

export type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  status: "Live" | "GitHub Only";
  year: string;
  highlights: string[];
};

export type Experience = {
  id: string;
  year: string;
  role: string;
  company: string;
  companyType: string;
  period: string;
  description: string;
  technologies: string[];
  contributions: string[];
};

export type TechCategory = {
  category: string;
  items: string[];
};

export type TimelineEntry = {
  year: string;
  label: string;
  description: string;
};

// ────────────────────────────────────────────────────────────
// PROJECTS
// ────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "social-scheduler",
    index: "01",
    title: "SOCIALSCHEDULER",
    subtitle: "AI-Powered Social Media Automation Platform",
    description:
      "A full-stack platform that enables users to schedule and auto-publish content across 4 social platforms using AI-generated copy, hashtags, and images.",
    longDescription:
      "SocialScheduler is an AI-powered social media automation platform built with React 19, Next.js, and Express.js. It schedules and auto-publishes content across 4 platforms via Zernio OAuth API, with AI content generation powered by Google Gemini AI and Pollinations.ai across 5 customizable tones.",
    technologies: [
      "React 19",
      "TypeScript",
      "Next.js",
      "Express.js",
      "MongoDB",
      "Google Gemini AI",
      "Pollinations.ai",
      "Node-Cron",
      "Cloudinary",
    ],
    githubUrl: "https://github.com/arekardinesh",
    liveUrl: "#",
    status: "Live",
    year: "2025",
    highlights: [
      "Schedules content across 4 platforms via Zernio OAuth API",
      "3-model AI fallback array (Gemini + Pollinations) for 100% uptime",
      "Node-Cron worker polling MongoDB every 60s for scheduled publishing",
      "10+ RESTful APIs for scheduling, AI generation, and media uploads",
    ],
  },
  {
    id: "blog-cms",
    index: "02",
    title: "BLOG CMS",
    subtitle: "Full-Stack Content Management System",
    description:
      "A production-grade Blog CMS with 15+ REST API endpoints, JWT authentication, rich-text editing, and a normalized PostgreSQL schema enforcing referential integrity.",
    longDescription:
      "Full-stack Blog CMS built with Next.js and Express.js. Features JWT access/refresh token rotation, OTP-based email verification, bcrypt hashing across 8 auth flows, and a Prisma ORM schema with 6 normalized models for Users, Blogs, Comments, Likes, Followers, and nested Replies.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "JWT",
      "Cloudinary",
      "NodeMailer",
      "TipTap",
    ],
    githubUrl: "https://github.com/arekardinesh",
    status: "GitHub Only",
    year: "2025",
    highlights: [
      "15+ REST API endpoints for blogs, comments, likes, follows",
      "JWT rotation + OTP email verification across 8 distinct auth flows",
      "6-model normalized PostgreSQL schema with Prisma ORM",
      "Cloudinary + TipTap Editor for rich-text and media management",
    ],
  },
  {
    id: "e-learning",
    index: "03",
    title: "E-LEARNING PLATFORM",
    subtitle: "Full-Stack Course & Enrollment System",
    description:
      "A scalable e-learning platform with RESTful APIs, shopping cart, course enrollment workflows, and a role-separated admin dashboard with RBAC.",
    longDescription:
      "Full-stack e-learning platform using React 19, Node.js, Express.js, and MongoDB. Implements shopping cart, checkout, order management, and course enrollment workflows with an admin dashboard for managing users, enrollments, and content. JWT-based RBAC separates student and admin permissions.",
    technologies: [
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose ODM",
      "JWT",
      "RBAC",
      "REST APIs",
    ],
    githubUrl: "https://github.com/arekardinesh",
    status: "GitHub Only",
    year: "2024",
    highlights: [
      "Shopping cart, checkout, and order management APIs",
      "Course enrollment workflows with admin content controls",
      "JWT-based RBAC separating student and admin access layers",
      "MongoDB schemas with Mongoose ODM for flexible schema design",
    ],
  },
];

// ────────────────────────────────────────────────────────────
// EXPERIENCE
// ────────────────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: "instaiq",
    year: "2025",
    role: "Full Stack Intern",
    company: "Instaiq",
    companyType: "Product Startup",
    period: "Jun 2025 — Nov 2025",
    description:
      "Developed and tested RESTful APIs for core platform features — user authentication, course management, and data retrieval — backed by a MongoDB database.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Git", "GitHub"],
    contributions: [
      "Built and tested RESTful APIs for user authentication, course management, and data retrieval connected to MongoDB",
      "Implemented JWT-based authentication with protected route middleware and role-based access control",
      "Collaborated via Git and GitHub — pull requests, code reviews, and debugging API responses",
      "Gained hands-on experience across the full backend development lifecycle",
    ],
  },
];

// ────────────────────────────────────────────────────────────
// TECH STACK
// ────────────────────────────────────────────────────────────
export const techStack: TechCategory[] = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "bcrypt", "RBAC"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Mongoose ODM"],
  },
  {
    category: "Tools & Cloud",
    items: ["Git", "GitHub", "Postman", "Vercel", "Render", "Cloudinary"],
  },
  {
    category: "AI & Integrations",
    items: ["Google Gemini AI", "Pollinations.ai", "Node-Cron", "NodeMailer"],
  },
];

// ────────────────────────────────────────────────────────────
// CAREER TIMELINE
// ────────────────────────────────────────────────────────────
export const timeline: TimelineEntry[] = [
  {
    year: "2022",
    label: "Computer Science",
    description:
      "Started B.Tech in Computer Science & Engineering at Babasaheb Naik College of Engineering, Pusad.",
  },
  {
    year: "2023",
    label: "JavaScript · React · Node.js",
    description:
      "Built foundations in JavaScript, React, and Node.js. Completed the Full-Stack Web Development Bootcamp. Started solving DSA problems on LeetCode.",
  },
  {
    year: "2024",
    label: "Full-Stack Development",
    description:
      "Built the E-Learning Platform — first full production-grade application with role-based auth, admin dashboards, and REST APIs backed by MongoDB.",
  },
  {
    year: "2025",
    label: "Next.js · TypeScript · PostgreSQL · AI",
    description:
      "Interned at Instaiq as Full Stack Intern. Built SocialScheduler (AI automation, multi-platform publishing) and Blog CMS (PostgreSQL + Prisma + JWT). Integrated Google Gemini AI and Cloudinary into production systems.",
  },
  {
    year: "2026",
    label: "Software Engineer",
    description:
      "Graduating with B.Tech CSE (CGPA 7.49). Actively seeking full-time Software Engineer roles. 200+ LeetCode problems solved.",
  },
];

// ────────────────────────────────────────────────────────────
// PERSONAL INFO
// ────────────────────────────────────────────────────────────
export const personal = {
  name: "Dinesh Arekar",
  role: "Software Engineer",
  location: "Jalna, Maharashtra, India",
  email: "arekardinesh685@gmail.com",
  phone: "9325515167",
  github: "https://github.com/arekardinesh",
  linkedin: "https://linkedin.com/in/arekardinesh",
  leetcode: "https://leetcode.com/arekardinesh",
  university: "Babasaheb Naik College of Engineering, Pusad",
  degree: "B.Tech Computer Science & Engineering",
  cgpa: "7.49 / 10",
  batch: "Sep 2022 — May 2026",
  interests: [
    "Backend Architecture",
    "Full-Stack Systems",
    "Cloud & DevOps",
    "Distributed Systems",
    "AI-Powered Applications",
  ],
};
