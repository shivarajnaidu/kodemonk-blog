import Head from 'next/head'
import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism';
import { getPostBySlug, getAllPosts } from '@/services/blog'
import AppShell from '@/components/app-shell/app-shell';
import BlogPost from '@/components/pages/blog-post';
import { Post } from '@/services/blog.types';
import SEO from '@/components/seo';

type Props = Post;
export default function Blog(props: Props) {
  // console.log(props.content)
  const seo = {
    title: props.frontmatter.title,
    // description: props.frontmatter.date,
    date: props.frontmatter.date,
    path: props.frontmatter.slug,
    image: props.frontmatter.featuredImage,
  };

  
  return (
    <AppShell>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-atom-dark.min.css" rel="stylesheet" />
      </Head>
      <SEO {...seo}></SEO>
      <BlogPost slug={props.slug} content={props.content} frontmatter={props.frontmatter} timeToRead={props.timeToRead}></BlogPost>
    </AppShell>
  )
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  const markdown = await remark()
    // https://github.com/sergioramos/remark-prism/issues/265
    .use(html, { sanitize: false })
    .use(prism)
    .process(post.content || '');
  const content = markdown.toString();
  
  return {
    props: {
      ...post,
      content,
    },
  }
}

// This will create dynamic paths for each blog item
export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
