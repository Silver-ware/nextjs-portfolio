export interface ExperienceInterface {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
  logo: string;
  contributions: string[];
}

export const experienceData: ExperienceInterface[] = [
  {
    id: 1,
    position: "Next.js Developer (Intern)",
    company: "Symphonics Co. LTD",
    period: "February 2025 - March 2025",
    description:
      "Assisted in building a company dashboard using Next.js and Tailwind CSS, focusing on UI components and API integration.",
    logo: "",
    contributions: [],
  },
  {
    id: 2,
    position: "Frontend Developer",
    company: "TechNova Solutions",
    period: "April 2025 - July 2025",
    description:
      "Developed e-commerce features with Vue.js and Pinia, improving responsiveness and integrating REST APIs.",
    logo: "",
    contributions: [],
  },
];
