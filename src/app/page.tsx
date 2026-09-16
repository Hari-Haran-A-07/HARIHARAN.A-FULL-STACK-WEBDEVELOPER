"use client";

import React, { useState } from "react";
import CinematicPreloader from "@/components/CinematicPreloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/EditorialMarquee";
import AboutSection from "@/components/AboutSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsEcosystem from "@/components/SkillsEcosystem";
import ProjectShowcase from "@/components/ProjectShowcase";
import GithubCommandCenter from "@/components/GithubCommandCenter";
import ArchitectureSection from "@/components/ArchitectureSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import CreativeSection from "@/components/CreativeSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import CertificateModal from "@/components/CertificateModal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeCert, setActiveCert] = useState<{ url: string; title: string } | null>(null);

  const handleOpenCertificate = (certUrl: string, title: string) => {
    setActiveCert({ url: certUrl, title });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F7F7F5] selection:bg-[#A100FF] selection:text-white relative font-sans">
      {/* Cinematic Intro Preloader */}
      <CinematicPreloader />

      {/* Fixed Header & Navigation Progress */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Landmark */}
      <main id="main-content" tabIndex={-1}>
        {/* 01: Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Dynamic Continuous Marquee Ticker */}
        <EditorialMarquee />

        {/* 02: About & Philosophy + Verified Metrics */}
        <AboutSection />

        {/* 03: Professional Career Experience Timeline (KIEYVERSE, Techzon Wide, DCI, Mita) */}
        <ExperienceTimeline onOpenCertificate={handleOpenCertificate} />

        {/* 04: Interactive Technology Ecosystem */}
        <SkillsEcosystem />

        {/* 05: Featured Project Laboratory & Showcase */}
        <ProjectShowcase />

        {/* 06: GitHub Command Center & Live Repository Explorer */}
        <GithubCommandCenter />

        {/* 07: How I Build - Enterprise Architecture Topology */}
        <ArchitectureSection />

        {/* 08: Data -> Insight - Analytics & Telematics Visualizer */}
        <AnalyticsSection />

        {/* 09: Code x Design - Creative Technology & UI/UX */}
        <CreativeSection />

        {/* 10: Formal Academic Education */}
        <EducationSection />

        {/* 11: Verified Professional Certifications */}
        <CertificationsSection onOpenCertificateModal={handleOpenCertificate} />

        {/* 12: Contact & Engagement Dispatch */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Enterprise Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Interactive In-App Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Fullscreen Verified Certificate Modal */}
      <CertificateModal
        certUrl={activeCert?.url ?? null}
        certTitle={activeCert?.title ?? null}
        onClose={() => setActiveCert(null)}
      />
    </div>
  );
}
