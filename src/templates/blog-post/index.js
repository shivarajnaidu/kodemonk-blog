import React from 'react'
import { format } from 'date-fns';
import Header from '../../components/header'
import { Helmet } from 'react-helmet';
import './blog-post.css';
import { graphql } from 'gatsby';
// import config from '../website-config';

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
            <p>{post.excerpt}</p>
            <p>
              <span className="post-card-byline-date">
                <time dateTime={datetime}>{displayDatetime}</time>{' '}
                <span className="bull">&bull;</span> {post.timeToRead} min read
            </span>
            </p>
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
        # userDate: date(formatString: "D MMMM YYYY")
        date
        # tags
        # excerpt
        # image {
        #   childImageSharp {
        #     fluid(maxWidth: 3720) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
      }
    }
  }
`;

export default BlogPost
