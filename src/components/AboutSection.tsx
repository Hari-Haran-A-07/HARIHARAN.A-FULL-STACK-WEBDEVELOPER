"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, TrendingUp, Cpu, Server, Layout, ShieldCheck } from "lucide-react";
import { metricsData } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 md:px-12 bg-[#050505] border-t border-white/10">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 / PROFESSIONAL PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
            ENGINEERING
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
              WITH PURPOSE.
            </span>
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed pt-2">
            Bridging senior-quality software engineering, scalable microservices, low-latency React
            architectures, and high-fidelity product design. Every system is engineered with measurable
            business impact, strict fault-tolerance, and production resilience.
          </p>
        </div>

        {/* Narrative & Engineering Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Left Narrative */}
          <div className="lg:col-span-7 bg-[#0D0D0D] border border-white/10 rounded-xl p-8 flex flex-col justify-between">
            <div className="space-y-6 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <p>
                As a <strong className="text-white">Full Stack Developer & Team Lead</strong> at Techzon Wide
                and through intensive engineering internships at KIEYVERSE, Dot Com Infoway, and Mita IT
                Automations, I specialize in building complete digital systems from foundational backend
                data pipelines to atomic frontend components.
              </p>
              <p>
                My technical philosophy centers on <strong className="text-[#C084FC]">architectural discipline</strong>:
                leveraging Java & Spring Boot for resilient microservices, React.js and TypeScript for
                frictionless user experiences, Python for asynchronous event pipelines, and rigorous
                test coverage to guarantee 99.9% uptime in production.
              </p>
              <p>
                Dual-trained in <strong className="text-white">Computer Science & Business Systems</strong> at
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
                <span className="text-xs font-mono text-neutral-300">Microservices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A100FF] shrink-0" />
                <span className="text-xs font-mono text-neutral-300">Low-Latency UI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A100FF] shrink-0" />
                <span className="text-xs font-mono text-neutral-300">ACID Transactions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A100FF] shrink-0" />
                <span className="text-xs font-mono text-neutral-300">CI/CD & Docker</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A100FF] shrink-0" />
                <span className="text-xs font-mono text-neutral-300">Agile / Scrum</span>
              </div>
            </div>
          </div>

          {/* Right Core Capabilities */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-white/10 hover:border-[#A100FF]/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-[#A100FF]/15 text-[#A100FF]">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-white uppercase">Backend & Microservices</h4>
                  <p className="text-xs text-neutral-400 font-mono">Java • Spring Boot • Python • REST APIs</p>
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                High-throughput distributed APIs, API Gateway configurations, asynchronous queue processing,
                and rule engines designed for enterprise scale.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-white/10 hover:border-[#A100FF]/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-[#A100FF]/15 text-[#A100FF]">
                  <Layout className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-white uppercase">Frontend & Modern Web</h4>
                  <p className="text-xs text-neutral-400 font-mono">React.js • Redux • TypeScript • Tailwind</p>
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Accessible, component-driven client architectures with server-state synchronization,
                responsive breakpoints, and microsecond render optimizations.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-white/10 hover:border-[#A100FF]/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-[#A100FF]/15 text-[#A100FF]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-white uppercase">Data & Distributed Systems</h4>
                  <p className="text-xs text-neutral-400 font-mono">PostgreSQL • MongoDB • MySQL • Hadoop</p>
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Multi-model persistence schemas, high-volume document ingestion, IoT telematics socket
                pipelines, and automated test coverage.
              </p>
            </div>
          </div>
        </div>

        {/* Verified Resume Metrics Showcase */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-wider">
              <TrendingUp className="w-4 h-4 text-[#A100FF]" />
              <span>MEASURABLE ENGINEERING IMPACT</span>
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
                className="group relative p-6 rounded-xl bg-gradient-to-b from-[#111111] to-[#080808] border border-white/10 hover:border-[#A100FF]/60 transition-all hover:shadow-[0_0_25px_rgba(161,0,255,0.12)] flex flex-col justify-between"
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
                  <h4 className="font-mono text-sm font-bold text-neutral-200 uppercase tracking-wide">
                    {item.label}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.sublabel}
                  </p>
                </div>
                <div className="mt-4 h-0.5 w-full bg-white/5 group-hover:bg-[#A100FF]/40 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
