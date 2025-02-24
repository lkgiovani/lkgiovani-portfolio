import Image from "next/image";
import Section from "@/components/ui/section";
import SectionTitle from "@/components/ui/section-title";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <Section id="about">
      <SectionTitle>{t("about-me.title")}</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Image
            src="/baixados.jpg"
            alt="Your Name"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-primary">
            {t("about-me.title2")} Giovani
          </h3>
          <p className="text-foreground/80">{t("about-me.description1")}</p>
          <p className="text-foreground/80">{t("about-me.description2")}</p>
          <p className="text-foreground/80">{t("about-me.description3")}</p>
        </div>
      </div>
    </Section>
  );
}
