'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { TOCItemType } from 'fumadocs-core/toc'
import * as Base from 'fumadocs-core/toc'
import { useRef } from 'react'

export const TOC = ({ tableOfContents }: { tableOfContents: TOCItemType[] }) => {
  const router = useRouter()
  const viewContainer = useRef(null)

  return (
    <Base.AnchorProvider toc={tableOfContents}>
      <ul ref={viewContainer} className="hidden md:flex flex-col min-w-28 max-w-md">
        <Base.ScrollProvider containerRef={viewContainer}>
          <button type="button" className="w-full flex items-center gap-2 px-3 text-sm rounded-sm cursor-pointer py-2 opacity-40 hover:opacity-100 transition-opacity duration-100" onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4"></ArrowLeft>
            <span>返回</span>
          </button>
          {
            tableOfContents.map(v => (
              <Base.TOCItem className="w-full truncate px-3 py-2 text-sm opacity-30 hover:opacity-100 data-[active=true]:opacity-100 transition-opacity duration-100" key={v.url} href={v.url}>{v.title}</Base.TOCItem>
            ))
          }
        </Base.ScrollProvider>
      </ul>
    </Base.AnchorProvider>
  )
}
