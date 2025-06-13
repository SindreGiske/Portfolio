import React, {useEffect} from "react";

export default function BodyWrapper({ children }: { children: React.ReactNode }) {

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
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <body id="root">
        <header className="flex justify-end z-20">
            <nav className="flex items-center justify-center z-20 w-3/4 md:w-3/5 h-16 md:h-36 fixed top-0 border-amber-300 border-b-2 rounded-bl-full">
            </nav>
        </header>
        <main className="bg-neutral-950">{children}</main>
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