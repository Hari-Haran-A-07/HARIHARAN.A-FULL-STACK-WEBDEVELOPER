"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Terminal,
  Code2,
  Database,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { profileData } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % profileData.titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden bg-black"
    >
      {/* Background Architectural Grid & Subtle Laser Light */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#A100FF]/15 via-[#7C3AED]/05 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Floating subtle data nodes */}
      <div className="absolute top-32 right-12 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-neutral-950/80 backdrop-blur-md text-[11px] font-mono text-neutral-400">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>STATUS: PRODUCTION READY</span>
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Editorial Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8"
        >
          {/* Top Identity Tag */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#A100FF]" />
            <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-[#C084FC] uppercase">
              {profileData.name}
            </span>
            <span className="text-neutral-600 font-mono text-xs">/</span>
            <span className="font-mono text-xs text-neutral-400">BANGALORE • DINDIGUL</span>
          </div>

          {/* Primary Editorial Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-white uppercase leading-[0.95]">
              FULL STACK
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
                DEVELOPER
              </span>
            </h1>

            {/* Rotating Role Subtitle */}
            <div className="h-9 sm:h-12 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex items-center gap-2 font-mono text-sm sm:text-xl font-bold tracking-wider text-[#A100FF] uppercase"
                >
                  <Sparkles className="w-4 h-4 text-[#C084FC]" />
                  <span>{profileData.titles[currentRoleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Supporting Statement */}
          <p className="text-base sm:text-lg text-neutral-400 max-w-xl font-normal leading-relaxed">
            {profileData.statement}
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => handleScrollTo("projects")}
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black font-mono font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-all hover:bg-[#F5F5F5] hover:shadow-[0_0_30px_rgba(161,0,255,0.35)] active:scale-[0.98]"
            >
              <span>VIEW MY WORK</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-[#7C3AED]" />
            </button>

            <button
              onClick={onOpenResume}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-neutral-900 border border-white/15 text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider rounded hover:border-[#A100FF] hover:bg-neutral-800 transition-all active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-[#A100FF] group-hover:-translate-y-0.5 transition-transform" />
              <span>DOWNLOAD RESUME</span>
            </button>

            <button
              onClick={() => handleScrollTo("contact")}
              className="inline-flex items-center gap-1.5 px-4 py-3.5 text-neutral-400 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <span>LET&apos;S CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A100FF]" />
            </button>
          </div>

          {/* Quick Verified Specs Bar */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
            <div>
              <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                32%
              </div>
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wide">
                Latency Reduced
              </div>
            </div>
            <div>
              <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                99.9%
              </div>
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wide">
                Availability
              </div>
            </div>
            <div>
              <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                8.6 / 10
              </div>
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wide">
                B.Tech CGPA
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right High-Impact Portrait / Engineering Identity Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#A100FF]/30 to-[#7C3AED]/20 rounded-2xl blur-xl opacity-75" />

          {/* Editorial Card Frame */}
          <div className="relative rounded-xl bg-gradient-to-b from-[#141414] via-[#0A0A0A] to-[#050505] border border-white/15 p-6 sm:p-8 overflow-hidden shadow-2xl">
            {/* Top Card Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#A100FF]" />
                <div className="w-3 h-3 rounded-full bg-neutral-800" />
                <div className="w-3 h-3 rounded-full bg-neutral-800" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-neutral-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A100FF]" />
                <span>VERIFIED CREDENTIALS</span>
              </div>
            </div>

            {/* Central Monogram & Tech Vector Visual */}
            <div className="py-8 flex flex-col items-center justify-center text-center relative">
              {/* Geometric Ring */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-gradient-to-b from-neutral-900 to-black group">
                <div className="absolute inset-2 rounded-full border border-dashed border-[#A100FF]/40 animate-[spin_40s_linear_infinite]" />
                
                {/* Monogram / Profile Center */}
                <div className="relative z-10 flex flex-col items-center">
                  <span className="font-mono text-4xl sm:text-5xl font-black tracking-tighter text-white group-hover:scale-105 transition-transform">
                    HA
                  </span>
                  <div className="h-0.5 w-8 bg-[#A100FF] my-1" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C084FC]">
                    ARCHITECT
                  </span>
                </div>

                {/* Floating Orbit Nodes */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-neutral-900 border border-[#A100FF]/50 text-[9px] font-mono text-white">
                  JAVA / SPRING
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[9px] font-mono text-neutral-300">
                  REACT / NEXT
                </div>
                <div className="absolute top-1/2 -left-3 -translate-y-1/2 px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[9px] font-mono text-neutral-300">
                  SQL
                </div>
                <div className="absolute top-1/2 -right-3 -translate-y-1/2 px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[9px] font-mono text-neutral-300">
                  PYTHON
                </div>
              </div>

              {/* Identity Details */}
              <h3 className="font-mono text-lg sm:text-xl font-bold text-white tracking-tight uppercase">
                HARI HARAN A
              </h3>
              <p className="text-xs font-mono text-[#A100FF] uppercase tracking-wider mt-1">
                FULL STACK DEVELOPER & TEAM LEAD
              </p>
              <p className="text-xs text-neutral-400 mt-2 max-w-xs">
                SSM Institute of Engineering & Technology • Techzon Wide • KIEYVERSE
              </p>
            </div>

            {/* Bottom Stack Badges */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="flex items-center gap-2 p-2 rounded bg-neutral-900/60 border border-white/5">
                <Code2 className="w-3.5 h-3.5 text-[#A100FF]" />
                <span className="text-neutral-300">Microservices</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-neutral-900/60 border border-white/5">
                <Database className="w-3.5 h-3.5 text-[#A100FF]" />
                <span className="text-neutral-300">PostgreSQL / Mongo</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-neutral-900/60 border border-white/5">
                <Cpu className="w-3.5 h-3.5 text-[#A100FF]" />
                <span className="text-neutral-300">Async Sockets</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-neutral-900/60 border border-white/5">
                <Layers className="w-3.5 h-3.5 text-[#A100FF]" />
                <span className="text-neutral-300">UI/UX Systems</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer">
        <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#A100FF]" />
        </motion.div>
      </div>
    </section>
  );
}
