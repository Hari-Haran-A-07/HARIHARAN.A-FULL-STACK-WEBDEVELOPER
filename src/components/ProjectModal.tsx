"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  Sparkles,
  Layers,
  Cpu,
  Server,
  Database,
  CheckCircle2,
  TrendingUp,
  ShieldAlert,
  Code2,
  Terminal,
  Activity,
} from "lucide-react";
import { ProjectItem } from "@/types";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "tech" | "results">("overview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const caseStudy = project.caseStudy;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Window Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E0E0E] border border-white/15 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden z-10"
        >
          {/* Top Modal Header */}
          <div className="p-6 sm:p-8 border-b border-white/10 bg-[#141414] flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[#A100FF] px-2.5 py-0.5 rounded bg-[#A100FF]/15 border border-[#A100FF]/30">
                  PROJECT {project.number}
                </span>
                <span className="font-mono text-xs text-neutral-400 uppercase">
                  {project.category}
                </span>
                {project.badge && (
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-bold uppercase">
                    {project.badge}
                  </span>
                )}
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                {project.title}
              </h2>
              <p className="font-mono text-xs text-[#C084FC] uppercase tracking-wider">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:border-[#A100FF] transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Navigation Tabs */}
          <div className="flex items-center gap-2 px-6 sm:px-8 py-3 bg-[#111111] border-b border-white/5 font-mono text-xs overflow-x-auto">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-3 py-1.5 rounded-md uppercase tracking-wider transition-colors shrink-0 ${
                activeTab === "overview"
                  ? "bg-[#A100FF] text-white font-bold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              01 — OVERVIEW & PROBLEM
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-3 py-1.5 rounded-md uppercase tracking-wider transition-colors shrink-0 ${
                activeTab === "architecture"
                  ? "bg-[#A100FF] text-white font-bold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              02 — ARCHITECTURE & DESIGN
            </button>
            <button
              onClick={() => setActiveTab("tech")}
              className={`px-3 py-1.5 rounded-md uppercase tracking-wider transition-colors shrink-0 ${
                activeTab === "tech"
                  ? "bg-[#A100FF] text-white font-bold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              03 — TECH & FEATURES
            </button>
            <button
              onClick={() => setActiveTab("results")}
              className={`px-3 py-1.5 rounded-md uppercase tracking-wider transition-colors shrink-0 ${
                activeTab === "results"
                  ? "bg-[#A100FF] text-white font-bold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              04 — RESULTS & CHALLENGES
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#A100FF] font-semibold">
                    01 — EXECUTIVE OVERVIEW
                  </span>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {caseStudy?.overview || project.summary}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#C084FC] font-semibold">
                    02 — PROBLEM STATEMENT
                  </span>
                  <p className="text-sm text-neutral-300 leading-relaxed bg-[#141414] p-4 rounded-xl border border-white/5">
                    {caseStudy?.problem || project.problem}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                    03 — ENGINEERED SOLUTION
                  </span>
                  <p className="text-sm text-neutral-300 leading-relaxed bg-[#141414] p-4 rounded-xl border border-white/5">
                    {caseStudy?.solution || project.solution}
                  </p>
                </div>
              </div>
            )}

            {activeTab === "architecture" && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#A100FF] font-semibold">
                    04 — SYSTEM ARCHITECTURE TOPOLOGY
                  </span>
                  <div className="space-y-2">
                    {(caseStudy?.architecture || project.architecture).map((arch, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-3 p-3 rounded-lg bg-[#141414] border border-white/5 text-xs font-mono text-neutral-200">
                        <Server className="w-4 h-4 text-[#A100FF] shrink-0 mt-0.5" />
                        <span>{arch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {caseStudy?.designDecisions && (
                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#C084FC] font-semibold">
                      05 — DESIGN SYSTEM & UI/UX DECISIONS
                    </span>
                    <div className="space-y-2">
                      {caseStudy.designDecisions.map((decision, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3 p-3 rounded-lg bg-[#141414] border border-white/5 text-xs text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                          <span>{decision}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "tech" && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#A100FF] font-semibold">
                    06 — TECHNOLOGY STACK BREAKDOWN
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {caseStudy?.technologyStack ? (
                      caseStudy.technologyStack.map((stackGroup) => (
                        <div key={stackGroup.category} className="p-4 rounded-xl bg-[#141414] border border-white/5 space-y-2">
                          <span className="font-mono text-xs text-[#C084FC] uppercase font-bold">
                            {stackGroup.category}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {stackGroup.items.map((tech) => (
                              <span key={tech} className="px-2 py-0.5 rounded bg-white/5 text-xs font-mono text-neutral-200">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 rounded-xl bg-[#141414] border border-white/5">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-2.5 py-1 rounded bg-white/5 font-mono text-xs text-neutral-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#C084FC] font-semibold">
                    07 — DEVELOPMENT & KEY CAPABILITIES
                  </span>
                  <div className="space-y-2">
                    {(caseStudy?.developmentFeatures || project.keyFeatures).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 p-3 rounded-lg bg-[#141414] border border-white/5 text-xs text-neutral-300">
                        <Code2 className="w-4 h-4 text-[#A100FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "results" && (
              <div className="space-y-6">
                {caseStudy?.challengesAndOptimizations && (
                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#A100FF] font-semibold">
                      08 — TECHNICAL CHALLENGES & OPTIMIZATIONS
                    </span>
                    <div className="space-y-2">
                      {caseStudy.challengesAndOptimizations.map((item, cIdx) => (
                        <div key={cIdx} className="p-4 rounded-xl bg-[#141414] border border-white/5 text-xs text-neutral-300 leading-relaxed font-mono">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                    09 — VERIFIED METRICS & PRODUCTION IMPACT
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(caseStudy?.verifiedResults || project.metrics).map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-300 font-mono">
                        <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Bottom Sticky CTA Footer */}
          <div className="p-6 border-t border-white/10 bg-[#141414] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
              <Terminal className="w-4 h-4 text-[#A100FF]" />
              <span>STATUS: PRODUCTION VERIFIED</span>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-neutral-900 border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:border-[#A100FF] transition-all"
                >
                  <Github className="w-4 h-4 text-[#A100FF]" />
                  <span>VIEW REPO</span>
                </a>
              )}

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#A100FF] to-[#7C3AED] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:opacity-90 shadow-lg shadow-[#A100FF]/25 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LIVE DEMO</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
