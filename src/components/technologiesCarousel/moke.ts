import type { ComponentType } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiGo,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiRust,
  SiPython,
  SiReact,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiBun,
  SiSpring,
  SiRabbitmq,
  SiGrafana,
  SiPrometheus,
  SiMongodb,
  SiZig,
  SiTerraform,
  SiNestjs,
  SiJest,
  SiNpm,
  SiGraphql,
  SiNginx,
  SiTailwindcss,
  SiGithub,
  SiLinux,
  SiGit,
  SiGnubash,
  SiClickhouse,
  SiDuckdb,
  SiDatadog,
  SiOpentelemetry,
  SiNewrelic,
  SiGithubactions,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";
import { Boxes, Cloud, Container, FlaskConical, Layers, Network } from "lucide-react";

export type Icon = {
  name: string;
  IconComponent: ComponentType<{ size?: number; color?: string }>;
  colorDark: string;
  colorLight: string;
};

const tech = (
  name: string,
  IconComponent: Icon["IconComponent"],
  colorDark: string,
  colorLight: string = colorDark,
): Icon => ({ name, IconComponent, colorDark, colorLight });

// Serviços de nuvem não têm glifo próprio no Simple Icons, então usam o logo do provedor.
const aws = (name: string) => tech(name, FaAws, "#FF9900", "#C77700");
const azure = (name: string) => tech(name, VscAzure, "#3AA0FF", "#0078D4");

const languages: Icon[] = [
  tech("Go", SiGo, "#00ADD8", "#007D9C"),
  tech("TypeScript", SiTypescript, "#3178C6"),
  tech("JavaScript", SiJavascript, "#F7DF1E", "#B8A100"),
  tech("Java", FaJava, "#F89820", "#E76F00"),
  tech("Zig", SiZig, "#F7A41D", "#C47F0E"),
  tech("Python", SiPython, "#FFD75E", "#3776AB"),
  tech("Rust", SiRust, "#ffffff", "#000000"),
  tech("Node.js", SiNodedotjs, "#68A063", "#3C873A"),
  tech("Bun", SiBun, "#FBF0DF", "#14120D"),
];

const frameworks: Icon[] = [
  tech("NestJS", SiNestjs, "#E0234E"),
  tech("Spring Boot", SiSpring, "#6DB33F", "#4E8A2C"),
  tech("React", SiReact, "#61DAFB", "#0E8AAE"),
  tech("Next.js", SiNextdotjs, "#ffffff", "#000000"),
  tech("Tailwind", SiTailwindcss, "#06B6D4", "#0891B2"),
  tech("GraphQL", SiGraphql, "#E10098"),
];

// Serviços gerenciados de nuvem ficam na área em que são usados (mensageria, bancos,
// observabilidade), para cada tecnologia aparecer uma única vez na seção.
const messaging: Icon[] = [
  tech("Kafka", SiApachekafka, "#ffffff", "#231F20"),
  tech("RabbitMQ", SiRabbitmq, "#FF6600", "#D45500"),
  aws("Amazon SQS"),
  aws("Amazon EventBridge"),
  aws("Amazon MSK"),
  azure("Service Bus"),
  azure("Storage Queues"),
  azure("Event Grid"),
  azure("Event Hubs"),
];

const databases: Icon[] = [
  tech("PostgreSQL", SiPostgresql, "#5B8FC7", "#336791"),
  tech("MySQL", SiMysql, "#5D9BCB", "#4479A1"),
  tech("MongoDB", SiMongodb, "#47A248", "#3B8A3C"),
  tech("Redis", SiRedis, "#DC382D"),
  tech("ClickHouse", SiClickhouse, "#FFCC01", "#A88600"),
  tech("DuckDB", SiDuckdb, "#FFF000", "#8C8200"),
  aws("DynamoDB"),
  aws("Amazon RDS"),
  aws("Amazon Aurora"),
  aws("ElastiCache"),
  azure("Cosmos DB"),
  azure("Azure Database for PostgreSQL"),
  azure("Azure Cache for Redis"),
];

const observability: Icon[] = [
  tech("Datadog", SiDatadog, "#A37FE0", "#632CA6"),
  tech("OpenTelemetry", SiOpentelemetry, "#8A9CF0", "#425CC7"),
  tech("Grafana", SiGrafana, "#F46800", "#D35A00"),
  tech("Prometheus", SiPrometheus, "#E6522C", "#C9431F"),
  tech("Loki", SiGrafana, "#F46800", "#D35A00"),
  tech("Tempo", SiGrafana, "#F46800", "#D35A00"),
  tech("New Relic", SiNewrelic, "#1CE783", "#00965A"),
  aws("CloudWatch"),
  aws("AWS X-Ray"),
  azure("Azure Monitor"),
  azure("Application Insights"),
];

const awsServices: Icon[] = [
  aws("AWS Lambda"),
  aws("API Gateway"),
  aws("Amazon S3"),
  aws("Amazon ECS"),
  aws("Amazon EKS"),
  aws("AWS Fargate"),
  aws("Amazon ECR"),
  aws("Secrets Manager"),
  aws("CodePipeline"),
];

const azureServices: Icon[] = [
  azure("Azure Functions"),
  azure("API Management"),
  azure("Blob Storage"),
  azure("AKS"),
  azure("Container Instances"),
  azure("ACR"),
  azure("Key Vault"),
  tech("Azure DevOps", VscAzureDevops, "#3AA0FF", "#0078D4"),
];

const infra: Icon[] = [
  tech("Docker", SiDocker, "#2496ED", "#1D7ACB"),
  tech("Kubernetes", SiKubernetes, "#326CE5"),
  tech("Terraform", SiTerraform, "#A374E8", "#7B42BC"),
  tech("Nginx", SiNginx, "#00B140", "#009639"),
  tech("Linux", SiLinux, "#FCC624", "#B38A00"),
  tech("Bash", SiGnubash, "#4EAA25", "#3B8A1B"),
];

const tooling: Icon[] = [
  tech("Testcontainers", Container, "#3FC4B4", "#17866F"),
  tech("Jest", SiJest, "#E8485A", "#C21325"),
  tech("GitHub Actions", SiGithubactions, "#2088FF", "#1A6FD6"),
  tech("Git", SiGit, "#F05032", "#D2401F"),
  tech("GitHub", SiGithub, "#ffffff", "#181717"),
  tech("npm", SiNpm, "#CB3837"),
];

const practices: Icon[] = [
  tech("Clean Architecture", Layers, "#CBF615", "#000000"),
  tech("DDD", Boxes, "#CBF615", "#000000"),
  tech("TDD", FlaskConical, "#CBF615", "#000000"),
  tech("Microservices", Network, "#CBF615", "#000000"),
  tech("Serverless", Cloud, "#CBF615", "#000000"),
];

export type TechCategory = {
  /** Chave de tradução em technologiesCarousel.categories.<key>. */
  key: string;
  items: Icon[];
};

// Ordem de leitura da seção: o que mais pesa num back-end vem primeiro. Em 3 colunas,
// cada linha junta cartões de tamanho parecido para as alturas ficarem próximas.
export const categories: TechCategory[] = [
  { key: "languages", items: languages },
  { key: "messaging", items: messaging },
  { key: "frameworks", items: frameworks },
  { key: "databases", items: databases },
  { key: "observability", items: observability },
  { key: "aws", items: awsServices },
  { key: "azure", items: azureServices },
  { key: "infra", items: infra },
  { key: "tooling", items: tooling },
  { key: "practices", items: practices },
];
