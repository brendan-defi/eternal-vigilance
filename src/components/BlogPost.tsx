import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import fetchPostText from "../utils/fetchPostText";
import { postsIndex } from "../assets/posts/postsIndex";
import parsePost from "../utils/parsePost";

import { Post, PostRef } from "../types/post";

export default function BlogPost() {
    const { slug } = useParams();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        const post: PostRef = postsIndex.filter(
            (post) => post.slug === slug
        )[0];

        const fetchPostMarkdown = async () => {
            const rawPostText = await fetchPostText(`../posts/${slug}.md`);
            const parsedPost = parsePost(post, rawPostText);
            setPost(parsedPost);
        };
        fetchPostMarkdown();
    }, []);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div id="PostContainer" className="mx-4">
            <h1>{post?.postData?.Title}</h1>
            <ReactMarkdown>{post?.postText ?? ""}</ReactMarkdown>
        </div>
    );
}
