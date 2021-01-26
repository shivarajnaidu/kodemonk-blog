import { format } from 'date-fns';
import React from 'react';
import { Link } from 'gatsby';

import './blog-post-card.css';

const BlogPostCard = ({ post }) => {
    const date = new Date(post.frontmatter.date);
    // 2018-08-20
    const datetime = format(date, 'yyyy-MM-dd');
    // 20 AUG 2018
    const displayDatetime = format(date, 'dd LLL yyyy');

    return (
        <article className="blog-post-card w-100">
            <Link className="d-flex flex-column w-100 text-dark text-decoration-none" to={post.fields.slug}>
                <img className="w-100 post-thumbnail" src="https://gatsby-casper.netlify.app/static/2823decbecd34c6071cef2221f03b4ff/1920d/testimg-cover.jpg" loading="lazy" decoding="async" alt=""></img>
                <section className="px-3 pb-3">
                    <h2 className="pt-3">{post.frontmatter.title}</h2>
                    <span className="text-secondary">
                        <time dateTime={datetime}>{displayDatetime}</time>{' '}
                        <span className="bull">&bull;</span> {post.timeToRead} min read
                    </span>
                </section>
            </Link>
        </article>
    )
}

export default BlogPostCard
