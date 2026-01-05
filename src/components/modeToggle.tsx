"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";

interface ModeToggleProps {
  showText?: boolean;
}

function ModeToggle({ showText = false }: ModeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="px-4 w-auto gap-2 relative"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] text-primary" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      className="px-4 w-auto gap-2 relative"
      onClick={toggleTheme}
    >
      {!showText && (
        <>
          {!isDark && <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />}
          {isDark && <Sun className="h-[1.2rem] w-[1.2rem] text-primary" />}
        </>
      )}
      {showText && !isDark && (
        <span className="text-lg text-foreground">Light</span>
      )}
      {showText && isDark && (
        <span className="text-lg text-foreground">Dark</span>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ModeToggle;
