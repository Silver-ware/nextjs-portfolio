export type groupStack = "primary" | "secondary" | "tertiary" | "tools" | "others"

interface StackButton {
  name: string;
  icon: string;
  group: groupStack;
}

export const techStackData: StackButton[] = [
    {
        name: "Django",
        icon: "/assets/icons/django-icon.png",
        group: "primary",
    },
    {
        name: "Vue",
        icon: "/assets/icons/vue-icon.png",
        group: "primary",
    },
    {
        name: "React",
        icon: "/assets/icons/react-icon.png",
        group: "primary",
    },
    {
        name: "Next.JS",
        icon: "/assets/icons/nextjs-icon.png",
        group: "primary",
    },
    {
        name: "TypeScript",
        icon: "/assets/icons/ts-icon.png",
        group: "primary",
    },
    {
        name: "PHP",
        icon: "",
        group: "secondary"
    },
    {
        name: "Vanilla JS",
        icon: "",
        group: "secondary",
    },
    {
        name: "jQuery",
        icon: "",
        group: "secondary",
    },
    // {
    //     name: "HTML5+CSS3",
    //     icon: "",
    //     group: "secondary",
    // },
    {
        name: "Tailwind",
        icon: "",
        group: "secondary"
    },
    // {
    //     name: "Bootstrap",
    //     icon: "",
    //     group: "secondary",
    // },
    {
        name: "Java",
        icon: "",
        group: "tertiary",
    },
    {
        name: "C++",
        icon: "",
        group: "tertiary",
    },
    {
        name: "Python",
        icon: "",
        group: "tertiary",
    },
    {
        name: "MySQL",
        icon: "",
        group: "others"
    },
    {
        name: "MongoDB",
        icon: "",
        group: "others"
    },
    {
        name: "Figma",
        icon: "",
        group: "tools"
    }
];