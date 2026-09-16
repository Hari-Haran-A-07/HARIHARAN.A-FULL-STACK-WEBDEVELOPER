"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Server,
  Shield,
  Cpu,
  Database,
  Activity,
  Sparkles,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { architectureLayers } from "@/data/portfolioData";
import { ArchitectureLayer } from "@/types";

export default function ArchitectureSection() {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);

  const layerIcons = [
    <Layers key="client" className="w-5 h-5 text-[#A100FF]" />,
    <Shield key="gateway" className="w-5 h-5 text-[#7C3AED]" />,
    <Server key="microservices" className="w-5 h-5 text-[#9333EA]" />,
    <Cpu key="async" className="w-5 h-5 text-[#C084FC]" />,
    <Database key="db" className="w-5 h-5 text-[#38BDF8]" />,
    <Activity key="monitoring" className="w-5 h-5 text-emerald-400" />,
  ];

  const activeLayer = architectureLayers[activeLayerIndex];

  return (
    <section id="architecture" className="relative py-28 px-6 md:px-12 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 / SYSTEM ARCHITECTURE TOPOLOGY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
            HOW I BUILD:
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
              END-TO-END PIPELINES.
            </span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Enterprise application blueprint designed for fault isolation, sub-millisecond persistence lookups,
            stateless gateway authentication, and continuous observability.
          </p>
        </div>

        {/* 6-Layer Architecture Interactive Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Flow Column / Selector */}
          <div className="lg:col-span-6 space-y-3">
            {architectureLayers.map((layer, idx) => {
              const isActive = activeLayerIndex === idx;
              return (
                <div
                  key={layer.step}
                  onClick={() => setActiveLayerIndex(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 select-none ${
                    isActive
                      ? "bg-[#141414] border-[#A100FF] shadow-[0_0_30px_rgba(161,0,255,0.18)] scale-[1.01]"
                      : "bg-[#0E0E0E] border-white/10 hover:border-white/20 hover:bg-[#111111]"
                  }`}
                  role="button"
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-black/60 border border-white/5">
                      {layerIcons[idx]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#A100FF]">
                          {layer.step}
                        </span>
                        <h3 className="font-heading text-sm sm:text-base font-bold text-white uppercase tracking-tight">
                          {layer.title}
                        </h3>
                      </div>
                      <div className="text-[11px] font-mono text-neutral-400 pt-0.5">
                        {layer.dataFlow}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform shrink-0 ${
                      isActive ? "text-[#A100FF] translate-x-1" : "text-neutral-600"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Detailed Inspector Panel */}
          <div className="lg:col-span-6 p-7 sm:p-9 rounded-2xl bg-gradient-to-b from-[#141414] via-[#0E0E0E] to-[#0A0A0A] border border-[#A100FF]/40 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              {/* Active Layer Header */}
              <div className="flex items-start justify-between pb-4 border-b border-white/10">
                <div className="space-y-1">
                  <span className="font-mono text-xs text-[#A100FF] uppercase tracking-widest font-bold">
                    LAYER {activeLayer.step} INSPECTION
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight">
                    {activeLayer.title}
                  </h3>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-white/10">
                  {layerIcons[activeLayerIndex]}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-300 leading-relaxed">
                {activeLayer.description}
              </p>

              {/* Technologies Applied */}
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                  TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeLayer.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Responsibilities */}
              <div className="space-y-2.5 pt-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#C084FC] font-semibold">
                  CORE RESPONSIBILITIES & INVARIANTS
                </span>
                <div className="space-y-2">
                  {activeLayer.keyResponsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3 text-xs text-neutral-300 font-mono">
                      <CheckCircle2 className="w-4 h-4 text-[#A100FF] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Flow Indicator */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-neutral-400">
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#A100FF]" />
                <span>DATA INGRESS:</span>
              </span>
              <span className="text-emerald-400 font-bold">{activeLayer.dataFlow}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
