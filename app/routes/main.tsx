import type {Route} from "../../.react-router/types/app/routes/+types/main";
import BodyWrapper from "~/components/BodyWrapper";
import HeroSection from "~/routes/landing/HeroSection";
import About from "~/routes/landing/About";
import Projects from "~/routes/landing/Projects";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Sindre's Portfolio" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function main() {

    return (
        <BodyWrapper>
            <HeroSection/>
            <About/>
            <Projects />
        </BodyWrapper>
    )
}