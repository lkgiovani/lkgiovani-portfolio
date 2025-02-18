import Image from "next/image";
import Section from "@/components/ui/section";
import SectionTitle from "@/components/ui/section-title";

export default function About() {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Your Name"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-cyan-400">
            Hello, I'm MD RIEAD MIA
          </h3>
          <p className="text-gray-300">
            I'm a passionate Frontend Developer with over 3 years of experience
            in creating responsive and user-friendly web applications. My
            journey in web development started with a curiosity for crafting
            beautiful user interfaces and has evolved into a deep love for
            solving complex problems through code.
          </p>
          <p className="text-gray-300">
            Specializing in React, Next.js, and modern CSS frameworks like
            Tailwind, I've had the privilege of working on diverse projects
            ranging from e-commerce platforms to sophisticated data
            visualization tools. My approach combines clean, efficient code with
            intuitive design to deliver exceptional user experiences.
          </p>
          <p className="text-gray-300">
            When I'm not coding, you can find me exploring new web technologies,
            contributing to open-source projects, or sharing my knowledge
            through tech blogs and community meetups. I'm always excited about
            taking on new challenges and pushing the boundaries of what's
            possible on the web.
          </p>
          <div className="pt-4">
            <h4 className="text-xl font-semibold text-cyan-400 mb-2">
              My Skills Include:
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-gray-300">
              <li>• React & Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• RESTful APIs</li>
              <li>• Git & Version Control</li>
              <li>• Responsive Design</li>
              <li>• Performance Optimization</li>
              <li>• UI/UX Best Practices</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
