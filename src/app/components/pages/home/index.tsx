import BlogPostCard from '@/components/blog-post-card';
import { PostWithOutContent } from '@/services/blog.types';
// import styles from './home.module.css';

interface Props {
    posts: PostWithOutContent[]
}

const Home: React.FC<Props> = (props) => {
    return (
        <main className="pb-2">
            <div className="container pt-4">
                <div className="row">
                    {
                        props.posts.map((post) => {
                            return (
                                <div className="col-12 col-md-4 my-3" key={post.slug}>
                                    <BlogPostCard post={post} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default Home;