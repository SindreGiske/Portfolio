import {AboutMe} from "~/components/AboutMe";
import {useInView} from "~/customHooks/useInView";


export default function AboutSection() {
    const { ref, hasAnimated } = useInView();

    return (
        <section
            id="about"
            ref={ref}
            className="flex justify-center items-center h-screen w-[99%] select-none overflow-hidden snap-center"
        >
            <div className={"relative overflow-hidden md:inline hidden"}>
                <div className="absolute z-10 inset-0 bg-gradient-to-r via-amber-100/10 to-transparent
                  animate-shimmer"
                     style={{ animationDuration: '6s' }} />
            <img
                src="/meOnStage.png"
                className={`z-0 h-[0px] md:h-[600px] rounded-lg 
                    transform transition-all duration-1000 ease-in-out
                    ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
                alt="Image of me on stage with one of my bass guitars, by Ketil Hardy."
                draggable={false}
                />
            </div>
                <AboutMe/>
        </section>
    )
}