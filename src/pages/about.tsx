import { useQuery } from "@tanstack/react-query";
import { Navigation } from "../components/navigation";
import { AboutSection } from "../components/about-section";
import { SkillsSection } from "../components/skills-section";
import { Footer } from "../components/footer";
import { SkillsSectionSkeleton } from "../components/loading-skeleton";
import { Skeleton } from "../components/ui/skeleton";
import { Card, CardContent } from "../components/ui/card";
import type { Profile, Skill, Experience, Education } from "../shared/schema";

function AboutSkeleton() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <Skeleton className="w-48 h-48 md:w-64 md:h-64 rounded-2xl mb-6" />
            <Skeleton className="h-10 w-48 mb-2" />
            <Skeleton className="h-5 w-36 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Skeleton className="h-10 w-10 rounded-md" />
                <Skeleton className="h-6 w-28" />
              </div>
              <div className="pl-6 border-l-2 border-border space-y-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <Skeleton className="h-5 w-40 mb-2" />
                      <Skeleton className="h-4 w-48 mb-2" />
                      <Skeleton className="h-4 w-full" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  const { data: profile, isLoading: profileLoading } = useQuery<Profile>({
    queryKey: ["/api/profile"],
  });

  const { data: skills, isLoading: skillsLoading } = useQuery<Skill[]>({
    queryKey: ["/api/skills"],
  });

  const { data: experience, isLoading: experienceLoading } = useQuery<Experience[]>({
    queryKey: ["/api/experience"],
  });

  const { data: education, isLoading: educationLoading } = useQuery<Education[]>({
    queryKey: ["/api/education"],
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
