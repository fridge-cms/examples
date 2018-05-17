const Post = ({ post }) =>
  <main>
    <article>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </article>
  </main>

Post.getInitialProps = async ({ fridge, query: {post} }) => {
  return {
    post: await fridge.get(`content/post/${post}`)
  }
}

export default Post
