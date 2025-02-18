"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type Experience = {
  id: number;
  company: string;
  logo: string;
  role: string;
  period: string;
  summary: string;
  description: string;
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
};

const experiences: Experience[] = [
  {
    id: 1,
    company: "TravClan",
    logo: "/baixados.jpg",
    role: "Senior Frontend Developer",
    period: "2022 - Present",
    summary:
      "Led frontend development for travel booking platforms, implementing responsive designs and modern UI/UX practices.",
    description:
      "Led the development of travel booking platforms and implemented responsive designs. Collaborated with cross-functional teams to deliver high-quality solutions.",
    testimonial: {
      text: "Collaborating with them has been a truly rewarding experience. As a highly skilled developer, their ability to develop innovative and compelling solutions for real-world challenges is second to none. Their extensive work with startups has equipped them with a unique understanding of building digital platforms.",
      author: "Piyush Chandra",
      position: "CTO at TravClan",
    },
  },
  {
    id: 2,
    company: "TEDxABSEC",
    logo: "/baixados.jpg",
    role: "Technical Lead",
    period: "2021 - 2022",
    summary:
      "Managed technical aspects of TEDx events including website and streaming solutions.",
    description:
      "Managed the technical aspects of TEDx events, including website development and live streaming integration.",
  },
  {
    id: 3,
    company: "Google Developer Student Clubs",
    logo: "/baixados.jpg",
    role: "Web Development Lead",
    period: "2020 - 2021",
    summary:
      "Led web development workshops and mentored students in modern web technologies.",
    description:
      "Led workshops and mentored students in web development technologies. Organized coding events and hackathons.",
  },
  {
    id: 4,
    company: "Startup Project",
    logo: "/baixados.jpg",
    role: "Frontend Developer",
    period: "2019 - 2020",
    summary:
      "Developed React and Next.js applications for various startup clients.",
    description:
      "Developed and maintained multiple web applications using React and Next.js.",
  },
];

export default function Services() {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {experiences.map((exp) => (
          <HoverCard key={exp.id}>
            <HoverCardTrigger asChild>
              <button className="group relative bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-all duration-300 w-full h-full">
                <div className="relative h-12 w-full mb-4">
                  <Image
                    src={exp.logo || "/baixados.jpg"}
                    alt={exp.company}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">
                  {exp.role}
                </p>
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-gray-900 border-gray-800">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-cyan-400">
                    {exp.role}
                  </h4>
                  <p className="text-sm text-gray-400">{exp.company}</p>
                  <p className="text-xs text-gray-500">{exp.period}</p>
                </div>
                <div className="relative h-12 w-12">
                  <Image
                    src={exp.logo || "/baixados.jpg"}
                    alt={exp.company}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-300 mt-2">{exp.summary}</p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>

      <Dialog
        open={!!selectedExperience}
        onOpenChange={() => setSelectedExperience(null)}
      >
        {selectedExperience && (
          <DialogContent className="sm:max-w-[600px] bg-gray-900 text-white border-gray-800">
            <DialogHeader>
              <div className="relative h-16 w-full mb-4">
                <Image
                  src={selectedExperience.logo || "/baixados.jpg"}
                  alt={selectedExperience.company}
                  fill
                  className="object-contain"
                />
              </div>
              <DialogTitle className="text-xl font-semibold">
                {selectedExperience.role}
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                {selectedExperience.period}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <p className="text-gray-300">{selectedExperience.description}</p>
              {selectedExperience.testimonial && (
                <div className="border-l-2 border-cyan-400 pl-4 mt-6">
                  <blockquote className="text-gray-300 italic">
                    "{selectedExperience.testimonial.text}"
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-medium">
                      {selectedExperience.testimonial.author}
                    </p>
                    <p className="text-sm text-gray-400">
                      {selectedExperience.testimonial.position}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
