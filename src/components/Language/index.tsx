import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { languages } from "@/i18n/Config";
import { BR, ES, FR, KR, RU, US } from "country-flag-icons/react/3x2";
import { Button } from "../ui/button";

interface ToggleLanguageProps {
  type?: "icon" | "text";
}

export const Language = ({ type = "icon" }: ToggleLanguageProps) => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const changeLanguage = (newLocale: string) => {
    Cookies.set("APP_LOCALE", newLocale, { path: "/" });
    i18n.changeLanguage(newLocale);
  };

  const getCurrentLanguage = () => {
    return languages.find((lang) => lang.code === currentLocale) || languages[0];
  };

  const currentLang = getCurrentLanguage();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-auto px-4 gap-2 ml-auto">
          {type === "icon" ? (
            <>
              {currentLang.code === "en" ? (
                <US className="h-[1.2rem] w-[1.2rem]" aria-label="English" />
              ) : currentLang.code === "es" ? (
                <ES className="h-[1.2rem] w-[1.2rem]" aria-label="Español" />
              ) : currentLang.code === "fr" ? (
                <FR className="h-[1.2rem] w-[1.2rem]" aria-label="Français" />
              ) : currentLang.code === "ko" ? (
                <KR className="h-[1.2rem] w-[1.2rem]" aria-label="한국어" />
              ) : currentLang.code === "ru" ? (
                <RU className="h-[1.2rem] w-[1.2rem]" aria-label="Русский" />
              ) : (
                <BR className="h-[1.2rem] w-[1.2rem]" aria-label="Português" />
              )}
            </>
          ) : (
            <span className="text-foreground text-lg">{currentLang.name}</span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className="flex items-center justify-between cursor-pointer"
            onClick={() => changeLanguage(language.code)}
          >
            <div className="flex items-center gap-2">
              <span className="text-base">{language.flag}</span>
              <span>{language.name}</span>
            </div>
            {currentLocale === language.code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <div className="p-2 text-xs text-muted-foreground">{currentLang.region}</div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
