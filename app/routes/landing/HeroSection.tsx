import HeroBackground from "~/components/HeroBackground";

import GithubOriginal from 'devicons-react/icons/GithubOriginal';

import React from "react";
import {useInView} from "~/customHooks/useInView";

export default function HeroSection() {
    const { ref, hasAnimated } = useInView<HTMLDivElement>(0.2);

    type HeroLinkProps = {
        name: string;
        href?: string;
        children: React.ReactNode;
    };

    const HeroLink = ({ name, href, children }: HeroLinkProps) => {
        return (
            <a target="_blank" href={href} rel="noopener noreferrer" aria-label={name}
            className="transition hover:scale-110">
                {children}
            </a>
        );
    };

    return (
        <section
            ref={ref}
            id={"hero"}
            className="relative h-[90vh] w-[99%] overflow-hidden"
            >
            <HeroBackground />
            <div className="relative z-10 flex top-12 md:flex-row flex-col-reverse items-center justify-center h-full w-full gap-3">
                <div className={`flex md:flex-col items-start h-fit w-fit gap-2
                     text-2xl md:text-4xl font-bold, text-amber-300
                            transition-all duration-600 ease-in delay-[2500ms]
                            ${hasAnimated ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                >
                    <HeroLink name={"GitHub"} href={"https://github.com/SindreGiske"}>
                        <GithubOriginal className={"bg-amber-300 rounded-full"} size={"50"} />
                    </HeroLink>
                    <HeroLink name={"Linkedin"} href={"https://www.linkedin.com/in/sindre-giske-7a21a62ab/"}>
                        <img src={"/customLinkedIn.svg"}
                             alt={"custom made LinkedIn Logo"}
                             className="rounded-4xl h-[50px] w-[50px]"
                        />
                    </HeroLink>
                </div>
                <div className="flex flex-col md:items-start items-center h-fit w-fit gap-3">
                    <div className="text-3xl flex flex-row md:text-5xl gap-4 font-bold text-amber-300 text-center">
                        <h1 className={`transition-all duration-600 ease-in
                            ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                            SINDRE
                        </h1>
                        <h1 className={`transition-all duration-600 ease-in delay-500
                            ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                            TOFTE
                        </h1>
                        <h1 className={`transition-all duration-600 ease-in delay-1000
                            ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                            GISKE
                        </h1>
                    </div>

                    <h2 className={`text-2xl md:text-4xl font-bold, text-amber-300
                            transition-all duration-600 ease-in delay-[2000ms]
                            ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>Full-Stack Utvikler</h2>
                </div>
            </div>
        </section>
    )
}