import Link from 'next/link'

import CoverImage from '../cover-image'
import { Markdown } from '@/lib/markdown'
import { getHeroBanner } from '@/lib/career-herobanner'
import { CMS_NAME, CMS_URL } from '@/lib/constants'

export default async function Herobanner({
  sysid,
  lang,
}: {
  sysid: string,
  lang: string,
}) {
  const post = await getHeroBanner(sysid, lang)

  return (
    <section className='hero-banner career-theme bg-white text-white'>
      <div className="wrapper">
        <div className="outer-wrap">
          <div className="bg-img">
            <img src={post.backgroundImage && post.backgroundImage.url} alt="header bg" width="1600" height="375" />
          </div>
          <div className="inner-wrap">
            <div className="content-wrap container">
              <div className="text-wrap">
                <h1>{post.heading}</h1>
                <p>{post.subheading}</p>
                <form className="search-box" method="get" action="" role="search">
                  <input type="text" name="search" className="search-text-box" placeholder="Search open positions" />
                  <button type="submit">Search</button>
                </form>
                <div className="btn-wrap">
                  <a href="#" className="btn-default " target="_self" data-class="">View all job openings</a>
                </div>
              </div>
            </div>
            <div className="thumb-wrap">
              <img src={post.image.url} alt="header herobanner" width="854" height="550" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
