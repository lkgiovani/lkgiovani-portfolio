import TechnologiesCarousel from "@/components/technologiesCarousel/index";
import { useTranslation } from "react-i18next";

export default function Technologies() {
  const { t } = useTranslation();

  return (
    <section id="technologies" className="py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
          {t("technologiesCarousel.title")}
        </h2>
        <div className="-mx-4 md:mx-0">
          <TechnologiesCarousel />
        </div>
      </div>
    </section>
  );
}
