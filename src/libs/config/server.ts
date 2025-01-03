import * as v from "valibot"
import { createEnv } from "valibot-env/nextjs"

export const {
  DB_HOST: dbHost,
  DB_PORT: dbPort,
  DB_USER: dbUser,
  DB_PASSWORD: dbPassword,
  DB_NAME: dbName,
  PAYLOAD_SECRET: payloadSecret,
} = createEnv({
  schema: {
    private: {
      DB_HOST: v.string(),
      DB_PORT: v.pipe(
        v.string(),
        v.transform((input) => Number.parseInt(input, 10)),
        v.number(),
      ),
      DB_USER: v.string(),
      DB_PASSWORD: v.string(),
      DB_NAME: v.string(),
      PAYLOAD_SECRET: v.optional(v.string(), ""),
    },
  },
  values: {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
  },
})
