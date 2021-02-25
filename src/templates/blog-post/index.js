import React from 'react'
import { format } from 'date-fns';
import Header from '../../components/header';
import Footer from '../../components/footer';
import SEO from '../../components/seo';
import './blog-post.css';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { sharePost } from '../../services/share';
// import config from '../website-config';

const FeaturedImage = ({ post }) => {
  const {
    childImageSharp,
    extension,
    publicURL
  } = post.frontmatter.featuredImage;

  if (!childImageSharp && (extension === 'svg')) {
    return (
      <img className="featured-image native-image d-block m-auto img-fluid h-100" src={publicURL} decoding="async" alt={post.frontmatter.title} loading="lazy"></img>
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

  const seo = {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt || post.excerpt,
    date: datetime,
    path: location.pathname || '',
    image: post.frontmatter.featuredImage?.publicURL
  };

  const share = async () => {
    sharePost({ title: seo.title, text: seo.description });
  };

  return (
    <>
      <SEO post={seo}></SEO>
      <Header></Header>
      <main className="blog-post">
        <article className="container">
          <header className="py-3">
            <section className="px-md-5">
              <h1>{post.frontmatter.title}</h1>
              <p>
                <span className="post-card-byline-date">
                  <time dateTime={datetime}>{displayDatetime}</time>{' '}
                  <span className="bull">&bull;</span> {post.timeToRead} min read
                </span>
                <button onClick={share} className="btn shadow-none align-baseline mx-1 btn-link">
                  <i className="bi bi-share-fill"></i>
                </button>
              </p>
            </section>
            <FeaturedImage post={post} />
          </header>

          <section dangerouslySetInnerHTML={{ __html: post.html }}>

          </section>

        </article>
      </main>

      {/* Footer */}

      <Footer />
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
