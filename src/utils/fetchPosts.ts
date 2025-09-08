import { postsIndex } from "@/src/assets/posts/_postsIndex";
import fetchPostText from "@/src/utils/fetchPostText";
import parsePost from "@/src/utils/parsePost";
import { Post } from "@/src/types/post";

export default async function fetchPosts() {
    const posts: Post[] = [];

    for (const post of postsIndex) {
        const rawPostText = await fetchPostText(post.slug);
        const parsedPost = parsePost(post, rawPostText);
        posts.push(parsedPost);
    }

    return posts;
}
