"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Layers,
  Sparkles,
  Server,
  Cpu,
  BarChart3,
  Palette,
  Terminal,
  FolderGit2,
  CheckCircle2,
} from "lucide-react";
import { skillCategories, projectData } from "@/data/portfolioData";
import { SkillNode } from "@/types";

export default function SkillsEcosystem() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeSkill, setActiveSkill] = useState<SkillNode | null>(null);

  const categoryIcons: Record<string, React.ReactNode> = {
    FRONTEND: <Layers className="w-4 h-4 text-[#A100FF]" />,
    BACKEND: <Server className="w-4 h-4 text-[#7C3AED]" />,
    DATABASE: <Database className="w-4 h-4 text-[#9333EA]" />,
    PROGRAMMING: <Cpu className="w-4 h-4 text-[#C084FC]" />,
    "DATA ANALYTICS": <BarChart3 className="w-4 h-4 text-[#38BDF8]" />,
    DESIGN: <Palette className="w-4 h-4 text-[#E879F9]" />,
    "TOOLS & DEVOPS": <Terminal className="w-4 h-4 text-[#A855F7]" />,
  };

  const allSkills = skillCategories.flatMap((cat) => cat.skills);
  const displayedCategories =
    selectedCategory === "ALL"
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="skills" className="relative py-28 px-6 md:px-12 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>04 / TECHNOLOGY ECOSYSTEM</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
              TECHNICAL
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
                DISCIPLINES.
              </span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Verified software engineering competencies, distributed architecture stacks, database systems,
              and design frameworks applied across real production environments.
            </p>
          </div>

          <div className="text-right hidden md:block font-mono text-xs text-neutral-400">
            <span>[ CONTEXTUAL METRICS • NO ARBITRARY PERCENTAGES ]</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory("ALL")}
            className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
              selectedCategory === "ALL"
                ? "bg-[#A100FF] text-white font-bold shadow-[0_0_20px_rgba(161,0,255,0.35)]"
                : "bg-[#111111] text-neutral-400 border border-white/10 hover:border-white/20 hover:text-white"
            }`}
          >
            ALL DISCIPLINES ({allSkills.length})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                selectedCategory === cat.category
                  ? "bg-[#A100FF] text-white font-bold shadow-[0_0_20px_rgba(161,0,255,0.35)]"
                  : "bg-[#111111] text-neutral-400 border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {categoryIcons[cat.category]}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Skill Inspector Banner */}
        <AnimatePresence>
          {activeSkill && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-8 p-4 rounded-xl bg-gradient-to-r from-[#A100FF]/20 via-[#7C3AED]/15 to-transparent border border-[#A100FF]/40 flex flex-wrap items-center justify-between gap-4 font-mono text-xs"
            >
              <div className="flex items-center gap-3">
                <span className="font-bold text-white uppercase text-sm">{activeSkill.name}</span>
                <span className="text-neutral-400">|</span>
                <span className="text-[#C084FC]">STATUS: {activeSkill.status}</span>
                <span className="text-neutral-400">|</span>
                <span className="text-neutral-300">CATEGORY: {activeSkill.category}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <FolderGit2 className="w-3.5 h-3.5 text-[#A100FF]" />
                <span>Associated with {activeSkill.projects.length} repository / production projects</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Category Clusters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="p-7 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#A100FF]/50 transition-all flex flex-col justify-between shadow-xl group"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    {categoryIcons[cat.category]}
                    <h3 className="font-heading text-base font-bold text-white uppercase tracking-tight">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase">
                    {cat.skills.length} TOKENS
                  </span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed min-h-[32px]">
                  {cat.description}
                </p>

                {/* Skill Nodes List */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => {
                    const isSelected = activeSkill?.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => setActiveSkill(isSelected ? null : skill)}
                        className={`group/skill px-3 py-1.5 rounded-lg font-mono text-xs transition-all flex items-center gap-2 ${
                          isSelected
                            ? "bg-[#A100FF] text-white font-bold shadow-[0_0_15px_rgba(161,0,255,0.4)]"
                            : "bg-[#0A0A0A] border border-white/10 hover:border-[#A100FF]/60 text-neutral-300 hover:text-white"
                        }`}
                      >
                        <span>{skill.name}</span>
                        <span
                          className={`text-[9px] px-1.5 py-0.2 rounded uppercase ${
                            skill.status === "PRIMARY"
                              ? "bg-emerald-500/15 text-emerald-400"
                              : skill.status === "USED IN PROJECTS"
                              ? "bg-[#A100FF]/20 text-[#C084FC]"
                              : "bg-white/5 text-neutral-400"
                          }`}
                        >
                          {skill.status === "PRIMARY"
                            ? "CORE"
                            : skill.status === "USED IN PROJECTS"
                            ? "PROD"
                            : "EXP"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Status Legend Bar */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-neutral-500">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>CORE = Primary Stack</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A100FF]" />
                  <span>PROD = In Production</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
