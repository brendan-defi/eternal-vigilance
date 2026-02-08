import fs from "fs";
import path from "path";

export default async function fetchPostText(filepath: string): Promise<string> {
    try {
        const postsDirectory = path.join(process.cwd(), "src/assets/posts");
        const file = path.join(postsDirectory, filepath);
        const data = fs.readFileSync(file, "utf-8");

        if (!data || data.substring(0, 3) === "<!d") {
            console.error("File was empty...", data);
            throw new Error(`File was empty!`);
        }

        return data;
    } catch (error) {
        console.error(`Error fetching markdown: ${error}`);
        throw error;
    }
}
