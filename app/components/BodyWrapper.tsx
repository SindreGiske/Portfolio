import React, { type HTMLAttributeAnchorTarget, useEffect } from "react";
import Background from "~/components/Background";

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = React.useState<HTMLAttributeAnchorTarget>("hero");
  const [navVisible, setNavVisible] = React.useState(false);

  // Waits 3 seconds after site is loaded to start fade in of nav links
  useEffect(() => {
    const timeout = setTimeout(() => setNavVisible(true), 3000);
    return () => clearTimeout(timeout);
  }, []);

  // Arrow key scroll functionality
  function scrollSection(direction: "up" | "down") {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section"));

    const orderedSections = direction === "down" ? [...sections] : [...sections].reverse();

    const targetSection = orderedSections.find((section) => {
      const rectTop = section.getBoundingClientRect().top;
      return direction === "down" ? rectTop > 10 : rectTop < -10;
    });

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Listens for keypresses for page navigation and looks for which section/sections are in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        scrollSection("down");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        scrollSection("up");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              setCurrentSection(id);
            }
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      observer.disconnect();
    };
  }, []);

  const NavLink = ({
    children,
    sectionId,
    currentSection,
  }: {
    children: React.ReactNode;
    sectionId: string;
    currentSection: string;
  }) => {
    const isActive = currentSection === sectionId;

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();

      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    let ModifiedChildren: String = isActive ? children!!.toString().toUpperCase() : children!!.toString();

    return (
      <button
        onClick={handleClick}
        aria-label={"Naviger til " + { children }}
        className={`flex h-26 items-center justify-center rounded-full bg-neutral-950/10 transition hover:scale-110 ${
          isActive ? "w-28 border-r-2 border-amber-300/60" : "w-26 border-r-1 border-amber-300/40"
        }`}
      >
        <h3 className={`${isActive ? "text-amber-300/90 font-stretch-extra-condensed" : "text-amber-100/90"}`}>
          {ModifiedChildren}
        </h3>
      </button>
    );
  };

  const VerticalBar = () => {
    return <p className={"text-3xl font-thin text-amber-300/30"}>|</p>;
  };

  // PAGE BODY
  return (
    <body id="root" className="bg-neutral-950">
      <header className="z-20 flex justify-end">
        <div className="to-black-0/0 fixed top-0 z-20 flex h-16 w-3/4 flex-col items-center justify-center rounded-bl-full border-b-2 border-amber-300 bg-gradient-to-t from-black/70 text-center md:h-32 md:w-3/5 md:text-start">
          <div
            className={`transition-opacity duration-1000 ease-in-out ${
              currentSection === "hero" ? "opacity-0" : "opacity-90"
            }`}
          >
            <h1 className="text-center text-2xl font-bold text-amber-300 md:text-5xl">SINDRE TOFTE GISKE</h1>
            <h2 className="font-bold, text-2xl text-amber-300 md:text-4xl">Full-Stack Utvikler</h2>
          </div>
        </div>
      </header>
      <Background />
      <main>{children}</main>

      <nav
        className={`fixed bottom-0 z-20 hidden h-full w-32 items-center justify-between bg-gradient-to-l from-neutral-950/60 to-neutral-950/10 transition-opacity duration-[3000ms] ease-in-out md:flex ${
          navVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className={"absolute left-32 h-screen overflow-hidden"}>
          <div className={"h-1/2 w-[1px] bg-gradient-to-t from-amber-300/50 to-amber-300/0"} />
          <div className={"h-1/2 w-[1px] bg-gradient-to-t from-amber-300/0 to-amber-300/50"} />
        </div>
        <div className={`flex h-9/10 w-full flex-col items-center justify-center gap-2 pr-2`}>
          <NavLink sectionId="hero" currentSection={currentSection}>
            Banner
          </NavLink>
          <VerticalBar />
          <NavLink sectionId="about" currentSection={currentSection}>
            Om meg
          </NavLink>
          <VerticalBar />
          <NavLink sectionId="projects" currentSection={currentSection}>
            Prosjekter
          </NavLink>
          <VerticalBar />
          <NavLink sectionId="experience" currentSection={currentSection}>
            Erfaringer
          </NavLink>
          <VerticalBar />
          <NavLink sectionId="contact" currentSection={currentSection}>
            Kontakt
          </NavLink>
        </div>
      </nav>
      <button
        className="scrollButtonBG fixed bottom-0 left-1/2 flex h-36 w-full -translate-x-1/2 items-center justify-center"
        onClick={() => scrollSection("down")}
      >
        <img src="/scrollDownChevron.svg" alt="Scroll Down" className="h-32 w-32 opacity-30" />
      </button>

      <footer></footer>
    </body>
  );
}
