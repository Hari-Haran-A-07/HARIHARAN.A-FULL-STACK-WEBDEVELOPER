"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  MapPin,
  Compass,
  GraduationCap,
  Layers,
  ArrowRight,
  Code2,
  Palette,
  Server,
  Zap,
} from "lucide-react";
import { metricsData, profileData, creativePhilosophyData } from "@/data/portfolioData";

export default function AboutSection() {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  return (
    <section id="about" className="relative py-28 px-6 md:px-12 bg-[#09090C] border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-[#A100FF]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header & Manifesto */}
        <div className="flex flex-col space-y-4 max-w-4xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>11 // ABOUT &amp; CREATIVE PHILOSOPHY</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
            DESIGN IS NOT DECORATION.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-white">
              IT IS HOW AN IDEA BECOMES AN EXPERIENCE.
            </span>
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed pt-2">
            Uniting algorithmic rigor with uncompromising visual elegance. I operate at the intersection
            of enterprise full-stack engineering, high-throughput microservices, and pixel-perfect brand design systems.
          </p>
        </div>

        {/* Interactive "CODE × DESIGN" Workflow Pipeline */}
        <div className="mb-20 p-8 rounded-3xl bg-gradient-to-b from-[#131318] via-[#0E0E12] to-[#07070A] border border-white/10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#A100FF]/20 border border-[#A100FF]/40 text-[#D8B4FE]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#A100FF] font-bold uppercase tracking-widest block">
                  SYSTEM INTEGRATION
                </span>
                <h3 className="font-heading text-lg font-bold text-white uppercase">
                  THE CODE × DESIGN SYMBIOSIS
                </h3>
              </div>
            </div>

            <span className="font-mono text-xs text-neutral-400">
              7-STAGE END-TO-END EXECUTION FLOW
            </span>
          </div>

          {/* Workflow Steps Horizontal Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
            {creativePhilosophyData.pipelineSteps.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => setActiveWorkflowStep(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  idx === activeWorkflowStep
                    ? "bg-[#A100FF]/20 border-[#A100FF] shadow-[0_0_15px_rgba(161,0,255,0.3)]"
                    : "bg-white/[0.02] border-white/5 hover:border-white/20 text-neutral-400 hover:text-white"
                }`}
              >
                <span className="font-mono text-[10px] text-[#A100FF] font-bold">
                  {step.number}
                </span>
                <span className="font-heading text-xs font-bold text-white uppercase tracking-tight mt-1">
                  {step.name}
                </span>
                <span className="text-[10px] text-neutral-400 truncate mt-0.5">
                  {step.desc}
                </span>
              </button>
            ))}
          </div>

          {/* Workflow Details Banner */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-neutral-300">
              <Zap className="w-4 h-4 text-[#A100FF]" />
              <span>
                ACTIVE STAGE:{" "}
                <strong className="text-white">
                  {`${creativePhilosophyData.pipelineSteps[activeWorkflowStep].number} // ${creativePhilosophyData.pipelineSteps[activeWorkflowStep].name}`}
                </strong>{" "}
                — {creativePhilosophyData.pipelineSteps[activeWorkflowStep].desc}
              </span>
            </div>
            <div className="text-neutral-400">
              RESULT: ZERO REWORK &amp; SUB-SECOND LATENCY
            </div>
          </div>
        </div>

        {/* Split Editorial Narrative & Technical Metadata */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Left Narrative */}
          <div className="lg:col-span-7 bg-[#111116] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <div className="flex items-center gap-2 font-mono text-xs text-[#A100FF] uppercase tracking-wider pb-2 border-b border-white/5">
                <Compass className="w-4 h-4" />
                <span>POSITIONING: ENGINEER • BUILDER • ANALYST • DESIGNER</span>
              </div>
              <p>
                As a <strong className="text-white font-semibold">Full Stack Developer &amp; Team Lead</strong> at
                Techzon Wide and through engineering &amp; design roles at KIEYVERSE, Dot Com Infoway, and
                Mita IT Automations, I architect complete digital systems from distributed backend
                pipelines to atomic client interfaces.
              </p>
              <p>
                My philosophy centers on <strong className="text-[#C084FC] font-semibold">architectural precision</strong>:
                leveraging Java &amp; Spring Boot for resilient microservices, React.js and TypeScript for
                frictionless user experiences, Python for asynchronous IoT pipelines, and rigorous
                test coverage to guarantee 99.9% uptime in production.
              </p>
              <p>
                Dual-trained in <strong className="text-white font-semibold">Computer Science &amp; Business Systems</strong> at
                SSM Institute of Engineering and Technology (CGPA 8.6/10), I combine analytical engineering
                rigor with user-centric UI/UX design to deliver enterprise products that scale.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A100FF] shrink-0" />
                <span className="text-xs font-mono text-neutral-300">Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A100FF] shrink-0" />
                <span className="text-xs font-mono text-neutral-300">Spring Boot Microservices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A100FF] shrink-0" />
                <span className="text-xs font-mono text-neutral-300">60 FPS WebGL Shaders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A100FF] shrink-0" />
                <span className="text-xs font-mono text-neutral-300">Brand Systems &amp; Vectors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A100FF] shrink-0" />
                <span className="text-xs font-mono text-neutral-300">CI/CD &amp; Docker</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A100FF] shrink-0" />
                <span className="text-xs font-mono text-neutral-300">Agile Sprint Leadership</span>
              </div>
            </div>
          </div>

          {/* Right Technical Metadata Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="p-8 rounded-3xl bg-[#111116] border border-white/10 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-xs text-[#A100FF] uppercase tracking-widest font-bold">
                  TECHNICAL IDENTITY MATRIX
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-400 uppercase">CORE ROLE</span>
                  <span className="text-white font-bold">FULL STACK DEVELOPER</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-400 uppercase">SPECIALIZATION</span>
                  <span className="text-[#C084FC] font-semibold">SOFTWARE • UI/UX • BRANDING</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-400 uppercase">LOCATION</span>
                  <span className="text-white flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#A100FF]" />
                    <span>INDIA ({profileData.coordinates})</span>
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-400 uppercase">STATUS</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    AVAILABLE FOR OPPORTUNITIES
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-400 uppercase">EDUCATION</span>
                  <span className="text-white flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#A100FF]" />
                    <span>B.TECH CSBS (8.6 CGPA)</span>
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-neutral-400 uppercase">GITHUB CODEBASE</span>
                  <span className="text-cyan-400 font-bold">19+ REPOSITORIES</span>
                </div>
              </div>
            </div>

            {/* Microservices & UI Quick Pillar */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#15151C] to-[#0D0D12] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#A100FF]/15 text-[#A100FF]">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-white uppercase">Decoupled Systems</h4>
                  <p className="text-xs text-neutral-400 font-mono">Java • Spring Boot • React • WebGL</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 text-emerald-400 border border-white/10">
                PRODUCTION READY
              </span>
            </div>
          </div>
        </div>

        {/* Verified Resume Metrics Showcase */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-300 uppercase tracking-wider">
              <TrendingUp className="w-4 h-4 text-[#A100FF]" />
              <span>MEASURABLE ENGINEERING &amp; DESIGN IMPACT</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>RESUME-VERIFIED METRICS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {metricsData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative p-7 rounded-2xl bg-gradient-to-b from-[#131318] to-[#0A0A0E] border border-white/10 hover:border-[#A100FF]/60 transition-all hover:shadow-[0_0_25px_rgba(161,0,255,0.15)] flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-4xl sm:text-5xl font-black text-white tracking-tight group-hover:text-[#C084FC] transition-colors">
                      {item.value}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5">
                      {item.verifiedSource}
                    </span>
                  </div>
                  <h4 className="font-heading text-sm font-bold text-neutral-200 uppercase tracking-wide pt-1">
                    {item.label}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.sublabel}
                  </p>
                </div>
                <div className="mt-5 h-0.5 w-full bg-white/5 group-hover:bg-[#A100FF]/40 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
