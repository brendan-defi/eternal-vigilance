import ReactMarkdown from "react-markdown";

import fetchPostText from "@/src/utils/fetchPostText";
import { postsIndex } from "@/src/assets/posts/postsIndex";
import parsePost from "@/src/utils/parsePost";

import { type PostRef } from "@/src/types/post";

type BlogPostParams = {
    params: PostRef;
};

export async function generateStaticParams() {
    return postsIndex;
}

export default async function BlogPost({ params }: BlogPostParams) {
    const slug = params.slug;

    const rawPost = await fetchPostText(slug);
    const post = parsePost({ slug }, rawPost);

    return (
        <div id="PostContainer" className="mx-4">
            <h1>{post?.postData?.Title}</h1>
            <ReactMarkdown>{post?.postText ?? ""}</ReactMarkdown>
        </div>
    );
}
