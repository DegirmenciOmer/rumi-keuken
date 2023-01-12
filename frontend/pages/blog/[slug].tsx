import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import xss from 'xss'
import Layout from '../../components/Layout'
import { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

type TPostPageProps = {
  frontmatter: { title: string; cover_image: string }
  content: string
  slug: string
}

const PostPage: FC<TPostPageProps> = ({
  frontmatter: { title, cover_image },
  content,
  slug,
}) => {
  return (
    <Layout title={`${title}`}>
      <Link legacyBehavior href='/'>
        <a className='btn btn-back'>Terug</a>
      </Link>
      <div className='card card-page'>
        <h1 className='post-title'>{title}</h1>
        <img alt='' src={cover_image} />
        <div className='post-body'>
          {/* parse the content with marked, purify the content with xss */}
          <div
            dangerouslySetInnerHTML={{
              __html: xss(marked(content)),
            }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', ctx?.params?.slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug: ctx?.params?.slug,
      content,
    },
  }
}
export default PostPage
