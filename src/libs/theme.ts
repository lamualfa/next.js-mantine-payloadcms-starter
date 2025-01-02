import { createTheme } from "@mantine/core"

const defaultFontFamily = "var(--font-inter), sans-serif"

export const theme = createTheme({
  fontFamily: defaultFontFamily,
  headings: {
    fontFamily: defaultFontFamily,
  },
})
