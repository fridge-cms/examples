import { HtmlContent } from 'fridge-next'

const Post = ({ post }) =>
  <main>
    <article>
      <h1>{post.title}</h1>
      <HtmlContent content={post.description} />
    </article>
  </main>

Post.getInitialProps = async ({ fridge, query: {post} }) => {
  return {
    post: await fridge.get(`content/post/${post}`)
  }
}

export default Post
