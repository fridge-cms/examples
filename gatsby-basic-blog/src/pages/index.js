import React from 'react'
import Link from 'gatsby-link'

export default ({data}) =>
  <main>
    <header>
      <h1>{data.fridgeHomepage.title}</h1>
      <p>{data.fridgeHomepage.bio}</p>
    </header>
    <div>
      {data.allFridgePosts.edges.map(({node: post}) =>
        <article>
          <h2>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.description}</p>
        </article>
      )}
    </div>
  </main>


export const query = graphql`
query indexQuery {
  fridgeHomepage {
    title
    bio
  }

  allFridgePosts {
    edges {
      node {
        id
        title
        description
        date_created
      }
    }
  }
}
`
