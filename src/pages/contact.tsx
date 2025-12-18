import { useQuery } from "@tanstack/react-query";
import { Navigation } from "../components/navigation";
import { ContactSection } from "../components/contact-section";
import { Footer } from "../components/footer";
import { Skeleton } from "../components/ui/skeleton";
import { Card, CardContent } from "../components/ui/card";
import type { Profile } from "../shared/schema";

function ContactSkeleton() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Skeleton className="h-10 w-64 mb-4 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <Skeleton className="h-6 w-32 mb-6" />
              <Skeleton className="h-20 w-full mb-6" />
              <div className="flex gap-3">
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-10" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <Skeleton className="h-6 w-40 mb-6" />
              <div className="space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  const { data: profile, isLoading } = useQuery<Profile>({
    queryKey: ["/api/profile"],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        {isLoading || !profile ? <ContactSkeleton /> : <ContactSection profile={profile} />}
      </main>

      {profile && <Footer profile={profile} />}
    </div>
  );
}
