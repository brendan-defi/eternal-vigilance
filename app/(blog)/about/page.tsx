"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import fetchPostText from "@/src/utils/fetchPostText";

export default function AboutPage() {
    const [about, setAbout] = useState("");

    useEffect(() => {
        const fetchAbout = async () => {
            const post = await fetchPostText("about.md");
            setAbout(post);
        };
        fetchAbout();
    }, []);

    return (
        <div className="about">
            <ReactMarkdown>{about}</ReactMarkdown>
        </div>
    );
}
