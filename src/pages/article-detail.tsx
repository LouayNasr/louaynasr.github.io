import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Skeleton } from "../components/ui/skeleton";
import type { Profile, Article } from "../shared/schema";

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();

  const { data: profile } = useQuery<Profile>({
    queryKey: ["/api/profile"],
  });

  const { data: article, isLoading } = useQuery<Article>({
    queryKey: ["/api/articles", id],
  });

  const formattedDate = article
    ? new Date(article.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/articles">
            <Button variant="ghost" className="gap-2 mb-8" data-testid="button-back-articles">
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Button>
          </Link>

          {isLoading ? (
            <div className="space-y-8">
              <div>
                <div className="flex gap-2 mb-4">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-20" />
                </div>
                <Skeleton className="h-12 w-full mb-4" />
                <div className="flex gap-4">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-5 w-24" />
                </div>
              </div>
              <Skeleton className="aspect-video w-full rounded-xl" />
              <div className="space-y-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4" />
              </div>
            </div>
          ) : article ? (
            <article>
              <header className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  {article.title}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime} min read</span>
                  </div>
                </div>
              </header>

              <div className="aspect-video w-full rounded-xl overflow-hidden mb-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  data-testid={`img-article-${article.id}`}
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                {article.content.split("\n").map((paragraph, index) => {
                  if (paragraph.startsWith("# ")) {
                    return (
                      <h1 key={index} className="font-display text-3xl font-bold mt-8 mb-4">
                        {paragraph.replace("# ", "")}
                      </h1>
                    );
                  }
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="font-display text-2xl font-semibold mt-6 mb-3">
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    return (
                      <li key={index} className="ml-4">
                        {paragraph.replace("- ", "")}
                      </li>
                    );
                  }
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            </article>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">Article Not Found</h2>
              <p className="text-muted-foreground mb-8">
                The article you're looking for doesn't exist.
              </p>
              <Link href="/articles">
                <Button>View All Articles</Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      {profile && <Footer profile={profile} />}
    </div>
  );
}
