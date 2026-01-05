"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollNavigation() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);
  const [currentSection, setCurrentSection] = useState("home");

  const sections = ["home", "about", "technologies", "services", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setShowScrollTop(scrollPosition > 300);

      setShowScrollDown(scrollPosition + windowHeight < documentHeight - 100);

      const sectionElements = document.querySelectorAll("section");
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sectionElements.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    const currentIndex = sections.indexOf(currentSection);

    if (currentIndex === -1 || currentIndex >= sections.length - 1) {
      return;
    }

    const nextSectionId = sections[currentIndex + 1];
    const nextSection = document.getElementById(nextSectionId);

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full shadow-lg backdrop-blur-sm bg-background/80 hover:bg-background/90 border-2 hover:scale-110 transition-transform"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-8 w-8 text-primary" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollDown && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={scrollDown}
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full shadow-lg backdrop-blur-sm bg-background/80 hover:bg-background/90 border-2 hover:scale-110 transition-transform"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-8 w-8 text-primary" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
