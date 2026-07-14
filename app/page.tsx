import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { SkillDistributionSection } from "@/sections/SkillDistributionSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { TimelineSection } from "@/sections/TimelineSection";
import { CodingProfilesSection } from "@/sections/CodingProfilesSection";
import { ContactSection } from "@/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <SkillDistributionSection />
      <ProjectsSection />
      <TimelineSection />
      <CodingProfilesSection />
      <ContactSection />
    </div>
  );
}
