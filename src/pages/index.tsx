import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import AppShell from '@/components/app-shell/app-shell';
import Home from '@/components/pages/home';
import { getAllPosts } from '@/services/blog';
import { PostWithOutContent } from '@/services/blog.types';

const inter = Inter({ subsets: ['latin'] })
interface Props {
  posts: PostWithOutContent[];
}

export default function IndexPage(props: Props) {
  // console.log(props)
  return (
    <AppShell isHome>
      <>
        <Head>
          <title>KodeMonk</title>
          <meta name="description" content="KodeMonk - My place on internet" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Home posts={props.posts} />
      </>
    </AppShell>
  )
}


export async function getStaticProps({ params }: { params: { slug: string } }) {
  const posts = getAllPosts();
  // console.log(posts.map(({ content, ...postWithoutContent}) => postWithoutContent))

  return {
    props: {
      posts: posts.map(({ content, ...postWithoutContent}) => postWithoutContent),
    }
  }
}