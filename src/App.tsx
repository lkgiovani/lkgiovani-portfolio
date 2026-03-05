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
