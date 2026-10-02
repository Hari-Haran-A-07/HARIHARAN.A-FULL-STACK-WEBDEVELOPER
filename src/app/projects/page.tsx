"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ExternalLink,
  Github,
  Search,
  Filter,
  Layers,
  Code2,
  Maximize2,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Activity,
  Play,
  Monitor,
  LayoutGrid,
  List,
  SlidersHorizontal,
  Home,
  ChevronRight,
  Star,
  GitFork,
  Cpu,
} from "lucide-react";
import { projectData, githubReposData, profileData } from "@/data/portfolioData";
import { ProjectItem } from "@/types";
import LiveDemoSandbox from "@/components/LiveDemoSandbox";
import ProjectModal from "@/components/ProjectModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

function ProjectsContent() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("filter") === "live" ? "LIVE" : "ALL";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialFilter);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("ALL");
  const [activeViewMode, setActiveViewMode] = useState<"cards" | "sandbox" | "table">("cards");
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const categories = [
    { id: "ALL", label: "ALL WORK", count: projectData.length },
    {
      id: "LIVE",
      label: "🟢 LIVE DEMOS (ACTIVE)",
      count: projectData.filter((p) => Boolean(p.liveDemoUrl)).length,
    },
    {
      id: "FULL_STACK",
      label: "FULL STACK & MICROSERVICES",
      count: projectData.filter(
        (p) =>
          p.category.toLowerCase().includes("full stack") ||
          p.category.toLowerCase().includes("microservices") ||
          p.category.toLowerCase().includes("distributed")
      ).length,
    },
    {
      id: "GAMING",
      label: "WEBGL & GAMING",
      count: projectData.filter(
        (p) =>
          p.category.toLowerCase().includes("webgl") ||
          p.category.toLowerCase().includes("game")
      ).length,
    },
    {
      id: "SPORTS",
      label: "SPORTS TECH & AUCTIONS",
      count: projectData.filter(
        (p) =>
          p.category.toLowerCase().includes("sports") ||
          p.category.toLowerCase().includes("auction")
      ).length,
    },
    {
      id: "IOT",
      label: "IOT & TELEMATICS",
      count: projectData.filter((p) => p.category.toLowerCase().includes("iot")).length,
    },
    {
      id: "DESIGN",
      label: "DESIGN & UI SYSTEMS",
      count: projectData.filter(
        (p) =>
          p.category.toLowerCase().includes("design") ||
          p.category.toLowerCase().includes("ui/ux") ||
          p.category.toLowerCase().includes("event") ||
          p.category.toLowerCase().includes("corporate")
      ).length,
    },
    {
      id: "TOOLS",
      label: "DEVOPS & CORE ALGORITHMS",
      count: projectData.filter(
        (p) =>
          p.category.toLowerCase().includes("devops") ||
          p.category.toLowerCase().includes("algorithms") ||
          p.category.toLowerCase().includes("experiments")
      ).length,
    },
  ];

  const languages = ["ALL", "TypeScript", "JavaScript", "Java", "Python", "HTML"];

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projectData.filter((project) => {
      // Search match
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      // Category match
      let matchesCategory = true;
      if (selectedCategory === "LIVE") {
        matchesCategory = Boolean(project.liveDemoUrl);
      } else if (selectedCategory === "FULL_STACK") {
        matchesCategory =
          project.category.toLowerCase().includes("full stack") ||
          project.category.toLowerCase().includes("microservices") ||
          project.category.toLowerCase().includes("distributed");
      } else if (selectedCategory === "GAMING") {
        matchesCategory =
          project.category.toLowerCase().includes("webgl") ||
          project.category.toLowerCase().includes("game");
      } else if (selectedCategory === "SPORTS") {
        matchesCategory =
          project.category.toLowerCase().includes("sports") ||
          project.category.toLowerCase().includes("auction");
      } else if (selectedCategory === "IOT") {
        matchesCategory = project.category.toLowerCase().includes("iot");
      } else if (selectedCategory === "DESIGN") {
        matchesCategory =
          project.category.toLowerCase().includes("design") ||
          project.category.toLowerCase().includes("ui/ux") ||
          project.category.toLowerCase().includes("event") ||
          project.category.toLowerCase().includes("corporate");
      } else if (selectedCategory === "TOOLS") {
        matchesCategory =
          project.category.toLowerCase().includes("devops") ||
          project.category.toLowerCase().includes("algorithms") ||
          project.category.toLowerCase().includes("experiments");
      }

      // Language match
      let matchesLanguage = true;
      if (selectedLanguage !== "ALL") {
        matchesLanguage = project.technologies.some(
          (t) => t.toLowerCase() === selectedLanguage.toLowerCase()
        );
      }

      return matchesSearch && matchesCategory && matchesLanguage;
    });
  }, [searchQuery, selectedCategory, selectedLanguage]);

  const liveProjectsCount = projectData.filter((p) => Boolean(p.liveDemoUrl)).length;

  return (
    <div className="min-h-screen bg-[#07070A] text-[#F7F7F5] selection:bg-[#A100FF] selection:text-white relative font-sans">
      {/* Fixed Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Landmark */}
      <main id="main-content" className="pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 mb-8">
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <span className="text-[#A100FF] font-bold">PROJECTS DIRECTORY</span>
        </div>

        {/* Page Hero Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8 border-b border-white/10 pb-12">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A100FF]/10 border border-[#A100FF]/25 font-mono text-xs text-[#C084FC] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#A100FF]" />
              <span>PRODUCTION WORK • GITHUB REPOSITORIES • LIVE DEMOS</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
              ENGINEERING &amp;
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C084FC] to-[#A100FF]">
                PROJECTS HUB.
              </span>
            </h1>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              Complete archive of 21+ engineering projects, production microservices, interactive 3D WebGL game engines, and verified open-source GitHub repositories by @Hari-Haran-A-07.
            </p>
          </div>

          {/* Telemetry Metrics Badges */}
          <div className="grid grid-cols-3 gap-3 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-[#111116] border border-white/10 text-center">
              <div className="text-2xl font-bold text-white font-heading">
                {projectData.length}
              </div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-wide">
                Projects
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#111116] border border-emerald-500/30 text-center relative overflow-hidden">
              <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <div className="text-2xl font-bold text-emerald-400 font-heading">
                {liveProjectsCount}
              </div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-wide">
                Live Demos
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#111116] border border-white/10 text-center">
              <div className="text-2xl font-bold text-[#C084FC] font-heading">
                25
              </div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-wide">
                GitHub Repos
              </div>
            </div>
          </div>
        </div>

        {/* View Switcher & Primary Controls Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          {/* View Modes Tabs */}
          <div className="flex items-center p-1 rounded-xl bg-[#111116] border border-white/10 font-mono text-xs">
            <button
              onClick={() => setActiveViewMode("cards")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeViewMode === "cards"
                  ? "bg-[#A100FF] text-white shadow-[0_0_15px_rgba(161,0,255,0.4)]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>GRID SHOWCASE</span>
            </button>

            <button
              onClick={() => setActiveViewMode("sandbox")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeViewMode === "sandbox"
                  ? "bg-[#A100FF] text-white shadow-[0_0_15px_rgba(161,0,255,0.4)]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="flex items-center gap-1.5">
                <span>LIVE DEMO SANDBOX</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </span>
            </button>

            <button
              onClick={() => setActiveViewMode("table")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeViewMode === "table"
                  ? "bg-[#A100FF] text-white shadow-[0_0_15px_rgba(161,0,255,0.4)]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>GITHUB TELEMETRY</span>
            </button>
          </div>

          {/* Quick Stats Pill */}
          <div className="font-mono text-xs text-neutral-400">
            SHOWING{" "}
            <span className="text-white font-bold">{filteredProjects.length}</span> OF{" "}
            <span className="text-neutral-300">{projectData.length}</span> PROJECTS
          </div>
        </div>

        {/* Search & Category Filter Section */}
        <div className="space-y-4 mb-10">
          {/* Search Input Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search by project name, microservice, WebGL, Spring Boot, React, Python, or feature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#111116] border border-white/10 text-white placeholder-neutral-500 font-mono text-xs sm:text-sm focus:outline-none focus:border-[#A100FF] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-neutral-400 hover:text-white px-2 py-1 bg-white/5 rounded"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                    isSelected
                      ? "bg-white text-black font-bold border-white shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                      : "bg-[#111116] text-neutral-400 border-white/10 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded ${
                      isSelected ? "bg-black/15 text-black" : "bg-white/5 text-neutral-400"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Secondary Language Tags Filter */}
          <div className="flex items-center gap-2 font-mono text-xs overflow-x-auto pb-1 scrollbar-none">
            <span className="text-neutral-500 uppercase text-[11px] whitespace-nowrap flex items-center gap-1">
              <Code2 className="w-3 h-3" />
              <span>STACK:</span>
            </span>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                  selectedLanguage === lang
                    ? "bg-[#A100FF]/25 border border-[#A100FF] text-[#C084FC] font-bold"
                    : "bg-white/5 text-neutral-400 hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* VIEW MODE 1: Interactive Live Demo Sandbox View */}
        {activeViewMode === "sandbox" && (
          <div className="space-y-6 mb-16">
            <div className="p-4 rounded-xl bg-[#A100FF]/10 border border-[#A100FF]/25 font-mono text-xs text-neutral-300 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-white font-bold">INTERACTIVE SIMULATOR ACTIVE</span>
                <span className="text-neutral-500">|</span>
                <span>Select any live deployed project to interact with it directly inside the device frame.</span>
              </div>
              <button
                onClick={() => setActiveViewMode("cards")}
                className="text-[#C084FC] hover:underline font-bold"
              >
                Switch to Grid View →
              </button>
            </div>

            <LiveDemoSandbox projects={projectData} />
          </div>
        )}

        {/* VIEW MODE 2: Cards Grid Showcase */}
        {activeViewMode === "cards" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="group relative rounded-2xl bg-gradient-to-b from-[#141418] via-[#0E0E12] to-[#0A0A0E] border border-white/10 hover:border-[#A100FF]/70 transition-all duration-300 shadow-2xl flex flex-col justify-between overflow-hidden"
                >
                  {/* Card Glow */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#A100FF]/10 rounded-full blur-2xl group-hover:bg-[#A100FF]/25 transition-colors pointer-events-none" />

                  <div className="p-7 space-y-5">
                    {/* Top Number & Badges */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#A100FF] px-2.5 py-1 rounded-md bg-[#A100FF]/10 border border-[#A100FF]/25">
                          {project.number}
                        </span>
                        {project.badge && (
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${
                              project.badge.includes("Live")
                                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                                : "bg-purple-500/10 border-purple-500/30 text-[#C084FC]"
                            }`}
                          >
                            {project.badge}
                          </span>
                        )}
                      </div>

                      <span className="font-mono text-[11px] uppercase text-neutral-400">
                        {project.year}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="font-mono text-[11px] uppercase text-neutral-400 tracking-wider">
                      {project.category}
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-white tracking-tight uppercase group-hover:text-[#C084FC] transition-colors">
                        <Link href={`/projects/${project.id}`}>{project.title}</Link>
                      </h2>
                      <p className="text-xs font-mono text-neutral-400 uppercase tracking-wide mt-1 line-clamp-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] font-mono text-neutral-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-6 pt-4 border-t border-white/10 bg-black/40 flex items-center justify-between gap-3">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex items-center gap-1.5 text-xs font-mono text-white group-hover:text-[#C084FC] font-bold uppercase tracking-wider transition-colors"
                    >
                      <span>CASE STUDY</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#A100FF]" />
                    </Link>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProjectForModal(project)}
                        className="p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-[#A100FF] transition-all"
                        title="Quick Specs Modal"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-[#A100FF] transition-all"
                          title="View GitHub Repository"
                          aria-label={`${project.title} GitHub`}
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-black font-mono text-xs font-bold transition-all flex items-center gap-1.5"
                          title="Launch Live Application"
                        >
                          <span>DEMO</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* VIEW MODE 3: GitHub Telemetry Table View */}
        {activeViewMode === "table" && (
          <div className="rounded-2xl bg-[#0E0E14] border border-white/10 overflow-hidden shadow-2xl">
            <div className="p-6 bg-[#14141A] border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="font-heading text-lg font-bold text-white uppercase">
                  GITHUB REPOSITORY TELEMETRY DIRECTORY
                </h3>
                <p className="font-mono text-xs text-neutral-400">
                  All 25 synchronized public repositories for @Hari-Haran-A-07
                </p>
              </div>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1C1C26] border border-white/10 text-white font-mono text-xs rounded-lg hover:border-[#A100FF]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>OPEN GITHUB PROFILE</span>
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs text-neutral-300">
                <thead className="bg-[#121218] border-b border-white/10 text-neutral-400 uppercase text-[11px]">
                  <tr>
                    <th className="p-4 pl-6">Repository</th>
                    <th className="p-4">Language</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Description</th>
                    <th className="p-4">Live Status</th>
                    <th className="p-4 pr-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {githubReposData.map((repo) => (
                    <tr
                      key={repo.id}
                      className="hover:bg-white/5 transition-colors group"
                    >
                      <td className="p-4 pl-6 font-bold text-white group-hover:text-[#C084FC]">
                        <a
                          href={repo.htmlUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-1.5"
                        >
                          <Terminal className="w-3.5 h-3.5 text-[#A100FF]" />
                          <span>{repo.name}</span>
                        </a>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px]">
                          {repo.language}
                        </span>
                      </td>
                      <td className="p-4 text-neutral-400 text-[11px]">
                        {repo.category}
                      </td>
                      <td className="p-4 text-neutral-400 max-w-xs truncate text-[11px]">
                        {repo.description}
                      </td>
                      <td className="p-4">
                        {repo.homepage ? (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>LIVE</span>
                          </span>
                        ) : (
                          <span className="text-neutral-500 text-[10px]">OPEN SOURCE</span>
                        )}
                      </td>
                      <td className="p-4 pr-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {repo.homepage && (
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2.5 py-1 rounded bg-[#A100FF]/20 border border-[#A100FF]/40 text-[#C084FC] hover:bg-[#A100FF] hover:text-white transition-all text-[11px]"
                              title="Launch Live Demo"
                            >
                              DEMO ↗
                            </a>
                          )}
                          <a
                            href={repo.htmlUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded bg-white/5 border border-white/10 hover:border-[#A100FF] transition-all text-neutral-300 hover:text-white"
                            title="View on GitHub"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty Search Fallback */}
        {filteredProjects.length === 0 && (
          <div className="py-24 text-center space-y-4 font-mono">
            <Code2 className="w-12 h-12 text-neutral-600 mx-auto" />
            <h4 className="text-lg text-white font-bold">NO MATCHING PROJECTS FOUND</h4>
            <p className="text-xs text-neutral-400 max-w-md mx-auto">
              No project matched your current search criteria: &quot;{searchQuery}&quot;. Try resetting your filters or search keyword.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("ALL");
                setSelectedLanguage("ALL");
              }}
              className="px-4 py-2 rounded-lg bg-[#A100FF] text-white text-xs font-bold uppercase"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Specs Quick Modal */}
      <ProjectModal
        project={selectedProjectForModal}
        onClose={() => setSelectedProjectForModal(null)}
      />

      {/* In-App Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#07070A] flex items-center justify-center font-mono text-neutral-400 text-xs">
          LOADING PROJECTS DIRECTORY...
        </div>
      }
    >
      <ProjectsContent />
    </Suspense>
  );
}
