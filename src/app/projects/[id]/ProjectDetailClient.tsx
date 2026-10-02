"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ExternalLink,
  Github,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers,
  Cpu,
  Server,
  Database,
  ShieldCheck,
  TrendingUp,
  Terminal,
  Activity,
  Code2,
  Copy,
  ChevronRight,
  Home,
  Monitor,
  Calendar,
  Tag,
  Check,
  RotateCw,
  Smartphone,
  Tablet,
  Laptop,
  Maximize2,
  ArrowUpRight,
} from "lucide-react";
import { ProjectItem } from "@/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

interface ProjectDetailClientProps {
  project: ProjectItem;
  prevProject: ProjectItem;
  nextProject: ProjectItem;
  relatedProjects: ProjectItem[];
}

type DeviceMode = "desktop" | "laptop" | "tablet" | "mobile";

export default function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
  relatedProjects,
}: ProjectDetailClientProps) {
  const [copiedClone, setCopiedClone] = useState(false);
  const [deviceMode, setDeviceMode] = useState<DeviceMode>("desktop");
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoadingIframe, setIsLoadingIframe] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  const caseStudy = project.caseStudy;

  const handleCopyClone = () => {
    if (project.githubUrl) {
      navigator.clipboard.writeText(`git clone ${project.githubUrl}.git`);
      setCopiedClone(true);
      setTimeout(() => setCopiedClone(false), 2500);
    }
  };

  const getDeviceWidth = () => {
    switch (deviceMode) {
      case "mobile":
        return "max-w-[390px] h-[700px]";
      case "tablet":
        return "max-w-[768px] h-[750px]";
      case "laptop":
        return "max-w-[1024px] h-[720px]";
      case "desktop":
      default:
        return "w-full h-[760px]";
    }
  };

  return (
    <div className="min-h-screen bg-[#07070A] text-[#F7F7F5] selection:bg-[#A100FF] selection:text-white relative font-sans">
      {/* Fixed Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Landmark */}
      <main id="main-content" className="pt-28 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
        {/* Breadcrumb Bar */}
        <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 mb-8 overflow-x-auto scrollbar-none">
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap"
          >
            <Home className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600 flex-shrink-0" />
          <Link
            href="/projects"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            PROJECTS DIRECTORY
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600 flex-shrink-0" />
          <span className="text-[#A100FF] font-bold truncate">{project.title}</span>
        </div>

        {/* Top Hero Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#141418] via-[#0E0E12] to-[#0A0A0E] border border-white/15 p-8 sm:p-12 mb-12 shadow-2xl overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#A100FF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-4xl">
            {/* Badges & Meta */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono text-xs font-bold text-[#A100FF] px-3 py-1 rounded-md bg-[#A100FF]/15 border border-[#A100FF]/30">
                PROJECT {project.number}
              </span>
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                {project.category}
              </span>
              <span className="font-mono text-xs text-neutral-500">•</span>
              <span className="font-mono text-xs text-neutral-400">{project.year}</span>
              {project.badge && (
                <span
                  className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase border ${
                    project.badge.includes("Live")
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      : "bg-purple-500/10 border-purple-500/30 text-[#C084FC]"
                  }`}
                >
                  {project.badge}
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-[1.05]">
                {project.title}
              </h1>
              <p className="font-mono text-sm sm:text-lg text-[#C084FC] uppercase tracking-wide">
                {project.subtitle}
              </p>
            </div>

            {/* Summary */}
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {project.summary}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-3 flex-wrap pt-4">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 text-black font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all active:scale-[0.98]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>LAUNCH LIVE APPLICATION</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#1A1A22] border border-white/15 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:border-[#A100FF] hover:bg-[#22222E] transition-all"
                >
                  <Github className="w-4 h-4 text-[#A100FF]" />
                  <span>VIEW GITHUB REPOSITORY</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </a>
              )}

              {project.githubUrl && (
                <button
                  onClick={handleCopyClone}
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-neutral-300 font-mono text-xs hover:text-white hover:border-white/25 transition-all"
                  title="Copy git clone command"
                >
                  {copiedClone ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-neutral-400" />
                      <span>git clone</span>
                    </>
                  )}
                </button>
              )}

              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-neutral-400 hover:text-white font-mono text-xs transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Projects</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Live Interactive Sandbox View (If Live Demo Exists) */}
        {project.liveDemoUrl && (
          <section className="space-y-4 mb-16">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h2 className="font-heading text-xl font-bold text-white uppercase tracking-tight">
                  LIVE INTERACTIVE SANDBOX PREVIEW
                </h2>
              </div>

              {/* Viewport Switcher */}
              <div className="flex items-center gap-2 font-mono text-xs">
                <div className="flex items-center p-1 bg-[#121218] border border-white/10 rounded-lg">
                  <button
                    onClick={() => setDeviceMode("desktop")}
                    className={`p-1.5 rounded text-neutral-400 hover:text-white transition-colors ${
                      deviceMode === "desktop" ? "bg-[#A100FF] text-white" : ""
                    }`}
                    title="Desktop"
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeviceMode("laptop")}
                    className={`p-1.5 rounded text-neutral-400 hover:text-white transition-colors ${
                      deviceMode === "laptop" ? "bg-[#A100FF] text-white" : ""
                    }`}
                    title="Laptop"
                  >
                    <Laptop className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeviceMode("tablet")}
                    className={`p-1.5 rounded text-neutral-400 hover:text-white transition-colors ${
                      deviceMode === "tablet" ? "bg-[#A100FF] text-white" : ""
                    }`}
                    title="Tablet"
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeviceMode("mobile")}
                    className={`p-1.5 rounded text-neutral-400 hover:text-white transition-colors ${
                      deviceMode === "mobile" ? "bg-[#A100FF] text-white" : ""
                    }`}
                    title="Mobile"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => {
                    setIsLoadingIframe(true);
                    setIframeKey((k) => k + 1);
                  }}
                  className="p-2 rounded-lg bg-[#121218] border border-white/10 text-neutral-400 hover:text-white hover:border-[#A100FF] transition-all"
                  title="Reload Live Frame"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#121218] border border-white/10 text-neutral-400 hover:text-white hover:border-[#A100FF] transition-all"
                  title="Open in New Tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Frame Container */}
            <div className="rounded-2xl bg-[#0E0E14] border border-white/15 overflow-hidden shadow-2xl">
              {/* Top Address Bar */}
              <div className="px-4 py-2 bg-[#14141A] border-b border-white/10 flex items-center justify-between gap-4 font-mono text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EAB308]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
                </div>

                <div className="flex-1 max-w-md mx-auto flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C24] border border-white/10 text-neutral-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="truncate text-neutral-200">{project.liveDemoUrl}</span>
                </div>

                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-1 text-[11px]"
                >
                  <span>Full Tab ↗</span>
                </a>
              </div>

              {/* Viewport Stage */}
              <div className="p-4 bg-[#07070A] flex items-center justify-center min-h-[550px] relative">
                {isLoadingIframe && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#07070A]/80 backdrop-blur-sm gap-2 font-mono text-xs text-neutral-400">
                    <div className="w-8 h-8 rounded-full border-2 border-[#A100FF]/30 border-t-[#A100FF] animate-spin" />
                    <span>LOADING LIVE APPLICATION...</span>
                  </div>
                )}

                <div
                  className={`transition-all duration-300 mx-auto rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black ${getDeviceWidth()}`}
                >
                  <iframe
                    key={`${project.id}-${iframeKey}`}
                    src={project.liveDemoUrl}
                    title={`${project.title} Live Application`}
                    className="w-full h-full border-none bg-black"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    allow="accelerometer; autoplay; camera; encrypted-media; gyroscope; picture-in-picture; web-share"
                    onLoad={() => setIsLoadingIframe(false)}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Deep Dive Case Study Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Main Case Study Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* 01. Problem & Solution Section */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#A100FF] uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5" />
                <span>01 / PROBLEM STATEMENT &amp; ARCHITECTURAL SOLUTION</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase">
                ENGINEERING CHALLENGE &amp; RESOLUTION
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Problem Card */}
                <div className="p-6 rounded-2xl bg-[#121218] border border-red-500/20 space-y-3">
                  <div className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span>THE PROBLEM SPACE</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution Card */}
                <div className="p-6 rounded-2xl bg-[#121218] border border-emerald-500/20 space-y-3">
                  <div className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>THE ENGINEERED SOLUTION</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </section>

            {/* 02. Architecture & Data Flow */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#A100FF] uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>02 / SYSTEM ARCHITECTURE &amp; PIPELINES</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase">
                LAYERED SYSTEM ARCHITECTURE
              </h2>

              <div className="space-y-3 pt-2">
                {project.architecture.map((layer, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#121218] border border-white/10 flex items-start gap-4 group hover:border-[#A100FF]/50 transition-colors"
                  >
                    <span className="font-mono text-xs font-bold text-[#A100FF] px-2 py-1 rounded bg-[#A100FF]/15 border border-[#A100FF]/30 mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {layer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 03. Key Features */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#A100FF] uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>03 / KEY CAPABILITIES</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase">
                STANDOUT TECHNICAL FEATURES
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#121218] border border-white/10 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 04. Case Study Details If Available */}
            {caseStudy && (
              <section className="space-y-6 pt-4 border-t border-white/10">
                {caseStudy.challengesAndOptimizations && (
                  <div className="space-y-3">
                    <h3 className="font-heading text-lg font-bold text-white uppercase">
                      CHALLENGES &amp; OPTIMIZATIONS
                    </h3>
                    <div className="space-y-3">
                      {caseStudy.challengesAndOptimizations.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-[#14141E] border border-[#A100FF]/25 text-xs sm:text-sm text-neutral-300 leading-relaxed"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {caseStudy.verifiedResults && (
                  <div className="space-y-3">
                    <h3 className="font-heading text-lg font-bold text-white uppercase">
                      VERIFIED RESULTS &amp; BENCHMARKS
                    </h3>
                    <div className="space-y-2">
                      {caseStudy.verifiedResults.map((result, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 font-mono text-xs text-emerald-400"
                        >
                          <TrendingUp className="w-4 h-4 flex-shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Right Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Verified Metrics Card */}
            <div className="p-6 rounded-2xl bg-[#121218] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#A100FF] uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5" />
                <span>BENCHMARKS &amp; METRICS</span>
              </div>
              <div className="space-y-3">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-xs text-neutral-300 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack Matrix */}
            <div className="p-6 rounded-2xl bg-[#121218] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#A100FF] uppercase tracking-wider">
                <Code2 className="w-3.5 h-3.5" />
                <span>TECHNOLOGY MATRIX</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Clone Widget */}
            {project.githubUrl && (
              <div className="p-6 rounded-2xl bg-[#121218] border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs text-white uppercase tracking-wider">
                    <Github className="w-4 h-4 text-[#A100FF]" />
                    <span>SOURCE REPOSITORY</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-black font-mono text-[11px] text-neutral-300 break-all border border-white/10 flex items-center justify-between gap-2">
                  <span className="truncate">{project.githubUrl}</span>
                  <button
                    onClick={handleCopyClone}
                    className="p-1 rounded text-neutral-400 hover:text-white"
                    title="Copy clone command"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg bg-[#A100FF]/15 border border-[#A100FF]/30 text-[#C084FC] hover:bg-[#A100FF] hover:text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <span>OPEN IN GITHUB</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Project Navigation Footer (Prev & Next) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-white/10 mb-16">
          <Link
            href={`/projects/${prevProject.id}`}
            className="group p-6 rounded-2xl bg-[#121218] border border-white/10 hover:border-[#A100FF] transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 text-[#A100FF] group-hover:-translate-x-1 transition-transform" />
              <div>
                <div className="font-mono text-[11px] text-neutral-500 uppercase">
                  PREVIOUS PROJECT
                </div>
                <div className="font-heading text-lg font-bold text-white uppercase group-hover:text-[#C084FC] transition-colors">
                  {prevProject.title}
                </div>
              </div>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.id}`}
            className="group p-6 rounded-2xl bg-[#121218] border border-white/10 hover:border-[#A100FF] transition-all flex items-center justify-between text-right"
          >
            <div className="ml-auto">
              <div className="font-mono text-[11px] text-neutral-500 uppercase">
                NEXT PROJECT
              </div>
              <div className="font-heading text-lg font-bold text-white uppercase group-hover:text-[#C084FC] transition-colors">
                {nextProject.title}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#A100FF] group-hover:translate-x-1 transition-transform ml-3" />
          </Link>
        </div>

        {/* Related Projects Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-xl font-bold text-white uppercase">
              EXPLORE OTHER PROJECTS
            </h3>
            <Link
              href="/projects"
              className="text-xs font-mono text-[#A100FF] hover:underline"
            >
              View Full Directory (21+) →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className="group p-6 rounded-xl bg-[#121218] border border-white/10 hover:border-[#A100FF] transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="font-mono text-[10px] text-[#A100FF] font-bold">
                    {p.number} / {p.category}
                  </div>
                  <h4 className="font-heading text-base font-bold text-white uppercase group-hover:text-[#C084FC] transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2">
                    {p.summary}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1 font-mono text-[11px] text-neutral-400 group-hover:text-white transition-colors">
                  <span>Explore Specs</span>
                  <ArrowRight className="w-3 h-3 text-[#A100FF]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* In-App Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
