import { Link } from "wouter";
import { Github, Linkedin, X } from "lucide-react";
import type { Profile } from "../shared/schema";

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <span
                className="font-display text-xl font-semibold tracking-tight cursor-pointer"
                data-testid="link-footer-logo"
              >
                {profile.name}
              </span>
            </Link>
            <p className="text-muted-foreground mt-3 text-sm max-w-xs">
              {profile.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span
                    className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                    data-testid="link-footer-home"
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <span
                    className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                    data-testid="link-footer-projects"
                  >
                    Projects
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span
                    className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                    data-testid="link-footer-about"
                  >
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/articles">
                  <span
                    className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                    data-testid="link-footer-articles"
                  >
                    Articles
                  </span>
                </Link>
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
                <Link href="/contact">
                  <span
                    className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                    data-testid="link-footer-contact"
                  >
                    Get in Touch
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <div className="flex gap-3">
              {profile.social.github && (
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-github"
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
                  data-testid="link-footer-linkedin"
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
                  data-testid="link-footer-x"
                >
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
