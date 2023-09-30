
import { getPostBySlug, getAllPosts, processBlogContentWithRemark, generateMetaDataForBlogPost } from '@/services/blog'
import AppShell from '@/components/app-shell/app-shell';
import BlogPost from '@/components/pages/blog-post';
import { Metadata, ResolvingMetadata } from 'next';

import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prism-themes/themes/prism-atom-dark.min.css';

// export const dynamicParams = false;


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

    // fetch blog post data
    const post = getPostBySlug(params.slug);
    
    const metadata = await generateMetaDataForBlogPost(post);
    return metadata;
}



async function getBlogPostData(slug: string) {
    const post = getPostBySlug(slug);
    const content = await processBlogContentWithRemark(post?.content);

    return {
        ...post,
        content,
    }
}


interface Props { params: { slug: string } };
export default async function Blog({ params }: Props) {
    const post = await getBlogPostData(params.slug);
    return (
        <AppShell>
            <BlogPost slug={post.slug} content={post.content} frontmatter={post.frontmatter} timeToRead={post.timeToRead}></BlogPost>
        </AppShell>
    )
}
