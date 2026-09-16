"use client";

import React, { useState } from "react";
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
  ArrowRight,
  Cpu,
  Layers,
  Play,
} from "lucide-react";

export default function AnalyticsSection() {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);

  const sampleQueries = [
    {
      label: "TELEMATICS PROXIMITY INDEX",
      sql: "EXPLAIN ANALYZE SELECT node_id, proximity_meters, speed_kmh FROM telemetry_stream WHERE hazard_level = 'ALERT' AND timestamp >= NOW() - INTERVAL '5 seconds';",
      plan: "Index Scan using idx_telemetry_hazard on telemetry_stream (cost=0.12..4.25 rows=42 width=36) (actual time=0.038..0.042 ms)",
      metrics: { execution: "0.042 ms", rows: "42 packets", status: "OPTIMIZED (B-TREE)" },
    },
    {
      label: "ECOMMERCE ORDER RECONCILIATION",
      sql: "SELECT sku_id, COUNT(*) as velocity, SUM(amount) as revenue FROM order_audit_ledger GROUP BY sku_id ORDER BY velocity DESC LIMIT 5;",
      plan: "HashAggregate (cost=12.50..14.50 rows=5 width=48) -> Index Scan on order_audit_ledger (actual time=1.240..1.285 ms)",
      metrics: { execution: "1.285 ms", rows: "5 records", status: "ACID RECONCILED" },
    },
    {
      label: "ASYNC KYC DOCUMENT PIPELINE",
      sql: "SELECT verification_id, status, processing_duration_ms FROM kyc_queue WHERE verified_at >= CURRENT_DATE;",
      plan: "Bitmap Heap Scan on kyc_queue (cost=4.30..18.20 rows=120) (actual time=0.812..0.890 ms)",
      metrics: { execution: "0.890 ms", rows: "120 docs", status: "QUEUE CONSUMED" },
    },
  ];

  const currentQuery = sampleQueries[activeQueryIndex];

  return (
    <section id="data" className="relative py-28 px-6 md:px-12 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 / DATA ANALYTICS & TELEMETRY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
            DATA → INSIGHT:
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
              ACTIONABLE INTELLIGENCE.
            </span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Harnessing SQL optimization, distributed multi-model databases, IoT telematics ingestion, and real-time
            dashboards to extract strategic engineering value from high-velocity data.
          </p>
        </div>

        {/* Conceptual Pipeline Flow: DATA -> PROCESS -> INSIGHT -> DECISION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 font-mono text-xs">
          <div className="p-4 rounded-xl bg-[#111111] border border-white/10 space-y-1">
            <div className="text-[10px] text-[#A100FF] font-bold uppercase">STAGE 01</div>
            <div className="text-white font-bold text-sm">DATA INGESTION</div>
            <p className="text-[11px] text-neutral-400">Sockets • Telemetry • REST Endpoints</p>
          </div>

          <div className="p-4 rounded-xl bg-[#111111] border border-white/10 space-y-1">
            <div className="text-[10px] text-[#7C3AED] font-bold uppercase">STAGE 02</div>
            <div className="text-white font-bold text-sm">PROCESSING</div>
            <p className="text-[11px] text-neutral-400">Python Async • B-Tree Indexing • Aggregation</p>
          </div>

          <div className="p-4 rounded-xl bg-[#111111] border border-white/10 space-y-1">
            <div className="text-[10px] text-[#38BDF8] font-bold uppercase">STAGE 03</div>
            <div className="text-white font-bold text-sm">INSIGHT</div>
            <p className="text-[11px] text-neutral-400">p95 Latency • Proximity Alerts • Anomaly Detection</p>
          </div>

          <div className="p-4 rounded-xl bg-[#111111] border border-white/10 space-y-1">
            <div className="text-[10px] text-emerald-400 font-bold uppercase">STAGE 04</div>
            <div className="text-white font-bold text-sm">DECISION</div>
            <p className="text-[11px] text-neutral-400">Automated Braking • Inventory Restock • Scaled Nodes</p>
          </div>
        </div>

        {/* Interactive Analytics Dashboard & Query Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visual Telemetry Simulator */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#141414] via-[#0E0E0E] to-[#0A0A0A] border border-white/10 flex flex-col justify-between shadow-2xl space-y-6">
            <div>
              {/* Telemetry Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                    REAL-TIME DATA PIPELINE TELEMETRY
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400">
                  <span>SAMPLING: 1000/s</span>
                  <span className="text-neutral-600">•</span>
                  <span className="text-[#A100FF]">STATUS: ACTIVE</span>
                </div>
              </div>

              {/* Data Pipeline Metrics Display */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                    SQL QUERY LATENCY
                  </span>
                  <div className="font-mono text-2xl font-black text-white">{currentQuery.metrics.execution}</div>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> {currentQuery.metrics.status}
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
                    BATCH ROWS PROCESSED
                  </span>
                  <div className="font-mono text-2xl font-black text-white">{currentQuery.metrics.rows}</div>
                  <span className="text-[10px] text-cyan-400 font-mono flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Async Ingestion
                  </span>
                </div>
              </div>

              {/* Query Selector Tabs */}
              <div className="flex flex-wrap gap-2 mb-3">
                {sampleQueries.map((q, qIdx) => (
                  <button
                    key={q.label}
                    onClick={() => setActiveQueryIndex(qIdx)}
                    className={`px-3 py-1 rounded-md font-mono text-[11px] uppercase tracking-wider transition-colors ${
                      activeQueryIndex === qIdx
                        ? "bg-[#A100FF] text-white font-bold"
                        : "bg-black/60 text-neutral-400 border border-white/10 hover:text-white"
                    }`}
                  >
                    {q.label}
                  </button>
                ))}
              </div>

              {/* Simulated Query Stream Window */}
              <div className="p-4 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-neutral-300 space-y-2.5">
                <div className="text-[10px] text-neutral-500 flex items-center justify-between pb-1 border-b border-white/5">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-[#A100FF]" />
                    <span>SQL EXECUTION PLAN & EXPLAIN ANALYZE</span>
                  </span>
                  <span className="text-emerald-400">PLANNER COST OPTIMAL</span>
                </div>
                <div className="text-[#C084FC] text-[11px] font-semibold break-all">
                  &gt; {currentQuery.sql}
                </div>
                <div className="text-neutral-400 text-[11px] bg-white/5 p-2 rounded border border-white/5">
                  {currentQuery.plan}
                </div>
                <div className="text-emerald-400 text-[11px]">
                  [SUCCESS] Executed in {currentQuery.metrics.execution} with zero table lock contention.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
              <span>ACID Compliance & Indexing Assurance</span>
              <span>PostgreSQL • MongoDB • MySQL • Hadoop Fundamentals</span>
            </div>
          </div>

          {/* Right Analytics Pillars */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3 shadow-xl">
              <div className="flex items-center gap-2.5 text-white font-heading font-bold text-sm uppercase">
                <Database className="w-4 h-4 text-[#A100FF]" />
                <span>Relational Optimization</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Expert schema design, foreign-key indexing, and query plan profiling to eliminate full-table
                scans and prevent database bottlenecks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3 shadow-xl">
              <div className="flex items-center gap-2.5 text-white font-heading font-bold text-sm uppercase">
                <Activity className="w-4 h-4 text-[#A100FF]" />
                <span>IoT Telematics Ingestion</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Low-latency socket streams processing high-frequency vehicle telemetry for proximity
                calculations and collision warning triggers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3 shadow-xl">
              <div className="flex items-center gap-2.5 text-white font-heading font-bold text-sm uppercase">
                <BarChart3 className="w-4 h-4 text-[#A100FF]" />
                <span>Business & SEO Analytics</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Instrumenting conversion funnels, visitor retention metrics, and API latency percentiles
                (p95/p99) to inform software engineering decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
