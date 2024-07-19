import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { PostsLayoutProps } from "../../types/layout";

export default function PostsLayout({ posts }: PostsLayoutProps) {
    return (
        <div id="PostsContainer" className="mx-4">
            {posts.map((post) => {
                return (
                    <div key={post.postRef.slug} className="mb-16">
                        <h1>
                            <Link
                                to={`/${post.postRef.slug}`}
                                preventScrollReset={true}
                            >
                                {post.postData?.Title}
                            </Link>
                        </h1>
                        <ReactMarkdown>{post.postText}</ReactMarkdown>
                        <Link
                            to={`/${post.postRef.slug}`}
                            preventScrollReset={true}
                        >
                            Permalink
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
