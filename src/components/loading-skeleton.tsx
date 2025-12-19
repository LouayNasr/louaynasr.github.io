import { Skeleton } from "../components/ui/skeleton";
import { Card, CardContent } from "../components/ui/card";

export function HeroSkeleton() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <Skeleton className="h-4 w-32 mb-4 mx-auto lg:mx-0" />
            <Skeleton className="h-16 w-full max-w-md mb-6 mx-auto lg:mx-0" />
            <Skeleton className="h-6 w-full max-w-lg mb-8 mx-auto lg:mx-0" />
            <div className="flex gap-4 justify-center lg:justify-start">
              <Skeleton className="h-12 w-36" />
              <Skeleton className="h-12 w-44" />
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <Skeleton className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-video w-full" />
      <CardContent className="p-5">
        <Skeleton className="h-5 w-20 mb-3" />
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-4" />
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-16" />
        </div>
        <Skeleton className="h-8 w-28" />
      </CardContent>
    </Card>
  );
}

export function ProjectsSectionSkeleton() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Skeleton className="h-10 w-64 mb-2" />
          <Skeleton className="h-6 w-96" />
        </div>
        <Card className="overflow-hidden mb-8">
          <div className="grid md:grid-cols-2">
            <Skeleton className="aspect-video md:h-full" />
            <CardContent className="p-8">
              <Skeleton className="h-6 w-24 mb-4" />
              <Skeleton className="h-8 w-3/4 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-6" />
              <div className="flex gap-2 mb-6">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-20" />
              </div>
              <Skeleton className="h-10 w-32" />
            </CardContent>
          </div>
        </Card>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
export function AboutSkeleton() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <Skeleton className="w-48 h-48 md:w-64 md:h-64 rounded-2xl mb-6" />
            <Skeleton className="h-10 w-48 mb-2" />
            <Skeleton className="h-5 w-36 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Skeleton className="h-10 w-10 rounded-md" />
                <Skeleton className="h-6 w-28" />
              </div>
              <div className="pl-6 border-l-2 border-border space-y-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <Skeleton className="h-5 w-40 mb-2" />
                      <Skeleton className="h-4 w-48 mb-2" />
                      <Skeleton className="h-4 w-full" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ArticleCardSkeleton() {
  return (
    <Card className="overflow-hidden h-full">
      <Skeleton className="aspect-video w-full" />
      <CardContent className="p-5">
        <div className="flex gap-2 mb-3">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-16" />
        </div>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-4" />
        <div className="flex gap-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      </CardContent>
    </Card>
  );
}

export function ArticlesSectionSkeleton() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Skeleton className="h-10 w-64 mb-2" />
          <Skeleton className="h-6 w-96" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <ArticleCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSectionSkeleton() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mb-2 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Skeleton className="h-10 w-10 rounded-md" />
                  <Skeleton className="h-6 w-24" />
                </div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
