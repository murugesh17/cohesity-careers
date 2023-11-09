import CareerHomepage from '../components/career-homepage'

import { CMS_NAME, CMS_URL } from '@/lib/constants'

export default async function Page() {

  return (
    <>
      <CareerHomepage slug={"career-home"} lang={"fr"}/>
    </>
  )
}
