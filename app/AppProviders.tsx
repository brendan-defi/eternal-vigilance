"use client";

import { type ReactNode } from "react";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { base } from "wagmi/chains";

export function AppProviders({ children }: { children: ReactNode }) {
    return (
        <OnchainKitProvider
            config={{
                appearance: {
                    name: "Eternal Vigilance",
                    logo: "logo.svg",
                    theme: "hacker",
                },
                wallet: { display: "modal" },
            }}
            projectId={process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_ID}
            apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
            chain={base}
        >
            {children}
        </OnchainKitProvider>
    );
}
