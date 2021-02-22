/* eslint-disable @typescript-eslint/restrict-plus-operands, @typescript-eslint/no-var-requires */
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = node?.frontmatter?.slug ?? createFilePath({ node, getNode, basePath: `pages` }); // permalink
    createNodeField({
      node,
      name: `slug`,
      value: `blog${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `);


  // Create post pages
  const posts = result.data.allMarkdownRemark.edges;

  // Create paginated index
  // TODO: new pagination
  const postsPerPage = 1000;
  const numPages = Math.ceil(posts.length / postsPerPage);
  const indexPage = path.resolve('./src/templates/index.js');
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/' : `/${i + 1}`,
      component: indexPage,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });


  // Create blog posts
  const blogPostTemplate = path.resolve(`./src/templates/blog-post/index.js`);
  posts.forEach(({ node }, index) => {
    const prev = index === 0 ? null : posts[index - 1].node;
    const next = index === posts.length - 1 ? null : posts[index + 1].node;

    // console.log('slug', node.fields.slug, node)

    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        prev,
        next,
        primaryTag: node.frontmatter?.tags ? node.frontmatter.tags[0] : '',
      },
    })
  });

}