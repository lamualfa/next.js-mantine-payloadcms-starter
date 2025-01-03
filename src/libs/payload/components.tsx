import dynamic from "next/dynamic"
import type { ComponentProps } from "react"
import { type BlockData, PageTitleBlock, SectionTitleBlock } from "./blocks"

const BlockComponents = {
  [PageTitleBlock.slug]: dynamic(() =>
    import("@/components/page-title").then(({ PageTitle }) => PageTitle),
  ),
  [SectionTitleBlock.slug]: dynamic(() =>
    import("@/components/section-title").then(
      ({ SectionTitle }) => SectionTitle,
    ),
  ),
}

export interface BlocksRendererProps {
  blockDatas: BlockData[]
}
export function BlocksRenderer(props: BlocksRendererProps) {
  return props.blockDatas.map((blockData) => {
    const { id, blockType, blockName, ...unsafeBlockComponentProps } = blockData
    const BlockComponent = BlockComponents[blockType]

    type BlockComponentProps = ComponentProps<typeof BlockComponent>
    const blockComponentProps = unsafeBlockComponentProps as BlockComponentProps

    return (
      <BlockComponent
        key={`${id}-${blockType}-${blockName}`}
        {...blockComponentProps}
      />
    )
  })
}
