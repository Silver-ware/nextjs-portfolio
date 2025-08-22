"use client";
import Image from "next/image";
import { ContactRound, Send, Loader, Check } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

const socialLinksData = [
  {
    icon: "/assets/icons/facebook-icon.png",
    alt: "Facebook",
    url: "https://www.facebook.com/garrypedrosa.9",
  },
  {
    icon: "/assets/icons/linkedin-icon.png",
    alt: "Linkedin",
    url: "https://www.linkedin.com/in/garry-caber-066283374/",
  },
  {
    icon: "/assets/icons/github-icon.png",
    alt: "Github",
    url: "https://github.com/Silver-ware",
  },
];

const techIcons = [
  { source: "/assets/icons/figma-icon.png", name: "Figma" },
  { source: "/assets/icons/nextjs-icon.png", name: "NextJS" },
  { source: "/assets/icons/ts-icon.png", name: "TypeScript" },
  { source: "/assets/icons/tailwind-icon.png", name: "TailwindCSS" },
];

interface FormDataTypes {
  name: string;
  email: string;
  subject: string;
  message: string;
}
type States = "Success" | "Failed" | "Error";

export default function Contact() {
  const [formData, setFormData] = useState<FormDataTypes>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | `${States}${string}`>(null);

  const SubmitIcon = loading
    ? Loader
    : status?.includes("Success")
    ? Check
    : Send;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Success : Message sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to sent a message.");
      }
    } catch (error) {
      setStatus(`Error: ${error}`);
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 2500);
    }
  };

  return (
    <footer
      id="contact"
      className="flex flex-col gap-2.5 lg:pt-6 pt-12 md:pb-[50px] pb-8 lg:px-[144px] px-8 w-full bg-semi-transparent relative"
    >
      {/* <div
        className="absolute w-full lg:h-[120px] md:h-[100px] h-[80px] 
          lg:top-[-120px] md:top-[-100px] top-[-80px] 
          left-1/2 -translate-x-1/2 scale-y-[-1] 
          bg-[url('/assets/svg/waves-opacity.svg')] bg-no-repeat bg-top 
          bg-[length:130%_100%] md:bg-[length:115%_100%] lg:bg-[length:100%_100%]"
      ></div> */}
      <div className="absolute w-full select-none pointer-events-none overflow-hidden lg:h-[120px] md:h-[100px] h-[80px] lg:top-[-120px] md:top-[-100px] top-[-80px] left-[50%] -translate-x-[50%] scale-y-[-1]">
        <Image
          className="object-cover scale-x-[1.3] md:scale-x-[1.15] lg:scale-100"
          src="/assets/svg/waves-opacity.svg"
          alt="transparent-svg-1"
          fill
        />
        <Image
          className="object-cover scale-x-[1.3] md:scale-x-[1.15] lg:scale-100"
          src="/assets/svg/waves-opacity.svg"
          alt="transparent-sv-2"
          fill
        />
      </div>
      <div className="absolute w-full select-none pointer-events-none overflow-hidden lg:h-[120px] md:h-[100px] h-[80px] top-0 left-[50%] -translate-x-[50%]">
        <Image
          className="object-cover scale-x-[1.3] md:scale-x-[1.15] lg:scale-100"
          src="/assets/svg/waves.svg"
          alt="transparent-svg-1"
          fill
        />
        <Image
          className="object-cover scale-x-[1.3] md:scale-x-[1.15] lg:scale-100"
          src="/assets/svg/waves-opacity.svg"
          alt="transparent-sv-2"
          fill
        />
      </div>
      <div className="inline-flex w-full flex-col items-center justify-center absolute lg:top-[-81px] md:top-[-61px] top-[-41px] left-[50%] -translate-x-[50%]">
        <h2 className="relative w-fit font-semibold text-foreground lg:text-[32px] text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
          Reach Out Today
        </h2>
        <p className="relative w-fit font-light text-foreground lg:text-xl text-xs text-center tracking-[0] lg:leading-[32px] leading-[18px] px-8">
          {
            "I'd love to hear from you! Send me a message using the form below, and I'll be in touch soon."
          }
        </p>
      </div>

      <div className="inline-flex items-center gap-2.5">
        <ContactRound className="md:w-6 w-[18px] md:h-6 h-[18px] stroke-current text-[#16A34A]" />
        <h2 className="relative w-fit font-semibold text-foreground lg:text-[28px] md:text-2xl text-xl tracking-[0] leading-[normal]">
          Contact
        </h2>
      </div>

      <div className="flex md:flex-row flex-col items-start gap-2.5 px-0 pb-1 lg:pt-6 pt-2 w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start lg:gap-3 gap-2 pl-0 md:pr-5 py-0 lg:flex-1 w-full relative z-0"
        >
          <label htmlFor="name" className="w-full relative z-50">
            <input
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="peer w-full items-center px-5 py-2.5 bg-semi-transparent rounded border border-solid border-neutral-700 text-secondary-foreground lg:text-base text-sm font-semibold outline-0 focus:border-foreground focus:placeholder-transparent"
            />
            <span
              className={`absolute text-secondary-foreground py-[1px] font-semibold lg:text-base text-sm rounded px-2 left-3 ${
                !!formData.name
                  ? "-top-[18px] opacity-100"
                  : "top-[10px] opacity-0  peer-focus:opacity-100 peer-focus:-top-[18px]"
              } bg-background peer-focus:border peer-focused:border-foreground transition-all duration-200`}
            >
              Name
            </span>
          </label>

          <label htmlFor="email" className="w-full relative z-50">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              required
              onChange={handleChange}
              className="peer w-full items-center px-5 py-2.5 bg-semi-transparent rounded border border-solid border-neutral-700 text-secondary-foreground lg:text-base text-sm font-semibold outline-0 focus:border-foreground focus:placeholder-transparent"
            />
            <span
              className={`absolute text-secondary-foreground py-[1px] font-semibold lg:text-base text-sm rounded px-2 left-3 ${
                !!formData.email
                  ? "-top-[18px] opacity-100"
                  : "top-[10px] opacity-0  peer-focus:opacity-100 peer-focus:-top-[18px]"
              } bg-background peer-focus:border peer-focused:border-foreground transition-all duration-200`}
            >
              Emaill
            </span>
          </label>

          <label htmlFor="subject" className="w-full relative z-50">
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              required
              name="subject"
              onChange={handleChange}
              className="peer w-full items-center px-5 py-2.5 bg-semi-transparent rounded border border-solid border-neutral-700 text-secondary-foreground lg:text-base text-sm font-semibold outline-0 focus:border-foreground focus:placeholder-transparent"
            />
            <span
              className={`absolute text-secondary-foreground py-[1px] font-semibold lg:text-base text-sm rounded px-2 left-3 ${
                !!formData.subject
                  ? "-top-[18px] opacity-100"
                  : "top-[10px] opacity-0  peer-focus:opacity-100 peer-focus:-top-[18px]"
              } bg-background peer-focus:border peer-focused:border-foreground transition-all duration-200`}
            >
              Subject
            </span>
          </label>

          <textarea
            placeholder="Message"
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="custom-scrollbar flex items-start gap-2.5 pt-2.5 px-5 max-w-full text-wrap max-h-[160px] h-[160px] w-full bg-semi-transparent rounded border border-solid border-neutral-700 text-secondary-foreground lg:text-base text-sm font-semibold outline-0 focus:border-foreground"
          />

          <div className="flex items-center justify-end gap-2.5 w-full rounded">
            <button
              type="submit"
              disabled={!!status}
              className="cursor-pointer relative z-50 inline-flex items-center justify-center gap-2.5 px-4 py-1.5 bg-green-600 hover:bg-[#085D28] hover:scale-105 transition-all ease-in-out duration-500  rounded-[5px] border border-solid border-green-700 outline-0"
            >
              <SubmitIcon className="lg:w-5 lg:h-5 w-4 h-4 text-[#e2e2e2]" />
              <span className="text-[#e2e2e2] lg:text-lg text-base relative w-fit mt-[-1.00px] font-semibold tracking-[0] leading-[normal]">
                {loading
                  ? "Sending..."
                  : status?.includes("Success")
                  ? "Sent"
                  : "Send"}
              </span>
            </button>
          </div>
        </form>
        <div className="flex self-stretch flex-col flex-1 lg:min-w-[45%] md:min-w-[35%] md:items-start items-center gap-3 lg:pl-10 lg:pr-5 md:pt-0 pt-8">
          <h3 className="relative w-fit font-semibold text-foreground lg:text-[28px] md:text-2xl text-xl tracking-[0] leading-[normal]">
            Socials
          </h3>

          <div className="w-full self-stretch flex-1 flex flex-col lg:justify-between md:gap-20 gap-14">
            <div className="inline-flex flex-row items-start justify-center lg:gap-8 md:gap-6 gap-3 w-full lg:pt-6 md:pt-4 pb-0">
              {socialLinksData.map((social, index) => (
                <TooltipProvider key={social.alt}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={social.url}
                        target="_blank"
                        key={index}
                        className="group inline-flex items-center gap-3 hover:scale-110 hover:bg-green-700 transition-all duration-300 ease-in-out cursor-pointer rounded-full"
                      >
                        <div className="lg:w-[50px] md:w-11 w-9 lg:h-[50px] md:h-11 h-9 relative">
                          <Image
                            className="group-hover:filter group-hover:invert group-hover:brightness-0 transition-all duration-300 ease-in-out"
                            src={social.icon}
                            alt={social.alt}
                            fill
                          />
                        </div>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={5}>
                      <div className="rounded backdrop-blur-sm bg-semi-transparent px-2 py-1 text-foreground text-center mb-1 transition-all duration-200    ease-in-out">
                        <span className="text-sm">Discover me on</span>
                        <span className="block text-base font-medium text-green-500">
                          {social.alt}
                        </span>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <div className="self-stretch basis-1/2 flex flex-col gap-4 lg:justify-end justify-center items-center text-secondary-foreground flex-1">
              <span className="md:text-lg text-base opacity-40">
                Develop with:
              </span>
              <div className="w-full flex items-center justify-center gap-6">
                {techIcons.map((icons, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className={`${
                            icons.name === "NextJS"
                              ? "lg:w-15 lg:h-15 w-12 h-12"
                              : "lg:w-10 lg:h-10 w-8 h-8"
                          } relative z-20 opacity-30 hover:opacity-80 hover:scale-105 transition-all`}
                        >
                          <Image src={icons.source} alt={icons.name} fill />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent sideOffset={5}>
                        <div className="rounded backdrop-blur-sm bg-semi-transparent px-2 py-1 text-center mb-1 transition-all duration-200 ease-in-out">
                          <span
                            className={`lg:text-base text-sm ${
                              icons.name === "Figma"
                                ? "text-[#F24E1E]"
                                : icons.name === "NextJS"
                                ? "text-[#000000]"
                                : icons.name === "TypeScript"
                                ? "text-[#3178C6]"
                                : icons.name === "TailwindCSS"
                                ? "text-[#06B6D4]"
                                : "text-foreground"
                            }`}
                          >
                            {icons.name}
                          </span>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-full select-none pointer-events-none overflow-hidden lg:h-[120px] md:h-[100px] h-[80px] bottom-0 left-[50%] -translate-x-[50%] scale-y-[-1]">
        <Image
          className="object-cover scale-x-[1.3] md:scale-x-[1.15] lg:scale-100"
          src="/assets/svg/waves-opacity.svg"
          alt="transparent-sv-2"
          fill
        />
      </div>
    </footer>
  );
}
