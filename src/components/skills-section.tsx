import {
  Code2,
  Database,
  Palette,
  Wrench,
  Blocks,
  Globe,
  Layout,
  Server,
  GitBranch,
  Terminal,
  Figma,
  Smartphone,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import type { Skill } from "../shared/schema";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  react: Blocks,
  typescript: Code2,
  javascript: Code2,
  html: Globe,
  css: Layout,
  nodejs: Server,
  python: Code2,
  postgresql: Database,
  mongodb: Database,
  git: GitBranch,
  docker: Terminal,
  figma: Figma,
  tailwind: Palette,
  nextjs: Globe,
  graphql: Server,
  aws: Server,
  mobile: Smartphone,
  default: Wrench,
};

interface SkillsSectionProps {
  skills: Skill[];
}

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & DevOps",
  design: "Design",
};

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  frontend: Layout,
  backend: Server,
  tools: Wrench,
  design: Palette,
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>
  );

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const CategoryIcon = categoryIcons[category] || Wrench;
            return (
              <Card key={category} className="hover-elevate" data-testid={`card-skills-${category}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      <CategoryIcon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-display">
                      {categoryLabels[category] || category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {categorySkills.map((skill) => {
                      const SkillIcon =
                        iconMap[skill.icon.toLowerCase()] || iconMap.default;
                      return (
                        <li
                          key={skill.id}
                          className="flex items-center gap-3 text-sm"
                          data-testid={`skill-item-${skill.id}`}
                        >
                          <SkillIcon className="h-4 w-4 text-muted-foreground" />
                          <span>{skill.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {Object.keys(groupedSkills).length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No skills to display yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
