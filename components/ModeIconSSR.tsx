import { useTheme } from "next-themes";
import Image from "next/image";
import lightMode from "@/public/assets/icons/lightmodebtn.png";
import darkMode from "@/public/assets/icons/darkmodebtn.png";
import { useEffect, useState } from "react";

export default function ModeIcon() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: 35, height: 35 }} />;
  }

  const src = theme === "dark" ? lightMode : darkMode;

  return (
    <Image
      src={src}
      alt="cv-icon"
      sizes="(max-width: 35px) 100vw"
      fill
    />
  );
}
