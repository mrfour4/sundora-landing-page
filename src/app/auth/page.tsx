import { signIn } from "@/auth";

type Props = {
    searchParams?: Promise<{ callbackUrl?: string; error?: string }>;
};

export default async function SignIn({ searchParams }: Props) {
    const search = await searchParams;

    async function loginWithGoogle() {
        "use server";
        await signIn("google", { redirectTo: search?.callbackUrl });
    }

    return (
        <main className="grid min-h-dvh place-items-center p-6">
            <div className="w-full max-w-sm rounded-2xl border p-6 shadow-sm">
                <h1 className="text-2xl font-semibold">Đăng nhập</h1>
                {search?.error && (
                    <p className="mt-3 text-sm text-red-600">
                        Có lỗi khi đăng nhập: {search.error}
                    </p>
                )}

                <form action={loginWithGoogle} className="mt-6">
                    <button
                        type="submit"
                        className="w-full rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
                    >
                        Tiếp tục với Google
                    </button>
                </form>

                <p className="mt-4 text-center text-xs text-gray-500">
                    Bạn sẽ được chuyển về:{" "}
                    <span className="font-medium">{search?.callbackUrl}</span>
                </p>
            </div>
        </main>
    );
}
