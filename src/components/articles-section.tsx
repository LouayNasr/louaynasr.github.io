import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { ArticleCard } from "../components/article-card";
import type { Article } from "../shared/schema";

interface ArticlesSectionProps {
  articles: Article[];
  showAll?: boolean;
}

export function ArticlesSection({ articles, showAll = false }: ArticlesSectionProps) {
  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);
  const displayArticles = showAll ? otherArticles : otherArticles.slice(0, 3);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-2">
              Latest Articles
            </h2>
            <p className="text-muted-foreground text-lg">
              Thoughts, tutorials, and insights on development.
            </p>
          </div>
          {!showAll && (
            <Link href="/articles">
              <Button variant="ghost" className="gap-2" data-testid="button-view-all-articles">
                View All Articles
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        {featuredArticle && (
          <div className="mb-8">
            <ArticleCard article={featuredArticle} featured />
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {displayArticles.length === 0 && !featuredArticle && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No articles published yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
