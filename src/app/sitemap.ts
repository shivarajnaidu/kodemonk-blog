import { getAllPosts } from '@/services/blog';
import { MetadataRoute } from 'next'

const domainName = 'https://kodemonk.dev';

const posts = getAllPosts();

const blogPostSiteMapEntries = posts.map((post) => {
    return {
        url: `${domainName}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    } as MetadataRoute.Sitemap[number];
});

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: domainName,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${domainName}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...blogPostSiteMapEntries,
    ]
}