"use client";

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

  const navItems = ["home", "about", "technologies", "Works", "contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a051a]/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`capitalize ${
                  activeSection === item
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-white"
                } transition-colors`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
