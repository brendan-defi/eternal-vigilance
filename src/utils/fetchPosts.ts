import fetchPostText from "./fetchPostText";
import { postsIndex } from "../assets/posts/postsIndex";

import { Post } from "../types/post";
import parsePost from "./parsePost";

export default async function fetchPosts() {
    const posts: Post[] = [];

    for (const post of postsIndex) {
        const rawPostText = await fetchPostText(post.slug);
        const parsedPost = parsePost(post, rawPostText);
        posts.push(parsedPost);
    }

    return posts;
}
