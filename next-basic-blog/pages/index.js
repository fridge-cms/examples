import Link from 'next/link'
import { Fridge } from 'fridge-next'

export default () =>
  <Fridge query={['content/homepage', 'content?type=post']}>
    {(homepage, posts) =>
      <main>
        <header>
          <h1>{homepage.title}</h1>
          <p>{homepage.bio}</p>
        </header>
        <div>
          {posts.map(post =>
            <article key={post.id}>
              <h2>
                <Link href={`/post/${post.slug}`}><a>{post.title}</a></Link>
              </h2>
              <p>{post.description}</p>
            </article>
          )}
        </div>
      </main>
    }
  </Fridge>
