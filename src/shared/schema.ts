import { z } from "zod";

export const users = [
  { id: "1", username: "john_doe", password: "secret" },
  { id: "2", username: "jane_smith", password: "secret" },
];

export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = (typeof users)[number];
// Project schema
export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  longDescription: z.string().optional(),
  image: z.string(),
  category: z.string(),
  technologies: z.array(z.string()),
  liveUrl: z.string().optional(),
  githubUrl: z.string().optional(),
  featured: z.boolean().default(false),
});

export type Project = z.infer<typeof projectSchema>;
export const insertProjectSchema = projectSchema.omit({ id: true });
export type InsertProject = z.infer<typeof insertProjectSchema>;

// Article schema
export const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  excerpt: z.string(),
  content: z.string(),
  image: z.string(),
  readTime: z.number(),
  publishedAt: z.string(),
  tags: z.array(z.string()),
  featured: z.boolean().default(false),
});

export type Article = z.infer<typeof articleSchema>;
export const insertArticleSchema = articleSchema.omit({ id: true });
export type InsertArticle = z.infer<typeof insertArticleSchema>;

// Skill schema
export const skillSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(["frontend", "backend", "tools", "design"]),
  icon: z.string(),
});

export type Skill = z.infer<typeof skillSchema>;

// Experience schema
export const experienceSchema = z.object({
  id: z.string(),
  title: z.string(),
  company: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  description: z.string(),
  current: z.boolean().default(false),
});

export type Experience = z.infer<typeof experienceSchema>;

// Education schema
export const educationSchema = z.object({
  id: z.string(),
  degree: z.string(),
  institution: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string().optional(),
});

export type Education = z.infer<typeof educationSchema>;

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

// Profile schema
export const profileSchema = z.object({
  name: z.string(),
  title: z.string(),
  tagline: z.string(),
  bio: z.string(),
  email: z.string(),
  location: z.string(),
  avatar: z.string(),
  resumeUrl: z.string().optional(),
  social: z.object({
    github: z.string().optional(),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
  }),
});

export type Profile = z.infer<typeof profileSchema>;
