import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { TimelineSection } from "@/sections/TimelineSection";
import { CodingProfilesSection } from "@/sections/CodingProfilesSection";
import { ContactSection } from "@/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-24">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <CodingProfilesSection />
      <ContactSection />
    </div>
  );
}
