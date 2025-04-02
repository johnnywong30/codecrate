"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, SunMoon, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Theme = "light" | "dark" | "system";

type ThemeType = {
  theme: Theme;
  icon: LucideIcon;
  tooltip: string;
};

const themes: ThemeType[] = [
  { theme: "light", icon: Sun, tooltip: "Light Mode" },
  { theme: "dark", icon: Moon, tooltip: "Dark Mode" },
  { theme: "system", icon: SunMoon, tooltip: "System Mode" },
];

type ToggleThemeGroupProps = {} & React.HTMLAttributes<HTMLDivElement>;

const ToggleThemeGroup = ({ className, ...props }: ToggleThemeGroupProps) => {
  const { setTheme, theme } = useTheme();

  return (
    <div
      className={cn("flex flex-row justify-around w-full", className)}
      {...props}
    >
      {themes.map(({ theme: themeName, icon: Icon, tooltip }, i) => {
        return (
          <TooltipProvider key={`theme-selector-${i}`}>
            <Tooltip>
              <TooltipTrigger>
                <Icon
                  onClick={() => setTheme(themeName)}
                  className={cn(
                    "cursor-pointer size-4",
                    // TODO: get color for each theme
                    theme === themeName ? "" : ""
                  )}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default ToggleThemeGroup;
