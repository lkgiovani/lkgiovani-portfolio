"use client";

import { useRouter, usePathname } from "next/navigation";
import { US, BR, ES } from "country-flag-icons/react/3x2";
import { useLocale } from "next-intl";
import Cookies from "js-cookie";
import SwitchTranslator from "../ui/switchTranslator";
import { languages } from "@/i18n/Config";

export const Language = () => {
  const router = useRouter();
  const currentLocale = useLocale();

  const options = [
    {
      value: "pt-br",
      label: "Português",
      icon: <BR className="max-w-5" aria-label="Brasil" />,
    },
    {
      value: "en",
      label: "English",
      icon: <US className="max-w-5" aria-label="United States" />,
    },
    {
      value: "es",
      label: "Español",
      icon: <ES className="max-w-5" aria-label="España" />,
    },
  ];

  const changeLanguage = (newLocale: string) => {
    Cookies.set("NEXT_LOCALE", newLocale, { path: "/" });
    router.refresh();
  };

  const getCurrentLanguage = () => {
    return (
      languages.find((lang) => lang.code === currentLocale) || languages[0]
    );
  };

  return (
    <SwitchTranslator
      handleChange={changeLanguage}
      value={currentLocale}
      options={options}
      label={getCurrentLanguage().region}
    />
  );
};
