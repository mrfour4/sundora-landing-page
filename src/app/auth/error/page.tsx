// src/app/auth/error/page.tsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams?: Promise<{ error?: string; callbackUrl?: string }>;
}) {
  const search = await searchParams;
  const code = (search?.error ?? 'Default') as keyof typeof messageMap;
  const back = search?.callbackUrl ?? '/';

  const messageMap = {
    AccessDenied: 'Email này không có quyền truy cập trang quản trị.',
    OAuthSignin: 'Không khởi tạo được phiên đăng nhập với Google.',
    OAuthCallback: 'Không xử lý được phản hồi từ Google.',
    Configuration: 'Cấu hình OAuth chưa đúng.',
    Default: 'Đăng nhập thất bại. Vui lòng thử lại.',
  } as const;

  return (
    <main className="relative grid min-h-dvh place-items-center p-6">
      {/* Nền nhiều màu */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(40rem_40rem_at_15%_15%,#ff80b5_0%,transparent_60%),radial-gradient(45rem_45rem_at_80%_50%,#9089fc_0%,transparent_60%),conic-gradient(from_180deg_at_50%_50%,#34d399_0deg,#22d3ee_120deg,#f59e0b_240deg,#34d399_360deg)]" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="relative rounded-2xl border border-white/30 bg-white/70 p-6 shadow-xl backdrop-blur-md">
          <header className="flex items-start gap-3">
            <div className="grid size-20 shrink-0 place-items-center rounded-xl bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-amber-400 text-xs font-bold text-white shadow-md">
              Sundora
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">
                Không thể đăng nhập
              </h1>
              <p className="text-sm text-black/60">
                {messageMap[code] ?? `Lỗi: ${code}`}
              </p>
            </div>
          </header>

          {/* Badge mã lỗi */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-black/70 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 via-fuchsia-500 to-cyan-400" />
            <span className="font-mono">Code: {String(code)}</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="flex-1">
              <Link href="/auth">Thử tài khoản khác</Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link href={back}>Về trang trước</Link>
            </Button>
          </div>

          <p className="mt-4 text-center text-[11px] text-black/60">
            Nếu sự cố tiếp diễn, vui lòng liên hệ quản trị viên.
          </p>
        </div>
      </div>
    </main>
  );
}
