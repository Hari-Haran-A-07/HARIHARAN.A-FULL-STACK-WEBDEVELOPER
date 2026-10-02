import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Sparkles,
  ExternalLink,
  Github,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers,
  Cpu,
  Server,
  Database,
  ShieldCheck,
  TrendingUp,
  Terminal,
  Activity,
  Code2,
  Copy,
  ChevronRight,
  Home,
  Monitor,
  Calendar,
  Tag,
} from "lucide-react";
import { projectData, profileData } from "@/data/portfolioData";
import ProjectDetailClient from "./ProjectDetailClient";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return projectData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projectData.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: "Project Not Found | Hari Haran A",
    };
  }

  return {
    title: `${project.title} — ${project.subtitle} | Hari Haran A`,
    description: project.summary,
    keywords: [
      project.title,
      project.category,
      ...project.technologies,
      "Hari Haran A",
      "Software Engineer",
      "Full Stack Developer",
    ],
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.summary,
      type: "article",
      url: `https://hari-haran.dev/projects/${project.id}`,
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const projectIndex = projectData.findIndex((p) => p.id === params.id);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectData[projectIndex];
  const prevProject =
    projectIndex > 0 ? projectData[projectIndex - 1] : projectData[projectData.length - 1];
  const nextProject =
    projectIndex < projectData.length - 1 ? projectData[projectIndex + 1] : projectData[0];

  // Related projects
  const relatedProjects = projectData
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <ProjectDetailClient
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
      relatedProjects={relatedProjects}
    />
  );
}
