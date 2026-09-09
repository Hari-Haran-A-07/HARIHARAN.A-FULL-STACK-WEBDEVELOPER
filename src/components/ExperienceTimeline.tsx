"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
  ExternalLink,
  Award,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { experienceData } from "@/data/portfolioData";
import { ExperienceItem } from "@/types";

interface ExperienceTimelineProps {
  onOpenCertificate: (certUrl: string, title: string) => void;
}

export default function ExperienceTimeline({ onOpenCertificate }: ExperienceTimelineProps) {
  const [activeExpId, setActiveExpId] = useState<string>(experienceData[0].id);

  return (
    <section id="experience" className="relative py-28 px-6 md:px-12 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 / CAREER MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
            PROFESSIONAL
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
              EXPERIENCE.
            </span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Progressive software engineering track record across enterprise teams, high-throughput systems,
            React client development, and modern product design.
          </p>
        </div>

        {/* Timeline Desktop & Mobile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Company Selector Column (Desktop) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {experienceData.map((exp, idx) => {
              const isSelected = activeExpId === exp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExpId(exp.id)}
                  className={`text-left p-5 rounded-xl border transition-all relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? "bg-gradient-to-r from-[#171717] to-[#111111] border-[#A100FF] shadow-[0_0_25px_rgba(161,0,255,0.15)]"
                      : "bg-[#0A0A0A] border-white/10 hover:border-white/20 hover:bg-[#121212]"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#A100FF]" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
                      0{idx + 1} / {exp.period}
                    </span>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                        CURRENT ROLE
                      </span>
                    )}
                  </div>

                  <h3 className="font-mono text-base sm:text-lg font-bold text-white tracking-tight uppercase">
                    {exp.company}
                  </h3>

                  <p className="text-xs font-mono text-[#C084FC] uppercase tracking-wide mt-1">
                    {exp.role}
                  </p>

                  <div className="flex items-center gap-1 text-[11px] text-neutral-400 font-mono mt-3">
                    <MapPin className="w-3 h-3 text-[#A100FF]" />
                    <span>{exp.location}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Experience Detailed Card (Desktop & Mobile) */}
          <div className="lg:col-span-7">
            {experienceData
              .filter((exp) => exp.id === activeExpId)
              .map((exp) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 rounded-xl bg-gradient-to-b from-[#141414] via-[#0D0D0D] to-[#070707] border border-white/15 shadow-2xl flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
                      <div>
                        <span className="font-mono text-xs text-[#A100FF] uppercase tracking-wider block mb-1">
                          ENTERPRISE POSITION SPECIFICATION
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-mono text-neutral-300 mt-1">
                          {exp.company} • {exp.location}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                          <Calendar className="w-3.5 h-3.5 text-[#A100FF]" />
                          <span>{exp.period}</span>
                        </div>

                        {exp.certificateUrl && (
                          <button
                            onClick={() =>
                              onOpenCertificate(
                                exp.certificateUrl!,
                                `${exp.company} - Internship Certificate`
                              )
                            }
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#A100FF]/15 border border-[#A100FF]/50 text-xs font-mono text-[#C084FC] hover:bg-[#A100FF] hover:text-white transition-all shadow-sm"
                          >
                            <Award className="w-3.5 h-3.5" />
                            <span>VIEW CERTIFICATE</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Accomplishment Highlights */}
                    <div className="py-6 space-y-4">
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                        KEY ACCOMPLISHMENTS & ARCHITECTURAL IMPACT:
                      </h4>

                      <ul className="space-y-3.5">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#A100FF] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies Used Footer */}
                  <div className="pt-6 border-t border-white/10">
                    <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-3">
                      TECHNOLOGY STACK:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-neutral-900 border border-white/10 font-mono text-xs text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
