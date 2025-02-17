"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, Facebook, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

import Services from "@/components/works";
import TechnologiesCarousel from "@/components/technologies-carousel";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white">
      <Header activeSection={activeSection} />
      <main>
        <HeroSection />
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            {/* Add your about content here */}
          </div>
        </section>
        {/* Technologies Section */}
        <section
          id="technologies"
          className="min-h-screen flex items-center py-20"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Tecnologias
            </h2>
            <TechnologiesCarousel />
          </div>
        </section>
        {/* Services Section */}
        <section id="services" className="min-h-screen flex items-center py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Work Experience
            </h2>
            <Services />
          </div>
        </section>
        <ContactSection />
      </main>
    </div>
  );
}
