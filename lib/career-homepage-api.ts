const POST_GRAPHQL_FIELDS = `
  slug
  topSectionCollection {
    items {
      ... on Entry {
        __typename
        sys {
          id
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
      next: { revalidate: 5 },
    }
  ).then((response) => response.json())
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.pageCollection?.items?.[0]
}

export async function getHomeContents(slug: string): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      pageCollection(where: { slug: "${slug}" }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractPost(entry)
}