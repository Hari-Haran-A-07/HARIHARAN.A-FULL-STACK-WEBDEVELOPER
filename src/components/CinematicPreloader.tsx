"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicPreloaderProps {
  onComplete?: () => void;
}

export default function CinematicPreloader({ onComplete }: CinematicPreloaderProps) {
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [progress, setProgress] = useState(0);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasViewed = sessionStorage.getItem("hha_preloader_seen");

    if (prefersReducedMotion || hasViewed) {
      setShouldRender(false);
      if (onComplete) onComplete();
      return;
    }

    // Step 0 -> Step 1 (HHA)
    const timer1 = setTimeout(() => {
      setStep(1);
    }, 600);

    // Step 1 -> Step 2 (HARI HARAN A)
    const timer2 = setTimeout(() => {
      setStep(2);
    }, 1400);

    // Step 2 -> Step 3 (FULL STACK DEVELOPER)
    const timer3 = setTimeout(() => {
      setStep(3);
    }, 2200);

    // Progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 45);

    // Complete transition
    const timerComplete = setTimeout(() => {
      sessionStorage.setItem("hha_preloader_seen", "true");
      setShouldRender(false);
      if (onComplete) onComplete();
    }, 2900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerComplete);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-[100000] bg-[#0A0A0A] flex flex-col items-center justify-between p-8 sm:p-12 select-none"
      >
        {/* Top Minimal System Header */}
        <div className="w-full flex items-center justify-between font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A100FF] animate-pulse" />
            <span>SYSTEM BOOT / 2026</span>
          </div>
          <div className="text-right">
            <span>COORDINATES: 10.3673° N, 77.9803° E</span>
          </div>
        </div>

        {/* Central Cinematic Typography Sequence */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 my-auto">
          <div className="h-28 sm:h-36 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="hha-init"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-white/20 flex items-center justify-center shadow-[0_0_40px_rgba(161,0,255,0.2)]"
                >
                  <span className="font-mono text-2xl font-black text-white">HHA</span>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="hha-monogram"
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-1"
                >
                  <span className="font-mono text-5xl sm:text-7xl font-black text-white tracking-tighter uppercase">
                    HHA
                  </span>
                  <div className="h-0.5 w-12 bg-[#A100FF] mx-auto" />
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="hha-fullname"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-2"
                >
                  <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase">
                    HARI HARAN A
                  </h1>
                  <p className="font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-widest">
                    ENGINEER • BUILDER • ANALYST • DESIGNER
                  </p>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="hha-title"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-2"
                >
                  <span className="font-mono text-xs text-[#A100FF] uppercase tracking-widest">
                    DISCIPLINE ESTABLISHED
                  </span>
                  <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#A100FF] tracking-tight uppercase">
                    FULL STACK DEVELOPER
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Loading Progress Meter */}
        <div className="w-full max-w-md space-y-3 font-mono">
          <div className="flex items-center justify-between text-[11px] text-neutral-400">
            <span className="uppercase tracking-wider text-neutral-500">INITIALIZING ENVIRONMENT</span>
            <span className="text-[#C084FC] font-bold">{Math.min(progress, 100)}%</span>
          </div>

          {/* Progress track */}
          <div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden border border-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-[#7C3AED] via-[#A100FF] to-white rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] text-neutral-600 uppercase">
            <span>JAVA • REACT • PYTHON • SQL</span>
            <span>STATUS: ONLINE</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
