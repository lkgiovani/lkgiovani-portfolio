"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, Facebook, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

import Services from "@/components/services";
import TechnologiesCarousel from "@/components/technologies-carousel";
import Header from "@/components/header";

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
        {/* Hero Section */}
        <section id="home" className="h-screen flex items-center relative">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">MD RIEAD MIA</h1>
              <h2 className="text-2xl mb-6">
                And I'm a{" "}
                <span className="text-cyan-400">Frontend Developer</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl">
                I'm professional web developer with strong skill in HTML, CSS,
                JavaScript, Tailwind, JQuery etc. I have working in this field
                almost 3 years and all projects are complited successfully with
                100% client satisfiction.
              </p>
              <div className="flex gap-4 mb-8">
                {[Facebook, Github, Linkedin, Mail].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full border border-cyan-400/50 flex items-center justify-center hover:bg-cyan-400/10 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="flex gap-4">
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-black">
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                >
                  Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="hexagon-container">
                <Image
                  src={`/baixados.jpg`}
                  alt="Profile"
                  width={400}
                  height={400}
                  className="hexagon-image"
                />
              </div>
            </div>
          </div>
        </section>

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

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Contact <span className="text-cyan-400">Me</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <Image
                  src="/baixados.jpg"
                  alt="Logo"
                  width={150}
                  height={60}
                  className="mb-6"
                />
                <p className="text-gray-400 mb-8">
                  I am professional Web designer. I have designed more than 50
                  web template for my client. You can hire me for design your
                  personal, business or other website template. You can trust
                  me. I complied your work with your full satisfaction
                </p>
                <div className="flex gap-6">
                  <a
                    href="tel:+1234567890"
                    className="w-10 h-10 rounded-full border border-cyan-400/50 flex items-center justify-center hover:bg-cyan-400/10 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:example@email.com"
                    className="w-10 h-10 rounded-full border border-cyan-400/50 flex items-center justify-center hover:bg-cyan-400/10 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-cyan-400/50 flex items-center justify-center hover:bg-cyan-400/10 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-cyan-400/50 flex items-center justify-center hover:bg-cyan-400/10 transition-colors"
                  >
                    <MapPin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-cyan-400/50 flex items-center justify-center hover:bg-cyan-400/10 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 focus:outline-none"
                  />
                  <textarea
                    placeholder="Message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 focus:outline-none resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg bg-cyan-400 hover:bg-cyan-500 text-black font-medium transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
