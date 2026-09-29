"use client";

import React, { useState } from "react";
import { designDisciplinesData } from "@/data/portfolioData";
import { DesignDisciplineItem } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crown,
  Palette,
  Layout,
  Globe,
  Share2,
  Flame,
  TrendingUp,
  Presentation,
  BookOpen,
  Compass,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  X,
} from "lucide-react";

export default function DesignDisciplinesSection() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<DesignDisciplineItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Crown":
        return <Crown className="w-5 h-5 text-purple-400" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-fuchsia-400" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-indigo-400" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case "Share2":
        return <Share2 className="w-5 h-5 text-rose-400" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-amber-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case "Presentation":
        return <Presentation className="w-5 h-5 text-violet-400" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-blue-400" />;
      case "Compass":
      default:
        return <Compass className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="disciplines" className="relative py-28 px-6 md:px-12 bg-[#09090C] border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs text-[#A100FF] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 // DESIGN CAPABILITIES &amp; SPECIALIZATIONS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.05]">
              WHAT I DESIGN:
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
                10 CORE DISCIPLINES.
              </span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Engineering rigorous brand identities, interactive product interfaces, high-impact marketing
              campaigns, and digital experiences that communicate authority and drive measurable growth.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-neutral-300 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#A100FF] animate-pulse" />
            <span>FULL CREATIVE CYCLE SUITE</span>
          </div>
        </div>

        {/* 10 Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designDisciplinesData.map((discipline, idx) => (
            <motion.div
              key={discipline.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setSelectedDiscipline(discipline)}
              className="p-7 rounded-2xl bg-gradient-to-b from-[#131318] via-[#0D0D12] to-[#08080A] border border-white/10 hover:border-[#A100FF]/60 transition-all cursor-pointer group flex flex-col justify-between shadow-xl hover:shadow-[0_10px_30px_rgba(161,0,255,0.15)] hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Header with Number & Icon */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#A100FF]/20 group-hover:border-[#A100FF]/40 transition-colors">
                      {getIcon(discipline.icon)}
                    </div>
                    <span className="font-mono text-xs text-[#A100FF] font-bold tracking-widest uppercase">
                      DISCIPLINE {discipline.number}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#D8B4FE] transition-colors">
                    {discipline.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {discipline.shortDesc}
                  </p>
                </div>

                {/* Deliverables Preview List */}
                <div className="space-y-1.5 pt-2">
                  {discipline.deliverables.slice(0, 3).map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[11px] text-neutral-300">
                      <CheckCircle2 className="w-3 h-3 text-[#A100FF] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Tags Footer */}
              <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap gap-1.5">
                {discipline.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 rounded bg-white/5 font-mono text-[10px] text-neutral-400 border border-white/5 group-hover:text-neutral-200 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Discipline Deep-Dive Modal */}
      <AnimatePresence>
        {selectedDiscipline && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Discipline details for ${selectedDiscipline.title}`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#111116] border border-white/15 p-6 sm:p-8 text-white shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#A100FF]/20 border border-[#A100FF]/40">
                    {getIcon(selectedDiscipline.icon)}
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#A100FF] font-bold tracking-wider block">
                      DISCIPLINE {selectedDiscipline.number}
                    </span>
                    <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-white">
                      {selectedDiscipline.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedDiscipline(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all"
                  aria-label="Close discipline modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6 pt-6">
                <div>
                  <h4 className="font-mono text-xs uppercase text-neutral-400 font-bold tracking-wider mb-2">
                    DISCIPLINE OVERVIEW &amp; PHILOSOPHY
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {selectedDiscipline.shortDesc}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase text-[#A100FF] font-bold tracking-wider mb-3">
                    VERIFIED DELIVERABLES &amp; ARTIFACTS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedDiscipline.deliverables.map((d) => (
                      <div
                        key={d}
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5 text-xs text-neutral-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#A100FF] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase text-neutral-400 font-bold tracking-wider mb-3">
                    PRIMARY PRODUCTION SOFTWARE &amp; TOOLING
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDiscipline.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-neutral-300 font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedDiscipline(null)}
                  className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-[#A100FF] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
                >
                  CLOSE SPECIFICATION
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
