"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/EditorialMarquee";
import AboutSection from "@/components/AboutSection";
import SkillsEcosystem from "@/components/SkillsEcosystem";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectShowcase from "@/components/ProjectShowcase";
import ArchitectureSection from "@/components/ArchitectureSection";
import CreativeSection from "@/components/CreativeSection";
import AnalyticsSection from "@/components/AnalyticsSection";
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
    <div className="min-h-screen bg-black text-[#F5F5F5] selection:bg-[#A100FF] selection:text-white relative">
      {/* Sticky Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* 01: Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Dynamic Continuous Marquee Ticker */}
        <EditorialMarquee />

        {/* 02: About & Philosophy + Verified Metrics */}
        <AboutSection />

        {/* 03: Interactive Technology Ecosystem */}
        <SkillsEcosystem />

        {/* 04: Professional Career Experience Timeline */}
        <ExperienceTimeline onOpenCertificate={handleOpenCertificate} />

        {/* 05: Featured Project Laboratory & Showcase */}
        <ProjectShowcase />

        {/* 06: How I Build - Enterprise Architecture Topology */}
        <ArchitectureSection />

        {/* 07: Code x Design - Creative Technology & UI/UX */}
        <CreativeSection />

        {/* 08: Data -> Insight - Analytics & Telematics Visualizer */}
        <AnalyticsSection />

        {/* 09: Formal Academic Education */}
        <EducationSection />

        {/* 10: Verified Professional Certifications */}
        <CertificationsSection onOpenCertificateModal={handleOpenCertificate} />

        {/* 11: Contact & Engagement Dispatch */}
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
