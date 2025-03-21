import PostsLayout from "@/src/components/Layout/PostsLayout";
import fetchPosts from "@/src/utils/fetchPosts";

export default async function Blog() {
    const posts = await fetchPosts();
    return (
        <main>
            <PostsLayout posts={posts} />
        </main>
    );
}
