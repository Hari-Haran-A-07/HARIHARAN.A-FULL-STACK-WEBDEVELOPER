"use client";

import React, { useState } from "react";
import { creativeProcessData, architectureLayers } from "@/data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";
import {
  Workflow,
  Search,
  Compass,
  Layout,
  Palette,
  Code2,
  Sliders,
  Rocket,
  CheckCircle2,
  Layers,
  ArrowRight,
  HelpCircle,
  Cpu,
  Server,
  Database,
  Activity,
  ShieldCheck,
} from "lucide-react";

export default function CreativeProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeView, setActiveView] = useState<"process" | "architecture">("process");

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-4 h-4" />;
      case 1:
        return <Compass className="w-4 h-4" />;
      case 2:
        return <Layout className="w-4 h-4" />;
      case 3:
        return <Palette className="w-4 h-4" />;
      case 4:
        return <Code2 className="w-4 h-4" />;
      case 5:
        return <Sliders className="w-4 h-4" />;
      case 6:
      default:
        return <Rocket className="w-4 h-4" />;
    }
  };

  const activeStep = creativeProcessData[activeStepIndex] || creativeProcessData[0];

  return (
    <section id="process" className="relative py-28 px-6 md:px-12 bg-[#0A0A0E] border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs text-[#A100FF] uppercase tracking-widest">
              <Workflow className="w-3.5 h-3.5" />
              <span>04 // CREATIVE PROCESS &amp; SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.05]">
              HOW I BUILD:
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-white">
                DISCOVERY TO SCALED PRODUCTION.
              </span>
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              A disciplined 7-phase methodology uniting human-centered brand research, Figma UI design
              systems, high-throughput microservices, and 60 FPS WebGL rendering.
            </p>
          </div>

          {/* View Switcher Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-black/60 border border-white/10 shrink-0">
            <button
              onClick={() => setActiveView("process")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                activeView === "process"
                  ? "bg-[#A100FF] text-white font-bold shadow-[0_0_15px_rgba(161,0,255,0.4)]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>7-STEP CREATIVE PROCESS</span>
            </button>
            <button
              onClick={() => setActiveView("architecture")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                activeView === "architecture"
                  ? "bg-[#A100FF] text-white font-bold shadow-[0_0_15px_rgba(161,0,255,0.4)]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>6-LAYER ARCHITECTURE</span>
            </button>
          </div>
        </div>

        {activeView === "process" ? (
          <div>
            {/* Horizontal Step Navigation Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-10">
              {creativeProcessData.map((step, idx) => (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    idx === activeStepIndex
                      ? "bg-[#A100FF]/15 border-[#A100FF] shadow-[0_0_20px_rgba(161,0,255,0.25)]"
                      : "bg-[#111116] border-white/10 hover:border-white/20 text-neutral-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className="font-mono text-[10px] text-[#A100FF] font-bold">
                      PHASE {step.step}
                    </span>
                    <div
                      className={`p-1.5 rounded-lg ${
                        idx === activeStepIndex
                          ? "bg-[#A100FF] text-white"
                          : "bg-white/5 text-neutral-400"
                      }`}
                    >
                      {getStepIcon(idx)}
                    </div>
                  </div>
                  <span className="font-heading text-xs font-bold text-white uppercase tracking-tight">
                    {step.phase}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Step Detailed Showcase Card */}
            <motion.div
              key={activeStep.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#14141A] via-[#0E0E14] to-[#08080C] border border-white/15 shadow-2xl relative overflow-hidden"
            >
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A100FF] via-pink-500 to-cyan-400" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Title & Key Problem */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#A100FF]/20 border border-[#A100FF]/40 text-[#D8B4FE] font-mono text-xs font-bold uppercase tracking-wider">
                      {`PHASE ${activeStep.step} // ${activeStep.phase}`}
                    </span>
                    <span className="font-mono text-xs text-neutral-400">
                      STEP {activeStepIndex + 1} OF 7
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                    {activeStep.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {activeStep.description}
                  </p>

                  {/* Guiding Question Box */}
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-wider font-bold">
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>CRITICAL GUIDING INQUIRY</span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-200 italic font-sans leading-relaxed">
                      &ldquo;{activeStep.keyQuestion}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Right Column: Deliverables & Toolsets */}
                <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
                  {/* Deliverables */}
                  <div>
                    <h4 className="font-mono text-xs uppercase text-[#A100FF] font-bold tracking-wider mb-3">
                      KEY DELIVERABLES &amp; ARTIFACTS
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeStep.deliverables.map((d) => (
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

                  {/* Tools */}
                  <div>
                    <h4 className="font-mono text-xs uppercase text-neutral-400 font-bold tracking-wider mb-3">
                      PRIMARY TOOLKIT &amp; TECHNOLOGIES
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeStep.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-neutral-300 font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Navigation controls */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : 6))}
                      className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 font-mono text-xs text-neutral-300 transition-all"
                    >
                      ← PREV PHASE
                    </button>
                    <button
                      onClick={() => setActiveStepIndex((prev) => (prev < 6 ? prev + 1 : 0))}
                      className="px-5 py-2 rounded-full bg-white text-black hover:bg-[#A100FF] hover:text-white font-mono text-xs font-bold transition-all flex items-center gap-2"
                    >
                      <span>NEXT PHASE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          /* 6-Layer Architecture Topology View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architectureLayers.map((layer, idx) => (
              <motion.div
                key={layer.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-7 rounded-2xl bg-gradient-to-b from-[#131318] via-[#0E0E12] to-[#08080A] border border-white/10 hover:border-[#A100FF]/50 transition-all flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="font-mono text-[10px] text-[#A100FF] uppercase tracking-widest font-bold">
                      LAYER {layer.step}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 font-mono text-[9px] text-neutral-400 border border-white/5">
                      {layer.dataFlow}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white uppercase tracking-tight">
                    {layer.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {layer.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {layer.keyResponsibilities.map((resp) => (
                      <div key={resp} className="flex items-center gap-2 text-[11px] text-neutral-300">
                        <CheckCircle2 className="w-3 h-3 text-[#A100FF] shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap gap-1.5">
                  {layer.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-white/5 font-mono text-[10px] text-neutral-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
