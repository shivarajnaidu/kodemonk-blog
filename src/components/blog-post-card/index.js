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
        <article className="blog-post-card p-3 w-100">
            <Link className="d-flex flex-column w-100" to={post.fields.slug}>
                <img className="w-100 post-thumbnail" src="https://gatsby-casper.netlify.app/static/2823decbecd34c6071cef2221f03b4ff/1920d/testimg-cover.jpg" loading="lazy" decoding="async" alt=""></img>
                <h1>{post.frontmatter.title}</h1>
                <span className="post-card-byline-date">
                    <time dateTime={datetime}>{displayDatetime}</time>{' '}
                    <span className="bull">&bull;</span> {post.timeToRead} min read
            </span>
            </Link>
        </article>
    )
}

export default BlogPostCard
