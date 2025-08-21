import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AdminHeader() {
    async function logoutAction() {
        "use server";
        await signOut({ redirectTo: "/auth" });
    }

    return (
        <header className="sticky top-0 z-10 border-b border-black/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-black/60">
                        <Link
                            href="/admin"
                            className="font-medium text-black/80 hover:underline"
                        >
                            Admin
                        </Link>
                        <span>/</span>
                        <span className="text-black/60">Dashboard</span>
                    </div>
                    <span className="rounded-full border border-black/10 bg-white px-2 py-0.5 text-xs text-black/60">
                        Admin only
                    </span>
                </div>

                <form action={logoutAction}>
                    <Button
                        type="submit"
                        className="rounded-md border border-red-300/60 bg-gradient-to-b from-red-100 to-red-200 px-3 py-1.5 text-sm font-semibold text-red-700 shadow-sm hover:opacity-95 focus:ring-2 focus:ring-red-400/50 focus:outline-none"
                        aria-label="Đăng xuất"
                    >
                        Đăng xuất
                    </Button>
                </form>
            </div>

            <div className="bg-[linear-gradient(90deg,#f0abfc_0%,#22d3ee_33%,#f59e0b_66%,#34d399_100%)]/60 h-[3px] w-full" />
        </header>
    );
}
