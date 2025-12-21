import type { Profile, Project, Article, Skill, Experience, Education } from "../shared/schema";

export const mockProfile: Profile = {
  name: "Louay Nasr",
  title: "Android Developer",
  tagline: "I craft performant Android applications with a strong focus on Jetpack Compose, clean architecture, and maintainable state management, delivering reliable and intuitive user experiences.",
  bio: "I'm an Android developer with 5 years of experience building mobile applications. I specialize in Kotlin and Jetpack Compose, with a strong focus on creating smooth, responsive, and intuitive user experiences. I have experience migrating apps to modern architectures, and implementing advanced features like audio playback, in-app updates, and cloud messaging. When I'm not coding, you can find me exploring new Android technologies, experimenting with Jetpack Compose, or improving my skills through personal projects. I believe in writing clean, maintainable code and am always eager to learn and grow.",
  email: "louaynasr90@gmail.com",
  location: "As Suwayda, Syria",
  avatar: "/avatar.jpg",
  resumeUrl: "https://drive.google.com/file/d/13j3eX_GysKm43YJivC4XM-aqd2m03NyY/view",
  social: {
    github: "https://github.com/LouayNasr",
    linkedin: "https://linkedin.com/in/louaynasr/",
    x: "https://x.com/louaynasr",
  },
};

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "DoReMi Music Streaming",
    description: "A modern Android music app with advanced audio playback, offline support, and seamless user experience.",
    longDescription: "",
    image: "/doremi.jpg",
    category: "Music Streaming",
    technologies: ["Android", "Java", "Exoplayer", "Firebase"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "2",
    title: "Split Time App",
    description: "Split Time is a customizable chess clock app, built with Jetpack Compose and modern Android architecture (MVI pattern).",
    image: "/splittimeapp.png",
    category: "Utilities",
    technologies: ["Jetpack Compose", "Hilt", "DataStore", "MVI"],
    liveUrl: "",
    githubUrl: "https://github.com/LouayNasr/split-time",
    featured: false,
  },
  {
    id: "3",
    title: "New Inshort app",
    description: "modern Android application built using Jetpack Compose and Clean Architecture, it provides users with a concise list of news articles fetched from a remote API.",
    image: "/news_inshort.jpg",
    category: "News",
    technologies: ["Jetpack Compose", "Retrofit", "Paging 3", "Coil", "Hilt"],
    githubUrl: "https://github.com/LouayNasr/News-InShort",
    featured: false,
  },
];

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn how to structure your React applications for scale using TypeScript, best practices for state management, and tips for maintaining clean code.",
    content: "# Building Scalable React Applications with TypeScript\n\nReact applications can quickly become complex as they grow. In this article, we'll explore strategies for building scalable React applications using TypeScript.\n\n## Project Structure\n\nA well-organized project structure is the foundation of a scalable application. Consider organizing your code by feature rather than by type.\n\n## State Management\n\nChoose the right state management solution for your needs. For simple apps, React's built-in state might be enough. For complex apps, consider Redux or Zustand.\n\n## TypeScript Best Practices\n\n- Use strict mode\n- Define interfaces for props and state\n- Leverage generics for reusable components\n\n## Conclusion\n\nBuilding scalable React applications requires thoughtful architecture and consistent patterns throughout your codebase.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    readTime: 8,
    publishedAt: "2024-12-01",
    tags: ["React", "TypeScript", "Architecture"],
    featured: true,
  },
  {
    id: "2",
    title: "Modern CSS Techniques Every Developer Should Know",
    excerpt: "Explore the latest CSS features including container queries, cascade layers, and the :has() selector that are changing how we write styles.",
    content: "# Modern CSS Techniques Every Developer Should Know\n\nCSS has evolved significantly over the past few years. Let's explore some modern techniques.\n\n## Container Queries\n\nContainer queries allow you to style elements based on their container's size rather than the viewport.\n\n## Cascade Layers\n\nLayers give you more control over the cascade, making it easier to manage styles from different sources.\n\n## The :has() Selector\n\nOften called the 'parent selector', :has() opens up new possibilities for styling based on content.\n\n## Conclusion\n\nThese modern CSS features make writing maintainable styles easier than ever.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=600&fit=crop",
    readTime: 6,
    publishedAt: "2024-11-15",
    tags: ["CSS", "Web Development", "Frontend"],
    featured: false,
  },
  {
    id: "3",
    title: "Getting Started with Server Components in Next.js",
    excerpt: "A comprehensive guide to understanding and implementing React Server Components in your Next.js applications.",
    content: "# Getting Started with Server Components in Next.js\n\nReact Server Components are a game-changer for building performant web applications.\n\n## What are Server Components?\n\nServer Components render on the server and send HTML to the client, reducing the JavaScript bundle size.\n\n## When to Use Server Components\n\nUse them for data fetching, accessing backend resources, and heavy computations.\n\n## Best Practices\n\n- Keep interactive elements in Client Components\n- Use Server Components for data fetching\n- Compose Server and Client Components effectively",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    readTime: 10,
    publishedAt: "2024-11-01",
    tags: ["Next.js", "React", "Server Components"],
    featured: false,
  },
  {
    id: "4",
    title: "Mastering Git: Advanced Workflows for Teams",
    excerpt: "Level up your Git skills with advanced branching strategies, rebasing techniques, and collaboration workflows for development teams.",
    content: "# Mastering Git: Advanced Workflows for Teams\n\nGit is essential for modern development. Let's explore advanced workflows.\n\n## Branching Strategies\n\nLearn about Git Flow, GitHub Flow, and trunk-based development.\n\n## Rebasing vs Merging\n\nUnderstand when to use each approach for cleaner history.\n\n## Collaboration Tips\n\n- Write meaningful commit messages\n- Use pull request templates\n- Set up branch protection rules",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
    readTime: 7,
    publishedAt: "2024-10-20",
    tags: ["Git", "DevOps", "Collaboration"],
    featured: false,
  },
];

export const mockSkills: Skill[] = [
  { id: "1", name: "Kotlin", category: "android", icon: "kotlin" },
  { id: "2", name: "Java", category: "android", icon: "java" },
  { id: "3", name: "Jetpack Compose", category: "android", icon: "compose" },
  { id: "4", name: "Android SDK", category: "android", icon: "android" },

  { id: "5", name: "Clean Architecture", category: "architecture", icon: "layers" },
  { id: "6", name: "MVI", category: "architecture", icon: "layers" },
  { id: "7", name: "MVVM", category: "architecture", icon: "layers" },
  { id: "8", name: "Coroutines & Flow", category: "architecture", icon: "flow" },
  
  { id: "9", name: "Git", category: "tools", icon: "git" },
  { id: "10", name: "Agile", category: "tools", icon: "agile" },
  { id: "11", name: "Dependency Injection", category: "tools", icon: "layers" },
  { id: "12", name: "Project Management", category: "tools", icon: "aws" },

  { id: "13", name: "Material Design 3", category: "design", icon: "material" },
  { id: "14", name: "Figma", category: "design", icon: "figma" },
  { id: "15", name: "UI/UX Design", category: "design", icon: "mobile" },

];

export const mockExperience: Experience[] = [
  {
    id: "1",
    title: "Lead Android Developer",
    company: "Rand Ltd",
    location: "Damascus, Syria",
    startDate: "2022",
    endDate: "2025",
    description: "Led the migration of a legacy Java application to Flutter while continuing hands-on development on the Java codebase, redesigned a 50+ screen mobile app, implemented Firebase Cloud Messaging with deep links, built in-app update flows, and enforced paid-feature access control.",
    current: true,
  },
  {
    id: "2",
    title: "Android Developer",
    company: "Rand Ltd",
    location: "Damascus, Syria",
    startDate: "2021",
    endDate: "2022",
    description: "Built and maintained the DoReMi app, implemented an ExoPlayer-based audio service with offline support, stabilized the codebase to reduce crashes by 90%, and optimized architecture to decrease app size by 30%.",
    current: false,
  },
];

export const mockEducation: Education[] = [
  {
    id: "1",
    degree: "M.S. in Business Administration",
    institution: "Syrian Virtual University",
    location: "Damascus, Syria",
    startDate: "2021",
    endDate: "2023",
    description: "",
  },
  {
    id: "2",
    degree: "B.S. in Computer Engineering",
    institution: "Tishreen University",
    location: "Lattakia, Syria",
    startDate: "2008",
    endDate: "2015",
    description: "",
  },
];
