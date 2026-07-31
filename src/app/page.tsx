import { HeroView } from "@/features/Hero";
import { AboutView } from "@/features/About";
import { SkillsView } from "@/features/Skills";
import { ExperienceView } from "@/features/Experience";
import { ProjectsView } from "@/features/Projects";
import { ContactView } from "@/features/Contact";

export default function Page() {
  return (
    <>
      <HeroView />
      <AboutView />
      <SkillsView />
      <ExperienceView />
      <ProjectsView />
      <ContactView />
    </>
  );
}
