import Link from 'next/link'

import CoverImage from '../cover-image'
import { Markdown } from '@/lib/markdown'
import { getHeroBanner } from '@/lib/career-herobanner'
import { CMS_NAME, CMS_URL } from '@/lib/constants'

export default async function Herobanner({
  slug,
}: {
  slug: string
}) {
  const post = await getHeroBanner(slug)
  
  return (
    <div className="container mx-auto px-5">
    <section>
      <div className="mb-8 md:mb-16">
        {/* <h1>{post.heading}</h1>
        <div>
          <Markdown content={post.content} />
        </div> */}
        <CoverImage title={post.heading} slug={post.slug} url={post.image.url} />
      </div>
    </section>      
    </div>
  )
}
