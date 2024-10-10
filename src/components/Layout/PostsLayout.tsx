import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { PostsLayoutProps } from "@/src/types/layout";

export default function PostsLayout({ posts }: PostsLayoutProps) {
    return (
        <div id="PostsContainer" className="mx-4">
            {posts.map((post) => {
                return (
                    <div key={post.postRef.slug} className="mb-16">
                        <h1>
                            <Link href={`/post/${post.postRef.slug}`}>
                                {post.postData?.Title}
                            </Link>
                        </h1>
                        <ReactMarkdown>{post.postText}</ReactMarkdown>
                        <Link href={`/post/${post.postRef.slug}`}>Permalink</Link>
                    </div>
                );
            })}
        </div>
    );
}
