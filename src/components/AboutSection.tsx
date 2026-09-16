"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, TrendingUp, Cpu, Server, Layout, ShieldCheck, MapPin, Compass, Briefcase, GraduationCap } from "lucide-react";
import { metricsData, profileData } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 md:px-12 bg-[#0A0A0A] border-t border-white/10">
      {/* Background Subtle Gradient Grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 / ABOUT & PHILOSOPHY</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
            ENGINEERING
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
              WITH DISCIPLINE.
            </span>
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed pt-2">
            Bridging software engineering, scalable microservices, low-latency React
            architectures, and high-fidelity product design. Every system is engineered with measurable
            business impact, strict fault-tolerance, and production resilience.
          </p>
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Left Narrative */}
          <div className="lg:col-span-7 bg-[#111111] border border-white/10 rounded-2xl p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <div className="flex items-center gap-2 font-mono text-xs text-[#A100FF] uppercase tracking-wider pb-2 border-b border-white/5">
                <Compass className="w-4 h-4" />
                <span>POSITIONING: ENGINEER • BUILDER • ANALYST • DESIGNER</span>
              </div>
              <p>
                As a <strong className="text-white">Full Stack Developer & Team Lead</strong> at Techzon Wide
                and through engineering internships at KIEYVERSE, Dot Com Infoway, and Mita IT
                Automations, I architect complete digital systems from distributed backend
                pipelines to atomic client interfaces.
              </p>
              <p>
                My technical philosophy centers on <strong className="text-[#C084FC]">architectural precision</strong>:
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
                <span className="text-xs font-mono text-neutral-300">ACID Reliability</span>
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

          {/* Right Animated Technical Metadata Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="p-7 rounded-2xl bg-[#111111] border border-white/10 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-xs text-[#A100FF] uppercase tracking-widest font-bold">
                  TECHNICAL METADATA
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">ROLE</span>
                  <span className="text-white font-bold">FULL STACK DEVELOPER</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">FOCUS</span>
                  <span className="text-[#C084FC] font-semibold">WEB APPS • DATA • UI/UX</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">LOCATION</span>
                  <span className="text-white flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#A100FF]" />
                    <span>INDIA ({profileData.coordinates})</span>
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">STATUS</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    OPEN TO OPPORTUNITIES
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">EDUCATION</span>
                  <span className="text-white flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#A100FF]" />
                    <span>B.TECH CSBS (8.6 CGPA)</span>
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-neutral-500 uppercase">GITHUB ACTIVITY</span>
                  <span className="text-[#38BDF8] font-bold">19+ REPOSITORIES</span>
                </div>
              </div>
            </div>

            {/* Microservices & UI Quick Pillar */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0D0D0D] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#A100FF]/15 text-[#A100FF]">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-white uppercase">Decoupled Systems</h4>
                  <p className="text-xs text-neutral-400 font-mono">Java • Spring Boot • React • Python</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 text-emerald-400 border border-white/10">
                PRODUCTION
              </span>
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
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-white/10 hover:border-[#A100FF]/60 transition-all hover:shadow-[0_0_25px_rgba(161,0,255,0.12)] flex flex-col justify-between"
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
                  <h4 className="font-heading text-sm font-bold text-neutral-200 uppercase tracking-wide">
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
