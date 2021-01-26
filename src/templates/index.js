import { graphql } from 'gatsby';
import React from 'react';
import BlogPostCard from '../components/blog-post-card';
import Header from '../components/header';

// markup
const IndexPage = (props) => {
    return (
        <>
            <Header isHome></Header>
            <main>
                <div className="container">
                    <div className="row">
                        {
                            props.data?.allMarkdownRemark.edges.map((post, index) => {
                                return (
                                    <div className="col-12 col-md-4" key={post.node.fields.slug}>
                                        <BlogPostCard post={post.node} large={index === 0} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </main>
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
        }
      }
    }
  }
}
`;

export default IndexPage

