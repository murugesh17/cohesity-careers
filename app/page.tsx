import CareerHomepage from './components/career-homepage'

import { LANG_EN } from '@/lib/constants'

export default async function Page() {

  return (
    <>
      <CareerHomepage slug={"career-home"} lang={LANG_EN}/>
    </>
  )
}
