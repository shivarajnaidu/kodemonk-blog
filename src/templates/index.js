import { graphql } from 'gatsby';
import React from 'react'
import Header from '../components/header';

// markup
const IndexPage = (props) => {
    return (
        <>
            <Header isHome></Header>
            <main>
                <div>
                    {
                        props.data?.allMarkdownRemark.edges.map((post, index) => {
                            // filter out drafts in production
                            return (<div key={post.node.fields.slug} post={post.node} large={index === 0} >hi</div>);
                        })
                    }
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

