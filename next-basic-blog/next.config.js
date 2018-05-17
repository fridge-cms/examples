module.exports = {
  fridge: {
    token: process.env.TOKEN
  },
  exportPathMap: async (fridge, defaultPathMap) => {
    const posts = await fridge.get('content', {type: 'post'})
    for (const post of posts) {
      defaultPathMap[`/post/${post.slug}`] = {page: '/post', query: {post: post.slug}}
    }

    return defaultPathMap
  }
}
