import ReactMarkdown from "react-markdown";
import fetchPostText from "@/src/utils/fetchPostText";

export default async function AboutPage() {
    const about = await fetchPostText("about.md");

    return (
        <div className="about">
            <ReactMarkdown>{about}</ReactMarkdown>
        </div>
    );
}
