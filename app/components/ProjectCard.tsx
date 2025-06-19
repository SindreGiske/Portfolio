import GithubOriginal from "devicons-react/icons/GithubOriginal";
import React from "react";
import { useInView } from "~/customHooks/useInView";

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
      className={`relative m-2 flex h-80 w-2/3 max-w-[700px] flex-col items-center justify-between rounded-br-[80px] border-r-2 border-b-2 border-amber-300 p-4 pt-0 text-center text-amber-100 shadow-amber-100/40 transition-all duration-1000 ease-in select-none sm:w-1/2 md:w-1/4 ${hasAnimated ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"} `}
    >
      <h1 className={"font-bold tracking-wider italic md:text-2xl"}>{name}</h1>
      <p className={"text-sm"}>{description}</p>
      <img src={image} alt={name + "image"} className={"pointer-events-none max-h-2/3 w-[90%]"} draggable={false} />
      <a
        target="_blank"
        href={href}
        rel="noopener noreferrer"
        aria-label={name}
        className="absolute -right-0 -bottom-0 transition hover:scale-110"
      >
        <GithubOriginal className={"rounded-full bg-amber-300"} size={"50"} />
      </a>
    </article>
  );
}
