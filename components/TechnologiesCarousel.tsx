"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

const icons = [
  {
    name: "React",
    icon: "/baixados.jpg",
    color: "rgb(97, 218, 251)",
  },
  {
    name: "Tailwind CSS",
    icon: "/baixados.jpg",
    color: "rgb(56, 189, 248)",
  },
  {
    name: "Next.js",
    icon: "/baixados.jpg",
    color: "rgb(255, 255, 255)",
  },
  {
    name: "Node.js",
    icon: "/baixados.jpg",
    color: "rgb(104, 160, 99)",
  },
  {
    name: "PostgreSQL",
    icon: "/baixados.jpg",
    color: "rgb(51, 103, 145)",
  },
  {
    name: "TypeScript",
    icon: "/baixados.jpg",
    color: "rgb(49, 120, 198)",
  },
  {
    name: "MongoDB",
    icon: "/baixados.jpg",
    color: "rgb(0, 237, 100)",
  },
  {
    name: "Python",
    icon: "/baixados.jpg",
    color: "rgb(255, 223, 89)",
  },
];

const allIcons = [...icons, ...icons, ...icons];

function TechnologiesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [AutoScroll({ startDelay: 1 })]
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
    <div
      className="w-full bg-background p-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex p-2">
          {allIcons.map((icon, index) => (
            <div key={index} className="flex-[0_0_10%] min-w-0 px-4">
              <div
                className={`flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg ${icon.color}`}
              >
                <Image
                  src={icon.icon || "/baixados.jpg"}
                  alt={icon.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-full"
                  style={{ filter: `drop-shadow(0 0 8px ${icon.color}40)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechnologiesCarousel;
