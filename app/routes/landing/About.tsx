import {AboutMe} from "~/components/AboutMe";


export default function About() {
    return (
        <section className="flex justify-center items-center h-screen w-[99%] overflow-hidden snap-center"
        id={"about"}>
            <img src="/meOnStage.png" className={"z-0 h-[0px] md:h-[700px] rounded-lg"}
                 alt={"Image of me on stage with one of my bass guitars, by Ketil Hardy."}/>
            <AboutMe/>
        </section>
    )
}