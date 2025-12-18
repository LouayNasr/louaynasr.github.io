import { Link } from "wouter";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "../components/ui/button";
import { Navigation } from "../components/navigation";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <span className="font-display text-8xl md:text-9xl font-bold text-primary/20">
              404
            </span>
          </div>
          
          <h1
            className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4"
            data-testid="text-404-title"
          >
            Page Not Found
          </h1>
          
          <p className="text-muted-foreground text-lg mb-8" data-testid="text-404-description">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => window.history.back()} variant="outline" className="gap-2" data-testid="button-go-back">
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
            <Link href="/">
              <Button className="gap-2" data-testid="button-go-home">
                <Home className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
