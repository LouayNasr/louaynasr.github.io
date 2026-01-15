import { useState, useEffect } from "react";
import { useHashLocation } from "wouter/use-hash-location"; 
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "../components/theme-toggle";
import { cn } from "../lib/utils";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#featuredProjects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  // If you add a separate page later, format it like this:
  // { href: "/articles", label: "Articles" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // FIX: Use useHashLocation directly to ensure we get the correct state 
  // regardless of where this component is placed in the App tree.
  const [location, setLocation] = useHashLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // --- NAVIGATION HANDLER ---
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // 1. Check if it's a generic anchor or a real link
    const isAnchor = href.startsWith("#");
    
    // 2. If it's a real page (like /articles), let the router handle it
    if (!isAnchor) {
        setIsOpen(false);
        setLocation(href);
        return;
    }

    // 3. Prevent default browser jump for anchors
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace("#", "");

    // Function to perform the smooth scroll
    const smoothScroll = () => {
      if (!targetId) {
        // Scroll to top if href is just "#"
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    // 4. LOGIC: Are we currently on the Home page (root)?
    // In HashRouter, root is "/" or empty string
    const isHomePage = location === "/" || location === "";

    if (!isHomePage) {
      // If we are on "/projects", go home first
      setLocation("/");
      
      // Wait for the Home page to render, then scroll
      setTimeout(() => {
        smoothScroll();
      }, 300); // Increased delay slightly to ensure DOM is ready
    } else {
      // If we are already home, just scroll
      smoothScroll();
    }
  };

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
          {/* Logo */}
          <a href="/" onClick={(e) => handleNavClick(e, "#")}>
            <span
              className="font-display text-xl font-semibold tracking-tight cursor-pointer"
              data-testid="link-logo">
              Louay Nasr
            </span>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              // Highlight Logic:
              // If we are on home ("/"), highlight the active hash section? 
              // React Router doesn't track scroll position, so we usually just highlight 
              // if the path matches.
              
              // Simple check: Is the current location exactly the link?
              const isActive = location === link.href;
              // OR if we are on home and the link is "#" (Home)
              const isHomeActive = (location === "/" || location === "") && link.href === "#";

              return (
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer",
                      isActive || isHomeActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    data-testid={`link-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </span>
                </a>
              )
            })}
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

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-background h-screen border-t">
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span
                  className={cn(
                    "block px-4 py-3 text-lg font-medium rounded-md transition-colors cursor-pointer",
                    "text-muted-foreground hover:text-foreground hover:bg-accent/50"
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