import IconCarousel from "~/components/IconCarousel";
import React from "react";
import { useInView } from "~/customHooks/useInView";

export default function ExperienceSection() {
  const { ref, hasAnimated } = useInView();

  return (
    <section
      ref={ref}
      id={"experiences"}
      className="flex h-screen flex-col items-center justify-between py-12 md:py-16"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <h1
          className={`hidden w-full transform p-3 text-start font-bold text-amber-300/90 transition-all duration-1000 ease-in-out md:inline md:pl-32 md:text-5xl ${hasAnimated ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}
        >
          Erfaringer:
        </h1>
        <IconCarousel />
      </div>
    </section>
  );
}
