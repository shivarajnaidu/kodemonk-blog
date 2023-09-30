import matter from 'gray-matter'
// import { parseISO, format } from 'date-fns'
import fs from 'fs'
import { join } from 'path'
import { Post } from './blog.types'
import readingTime from 'reading-time'

import { remark } from 'remark'
import remarkRehype from 'remark-rehype'
import rehypePrism from '@mapbox/rehype-prism'
import rehypeStringify from 'rehype-stringify';
import { Metadata } from 'next'
import remarkYoutube from './parse-youtube'

// Add markdown files in `src/content/blog`
const postsDirectory = join(process.cwd(), 'src', 'content', 'blog')

// returns the first 4 lines of the contents
// https://www.npmjs.com/package/gray-matter
function firstFourLines(file: any) {
  const excerpt = (file.content || "").split('\n').slice(0, 4).join(' ').replaceAll('**', '').trim();
  return excerpt;
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents, { excerpt: firstFourLines })
  // const date = format(new Date(data.date), 'MMMM dd, yyyy')

  const { text: timeToRead } = readingTime(content);

  return { slug: realSlug, timeToRead, frontmatter: data, content } as Post
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs.map((slug) => getPostBySlug(slug))
  return posts
}


export async function processBlogContentWithRemark(markdown = '') {
  const processedMarkdown = await remark()
    .use(remarkYoutube)
    .use(remarkRehype)
    // .use(rehypeRaw)
    //@ts-ignore
    .use(rehypePrism)
    .use(rehypeStringify)
    .process(markdown || '');

  const content = processedMarkdown.toString();
  return content;
}

export async function generateMetaDataForBlogPost(post: Post) {
  const openGraphImage = { images: [post.frontmatter.featuredImage] }

  const metadata: Metadata = {
      title: post.frontmatter.title,
      // description: post.frontmatter.date,
      metadataBase: new URL('https://kodemonk.com'),
      alternates: {
          canonical: `/blog/${post.slug}`,
      },
      openGraph: {
          title: post.frontmatter.title,
          siteName: 'KodeMonk',
          url: `https://kodemonk.com/blog/${post.slug}`,
          type: 'article',
          ...openGraphImage,
          publishedTime: String(post.frontmatter.date),
      },
      twitter: {
          title: post.frontmatter.title,
          ...openGraphImage,
      },
  };

  return metadata;
}