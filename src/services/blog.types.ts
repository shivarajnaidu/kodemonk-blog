export interface PostFrontMatter {
    title: string;
    slug: string;
    author: string[];
    tags: string[];
    featuredImage: string;
    date: Date,
}



export interface Post {
    slug: string;
    frontmatter: PostFrontMatter;
    content: string;
    timeToRead: string;
}

export type PostWithOutContent = Omit<Post, 'content'>;