import Link from "next/link";

export default function Sidebar() {
    return (
        <div
            id="Sidebar"
            className="flex flex-col items-end text-right sm:mx-4 border-r-2 border-black"
        >
            <ul className="w-full sm:w-auto text-xs sm:text-base ml-0 sm:ml-2">
                <li className="mb-2 mr-2 sm:mb-4 sm:mr-4">
                    <Link href="/">Home</Link>
                </li>
                <li className="mb-2 mr-2 sm:mb-4 sm:mr-4">
                    <Link href="/about">About</Link>
                </li>
                <li className="mb-2 mr-2 sm:mb-4 sm:mr-4">
                    <Link
                        href={`https://www.google.com/search?q=site%3Aeternalvigilance.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Search
                    </Link>
                </li>
            </ul>
        </div>
    );
}
