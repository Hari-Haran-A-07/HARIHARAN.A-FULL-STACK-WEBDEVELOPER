"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, FileText, Sparkles } from "lucide-react";
import { profileData, navItems } from "@/data/portfolioData";

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-[#050505] text-white border-t border-white/10 pt-20 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Tier: Monogram & Large Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/15 flex items-center justify-center font-mono text-xs font-black text-white">
                HA
              </div>
              <span className="font-mono text-lg font-bold uppercase tracking-widest text-white">
                {profileData.name}
              </span>
            </div>

            <p className="font-mono text-xs text-[#C084FC] uppercase tracking-wider">
              FULL STACK DEVELOPER • SOFTWARE ENGINEER • DATA ANALYST • GRAPHIC DESIGNER
            </p>

            <p className="text-xs text-neutral-400 max-w-md leading-relaxed">
              Engineering high-concurrency microservices, modular React applications, and enterprise data
              systems with architectural discipline and performance precision.
            </p>
          </div>

          {/* Quick Sitemap Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block font-bold">
              NAVIGATION SITEMAP
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-neutral-400">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="hover:text-white transition-colors uppercase"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Channels */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block font-bold">
              ENGAGE & CONNECT
            </span>
            <div className="flex flex-col space-y-2 text-xs font-mono text-neutral-300">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C084FC] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#A100FF]" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C084FC] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#A100FF]" />
                <span>GitHub Repositories</span>
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-2 hover:text-[#C084FC] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#A100FF]" />
                <span>{profileData.email}</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 text-left hover:text-[#C084FC] transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#A100FF]" />
                <span>Official Resume (PDF)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <div>
            © 2026 {profileData.name}. All rights reserved. Enterprise Portfolio.
          </div>

          <div className="flex items-center gap-4">
            <span>DINDIGUL • BANGALORE • TAMIL NADU</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:border-[#A100FF] transition-all flex items-center gap-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#A100FF]" />
              <span className="text-[10px] uppercase font-bold">TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
