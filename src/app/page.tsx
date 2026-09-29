"use client";

import React, { useState } from "react";
import CinematicPreloader from "@/components/CinematicPreloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/EditorialMarquee";
import ProjectShowcase from "@/components/ProjectShowcase";
import DesignDisciplinesSection from "@/components/DesignDisciplinesSection";
import CreativeProcessSection from "@/components/CreativeProcessSection";
import VisualLabSection from "@/components/VisualLabSection";
import GithubCommandCenter from "@/components/GithubCommandCenter";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsEcosystem from "@/components/SkillsEcosystem";
import AnalyticsSection from "@/components/AnalyticsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import AboutSection from "@/components/AboutSection";
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
    <div className="min-h-screen bg-[#07070A] text-[#F7F7F5] selection:bg-[#A100FF] selection:text-white relative font-sans">
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

        {/* 02: Selected Work & Production Projects */}
        <ProjectShowcase />

        {/* 03: 10 Specialized Design Disciplines */}
        <DesignDisciplinesSection />

        {/* 04: How I Build / 7-Phase Creative Process & Architecture */}
        <CreativeProcessSection />

        {/* 06: Visual Experiments / Visual Lab (WebGL OGL FlexCarousel) */}
        <VisualLabSection />

        {/* GitHub Command Center & Live Repository Explorer */}
        <GithubCommandCenter />

        {/* 07: Professional Career Experience Timeline (Techzon Wide, KIEYVERSE, DCI, Mita) */}
        <ExperienceTimeline onOpenCertificate={handleOpenCertificate} />

        {/* 08: Interactive Technology & Design Ecosystem */}
        <SkillsEcosystem />

        {/* Data -> Insight - Analytics & Telematics Visualizer */}
        <AnalyticsSection />

        {/* 09: Formal Academic Education (SSM Institute B.Tech CSBS) */}
        <EducationSection />

        {/* 10: Verified Professional Certifications */}
        <CertificationsSection onOpenCertificateModal={handleOpenCertificate} />

        {/* 11: About & Creative Philosophy (Design is not Decoration + Code x Design) */}
        <AboutSection />

        {/* 12: Contact & Engagement Dispatch */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Enterprise Oversized Footer */}
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
