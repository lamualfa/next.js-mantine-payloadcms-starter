import * as v from "valibot"
import { createEnv } from "valibot-env/nextjs"

export enum AppEnv {
  Production = "production",
  Development = "development",
}

export const { APP_ENV: appEnv } = createEnv({
  schema: {
    shared: {
      APP_ENV: v.enum(AppEnv),
    },
  },
  values: {
    APP_ENV: process.env.NODE_ENV,
  },
})

export const isProduction = appEnv === AppEnv.Production
export const isDevelopment = appEnv === AppEnv.Development
