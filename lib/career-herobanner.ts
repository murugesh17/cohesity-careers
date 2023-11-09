import { NXT_REVALIDATE} from '@/lib/constants'

const POST_GRAPHQL_FIELDS = `
  slug
  heading
  subheading
  image {
    url
  }
  backgroundImage {
    url
  }
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
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
  return fetchResponse?.data?.careerHerobannerCollection?.items?.[0]
}

export async function getHeroBanner(sysid: string, lang: string): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      careerHerobannerCollection(locale: "${lang}", where: { 
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