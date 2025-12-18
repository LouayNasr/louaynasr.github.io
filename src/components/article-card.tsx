import { Link } from "wouter";
import { Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import type { Article } from "../shared/schema";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured }: ArticleCardProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <Link href={`/articles/${article.id}`}>
        <Card className="overflow-hidden group cursor-pointer" data-testid={`card-article-featured-${article.id}`}>
          <div className="grid md:grid-cols-2">
            <div className="aspect-video md:aspect-auto md:h-full overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/articles/${article.id}`}>
      <Card className="overflow-hidden group cursor-pointer hover-elevate h-full" data-testid={`card-article-${article.id}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-5">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {article.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="font-display text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{article.readTime} min</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
