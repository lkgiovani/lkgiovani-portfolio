"use client";

import { useTranslation } from "react-i18next";
import { Language } from "./Language";
import ModeToggle from "./modeToggle";

type HeaderProps = {
  activeSection: string;
};

type NavItems = {
  label: string;
  value: string;
};

export default function Header({ activeSection }: HeaderProps) {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = t("header.nav", { returnObjects: true }) as NavItems[];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm  ">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex relative justify-end space-x-8 items-center ">
          <ul className="flex mx-auto gap-4">
            {navItems.map((item) => (
              <li key={item.value}>
                <button
                  onClick={() => scrollToSection(item.value)}
                  className={`capitalize ${
                    activeSection === item.value
                      ? "text-primary"
                      : "text-foreground hover:text-primary/75"
                  } transition-colors`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 absolute right-0">
            <ModeToggle />
            <Language />
          </div>
        </div>
      </nav>
    </header>
  );
}
