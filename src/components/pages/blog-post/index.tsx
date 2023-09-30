'use client'
/* eslint-disable @next/next/no-img-element */
import { format } from 'date-fns';
// import Seo from '../../components/seo';
import styles from './blog-post.module.css';
import { sharePost } from '@/services/share';
import { Post } from '@/services/blog.types';
// import config from '../website-config';

const FeaturedImage = ({ frontmatter }: any) => {
  const src = frontmatter.featuredImage.replace('../', '/assets/blog/');
  return (
    <img className="featured-image native-image d-block m-auto img-fluid h-100" src={src} decoding="async" alt={frontmatter.title} loading="lazy"></img>
  )

  // const {
  //   childImageSharp,
  //   extension,
  //   publicURL
  // } = frontmatter.featuredImage;

  // if (!childImageSharp && (extension === 'svg')) {
  //   return (
  //     <img className="featured-image native-image d-block m-auto img-fluid h-100" src={src} decoding="async" alt={frontmatter.title} loading="lazy"></img>
  //   )
  // }

  // return (
  //   <Image
  //     src={src}
  //     className="blog-post-featured-image"
  //     alt="Featured Image" />
  // );
}

type Props = Post;
// markup
const BlogPost: React.FC<Props> = ({ slug, content, frontmatter, timeToRead }) => {
  // const post = data.markdownRemark;

  const date = new Date(frontmatter.date);
  // 2018-08-20
  const datetime = format(date, 'yyyy-MM-dd');
  // 20 AUG 2018
  const displayDatetime = format(date, 'dd LLL yyyy');

  const seo = {
    title: frontmatter.title,
    // description: frontmatter.excerpt || excerpt,
    date: datetime,
    path: `/blog/${slug}`,
    // path: location.pathname || '',
    image: frontmatter.featuredImage
  };

  const share = async () => {
    sharePost({
      title: seo.title,
      // text: seo.description 
    });
  };

  return (
    <main className={styles.blogPost}>
      <article className="container">
        <header className="py-3">
          <section className="px-md-5">
            <h1>{frontmatter.title}</h1>
            <p>
              <span className="post-card-byline-date">
                <time dateTime={datetime}>{displayDatetime}</time>{' '}
                <span className="bull">&bull;</span> {timeToRead}
              </span>
              <button onClick={share} className="btn shadow-none align-baseline mx-1 btn-link">
                <i className="bi bi-share-fill"></i>
              </button>
            </p>
          </section>
          <FeaturedImage frontmatter={frontmatter} />
        </header>

        <section dangerouslySetInnerHTML={{ __html: content }}>
        </section>

      </article>
    </main>
  )
}

export default BlogPost
