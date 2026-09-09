"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { ProjectItem } from "@/types";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-gradient-to-b from-[#141414] via-[#0D0D0D] to-[#080808] border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-6 sm:px-8 border-b border-white/10 bg-[#121212]/80 sticky top-0 z-20 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#A100FF] px-2.5 py-1 rounded bg-[#A100FF]/15 border border-[#A100FF]/30 uppercase">
                {project.number} / {project.category}
              </span>
              {project.completion && (
                <span className="font-mono text-xs text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                  {project.completion}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#A100FF]"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
            {/* Title & Subtitle */}
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg text-neutral-400 font-mono mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider rounded hover:bg-neutral-200 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#A100FF] text-white font-mono font-bold text-xs uppercase tracking-wider rounded hover:bg-[#7C3AED] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LIVE PLATFORM</span>
                </a>
              )}
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-black/50 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs text-rose-400 uppercase font-bold">
                  <span>THE ENGINEERING CHALLENGE</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-black/50 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase font-bold">
                  <span>THE ARCHITECTURAL SOLUTION</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                <Workflow className="w-4 h-4 text-[#A100FF]" />
                <span>SYSTEM ARCHITECTURE & DESIGN DECISIONS</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architecture.map((arch, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-neutral-900/60 border border-white/5 flex items-start gap-2.5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A100FF] shrink-0 mt-1.5" />
                    <span className="text-xs text-neutral-300 leading-relaxed">{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A100FF]" />
                <span>KEY FEATURES IMPLEMENTED</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="flex items-start gap-2 text-xs text-neutral-300 leading-relaxed"
                  >
                    <span className="text-[#C084FC] font-mono">▸</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Measurable Performance Metrics */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-[#A100FF]/10 via-black to-black border border-[#A100FF]/30">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#C084FC] mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>MEASURED RESULTS & BENCHMARKS</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="font-mono text-xs text-white">
                    <div className="text-neutral-400 text-[10px] uppercase">Benchmark 0{mIdx + 1}</div>
                    <div className="font-bold text-sm text-[#C084FC] mt-0.5">{m}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                TECHNOLOGIES UTILIZED:
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded bg-neutral-900 border border-white/10 font-mono text-xs text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
