"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="h-screen flex items-center relative">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">MD RIEAD MIA</h1>
          <h2 className="text-2xl mb-6">
            And I'm a <span className="text-cyan-400">Frontend Developer</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl">
            I'm professional web developer with strong skill in HTML, CSS,
            JavaScript, Tailwind, JQuery etc. I have working in this field
            almost 3 years and all projects are complited successfully with 100%
            client satisfiction.
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
  );
}
