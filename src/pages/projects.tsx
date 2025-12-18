import { useQuery } from "@tanstack/react-query";
import { Navigation } from "../components/navigation";
import { ProjectsSection } from "../components/projects-section";
import { Footer } from "../components/footer";
import { ProjectsSectionSkeleton } from "../components/loading-skeleton";
import type { Profile, Project } from "../shared/schema";

export default function Projects() {
  const { data: profile } = useQuery<Profile>({
    queryKey: ["/api/profile"],
  });

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            All Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of my work across web development, mobile apps, and more.
          </p>
        </div>

        {isLoading || !projects ? (
          <ProjectsSectionSkeleton />
        ) : (
          <ProjectsSection projects={projects} showAll />
        )}
      </main>

      {profile && <Footer profile={profile} />}
    </div>
  );
}
