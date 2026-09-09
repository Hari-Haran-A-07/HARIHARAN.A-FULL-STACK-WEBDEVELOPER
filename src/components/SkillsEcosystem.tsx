"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Terminal,
  BarChart3,
  Palette,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { skillCategories } from "@/data/portfolioData";

export default function SkillsEcosystem() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    { name: "ALL", icon: Layers },
    { name: "FRONTEND", icon: Code },
    { name: "BACKEND", icon: Server },
    { name: "DATABASE", icon: Database },
    { name: "DEVOPS & TOOLS", icon: Terminal },
    { name: "DATA & ANALYTICS", icon: BarChart3 },
    { name: "DESIGN & CREATIVE", icon: Palette },
  ];

  const filteredCategories =
    selectedCategory === "ALL"
      ? skillCategories
      : skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="relative py-28 px-6 md:px-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 / TECHNICAL MASTERY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
              TECHNOLOGY
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
                ECOSYSTEM.
              </span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Enterprise technology stack spanning distributed backend microservices, modern reactive frontends,
              multi-model databases, and high-fidelity user interface systems.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/60 border border-white/10 text-xs font-mono text-neutral-300">
            <div className="w-2 h-2 rounded-full bg-[#A100FF] animate-pulse" />
            <span>25+ CORE ENTERPRISE COMPETENCIES</span>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                  isSelected
                    ? "bg-[#A100FF] text-white font-bold shadow-[0_0_20px_rgba(161,0,255,0.4)]"
                    : "bg-neutral-950 text-neutral-400 border border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((group, groupIdx) => (
              <motion.div
                key={group.category}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: groupIdx * 0.05 }}
                className="p-6 rounded-xl bg-gradient-to-b from-[#111111] via-[#0A0A0A] to-[#070707] border border-white/10 hover:border-[#A100FF]/50 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: group.accentColor }}
                      />
                      <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                        {group.category}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-neutral-400">
                      {group.skills.length} SKILLS
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 mb-6 font-normal">
                    {group.description}
                  </p>

                  {/* Skills Node Cloud */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-md bg-neutral-900/80 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-[#A100FF]/60 hover:bg-[#1A1A1A] transition-all flex items-center gap-1.5 cursor-default"
                      >
                        <CheckCircle className="w-3 h-3 text-[#A100FF] shrink-0 opacity-70" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>PRODUCTION TESTED</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A100FF] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
