type groupStack = "primary" | "secondary" | "tools" | "others"

interface StackButton {
  name: string;
  icon: string;
  group: groupStack;
  showcasable: boolean;
}

export const techStackData: StackButton[] = [
    {
        name: "Django",
        icon: "/assets/icons/django-icon.png",
        group: "primary",
        showcasable: true,
    },
    {
        name: "Vue",
        icon: "/assets/icons/vue-icon.png",
        group: "primary",
        showcasable: true,
    },
    {
        name: "React",
        icon: "/assets/icons/react-icon.png",
        group: "primary",
        showcasable: true,
    },
    {
        name: "Next.JS",
        icon: "/assets/icons/nextjs-icon.png",
        group: "primary",
        showcasable: true,
    },
    {
        name: "TypeScript",
          icon: "/assets/icons/ts-icon.png",
        group: "primary",
        showcasable: true,
    },
];