import "@mantine/core/styles.css"
import "./layout.css"

import { Inter } from "next/font/google"
import type { PropsWithChildren } from "react"

import { isDevelopment } from "@/libs/config"
import type { PageWithLocaleParamsProps } from "@/libs/locale/server"
import { theme } from "@/libs/theme"
import { ColorSchemeScript, MantineProvider } from "@mantine/core"
import clsx from "clsx"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Next.js Starter",
}

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

interface RootLayoutProps
  extends PropsWithChildren,
    PageWithLocaleParamsProps {}

export default async function RootLayout(props: RootLayoutProps) {
  const { locale } = await props.params

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={clsx(
          "scrollbar-thin font-sans",
          interFont.variable,
          isDevelopment && "debug-screens",
        )}
      >
        <MantineProvider theme={theme}>{props.children}</MantineProvider>
      </body>
    </html>
  )
}
