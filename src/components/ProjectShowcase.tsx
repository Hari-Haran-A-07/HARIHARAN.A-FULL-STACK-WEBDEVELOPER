"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import { projectData } from "@/data/portfolioData";
import { ProjectItem } from "@/types";
import ProjectModal from "./ProjectModal";

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-28 px-6 md:px-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>05 / SELECTED ENGINEERING PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
              FEATURED
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
                LABORATORY.
              </span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Production systems, microservices architectures, real-time IoT pipelines, and high-performance
              web platforms engineered by Hari Haran A.
            </p>
          </div>

          <div className="text-right hidden md:block font-mono text-xs text-neutral-400">
            <span>[ 06 VERIFIED PROJECTS ]</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl bg-gradient-to-b from-[#121212] via-[#0A0A0A] to-[#050505] border border-white/10 hover:border-[#A100FF]/70 transition-all duration-300 shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Card Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A100FF]/10 rounded-full blur-2xl group-hover:bg-[#A100FF]/25 transition-colors pointer-events-none" />

              <div className="p-7 space-y-5">
                {/* Top Number & Category */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#A100FF] tracking-wider px-2.5 py-1 rounded bg-[#A100FF]/10 border border-[#A100FF]/20">
                    {project.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-neutral-400">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight uppercase group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[#C084FC] uppercase tracking-wide mt-1">
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
              <div className="p-6 pt-4 border-t border-white/10 bg-black/40 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-mono text-white group-hover:text-[#C084FC] font-bold uppercase tracking-wider transition-colors"
                >
                  <span>VIEW SPECS</span>
                  <Maximize2 className="w-3.5 h-3.5 text-[#A100FF]" />
                </button>

                <div className="flex items-center gap-2">
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
                      className="p-2 rounded-lg bg-[#A100FF]/20 border border-[#A100FF]/40 text-[#C084FC] hover:bg-[#A100FF] hover:text-white transition-all"
                      title="View Live Platform"
                      aria-label={`${project.title} Live Platform`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
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
