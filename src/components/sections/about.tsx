import Image from "next/image";
import Section from "@/components/ui/section";
import SectionTitle from "@/components/ui/section-title";
import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import SVGComponent from "../logo";

export default function About() {
  const t = useTranslations("about-me");

  return (
    <Section id="about">
      <SectionTitle>{t("title")}</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center items-center hexagon-container">
          <SVGComponent className="w-[150px] h-[150px]" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-primary">
            {t("title2")} Giovani
          </h3>
          <p className="text-foreground/80">{t("description1")}</p>
          <p className="text-foreground/80">{t("description2")}</p>
          <p className="text-foreground/80">{t("description3")}</p>
        </div>
      </div>
    </Section>
  );
}
