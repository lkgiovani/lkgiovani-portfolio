import Section from "@/components/ui/section";
import SectionTitle from "@/components/ui/section-title";
import { useTranslation } from "react-i18next";
import SVGComponent from "../logo";
import Reveal from "@/components/ui/reveal";

export default function About() {
  const { t } = useTranslation();

  return (
    <Section id="about">
      <Reveal>
        <SectionTitle>{t("about-me.title")}</SectionTitle>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        <Reveal direction="right" className="flex justify-center items-center py-4">
          <SVGComponent className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]" />
        </Reveal>
        <div className="space-y-3 md:space-y-4 text-center md:text-left">
          <Reveal delay={0.1}>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary">
              {t("about-me.title2")} Giovani
            </h3>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-foreground/80">{t("about-me.description1")}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-sm sm:text-base text-foreground/80">{t("about-me.description2")}</p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-sm sm:text-base text-foreground/80">{t("about-me.description3")}</p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
