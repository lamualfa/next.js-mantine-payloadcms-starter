import type { CollectionConfig } from "payload"
import { payloadUrl } from "../config/client"
import { blocks } from "./blocks"

export const PageCollection: CollectionConfig = {
  slug: "pages",
  access: {
    read: () => true,
  },
  admin: {
    livePreview: {
      url({ locale, data }) {
        return `${payloadUrl}/${locale}${data.path}?preview=${data.id}`
      },
    },
    useAsTitle: "title",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Meta",
          fields: [
            {
              name: "path",
              label: "Path",
              type: "text",
              required: true,
              hooks: {
                beforeValidate: [
                  async ({ data }) => {
                    if (data && "path" in data) {
                      const unsafePath = data.path || ""
                      const path = unsafePath.startsWith("/")
                        ? unsafePath
                        : `/${unsafePath}`

                      return path
                    }

                    return undefined
                  },
                ],
              },
            },
            {
              name: "title",
              label: "Title",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "description",
              label: "Description",
              type: "textarea",
              localized: true,
            },
          ],
        },
        {
          label: "Content",
          fields: [
            {
              name: "blocks",
              label: "Blocks",
              type: "blocks",
              blocks,
              required: true,
            },
          ],
        },
      ],
    },
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 375,
      },
    },
  },
}

export const collections = [PageCollection]
