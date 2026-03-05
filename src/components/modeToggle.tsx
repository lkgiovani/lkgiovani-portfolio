import { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

interface ModeToggleProps {
  showText?: boolean;
  className?: string;
  duration?: number;
}

function ModeToggle({
  showText = false,
  className,
  duration = 400,
}: ModeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const toggleTheme = useCallback(() => {
    if (!buttonRef.current) return;

    const newIsDark = !isDark;

    const applyTheme = () => {
      flushSync(() => {
        setTheme(newIsDark ? "dark" : "light");
      });
    };

    if (
      typeof document === "undefined" ||
      !("startViewTransition" in document)
    ) {
      applyTheme();
      return;
    }

    const transition = (document as any).startViewTransition(() => {
      applyTheme();
    });

    const ready = transition?.ready;
    if (ready && typeof ready.then === "function") {
      ready.then(() => {
        const button = buttonRef.current;
        if (!button) return;

        const { top, left, width, height } = button.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        const maxRadius = Math.hypot(
          Math.max(left, window.innerWidth - left),
          Math.max(top, window.innerHeight - top),
        );

        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      });
    }
  }, [isDark, setTheme, duration]);

  if (!mounted) {
    return (
      <button className={cn("p-2", className)}>
        <Sun className="h-[1.2rem] w-[1.2rem] text-primary" />
      </button>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-md hover:bg-accent transition-colors",
        className,
      )}
    >
      {showText ? (
        <span className="text-lg text-foreground">
          {isDark ? "Dark" : "Light"}
        </span>
      ) : isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-primary" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

export default ModeToggle;
