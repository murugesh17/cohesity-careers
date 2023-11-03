import Link from 'next/link'

import CoverImage from '../cover-image'
import { Markdown } from '@/lib/markdown'
import { getCarouselContents } from '@/lib/career-twocolumn-carousel-api'
import { CMS_NAME, CMS_URL } from '@/lib/constants'
import CtaButtons from './cta-buttons'

export default async function TwocolumnCarousel({
  sysid,
}: {
  sysid: string
}) {
  const post = await getCarouselContents(sysid)
  //console.log(post.carouselButtons)
  return (
    post.theme === 'Image with Video' ? (
      <section className="two-column-carousel image-with-video   bg-white text-black ">
        <div className="wrapper bg-light-green  outer-img-align-left">
          <div className="container">
            <div className="col-outer img-left">
              <div className="col-two img-outer video-icon video-active" data-video="6310470230112" data-type="brightcove">
                <div className="pillcircle pill-cohesity-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
                    <circle id="Ellipse_22" data-name="Ellipse 22" cx="300.5" cy="300.5" r="300.5" fill="currentColor"></circle>
                  </svg>
                </div>
                <div className="img-box">
                  {post.image &&
                    <img width="675" height="435" src={post.image.url} className="attachment-full size-full" alt="Erik Kennedy" />
                  }
                </div>
              </div>
              <div className="col-two inner-text">
                <div className="text-outer">
                  <h2>{post.heading}</h2>
                  <p>{post.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ) : post.theme === 'Pill Shape on Image' ? (
      <>
        <section className="two-column-carousel pill-shape-image bg-white text-black ">
          <div className="container">
            <div className="wrapper">
              <div className={`col-outer ${post.imageAlign}`}>
                <div className="column inner-text">
                  <div className="text-outer">
                    <h2>{post.heading}</h2>
                    <h3>{post.subheading}</h3>
                    <p>{post.description}</p>
                    <div className="btn-wrap">
                      <CtaButtons params={post.carouselButtons}/>
                    </div>
                  </div>
                </div>
                <div className="column img-outer">
                  <div className="img-block">
                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 695 455" width="695" height="455">
                      <g id="Group_37271">
                        <g id="Group_37238">
                          <g id="Path_32617">
                            <path id="Layer" className="" fill="none" d="m217.5 0h579c120.2 0 217.5 97.4 217.5 217.5 0 120.1-97.3 217.5-217.5 217.5h-579c-120.1 0-217.5-97.4-217.5-217.5 0-120.1 97.4-217.5 217.5-217.5z"></path>
                            <path id="Layer" fill-rule="evenodd" className="pill-orange" fill="currentColor" stroke="currentColor" d="m217.5 0h579c120.2 0 217.5 97.4 217.5 217.5 0 120.1-97.3 217.5-217.5 217.5h-579c-120.1 0-217.5-97.4-217.5-217.5 0-120.1 97.4-217.5 217.5-217.5zm0 4c-14.5 0-29 1.5-43 4.3-13.7 2.8-27.2 7-40.1 12.5-12.7 5.3-24.9 11.9-36.3 19.7-11.3 7.6-21.9 16.4-31.6 26-9.6 9.7-18.4 20.3-26 31.6-7.8 11.4-14.4 23.6-19.7 36.3-5.5 12.9-9.7 26.4-12.5 40.1-2.8 14-4.3 28.5-4.3 43 0 14.5 1.5 29 4.3 43 2.8 13.7 7 27.2 12.5 40.1 5.3 12.7 11.9 24.9 19.7 36.3 7.6 11.3 16.4 21.9 26 31.6 9.7 9.6 20.3 18.4 31.6 26 11.4 7.8 23.6 14.4 36.3 19.7 12.9 5.5 26.4 9.7 40.1 12.5 14 2.8 28.5 4.3 43 4.3h579c14.5 0 29-1.5 43.1-4.3 13.7-2.8 27.2-7 40-12.5 12.7-5.3 24.9-11.9 36.3-19.7 11.3-7.6 21.9-16.4 31.6-26 9.7-9.7 18.4-20.3 26.1-31.6 7.7-11.4 14.3-23.6 19.7-36.3 5.4-12.9 9.6-26.4 12.4-40.1 2.9-14 4.3-28.5 4.3-43 0-14.5-1.4-29-4.3-43-2.8-13.7-7-27.2-12.4-40.1-5.4-12.7-12-24.9-19.7-36.3-7.7-11.3-16.4-21.9-26.1-31.6-9.7-9.6-20.3-18.4-31.6-26-11.4-7.8-23.6-14.4-36.3-19.7-12.8-5.5-26.3-9.7-40-12.5-14.1-2.8-28.6-4.3-43.1-4.3z"></path>
                          </g>
                          <path id="Ellipse_530" className="pill-blue" fill="currentColor" d="m25 325.9c-5.4 0-9.7-4.4-9.7-9.7 0-5.4 4.3-9.7 9.7-9.7 5.3 0 9.7 4.3 9.7 9.7 0 5.3-4.4 9.7-9.7 9.7z"></path>
                        </g>
                      </g>
                    </svg>
                    <div className="img-box">
                      <img width="675" height="435" src={post.image.url} className="attachment-full size-full" alt="Cohesity Work Illustration | Work From Home or Office Options, Life Balance" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    ) : (
      <></>
    )
  )
}
