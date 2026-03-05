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
    | "Kafka";
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
    name: "Redis",
    IconComponent: SiRedis,
    colorDark: "#DC382D",
    colorLight: "#DC382D",
  },
  {
    name: "Rust",
    IconComponent: SiRust,
    colorDark: "#ffffff",
    colorLight: "#000000",
  },
  {
    name: "Python",
    IconComponent: SiPython,
    colorDark: "#FFD75E",
    colorLight: "#FFD75E",
  },
  {
    name: "React",
    IconComponent: SiReact,
    colorDark: "#61DAFB",
    colorLight: "#61DAFB",
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
    name: "Kafka",
    IconComponent: SiApachekafka,
    colorDark: "#ffffff",
    colorLight: "#231F20",
  },
];
