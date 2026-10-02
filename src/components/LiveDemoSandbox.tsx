"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  RotateCw,
  Maximize2,
  Minimize2,
  Smartphone,
  Tablet,
  Monitor,
  Laptop,
  ShieldCheck,
  Sparkles,
  Layers,
  Code2,
  ChevronRight,
  Play,
  CheckCircle2,
  Info,
} from "lucide-react";
import { ProjectItem } from "@/types";

interface LiveDemoSandboxProps {
  projects: ProjectItem[];
  defaultProjectId?: string;
  className?: string;
}

type DeviceMode = "desktop" | "laptop" | "tablet" | "mobile";

export default function LiveDemoSandbox({
  projects,
  defaultProjectId,
  className = "",
}: LiveDemoSandboxProps) {
  // Filter only projects that have live demos
  const liveProjects = projects.filter((p) => Boolean(p.liveDemoUrl));
  
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    defaultProjectId || liveProjects[0]?.id || ""
  );
  const [deviceMode, setDeviceMode] = useState<DeviceMode>("desktop");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  const currentProject =
    liveProjects.find((p) => p.id === selectedProjectId) || liveProjects[0];

  useEffect(() => {
    setIsLoading(true);
  }, [selectedProjectId, iframeKey]);

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const getDeviceWidth = () => {
    switch (deviceMode) {
      case "mobile":
        return "max-w-[390px] h-[720px]";
      case "tablet":
        return "max-w-[768px] h-[800px]";
      case "laptop":
        return "max-w-[1024px] h-[750px]";
      case "desktop":
      default:
        return "w-full h-[780px]";
    }
  };

  if (liveProjects.length === 0) {
    return null;
  }

  return (
    <div
      className={`relative w-full rounded-2xl bg-[#0B0B0F] border border-white/15 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] ${
        isFullscreen ? "fixed inset-0 z-50 rounded-none border-none max-h-screen h-screen flex flex-col" : ""
      } ${className}`}
    >
      {/* Top Header & Project Selector Bar */}
      <div className="p-4 sm:p-5 bg-[#121218] border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left: Project Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
          <span className="font-mono text-xs font-bold text-[#A100FF] px-2.5 py-1 rounded bg-[#A100FF]/15 border border-[#A100FF]/30 whitespace-nowrap flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LIVE DEMOS:</span>
          </span>

          <div className="flex items-center gap-2">
            {liveProjects.map((p) => {
              const isSelected = p.id === currentProject?.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedProjectId(p.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all whitespace-nowrap flex items-center gap-2 border ${
                    isSelected
                      ? "bg-[#A100FF] text-white border-[#A100FF] shadow-[0_0_15px_rgba(161,0,255,0.4)]"
                      : "bg-[#181822] text-neutral-400 border-white/10 hover:border-white/25 hover:text-white"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? "bg-white animate-pulse" : "bg-emerald-500"
                    }`}
                  />
                  <span>{p.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Viewport Device Switcher & Controls */}
        <div className="flex items-center justify-between lg:justify-end gap-3 font-mono text-xs">
          {/* Device Presets */}
          <div className="flex items-center p-1 bg-[#181822] border border-white/10 rounded-lg">
            <button
              onClick={() => setDeviceMode("desktop")}
              className={`p-1.5 rounded text-neutral-400 hover:text-white transition-colors ${
                deviceMode === "desktop" ? "bg-[#A100FF] text-white" : ""
              }`}
              title="Desktop View (100%)"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode("laptop")}
              className={`p-1.5 rounded text-neutral-400 hover:text-white transition-colors ${
                deviceMode === "laptop" ? "bg-[#A100FF] text-white" : ""
              }`}
              title="Laptop View (1024px)"
            >
              <Laptop className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode("tablet")}
              className={`p-1.5 rounded text-neutral-400 hover:text-white transition-colors ${
                deviceMode === "tablet" ? "bg-[#A100FF] text-white" : ""
              }`}
              title="Tablet View (768px)"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode("mobile")}
              className={`p-1.5 rounded text-neutral-400 hover:text-white transition-colors ${
                deviceMode === "mobile" ? "bg-[#A100FF] text-white" : ""
              }`}
              title="Mobile View (390px)"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          <div className="h-4 w-px bg-white/10 hidden sm:block" />

          {/* Action Icons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleRefresh}
              className="p-2 rounded-lg bg-[#181822] border border-white/10 text-neutral-400 hover:text-white hover:border-[#A100FF] transition-all"
              title="Reload Frame"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin text-[#A100FF]" : ""}`} />
            </button>

            {currentProject?.liveDemoUrl && (
              <a
                href={currentProject.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#181822] border border-white/10 text-neutral-400 hover:text-white hover:border-[#A100FF] transition-all"
                title="Open in Full New Tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-lg bg-[#181822] border border-white/10 text-neutral-400 hover:text-white hover:border-[#A100FF] transition-all"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Sandbox"}
            >
              {isFullscreen ? (
                <Minimize2 className="w-3.5 h-3.5" />
              ) : (
                <Maximize2 className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Simulated Browser Address Bar */}
      <div className="px-4 py-2 bg-[#0E0E14] border-b border-white/10 flex items-center justify-between gap-4 font-mono text-[11px]">
        {/* Traffic Light Dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#EAB308]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/80" />
        </div>

        {/* URL Pill */}
        <div className="flex-1 max-w-xl mx-auto flex items-center gap-2 px-3 py-1 rounded-md bg-[#161620] border border-white/10 text-neutral-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          <span className="truncate text-neutral-200">
            {currentProject?.liveDemoUrl || "https://demo.hari-haran.dev"}
          </span>
        </div>

        {/* Live Status Badge */}
        <div className="hidden sm:flex items-center gap-1.5 text-emerald-400 text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>PRODUCTION LIVE</span>
        </div>
      </div>

      {/* Frame Container Stage */}
      <div
        className={`relative bg-[#07070A] flex-1 flex items-center justify-center p-2 sm:p-4 overflow-auto ${
          isFullscreen ? "h-[calc(100vh-100px)]" : "min-h-[500px]"
        }`}
      >
        {/* Cyber Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#07070A]/85 backdrop-blur-md gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#A100FF]/30 border-t-[#A100FF] animate-spin" />
            <div className="font-mono text-xs text-neutral-300 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#A100FF] animate-pulse" />
              <span>INITIALIZING LIVE SANDBOX ENVIRONMENT...</span>
            </div>
          </div>
        )}

        {/* Interactive Device Viewport Frame */}
        <div
          className={`relative transition-all duration-300 mx-auto rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black ${getDeviceWidth()}`}
        >
          {currentProject?.liveDemoUrl ? (
            <iframe
              key={`${currentProject.id}-${iframeKey}`}
              src={currentProject.liveDemoUrl}
              title={`${currentProject.title} Interactive Live Demo`}
              className="w-full h-full border-none bg-black"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              allow="accelerometer; autoplay; camera; encrypted-media; gyroscope; picture-in-picture; web-share"
              onLoad={() => setIsLoading(false)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4 bg-[#0F0F16]">
              <Info className="w-10 h-10 text-[#A100FF]" />
              <h4 className="font-heading text-xl text-white font-bold">
                {currentProject?.title}
              </h4>
              <p className="text-neutral-400 text-sm max-w-md">
                This project is a backend microservice / socket pipeline architecture. Explore the source code or full case study.
              </p>
              {currentProject?.githubUrl && (
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#A100FF] text-white font-mono text-xs font-bold"
                >
                  <span>VIEW GITHUB SOURCE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Sandbox Bar */}
      <div className="px-5 py-3 bg-[#121218] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold">{currentProject?.title}</span>
          <span className="text-neutral-600">•</span>
          <span className="text-[#C084FC]">{currentProject?.category}</span>
        </div>

        <div className="flex items-center gap-3">
          {currentProject?.githubUrl && (
            <a
              href={currentProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-[#A100FF] transition-colors flex items-center gap-1"
            >
              <span>GitHub Repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {currentProject?.liveDemoUrl && (
            <a
              href={currentProject.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors flex items-center gap-1"
            >
              <span>Launch Full Screen ↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
