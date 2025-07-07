import ProjectCard from "~/components/ProjectCard";
import { useInView } from "~/customHooks/useInView";
import React from "react";

export default function ProjectsSection() {
  const { ref, hasAnimated } = useInView();

  return (
    <section
      ref={ref}
      id={"projects"}
      className="relative flex min-h-screen w-[99.9%] flex-col items-center justify-center overflow-hidden py-12 md:py-32"
    >
      <h1
        className={`max-w-4/5 transform p-8 text-center text-2xl font-bold text-amber-300/90 transition-all duration-1000 ease-in-out md:text-5xl ${
          hasAnimated ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
        }`}
      >
        Noen prosjekter jeg har jobbet på:
      </h1>
      <div className="flex flex-col items-center justify-center gap-8 pb-12 md:flex-row">
        <ProjectCard
          name={"Text basert spill"}
          description={
            "Gjennom terminalen kontrollerer du en person som prøver å unslippe en vanskelig situasjon. " +
            "Jeg lagde både spillet og spillmotoren det kjører i selv med Kotlin. " +
            "Det jeg ville oppnå med dette prosjektet var ikke å ha ett spill å selge etter jeg var ferdig, " +
            "men heller for å få utfordre meg selv til å utvikle en komplisert applikasjon. "
          }
          href={"https://github.com/SindreGiske/TextGame"}
          image={"/textGame.png"}
          offset={"0ms"}
        />
        <ProjectCard
          name={"FINT Kundeportalen"}
          description={
            "Som lærling i Novari IKS har jeg jobbet nøye med FINT Kundeportalen " +
            "og andre relaterte datasystemer, både på frontend og backend. " +
            "Her kommer all data fra backend, så mye av jobben gikk ut på å lage programmatisk løsning for" +
            " tilfredsstillende visning av data, og nøye sikkerhet rundt dette. "
          }
          href={"https://github.com/FINTLabs/fint-kunde-portal-frontend-v2"}
          image={"/fintKunde.png"}
          offset={"500ms"}
        />
        <ProjectCard
          name={"fint-core-status-service"}
          description={
            "Tjeneste for sikker overvåking av forskjellige datatyper vi håndterer og leverer i Novari. " +
            "Her har jeg også tilføyet en del både på frontend og backend."
          }
          href={"https://github.com/FINTLabs/fint-core-status-service"}
          image={"/status-service.png"}
          offset={"1000ms"}
        />
      </div>
    </section>
  );
}
