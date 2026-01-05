import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Calendar,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  ChevronDown,
} from "lucide-react";
import { useRef, useState } from "react";
import Section from "../ui/section";
import { useTranslations } from "next-intl";

const iconMap = {
  graduation: GraduationCap,
  code: Code,
  briefcase: Briefcase,
  calendar: Calendar,
  award: Award,
};

const TimelineEvent = ({ event, index }: any) => {
  const ref = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
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
  const hasSpecification =
    Array.isArray(event.specification) && event.specification.length > 0;

  const toggleExpanded = () => {
    if (hasSpecification) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, x }}
      className={`mb-16 gap-2 flex items-center w-full
        ${
          index % 2 === 0
            ? "md:flex-row-reverse md:justify-between sm:justify-end"
            : "md:justify-between sm:justify-end"
        }
        flex-col sm:flex-row
      `}
    >
      {/* Hide this div on mobile */}
      <div className="order-1 w-5/12 hidden md:block"></div>
      <motion.div
        className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full sm:mx-0 mb-3 sm:mb-0 -ml-6 sm:ml-0"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Icon className="w-6 h-6 text-primary-foreground mx-auto" />
      </motion.div>
      <motion.div
        className={`order-1 md:w-5/12 w-full sm:w-10/12 bg-primary/10 dark:bg-primary/20 rounded-lg shadow-xl px-6 py-4 backdrop-blur-sm bg-opacity-80 ${
          hasSpecification ? "cursor-pointer" : ""
        }`}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(183, 36, 73, 10)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={toggleExpanded}
        onMouseEnter={() => hasSpecification && setIsExpanded(true)}
        onMouseLeave={() => hasSpecification && setIsExpanded(false)}
      >
        <div>
          <div className="flex items-center justify-between">
            <h3 className="mb-3 font-bold text-foreground text-xl">
              {event.title}
            </h3>
            {hasSpecification && (
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-foreground" />
              </motion.div>
            )}
          </div>
          <p className="text-sm leading-snug tracking-wide text-foreground text-opacity-100">
            {event.description}
          </p>
          <p className="mt-2 text-xs text-foreground font-semibold">
            {event.date}
          </p>

          <AnimatePresence>
            {isExpanded && hasSpecification && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden border-t border-primary/20 pt-4"
              >
                {event.specification.map((string: string, idx: number) => (
                  <div key={idx} className="mb-2 last:mb-0">
                    <p className="text-sm text-foreground leading-relaxed">
                      {string}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
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

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);

  // Get the translated timeline events
  const timelineEvents = t.raw("events") as Array<{
    date: string;
    title: string;
    description: string;
    icon?: string;
    specification?: string[];
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
        <div className="relative wrap overflow-hidden p-4 sm:p-10 h-full">
          {/* Desktop timeline vertical line - only visible on md screens and up */}
          <motion.div
            className="border-2-2 absolute border-primary hidden md:block"
            style={{
              left: "50%",
              top: "10%",
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
