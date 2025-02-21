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
          <div className="pt-4">
            <h4 className="text-xl font-semibold text-primary mb-2">
              {t("about-me.title3")}:
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-foreground">
              <li>• React & Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• RESTful APIs</li>
              <li>• Git & Version Control</li>
              <li>• Responsive Design</li>
              <li>• Performance Optimization</li>
              <li>• UI/UX Best Practices</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
