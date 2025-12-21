import { useQuery } from "@tanstack/react-query";
import { Navigation } from "../components/navigation";
import { Hero } from "../components/hero";
import { ProjectsSection } from "../components/projects-section";
import { SkillsSection } from "../components/skills-section";
import { AboutSection } from "../components/about-section";
// import { ArticlesSection } from "../components/articles-section";
import { ContactSection } from "../components/contact-section";
import { Footer } from "../components/footer";
import {
  HeroSkeleton,
  ProjectsSectionSkeleton,
  SkillsSectionSkeleton,
  AboutSkeleton,
  // ArticlesSectionSkeleton,
} from "../components/loading-skeleton";
import { mockProfile, mockProjects, mockSkills, mockExperience, mockEducation } from "../lib/data";
import type { Profile, Project,  Experience, Education, Skill } from "../shared/schema";


export default function Home() {
  const { data: profile, isLoading: profileLoading } = useQuery<Profile>({
  queryKey: ["/api/profile"],
  queryFn: async () => mockProfile,
});

const { data: projects, isLoading: projectsLoading } = useQuery<Project[]>({
  queryKey: ["/api/projects"],
  queryFn: async () => mockProjects,
});

const { data: skills, isLoading: skillsLoading } = useQuery<Skill[]>({
  queryKey: ["/api/skills"],
  queryFn: async () => mockSkills,
});

const { data: experience, isLoading: experienceLoading } = useQuery<Experience[]>({
    queryKey: ["/api/experience"],
    queryFn: async () => mockExperience,

  });

  const { data: education, isLoading: educationLoading } = useQuery<Education[]>({
    queryKey: ["/api/education"],
    queryFn: async () => mockEducation,
  });

// const { data: articles, isLoading: articlesLoading } = useQuery<Article[]>({
//   queryKey: ["/api/articles"],
//   queryFn: async () => mockArticles,
// });

  const isLoading = profileLoading || experienceLoading || educationLoading;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {profileLoading || !profile ? (
          <HeroSkeleton />
        ) : (
          <Hero profile={profile} />
        )}

        {projectsLoading || !projects ? (
          <ProjectsSectionSkeleton />
        ) : (
          <ProjectsSection projects={projects} />
        )}

        {isLoading || !profile || !experience || !education ? (
          <AboutSkeleton />
        ) : (
          <AboutSection profile={profile} experience={experience} education={education} />
        )}

        {skillsLoading || !skills ? (
          <SkillsSectionSkeleton />
        ) : (
          <SkillsSection skills={skills} />
        )}
{/* 
        {articlesLoading || !articles ? (
          <ArticlesSectionSkeleton />
        ) : (
          <ArticlesSection articles={articles} />
        )}
 */}
        {profile && <ContactSection profile={profile} />}
      </main>

      {profile && <Footer profile={profile} />}
    </div>
  );
}
