import { Link } from "wouter";
import { ArrowRight, Download, Github, Linkedin, X } from "lucide-react";
import { Button } from "../components/ui/button";
import type { Profile } from "../shared/schema";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-sm md:text-base font-medium text-primary mb-4 tracking-wide uppercase">
              {profile.title}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {profile.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link href="/projects">
                <Button size="lg" className="gap-2" data-testid="button-view-projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              {profile.resumeUrl && (
                <Button variant="outline" size="lg" className="gap-2" asChild data-testid="button-download-resume">
                  <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              )}
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              {profile.social.github && (
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-social-github"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {profile.social.linkedin && (
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-social-linkedin"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {profile.social.x && (
                <a
                  href={profile.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-social-x"
                >
                  <X className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  data-testid="img-hero-avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
