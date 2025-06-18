import HeroBackground from "~/components/HeroBackground";

import GithubOriginal from "devicons-react/icons/GithubOriginal";

import React from "react";
import { useInView } from "~/customHooks/useInView";

export default function HeroSection() {
  const { ref, hasAnimated } = useInView<HTMLDivElement>(0.2);

  type HeroLinkProps = {
    name: string;
    href?: string;
    children: React.ReactNode;
  };

  const HeroLink = ({ name, href, children }: HeroLinkProps) => {
    return (
      <a
        target="_blank"
        href={href}
        rel="noopener noreferrer"
        aria-label={name}
        className="transition hover:scale-110"
      >
        {children}
      </a>
    );
  };

  return (
    <section ref={ref} id={"hero"} className="relative h-[90vh] w-[99%] overflow-hidden">
      <HeroBackground />
      <div className="relative top-12 z-10 flex h-full w-full flex-col-reverse items-center justify-center gap-3 md:flex-row">
        <div
          className={`font-bold, flex h-fit w-fit items-start gap-2 text-2xl text-amber-300 transition-all delay-[2500ms] duration-600 ease-in md:flex-col md:text-4xl ${hasAnimated ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
        >
          <HeroLink name={"GitHub"} href={"https://github.com/SindreGiske"}>
            <GithubOriginal className={"rounded-full bg-amber-300"} size={"50"} />
          </HeroLink>
          <HeroLink name={"Linkedin"} href={"https://www.linkedin.com/in/sindre-giske-7a21a62ab/"}>
            <img
              src={"/customLinkedIn.svg"}
              alt={"custom made LinkedIn Logo"}
              className="h-[50px] w-[50px] rounded-4xl"
            />
          </HeroLink>
        </div>
        <div className="flex h-fit w-fit flex-col items-center gap-3 md:items-start">
          <div className="flex flex-row gap-4 text-center text-3xl font-bold text-amber-300 md:text-5xl">
            <h1
              className={`transition-all duration-600 ease-in ${hasAnimated ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
            >
              SINDRE
            </h1>
            <h1
              className={`transition-all delay-500 duration-600 ease-in ${hasAnimated ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
            >
              TOFTE
            </h1>
            <h1
              className={`transition-all delay-1000 duration-600 ease-in ${hasAnimated ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
            >
              GISKE
            </h1>
          </div>

          <h2
            className={`font-bold, text-2xl text-amber-300 transition-all delay-[2000ms] duration-600 ease-in md:text-4xl ${hasAnimated ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
          >
            Full-Stack Utvikler
          </h2>
        </div>
      </div>
    </section>
  );
}
