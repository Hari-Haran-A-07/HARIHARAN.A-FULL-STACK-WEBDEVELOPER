"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { educationData } from "@/data/portfolioData";

export default function EducationSection() {
  return (
    <section id="education" className="relative py-28 px-6 md:px-12 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>09 / ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
            FORMAL
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
              EDUCATION.
            </span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Rigorous undergraduate foundations in distributed computer science, enterprise business systems,
            and computational mathematics.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className={`p-8 rounded-2xl bg-gradient-to-b from-[#141414] via-[#0E0E0E] to-[#0A0A0A] border border-white/10 hover:border-[#A100FF]/60 transition-all flex flex-col justify-between shadow-2xl ${
                idx === 0 ? "lg:col-span-7" : "lg:col-span-5"
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="space-y-1">
                    <span className="font-mono text-xs text-[#A100FF] uppercase tracking-wider block font-bold">
                      {edu.degree}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-xs font-mono text-[#C084FC] uppercase tracking-wide">
                      {edu.field}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-neutral-300">
                      <Calendar className="w-3.5 h-3.5 text-[#A100FF]" />
                      <span>{edu.period}</span>
                    </div>

                    {edu.score && (
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-400 font-bold">
                        <Award className="w-3.5 h-3.5" />
                        <span>{edu.scoreLabel}: {edu.score}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Highlights */}
                <div className="py-6 space-y-3">
                  <ul className="space-y-3">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#A100FF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Location Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-2 font-mono text-xs text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-[#A100FF]" />
                <span>{edu.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
