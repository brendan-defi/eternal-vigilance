import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import EVLogo from "@/public/logo.svg";
import { WalletAdvancedDefault } from "@coinbase/onchainkit/wallet";

export default function TopBar() {
    return (
        <header className="h-16 w-full max-w-[1200px] mx-auto px-4 sm:px-4">
            <nav className="flex justify-between items-center">
                <Link href="/" className="hidden sm:block">
                    <Image
                        src={EVLogo as StaticImageData}
                        alt="eternal vigilance logo"
                    />
                </Link>
                <WalletAdvancedDefault />
            </nav>
        </header>
    );
}
