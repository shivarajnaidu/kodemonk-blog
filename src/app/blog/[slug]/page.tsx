import { remark } from 'remark'
import remarkRehype from 'remark-rehype'
import rehypePrism from '@mapbox/rehype-prism'
import rehypeStringify from 'rehype-stringify';

import { getPostBySlug, getAllPosts } from '@/services/blog'
import AppShell from '@/components/app-shell/app-shell';
import BlogPost from '@/components/pages/blog-post';
import { Metadata, ResolvingMetadata } from 'next';

import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prism-themes/themes/prism-atom-dark.min.css';

export const dynamicParams = false;


// This will create dynamic paths for each blog item
export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => {
        return {
            slug: post.slug,
        }
    });
}


type GenerateMetadataProps = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
// Generate meta tags
export async function generateMetadata(
    { params, searchParams }: GenerateMetadataProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params with params.slug and fetch the post

    // fetch data
    const post = getPostBySlug(params.slug)

    const openGraphImage = { images: [post.frontmatter.featuredImage] }

    const seo: Metadata = {
        title: post.frontmatter.title,
        // description: post.frontmatter.date,
        metadataBase: new URL('https://kodemonk.com'),
        alternates: {
            canonical: `/blog/${params.slug}`,
        },
        openGraph: {
            title: post.frontmatter.title,
            siteName: 'KodeMonk',
            url: `https://kodemonk.com/blog/${params.slug}`,
            type: 'article',
            ...openGraphImage,
            publishedTime: String(post.frontmatter.date),
        },
        twitter: {
            title: post.frontmatter.title,
            ...openGraphImage,
        },
    };

    return seo;


}



async function getBlogPostData(params: { slug: string }) {
    const post = getPostBySlug(params.slug);

    const markdown = await remark()
        .use(remarkRehype)
        //@ts-ignore
        .use(rehypePrism)
        .use(rehypeStringify)
        .process(post.content || '');

    const content = markdown.toString();

    return {
        ...post,
        content,
    }
}


interface Props { params: { slug: string } };
export default async function Blog({ params }: Props) {
    const post = await getBlogPostData(params);
    return (
        <AppShell>
            <BlogPost slug={post.slug} content={post.content} frontmatter={post.frontmatter} timeToRead={post.timeToRead}></BlogPost>
        </AppShell>
    )
}
