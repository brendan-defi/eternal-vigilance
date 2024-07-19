export type PostRef = {
    path: string;
    slug: string;
}

export type PostMetadata = {
    Title: string;
    PublishedAt: string;
    UpdatedAt: string;
    Tags?: string[];
}

export type Post = {
    postRef: PostRef;
    postData?: PostMetadata;
    postText?: string;
}
