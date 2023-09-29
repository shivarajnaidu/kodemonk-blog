import Head from 'next/head'

interface Props {
    title: string;
    url?: string;
    description?: string;
    image?: string;
    post?: {
        date: string;
        description: string;
    },
    children?: React.ReactNode;
}
const SEO: React.FC<Props> = ({
    title,
    url,
    description,
    image,
    post,
    children,
}) => {

    // const defaults = data.site.siteMetadata;

    // if (defaults.baseUrl === '' && typeof window !== 'undefined') {
    //     defaults.baseUrl = window.location.origin;
    // }

    // if (defaults.baseUrl === '') {
    //     console.error('Please set a baseUrl in your site metadata!');
    //     return null;
    // }

    // const title = post.title || defaults.title;
    // const description = post.description || defaults.description;
    // const url = new URL(post.path || '', defaults.baseUrl);
    // const image = post.image ? new URL(post.image, defaults.baseUrl) : new URL('/icons/icon-512x512.png', defaults.baseUrl);

    
    return (
        <Head>
            <html lang="en" />
            <title>{title}</title>
            <link rel="canonical" href={url} />
            {description && <meta name="description" content={description} />}

            <meta property="og:site_name" content={title} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            {description && <meta property="og:description" content={description} />}
            {image && <meta property="og:image" content={image} />}

            {/* <meta name="twitter:card" content="summary_large_image" /> */}
            {/* <meta name="twitter:creator" content={post.author.twitter} /> */}
            <meta name="twitter:title" content={title} />
            {description && <meta name="twitter:description" content={description} />}
            {image && <meta name="twitter:image" content={image} />}

            {post?.date && <meta property="article:published_time" content={post.date} />}
            {children}
        </Head>
    )
}

export default SEO;