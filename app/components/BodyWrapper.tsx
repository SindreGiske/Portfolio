import React, { type HTMLAttributeAnchorTarget, useEffect } from "react";

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = React.useState<HTMLAttributeAnchorTarget>("hero");
  const [navVisible, setNavVisible] = React.useState(false);

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
    className = "",
  }: {
    children: React.ReactNode;
    sectionId: string;
    currentSection: string;
    className?: string;
  }) => {
    const isActive = currentSection === sectionId;

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();

      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <button
        onClick={handleClick}
        className={`flex h-16 w-18 items-center justify-center rounded-full bg-neutral-950/70 transition hover:scale-110 ${isActive ? "border-r-2 border-r-amber-300" : "border-r-1 border-r-amber-100"} ${className}`}
      >
        <h2 className={`${isActive ? "scale-110 text-amber-300 drop-shadow-[0_0_1px_#facc15]" : "text-amber-100"}`}>
          {children}
        </h2>
      </button>
    );
  };

  // PAGE BODY
  return (
    <body id="root" className="bg-neutral-950">
      <header className="z-20 flex justify-end">
        <div className="to-black-0/0 fixed top-0 z-20 flex h-16 w-3/4 flex-col items-center justify-center rounded-bl-full border-b-2 border-amber-300 bg-gradient-to-t from-black/70 md:h-32 md:w-3/5">
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

      <main>{children}</main>

      <nav className="fixed bottom-0 z-20 hidden w-36 items-center justify-between rounded-tr-full border-r-2 border-amber-300 bg-neutral-950/70 md:flex md:h-1/2">
        <div
          className={`flex h-4/5 w-full flex-col items-center justify-between gap-3 pt-4 pr-8 transition-opacity duration-[5000ms] ease-in-out ${navVisible ? "opacity-100" : "opacity-0"} `}
        >
          <NavLink sectionId="hero" currentSection={currentSection}>
            Hero
          </NavLink>
          <NavLink sectionId="about" currentSection={currentSection}>
            About
          </NavLink>
          <NavLink sectionId="projects" currentSection={currentSection}>
            Projects
          </NavLink>
          <NavLink sectionId="contact" currentSection={currentSection}>
            Contact
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
