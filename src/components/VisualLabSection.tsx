"use client";

import React, { useState } from "react";
import { visualLabData } from "@/data/portfolioData";
import { VisualLabItem } from "@/types";
import FlexCarousel from "@/components/FlexCarousel";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  FlaskConical,
  X,
  Code2,
  Maximize2,
  Terminal,
  Cpu,
  Layers,
  Palette,
  CheckCircle2,
  Compass,
} from "lucide-react";

export default function VisualLabSection() {
  const [selectedExperiment, setSelectedExperiment] = useState<VisualLabItem | null>(null);

  return (
    <section id="visual-lab" className="relative py-28 px-6 md:px-12 bg-[#08080B] border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#A100FF]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-xs text-[#A100FF] uppercase tracking-widest">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>{"06 // VISUAL LAB & CREATIVE EXPERIMENTS"}</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.05]">
              GRAPHIC DESIGN &amp; WEBGL
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                LABORATORY OF FORM &amp; MOTION.
              </span>
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              An interactive 3D WebGL showcase of visual brand systems, mathematical typography,
              procedural shaders, and real-time telemetry visualizations crafted with precision.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 font-mono text-xs text-neutral-400">
            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#A100FF]" />
              <span>OGL WEBGL ENGINE</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
              <Palette className="w-3.5 h-3.5 text-cyan-400" />
              <span>VECTOR GRAPHICS</span>
            </div>
          </div>
        </div>

        {/* 3D WebGL FlexCarousel Container */}
        <div className="mb-12">
          <FlexCarousel
            items={visualLabData}
            onSelectItem={(item) => setSelectedExperiment(item)}
          />
        </div>

        {/* Technical Capabilities Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all space-y-2">
            <span className="font-mono text-[10px] text-[#A100FF] uppercase tracking-wider font-bold">
              {"01 // PROCEDURAL SHADERS"}
            </span>
            <h4 className="font-heading text-sm font-bold text-white uppercase">Real-Time GLSL Math</h4>
            <p className="text-xs text-neutral-400">
              GPU-accelerated wave displacement, chromatic aberration &amp; dynamic refractive materials.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all space-y-2">
            <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider font-bold">
              {"02 // VECTOR PRECISION"}
            </span>
            <h4 className="font-heading text-sm font-bold text-white uppercase">Infinite Scalability</h4>
            <p className="text-xs text-neutral-400">
              Mathematical golden-ratio geometry, bezier curves &amp; clean responsive SVG assets.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all space-y-2">
            <span className="font-mono text-[10px] text-pink-400 uppercase tracking-wider font-bold">
              {"03 // SPRING KINETICS"}
            </span>
            <h4 className="font-heading text-sm font-bold text-white uppercase">Tactile Motion</h4>
            <p className="text-xs text-neutral-400">
              Natural dampening physics, gyro mouse tracking &amp; seamless touch gesture ergonomics.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all space-y-2">
            <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider font-bold">
              {"04 // DATA VISUALIZATION"}
            </span>
            <h4 className="font-heading text-sm font-bold text-white uppercase">High-Frequency Feeds</h4>
            <p className="text-xs text-neutral-400">
              Canvas-rendered telematics sweeps, radar telemetry &amp; live WebSocket stream graphs.
            </p>
          </div>
        </div>
      </div>

      {/* Experiment Specification Inspector Modal */}
      <AnimatePresence>
        {selectedExperiment && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Inspection specifications for ${selectedExperiment.title}`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl rounded-3xl bg-[#0F0F14] border border-white/15 p-6 sm:p-8 text-white shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: selectedExperiment.color }}
                  />
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                    {`LAB SPECIFICATION // ${selectedExperiment.category}`}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedExperiment(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all"
                  aria-label="Close experiment inspector"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="space-y-6 pt-6">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                    {selectedExperiment.title}
                  </h3>
                  <p className="text-sm text-neutral-300 font-mono mt-1">
                    {selectedExperiment.subtitle}
                  </p>
                </div>

                {/* Visual Preview Container */}
                <div
                  className="w-full h-52 sm:h-64 rounded-2xl relative overflow-hidden flex items-center justify-center border border-white/10 shadow-inner"
                  style={{
                    background: `linear-gradient(135deg, #09090C 0%, ${selectedExperiment.color}33 50%, #050508 100%)`,
                  }}
                >
                  <div className="text-center space-y-2">
                    <div
                      className="w-20 h-20 mx-auto rounded-full border-2 flex items-center justify-center shadow-lg"
                      style={{ borderColor: selectedExperiment.color }}
                    >
                      <Sparkles className="w-8 h-8" style={{ color: selectedExperiment.color }} />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-white/80 block">
                      {"HARI HARAN A // CREATIVE LAB"}
                    </span>
                  </div>
                </div>

                {/* Detailed Overview */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase text-[#A100FF] font-bold tracking-wider">
                    TECHNICAL ARCHITECTURE &amp; DESIGN SYSTEM
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {selectedExperiment.description}
                  </p>
                </div>

                {/* Technical Specifications Grid */}
                {selectedExperiment.specDetails && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs">
                    <div>
                      <span className="text-neutral-400 block text-[10px]">TOOLSET:</span>
                      <span className="font-bold text-white">{selectedExperiment.specDetails.tool}</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 block text-[10px]">ASPECT RATIO:</span>
                      <span className="font-bold text-white">{selectedExperiment.specDetails.aspect}</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 block text-[10px]">OUTPUT TYPE:</span>
                      <span className="font-bold text-white">{selectedExperiment.specDetails.type}</span>
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedExperiment.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-neutral-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Close Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedExperiment(null)}
                  className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-[#A100FF] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
                >
                  CLOSE INSPECTOR
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
