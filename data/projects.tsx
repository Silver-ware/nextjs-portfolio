export interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  features?: string[];
  funFact?: string;
  showcasable: boolean;
  isActivity?: boolean;
  collaborated?: boolean;
  recent?: boolean;
  figma?: string;
  repository?: string;
  website?: string;
}

export const projectsData: ProjectInterface[] = [
  {
    id: 1,
    title: "Pango Adventure",
    description:
      "An interactive platform that teaches Django concepts through visual, gamified exercises. Inspired by CSS Flex Froggy, it lets learners practice coding with instant feedback in a fun and engaging way.",
    images: [
      "/assets/projects/pango-adventure/pango-1.png",
      "/assets/projects/pango-adventure/pango-2.png",
      "/assets/projects/pango-adventure/pango-3.png",
      "/assets/projects/pango-adventure/pango-4.png",
      "/assets/projects/pango-adventure/pango-7.png",
      "/assets/projects/pango-adventure/pango-6.png",
    ],
    technologies: ["Django", "Tailwind", "jQuery", "TypeScript", "SQLite"],
    features: [
      "Gamified coding challenges that make learning Django fun and interactive",
      "Step-by-step exercises with instant feedback on code submissions",
      "Visual problem-solving inspired by Flex Froggy, tailored to Django concepts",
      "Integrated playground for experimenting with Django fundamentals",
      "Responsive interface built with Tailwind for smooth cross-device usage",
      "Lightweight backend using Django + SQLite for easy deployment",
    ],
    funFact: "Currently being re-develop using a front-end framework (Vue)",
    showcasable: true,
  },
  {
    id: 2,
    title: "Printing Press Production & Payment MIS",
    description:
      "A system to manage printing press production, track payments, and generate MIS reports for efficient workflow and financial monitoring.",
    images: [
      "/assets/projects/pppmis/pppmis-1.png",
      "/assets/projects/pppmis/pppmis-2.png",
      "/assets/projects/pppmis/pppmis-3.png",
      "/assets/projects/pppmis/pppmis-4.png",
      "/assets/projects/pppmis/pppmis-5.png",
      "/assets/projects/pppmis/pppmis-6.png",
    ],
    technologies: [
      "Django",
      "Django REST",
      "Tailwind",
      "React",
      "TypeScript",
      "SQLite",
    ],
    features: [
      "Order and production tracking for printing jobs with real-time status updates",
      "Automated payment recording and outstanding balance monitoring",
      "Role-based access for admins, workers, and production staff",
      "MIS reports with filters for revenue, expenses, and job performance",
      "Integration of Django REST API with React frontend for smooth user experience",
      "Lightweight database layer with SQLite for fast and reliable storage",
      "Simple setup process with preloaded reference data to quickly initialize the system",
    ],
    showcasable: true,
  },
  {
    id: 3,
    title: "Pageant History Management System",
    description:
      "A system to manage and archive pageant histories, including contestants, events, and results, providing easy access and organized records.",
    images: [
      "/assets/projects/phmis/phmis-1.png",
      "/assets/projects/phmis/phmis-2.png",
      "/assets/projects/phmis/phmis-3.png",
      "/assets/projects/phmis/phmis-4.png",
    ],
    technologies: [
      "PHP",
      "MySQL",
      "jQuery",
      "Bootstrap Components",
      "Tailwind",
    ],
    features: [
      "Contestant management with detailed profiles, photos, and achievements",
      "Event tracking to archive pageants with dates, venues, and organizers",
      "Result recording with categories, placements, and awards",
      "Searchable archive for quick retrieval of contestants and event histories",
      "Role-based access for administrators and staff to manage data securely",
      "Responsive UI using Bootstrap components and Tailwind for consistency",
      "Simple setup with preloaded reference data (categories, titles, sample events) for quick initialization",
      "Have a Media Gallery for each events.",
    ],
    funFact: "The project was initiated by another person, and I took over to carry it forward.",
    showcasable: true,
    collaborated: true,
  },
  {
    id: 4,
    title: "Deperession Quick Test",
    description:
      "A single-page interactive depression test that assesses users’ depression levels and provides dynamic, personalized advice instantly.",
    images: [
      "/assets/projects/depression-scale/depression-scale-1.png",
      "/assets/projects/depression-scale/depression-scale-2.png",
      "/assets/projects/depression-scale/depression-scale-3.png",
      "/assets/projects/depression-scale/depression-scale-4.png",
      "/assets/projects/depression-scale/depression-scale-5.png",
    ],
    technologies: [
      "NextJS",
      "GoogleAuth",
      "MongoDB",
      "Tailwind",
      "TypeScript",
      "Zod",
    ],
    features: [
      "Single-page interactive test with real-time score calculation",
      "Personalized advice generated instantly based on test results",
      "Google Authentication for secure and convenient user login",
      "User progress and test history stored in MongoDB for quick retrieval",
      "Form validation and input safety powered by Zod",
      "Clean and responsive interface built with Tailwind for accessibility on all devices",
      "Lightweight Next.js app optimized for fast performance",
    ],
    showcasable: true,
  },
  {
    id: 5,
    title: "ThrifTtrack",
    description:
      "A prototype e-commerce platform for buying and selling thrifted clothes, offering a simple and engaging shopping experience.",
    images: [
      "/assets/projects/thrift-track/tt-1.png",
      "/assets/projects/thrift-track/tt-2.png",
      "/assets/projects/thrift-track/tt-3.png",
    ],
    technologies: [
      "PHP",
      "VanillaJS",
      "Tailwind",
      "PHPMailer",
      "CSS3",
      "MySQL",
    ],
    features: [
      "Prototype platform for showcasing the concept of secondhand clothing e-commerce",
      "Basic product listing with images, descriptions, and prices",
      "Simple shopping cart functionality for simulating the buying experience",
      "User registration and login with PHP and MySQL",
      "Email notifications powered by PHPMailer for order simulations",
      "Minimalistic UI styled with Tailwind and CSS3",
      "Lightweight architecture using PHP and VanillaJS for quick prototyping",
    ],
    showcasable: false,
  },
  {
    id: 6,
    title: "NextJS Blogsite",
    description:
      "A simple Next.js blog site, developed collaboratively, for creating, managing, and displaying blog posts with a clean and responsive design.",
    images: [
      "/assets/projects/blogsite/next-blogsite-1.png",
      "/assets/projects/blogsite/next-blogsite-2.png",
      "/assets/projects/blogsite/next-blogsite-3.png",
      "/assets/projects/blogsite/next-blogsite-4.png",
      "/assets/projects/blogsite/next-blogsite-5.png",
    ],
    technologies: ["NextJS", "Figma", "Tailwind", "TypeScript"],
    features: [
      "Collaboratively developed blog platform using Next.js and TypeScript",
      "Clean and responsive UI designed in Figma and implemented with Tailwind",
      "Ability to create, edit, and delete blog posts with structured layouts",
      "Dynamic routing for individual post pages with SEO-friendly URLs",
      "Reusable components for consistent styling and faster development",
    ],
    showcasable: true,
    collaborated: true,
  },
  {
    id: 7,
    title: "React-TS Playground",
    description:
      "A React + TypeScript website with login and signup functionality, featuring a fun, interactive Tic Tac Toe game on the homepage.",
    images: [
      "/assets/projects/react-ts-play/react-ts-1.png",
      "/assets/projects/react-ts-play/react-ts-2.png",
      "/assets/projects/react-ts-play/react-ts-3.png",
      "/assets/projects/react-ts-play/react-ts-4.png",
    ],
    technologies: ["React", "React-Router", "Tailwind", "TypeScript"],
    features: [
      "Login and signup functionality with client-side validation",
      "Interactive Tic Tac Toe game in the Game Tab",
      "Navigation handled with React Router for seamless page transitions",
      "Lightweight playground project showcasing authentication and interactivity",
    ],
    showcasable: true,
  },
  {
    id: 8,
    title: "BlogThreads Website",
    description:
      "A straightforward website developed using foundational web technologies, including HTML, CSS, basic JavaScript, and CSS frameworks.",
    images: [
      "/assets/projects/html-blog/html-blog-1.png",
      "/assets/projects/html-blog/html-blog-2.png",
      "/assets/projects/html-blog/html-blog-3.png",
      "/assets/projects/html-blog/html-blog-4.png",
      "/assets/projects/html-blog/html-blog-5.png",
    ],
    technologies: ["HTML5", "CC3", "Bootstrap", "Vanilla JS"],
    features: [
      "Static blog-style website built entirely with client-side technologies",
      "Basic JavaScript interactivity for UI enhancements",
      "Lightweight structure without backend or backend authentication features",
      "Demonstrates foundational skills in HTML, CSS, and Vanilla JS",
    ],
    funFact:
      "This will undergone a redevelopment and have a backend implemented.",
    showcasable: false,
  },
  // {
  //   id: 9,
  //   title: "Java Arrays Playground",
  //   description:
  //     "A comprehensive activity, regarded as a project, that explores the complexities of arrays and object-oriented programming in Java.",
  //   images: ["/assets/images/project-image-placeholder.png"],
  //   technologies: ["Java"],
  //   showcasable: false,
  //   isActivity: true,
  // },
  {
    id: 10,
    title: "My Portfolio Responsive Prototype",
    description:
      "A website portfolio designed in Figma with interactive prototypes, featuring dark and light modes as well as a mobile-responsive version.",
    images: [
      "/assets/projects/figma-portfolio/figma-portfolio-1.png",
      "/assets/projects/figma-portfolio/figma-portfolio-2.png",
      "/assets/projects/figma-portfolio/figma-portfolio-3.png",
    ],
    technologies: ["Figma"],
    features: [
      "Portfolio website designed entirely in Figma",
      "Interactive prototype built with Figma’s prototyping tools",
      "Light and dark mode support through variable manipulation",
      "Mobile-responsive layouts showcasing adaptability across devices",
    ],
    showcasable: false,
  },
  {
    id: 11,
    title: "Attendance System UI Prototype",
    description:
      "A commissioned initial UI design for an Attendance Tracking System, featuring interactive prototypes.",
    images: [
      "/assets/projects/figma-attendance/figma-attendance-1.png",
      "/assets/projects/figma-attendance/figma-attendance-2.png",
      "/assets/projects/figma-attendance/figma-attendance-3.png",
    ],
    technologies: ["Figma"],
    features: [
      "Commissioned UI design created in Figma for an Attendance Tracking System",
      "Interactive prototype demonstrating key user flows and screen transitions",
      "Built as a prototype deliverable for visualization before development",
    ],
    showcasable: false,
  },
];
