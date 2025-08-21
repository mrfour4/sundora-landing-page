import { auth, signIn } from "@/auth";
import { Icons } from "@/components/icons";
import { redirect } from "next/navigation";

type Props = {
    searchParams?: Promise<{ callbackUrl?: string; error?: string }>;
};

const errorMap: Record<string, string> = {
    AccessDenied: "Chỉ tài khoản admin được phép truy cập.",
    OAuthCallback: "Không thể xác thực Google. Vui lòng thử lại.",
    OAuthSignin: "Không thể bắt đầu đăng nhập OAuth.",
    default: "Đã xảy ra lỗi đăng nhập.",
};

export default async function SignIn({ searchParams }: Props) {
    const search = await searchParams;
    const session = await auth();

    const ADMIN = (
        process.env.ADMIN_EMAIL ??
        process.env.GMAIL_USER ??
        ""
    ).toLowerCase();
    const isAdmin = (session?.user?.email ?? "").toLowerCase() === ADMIN;

    if (isAdmin) redirect("/admin");

    async function loginWithGoogle() {
        "use server";
        const target = sanitizePath(search?.callbackUrl) ?? "/admin";
        await signIn("google", { redirectTo: target });
    }

    const err =
        (search?.error && (errorMap[search.error] || errorMap.default)) || null;

    return (
        <main className="relative grid min-h-dvh place-items-center">
            {/* Gradient background nhiều màu */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45rem_45rem_at_20%_10%,#ff80b5_0%,transparent_60%),radial-gradient(50rem_50rem_at_80%_50%,#9089fc_0%,transparent_60%),conic-gradient(from_180deg_at_50%_50%,#34d399_0deg,#22d3ee_120deg,#f59e0b_240deg,#34d399_360deg)] opacity-70" />

            {/* Glass card */}
            <div className="w-full max-w-sm rounded-2xl border border-white/30 bg-white/70 p-6 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <div className="grid size-20 place-items-center rounded-xl bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-amber-400 text-xs font-bold text-white uppercase shadow-md">
                        Sundora
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold tracking-tight">
                            Đăng nhập
                        </h1>
                        <p className="text-xs text-black/60">
                            Quản trị hệ thống (admin only)
                        </p>
                    </div>
                </div>

                {err && (
                    <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                        {err}
                    </div>
                )}

                <form action={loginWithGoogle} className="mt-6 space-y-3">
                    <button
                        type="submit"
                        className="group relative w-full overflow-hidden rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:shadow-md"
                    >
                        <span className="absolute inset-0 -z-10 bg-[conic-gradient(from_180deg_at_50%_50%,#0000_0deg,#0000000a_120deg,#0000_240deg,#0000000a_360deg)] opacity-0 transition group-hover:opacity-100" />
                        <span className="mr-2 inline-block align-middle">
                            <Icons.google className="size-4" />
                        </span>
                        Tiếp tục với Google
                    </button>

                    <p className="mt-2 text-center text-[11px] text-black/60">
                        © 2025 Sundora Admin Portal
                    </p>
                </form>
            </div>
        </main>
    );
}

function sanitizePath(input?: string) {
    if (!input) return undefined;

    const s = input.trim();

    const lowered = s.toLowerCase();
    if (
        lowered.startsWith("http://") ||
        lowered.startsWith("https://") ||
        lowered.startsWith("//") ||
        lowered.startsWith("javascript:") ||
        lowered.startsWith("data:") ||
        lowered.startsWith("mailto:")
    ) {
        return undefined;
    }

    if (!s.startsWith("/")) return undefined;
    if (s === "/auth" || s.startsWith("/auth?") || s.startsWith("/auth/")) {
        return "/admin";
    }

    return s;
}
