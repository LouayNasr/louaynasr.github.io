import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import type { Profile, Experience, Education } from "../shared/schema";

interface AboutSectionProps {
  profile: Profile;
  experience: Experience[];
  education: Education[];
}

export function AboutSection({ profile, experience, education }: AboutSectionProps) {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="mb-8">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl mb-6">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  data-testid="img-about-avatar"
                />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-2">
                About Me
              </h2>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed" data-testid="text-bio">
                {profile.bio}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-md bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">Experience</h3>
              </div>

              <div className="relative pl-6 border-l-2 border-border space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative" data-testid={`experience-item-${exp.id}`}>
                    <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                          <h4 className="font-semibold">{exp.title}</h4>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {exp.company} • {exp.location}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
                {experience.length === 0 && (
                  <p className="text-muted-foreground text-sm">No experience added yet.</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-md bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">Education</h3>
              </div>

              <div className="relative pl-6 border-l-2 border-border space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="relative" data-testid={`education-item-${edu.id}`}>
                    <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                          <h4 className="font-semibold">{edu.degree}</h4>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {edu.startDate} - {edu.endDate}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {edu.institution} • {edu.location}
                        </p>
                        {edu.description && (
                          <p className="text-sm text-muted-foreground">
                            {edu.description}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
                {education.length === 0 && (
                  <p className="text-muted-foreground text-sm">No education added yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
