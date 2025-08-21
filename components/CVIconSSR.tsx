import { useTheme } from "next-themes";
import Image from "next/image";
import lightCV from "@/public/assets/icons/lightmodecv.png";
import darkCV from "@/public/assets/icons/darkmodecv.png";
import { useEffect, useState } from "react";

export default function CVIcon() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: 35, height: 35 }} />;
  }

  const src = theme === "dark" ? darkCV : lightCV;

  return (
    <Image
      src={src}
      alt="cv-icon"
      sizes="(max-width: 35px) 100vw"
      fill
    />
  );
}
