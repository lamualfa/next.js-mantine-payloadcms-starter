import { defaultLocale, locales } from "@/libs/locale"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import {
  type MiddlewareConfig,
  type NextRequest,
  NextResponse,
} from "next/server"

function getLocale(request: NextRequest) {
  const languages = new Negotiator({
    headers: Object.fromEntries(request.headers.entries()),
  }).languages()

  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config: MiddlewareConfig = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|admin|api).*)",
  ],
}
