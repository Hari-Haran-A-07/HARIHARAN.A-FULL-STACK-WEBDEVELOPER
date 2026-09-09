"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Workflow,
  ArrowRight,
  Sparkles,
  Server,
  Layers,
  Database,
  Activity,
  Lock,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { architectureLayers } from "@/data/portfolioData";

export default function ArchitectureSection() {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);

  return (
    <section id="architecture" className="relative py-28 px-6 md:px-12 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 / SYSTEM TOPOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
            HOW I BUILD:
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
              ENTERPRISE DATA FLOW.
            </span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Multi-tiered, low-latency architecture blueprint engineered for continuous uptime, resilient data
            pipelines, and high-concurrency throughput.
          </p>
        </div>

        {/* Interactive Architecture Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector Pipeline */}
          <div className="lg:col-span-6 flex flex-col space-y-3">
            {architectureLayers.map((layer, idx) => {
              const isSelected = activeLayerIndex === idx;
              return (
                <button
                  key={layer.step}
                  onClick={() => setActiveLayerIndex(idx)}
                  className={`text-left p-5 rounded-xl border transition-all relative overflow-hidden flex items-center justify-between ${
                    isSelected
                      ? "bg-gradient-to-r from-[#1A1A1A] to-[#121212] border-[#A100FF] shadow-[0_0_20px_rgba(161,0,255,0.2)]"
                      : "bg-[#0A0A0A] border-white/10 hover:border-white/20 hover:bg-[#121212]"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#A100FF]" />
                  )}

                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-[#A100FF]">
                      {layer.step}
                    </span>
                    <div>
                      <h3 className="font-mono text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                        {layer.title}
                      </h3>
                      <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                        {layer.dataFlow}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-[#C084FC] translate-x-1" : "text-neutral-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Interactive Layer Visual Inspector */}
          <div className="lg:col-span-6">
            <motion.div
              key={activeLayerIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="p-8 rounded-2xl bg-gradient-to-b from-[#141414] via-[#0D0D0D] to-[#070707] border border-white/15 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Visual Top Bar */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Workflow className="w-5 h-5 text-[#A100FF]" />
                    <span className="font-mono text-xs text-neutral-300 font-bold uppercase tracking-wider">
                      LAYER {architectureLayers[activeLayerIndex].step} SPECIFICATION
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#A100FF]/15 border border-[#A100FF]/30 text-[10px] font-mono text-[#C084FC]">
                    ACTIVE TIER
                  </span>
                </div>

                {/* Layer Description */}
                <div className="py-6 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                    {architectureLayers[activeLayerIndex].title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {architectureLayers[activeLayerIndex].description}
                  </p>

                  <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1 mt-4">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                      DATA FLOW PROTOCOL:
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      {architectureLayers[activeLayerIndex].dataFlow}
                    </span>
                  </div>
                </div>
              </div>

              {/* Technologies in this Layer */}
              <div className="pt-6 border-t border-white/10">
                <span className="font-mono text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-3">
                  INTEGRATED TECHNOLOGIES:
                </span>
                <div className="flex flex-wrap gap-2">
                  {architectureLayers[activeLayerIndex].tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded bg-neutral-900 border border-white/10 font-mono text-xs text-neutral-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
