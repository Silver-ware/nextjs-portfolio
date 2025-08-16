"use client";
// import { useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const navigationItems = [
  { name: "Home", active: true },
  { name: "Projects", active: false },
  { name: "Experience", active: false },
  { name: "Playground", active: false },
];

export default function Navbar() {
  // const handleScroll = (id: string) => {
  //   const section = document.getElementById(id);
  //   section?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <header className="flex w-full items-center justify-between px-[25px] py-2.5 bg-[#1a1a1a] border-b border-solid border-neutral-700 sticky top-0 z-50">
      <div className="inline-flex items-center justify-center pl-5 pr-2.5 py-2.5">
        <div className="relative w-fit font-quantico font-bold text-[#e2e2e2] text-xl tracking-[0] leading-[normal]">
          garryworkwithit@gmail.com
        </div>
      </div>

      <div className="inline-flex items-center justify-end pl-2.5 pr-0 py-2.5">
        <NavigationMenu>
          <NavigationMenuList className="inline-flex h-[50px] items-center justify-end gap-2.5 p-2.5">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className={`inline-flex items-center gap-2.5 px-2.5 py-[3px] border-b border-solid cursor-pointer rounded-none hover:border-green-500 transition-all duration-200 ease-in-out ${
                    item.active ? "border-green-500" : "border-[#1a1a1a]"
                  }`}
                >
                  <div className="relative w-fit mt-[-1.00px] font-semibold text-[#e2e2e2] hover:text-green-500 text-xl tracking-[0] leading-[normal]">
                    {item.name}
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="inline-flex items-center justify-center gap-7 pl-0 pr-[5px] py-0">
          <div className="relative inline-flex items-center w-[35px] h-[30px] justify-center gap-2.5 px-[5px] py-0">
            <Image
              src="/assets/icons/darkmodecv.png"
              alt="cv-icon"
              sizes="(max-width: 35px) 100vw"
              fill
            />
          </div>
          <div className="relative w-[35px] h-[35px]">
            <Image
              src="/assets/icons/lightmodebtn.png"
              alt="cv-icon"
              sizes="(max-width: 35px) 100vw"
              fill
            />
          </div>
        </div>
      </div>
    </header>
  );
}
