"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, ExternalLink, ShieldCheck, Download } from "lucide-react";

interface CertificateModalProps {
  certUrl: string | null;
  certTitle: string | null;
  onClose: () => void;
}

export default function CertificateModal({
  certUrl,
  certTitle,
  onClose,
}: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (certUrl) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certUrl, onClose]);

  if (!certUrl) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#0D0D0D] border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-5 sm:px-8 border-b border-white/10 bg-[#121212]/90 sticky top-0 z-20 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-[#A100FF]" />
              <div>
                <h3 className="font-mono text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  {certTitle || "OFFICIAL CERTIFICATE DOCUMENT"}
                </h3>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> VERIFIED CREDENTIAL DOCUMENT
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={certUrl}
                download
                className="p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
                title="Download Certificate File"
                aria-label="Download Certificate File"
              >
                <Download className="w-4 h-4" />
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close certificate modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Certificate Image View */}
          <div className="p-4 sm:p-8 flex items-center justify-center bg-black/50 overflow-y-auto">
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl max-w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={certUrl}
                alt={certTitle || "Certificate Preview"}
                className="max-h-[70vh] w-auto object-contain mx-auto rounded"
              />
            </div>
          </div>

          {/* Footer note */}
          <div className="p-4 border-t border-white/10 bg-[#0A0A0A] flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>Dot Com Infoway Ltd. • Madurai / Chennai, India</span>
            <button
              onClick={onClose}
              className="px-3 py-1 rounded bg-white text-black font-bold text-[11px] uppercase hover:bg-neutral-200"
            >
              CLOSE VIEWER
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
