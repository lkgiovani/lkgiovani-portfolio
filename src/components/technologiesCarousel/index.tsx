import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { categories } from "./moke";

// Cartões que ocupam a linha inteira para nenhum ficar sozinho no fim da grade:
// com 10 categorias, "practices" fecha a grade de 3 colunas e "tooling" a de 2.
const spanClass: Record<string, string> = {
  tooling: "md:col-span-2 lg:col-span-1",
  practices: "md:col-span-2 lg:col-span-3",
};

function TechnologiesGrid() {
  const { t } = useTranslation();
  const { theme, resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark" || theme === "dark";

  return (
    // Grade em linhas: cartões da mesma linha começam e terminam juntos.
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <article
          key={category.key}
          aria-labelledby={`tech-${category.key}`}
          className={`h-full rounded-lg border border-border bg-card p-5 ${spanClass[category.key] ?? ""}`}
        >
          <div className="flex items-baseline justify-between gap-3 mb-4">
            <h3 id={`tech-${category.key}`} className="text-base font-semibold text-card-foreground">
              {t(`technologiesCarousel.categories.${category.key}`)}
            </h3>
            <span className="text-xs text-muted-foreground tabular-nums">{category.items.length}</span>
          </div>
          <ul className="flex flex-wrap gap-2">
            {category.items.map((item) => {
              const { IconComponent } = item;
              const color = isDarkMode ? item.colorDark : item.colorLight;
              return (
                <li
                  key={item.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-background text-sm text-foreground"
                >
                  <IconComponent size={16} color={color} />
                  <span className="whitespace-nowrap">{item.name}</span>
                </li>
              );
            })}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default TechnologiesGrid;
