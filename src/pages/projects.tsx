import { useQuery } from "@tanstack/react-query";
import { Navigation } from "../components/navigation";
import { ProjectCard } from "../components/project-card";
import { Footer } from "../components/footer";
import { ProjectsSectionSkeleton } from "../components/loading-skeleton";
import type { Profile, Project } from "../shared/schema";
import { mockProjects , mockProfile} from "../lib/data";
export default function Projects() {
  const { data: profile } = useQuery<Profile>({
    queryKey: ["profile"],
    queryFn: async () => mockProfile,
  });

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => mockProjects,
  });

  if (isLoading || !projects) {
    return <ProjectsSectionSkeleton />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            All Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of my work across mobile apps development, and more.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No projects to display yet.</p>
            </div>
          )}
        </div>
      </main>

      {profile && <Footer profile={profile} />}
    </div>
  );
}
