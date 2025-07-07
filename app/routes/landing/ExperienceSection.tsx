import IconCarousel from "~/components/IconCarousel";
import React from "react";
import { useInView } from "~/customHooks/useInView";

export default function ExperienceSection() {
  const { ref, hasAnimated } = useInView();

  return (
    <section
      ref={ref}
      id={"experience"}
      className="flex h-screen flex-col items-center justify-start gap-8 py-12 md:py-16"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <h1
          className={`w-full transform pt-24 text-start text-2xl font-bold text-amber-300/90 transition-all duration-1000 ease-in-out md:pt-12 md:pl-46 md:text-6xl ${
            hasAnimated ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
          }`}
        >
          Erfaringer:
        </h1>
        <IconCarousel />
      </div>
      <article className="flex h-full flex-col items-center justify-center">
        <ol className="space-y-8 pb-32 text-start text-sm font-extralight tracking-wider text-amber-300 font-stretch-expanded md:pb-12 md:text-2xl">
          <li
            className={`transform transition-all delay-[300ms] duration-1000 ease-in-out ${
              hasAnimated ? "translate-y-0" + " opacity-100" : "-translate-y-20 opacity-0"
            }`}
          >
            <p>10.2023 - 02.2024 :</p>
            <p>Kodehode intensivt frontend kodekurs.</p>
          </li>
          <li
            className={`transform transition-all delay-[500ms] duration-1000 ease-in-out ${
              hasAnimated ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
            }`}
          >
            <p>02.2024 - 09.2024 :</p>
            <p>Praktikant, IT-utvikler hos Novari IKS.</p>
          </li>
          <li
            className={`transform transition-all delay-[700ms] duration-1000 ease-in-out ${
              hasAnimated ? "translate-y-0" + " opacity-100" : "-translate-y-20 opacity-0"
            }`}
          >
            <p>09.2024 - 06.2027 :</p>
            <p>Lærling, IT-utvikler hos Novari IKS.</p>
          </li>
        </ol>
      </article>
    </section>
  );
}
