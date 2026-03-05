import TechnologiesCarousel from "@/components/technologiesCarousel/index";
import { useTranslation } from "react-i18next";

export default function Technologies() {
  const { t } = useTranslation();

  return (
    <section id="technologies" className="min-h-screen flex items-center py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
          {t("technologiesCarousel.title")}
        </h2>
        <TechnologiesCarousel />
      </div>
    </section>
  );
}
