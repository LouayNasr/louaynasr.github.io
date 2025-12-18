import { useQuery } from "@tanstack/react-query";
import { Navigation } from "../components/navigation";
import { ArticlesSection } from "../components/articles-section";
import { Footer } from "../components/footer";
import { ArticlesSectionSkeleton } from "../components/loading-skeleton";
import type { Profile, Article } from "../shared/schema";

export default function Articles() {
  const { data: profile } = useQuery<Profile>({
    queryKey: ["/api/profile"],
  });

  const { data: articles, isLoading } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Articles
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Thoughts, tutorials, and insights on web development and technology.
          </p>
        </div>

        {isLoading || !articles ? (
          <ArticlesSectionSkeleton />
        ) : (
          <ArticlesSection articles={articles} showAll />
        )}
      </main>

      {profile && <Footer profile={profile} />}
    </div>
  );
}
