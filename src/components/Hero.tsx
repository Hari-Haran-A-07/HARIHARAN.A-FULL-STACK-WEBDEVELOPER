"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Sparkles,
  ShieldCheck,
  Palette,
  Code2,
  Layers,
  Cpu,
  Database,
  Eye,
  Sliders,
  Maximize2,
} from "lucide-react";
import { profileData } from "@/data/portfolioData";
import DitherVeil from "@/components/DitherVeil";
import TechText from "@/components/TechText";
import LaserFlow from "@/components/LaserFlow";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [heroMode, setHeroMode] = useState<"graphic" | "system">("graphic");
  const [ditherPattern, setDitherPattern] = useState<"floyd" | "bayer" | "noise" | "atkinson" | "lines">("floyd");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % profileData.titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 75;
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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden bg-[#07070A]"
    >
      {/* 3D Volumetric LaserFlow Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen overflow-hidden z-0">
        <LaserFlow
          horizontalBeamOffset={0.05}
          verticalBeamOffset={-0.12}
          color="#A100FF"
          backgroundColor="#07070A"
          fogIntensity={0.5}
          wispIntensity={4.0}
          flowSpeed={0.3}
          mouseTiltStrength={0.012}
        />
      </div>

      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none z-[1]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#A100FF]/15 via-[#7C3AED]/05 to-transparent rounded-full blur-[140px] pointer-events-none z-[1]" />


      {/* Floating System Coordinates & Latency Indicator */}
      <div className="absolute top-28 right-10 hidden lg:flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#111116]/80 backdrop-blur-md text-[11px] font-mono text-neutral-400 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-white font-bold">SYSTEM: ONLINE</span>
        </div>
        <span className="text-neutral-600">|</span>
        <span className="text-[#C084FC]">{profileData.coordinates}</span>
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
            <span className="font-mono text-xs text-neutral-400">ENGINEER • BUILDER • ANALYST • DESIGNER</span>
          </div>

          {/* Interactive TechText Vector Wordmark */}
          <div className="w-full h-[70px] sm:h-[85px] md:h-[95px] relative rounded-2xl bg-white/[0.02] border border-white/10 p-1 overflow-hidden shadow-inner group">
            <div className="absolute top-1.5 right-3 font-mono text-[9px] text-[#A100FF] uppercase tracking-widest pointer-events-none z-10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A100FF] animate-pulse" />
              <span>TECHTEXT // DRAGGABLE LETTERS</span>
            </div>
            <TechText
              text="HARI HARAN A"
              fontWeight={800}
              fontSize={80}
              letterSpacing={-0.03}
              color="#FFFFFF"
              accentColor="#A100FF"
              reveal="letter"
              reach={180}
              dashLength={4}
              dashGap={2}
              strokeWidth={1.5}
              specks={14}
              selection={true}
              labels={true}
              draggable={true}
              sweep={true}
              speed={1}
            />
          </div>

          {/* Primary Editorial Headline */}
          <div className="space-y-2">
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-white uppercase leading-[0.95]">
              GRAPHIC DESIGNER &amp;
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-white">
                FULL STACK DEV
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

          {/* Supporting Positioning Statement */}
          <p className="text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed">
            {profileData.statement}
          </p>

          {/* CTAs: VIEW WORK | GITHUB | LINKEDIN | DOWNLOAD RESUME */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => handleScrollTo("projects")}
              className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-black font-mono font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-all hover:bg-[#F7F7F5] hover:shadow-[0_0_30px_rgba(161,0,255,0.35)] active:scale-[0.98]"
            >
              <span>VIEW WORK</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-[#7C3AED]" />
            </button>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3.5 bg-[#111116] border border-white/15 text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg hover:border-[#A100FF] hover:bg-[#1A1A22] transition-all active:scale-[0.98]"
            >
              <Github className="w-4 h-4 text-[#A100FF]" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3.5 bg-[#111116] border border-white/15 text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg hover:border-[#A100FF] hover:bg-[#1A1A22] transition-all active:scale-[0.98]"
            >
              <Linkedin className="w-4 h-4 text-[#38BDF8]" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <button
              onClick={onOpenResume}
              className="group inline-flex items-center gap-2 px-5 py-3.5 bg-[#111116] border border-white/15 text-neutral-200 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg hover:border-[#A100FF] hover:text-white hover:bg-[#1A1A22] transition-all active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-[#A100FF] group-hover:-translate-y-0.5 transition-transform" />
              <span>DOWNLOAD RESUME</span>
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
                Platform Uptime
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

        {/* Right High-Impact Interactive Visual Opening Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#A100FF]/30 to-[#7C3AED]/20 rounded-3xl blur-xl opacity-75" />

          {/* Master Opening Frame */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#14141A] via-[#0E0E14] to-[#07070A] border border-white/15 p-5 sm:p-7 overflow-hidden shadow-2xl">
            {/* Top Interactive Mode Switcher */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 gap-2">
              <div className="flex items-center gap-1 p-1 rounded-xl bg-black/60 border border-white/10">
                <button
                  onClick={() => setHeroMode("graphic")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-[10px] sm:text-[11px] uppercase tracking-wider transition-all ${
                    heroMode === "graphic"
                      ? "bg-[#A100FF] text-white font-bold shadow-[0_0_12px_rgba(161,0,255,0.4)]"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Palette className="w-3 h-3" />
                  <span>GRAPHIC DESIGNER</span>
                </button>

                <button
                  onClick={() => setHeroMode("system")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-[10px] sm:text-[11px] uppercase tracking-wider transition-all ${
                    heroMode === "system"
                      ? "bg-[#A100FF] text-white font-bold shadow-[0_0_12px_rgba(161,0,255,0.4)]"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Cpu className="w-3 h-3" />
                  <span>SYSTEM MATRIX</span>
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-[#A100FF] animate-pulse" />
                <span>WEBGL OGL</span>
              </div>
            </div>

            {/* Viewport Content */}
            {heroMode === "graphic" ? (
              <div className="py-4 space-y-3">
                {/* DitherVeil Interactive Canvas */}
                <div className="relative w-full h-[320px] sm:h-[350px] rounded-2xl overflow-hidden border border-white/10 shadow-inner group">
                  <DitherVeil
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
                    pattern={ditherPattern}
                    pixelSize={2}
                    inkColor="#07070A"
                    paperColor="#F7F7F5"
                    rimColor="#A100FF"
                    rim={0.25}
                    revealRadius={180}
                    softness={0.6}
                    linger={1.2}
                    wander={true}
                    clickBurst={true}
                  />

                  {/* Overlay Watermark Badges */}
                  <div className="absolute top-3 left-3 pointer-events-none px-2.5 py-1 rounded-full bg-black/70 border border-white/15 backdrop-blur-md font-mono text-[10px] text-white/90 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#A100FF]" />
                    <span>GRAPHIC DESIGNER // DITHER VEIL</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 pointer-events-none px-3 py-1.5 rounded-xl bg-black/75 border border-white/10 backdrop-blur-md font-mono text-[10px] text-neutral-300 flex items-center justify-between">
                    <span>HOVER &amp; CLICK TO DISSOLVE</span>
                    <span className="text-[#C084FC] uppercase">{ditherPattern} MATRIX</span>
                  </div>
                </div>

                {/* Pattern Controls Bar */}
                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase">
                    DITHER PATTERN:
                  </span>
                  <div className="flex items-center gap-1">
                    {(["floyd", "bayer", "noise", "atkinson", "lines"] as const).map((pat) => (
                      <button
                        key={pat}
                        onClick={() => setDitherPattern(pat)}
                        className={`px-2 py-0.5 rounded font-mono text-[9px] uppercase tracking-wider transition-all ${
                          ditherPattern === pat
                            ? "bg-[#A100FF] text-white font-bold"
                            : "bg-white/5 text-neutral-400 hover:text-white"
                        }`}
                      >
                        {pat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* System Matrix Monogram Mode */
              <div className="py-6 flex flex-col items-center justify-center text-center relative">
                {/* Geometric Ring */}
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full border border-white/10 flex items-center justify-center mb-5 bg-gradient-to-b from-neutral-900 to-black group">
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
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-neutral-900 border border-[#A100FF]/50 text-[9px] font-mono text-white shadow-md">
                    JAVA / SPRING
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[9px] font-mono text-neutral-300 shadow-md">
                    REACT / NEXT
                  </div>
                  <div className="absolute top-1/2 -left-3 -translate-y-1/2 px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[9px] font-mono text-neutral-300 shadow-md">
                    SQL
                  </div>
                  <div className="absolute top-1/2 -right-3 -translate-y-1/2 px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[9px] font-mono text-neutral-300 shadow-md">
                    PYTHON
                  </div>
                </div>

                {/* Identity Details */}
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight uppercase">
                  HARI HARAN A
                </h3>
                <p className="text-xs font-mono text-[#A100FF] uppercase tracking-wider mt-1">
                  FULL STACK DEVELOPER &amp; TEAM LEAD
                </p>
                <p className="text-xs text-neutral-400 mt-2 max-w-xs">
                  SSM Institute of Engineering &amp; Technology • Techzon Wide • KIEYVERSE
                </p>
              </div>
            )}

            {/* Bottom Stack Badges */}
            <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                <Code2 className="w-3.5 h-3.5 text-[#A100FF]" />
                <span className="text-neutral-300">Microservices</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                <Palette className="w-3.5 h-3.5 text-[#A100FF]" />
                <span className="text-neutral-300">Vector Systems</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                <Cpu className="w-3.5 h-3.5 text-[#A100FF]" />
                <span className="text-neutral-300">GLSL Shaders</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5">
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
