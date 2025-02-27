import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Code, Briefcase, GraduationCap, Award } from "lucide-react";
import { useRef } from "react";
import Section from "../ui/section";
import { useTranslations } from "next-intl";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const iconMap = {
  graduation: GraduationCap,
  code: Code,
  briefcase: Briefcase,
  calendar: Calendar,
  award: Award,
};

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

  const Icon = iconMap[event.icon as keyof typeof iconMap] || Calendar;

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
        className=" z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full "
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Icon className="w-6 h-6 text-primary-foreground mx-auto" />
      </motion.div>

      <HoverCard>
        <HoverCardTrigger asChild>
          <motion.div
            className="order-1 bg-primary/10 dark:bg-primary/20 rounded-lg shadow-xl w-5/12 px-6 py-4 backdrop-blur-sm bg-opacity-80"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(183, 36, 73, 10)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div>
              <h3 className="mb-3 font-bold text-foreground text-xl">
                {event.title}
              </h3>
              <p className="text-sm leading-snug tracking-wide text-foreground text-opacity-100">
                {event.description}
              </p>
              <p className="mt-2 text-xs text-foreground font-semibold">
                {event.date}
              </p>
            </div>
          </motion.div>
        </HoverCardTrigger>
        <HoverCardContent align="center" side="bottom" className="w-[600px]">
          {event.especificacoes}
        </HoverCardContent>
      </HoverCard>
    </motion.div>
  );
};

export default function PortfolioTimeline() {
  const t = useTranslations("timeline");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Get the translated timeline events
  const timelineEvents = t.raw("events") as Array<{
    date: string;
    title: string;
    description: string;
    icon?: string;
  }>;

  // Map icons to events (these are hardcoded since they're not part of translations)
  const eventsWithIcons = timelineEvents.map((event, index) => {
    const iconKeys = ["graduation", "code", "briefcase", "calendar", "award"];
    return {
      ...event,
      icon: iconKeys[index % iconKeys.length],
    };
  });

  return (
    <Section id="services">
      <div ref={ref} className="container mx-auto px-4 py-16 min-h-screen">
        <motion.h2
          className="text-4xl font-bold text-foreground text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t("title")}
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
          {eventsWithIcons.map((event, index) => (
            <TimelineEvent key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
