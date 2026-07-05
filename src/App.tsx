import { useState, useEffect } from "react";
import { ThemeProvider } from "./provider/theme-provider";
import Header from "./components/sections/header";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Technologies from "./components/sections/technologies";
import PortfolioTimeline from "./components/sections/timeLine";
import Contact from "./components/sections/contact";
import ScrollNavigation from "./components/ScrollNavigation";
import Footer from "./components/sections/footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));
    // Track how much of the viewport each section covers; the dominant one wins.
    const coverage = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          coverage.set(entry.target.id, entry.intersectionRect.height);
        }

        let bestId = "";
        let bestCoverage = 0;
        for (const [id, height] of coverage) {
          if (height > bestCoverage) {
            bestCoverage = height;
            bestId = id;
          }
        }

        if (bestId) setActiveSection(bestId);
      },
      {
        // Discount the fixed header so a section counts as "active" once it
        // clears the header, not only when it reaches the viewport center.
        rootMargin: "-96px 0px 0px 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="min-h-screen text-white flex flex-col rounded-2xl p-4">
        <Header activeSection={activeSection} />
        <main className="flex-1">
          <Hero />
          <About />
          <Technologies />
          <PortfolioTimeline />
          <Contact />
        </main>
        <ScrollNavigation />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
