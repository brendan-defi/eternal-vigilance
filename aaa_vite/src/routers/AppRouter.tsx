import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../pages/App";
import About from "../components/About";
import BlogPost from "../components/BlogPost";
import PostsLayout from "../components/Layout/PostsLayout";

import fetchPosts from "../utils/fetchPosts";

const posts = await fetchPosts();

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <PostsLayout posts={posts} />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: ":slug",
                element: <BlogPost />,
            },
        ],
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
