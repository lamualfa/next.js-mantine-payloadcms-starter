"use client"

import { payloadUrl } from "@/libs/config/client"
import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react"
import { useRouter } from "next/navigation"

export function RefreshRouteOnSave() {
  const router = useRouter()

  return (
    <PayloadLivePreview
      refresh={() => router.refresh()}
      serverURL={payloadUrl}
    />
  )
}
