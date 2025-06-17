import React, {type HTMLAttributeAnchorTarget, useEffect} from "react";

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
            return direction === "down"
                ? rectTop > 10
                : rectTop < -10;
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
                className={`flex items-center justify-center rounded-full h-16 w-18 transition hover:scale-110
                    bg-neutral-950/70
                ${isActive ? "border-r-amber-300 border-r-2" : "border-r-amber-100 border-r-1"} ${className}`}
            >
                <h2 className={`${isActive ? "text-amber-300 drop-shadow-[0_0_1px_#facc15]  scale-110" : "text-amber-100"}`}>
                    {children}
                </h2>
            </button>
        );
    };

    // PAGE BODY
    return (
        <body id="root" className="bg-neutral-950">
        <header className="flex justify-end z-20">
            <div className="flex items-center justify-center flex-col z-20 w-3/4 md:w-3/5 h-16 md:h-32 fixed top-0
            border-amber-300 border-b-2 rounded-bl-full bg-gradient-to-t from-black/70 to-black-0/0">
                <div
                    className={`transition-opacity duration-1000 ease-in-out ${
                        currentSection === "hero" ? "opacity-0" : "opacity-100"
                    }`}
                >
                    <h1 className="text-2xl md:text-5xl font-bold text-amber-300 text-center">
                    SINDRE TOFTE GISKE
                </h1>
                    <h2 className="text-2xl md:text-4xl font-bold, text-amber-300">Full-Stack Utvikler</h2>

                </div>
            </div>
        </header>



        <main>{children}</main>



        <nav className="md:flex w-36 z-20 md:h-1/2 hidden justify-between items-center
        border-amber-300 bg-neutral-950/70 border-r-2 rounded-tr-full fixed bottom-0
         ">
            <div className={`flex justify-between items-center flex-col gap-3 pt-4 pr-8 h-4/5 w-full
            ease-in-out duration-[5000ms] transition-opacity 
            ${navVisible ? "opacity-100" : "opacity-0"}
            `}>
                <NavLink sectionId="hero" currentSection={currentSection}>Hero</NavLink>
                <NavLink sectionId="about" currentSection={currentSection}>About</NavLink>
                <NavLink sectionId="projects" currentSection={currentSection}>Projects</NavLink>
                <NavLink sectionId="contact" currentSection={currentSection}>Contact</NavLink>
            </div>
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