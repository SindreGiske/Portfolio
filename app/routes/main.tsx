import type { Route } from "../../.react-router/types/app/routes/+types/main";
import BodyWrapper from "~/components/BodyWrapper";
import HeroSection from "~/routes/landing/HeroSection";
import AboutSection from "~/routes/landing/AboutSection";
import ProjectsSection from "~/routes/landing/ProjectsSection";
import ExperienceSection from "~/routes/landing/ExperienceSection";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Sindre's Portfolio" }, { name: "description", content: "Welcome to React Router!" }];
}

export default function main() {
  return (
    <BodyWrapper>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
    </BodyWrapper>
  );
}
