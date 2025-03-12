export type PostRef = {
    slug: string;
};

export type PostMetadata = {
    title: string;
    publishedAt: string;
    updatedAt: string;
    tags?: string[];
};

export type Post = {
    postRef: PostRef;
    postData?: PostMetadata;
    postText?: string;
};
