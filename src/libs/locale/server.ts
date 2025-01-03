import "server-only"
import type { Locale } from "."

export interface LocaleParams {
  locale: Locale
}

export interface PageWithLocaleParamsProps {
  params: Promise<LocaleParams>
}
