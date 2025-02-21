import Image from "next/image";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const socialLinks = [
  { Icon: Github, likes: "https://github.com/lkgiovani" },
  { Icon: Linkedin, likes: "https://www.linkedin.com/in/lkgiovani/" },
  { Icon: Mail, likes: "mailto:lkgiovani@gmail.com" },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="h-screen flex items-center relative ">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            {t("hero.about")}
          </h1>
          <h2 className="text-2xl mb-6 text-foreground ">
            {t("hero.iAm")}
            <span className="text-primary"> Full-stack Developer</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl">{t("hero.description")}</p>

          <div className="flex gap-4 mb-8">
            {socialLinks.map((Icon, index) => (
              <a
                key={index}
                href={Icon.likes}
                className="w-10 h-10 rounded-full border border-primary/80 flex items-center justify-center hover:bg-foreground/20 transition-colors text-foreground "
                target="_blank"
              >
                <Icon.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <Button className="bg-primary hover:bg-primary/70 text-background">
              Download CV
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="hexagon-container">
            <Image
              src={`baixados.jpg`}
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
