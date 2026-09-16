"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Layout,
  Sparkles,
  Smartphone,
  Eye,
  Sliders,
  Layers,
  CheckCircle2,
  Maximize2,
  Brush,
  Compass,
} from "lucide-react";

export default function CreativeSection() {
  const [activeTab, setActiveTab] = useState<"uiux" | "brand" | "digital">("uiux");

  const creativeItems = {
    uiux: [
      {
        title: "Enterprise Design Systems & Atomic Components",
        desc: "Modular Figma & code component tokens ensuring 100% visual consistency and WCAG 2.1 AA accessibility compliance.",
        tags: ["Design Tokens", "Typography Scales", "Color Systems", "Component States"],
      },
      {
        title: "High-Fidelity Interactive Prototyping",
        desc: "User journey mapping, wireframing, and interactive prototypes accelerating implementation velocity by 30%.",
        tags: ["User Journeys", "Micro-Interactions", "Wireframes", "Frictionless UX"],
      },
      {
        title: "Mobile-First Responsive Architecture",
        desc: "Fluid layouts engineered to dynamically scale across ultra-wide desktop monitors, tablets, and smartphones without layout shifts.",
        tags: ["Zero-Shift Layouts", "Touch Ergonomics", "Responsive Breakpoints"],
      },
    ],
    brand: [
      {
        title: "Visual Brand Identity & Monograms",
        desc: "Minimalist corporate visual systems communicating authority, clarity, and technology-driven innovation.",
        tags: ["Vector Monograms", "Grid Alignments", "Editorial Polish"],
      },
      {
        title: "Design Typography & Spatial Hierarchy",
        desc: "Mathematical typography scales, generous whitespace, and high-contrast editorial storytelling.",
        tags: ["Scale Clamps", "Vertical Rhythm", "Contrast Ratios"],
      },
    ],
    digital: [
      {
        title: "SEO-Optimized Digital Marketing Visuals",
        desc: "High-performance web assets, social media campaign templates, and conversion-engineered landing page structures.",
        tags: ["KIEYVERSE Platforms", "Lead Funnels", "Asset Optimization"],
      },
      {
        title: "Data-Driven Marketing Interfaces",
        desc: "Interactive service portfolios and inquiry mechanisms driving 22% higher visitor engagement.",
        tags: ["Conversion Architecture", "Form UX", "Analytics Instrumentation"],
      },
    ],
  };

  return (
    <section id="design" className="relative py-28 px-6 md:px-12 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 / CREATIVE TECHNOLOGY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
            CODE × DESIGN:
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
              WHERE LOGIC MEETS AESTHETICS.
            </span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Uniting full-stack engineering logic with graphic design, UI/UX wireframing,
            and brand systems to build digital products people love using.
          </p>
        </div>

        {/* Creative Category Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          <button
            onClick={() => setActiveTab("uiux")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
              activeTab === "uiux"
                ? "bg-[#A100FF] text-white font-bold shadow-[0_0_20px_rgba(161,0,255,0.35)]"
                : "bg-[#111111] text-neutral-400 border border-white/10 hover:border-white/20 hover:text-white"
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>UI/UX & INTERACTION DESIGN</span>
          </button>

          <button
            onClick={() => setActiveTab("brand")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
              activeTab === "brand"
                ? "bg-[#A100FF] text-white font-bold shadow-[0_0_20px_rgba(161,0,255,0.35)]"
                : "bg-[#111111] text-neutral-400 border border-white/10 hover:border-white/20 hover:text-white"
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>BRAND IDENTITY & GRAPHICS</span>
          </button>

          <button
            onClick={() => setActiveTab("digital")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
              activeTab === "digital"
                ? "bg-[#A100FF] text-white font-bold shadow-[0_0_20px_rgba(161,0,255,0.35)]"
                : "bg-[#111111] text-neutral-400 border border-white/10 hover:border-white/20 hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>DIGITAL MARKETING ASSETS</span>
          </button>
        </div>

        {/* Creative Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creativeItems[activeTab].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-7 rounded-2xl bg-gradient-to-b from-[#141414] via-[#0E0E0E] to-[#0A0A0A] border border-white/10 hover:border-[#A100FF]/60 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="font-mono text-[10px] text-[#A100FF] uppercase tracking-widest font-bold">
                    DISCIPLINE 0{idx + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#A100FF]/40 group-hover:bg-[#A100FF] transition-colors" />
                </div>

                <h3 className="font-heading text-lg font-bold text-white uppercase tracking-tight group-hover:text-[#C084FC] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-white/5 font-mono text-[10px] text-neutral-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
