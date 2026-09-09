"use client";

import React from "react";
import { marqueeItems } from "@/data/portfolioData";

export default function EditorialMarquee() {
  return (
    <div className="relative py-6 bg-black border-y border-white/10 overflow-hidden select-none group">
      {/* Subtle Glow Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <div className="flex items-center gap-6 pr-6">
          {marqueeItems.map((item, idx) => (
            <span
              key={idx}
              className={`font-mono text-xs sm:text-sm tracking-widest uppercase whitespace-nowrap ${
                item === "•"
                  ? "text-[#A100FF] font-bold"
                  : "text-neutral-400 hover:text-white transition-colors"
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Seamless Duplicate for infinite loop */}
        <div className="flex items-center gap-6 pr-6" aria-hidden="true">
          {marqueeItems.map((item, idx) => (
            <span
              key={`dup-${idx}`}
              className={`font-mono text-xs sm:text-sm tracking-widest uppercase whitespace-nowrap ${
                item === "•"
                  ? "text-[#A100FF] font-bold"
                  : "text-neutral-400 hover:text-white transition-colors"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
