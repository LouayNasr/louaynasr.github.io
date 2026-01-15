import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Skeleton } from "../components/ui/skeleton";
import type { Profile, Project } from "../shared/schema";
import { mockProjects, mockProfile} from "../lib/data";


export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();

  const { data: profile } = useQuery<Profile>({
    queryKey: ["/api/profile"],
    queryFn: async () => mockProfile,
  });

  const { data: project, isLoading } = useQuery<Project | undefined>({
  queryKey: ["/api/projects", id],
  queryFn: async () => mockProjects.find(p => p.id === id),
});


  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/projects">
            <Button variant="ghost" className="gap-2 mb-8" data-testid="button-back-projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          {isLoading ? (
            <div className="space-y-8">
              <Skeleton className="aspect-video w-full rounded-xl" />
              <div>
                <Skeleton className="h-6 w-32 mb-4" />
                <Skeleton className="h-12 w-3/4 mb-4" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-2/3" />
              </div>
            </div>
          ) : project ? (
            <article>
              <div className="aspect-video w-full rounded-xl overflow-hidden mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  data-testid={`img-project-${project.id}`}
                />
              </div>

              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">
                  {project.category}
                </Badge>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                {project.liveUrl && (
                  <Button asChild className="gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-project-live-${project.id}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Live
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" asChild className="gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-project-github-${project.id}`}
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </article>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">Project Not Found</h2>
              <p className="text-muted-foreground mb-8">
                The project you're looking for doesn't exist.
              </p>
              <Link href="/projects">
                <Button>View All Projects</Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      {profile && <Footer profile={profile} />}
    </div>
  );
}
