"use client";

import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { useRouter, usePathname } from "next/navigation";
import { US, BR } from "country-flag-icons/react/3x2";
import SwitchTranslator from "../ui/switchTranslator";

export const Language = () => {
  const { i18n, t } = useTranslation();
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = i18n.language;

  const options = [
    {
      value: "pt",
      label: "Português",
      icon: <BR className="max-w-5" aria-label="Brasil" />,
    },
    {
      value: "en",
      label: "English",
      icon: <US className="max-w-5" aria-label="United States" />,
    },
  ];

  const handleChange = async (locale?: string) => {
    if (!locale || locale === currentLocale) return;

    // Atualiza o idioma no i18next
    await i18n.changeLanguage(locale);

    // Atualiza a URL para refletir o novo idioma
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + locale + currentPathname);
    } else {
      router.push(
        currentPathname
          ? currentPathname.replace(`/${currentLocale}`, `/${locale}`)
          : `/${locale}`
      );
    }

    router.refresh();
  };

  return (
    <SwitchTranslator
      handleChange={handleChange}
      value={currentLocale}
      options={options}
      label={t("header.locale.label")}
    />
  );
};
