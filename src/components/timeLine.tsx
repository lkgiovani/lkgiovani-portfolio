import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Code, Briefcase, GraduationCap, Award } from "lucide-react";
import { useRef } from "react";
import Section from "./ui/section";

const timelineEvents = [
  {
    date: "Janeiro 2020",
    title: "Graduação em Ciência da Computação",
    description:
      "Concluí minha graduação com honras, focando em Inteligência Artificial e Desenvolvimento Web.",
    icon: GraduationCap,
  },
  {
    date: "Março 2020",
    title: "Primeiro Projeto Freelance",
    description:
      "Desenvolvi um site de e-commerce completo para uma loja local de artesanato.",
    icon: Code,
  },
  {
    date: "Setembro 2020",
    title: "Estágio em Startup de Tecnologia",
    description:
      "Trabalhei em uma equipe ágil, desenvolvendo features para um app de produtividade.",
    icon: Briefcase,
  },
  {
    date: "Junho 2021",
    title: "Lançamento de App Pessoal",
    description:
      "Criei e lancei meu primeiro aplicativo móvel: um organizador de tarefas com mais de 10k downloads.",
    icon: Calendar,
  },
  {
    date: "Dezembro 2021",
    title: "Prêmio de Inovação Tecnológica",
    description:
      "Recebi um prêmio local por contribuições inovadoras em projetos de código aberto.",
    icon: Award,
  },
];

const TimelineEvent = ({ event, index }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [index % 2 === 0 ? 50 : -50, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, x }}
      className={`mb-12 flex justify-between items-center w-full ${
        index % 2 === 0 ? "flex-row-reverse left-timeline" : "right-timeline"
      }`}
    >
      <div className="order-1 w-5/12"></div>
      <motion.div
        className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full "
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <event.icon className="w-6 h-6 text-primary-foreground mx-auto" />
      </motion.div>
      <motion.div
        className="order-1 bg-primary/10 dark:bg-primary/20 rounded-lg shadow-xl w-5/12 px-6 py-4 backdrop-blur-sm bg-opacity-80"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(183, 36, 73, 0.7)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <h3 className="mb-3 font-bold text-foreground text-xl">
          {event.title}
        </h3>
        <p className="text-sm leading-snug tracking-wide text-foreground text-opacity-100">
          {event.description}
        </p>
        <p className="mt-2 text-xs text-foreground font-semibold">
          {event.date}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default function PortfolioTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="services">
      <div ref={ref} className="container mx-auto px-4 py-16  min-h-screen">
        <motion.h2
          className="text-4xl font-bold  text-foreground text-center mb-12 "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Minha Jornada Profissional
        </motion.h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <motion.div
            className="border-2-2 absolute border-primary h-full border"
            style={{
              left: "50%",
              height: lineHeight,
              background: "linear-gradient(to bottom, #9333ea, #c084fc)",
            }}
          />
          {timelineEvents.map((event, index) => (
            <TimelineEvent key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
