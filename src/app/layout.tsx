import { NavigationProvider } from "@/components/navigation-context";
import type { Metadata } from "next";
import { montserrat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
    title: "Sundora tower Đà Nẵng",
    description: "Nắng vàng bên dòng sông thơ",
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
            </body>
        </html>
    );
}
