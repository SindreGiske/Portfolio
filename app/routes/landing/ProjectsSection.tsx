import IconCarousel from "~/components/IconCarousel";
import ProjectCard from "~/components/ProjectCard";
import {useInView} from "~/customHooks/useInView";
import React from "react";


export default function ProjectsSection() {
    const { ref, hasAnimated } = useInView();

    return (
        <section
            ref={ref}
            id={"projects"}
            className="relative min-h-screen w-[99.9%] flex items-center justify-between py-12 md:py-32 flex-col overflow-hidden"
        >
            <h1 className={`md:text-5xl text-2xl max-w-4/5 p-8 font-bold text-amber-300/90 text-center
            transform transition-all duration-1000 ease-in-out
            ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}>
                Noen prosjekter jeg har jobbet på:
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-10 pb-12">
                <ProjectCard
                    name={"Text basert spill"}
                    description={"Gjennom terminalen kontrollerer du en person som prøver å unslippe en vanskelig situasjon. " +
                        "Jeg lagde både spillet og spillmotoren det kjører i selv med Kotlin. "}
                    href={"https://github.com/SindreGiske/TextGame"}
                    image={"/textGame.png"}
                    offset={"0ms"}
                />
                <ProjectCard
                    name={"FINT Kundeportalen"}
                    description={"Som lærling i Novari IKS har jeg jobbet nøye med blant annet FINT Kundeportalen."}
                    href={"https://github.com/FINTLabs/fint-kunde-portal-frontend-v2"}
                    image={"/fintKunde.png"}
                    offset={"500ms"}
                />
                <ProjectCard
                    name={"Stein, Saks, Papir"}
                    description={"Enkel nettside hvor du spiller stein, saks, papir mot Shrek, fordi hvorfor ikke. Lagde det når jeg først lærte meg å kode."}
                    href={"https://github.com/SindreGiske/RPS"}
                    image={"/rpsGame.png"}
                    offset={"1000ms"}
                />
            </div>
            <h1 className={`md:text-5xl max-w-4/5 p-3 font-bold hidden md:inline text-amber-300/90 text-center
            transform transition-all duration-1000 ease-in-out
            ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}>
                Noen språk og verktøy jeg har erfaring med:
            </h1>
            <IconCarousel/>
        </section>
    )
}