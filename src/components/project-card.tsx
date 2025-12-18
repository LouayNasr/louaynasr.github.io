import { Link } from "wouter";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import type { Project } from "../shared/schema";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured }: ProjectCardProps) {
  if (featured) {
    return (
      <Card className="overflow-hidden group" data-testid={`card-project-featured-${project.id}`}>
        <div className="grid md:grid-cols-2">
          <div className="aspect-video md:aspect-auto md:h-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <CardContent className="p-6 md:p-8 flex flex-col justify-center">
            <Badge variant="secondary" className="w-fit mb-4">
              {project.category}
            </Badge>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3">
              <Link href={`/projects/${project.id}`}>
                <Button data-testid={`button-view-project-${project.id}`}>
                  View Details
                </Button>
              </Link>
              {project.liveUrl && (
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-project-live-${project.id}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-project-github-${project.id}`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden group hover-elevate" data-testid={`card-project-${project.id}`}>
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            {project.category}
          </Badge>
        </div>
        <h3 className="font-display text-lg font-semibold mb-2 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
        <div className="flex items-center justify-between">
          <Link href={`/projects/${project.id}`}>
            <Button variant="ghost" size="sm" className="gap-1" data-testid={`button-view-project-${project.id}`}>
              View Details
              <ExternalLink className="h-3 w-3" />
            </Button>
          </Link>
          <div className="flex gap-1">
            {project.githubUrl && (
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-project-github-${project.id}`}
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
