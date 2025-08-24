import { useEffect, useRef, useState } from "react";
import { ExperienceInterface } from "@/data/experience";
import ExpCards from "./ExperienceCard";

export default function ExperienceScroller({ experiences } : {
  experiences: ExperienceInterface[]
} ) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkOverflow = () => {
      if (!container) return;

      const hasOverflow = container.scrollWidth > container.clientWidth;
      const isAtEnd =
        container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;

      setShowHint(hasOverflow && !isAtEnd);
    };

    checkOverflow(); // run on mount
    container.addEventListener("scroll", checkOverflow);
    window.addEventListener("resize", checkOverflow);

    return () => {
      container.removeEventListener("scroll", checkOverflow);
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative flex items-start pl-1 pr-6 py-5 w-full bg-semi-transparent rounded-xl overflow-x-auto custom-scrollbar"
      >
        {experiences.map((experience, index) => (
          <ExpCards
            experience={experience}
            index={index}
            key={experience.id}
          />
        ))}
      </div>

      {showHint && (
        <div className="absolute md:bottom-6 xs:bottom-3 right-3 font-medium text-sm text-title pointer-events-none">
          → More
        </div>
      )}
    </>
  );
}
