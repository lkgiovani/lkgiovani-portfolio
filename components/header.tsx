"use client";

import ModeToggle from "./modeToggle";

type HeaderProps = {
  activeSection: string;
};

export default function Header({ activeSection }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = ["home", "about", "technologies", "services", "contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm  ">
      <nav className="container mx-auto px-4 py-6  ">
        <ul className="flex relative justify-end space-x-8 items-center ">
          <div className=" flex mx-auto gap-4">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`capitalize ${
                    activeSection === item
                      ? "text-primary"
                      : "text-foreground hover:text-primary/75"
                  } transition-colors`}
                >
                  {item}
                </button>
              </li>
            ))}
          </div>
          <li className="absolute right-0">
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
