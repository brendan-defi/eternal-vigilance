import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div
            id="Sidebar"
            className="flex flex-col items-end text-right sm:mx-4 border-r-2 border-black"
        >
            <ul className="w-full sm:w-auto text-xs sm:text-base space-y-1">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link
                        to={`https://www.google.com/search?q=site%3Aeternalvigilance.com`}
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
