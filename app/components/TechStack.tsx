import React from "react";
import { useInView } from "~/customHooks/useInView";
import ReactrouterOriginalWordmark from "devicons-react/icons/ReactrouterOriginalWordmark";
import TailwindcssPlainWordmark from "devicons-react/icons/TailwindcssPlainWordmark";

export default function TechStack() {
  const ListPoint = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const { ref, hasAnimated } = useInView<HTMLDivElement>(0.2);

    return <li className={"flex h-fit w-full flex-row"}>{children}</li>;
  };

  return (
    <article className="flex flex-col items-center justify-center gap-8">
      <h3>Tech Stack: </h3>
      <ul>
        <h4>Frontend: </h4>
        <ListPoint>
          <ReactrouterOriginalWordmark size="50" />
          <p>React Router</p>
        </ListPoint>
        <ListPoint>
          <TailwindcssPlainWordmark size="50" />
          <p>Tailwind</p>
        </ListPoint>
        <h4>Backend: </h4>

        <h4>Dev-Ops: </h4>

        <p>Docker</p>
        <p>Kubernetes / Lens</p>
        <p>Insomnia</p>
      </ul>
    </article>
  );
}
