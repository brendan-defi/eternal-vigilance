import yaml from "js-yaml";

import { Post, PostMetadata, PostRef } from "@/src/types/post";

export default function parsePost(post: PostRef, rawPostText: string): Post {
    try {
        const [, frontMatter, postText] = rawPostText.split("---");

        if (!frontMatter || !postText) {
            throw new Error(
                "Invalid post format: missing front matter or post content.",
            );
        }

        const data = yaml.load(frontMatter) as PostMetadata;
        if (!data.title || !data.publishedAt) {
            throw new Error("Invalid front matter: missing title or date.");
        }

        const parsedPost: Post = {
            postRef: post,
            postData: data,
            postText: postText.trim(),
        };

        return parsedPost;
    } catch (error) {
        console.error(`Error parsing post ${post.slug}: `, error);
        throw error;
    }
}
