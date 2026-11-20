import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Reveal from "@/components/ui/reveal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const socialLinks = [
  { Icon: Github, likes: "https://github.com/lkgiovani" },
  { Icon: Linkedin, likes: "https://www.linkedin.com/in/lkgiovani/" },
  { Icon: Mail, likes: "mailto:lkgiovani.dev@gmail.com" },
];

export default function Hero() {
  const { t } = useTranslation();
  const rawStats = t("hero.stats", { returnObjects: true });
  const stats = Array.isArray(rawStats) ? (rawStats as { value: string; label: string }[]) : [];

  const handleDownload = (lang: string) => {
    const fileUrl = lang === "pt" ? "./currículo.pdf" : "./curriculum.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    const fileName = fileUrl.split("/").pop() || "download.pdf";
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="flex items-center relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Reveal delay={0}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-foreground">
              Giovani Souza
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-xl sm:text-2xl mb-3 md:mb-6 text-foreground">
              {t("hero.iAm")}
              <span className="text-primary"> {t("hero.position")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground mb-6 max-w-xl">{t("hero.description")}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <dl className="grid grid-cols-3 gap-4 max-w-xl mb-6 md:mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col justify-start gap-1 border-l-2 border-primary pl-3">
                  <dt className="order-last text-xs md:text-sm text-muted-foreground">{stat.label}</dt>
                  <dd className="text-2xl md:text-3xl font-bold leading-none text-foreground tabular-nums">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex gap-3 md:gap-4 mb-6 md:mb-8">
              {socialLinks.map((Icon, index) => (
                <a
                  key={index}
                  href={Icon.likes}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-primary/80 flex items-center justify-center hover:bg-foreground/20 transition-colors text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon.Icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex gap-4">
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base">
                    {t("hero.downloadCv")}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => handleDownload("pt")}>PT-BR</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDownload("en")}>EN</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Reveal>
        </div>
        <Reveal direction="left" delay={0.15} className="flex justify-center items-center">
          <Avatar className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
            <AvatarImage src="./eu.png" alt="Giovani Souza" />
            <AvatarFallback>GS</AvatarFallback>
          </Avatar>
        </Reveal>
      </div>
    </section>
  );
}
