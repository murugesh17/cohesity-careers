import Link from 'next/link'

import { Markdown } from '@/lib/markdown'
import { getFooter } from '@/lib/career-footer'
import { CMS_NAME, CMS_URL } from '@/lib/constants'

export default async function Footer() {
  const data = await getFooter()
  
  return (
    <div className="container mx-auto p-6 border-2 border-slate-100 bg-black text-white mb-8">
    <section>
      <p>{data.heading}</p>
      <div>
      <Markdown content={data.content} />
      </div>
    </section>      
    </div>
  )
}
