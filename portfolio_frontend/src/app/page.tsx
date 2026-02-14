import type { JSX } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HomeSection from "@/components/sections/HomeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-dvh bg-[var(--background)] text-[var(--text)]">
      <Navbar />

      {/* Offset the fixed navbar height */}
      <main className="pt-16">
        <HomeSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
