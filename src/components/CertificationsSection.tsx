"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Eye,
  X,
  FileCheck,
} from "lucide-react";
import { certificationsData } from "@/data/portfolioData";
import { CertificationItem } from "@/types";

interface CertificationsSectionProps {
  onOpenCertificateModal: (certUrl: string, title: string) => void;
}

export default function CertificationsSection({
  onOpenCertificateModal,
}: CertificationsSectionProps) {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const handleCardClick = (cert: CertificationItem) => {
    if (cert.credentialUrl) {
      onOpenCertificateModal(cert.credentialUrl, `${cert.title} — ${cert.issuer}`);
    } else {
      setSelectedCert(cert);
    }
  };

  return (
    <section id="certifications" className="relative py-28 px-6 md:px-12 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>10 / CREDENTIALS & SPECIALIZATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
              VERIFIED
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
                CERTIFICATIONS.
              </span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Professional credentials, industry certifications, and specialized enterprise coursework
              verifying core software engineering capabilities.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/10 font-mono text-xs text-neutral-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>5 ACCREDITED CERTIFICATIONS</span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              onClick={() => handleCardClick(cert)}
              className="group relative p-7 rounded-2xl bg-gradient-to-b from-[#111111] via-[#0A0A0A] to-[#060606] border border-white/10 hover:border-[#A100FF]/80 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl"
            >
              {/* Top Bar */}
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <span className="font-mono text-[10px] text-[#A100FF] uppercase tracking-wider px-2 py-0.5 rounded bg-[#A100FF]/10 border border-[#A100FF]/20">
                    CREDENTIAL 0{idx + 1}
                  </span>
                  {cert.isVerifiedAsset ? (
                    <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-400">
                      <FileCheck className="w-3 h-3" /> VERIFIED ASSET
                    </span>
                  ) : (
                    <span className="font-mono text-[10px] text-neutral-500">ACCREDITED</span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight uppercase group-hover:text-white transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-[#C084FC] uppercase tracking-wide mt-1">
                  {cert.issuer}
                </p>

                <p className="text-xs text-neutral-400 leading-relaxed mt-3">
                  {cert.description}
                </p>

                {/* Topics Covered */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {cert.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded bg-white/5 font-mono text-[10px] text-neutral-300 border border-white/5"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between font-mono text-xs">
                <span className="text-neutral-400 group-hover:text-white transition-colors flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#A100FF]" />
                  <span>VIEW CREDENTIAL</span>
                </span>
                <span className="text-[#A100FF] font-bold">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Non-asset Details Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#111111] border border-white/20 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#A100FF]" />
                  <span className="font-mono text-xs text-neutral-300 font-bold uppercase">
                    CERTIFICATION SPECIFICATION
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1 rounded-full text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white uppercase">{selectedCert.title}</h3>
                <p className="font-mono text-xs text-[#A100FF] uppercase">{selectedCert.issuer}</p>
                <p className="text-sm text-neutral-300 leading-relaxed">{selectedCert.description}</p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[11px] font-bold uppercase text-neutral-400 block">
                  KEY SYLLABUS & MASTERY DOMAINS:
                </span>
                <ul className="space-y-1.5">
                  {selectedCert.topics.map((t, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                      <CheckCircle className="w-3.5 h-3.5 text-[#A100FF]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider rounded hover:bg-neutral-200"
                >
                  CLOSE SPECIFICATION
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
