import { payloadUrl } from "@/libs/config/client"
import {
  dbHost,
  dbName,
  dbPassword,
  dbPort,
  dbUser,
  payloadSecret,
} from "@/libs/config/server"
import { Locale, defaultLocale } from "@/libs/locale"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { buildConfig } from "payload"
import sharp from "sharp"

export default buildConfig({
  serverURL: payloadUrl,
  editor: lexicalEditor(),
  collections: [],
  secret: payloadSecret,
  localization: {
    locales: [Locale.En, Locale.Id],
    defaultLocale,
  },
  db: postgresAdapter({
    pool: {
      host: dbHost,
      port: dbPort,
      user: dbUser,
      password: dbPassword,
      database: dbName,
    },
  }),
  sharp,
})
