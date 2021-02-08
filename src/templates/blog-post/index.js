import React from 'react'
import { format } from 'date-fns';
import Header from '../../components/header'
import { Helmet } from 'react-helmet';
import './blog-post.css';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
// import config from '../website-config';

const FeaturedImage = ({ post }) => {
  const {
    childImageSharp,
    extension,
    publicURL
  } = post.frontmatter.featuredImage;

  if (!childImageSharp && (extension === 'svg')) {
    return (
      <img className="featured-image native-image d-block m-auto h-100" src={publicURL} decoding="async" alt={post.frontmatter.title} loading="lazy"></img>
    )
  }

  return (
    <Img
      fluid={childImageSharp.fluid}
      alt="Featured Image"
    />
  )
}

// markup
const BlogPost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;

  const date = new Date(post.frontmatter.date);
  // 2018-08-20
  const datetime = format(date, 'yyyy-MM-dd');
  // 20 AUG 2018
  const displayDatetime = format(date, 'dd LLL yyyy');

  return (
    <>
      <Helmet>
        {/* <html lang={config.lang} /> */}
        <title>{post.frontmatter.title}</title>

        <meta name="description" content={post.frontmatter.excerpt || post.excerpt} />
        {/* <meta property="og:site_name" content={config.title} /> */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.frontmatter.excerpt || post.excerpt} />
        {/* <meta property="og:url" content={config.siteUrl + location.pathname} /> */}
        <meta property="article:published_time" content={post.frontmatter.date} />
      </Helmet>

      <Header></Header>
      <main className="blog-post">
        <article className="container">
          <header className="px-5 py-3">
            <h1>{post.frontmatter.title}</h1>
            <p>
              <span className="post-card-byline-date">
                <time dateTime={datetime}>{displayDatetime}</time>{' '}
                <span className="bull">&bull;</span> {post.timeToRead} min read
            </span>
            </p>
            <FeaturedImage post={post} />
          </header>

          <section dangerouslySetInnerHTML={{ __html: post.html }}>

          </section>

        </article>
      </main>
    </>
  )
}


export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      frontmatter {
      title
      date
      featuredImage {
        extension
        publicURL
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    }
  }
`;

export default BlogPost
