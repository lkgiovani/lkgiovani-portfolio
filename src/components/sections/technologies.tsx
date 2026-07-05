import TechnologiesCarousel from "@/components/technologiesCarousel/index";
import { useTranslation } from "react-i18next";
import Reveal from "@/components/ui/reveal";

export default function Technologies() {
  const { t } = useTranslation();

  return (
    <section id="technologies" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            {t("technologiesCarousel.title")}
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="-mx-4 md:mx-0">
          <TechnologiesCarousel />
        </Reveal>
      </div>
    </section>
  );
}
