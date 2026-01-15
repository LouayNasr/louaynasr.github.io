import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/home";
import Projects from "./pages/projects";
import ProjectDetail from "./pages/project-detail";
import { useEffect } from "react";
// import About from "./pages/about";
import Articles from "./pages/articles";
import ArticleDetail from "./pages/article-detail";
// import Contact from "./pages/contact";  
import NotFound from "./pages/not-found";

export function ScrollToTop() {
  const [location] = useHashLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/projects/:id" component={ProjectDetail} />
        <Route path="/articles" component={Articles} />
        <Route path="/articles/:id" component={ArticleDetail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}


export default App;
