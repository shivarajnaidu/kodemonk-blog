// import { Inter } from 'next/font/google'
import AppShell from '@/components/app-shell/app-shell';
import Home from '@/components/pages/home';
import { getAllPosts } from '@/services/blog';
import { PostWithOutContent } from '@/services/blog.types';

// const inter = Inter({ subsets: ['latin'] })


interface Props {
    posts: PostWithOutContent[];
}

function getHomePageData() {
    const posts = getAllPosts();
    // console.log(posts.map(({ content, ...postWithoutContent}) => postWithoutContent))

    return posts.map(({ content, ...postWithoutContent }) => postWithoutContent);
}

export default function Page() {
    const posts = getHomePageData();
    return (
        <AppShell isHome>
            <Home posts={posts} />
        </AppShell>
    )
}

