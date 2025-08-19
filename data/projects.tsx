export interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export const projectsData: ProjectInterface[] = [
  {
    id: 1,
    title: "TaskMaster Pro",
    description:
      "A productivity-focused task management web app built with React, Django, and Tailwind CSS. Features include task creation, deadlines, priority labels, and collaborative boards for teams.",
    image: "/assets/images/project-image-placeholder.png",
    technologies: ["React", "Django", "TailwindCSS", "TypeScript"],
  },
  {
    id: 2,
    title: "VueStore",
    description:
      "An e-commerce platform developed using Vue, Django, and Tailwind CSS. Users can browse products, manage carts, and track orders with an intuitive dashboard.",
    image: "/assets/images/project-image-placeholder.png",
    technologies: ["Vue", "Django", "TailwindCSS", "Pinia", "TypeScript"],
  },
  {
    id: 3,
    title: "PHP Blog Hub",
    description:
      "A multi-user blogging platform created with PHP and jQuery, allowing users to publish posts, comment, and categorize articles. Includes admin moderation features.",
    image: "/assets/images/project-image-placeholder.png",
    technologies: ["PHP", "MySQL", "jQuery", "Bootstrap"],
  },
  {
    id: 4,
    title: "FireNotes",
    description:
      "A real-time note-taking web app using Firebase for authentication and data storage. Users can create, edit, and share notes across devices instantly.",
    image: "/assets/images/project-image-placeholder.png",
    technologies: ["Firebase", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 5,
    title: "DevPortfolio Builder",
    description:
      "A portfolio generator built with React, Django, and Tailwind CSS. Developers can create personal portfolio pages dynamically and showcase projects with ease.",
    image: "/assets/images/project-image-placeholder.png",
    technologies: ["React", "Django", "TailwindCSS", "TypeScript", "Git"],
  },
];
