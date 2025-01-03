import * as v from "valibot"
import { createEnv } from "valibot-env/nextjs"

export const { NEXT_PUBLIC_PAYLOAD_URL: payloadUrl } = createEnv({
  schema: {
    public: {
      NEXT_PUBLIC_PAYLOAD_URL: v.string(),
    },
  },
  values: {
    NEXT_PUBLIC_PAYLOAD_URL: process.env.NEXT_PUBLIC_PAYLOAD_URL,
  },
})
