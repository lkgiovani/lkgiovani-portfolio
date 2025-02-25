"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  SiJavascript,
  SiTypescript,
  SiGo,
  SiNextdotjs,
  SiNodedotjs,
  SiAwslambda,
  SiAmazons3,
  SiAmazondynamodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiRust,
  SiPython,
  SiReact,
} from "react-icons/si";
import { useTheme } from "next-themes";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const icon = [
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
    colorDark: "#FFFFFF",
    colorLight: "#000000",
  },
  {
    name: "Node.js",
    IconComponent: SiNodedotjs,
    colorDark: "#68A063",
    colorLight: "#68A063",
  },
  {
    name: "AWS Lambda",
    IconComponent: SiAwslambda,
    colorDark: "#FF9900",
    colorLight: "#FF9900",
  },
  {
    name: "Amazon S3",
    IconComponent: SiAmazons3,
    colorDark: "#569A31",
    colorLight: "#569A31",
  },
  {
    name: "DynamoDB",
    IconComponent: SiAmazondynamodb,
    colorDark: "#4053D6",
    colorLight: "#4053D6",
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
];

function TechnologiesCarousel() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, watchFocus: false, active: true },
    [
      AutoScroll({
        startDelay: 2,
        speed: 2,
      }),
    ]
  );

  const handleMouseEnter = useCallback(() => {
    emblaApi?.plugins()?.autoScroll?.stop();
  }, [emblaApi]);

  const handleMouseLeave = useCallback(() => {
    emblaApi?.plugins()?.autoScroll?.play();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = emblaApi.plugins()?.autoScroll;
    if (!autoScroll) return;

    autoScroll.play();
  }, [emblaApi]);

  return (
    <>
      <div className="w-full p-2">
        <div className="overflow-hidden h-[600px]" ref={emblaRef}>
          <div className="flex">
            {icon.map((item, index) => {
              const IconComponent = item.IconComponent;
              return (
                <div
                  key={index}
                  className="flex-[0_0_10%] min-w-0 px-4"
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                >
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="flex flex-col items-center">
                        <p className="text-foreground select-none">
                          {item.name}
                        </p>
                        <div
                          className="w-20 h-20 flex items-center justify-center bg-background/30 rounded-full shadow-lg"
                          style={{
                            filter: `drop-shadow(0 0 8px ${
                              isDarkMode ? item.colorDark : item.colorLight
                            }40)`,
                          }}
                        >
                          <IconComponent
                            size={40}
                            color={
                              isDarkMode ? item.colorDark : item.colorLight
                            }
                          />
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="flex flex-col gap-2 left-0 top-full p-4 bg-background shadow-lg  w-96 ">
                      <h2 className="text-1xl text-foreground">
                        Minha experiência com{" "}
                        <span className="text-primary">{item.name}</span>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate tenetur soluta fugit ullam iste voluptatibus,
                        amet odit vel ut harum esse non magni officia rerum
                        voluptates perferendis maiores excepturi nobis.
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TechnologiesCarousel;
