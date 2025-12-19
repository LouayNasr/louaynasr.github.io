import { useQuery } from "@tanstack/react-query";
import { Navigation } from "../components/navigation";
import { AboutSection } from "../components/about-section";
import { SkillsSection } from "../components/skills-section";
import { Footer } from "../components/footer";
import { SkillsSectionSkeleton, AboutSkeleton } from "../components/loading-skeleton";
import { Card, CardContent } from "../components/ui/card";
import { mockProfile, mockSkills, mockExperience, mockEducation } from "../lib/data";
import type { Profile, Skill, Experience, Education } from "../shared/schema";


export default function About() {
  const { data: profile, isLoading: profileLoading } = useQuery<Profile>({
    queryKey: ["/api/profile"],
    queryFn: async () => mockProfile,
  });

  const { data: skills, isLoading: skillsLoading } = useQuery<Skill[]>({
    queryKey: ["/api/skills"],
    queryFn: async () => mockSkills,
  });

  const { data: experience, isLoading: experienceLoading } = useQuery<Experience[]>({
    queryKey: ["/api/experience"],
    queryFn: async () => mockExperience,

  });

  const { data: education, isLoading: educationLoading } = useQuery<Education[]>({
    queryKey: ["/api/education"],
    queryFn: async () => mockEducation,
  });

  const isLoading = profileLoading || experienceLoading || educationLoading;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            About Me
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Learn more about my background, experience, and the skills I bring to every project.
          </p>
        </div>

        {isLoading || !profile || !experience || !education ? (
          <AboutSkeleton />
        ) : (
          <AboutSection profile={profile} experience={experience} education={education} />
        )}

        {skillsLoading || !skills ? (
          <SkillsSectionSkeleton />
        ) : (
          <SkillsSection skills={skills} />
        )}
      </main>

      {profile && <Footer profile={profile} />}
    </div>
  );
}
