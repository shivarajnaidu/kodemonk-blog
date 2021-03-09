import { graphql } from 'gatsby';
import React from 'react';
import BlogPostCard from '../components/blog-post-card';
import Footer from '../components/footer';
import Header from '../components/header';
import SEO from '../components/seo';

// markup
const IndexPage = (props) => {
  return (
    <>
      <SEO></SEO>
      <Header isHome></Header>
      <main className="pb-2">
        <div className="container pt-4">
          <div className="row">
            {
              props.data?.allMarkdownRemark.edges.map((post, index) => {
                return (
                  <div className="col-12 col-md-4 my-3" key={post.node.fields.slug}>
                    <BlogPostCard post={post.node} large={index === 0} />
                  </div>
                );
              })
            }
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}



export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC},
      limit: $limit
      skip: $skip
      ) {
    edges {
      node {
        id
        html
        excerpt
        fields {
          slug
        }
        timeToRead
        frontmatter {
          date
          slug
          title
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
  }
}
`;

export default IndexPage

