"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  TrendingUp,
  Activity,
  Sparkles,
  Zap,
  Terminal,
  CheckCircle2,
} from "lucide-react";

export default function AnalyticsSection() {
  return (
    <section id="data" className="relative py-28 px-6 md:px-12 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 / DATA ANALYTICS & INSIGHT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
            DATA → INSIGHT:
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
              ACTIONABLE INTELLIGENCE.
            </span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Harnessing SQL optimization, distributed database schemas, IoT telematics ingestion, and real-time
            dashboards to extract strategic value from high-velocity data.
          </p>
        </div>

        {/* Analytics Interactive Visual Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visual Telemetry Simulator */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111111] via-[#0A0A0A] to-[#060606] border border-white/10 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Telemetry Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    REAL-TIME DATA PIPELINE TELEMETRY
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400">
                  <span>SAMPLING RATE: 1000/s</span>
                  <span className="text-neutral-600">•</span>
                  <span className="text-[#A100FF]">STATUS: ACTIVE</span>
                </div>
              </div>

              {/* Data Pipeline Metrics Display */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                    SQL QUERY LATENCY
                  </span>
                  <div className="font-mono text-2xl font-black text-white">4.8 ms</div>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Indexed & Optimized
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                    TELEMATICS PACKET FLOW
                  </span>
                  <div className="font-mono text-2xl font-black text-white">99.98%</div>
                  <span className="text-[10px] text-[#C084FC] font-mono flex items-center gap-1">
                    <Activity className="w-3 h-3" /> Zero Packet Drop
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                    DATA VOLUME PROCESSED
                  </span>
                  <div className="font-mono text-2xl font-black text-white">100K+</div>
                  <span className="text-[10px] text-cyan-400 font-mono flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Async Ingestion
                  </span>
                </div>
              </div>

              {/* Simulated Query Stream Window */}
              <div className="p-4 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-neutral-300 space-y-2">
                <div className="text-[10px] text-neutral-500 flex items-center justify-between pb-1 border-b border-white/5">
                  <span>TERMINAL EXECUTION LOG</span>
                  <span>SQL & STREAM WORKERS</span>
                </div>
                <div className="text-[#C084FC]">
                  &gt; EXPLAIN ANALYZE SELECT * FROM telemetry_stream WHERE latency &lt; 5ms;
                </div>
                <div className="text-neutral-400">
                  Execution Time: 0.042 ms | Index Scan using idx_telemetry_timestamp on nodes
                </div>
                <div className="text-emerald-400">
                  [SUCCESS] Ingested 12,400 multi-threaded socket packets with zero divergence.
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
              <span>ACID Compliance Guaranteed</span>
              <span>PostgreSQL • MongoDB • MySQL • Hadoop Fundamentals</span>
            </div>
          </div>

          {/* Right Analytics Pillars */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <div className="p-6 rounded-xl bg-[#0D0D0D] border border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-white font-mono font-bold text-sm uppercase">
                <Database className="w-4 h-4 text-[#A100FF]" />
                <span>Relational Optimization</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Expert schema design, foreign-key indexing, and query plan profiling to eliminate full-table
                scans and prevent database bottlenecks.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0D0D0D] border border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-white font-mono font-bold text-sm uppercase">
                <Activity className="w-4 h-4 text-[#A100FF]" />
                <span>IoT Telematics Ingestion</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Low-latency socket streams processing high-frequency vehicle telemetry for proximity
                calculations and collision warning triggers.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0D0D0D] border border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-white font-mono font-bold text-sm uppercase">
                <BarChart3 className="w-4 h-4 text-[#A100FF]" />
                <span>Business & SEO Analytics</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Instrumenting conversion funnels, visitor retention metrics, and API latency percentiles
                (p95/p99) to inform engineering roadmap decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
