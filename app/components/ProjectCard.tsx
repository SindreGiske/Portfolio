import GithubOriginal from "devicons-react/icons/GithubOriginal";
import React from "react";
import {useInView} from "~/customHooks/useInView";

export default function ProjectCard({
                                        name,
                                        description,
                                        image,
                                        href,
                                        offset,
                                    }: {
    name: string;
    description: string;
    image: string;
    href: string;
    offset: string;
}) {
    const { ref, hasAnimated } = useInView<HTMLDivElement>(0.2);

    return (
        <article
            ref={ref}
            style={{ transitionDelay: hasAnimated ? offset : "0ms" }}
            className={`w-2/3 sm:w-1/2 md:w-1/4 md:h-96 max-w-[700px] relative flex flex-col m-2 p-4 items-center justify-between
            text-center text-amber-100 border-b-2 border-r-2 border-amber-300 rounded-br-[80px] shadow- shadow-amber-100/40 
            select-none transition-all duration-1000 ease-in
            ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}
        `}>
            <h1 className={"md:text-2xl tracking-wider font-bold italic"}>{name}</h1>
            <p>{description}</p>
            <img src={image} alt={name + "image"} className={"pointer-events-none w-[90%] max-h-2/3"} draggable={false} />
            <a target="_blank" href={href} rel="noopener noreferrer" aria-label={name}
               className="absolute -bottom-0 -right-0 transition hover:scale-110">
                <GithubOriginal className={"bg-amber-300 rounded-full"} size={"50"} />
            </a>
        </article>
    )
}

