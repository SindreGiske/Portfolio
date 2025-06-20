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
          className={`w-full transform p-3 pt-12 text-start text-2xl font-bold text-amber-300/90 transition-all duration-1000 ease-in-out md:pl-36 md:text-6xl ${
            hasAnimated ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
          }`}
        >
          Erfaringer:
        </h1>
        <IconCarousel />
      </div>
      <article className="flex h-full w-3/4 flex-col items-center justify-center">
        <ol className="space-y-8 pb-12 text-start text-2xl font-extralight tracking-wider text-amber-300 font-stretch-expanded">
          <li
            className={`transform transition-all delay-[300ms] duration-1000 ease-in-out ${
              hasAnimated ? "translate-y-0" + " opacity-100" : "-translate-y-20 opacity-0"
            }`}
          >
            10 .2023 - 02.2024 : Kodehode intensivt frontend kodekurs.
          </li>
          <li
            className={`transform transition-all delay-[500ms] duration-1000 ease-in-out ${
              hasAnimated ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
            }`}
          >
            02.2024 - 09.2024 : Praktikant, IT-utvikler hos Novari IKS.
          </li>
          <li
            className={`transform transition-all delay-[700ms] duration-1000 ease-in-out ${
              hasAnimated ? "translate-y-0" + " opacity-100" : "-translate-y-20 opacity-0"
            }`}
          >
            09.2024 - 06.2027 : Lærling, IT-utvikler hos Novari IKS.
          </li>
        </ol>
      </article>
    </section>
  );
}
