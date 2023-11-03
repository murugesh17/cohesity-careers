import Link from 'next/link'

import { Markdown } from '@/lib/markdown'
import { getFooter } from '@/lib/career-footer'
import { CMS_NAME, CMS_URL } from '@/lib/constants'

export default async function Footer() {
  const data = await getFooter()

  return (
    <footer className='footer'>
      <div className="bg-img">
        <img src="/images/footernewbg.png" alt="footer bg" />
      </div>
      <div className="container">
        <div className="footer-logo">
          <a href="/">
            <img src="/images/footer_logo.svg" alt="footer logo" />
          </a>
        </div>
        <div className="social-nav">
          <ul className="text-right">
            <li><a href="https://twitter.com/cohesity" target="_blank" aria-label="Twitter">
              <span id="Twitter" className="hidesocialspan">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1227" viewBox="0 0 1200 1227" fill="none">
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white" />
              </svg>
            </a></li>
            <li><a href="https://www.linkedin.com/company/cohesity/" target="_blank" aria-label="Linkedin">
              <span id="Linkedin" className="hidesocialspan">Linkedin</span>
              <svg id="Group_129" data-name="Group 129" xmlns="http://www.w3.org/2000/svg" width="16.132"
                height="16.133"
                viewBox="0 0 16.132 16.133" aria-labelledby="Linkedin">
                <path id="Path_983" data-name="Path 983"
                  d="M343.309,391.3a1.914,1.914,0,1,1,1.369.576A1.872,1.872,0,0,1,343.309,391.3Zm-.324,12.819V393.349h3.349v10.767Zm12.532,0v-5.257a5.807,5.807,0,0,0-.216-1.873,1.516,1.516,0,0,0-1.548-.972,1.687,1.687,0,0,0-1.62.864,4.023,4.023,0,0,0-.36,1.909v5.33h-3.313V393.349h3.2v1.476h.036a2.877,2.877,0,0,1,1.152-1.188,4.161,4.161,0,0,1,5.294.9,7.289,7.289,0,0,1,.72,3.673v5.906Z"
                  transform="translate(-342.733 -387.984)" fill="#fff" />
              </svg>
            </a></li>
            <li><a href="https://www.facebook.com/cohesity/" target="_blank" aria-label="Facebook">
              <span id="Facebook" className="hidesocialspan">Facebook</span>
              <svg id="Group_130" data-name="Group 130" xmlns="http://www.w3.org/2000/svg" width="9.506"
                height="18.438"
                viewBox="0 0 9.506 18.438" aria-labelledby="Facebook">
                <path id="Path_984" data-name="Path 984"
                  d="M428.309,396.268h-2.773v-3.276h2.773V390.4a4.27,4.27,0,0,1,1.152-3.187,4.176,4.176,0,0,1,3.061-1.134,17.831,17.831,0,0,1,2.521.144v2.917h-1.728a1.671,1.671,0,0,0-1.332.432,1.846,1.846,0,0,0-.288,1.153v2.269h3.061l-.432,3.276h-2.629v8.247h-3.385Z"
                  transform="translate(-425.536 -386.077)" fill="#fff" />
              </svg>
            </a></li>

            <li><a href="https://www.youtube.com/channel/UCZNz4gmV-JGrEmIimFvp5EA" target="_blank" aria-label="Youtube">
              <span id="Youtube" className="hidesocialspan">Youtube</span>
              <svg id="Group_131" data-name="Group 131" xmlns="http://www.w3.org/2000/svg" width="18.848"
                height="13.256"
                viewBox="0 0 18.848 13.256" aria-labelledby="Youtube">
                <path id="Path_985" data-name="Path 985"
                  d="M488.537,396.725a15.582,15.582,0,0,1,.346,2.83l.034,1.727-.034,1.726a15.778,15.778,0,0,1-.346,2.865,2.45,2.45,0,0,1-1.691,1.656,24.5,24.5,0,0,1-4.212.345l-3.141.035-3.141-.035a24.5,24.5,0,0,1-4.212-.345,2.39,2.39,0,0,1-1.07-.621,2.415,2.415,0,0,1-.621-1.035,15.792,15.792,0,0,1-.345-2.865l-.034-1.726q0-.76.034-1.727a15.6,15.6,0,0,1,.345-2.83,2.412,2.412,0,0,1,1.692-1.692,24.5,24.5,0,0,1,4.212-.345l3.141-.035,3.141.035a24.5,24.5,0,0,1,4.212.345,2.412,2.412,0,0,1,1.691,1.692Zm-10.977,7.387,4.936-2.83-4.936-2.8Z"
                  transform="translate(-470.069 -394.653)" fill="#fff" />
              </svg>
            </a></li>
            <li><a href="https://www.instagram.com/cohesity/?hl=en" target="_blank" aria-label="Instagram">
              <path className="cls-1" d="M33.11,18.19c0,4.86-.02,5.43-.11,7.35-.08,1.77-.38,2.74-.63,3.38-.33,.85-.72,1.46-1.36,2.09-.64,.64-1.24,1.03-2.09,1.36-.64,.25-1.6,.55-3.38,.63-1.92,.09-2.49,.11-7.35,.11s-5.43-.02-7.35-.11c-1.77-.08-2.74-.38-3.38-.63-.85-.33-1.46-.72-2.09-1.36-.64-.64-1.03-1.24-1.36-2.09-.25-.64-.55-1.6-.63-3.38-.09-1.92-.11-2.49-.11-7.35s.02-5.43,.11-7.35c.08-1.77,.38-2.74,.63-3.38,.33-.85,.72-1.46,1.36-2.09,.64-.64,1.24-1.03,2.09-1.36,.64-.25,1.6-.55,3.38-.63,1.92-.09,2.49-.11,7.35-.11s5.43,.02,7.35,.11c1.77,.08,2.74,.38,3.38,.63,.85,.33,1.45,.72,2.09,1.36s1.03,1.24,1.36,2.09c.25,.64,.55,1.6,.63,3.38,.09,1.92,.11,2.49,.11,7.35m3.28,0c0-4.94-.02-5.56-.11-7.5s-.4-3.26-.85-4.42c-.47-1.2-1.09-2.21-2.1-3.22s-2.03-1.63-3.22-2.1c-1.16-.45-2.48-.76-4.42-.84C23.75,.02,23.13,0,18.19,0s-5.56,.02-7.5,.11c-1.94,.09-3.26,.4-4.42,.84-1.2,.47-2.21,1.09-3.22,2.1S1.42,5.08,.95,6.27c-.45,1.16-.76,2.48-.85,4.42C.01,12.63,0,13.25,0,18.19s.02,5.56,.11,7.5c.09,1.94,.4,3.26,.85,4.42,.47,1.2,1.09,2.21,2.1,3.22,1.01,1.01,2.02,1.63,3.22,2.1,1.16,.45,2.48,.76,4.42,.84,1.94,.09,2.56,.11,7.5,.11s5.56-.02,7.5-.11,3.26-.4,4.42-.84c1.2-.47,2.21-1.09,3.22-2.1s1.63-2.03,2.1-3.22c.45-1.16,.76-2.48,.85-4.42s.11-2.56,.11-7.5" /><path className="cls-1" d="M24.26,18.19c0,3.35-2.71,6.07-6.06,6.07s-6.06-2.72-6.06-6.07,2.71-6.06,6.06-6.06,6.06,2.72,6.06,6.06m3.28,0c0-5.16-4.18-9.34-9.34-9.34s-9.34,4.18-9.34,9.34,4.18,9.34,9.34,9.34,9.34-4.18,9.34-9.34" /><path className="cls-1" d="M30.09,8.48c0,1.21-.98,2.18-2.18,2.18s-2.18-.98-2.18-2.18,.98-2.18,2.18-2.18,2.18,.98,2.18,2.18" />
            </a></li>
            <li><a href="https://www.cohesity.com/feed/?rss" target="_blank" className="newtab">
            </a></li>
          </ul>
        </div>
        <div className="copyright">
          <p className="content-wrap">© 2023 Cohesity, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
