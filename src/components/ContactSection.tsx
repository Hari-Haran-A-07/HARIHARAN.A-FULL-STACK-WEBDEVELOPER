"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  Send,
  Sparkles,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import confetti from "canvas-confetti";
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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim()) {
      errs.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate enterprise dispatch & trigger mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.8 },
          colors: ["#A100FF", "#7C3AED", "#FFFFFF", "#C084FC"],
        });
      } catch (err) {
        // Confetti fallback
      }

      // Open email client with pre-filled message
      const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, "_blank");
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 bg-black border-t border-white/10">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#A100FF]/15 via-transparent to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>11 / INITIATE ENGAGEMENT</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-[0.95]">
            LET&apos;S BUILD
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
              WHAT&apos;S NEXT.
            </span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed pt-2">
            Available for Senior Full Stack roles, Microservices Engineering, Distributed Data Systems,
            and high-impact technical consulting.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            {/* Identity Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#141414] via-[#0A0A0A] to-[#060606] border border-white/15 space-y-6 shadow-2xl">
              <div>
                <span className="font-mono text-xs text-[#A100FF] uppercase tracking-wider block mb-1">
                  DIRECT CONTACT CHANNEL
                </span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                  {profileData.name}
                </h3>
                <p className="font-mono text-xs text-neutral-400 uppercase tracking-wide mt-0.5">
                  Full Stack Developer • Software Engineer
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm font-mono text-neutral-300">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/80 border border-white/5 hover:border-[#A100FF] transition-all group"
                >
                  <Mail className="w-4 h-4 text-[#A100FF] shrink-0" />
                  <span className="group-hover:text-white truncate">{profileData.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#A100FF] ml-auto shrink-0" />
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/80 border border-white/5 hover:border-[#A100FF] transition-all group"
                >
                  <Linkedin className="w-4 h-4 text-[#A100FF] shrink-0" />
                  <span className="group-hover:text-white truncate">linkedin.com/in/ahari-haran07</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#A100FF] ml-auto shrink-0" />
                </a>

                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/80 border border-white/5 hover:border-[#A100FF] transition-all group"
                >
                  <Github className="w-4 h-4 text-[#A100FF] shrink-0" />
                  <span className="group-hover:text-white truncate">github.com/Hari-Haran-A-07</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#A100FF] ml-auto shrink-0" />
                </a>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/40 border border-white/5 text-neutral-400">
                  <MapPin className="w-4 h-4 text-[#A100FF] shrink-0" />
                  <span>{profileData.location}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="w-full py-3.5 bg-gradient-to-r from-[#A100FF] to-[#7C3AED] hover:from-[#9000E6] hover:to-[#6D28D9] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>DOWNLOAD OFFICIAL RESUME</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#121212] via-[#0A0A0A] to-[#060606] border border-white/15 shadow-2xl">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                  SEND DIRECT DISPATCH
                </h3>
                <span className="font-mono text-[11px] text-neutral-400">
                  GUARANTEED RESPONSE &lt; 24H
                </span>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white uppercase">
                    MESSAGE PREPARED & DISPATCHED
                  </h4>
                  <p className="text-sm text-neutral-400 max-w-md">
                    Thank you for reaching out, {formData.name}. Your message has been formatted for
                    immediate review. You may also contact me directly at suryahari971@gmail.com.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-neutral-900 border border-white/15 text-xs font-mono uppercase text-white hover:bg-neutral-800"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-300 block">
                        YOUR NAME <span className="text-[#A100FF]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe / Tech Recruiter"
                        className={`w-full px-4 py-3 rounded-lg bg-black/60 border text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#A100FF] transition-all ${
                          errors.name ? "border-rose-500/80" : "border-white/10"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-300 block">
                        EMAIL ADDRESS <span className="text-[#A100FF]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-3 rounded-lg bg-black/60 border text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#A100FF] transition-all ${
                          errors.email ? "border-rose-500/80" : "border-white/10"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-300 block">
                      SUBJECT / ENGAGEMENT TYPE <span className="text-[#A100FF]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full Stack Engineering Role / Project Collaboration"
                      className={`w-full px-4 py-3 rounded-lg bg-black/60 border text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#A100FF] transition-all ${
                        errors.subject ? "border-rose-500/80" : "border-white/10"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-300 block">
                      MESSAGE DETAILS <span className="text-[#A100FF]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your organization, project scope, role requirements, or technical objectives..."
                      className={`w-full px-4 py-3 rounded-lg bg-black/60 border text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#A100FF] transition-all resize-none ${
                        errors.message ? "border-rose-500/80" : "border-white/10"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-black hover:bg-neutral-200 font-mono font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#A100FF]/25 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#7C3AED]" />
                        <span>DISPATCH INQUIRY VIA EMAIL</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
