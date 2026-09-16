"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  Award,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { experienceData } from "@/data/portfolioData";
import { ExperienceItem } from "@/types";

interface ExperienceTimelineProps {
  onOpenCertificate: (certUrl: string, title: string) => void;
}

export default function ExperienceTimeline({ onOpenCertificate }: ExperienceTimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>("exp-techzon");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="relative py-28 px-6 md:px-12 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 / PROFESSIONAL TRAJECTORY</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
              ENGINEERING
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
                EXPERIENCE.
              </span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Proven enterprise engineering roles spanning full-stack microservices architecture,
              responsive web development, UI/UX systems, and team leadership.
            </p>
          </div>

          <div className="text-right hidden md:block font-mono text-xs text-neutral-400">
            <span>[ 04 VERIFIED ROLES • 2024 — 2026 ]</span>
          </div>
        </div>

        {/* Interactive Experience Timeline Container */}
        <div className="relative border-l border-white/15 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {experienceData.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node bullet */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    item.isCurrent
                      ? "bg-[#A100FF] border-white ring-4 ring-[#A100FF]/25 animate-pulse"
                      : isExpanded
                      ? "bg-[#7C3AED] border-white ring-2 ring-[#7C3AED]/30"
                      : "bg-[#111111] border-neutral-600 group-hover:border-[#A100FF]"
                  }`}
                />

                {/* Experience Card */}
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-2xl ${
                    isExpanded
                      ? "bg-[#111111] border-[#A100FF]/60 shadow-[0_0_35px_rgba(161,0,255,0.12)]"
                      : "bg-[#0E0E0E] border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Header trigger */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="p-6 sm:p-8 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                    role="button"
                    aria-expanded={isExpanded}
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-heading text-lg sm:text-xl font-extrabold text-white tracking-tight uppercase group-hover:text-[#C084FC] transition-colors">
                          {item.company}
                        </span>
                        {item.isCurrent && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                            ACTIVE ROLE
                          </span>
                        )}
                      </div>

                      <div className="text-sm font-mono text-[#A100FF] font-semibold uppercase tracking-wider">
                        {item.role}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 pt-1">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {item.certificateUrl && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenCertificate(item.certificateUrl!, `${item.company} — Verified Credential`);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-[#A100FF]/15 border border-[#A100FF]/30 hover:bg-[#A100FF] text-[#C084FC] hover:text-white font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all"
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>CREDENTIAL</span>
                        </button>
                      )}

                      <div className="p-2 rounded-lg bg-white/5 text-neutral-400 group-hover:text-white transition-colors">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content Body */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="px-6 sm:px-8 pb-8 pt-2 border-t border-white/5 space-y-6"
                      >
                        {/* Key Responsibilities & Highlights */}
                        <div className="space-y-3">
                          <span className="font-mono text-xs uppercase tracking-widest text-[#A100FF] font-semibold">
                            RESPONSIBILITIES & ENGINEERING IMPACT
                          </span>
                          <ul className="space-y-2.5">
                            {item.highlights.map((highlight, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                                <CheckCircle2 className="w-4 h-4 text-[#A100FF] shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack Applied */}
                        <div className="space-y-2.5 pt-2">
                          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                            TECHNOLOGIES APPLIED
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs text-neutral-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
