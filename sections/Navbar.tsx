"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { CopyEmail } from "@/components/EmailCopyable";
import CVIcon from "@/components/CVIconSSR";
import ModeIcon from "@/components/ModeIconSSR";

const navigationItems: string[] = [
  "Home",
  "Projects",
  "Experience",
  "Playground",
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      let currentSection = "";

      for (const id of navigationItems) {
        const el = document.getElementById(id.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
            currentSection = id.toLocaleLowerCase();
            break;
          }
        }
      }

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex w-full h-fit items-center md:justify-between gap-2.5 lg:px-[25px] md:px-3 pl-[25px] pr-3 lg:py-2.5 md:py-1.5 py-2.5 bg-background border-b border-solid border-primary-outline sticky top-0 z-100 overflow-x-auto">
      <div className="inline-flex md:w-fit w-full items-center justify-center lg:pl-5 lg:pr-2.5 md:pl-3 md:pr-1 pl-5 pr-2.5 py-2.5">
        <CopyEmail email={"garryworkwithit@gmail.com"} />
      </div>

      <div className="inline-flex items-center justify-end lg:pl-2.5 md:pl-1 pr-0 py-2.5 self-stretch">
        <NavigationMenu>
          <NavigationMenuList className="md:inline-flex hidden min-h-[50px] h-fit items-center justify-center lg:gap-2.5 md:gap-1.5 p-2.5">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveLink(item.toLowerCase())}
                  className={`inline-flex items-center gap-2.5 lg:px-2.5 md:px-1 py-[3px] border-b border-solid cursor-pointer rounded-none text-foreground transition-all duration-200 ease-in-out ${
                    activeLink === item.toLowerCase()
                      ? "border-green-500"
                      : "border-background"
                  } hover:border-green-500 hover:text-green-500`}
                >
                  <div className="relative w-fit font-medium lg:text-xl md:text-base tracking-[0] leading-[normal] group-">
                    {item}
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="inline-flex items-center justify-center lg:gap-7 gap-3 pl-0 pr-2 py-0">
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <a
                  href="/assets/files/resume.pdf"
                  download={"garry-caber-resume.pdf"}
                  className="relative inline-flex items-center lg:w-[32px] md:w-7 w-6 lg:h-[30px] md:h-[26px] h-[23px] justify-center px-[5px] py-0"
                >
                  <CVIcon/>
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={10}>
                <div className="rounded backdrop-blur-sm bg-semi-transparent px-2 py-1 text-foreground text-center mt-1 transition-all duration-200 ease-in-out">
                  <span className="lg:text-sm text-xs">
                    Download
                    <br />
                    CV/Résumé
                  </span>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <button
                  className="cursor-pointer relative lg:w-[32px] md:w-7 w-6 lg:h-[33px] md:h-[27px] h-6"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  <ModeIcon/>
                </button>
              </TooltipTrigger>
              <TooltipContent side="left" sideOffset={10}>
                <div className="rounded backdrop-blur-sm bg-semi-transparent px-2 py-1.5 text-foreground text-center mt-1 transition-all duration-200    ease-in-out">
                  <span className="lg:text-sm text-xs">
                    Switch to Light Mode
                  </span>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </header>
  );
}
