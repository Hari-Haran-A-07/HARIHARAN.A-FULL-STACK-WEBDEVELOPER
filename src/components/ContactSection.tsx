"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Download,
  Send,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  ArrowUpRight,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { profileData } from "@/data/portfolioData";

interface ContactSectionProps {
  onOpenResume: () => void;
}

export default function ContactSection({ onOpenResume }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Form submission action - construct mailto URL with parameters as robust zero-backend dispatch
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${profileData.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 bg-[#080808] border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 / ENGAGEMENT & DISPATCH</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.02]">
            LET&apos;S BUILD SOMETHING
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#A100FF]">
              THAT MATTERS.
            </span>
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed pt-2">
            Open for enterprise engineering opportunities, technical challenges, and collaborative digital
            systems architecture.
          </p>

          {/* Availability Badges */}
          <div className="flex flex-wrap gap-2 pt-3">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-400 font-bold uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              FULL-TIME ROLES
            </span>
            <span className="px-3 py-1 rounded-full bg-[#A100FF]/15 border border-[#A100FF]/30 font-mono text-xs text-[#C084FC] uppercase">
              INTERNSHIPS
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-neutral-300 uppercase">
              FREELANCE
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-neutral-300 uppercase">
              COLLABORATION
            </span>
          </div>
        </div>

        {/* Contact Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Direct Channels & Identity */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-2xl bg-[#111111] border border-white/10 space-y-6 shadow-2xl">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#A100FF] font-bold">
                  DIRECT CHANNELS
                </span>
                <h3 className="font-heading text-xl font-bold text-white uppercase">
                  GET IN TOUCH
                </h3>
              </div>

              {/* Copy Email Button */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between gap-3">
                <div className="truncate">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">PRIMARY EMAIL</div>
                  <div className="font-mono text-xs text-white truncate font-bold">{profileData.email}</div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 hover:border-[#A100FF] text-neutral-300 hover:text-white font-mono text-xs uppercase flex items-center gap-1.5 transition-all shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#A100FF]" />}
                  <span>{copied ? "COPIED" : "COPY"}</span>
                </button>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-black/60 border border-white/10 hover:border-[#A100FF] text-white font-mono text-xs font-bold uppercase flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#A100FF]" />
                    <span>GITHUB</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-black/60 border border-white/10 hover:border-[#A100FF] text-white font-mono text-xs font-bold uppercase flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#38BDF8]" />
                    <span>LINKEDIN</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

              <button
                onClick={onOpenResume}
                className="w-full py-3 rounded-xl bg-neutral-900 border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:border-[#A100FF] hover:bg-[#181818] transition-all"
              >
                <Download className="w-4 h-4 text-[#A100FF]" />
                <span>DOWNLOAD COMPLETE RESUME (PDF)</span>
              </button>
            </div>

            {/* Verification Guarantee */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-[#141414] to-[#0A0A0A] border border-white/10 flex items-center gap-3 text-xs font-mono text-neutral-400">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Prompt response guaranteed within 24 hours for all professional inquiries.</span>
            </div>
          </div>

          {/* Right Contact Dispatch Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#111111] border border-white/10 shadow-2xl flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="font-mono text-xs text-[#A100FF] uppercase tracking-widest font-bold">
                  MESSAGE DISPATCH FORM
                </span>
                <span className="text-[11px] font-mono text-neutral-500">DIRECT TRANSMISSION</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-neutral-400 uppercase">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-black/70 border border-white/10 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#A100FF] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-neutral-400 uppercase">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-black/70 border border-white/10 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#A100FF] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-xs text-neutral-400 uppercase">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Full-Stack Software Engineering Role / Project Collaboration"
                  className="w-full px-4 py-3 rounded-lg bg-black/70 border border-white/10 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#A100FF] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-xs text-neutral-400 uppercase">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your engineering project, timeline, or open role requirements..."
                  className="w-full px-4 py-3 rounded-lg bg-black/70 border border-white/10 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#A100FF] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#A100FF] to-[#7C3AED] hover:from-[#B026FF] hover:to-[#8B5CF6] text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#A100FF]/25 active:scale-[0.99] transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>DISPATCHING...</span>
                ) : submitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    DISPATCH COMPLETE (MAIL CLIENT OPENED)
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    DISPATCH MESSAGE
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
