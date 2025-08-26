import { PropsWithChildren } from "react";
import { AdminHeader } from "./admin-header";

export function DashboardShell({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen text-black">
            <div className="pointer-events-none fixed inset-0 -z-10 opacity-80">
                <div className="absolute inset-0 bg-[radial-gradient(45rem_45rem_at_20%_10%,#ff80b5_0%,transparent_60%),radial-gradient(50rem_50rem_at_80%_50%,#22d3ee_0%,transparent_60%),conic-gradient(from_180deg_at_50%_50%,#34d399_0deg,#22d3ee_120deg,#f59e0b_240deg,#34d399_360deg)]" />
                <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
            </div>

            <AdminHeader />

            <div className="mx-auto max-w-7xl px-4 py-6">{children}</div>
        </div>
    );
}
