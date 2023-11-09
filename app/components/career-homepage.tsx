import Link from 'next/link'

import CoverImage from '../cover-image'
import { Markdown } from '@/lib/markdown'
import { getHomeContents } from '@/lib/career-homepage-api'
import { CMS_NAME, CMS_URL } from '@/lib/constants'
import Herobanner from './herobanner'
import TwocolumnCarousel from './twocolumn-carousel'

export default async function CareerHomepage({
  slug,
  lang,
}: {
  slug: string,
  lang: string
}) {
  const post = await getHomeContents(slug)
  const topSection = post.topSectionCollection.items;
  //console.log(JSON.stringify(topSection));
  //console.log(topSection.sys.id);
  return (
    <section className='hero-banner career-theme bg-white text-black'>
      <div className="wrapper">
        {topSection &&
          topSection.map((item:any) => {
            return (
              item.__typename === 'CareerHerobanner' ? (
                <>
                  <Herobanner key={item.sys.id} sysid={item.sys.id} lang={lang}/>
                </>
              ) : item.__typename === 'TwoColumnCarousel' ? (
                <>
                  <TwocolumnCarousel key={item.sys.id} sysid={item.sys.id} lang={lang}/>
                </>
              ) : (
                <>
                </>
              )
            )
          })}


      </div>
    </section>
  )
}
