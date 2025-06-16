import React, {type HTMLAttributeAnchorTarget, useEffect} from "react";

export default function BodyWrapper({ children }: { children: React.ReactNode }) {

    const [currentSection, setCurrentSection] = React.useState<HTMLAttributeAnchorTarget>("hero");

    function scrollSection(direction: "up" | "down") {
        const sections = document.querySelectorAll<HTMLElement>("section");
        const currentScroll = window.scrollY;

        const orderedSections = direction === "down" ? [...sections] : [...sections].reverse();

        const targetSection = orderedSections.find((section) => {
            return direction === "down"
                ? section.offsetTop > currentScroll + 10
                : section.offsetTop < currentScroll - 10;
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
            }
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

        return (
            <a
                href={`#${sectionId}`}
                className={`border-amber-100 flex items-center justify-center border-r-1 rounded-full h-16 w-18 
                transition hover:scale-110 ${className}`}
            >
                <h2 className={`${isActive ? "text-[#fbbf24]" : "text-white"}`}>
                    {children}
                </h2>
            </a>
        );
    };


    return (
        <body id="root">
        <header className="flex justify-end z-20">
            <div className="flex items-center justify-center flex-col z-30 w-3/4 md:w-3/5 h-16 md:h-32 fixed top-0
            border-amber-300 border-b-2 rounded-bl-full bg-gradient-to-t from-black/70 to-black-0/0">
                <div
                    className={`transition-opacity duration-1000 ease-in-out ${
                        currentSection === "hero" ? "opacity-0" : "opacity-80"
                    }`}
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-amber-300 text-center">
                    SINDRE TOFTE GISKE
                </h1>
                    <h2 className="text-2xl md:text-4xl font-bold, text-amber-300">Full-Stack Utvikler</h2>

                </div>
            </div>
        </header>
        <main className="bg-neutral-950">{children}</main>
        <nav className="w-36 z-20 h-1/2 border-amber-300 border-r-2 rounded-tr-full fixed bottom-0
        flex justify-between items-center flex-col gap-3 md:py-26 pr-6">
            <NavLink sectionId="hero" currentSection={currentSection}>Hero</NavLink>
            <NavLink sectionId="about" currentSection={currentSection}>About</NavLink>
            <NavLink sectionId="projects" currentSection={currentSection}>Projects</NavLink>
            <NavLink sectionId="contact" currentSection={currentSection}>Contact</NavLink>
        </nav>
        <button
            className="scrollButtonBG fixed bottom-0 h-36 left-1/2 -translate-x-1/2 w-full flex items-center justify-center"
            onClick={() => scrollSection("down")}
        >
            <img
                src="/scrollDownChevron.svg"
                alt="Scroll Down"
                className="h-32 w-32 opacity-30"
            />
        </button>

        <footer></footer>
        </body>
    );
}