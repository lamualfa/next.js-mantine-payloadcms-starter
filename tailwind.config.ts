import mantinePlugin from "@devoss/tailwind-plugin-mantine"
import scrollbarPlugin from "tailwind-scrollbar"
import type { Config } from "tailwindcss"
// @ts-expect-error tailwindcss-debug-screens doesn't have declaration types
import debugScreensPlugin from "tailwindcss-debug-screens"
import defaultTheme from "tailwindcss/defaultTheme"
import { theme } from "./src/libs/theme"

export default {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
    },
    debugScreens: {
      position: ["bottom", "right"],
    },
  },
  plugins: [debugScreensPlugin, scrollbarPlugin, mantinePlugin(theme)],
} satisfies Config
