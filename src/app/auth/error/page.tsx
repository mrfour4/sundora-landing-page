// src/app/auth/error/page.tsx
import Link from "next/link";

export default async function AuthErrorPage({
    searchParams,
}: {
    searchParams?: Promise<{ error?: string; callbackUrl?: string }>;
}) {
    const search = await searchParams;
    const code = search?.error ?? "Default";
    const back = search?.callbackUrl ?? "/";

    const messageMap: Record<string, string> = {
        AccessDenied: "Email này không có quyền truy cập trang quản trị.",
        OAuthSignin: "Không khởi tạo được phiên đăng nhập với Google.",
        OAuthCallback: "Không xử lý được phản hồi từ Google.",
        Configuration: "Cấu hình OAuth chưa đúng.",
        Default: "Đăng nhập thất bại. Vui lòng thử lại.",
    };

    return (
        <main className="grid min-h-dvh place-items-center p-6">
            <div className="w-full max-w-md rounded-2xl border p-6 shadow-sm">
                <h1 className="text-2xl font-semibold">Không thể đăng nhập</h1>
                <p className="mt-3 text-sm text-gray-600">
                    {messageMap[code] ?? `Lỗi: ${code}`}
                </p>

                <div className="mt-6 flex gap-3">
                    <Link
                        href="/auth"
                        className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
                    >
                        Thử tài khoản khác
                    </Link>
                    <Link
                        href={back}
                        className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
                    >
                        Về trang trước
                    </Link>
                </div>

                <p className="mt-4 text-xs text-gray-500">
                    Mã lỗi: <span className="font-mono">{code}</span>
                </p>
            </div>
        </main>
    );
}
