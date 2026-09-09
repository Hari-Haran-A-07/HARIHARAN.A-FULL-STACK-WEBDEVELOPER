"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileText, Sparkles } from "lucide-react";
import { navItems, profileData } from "@/data/portfolioData";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#060606]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/80"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex items-center gap-3 text-white focus:outline-none focus:ring-2 focus:ring-[#A100FF] rounded-sm"
          >
            <div className="relative w-8 h-8 rounded bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/15 flex items-center justify-center overflow-hidden transition-all group-hover:border-[#A100FF]">
              <span className="font-mono text-xs font-black tracking-tighter text-white group-hover:text-[#C084FC] transition-colors">
                HA
              </span>
              <div className="absolute inset-0 bg-[#A100FF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#A100FF]" />
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-widest uppercase text-white group-hover:text-white transition-colors">
                {profileData.name}
              </span>
              <span className="text-[10px] tracking-wider uppercase text-neutral-400 font-mono">
                ENTERPRISE PORTFOLIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/60 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navItems.slice(0, 7).map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors rounded-full uppercase ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-[#A100FF]/30 to-[#7C3AED]/20 border border-[#A100FF]/60 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="group relative inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-mono font-bold tracking-wider uppercase rounded-full hover:bg-neutral-200 transition-all shadow-lg hover:shadow-[#A100FF]/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-3.5 h-3.5 text-[#7C3AED] group-hover:rotate-12 transition-transform" />
              <span>RESUME</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#A100FF] animate-pulse" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white bg-neutral-900/80 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A100FF]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-8 lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#A100FF] flex items-center gap-2 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NAVIGATION INDEX</span>
              </div>

              {navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="flex items-center justify-between py-2 text-lg font-semibold tracking-wide text-neutral-300 hover:text-white border-b border-white/5 uppercase font-mono"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A100FF] opacity-60" />
                </motion.a>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-[#A100FF] to-[#7C3AED] text-white font-mono font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW & DOWNLOAD RESUME</span>
              </button>

              <div className="flex justify-between text-xs font-mono text-neutral-500 pt-2">
                <span>{profileData.location}</span>
                <span>{profileData.email}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
