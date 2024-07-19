export default async function fetchPostText(filepath: string): Promise<string> {
    try {
        const response = await fetch(filepath);
        if (!response.ok) {
            console.error("Could not fetch file...", response);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.text();
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
