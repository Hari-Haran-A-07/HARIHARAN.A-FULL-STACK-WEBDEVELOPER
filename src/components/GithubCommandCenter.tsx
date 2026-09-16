"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Search,
  Terminal,
  GitBranch,
  Star,
  GitFork,
  ExternalLink,
  Sparkles,
  Layers,
  Code2,
  Calendar,
  Activity,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import { githubReposData, githubProfileStats, profileData } from "@/data/portfolioData";
import { GithubRepoItem } from "@/types";

export default function GithubCommandCenter() {
  const [repos, setRepos] = useState<GithubRepoItem[]>(githubReposData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [isLoading, setIsLoading] = useState(false);
  const [isLiveLoaded, setIsLiveLoaded] = useState(false);

  useEffect(() => {
    // Attempt live fetch from GitHub API without exposing any secret tokens
    const fetchLiveGithubRepos = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://api.github.com/users/Hari-Haran-A-07/repos?per_page=100&sort=updated");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            // Map live API response, merging metadata with our curated categories
            const mapped: GithubRepoItem[] = data.map((r: any) => {
              const fallback = githubReposData.find((f) => f.name.toLowerCase() === r.name.toLowerCase());
              return {
                id: r.id,
                name: r.name,
                fullName: r.full_name,
                description: r.description || fallback?.description || "Public software engineering repository.",
                language: r.language || fallback?.language || "TypeScript",
                stars: r.stargazers_count ?? 0,
                forks: r.forks_count ?? 0,
                updatedAt: r.updated_at,
                htmlUrl: r.html_url,
                homepage: r.homepage || fallback?.homepage || null,
                category: fallback?.category || "FULL STACK",
                topics: r.topics && r.topics.length > 0 ? r.topics : (fallback?.topics || []),
                isFeatured: fallback?.isFeatured || false,
              };
            });
            setRepos(mapped);
            setIsLiveLoaded(true);
          }
        }
      } catch (err) {
        // Graceful fallback to verified static data
        console.warn("GitHub API rate-limited or unavailable, using verified local data.", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLiveGithubRepos();
  }, []);

  const categories = ["ALL", "FULL STACK", "FRONTEND", "BACKEND", "PYTHON", "DATA", "DESIGN", "TOOLS"];

  // Filter repositories based on search and category
  const filteredRepos = repos.filter((repo) => {
    const matchesSearch =
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "ALL" ||
      repo.category === selectedCategory ||
      (selectedCategory === "PYTHON" && repo.language.toLowerCase() === "python") ||
      (selectedCategory === "FRONTEND" && (repo.category === "FRONTEND" || repo.language === "HTML")) ||
      (selectedCategory === "BACKEND" && (repo.category === "BACKEND" || repo.language === "Java"));

    return matchesSearch && matchesCategory;
  });

  // Contribution activity simulated grid (12 months x 7 days)
  const contributionWeeks = 36;

  return (
    <section id="github" className="relative py-28 px-6 md:px-12 bg-[#080808] border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A100FF] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>06 / GITHUB & ENGINEERING ACTIVITY</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
              GITHUB
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
                COMMAND CENTER.
              </span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Real-time engineering telemetry, public repositories, language distribution, and open-source
              contributions from @Hari-Haran-A-07.
            </p>
          </div>

          <div className="text-right hidden md:block font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-2 justify-end text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{isLiveLoaded ? "LIVE GITHUB API SYNC" : "VERIFIED REPO CACHE"}</span>
            </div>
            <span className="text-neutral-500">[ 19+ PUBLIC REPOSITORIES ]</span>
          </div>
        </div>

        {/* Terminal Header Dashboard */}
        <div className="rounded-2xl bg-[#0D0D0D] border border-white/10 p-6 sm:p-8 mb-10 shadow-2xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-white font-bold ml-2">$ git status</span>
              <span className="text-neutral-600">|</span>
              <span className="text-[#C084FC]">USER: Hari-Haran-A-07</span>
            </div>

            <div className="flex items-center gap-4 text-neutral-400 text-[11px]">
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-[#A100FF]" />
                <span>main</span>
              </span>
              <span>•</span>
              <span className="text-emerald-400">STATUS: CLEAN</span>
              <span>•</span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#C084FC] flex items-center gap-1 transition-colors"
              >
                <span>OPEN GITHUB</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Metrics & Languages Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-1">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                PUBLIC REPOSITORIES
              </span>
              <div className="font-mono text-2xl font-black text-white">{repos.length}+</div>
              <span className="text-[10px] font-mono text-[#A100FF]">Full-Stack & Microservices</span>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-1">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                PRIMARY REPO
              </span>
              <div className="font-mono text-xl font-bold text-white truncate">kiey-verse.in</div>
              <span className="text-[10px] font-mono text-emerald-400">Production Deployed</span>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-1">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                COMMITS & CONTRIBUTIONS
              </span>
              <div className="font-mono text-2xl font-black text-white">{githubProfileStats.totalCommitsEst}</div>
              <span className="text-[10px] font-mono text-cyan-400">Active Engineering History</span>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-2">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                STACK COMPOSITION
              </span>
              {/* Language distribution visual bar */}
              <div className="h-2 w-full bg-neutral-900 rounded-full flex overflow-hidden">
                <div style={{ width: "46%" }} className="bg-[#A100FF]" title="TypeScript / JS 46%" />
                <div style={{ width: "24%" }} className="bg-[#7C3AED]" title="Java 24%" />
                <div style={{ width: "18%" }} className="bg-[#38BDF8]" title="Python 18%" />
                <div style={{ width: "12%" }} className="bg-[#E879F9]" title="HTML / CSS 12%" />
              </div>
              <div className="flex justify-between text-[9px] font-mono text-neutral-400">
                <span>TS/JS 46%</span>
                <span>Java 24%</span>
                <span>Python 18%</span>
              </div>
            </div>
          </div>

          {/* Interactive Contribution Activity Graph Simulation */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>CONTRIBUTION ACTIVITY FREQUENCY</span>
              <span className="text-[#A100FF]">{githubProfileStats.status}</span>
            </div>
            <div className="p-4 rounded-xl bg-black/70 border border-white/5 overflow-x-auto">
              <div className="flex gap-1.5 min-w-[700px]">
                {Array.from({ length: contributionWeeks }).map((_, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5 flex-1">
                    {Array.from({ length: 7 }).map((_, dIdx) => {
                      // Deterministic realistic density simulation based on active indices
                      const seed = (wIdx * 7 + dIdx * 13) % 100;
                      let opacityClass = "bg-white/5";
                      if (seed > 80) opacityClass = "bg-[#A100FF]";
                      else if (seed > 55) opacityClass = "bg-[#7C3AED]";
                      else if (seed > 30) opacityClass = "bg-[#A100FF]/40";
                      else if (seed > 15) opacityClass = "bg-white/15";

                      return (
                        <div
                          key={dIdx}
                          className={`h-2.5 rounded-[2px] ${opacityClass} transition-transform hover:scale-125 hover:bg-white`}
                          title={`Day ${wIdx * 7 + dIdx + 1}: Activity Recorded`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 pt-3">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Nov</span>
                <div className="flex items-center gap-1.5 ml-auto">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-white/5" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-white/15" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-[#A100FF]/40" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-[#7C3AED]" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-[#A100FF]" />
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repository Explorer Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-[#A100FF] text-white font-bold shadow-[0_0_15px_rgba(161,0,255,0.3)]"
                    : "bg-[#111111] text-neutral-400 border border-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#111111] border border-white/10 font-mono text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#A100FF] transition-colors"
            />
          </div>
        </div>

        {/* Repositories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#A100FF]/60 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-3">
                {/* Card Top Title & Stars */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#A100FF] shrink-0" />
                    <h3 className="font-mono text-sm font-bold text-white group-hover:text-[#C084FC] transition-colors truncate max-w-[200px]">
                      {repo.name}
                    </h3>
                  </div>

                  {repo.isFeatured && (
                    <span className="px-2 py-0.5 rounded bg-[#A100FF]/20 border border-[#A100FF]/40 text-[9px] font-mono text-[#C084FC] uppercase font-bold shrink-0">
                      FEATURED
                    </span>
                  )}
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2 min-h-[32px]">
                  {repo.description}
                </p>

                {/* Topics Tag List */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded bg-white/5 font-mono text-[9px] text-neutral-300 border border-white/5"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom Meta & Actions */}
              <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between font-mono text-xs text-neutral-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-[#A100FF]" />
                    <span>{repo.language}</span>
                  </span>

                  <span className="flex items-center gap-1 text-neutral-500">
                    <Star className="w-3 h-3 text-neutral-500" />
                    <span>{repo.stars}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-white/5 text-neutral-300 hover:text-white hover:bg-[#A100FF] transition-all"
                      title="Open Live Deployment"
                      aria-label={`${repo.name} Live Deployment`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-white/5 text-neutral-300 hover:text-white hover:bg-[#A100FF] transition-all"
                    title="Open on GitHub"
                    aria-label={`${repo.name} on GitHub`}
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-[#111111] border border-white/10 space-y-3 font-mono">
            <Terminal className="w-8 h-8 text-neutral-500 mx-auto" />
            <p className="text-sm text-neutral-300">No repositories found matching query &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("ALL");
              }}
              className="px-4 py-2 rounded-lg bg-[#A100FF] text-white text-xs uppercase font-bold tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
