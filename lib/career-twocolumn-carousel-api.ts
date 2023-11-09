import { NXT_REVALIDATE} from '@/lib/constants'

const POST_GRAPHQL_FIELDS = `
theme
image {
  url
}
imageAlign
brightcoveVideoId
circleBgColor
heading
subheading
description
carouselButtons
`

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
      next: { revalidate: NXT_REVALIDATE },
    }
  ).then((response) => response.json())
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.twoColumnCarouselCollection?.items?.[0]
}

export async function getCarouselContents(sysid: string, lang: string): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      twoColumnCarouselCollection(locale: "${lang}", where: { 
        sys: {
          id: "${sysid}"
        }
      }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractPost(entry)
}