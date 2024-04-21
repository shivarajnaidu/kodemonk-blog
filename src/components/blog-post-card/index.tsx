/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';

import styles from './blog-post-card.module.css';
import { PostWithOutContent } from '@/services/blog.types';
import { format } from 'date-fns';


const PostCardImage: React.FC<{ post: PostWithOutContent }> = ({ post }) => {
    if (!post.frontmatter?.featuredImage) {
        return (
            <img className="w-100 post-thumbnail h-100" src="https://gatsby-casper.netlify.app/static/2823decbecd34c6071cef2221f03b4ff/1920d/testimg-cover.jpg" loading="lazy" decoding="async" alt=""></img>
        )
    }

    const imageSrc = post.frontmatter.featuredImage.replace('../', '/assets/blog/');
    return <img className="w-100 post-thumbnail h-100" src={imageSrc} loading="lazy" decoding="async" alt=""></img>


    // if (!childImageSharp && (extension === 'svg')) {
    //     return (
    //         <img className="w-100 post-thumbnail h-100" src={publicURL} loading="lazy" decoding="async" alt=""></img>
    //     )
    // }

    // return (
    //     <Image
    //         src={childImageSharp.gatsbyImageData}
    //         className="w-100 post-thumbnail h-100"
    //         alt="Featured Image" />
    // );
}

interface Props {
    post: PostWithOutContent
}

const BlogPostCard: React.FC<Props> = ({ post }) => {
    const date = new Date(post.frontmatter.date);
    // 2018-08-20
    const datetime = format(date, 'yyyy-MM-dd');
    // 20 AUG 2018
    const displayDatetime = format(date, 'dd LLL yyyy');

    return (
        <article className={`${styles.blogPostCard} h-100 w-100`}>
            <Link className="d-flex flex-column w-100 h-100 text-dark text-decoration-none" href={`/blog/${post.slug || ''}`}>
                <div className="thumbnail-container">
                    <PostCardImage post={post} />
                </div>
                <section className="px-3 pb-3">
                    <h2 className="pt-3">{post.frontmatter.title}</h2>
                    <div>
                        <span className="text-secondary">
                            <time dateTime={datetime}>{displayDatetime}</time>{' '}
                            <span className="bull">&bull;</span> {post.timeToRead}
                        </span>
                    </div>
                </section>
            </Link>
        </article>
    )
}

export default BlogPostCard
