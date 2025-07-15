import React from "react";

export function ContactSection() {
  function TextFormat({ children }: { children: React.ReactNode }) {
    return <h1 className={"text-amber-300 md:text-3xl"}>{children}</h1>;
  }

  return (
    <section
      id={"contact"}
      className={"flex h-screen flex-col items-center justify-center gap-6 md:h-[70vh] md:flex-row md:pb-8"}
    >
      <img src={"/sindretg25.jpg"} className={"h-1/4 md:h-1/2"} alt={"Image of me."} />
      <div className={"flex flex-col items-center justify-center"}>
        <TextFormat>Er det noe du lurer på?</TextFormat>
        <TextFormat>Kontakt meg på LinkedIn!</TextFormat>
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label={"LinkedIn Link"}
          className={"p-4 transition hover:scale-110"}
          href={"https://www.linkedin.com/in/sindre-giske-7a21a62ab/"}
        >
          <img
            src={"/customLinkedIn.svg"}
            alt={"custom made LinkedIn Logo"}
            className="h-[146px] w-[146px] rounded-full"
          />
        </a>
      </div>
    </section>
  );
}
