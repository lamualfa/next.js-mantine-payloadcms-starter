import type { PageTitle, SectionTitle } from "@payload-types"
import type { Block } from "payload"

export const PageTitleBlock: Block = {
  slug: "page-title",
  interfaceName: "Page Title",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      localized: true,
    },
  ],
}

export const SectionTitleBlock: Block = {
  slug: "section-title",
  interfaceName: "Section Title",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "subtitle",
      label: "subtitle",
      type: "text",
      required: false,
      localized: true,
    },
  ],
}

export const blocks = [PageTitleBlock, SectionTitleBlock]
export type BlockData = PageTitle | SectionTitle
