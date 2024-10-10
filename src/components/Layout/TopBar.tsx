import Link from 'next/link';

export default function TopBar() {
    return (
        <header className="h-16 w-full max-w-[1200px] mx-auto px-4 sm:px-4">
            <nav className="flex justify-between items-center">
                <Link href="#">Site Icon</Link>
                <Link href="#" className="hidden sm:block">
                    Site Name
                </Link>
                <a
                    href="#"
                    className="hidden sm:block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Connect Wallet
                </a>
            </nav>
        </header>
    );
}
