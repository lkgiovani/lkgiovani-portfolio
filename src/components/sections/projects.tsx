import { Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import Section from "@/components/ui/section";
import SectionTitle from "@/components/ui/section-title";
import Reveal from "@/components/ui/reveal";

// Textos ficam em messages/*.json (projects.items.<key>); aqui só o que não muda com o idioma.
const projects = [
  {
    key: "kafkaObservability",
    name: "kafka_observability",
    repo: "https://github.com/lkgiovani/kafka_observability",
    tags: ["Go", "Kafka", "OpenTelemetry", "Grafana"],
  },
  {
    key: "goBoilerplate",
    name: "golang_boilerplate_moduler",
    repo: "https://github.com/lkgiovani/golang_boilerplate_moduler",
    tags: ["Go", "Clean Architecture", "PostgreSQL", "Testcontainers"],
  },
  {
    key: "coolerDisplay",
    name: "linux-tgt-cooler-display",
    repo: "https://github.com/lkgiovani/linux-tgt-cooler-display",
    tags: ["Go", "Linux", "HID", "systemd"],
  },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <Section id="projects">
      <Reveal>
        <SectionTitle>{t("projects.title")}</SectionTitle>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Reveal key={project.key} delay={index * 0.1} className="h-full">
            <article className="h-full flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/60">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-card-foreground">
                  {t(`projects.items.${project.key}.title`)}
                </h3>
                <p className="font-mono text-xs text-muted-foreground break-all">{project.name}</p>
              </div>
              <p className="text-sm text-foreground/80 flex-1">
                {t(`projects.items.${project.key}.description`)}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-primary/10 text-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4 self-start"
              >
                <Github className="w-4 h-4" />
                {t("projects.viewCode")}
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
