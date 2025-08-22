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
    images: [
      "/assets/projects/pango-adventure/pango-1.png",
      "/assets/projects/pango-adventure/pango-2.png",
      "/assets/projects/pango-adventure/pango-3.png",
      "/assets/projects/pango-adventure/pango-4.png",
      "/assets/projects/pango-adventure/pango-5.png",
      "/assets/projects/pango-adventure/pango-6.png",
    ],
    technologies: ["Django", "Tailwind", "jQuery", "TypeScript", "SQLite"],
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
      "MySQL",
    ],
    showcasable: true,
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
    showcasable: false,
  },
];
