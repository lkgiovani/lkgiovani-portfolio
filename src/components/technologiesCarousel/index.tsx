import { icon, Icon } from "./moke";
import { useTheme } from "next-themes";

const row1 = icon.slice(0, Math.ceil(icon.length / 2));
const row2 = icon.slice(Math.ceil(icon.length / 2));

interface RowProps {
  items: Icon[];
  direction: "left" | "right";
  isDarkMode: boolean;
}

function MarqueeRow({ items, direction, isDarkMode }: RowProps) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-3"
        style={{
          width: "max-content",
          animation: `marquee-${direction} 35s linear infinite`,
        }}
      >
        {repeated.map((item, i) => {
          const { IconComponent } = item;
          const color = isDarkMode ? item.colorDark : item.colorLight;
          return (
            <div
              key={`${item.name}-${i}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border shrink-0"
              style={{ borderColor: color }}
            >
              <IconComponent size={20} color={color} />
              <span className="text-sm font-medium whitespace-nowrap" style={{ color }}>
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TechnologiesCarousel() {
  const { theme, resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark" || theme === "dark";

  return (
    <>
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <div className="flex flex-col gap-6 w-full">
        <MarqueeRow items={row1} direction="left" isDarkMode={isDarkMode} />
        <MarqueeRow items={row2} direction="right" isDarkMode={isDarkMode} />
      </div>
    </>
  );
}

export default TechnologiesCarousel;
