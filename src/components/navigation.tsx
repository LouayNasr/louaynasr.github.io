import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "../components/theme-toggle";
import { cn } from "../lib/utils";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#featuredProjects", label: "Projects" },
  { href: "#about", label: "About" },
  // { href: "/articles", label: "Articles" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/">
            <span
              className="font-display text-xl font-semibold tracking-tight cursor-pointer"
              data-testid="link-logo"
            >
              Portfolio
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                <span
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer",
                    location === link.href
                      ? "text-foreground bg-accent"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40">
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                <span
                  className={cn(
                    "block px-4 py-3 text-lg font-medium rounded-md transition-colors cursor-pointer",
                    location === link.href
                      ? "text-foreground bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                  data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
