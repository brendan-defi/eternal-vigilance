import { Link } from "react-router-dom";

export default function TopBar() {
    return (
        <header className="h-16 w-full min-w-[720px] max-w-[1200px] mt-16 px-20 py-4">
            <nav className="flex justify-between items-center">
                <Link to="#"> Site Icon </Link>
                <Link to="#"> Site Name </Link>
                <a href="#">Connect Wallet</a>
            </nav>
        </header>
    );
}
