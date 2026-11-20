import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-[calc(100%+2rem)] -mx-4 -mb-4 mt-auto bg-background text-foreground border-t border-border/40 px-2 py-2">
      <p className="text-center text-sm">
        © {new Date().getFullYear()} Giovani Souza. {t("footer.rights")}
      </p>
    </footer>
  );
}

export default Footer;
