import ReactMarkdown from "react-markdown";

import { postsIndex } from "@/src/assets/posts/postsIndex";
import { type PostRef } from "@/src/types/post";
import fetchPostText from "@/src/utils/fetchPostText";
import parsePost from "@/src/utils/parsePost";

type BlogPostParams = Promise<PostRef>;

export async function generateStaticParams() {
    return postsIndex;
}

export default async function BlogPost({ params }: { params: BlogPostParams }) {
    const { slug } = await params;

    const rawPost = await fetchPostText(slug);
    const post = parsePost({ slug }, rawPost);

    return (
        <div id="PostContainer" className="mx-4">
            <h1>{post?.postData?.title}</h1>
            <ReactMarkdown>{post?.postText ?? ""}</ReactMarkdown>
        </div>
    );
}
