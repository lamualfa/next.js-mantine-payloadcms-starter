import type { LocaleParams } from "@/libs/locale/server"
import { BlocksRenderer } from "@/libs/payload"
import { RefreshRouteOnSave } from "@/libs/payload/client"
import config from "@payload-config"
import { notFound } from "next/navigation"
import { make } from "only-make"
import { getPayload } from "payload"
import { Fragment } from "react"

interface PageParams extends LocaleParams {
  paths: string[]
}
interface PageProps {
  params: Promise<PageParams>
  searchParams: Promise<{
    preview?: string
  }>
}

export default async function Page(props: PageProps) {
  const payload = await getPayload({ config })

  const previewId = await make(async () => {
    const searchParams = await props.searchParams
    const unsafePreviewId = searchParams.preview
      ? Number.parseInt(searchParams.preview, 10)
      : null
    const previewId = unsafePreviewId || null

    return previewId
  })

  const { path, locale } = await make(async () => {
    const params = await props.params
    const pathsParam = params.paths || []
    const path = `/${pathsParam.join("/")}`

    return { path, locale: params.locale }
  })

  const doc = await make(async () => {
    if (previewId) {
      return await payload.findByID({
        id: previewId,
        collection: "pages",
        draft: true,
      })
    }

    const { docs } = await payload.find({
      collection: "pages",
      locale,
      where: {
        path: {
          equals: path,
        },
      },
      sort: "-updatedAt",
    })

    return docs[0]
  })

  if (doc === null) {
    return notFound()
  }

  const { blocks: blockDatas } = doc

  return (
    <Fragment>
      {previewId ? <RefreshRouteOnSave /> : null}
      <BlocksRenderer blockDatas={blockDatas} />
    </Fragment>
  )
}
