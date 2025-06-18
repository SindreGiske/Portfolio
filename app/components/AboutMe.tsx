import React from "react";
import { useInView } from "~/customHooks/useInView";

export const AboutMe = ({ className }: { className?: string }) => {
  const Pstyle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const { ref, hasAnimated } = useInView<HTMLDivElement>(0.2);
    return (
      <div
        ref={ref}
        className={`lg:text-1xl p-2 text-base transition-all duration-1000 ease-in sm:text-sm xl:text-xl ${hasAnimated ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} ${className} `}
      >
        <p>{children}</p>
      </div>
    );
  };
  return (
    <div className={`${className} p-4 text-amber-100 select-none md:w-[640px]`}>
      <h1 className="p-2 text-xl md:text-3xl">Hvem er jeg?</h1>
      <Pstyle className={`delay-1000`}>
        Hele livet mitt har jeg vært fascinert og forelsket i Vitenskap og Kunst. Jeg lærte etterhvert at koding og
        programmering er den ultimate kunstformen. Eneste begrensningene er din fantasi og dine ferdigheter. Ikke nok
        med det, men koding har begge føtter godt plantet i vitenskap! Dette var da naturligvis perfekte yrket for meg.
      </Pstyle>
      <Pstyle className={`delay-[2000ms]`}>
        Jeg elsker å lære nye ting og jeg blomstrer ved utfordringer. Jeg ønsker å være med å skape noe som kan være til
        nytte for folk. I dette yrket er det store muligheter for å ha en positiv påvirkning på samfunnet.
      </Pstyle>
      <Pstyle className={`delay-[3000ms]`}>
        Med mine mange og lange erfaringer fra aktivt arbeid i musikkindustrien er jeg godt rutinert i å lære nye ting.
        Få ting er vært å gjøre om man får det til på første forsøk. jeg lever på forbedringspotensiale.
      </Pstyle>
    </div>
  );
};
