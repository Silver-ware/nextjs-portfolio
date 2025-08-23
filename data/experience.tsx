type Contributions = {
  heading: string;
  list: string[],
}
export interface ExperienceInterface {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
  logo: string;
  contributions?: Contributions;
  relevant: boolean;
}

export const experienceData: ExperienceInterface[] = [
  {
    id: 1,
    position: "Front-end Developer (NextJS)",
    company: "Symphonics Co. LTD",
    period: "February 2025 - March 2025",
    description:
      "Assisted in building a company dashboard using Next.js and Tailwind CSS, focusing on UI components and API integration.",
    logo: "",
    contributions: {
      heading: "Despite being an Intern, I've made significant contributions:",
      list: [
        "Redesigned 20+ legacy UI screens in Figma, improving usability.",
        "Built a modern web app with Next.js from scratch.",
        "Integrated front-end with RESTful APIs.",
      ]
    },
    relevant: true,
  },
  {
    id: 2,
    position: "SK Kagawad - Budget Monitoring Officer",
    company: "Brgy. Tinaogan SK",
    period: "February 2023 - December 2024",
    description:
      "Responsible for monitoring and reviewing SK fund utilization to ensure transparency, accountability, and alignment with approved projects and programs.",
    logo: "",
    relevant: false,
  },
  // {
  //   id: 3,
  //   position: "SK Kagawad - Budget Monitoring Officer",
  //   company: "Brgy. Tinaogan SK",
  //   period: "February 2023 - December 2024",
  //   description:
  //     "Responsible for monitoring and reviewing SK fund utilization to ensure transparency, accountability, and alignment with approved projects and programs.",
  //   logo: "",
  //   relevant: false,
  // },
];
