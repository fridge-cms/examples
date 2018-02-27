import React from 'react'

export default ({data}) =>
  <main>
    <article>
      <h1>{data.fridgePosts.title}</h1>
      <p>{data.fridgePosts.description}</p>
    </article>
  </main>

export const query = graphql`
  query postQuery($id: String!) {
    fridgePosts(id: { eq: $id }) {
      title
      description
    }
  }
`
