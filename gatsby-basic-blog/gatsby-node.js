const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const {createPage} = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allFridgePosts {
          edges {
            node {
              id
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) reject(result.errrors)

      const pageTemplate = path.resolve('./src/templates/post.js')

      result.data.allFridgePosts.edges.map(({node: post}) => {
        createPage({
          path: `/post/${post.id}`,
          component: pageTemplate,
          context: {
            id: post.id
          }
        })
      })

      resolve()
    })
  })
}
