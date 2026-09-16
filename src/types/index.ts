export interface ProfileData {
  name: string;
  titles: string[];
  bio: string;
  tagline: string;
  statement: string;
  location: string;
  coordinates: string;
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  resumePdfUrl: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  verifiedSource: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  highlights: string[];
  technologies: string[];
  certificateUrl?: string;
}

export interface CaseStudySection {
  overview: string;
  problem: string;
  solution: string;
  designDecisions: string[];
  architecture: string[];
  technologyStack: { category: string; items: string[] }[];
  developmentFeatures: string[];
  challengesAndOptimizations: string[];
  verifiedResults: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  completion?: string;
  technologies: string[];
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  keyFeatures: string[];
  metrics: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  badge?: string;
  gradient?: string;
  caseStudy?: CaseStudySection;
}

export interface SkillNode {
  name: string;
  category: string;
  status: "PRIMARY" | "USED IN PROJECTS" | "WORKING KNOWLEDGE" | "EXPLORING";
  projects: string[];
  icon?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  accentColor: string;
  skills: SkillNode[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
  imagePreview?: string;
  isVerifiedAsset?: boolean;
  description: string;
  topics: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  score?: string;
  scoreLabel?: string;
  highlights: string[];
}

export interface ArchitectureLayer {
  step: string;
  title: string;
  tech: string[];
  description: string;
  dataFlow: string;
  keyResponsibilities: string[];
}

export interface NavItem {
  number: string;
  label: string;
  href: string;
}

export interface GithubRepoItem {
  id: number | string;
  name: string;
  fullName: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
  htmlUrl: string;
  homepage?: string | null;
  category: "FULL STACK" | "FRONTEND" | "BACKEND" | "PYTHON" | "DATA" | "DESIGN" | "TOOLS";
  topics: string[];
  isFeatured?: boolean;
}

export interface GithubProfileStats {
  publicRepos: number;
  totalCommitsEst: string;
  primaryLanguages: { name: string; percentage: number; color: string }[];
  status: string;
}
