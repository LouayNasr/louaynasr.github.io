import { Github, Linkedin, X } from "lucide-react";
import type { Profile } from "../shared/schema";
import { useHashLocation } from "wouter/use-hash-location";
import React from "react";

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [location, setLocation] = useHashLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isAnchor = href.startsWith("#");
    
    if (!isAnchor) {
      setLocation(href);
      return;
    }

    e.preventDefault();
    const targetId = href.replace("#", "");

    const scrollToTarget = () => {
      if (!targetId || targetId === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }
    };

    if (location !== "/") {
      setLocation("/");
      setTimeout(scrollToTarget, 300);
    } else {
      scrollToTarget();
    }
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" onClick={(e) => handleNavClick(e, "#")}>
              <span
                className="font-display text-xl font-semibold tracking-tight cursor-pointer"
                data-testid="link-footer-logo"
              >
                {profile.name}
              </span>
            </a>
            <p className="text-muted-foreground mt-3 text-sm max-w-xs">
              {profile.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" onClick={(e) => handleNavClick(e, "#")}>
                  <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors" data-testid="link-footer-home">
                    Home
                  </span>
                </a>
              </li>
              <li>
                <a href="#featuredProjects" onClick={(e) => handleNavClick(e, "#featuredProjects")}>
                  <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors" data-testid="link-footer-projects">
                    Projects
                  </span>
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
                  <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors" data-testid="link-footer-about">
                    About
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-email"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                  <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors" data-testid="link-footer-contact">
                    Get in Touch
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <div className="flex gap-3">
              {profile.social.github && (
                <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-github">
                  <Github className="h-5 w-5" />
                </a>
              )}
              {profile.social.linkedin && (
                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-linkedin">
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {profile.social.x && (
                <a href={profile.social.x} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-x">
                  <X className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}