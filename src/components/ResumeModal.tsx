"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Printer,
  Copy,
  Check,
  FileText,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  profileData,
  experienceData,
  educationData,
  certificationsData,
  skillCategories,
} from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
HARI HARAN A
Full Stack Developer • Software Engineer • Data Analyst • Graphic Designer
Email: ${profileData.email}
LinkedIn: ${profileData.linkedin}
GitHub: ${profileData.github}
Location: ${profileData.location}

PROFESSIONAL SUMMARY:
${profileData.bio}

PROFESSIONAL EXPERIENCE:
${experienceData
  .map(
    (exp) => `
${exp.role} | ${exp.company} (${exp.location})
${exp.period}
${exp.highlights.map((h) => `• ${h}`).join("\n")}
Technologies: ${exp.technologies.join(", ")}
`
  )
  .join("\n")}

EDUCATION:
${educationData
  .map(
    (edu) => `
${edu.degree} - ${edu.field}
${edu.institution} (${edu.location}) | ${edu.period}
${edu.score ? `Score: ${edu.scoreLabel} ${edu.score}` : ""}
${edu.highlights.map((h) => `• ${h}`).join("\n")}
`
  )
  .join("\n")}

CERTIFICATIONS:
${certificationsData
  .map((c) => `• ${c.title} — ${c.issuer}`)
  .join("\n")}

TECHNICAL SKILLS:
${skillCategories
  .map((sc) => `${sc.category}: ${sc.skills.join(", ")}`)
  .join("\n")}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto print:p-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl print:hidden"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-gradient-to-b from-[#141414] via-[#0E0E0E] to-[#080808] border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col print:max-h-none print:border-none print:bg-white print:text-black print:rounded-none"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between p-5 sm:px-8 border-b border-white/10 bg-[#121212]/90 sticky top-0 z-20 backdrop-blur-md print:hidden">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#A100FF]" />
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                OFFICIAL RESUME • HARI HARAN A
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-white/30 transition-all"
                title="Copy Resume Plaintext"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#A100FF]" />
                    <span>COPY TEXT</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#A100FF] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#7C3AED] transition-all shadow-md"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>PRINT / SAVE PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close resume modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable / Viewable Resume Document */}
          <div className="p-6 sm:p-10 space-y-8 overflow-y-auto print:overflow-visible print:p-0">
            {/* Resume Header */}
            <div className="border-b border-white/10 pb-6 print:border-black/20">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase print:text-black">
                    {profileData.name}
                  </h1>
                  <p className="font-mono text-sm text-[#C084FC] uppercase tracking-wider mt-1 print:text-purple-700">
                    Full Stack Developer • Software Engineer • Data Analyst • Graphic Designer
                  </p>
                </div>
                <div className="flex flex-col sm:items-end text-xs font-mono text-neutral-400 space-y-1 print:text-neutral-700">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#A100FF] print:text-purple-600" />
                    <span>{profileData.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-[#A100FF] print:text-purple-600" />
                    <span>{profileData.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Linkedin className="w-3 h-3 text-[#A100FF] print:text-purple-600" />
                    <span>linkedin.com/in/ahari-haran07</span>
                  </div>
                </div>
              </div>

              {/* Bio Summary */}
              <div className="mt-4 p-4 rounded-lg bg-black/50 border border-white/5 print:bg-neutral-50 print:border-neutral-200">
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed print:text-neutral-800">
                  {profileData.bio} Dual-background in Computer Science and Business Systems from SSM
                  Institute of Engineering and Technology (CGPA: 8.6/10). Experienced in low-latency
                  microservices, React UI architectures, asynchronous queues, and database optimizations.
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-4">
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#A100FF] border-b border-white/10 pb-1.5 print:text-purple-700 print:border-neutral-300">
                PROFESSIONAL EXPERIENCE
              </h2>
              <div className="space-y-6">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-mono text-sm font-bold text-white uppercase print:text-black">
                        {exp.role} — <span className="text-[#C084FC] print:text-purple-700">{exp.company}</span>
                      </h3>
                      <span className="font-mono text-xs text-neutral-400 print:text-neutral-600">
                        {exp.period} | {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-neutral-300 print:text-neutral-800">
                      {exp.highlights.map((h, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-neutral-300 border border-white/5 print:border-neutral-300 print:text-neutral-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#A100FF] border-b border-white/10 pb-1.5 print:text-purple-700 print:border-neutral-300">
                EDUCATION
              </h2>
              <div className="space-y-4">
                {educationData.map((edu) => (
                  <div key={edu.id} className="space-y-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-mono text-sm font-bold text-white uppercase print:text-black">
                        {edu.institution}
                      </h3>
                      <span className="font-mono text-xs text-neutral-400 print:text-neutral-600">
                        {edu.period} | {edu.location}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-[#C084FC] print:text-purple-700">
                      {edu.degree} — {edu.field} {edu.score ? `(CGPA: ${edu.score})` : ""}
                    </p>
                    <ul className="space-y-1 pl-4 list-disc text-xs text-neutral-300 print:text-neutral-800">
                      {edu.highlights.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#A100FF] border-b border-white/10 pb-1.5 print:text-purple-700 print:border-neutral-300">
                  CERTIFICATIONS
                </h2>
                <ul className="space-y-1.5 text-xs text-neutral-300 print:text-neutral-800">
                  {certificationsData.map((c) => (
                    <li key={c.id} className="flex items-baseline justify-between gap-2">
                      <span className="font-semibold text-white print:text-black">{c.title}</span>
                      <span className="font-mono text-neutral-400 print:text-neutral-600">{c.issuer}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#A100FF] border-b border-white/10 pb-1.5 print:text-purple-700 print:border-neutral-300">
                  TECHNICAL EXPERTISE
                </h2>
                <div className="space-y-2 text-xs text-neutral-300 print:text-neutral-800">
                  {skillCategories.slice(0, 4).map((sc) => (
                    <div key={sc.category}>
                      <span className="font-mono text-[10px] text-[#C084FC] uppercase font-bold print:text-purple-700">
                        {sc.category}:{" "}
                      </span>
                      <span className="text-neutral-300 print:text-neutral-800">{sc.skills.join(", ")}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
