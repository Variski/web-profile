"use client";

import HeroSection from "@/components/hero-section";
import AppNavbar from "@/components/navbar";
import AboutSection from "@/components/about-section";
import ServiceSection from "@/components/service";
import ProjectSection from "@/components/project";
import ContactSection from "@/components/contact";



export default function Home() {
  return (
    <>
      <AppNavbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection/>
      <ProjectSection/>
      <ContactSection />
    </>
  );
}
