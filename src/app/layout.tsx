import { NavigationProvider } from "@/components/navigation-context";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { montserrat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
    title: "Sundora tower Đà Nẵng",
    description: "Nắng vàng bên dòng sông thơ",
    openGraph: {
        title: "Sundora tower Đà Nẵng",
        description: "Nắng vàng bên dòng sông thơ",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Sundora Tower bên sông Hàn Đà Nẵng",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Sundora tower Đà Nẵng",
        description: "Nắng vàng bên dòng sông thơ",
        images: ["/og-image.jpg"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <NavigationProvider>{children}</NavigationProvider>
                <Toaster richColors theme="light" position="top-center" />
            </body>
        </html>
    );
}
