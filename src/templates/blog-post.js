import React from 'react'
import Header from '../components/header'
import { Helmet } from 'react-helmet';
// import config from '../website-config';
// import { graphql } from "gatsby"

// markup
const BlogPost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;

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
      <main>
        <article>
          <header>
            <h1>{post.frontmatter.title}</h1>
          </header>

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
