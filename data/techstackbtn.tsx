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
        icon: "/assets/icons/php-icon.png",
        group: "secondary"
    },
    {
        name: "Vanilla JS",
        icon: "/assets/icons/js-icon.png",
        group: "secondary",
    },
    {
        name: "jQuery",
        icon: "/assets/icons/jquery-icon.png",
        group: "secondary",
    },
    // {
    //     name: "HTML5+CSS3",
    //     icon: "",
    //     group: "secondary",
    // },
    {
        name: "Tailwind",
        icon: "/assets/icons/tailwind-icon.png",
        group: "secondary"
    },
    // {
    //     name: "Bootstrap",
    //     icon: "",
    //     group: "secondary",
    // },
    {
        name: "Java",
        icon: "/assets/icons/java-icon.png",
        group: "tertiary",
    },
    {
        name: "C++",
        icon: "/assets/icons/cpp-icon.png",
        group: "tertiary",
    },
    {
        name: "Python",
        icon: "/assets/icons/python-icon.png",
        group: "tertiary",
    },
    {
        name: "MySQL",
        icon: "/assets/icons/mysql-icon.png",
        group: "others"
    },
    {
        name: "MongoDB",
        icon: "/assets/icons/mongo-icon.png",
        group: "others"
    },
    {
        name: "Figma",
        icon: "/assets/icons/figma-icon.png",
        group: "tools"
    }
];