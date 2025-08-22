export interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  showcasable: boolean;
  isActivity?: boolean;
  collaborated?: boolean;
  recent?: boolean;
}

export const projectsData: ProjectInterface[] = [
  {
    id: 1,
    title: "Pango Adventure",
    description:
      "An interactive platform that teaches Django concepts through visual, gamified exercises. Inspired by CSS Flex Froggy, it lets learners practice coding with instant feedback in a fun and engaging way.",
    images: ["/assets/images/project-image-placeholder.png"],
    technologies: ["Django", "Tailwind", "jQuery", "TypeScript", "SQLite"],
    showcasable: true,
  },
  {
    id: 2,
    title: "Printing Press Production Payment & MIS",
    description:
      "A system to manage printing press production, track payments, and generate MIS reports for efficient workflow and financial monitoring.",
    images: ["/assets/images/project-image-placeholder.png"],
    technologies: ["Django", "Django REST", "Tailwind", "React", "TypeScript", "SQLite"],
    showcasable: true,
  },
  {
    id: 3,
    title: "Pageant History Management System",
    description:
      "A system to manage and archive pageant histories, including contestants, events, and results, providing easy access and organized records.",
    images: ["/assets/images/project-image-placeholder.png"],
    technologies: ["PHP", "MySQL", "jQuery", "Bootstrap Components", "Tailwind", "MySQL"],
    showcasable: true,
  },
  {
    id: 4,
    title: "Deperession Quick Test",
    description:
      "A single-page interactive depression test that assesses users’ depression levels and provides dynamic, personalized advice instantly.",
    images: ["/assets/images/project-image-placeholder.png"],
    technologies: ["NextJS", "GoogleAuth", "MongoDB", "Tailwind", "TypeScript", "Zod"],
    showcasable: true,
  },
  {
    id: 5,
    title: "ThrifTtrack",
    description:
      "A prototype e-commerce platform for buying and selling thrifted clothes, offering a simple and engaging shopping experience.",
    images: ["/assets/images/project-image-placeholder.png"],
    technologies: ["PHP", "VanillaJS", "Tailwind", "PHPMailer", "CSS3", "MySQL"],
    showcasable: true,
  },
  {
    id: 6,
    title: "NextJS Blogsite",
    description:
      "A simple Next.js blog site, developed collaboratively, for creating, managing, and displaying blog posts with a clean and responsive design.",
    images: ["/assets/images/project-image-placeholder.png"],
    technologies: ["NextJS", "Figma", "Tailwind", "TypeScript"],
    showcasable: true,
    collaborated: true,
  },
  {
    id: 7,
    title: "React-TS Playground",
    description:
      "A React + TypeScript website with login and signup functionality, featuring a fun, interactive Tic Tac Toe game on the homepage.",
    images: ["/assets/images/project-image-placeholder.png"],
    technologies: ["React", "React-Router", "Tailwind", "TypeScript"],
    showcasable: true,
  },
  {
    id: 8,
    title: "Musical Website",
    description:
      "A straightforward website developed using foundational web technologies, including HTML, CSS, basic JavaScript, and CSS frameworks.",
    images: ["/assets/images/project-image-placeholder.png"],
    technologies: ["HTML5", "CC3", "Bootstrap", "Vanilla JS"],
    showcasable: false,
  },
  {
    id: 9,
    title: "Java Arrays Playground",
    description:
      "A comprehensive activity, regarded as a project, that explores the complexities of arrays and object-oriented programming in Java.",
    images: ["/assets/images/project-image-placeholder.png"],
    technologies: ["Java"],
    showcasable: false,
    isActivity: true,
  },
  {
    id: 10,
    title: "My Portfolio Responsive Prototype",
    description:
      "A website portfolio designed in Figma with interactive prototypes, featuring dark and light modes as well as a mobile-responsive version.",
    images: ["/assets/images/project-image-placeholder.png"],
    technologies: ["Figma"],
    showcasable: false,
  },
  {
    id: 11,
    title: "Attendance System UI Prototype",
    description:
      "A commissioned initial UI design for an Attendance Tracking System, featuring interactive prototypes.",
    images: ["/assets/images/project-image-placeholder.png"],
    technologies: ["Figma"],
    showcasable: false,
  },
];
