"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
    Briefcase,
    ChevronDown,
    ChevronFirst,
    ChevronLast,
    ChevronLeft,
    ChevronRight,
    Facebook,
    Github,
    Layers,
    Linkedin,
    Send,
} from "lucide-react";
import { useState } from "react";
// import Image from "next/image";



const projectsData = [
    {
        id: 1,
        title: "Project No. 1",
        description:
            "A task management web app built using React, Django, and Tailwind CSS, designed to help users organize....",
        image: "",
        technologies: ["Django", "TailwindCSS", "React", "TypeScript", "Git"],
    },
    {
        id: 2,
        title: "Project No. 2",
        description:
            "A task management web app built using React, Django, and Tailwind CSS, designed to help users organize....",
        image: "",
        technologies: ["Django", "TailwindCSS", "React", "TypeScript", "Git"],
    },
    {
        id: 3,
        title: "Project No. 3",
        description:
            "A task management web app built using React, Django, and Tailwind CSS, designed to help users organize....",
        image: "",
        technologies: ["Django", "TailwindCSS", "React", "TypeScript", "Git"],
    },
    {
        id: 4,
        title: "Project No. 4",
        description:
            "A task management web app built using React, Django, and Tailwind CSS, designed to help users organize....",
        image: "",
        technologies: ["Django", "TailwindCSS", "React", "TypeScript", "Git"],
    },
    {
        id: 5,
        title: "Project No. 5",
        description:
            "A task management web app built using React, Django, and Tailwind CSS, designed to help users organize....",
        image: "",
        technologies: ["Django", "TailwindCSS", "React", "TypeScript", "Git"],
    },
];

const experienceData = [
    {
        id: 1,
        position: "Next.JS Developer",
        company: "Symphonics Co. LTD",
        period: "Febuary, 2025 - March 2025",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.....",
        logo: "",
    },
    {
        id: 2,
        position: "Next.JS Developer",
        company: "Symphonics Co. LTD",
        period: "Febuary, 2025 - March 2025",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.....",
        logo: "",
    },
];

const socialLinksData = [
    {
        icon: Facebook,
        url: "www.facebook/exampleaccount.21",
    },
    {
        icon: Linkedin,
        url: "www.linkedin/sampleagain214",
    },
    {
        icon: Github,
        url: "github.com/repo/samplerepo21",
    },
];



export default function LandingPage() {
    const [selectedTech, setSelectedTech] = useState("All");

    return (
        <div className="flex flex-col items-start relative bg-[#1a1a1a] h-screen overflow-scroll-auto w-full min-h-screen">
            {/* Navigation Header */}
            

            {/* Hero Section */}
           

            {/* Main Content */}
            <main className="flex flex-col items-start gap-6 pt-0 pb-60 px-[120px] w-full">
                {/* Tech Stack Section */}
                

                {/* Projects Section */}
                <section className="flex-col items-start px-0 py-2.5 flex gap-2.5 w-full">
                    <div className="inline-flex items-center gap-2.5">
                        <Layers className="w-6 h-6 text-[#e2e2e2]" />
                        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#e2e2e2] text-[28px] tracking-[0] leading-[normal]">
                            Projects
                        </h2>
                    </div>

                    <div className="flex flex-wrap items-start gap-[24px_36px] px-0 py-2.5 w-full">
                        {projectsData.map((project) => (
                            <Card
                                key={project.id}
                                className="flex flex-col w-[300px] items-center justify-center gap-3.5 px-4 py-5 bg-[#52525226] rounded-lg border border-solid border-neutral-700"
                            >
                                <CardContent className="p-0 w-full">
                                    {/* <img
                                        className="relative self-stretch w-full aspect-[1.84] object-cover rounded"
                                        alt={project.title}
                                        src={project.image}
                                    /> */}

                                    <div className="flex flex-col items-start gap-1 mt-3.5 w-full">
                                        <div className="inline-flex items-start gap-2.5">
                                            <h3 className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#e2e2e2] text-xl tracking-[0] leading-[normal]">
                                                {project.title}
                                            </h3>
                                        </div>

                                        <div className="flex w-full items-start gap-2.5">
                                            <p className="relative flex-1 mt-[-1.00px] [font-family:'Poppins-Light',Helvetica] font-light text-neutral-400 text-sm tracking-[0] leading-[normal]">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap items-start gap-[4px_4px] px-0 py-1 w-full">
                                            {project.technologies.map((tech, techIndex) => (
                                                <Badge
                                                    key={techIndex}
                                                    className="inline-flex items-center justify-center gap-2.5 px-3 py-1 bg-[#a3a3a31a] rounded-[5px]"
                                                >
                                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#e2e2e2] text-sm tracking-[0] leading-[normal]">
                                                        {tech}
                                                    </div>
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-start justify-between px-0 py-2.5 w-full">
                        <Button
                            variant="outline"
                            className="inline-flex items-center gap-1 px-3 py-2 bg-[#52525226] rounded-[5px]"
                        >
                            <ChevronFirst className="w-6 h-6 text-[#e2e2e2]" />
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
                                Go to the First List
                            </div>
                        </Button>

                        <div className="inline-flex items-center gap-2.5">
                            <Button
                                variant="outline"
                                className="inline-flex items-center gap-1 px-3 py-2 bg-[#52525226] rounded-[5px]"
                            >
                                <ChevronLeft className="w-6 h-6 text-[#e2e2e2]" />
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
                                    Prev
                                </div>
                            </Button>

                            <Button
                                variant="outline"
                                className="inline-flex items-center gap-1 px-3 py-2 bg-[#52525226] rounded-[5px]"
                            >
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
                                    Next
                                </div>
                                <ChevronRight className="w-6 h-6 text-[#e2e2e2]" />
                            </Button>
                        </div>

                        <div className="inline-flex items-center gap-4">
                            <div className="inline-flex items-center justify-center gap-1">
                                <div className="flex w-10 h-10 items-center justify-center gap-2.5 p-2 bg-[#52525226] rounded-lg aspect-[1]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
                                        1
                                    </div>
                                </div>
                                <div className="relative w-fit [font-family:'Poppins-Medium',Helvetica] font-medium text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
                                    of 1
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                className="inline-flex items-center gap-1 px-3 py-2 bg-[#52525226] rounded-[5px]"
                            >
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
                                    Go to the Last List
                                </div>
                                <ChevronLast className="w-6 h-6 text-[#e2e2e2]" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="flex-col items-start px-0 py-2.5 flex gap-2.5 w-full">
                    <div className="inline-flex items-center gap-2.5">
                        <Layers className="w-6 h-6 text-[#e2e2e2]" />
                        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#e2e2e2] text-[28px] tracking-[0] leading-[normal]">
                            Experience
                        </h2>
                    </div>

                    <div className="flex items-center pl-1 pr-4 py-5 w-full bg-[#52525226] rounded-xl">
                        {experienceData.map((experience, index) => (
                            <div
                                key={experience.id}
                                className="inline-flex flex-col items-start gap-3 px-0 py-4"
                            >
                                <div className="flex items-center gap-2.5 pl-6 pr-0 py-0 w-full">
                                    <div className="inline-flex items-center justify-center p-2 bg-[#a3a3a31a] rounded-[99999px] border border-solid border-green-700">
                                        <Briefcase className="w-5 h-5 text-[#e2e2e2]" />
                                    </div>
                                    {index < experienceData.length - 1 && (
                                        <Separator className="w-[296px] h-px bg-neutral-700" />
                                    )}
                                </div>

                                <div className="inline-flex flex-col items-start gap-2.5 pl-6 pr-2 py-0">
                                    <Card className="inline-flex flex-col items-start px-5 py-3 bg-[#52525226] rounded-[5px] border border-solid border-neutral-700">
                                        <CardContent className="p-0">
                                            <div className="flex flex-col items-start w-full">
                                                <h3 className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-green-600 text-xl tracking-[0] leading-[normal]">
                                                    {experience.position}
                                                </h3>
                                                <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
                                                    {experience.company}
                                                </div>
                                                <div className="relative w-fit [font-family:'Poppins-Light',Helvetica] font-light text-neutral-400 text-sm tracking-[0] leading-[normal]">
                                                    {experience.period}
                                                </div>
                                            </div>

                                            <div className="flex w-[280px] items-center gap-2.5 px-0 py-2">
                                                <p className="relative flex-1 mt-[-1.00px] [font-family:'Poppins-Light',Helvetica] font-light text-[#e2e2e2] text-sm tracking-[0] leading-[normal]">
                                                    {experience.description}
                                                </p>
                                            </div>

                                            {/* <img
                                                className="absolute w-[145px] h-[54px] -top-2.5 left-[88px] aspect-[2.69]"
                                                alt="Company logo"
                                                src={experience.logo}
                                            /> */}
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="inline-flex items-center gap-2.5 px-2.5 py-0">
                        <div className="relative w-[15px] h-[15px] bg-[#a3a3a31a] rounded-[5px] border border-dashed border-neutral-700" />
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Light',Helvetica] font-light text-[#e2e2e2] text-sm tracking-[0] leading-[normal]">
                            Show relevant Awards & Certificates?
                        </div>
                    </div>
                </section>

                {/* Playground Section */}
                <section className="flex flex-col items-start gap-2.5 pt-[60px] pb-10 px-[120px] w-full">
                    <Card className="flex flex-col h-[600px] items-center gap-4 pt-10 pb-5 px-4 w-full bg-[#52525226] rounded-xl border border-solid border-neutral-700">
                        <CardContent className="p-0 w-full h-full flex flex-col items-center gap-4">
                            <div className="inline-flex flex-col items-center">
                                <div className="inline-flex items-center gap-2.5">
                                    <Layers className="w-6 h-6 text-green-600" />
                                    <h2 className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-green-600 text-[28px] tracking-[0] leading-[normal]">
                                        Playground
                                    </h2>
                                </div>
                                <p className="relative w-fit [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#e2e2e2] text-sm tracking-[0] leading-[normal]">
                                    Curious on how I used each Stack? You might discover
                                    something.
                                </p>
                            </div>

                            <div className="flex items-start gap-4 px-10 py-5 flex-1 w-full grow">
                                <div className="flex flex-col items-start gap-2.5 p-2.5 flex-1 self-stretch grow">
                                    <h3 className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#e2e2e2] text-xl tracking-[0] leading-[normal]">
                                        Select Technology
                                    </h3>

                                    <div className="flex items-center gap-2.5 p-2.5 w-full bg-[#52525226] rounded-[5px]">
                                        <Select
                                            value={selectedTech}
                                            onValueChange={setSelectedTech}
                                        >
                                            <SelectTrigger className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#a3a3a31a] rounded-sm border-none">
                                                <SelectValue placeholder="All" />
                                                <ChevronDown className="w-[15px] h-[15px] text-neutral-400" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="All">All</SelectItem>
                                                <SelectItem value="React">React</SelectItem>
                                                <SelectItem value="Vue">Vue</SelectItem>
                                                <SelectItem value="Django">Django</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <div className="inline-flex items-center gap-2.5">
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-neutral-400 text-sm tracking-[0] leading-[normal]">
                                                Search for something....
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start justify-between px-6 py-5 flex-1 self-stretch grow bg-[#1a1a1a] rounded-[10px]">
                                    <div className="flex flex-col items-start gap-0.5 w-full">
                                        <h3 className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#e2e2e2] text-2xl tracking-[0] leading-[normal]">
                                            Vue JS
                                        </h3>
                                        <p className="relative w-full [font-family:'Poppins-Light',Helvetica] font-light text-neutral-400 text-sm tracking-[0] leading-[normal]">
                                            A progressive JavScript framework for building user
                                            interfaces
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-start gap-0.5 p-2.5 w-full">
                                        <h4 className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#e2e2e2] text-xl tracking-[0] leading-[normal]">
                                            Experience
                                        </h4>
                                        <Progress
                                            value={80}
                                            className="w-full h-2.5 bg-neutral-700 rounded-[5px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </main>

            {/* Contact Section */}
            <footer className="flex flex-col items-start gap-2.5 pt-6 pb-[50px] px-40 w-full bg-[#52525226] relative">
                <div className="inline-flex items-center gap-2.5">
                    <Layers className="w-[26px] h-[26px] text-[#e2e2e2]" />
                    <h2 className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#e2e2e2] text-[28px] tracking-[0] leading-[normal]">
                        Contact
                    </h2>
                </div>

                <div className="flex items-start gap-2.5 px-0 py-1 w-full">
                    <div className="flex flex-col items-start gap-3 pl-0 pr-5 py-0 flex-1 grow">
                        <Input
                            placeholder="Name"
                            className="items-center px-5 py-2.5 bg-[#52525226] rounded border border-solid border-neutral-700 text-neutral-400 text-base [font-family:'Poppins-SemiBold',Helvetica] font-semibold"
                        />

                        <Input
                            placeholder="Email"
                            className="items-center px-5 py-2.5 bg-[#52525226] rounded border border-solid border-neutral-700 text-neutral-400 text-base [font-family:'Poppins-SemiBold',Helvetica] font-semibold"
                        />

                        <Textarea
                            placeholder="Message"
                            className="flex items-start gap-2.5 
pt-2.5 pb-40 px-5 w-full bg-[#52525226] rounded border border-solid border-neutral-700 text-neutral-400 text-base [font-family:'Poppins-SemiBold',Helvetica] font-semibold"
                        />

                        <div className="flex items-center justify-end gap-2.5 w-full rounded">
                            <Button className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 bg-green-600 rounded-[5px] border border-solid border-green-700">
                                <Send className="w-5 h-5 text-[#e2e2e2]" />
                                <div className="text-[#e2e2e2] text-lg relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
                                    Send
                                </div>
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-3 px-10 py-0 flex-1 self-stretch grow">
                        <h3 className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#e2e2e2] text-2xl tracking-[0] leading-[normal]">
                            Socials
                        </h3>

                        <div className="inline-flex flex-col items-start gap-3 pl-5 pr-0 py-0">
                            {socialLinksData.map((social, index) => (
                                <div key={index} className="inline-flex items-center gap-3">
                                    <social.icon className="w-[35px] h-[35px] text-[#e2e2e2]" />
                                    <div className="relative w-fit [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
                                        {social.url}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute w-[1440px] h-[120px] top-[371px] left-0">
                    <div className="relative h-[110px] top-2.5">
                        {/* <img
                            className="absolute w-[1440px] h-[91px] top-[19px] left-0"
                            alt="Vector decoration"
                            src=""
                        />
                        <img
                            className="absolute w-[1440px] h-[110px] top-0 left-0"
                            alt="Vector decoration"
                            src=""
                        />
                        <img
                            className="absolute w-[1440px] h-[91px] top-[19px] left-0"
                            alt="Vector decoration"
                            src=""
                        /> */}
                    </div>
                </div>

                {/* <img
                    className="absolute w-[1722px] h-60 top-[-120px] left-[-282px]"
                    alt="Background decoration"
                    src=""
                /> */}

                <div className="inline-flex flex-col items-center justify-center absolute top-[-81px] left-[266px]">
                    <h2 className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#e2e2e2] text-[32px] tracking-[0] leading-[30px] whitespace-nowrap">
                        Reach Out Today
                    </h2>
                    <p className="relative w-fit [font-family:'Poppins-Light',Helvetica] font-light text-[#e2e2e2] text-xl tracking-[0] leading-[42px] whitespace-nowrap">
                        {"I'd love to hear from you! Send me a message using the form below, and I'll be in touch soon."}
                    </p>
                </div>
            </footer>
        </div>
    );
}
