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
  SiOpenjdk,
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
} from "react-icons/si";

export type Icon = {
  name:
    | "JavaScript"
    | "TypeScript"
    | "Go"
    | "Next.js"
    | "Node.js"
    | "PostgreSQL"
    | "MySQL"
    | "Redis"
    | "Rust"
    | "Python"
    | "React"
    | "Docker"
    | "Kubernetes"
    | "Kafka"
    | "Bun.js"
    | "Java"
    | "Spring Boot"
    | "RabbitMQ"
    | "Grafana"
    | "Prometheus"
    | "MongoDB"
    | "React Native"
    | "Zig"
    | "Terraform"
    | "NestJS"
    | "Jest"
    | "npm"
    | "GraphQL"
    | "Nginx"
    | "Tailwind"
    | "GitHub"
    | "Linux"
    | "Git";
  IconComponent: any;
  colorDark: string;
  colorLight: string;
};

export const icon: Icon[] = [
  {
    name: "JavaScript",
    IconComponent: SiJavascript,
    colorDark: "#F7DF1E",
    colorLight: "#F7DF1E",
  },
  {
    name: "TypeScript",
    IconComponent: SiTypescript,
    colorDark: "#3178C6",
    colorLight: "#3178C6",
  },
  {
    name: "Go",
    IconComponent: SiGo,
    colorDark: "#00ADD8",
    colorLight: "#00ADD8",
  },
  {
    name: "Next.js",
    IconComponent: SiNextdotjs,
    colorDark: "#ffffff",
    colorLight: "#000000",
  },
  {
    name: "Node.js",
    IconComponent: SiNodedotjs,
    colorDark: "#68A063",
    colorLight: "#68A063",
  },
  {
    name: "Bun.js",
    IconComponent: SiBun,
    colorDark: "#FBF0DF",
    colorLight: "#14120D",
  },
  {
    name: "Java",
    IconComponent: SiOpenjdk,
    colorDark: "#ED8B00",
    colorLight: "#ED8B00",
  },
  {
    name: "Spring Boot",
    IconComponent: SiSpring,
    colorDark: "#6DB33F",
    colorLight: "#6DB33F",
  },
  {
    name: "Python",
    IconComponent: SiPython,
    colorDark: "#FFD75E",
    colorLight: "#FFD75E",
  },
  {
    name: "React Native",
    IconComponent: SiReact,
    colorDark: "#61DAFB",
    colorLight: "#61DAFB",
  },
  {
    name: "RabbitMQ",
    IconComponent: SiRabbitmq,
    colorDark: "#FF6600",
    colorLight: "#FF6600",
  },
  {
    name: "Kafka",
    IconComponent: SiApachekafka,
    colorDark: "#ffffff",
    colorLight: "#231F20",
  },
  {
    name: "Grafana",
    IconComponent: SiGrafana,
    colorDark: "#F46800",
    colorLight: "#F46800",
  },
  {
    name: "Prometheus",
    IconComponent: SiPrometheus,
    colorDark: "#E6522C",
    colorLight: "#E6522C",
  },
  {
    name: "PostgreSQL",
    IconComponent: SiPostgresql,
    colorDark: "#336791",
    colorLight: "#336791",
  },
  {
    name: "MySQL",
    IconComponent: SiMysql,
    colorDark: "#4479A1",
    colorLight: "#4479A1",
  },
  {
    name: "MongoDB",
    IconComponent: SiMongodb,
    colorDark: "#47A248",
    colorLight: "#47A248",
  },
  {
    name: "Redis",
    IconComponent: SiRedis,
    colorDark: "#DC382D",
    colorLight: "#DC382D",
  },
  {
    name: "Docker",
    IconComponent: SiDocker,
    colorDark: "#2496ED",
    colorLight: "#2496ED",
  },
  {
    name: "Kubernetes",
    IconComponent: SiKubernetes,
    colorDark: "#326CE5",
    colorLight: "#326CE5",
  },
  {
    name: "Rust",
    IconComponent: SiRust,
    colorDark: "#ffffff",
    colorLight: "#000000",
  },
  {
    name: "Zig",
    IconComponent: SiZig,
    colorDark: "#F7A41D",
    colorLight: "#F7A41D",
  },
  {
    name: "Terraform",
    IconComponent: SiTerraform,
    colorDark: "#7B42BC",
    colorLight: "#7B42BC",
  },
  {
    name: "NestJS",
    IconComponent: SiNestjs,
    colorDark: "#E0234E",
    colorLight: "#E0234E",
  },
  {
    name: "Jest",
    IconComponent: SiJest,
    colorDark: "#C21325",
    colorLight: "#C21325",
  },
  {
    name: "npm",
    IconComponent: SiNpm,
    colorDark: "#CB3837",
    colorLight: "#CB3837",
  },
  {
    name: "GraphQL",
    IconComponent: SiGraphql,
    colorDark: "#E10098",
    colorLight: "#E10098",
  },
  {
    name: "Nginx",
    IconComponent: SiNginx,
    colorDark: "#009639",
    colorLight: "#009639",
  },
  {
    name: "Tailwind",
    IconComponent: SiTailwindcss,
    colorDark: "#06B6D4",
    colorLight: "#06B6D4",
  },
  {
    name: "GitHub",
    IconComponent: SiGithub,
    colorDark: "#ffffff",
    colorLight: "#181717",
  },
  {
    name: "Linux",
    IconComponent: SiLinux,
    colorDark: "#FCC624",
    colorLight: "#FCC624",
  },
  {
    name: "Git",
    IconComponent: SiGit,
    colorDark: "#F05032",
    colorLight: "#F05032",
  },
];
