import type { Metadata } from "next";
import Providers from "./providers";
import "./globals.scss";

export const metadata: Metadata = {
    title: "Journally App",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
