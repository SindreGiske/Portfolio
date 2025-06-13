import HeroBackground from "~/components/HeroBackground";

import GithubOriginal from 'devicons-react/icons/GithubOriginal';

import React from "react";

export default function HeroSection() {

    const Hstyle = ({ children }: { children: React.ReactNode }) => {
        return <h2 className="text-2xl md:text-4xl font-bold, text-amber-300">{children}</h2>;
    };

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
        <section className="relative h-[90vh] w-[99%] overflow-hidden"
        id={"hero"}>
            <HeroBackground />
            <div className="relative z-10 flex top-12 md:flex-row flex-col-reverse items-center justify-center h-full w-full gap-3">
                <div className="flex md:flex-col items-start h-fit w-fit gap-2">
                    <HeroLink name={"GitHub"} href={"https://github.com/SindreGiske"}>
                        <GithubOriginal className={"bg-amber-300 rounded-full"} size={"50"} />
                    </HeroLink>
                    <HeroLink name={"Linkedin"} href={"https://www.linkedin.com/in/sindre-giske-7a21a62ab/"}>
                        <img src={"public/customLinkedIn.svg"}
                             alt={"custom made LinkedIn Logo"}
                             className="rounded-4xl h-[50px] w-[50px]"
                        />
                    </HeroLink>
                </div>
                <div className="flex flex-col md:items-start items-center h-fit w-fit gap-3">
                    <h1 className="text-3xl md:text-5xl font-bold text-amber-300 text-center">
                        SINDRE TOFTE GISKE
                    </h1>
                    <Hstyle>Full-Stack Utvikler</Hstyle>
                </div>
            </div>
        </section>
    )
}