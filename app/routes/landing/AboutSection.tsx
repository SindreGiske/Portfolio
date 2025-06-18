import { AboutMe } from "~/components/AboutMe";
import { useInView } from "~/customHooks/useInView";

export default function AboutSection() {
  const { ref, hasAnimated } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className="flex h-screen w-[99%] snap-center items-center justify-center overflow-hidden select-none"
    >
      <div className={"relative hidden overflow-hidden md:inline"}>
        <div
          className="animate-shimmer absolute inset-0 z-10 bg-gradient-to-r via-amber-100/10 to-transparent"
          style={{ animationDuration: "6s" }}
        />
        <img
          src="/meOnStage.png"
          className={`z-0 h-[0px] transform rounded-lg transition-all duration-1000 ease-in-out md:h-[600px] ${hasAnimated ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          alt="Image of me on stage with one of my bass guitars, by Ketil Hardy."
          draggable={false}
        />
      </div>
      <AboutMe />
    </section>
  );
}
