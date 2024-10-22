"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useAccount } from "wagmi";
import { useName } from "@coinbase/onchainkit/identity";
import fetchPostText from "@/src/utils/fetchPostText";
import { isDevelopment } from "@/app/constants";
import { base, baseSepolia } from "viem/chains";

export default function AboutPage() {
    const [about, setAbout] = useState("");
    const { address } = useAccount();
    const { name } = useName({
        address: address ?? "0x",
        chain: isDevelopment ? baseSepolia : base,
    });

    useEffect(() => {
        const fetchAbout = async () => {
            const post = await fetchPostText("about.md");
            setAbout(post);
        };
        fetchAbout();
    }, []);

    return (
        <div className="about">
            <h1>
                Hello{" "}
                {name ?? `${address?.slice(0, 6)}...${address?.slice(-4)}`}
            </h1>
            <ReactMarkdown>{about}</ReactMarkdown>
        </div>
    );
}
