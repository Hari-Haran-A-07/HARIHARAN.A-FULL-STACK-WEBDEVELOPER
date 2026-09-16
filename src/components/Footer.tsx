"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, FileText, Sparkles, Terminal } from "lucide-react";
import { profileData, navItems } from "@/data/portfolioData";

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 75;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative py-20 px-6 md:px-12 bg-[#050505] border-t border-white/10 text-neutral-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Top Footer Tier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start justify-between">
          {/* Identity Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neutral-800 to-black border border-white/20 flex items-center justify-center text-white font-mono text-xs font-black">
                HA
              </div>
              <span className="font-heading text-lg font-extrabold text-white tracking-wider uppercase">
                {profileData.name}
              </span>
            </div>

            <p className="text-xs text-neutral-400 font-mono uppercase tracking-wider leading-relaxed max-w-md">
              FULL STACK DEVELOPER • SOFTWARE ENGINEER • DATA ANALYST • GRAPHIC DESIGNER
            </p>

            <p className="text-xs text-neutral-500 font-sans leading-relaxed max-w-md">
              Architecting scalable digital products, high-throughput microservice pipelines,
              and low-latency web applications with modern engineering standards.
            </p>
          </div>

          {/* Quick Index Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              NAVIGATION INDEX
            </span>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#A100FF] text-[10px]">{item.number}</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              CONNECT
            </span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5 text-[#A100FF]" />
                  <span>GitHub Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>LinkedIn Network</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Direct Email</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenResume}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-[#C084FC]" />
                  <span>Resume (PDF)</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Tech Stack Disclosure & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>BUILT WITH NEXT.JS 14 • REACT • TYPESCRIPT • TAILWIND CSS • FRAMER MOTION</span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
          >
            <span>BACK TO TOP</span>
            <div className="p-1.5 rounded-md bg-white/5 border border-white/10 group-hover:border-[#A100FF] transition-all">
              <ArrowUp className="w-3.5 h-3.5 text-[#A100FF]" />
            </div>
          </button>
        </div>

        {/* Copyright & Timestamp */}
        <div className="text-center text-[10px] text-neutral-600 font-mono">
          © {new Date().getFullYear()} {profileData.name}. ALL RIGHTS RESERVED. COORDINATES: {profileData.coordinates}
        </div>
      </div>
    </footer>
  );
}
