import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { ProjectCard } from "../components/project-card";
import type { Project } from "../shared/schema";

interface ProjectsSectionProps {
  projects: Project[];
  showAll?: boolean;
}

export function ProjectsSection({ projects, showAll = false }: ProjectsSectionProps) {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const displayProjects = showAll ? otherProjects : otherProjects.slice(0, 3);

  return (
    <section id="featuredProjects" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-2">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              A selection of my recent work and personal projects.
            </p>
          </div>
          {!showAll && (
            <Link to="/projects">
              <Button variant="ghost" className="gap-2" data-testid="button-view-all-projects">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        {featuredProject && (
          <div className="mb-8">
            <ProjectCard project={featuredProject} featured />
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {displayProjects.length === 0 && !featuredProject && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No projects to display yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
