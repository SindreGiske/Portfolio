import React from "react";
import {useInView} from "~/customHooks/useInView";

export const AboutMe = ({
                            className,
                        }: {
    className?: string;
}) => {

    const Pstyle = ({ children, className }: { children: React.ReactNode, className?: string }) => {
        const { ref, hasAnimated } = useInView<HTMLDivElement>(0.2);
        return (
            <div
                ref={ref}
                className={`
                p-2 text-base sm:text-sm lg:text-1xl xl:text-2xl
                transition-all duration-1000 ease-in
                ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                ${className}
            `}>
            <p>
                {children}
            </p>
            </div>
        );
    };
    return (
        <div className={`${className} text-amber-100 select-none md:w-[700px] p-4`}>
            <h1 className="p-2 text-xl md:text-4xl">Hvem er jeg?</h1>
            <Pstyle
                className={`delay-1000`}
            >
                Hele livet mitt har jeg vært fascinert og forelsket i Vitenskap og
                Kunst. Jeg lærte etterhvert at koding og programmering er den
                ultimate kunstformen. Ettersom den begge føtter godt plantet i
                vitenskap var dette naturligvis perfekte yrket for meg.
            </Pstyle>
            <Pstyle
                className={`delay-[2000ms]`}
            >
                Jeg elsker å lære nye ting og jeg blomstrer ved utfordringer. Jeg ønsker
                å være med å skape noe som kan være til nytte for folk. I denne kunstformen
                er det store muligheter for å ha en positiv påvirkning på samfunnet.
            </Pstyle>
            <Pstyle
                className={`delay-[3000ms]`}
            >
                Med mine mange og lange erfaringer fra aktivt arbeid i musikkindustrien
                er jeg godt rutinert i å lære nye ting. Få ting er vært å gjøre om man
                får det til på første forsøk. jeg lever på forbedringspotensiale.
            </Pstyle>
        </div>
    );
};