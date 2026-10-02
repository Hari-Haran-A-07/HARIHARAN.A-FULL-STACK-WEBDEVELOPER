"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Code2,
  Terminal,
  Activity,
  Layers,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  Monitor,
  LayoutGrid,
} from "lucide-react";
import { projectData } from "@/data/portfolioData";
import { ProjectItem } from "@/types";
import ProjectModal from "./ProjectModal";

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Take the first 6 featured projects for home showcase
  const featuredProjects = projectData.slice(0, 6);
  const liveDemosCount = projectData.filter((p) => Boolean(p.liveDemoUrl)).length;

  return (
    <section id="projects" className="relative py-28 px-6 md:px-12 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02 / FEATURED ENGINEERING &amp; PRODUCTION APPS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
              FEATURED
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
                LABORATORY.
              </span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Production systems, 3D WebGL game engines, high-concurrency microservices, and live deployed web applications with verified performance telemetry.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link
              href="/projects?filter=live"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold hover:bg-emerald-500 hover:text-black transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{liveDemosCount} LIVE INTERACTIVE DEMOS</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#A100FF]/15 border border-[#A100FF]/30 text-[#C084FC] hover:bg-[#A100FF] hover:text-white font-mono text-xs font-bold transition-all"
            >
              <span>VIEW ALL {projectData.length} PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl bg-gradient-to-b from-[#141414] via-[#0E0E0E] to-[#0A0A0A] border border-white/10 hover:border-[#A100FF]/70 transition-all duration-300 shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Card Ambient Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#A100FF]/10 rounded-full blur-2xl group-hover:bg-[#A100FF]/25 transition-colors pointer-events-none" />

              <div className="p-7 space-y-5">
                {/* Top Number & Category */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#A100FF] tracking-wider px-2.5 py-1 rounded-md bg-[#A100FF]/10 border border-[#A100FF]/25">
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
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white tracking-tight uppercase group-hover:text-white transition-colors">
                    <Link href={`/projects/${project.id}`}>{project.title}</Link>
                  </h3>
                  <p className="text-xs font-mono text-[#C084FC] uppercase tracking-wide mt-1 line-clamp-1">
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

              {/* Card Footer Actions */}
              <div className="p-6 pt-4 border-t border-white/10 bg-black/40 flex items-center justify-between gap-2">
                <Link
                  href={`/projects/${project.id}`}
                  className="flex items-center gap-1.5 text-xs font-mono text-white group-hover:text-[#C084FC] font-bold uppercase tracking-wider transition-colors"
                >
                  <span>CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A100FF]" />
                </Link>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
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
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-black font-mono text-xs font-bold transition-all flex items-center gap-1"
                      title="Launch Live Application"
                      aria-label={`${project.title} Live Application`}
                    >
                      <span>DEMO</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Large Multi-Page Projects Hub Callout Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#161622] via-[#12121A] to-[#0A0A10] border border-[#A100FF]/30 p-8 sm:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A100FF]/15 border border-[#A100FF]/30 font-mono text-xs text-[#C084FC]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DEDICATED MULTI-PAGE DIRECTORY &amp; LIVE DEMO SANDBOX</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              EXPLORE ALL 21+ PROJECTS &amp; 25 GITHUB REPOSITORIES
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Browse our complete catalog filtered by category, search tech stacks in real-time, test live games and deployed apps inside the device sandbox emulator, and inspect full architecture case studies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full md:w-auto">
            <Link
              href="/projects?filter=live"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.35)]"
            >
              <Monitor className="w-4 h-4" />
              <span>TEST LIVE DEMOS</span>
            </Link>

            <Link
              href="/projects"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#A100FF] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#8B00DC] transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(161,0,255,0.4)]"
            >
              <span>OPEN PROJECTS HUB</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
