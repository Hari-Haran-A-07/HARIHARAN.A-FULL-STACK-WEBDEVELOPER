export interface ProfileData {
  name: string;
  titles: string[];
  bio: string;
  tagline: string;
  statement: string;
  location: string;
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
}

export interface SkillNode {
  name: string;
  level?: string;
  icon?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
  accentColor: string;
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
}

export interface NavItem {
  label: string;
  href: string;
}
