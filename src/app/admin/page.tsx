import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AdminPage() {
  async function logoutAction() {
    'use server';
    await signOut({ redirectTo: '/auth' });
  }

  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100">
      {/* Topbar */}
      <header className="sticky top-0 z-10 border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_theme(colors.sky.400)]" />
            <span className="font-semibold text-zinc-100">Admin</span>
            <span className="text-zinc-400">Dashboard</span>
            <span className="rounded-full border border-zinc-800 px-2 py-0.5 text-xs text-zinc-400">
              đang hoàn thiện
            </span>
          </div>

          <form action={logoutAction}>
            <Button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md border border-red-900/50 bg-gradient-to-b from-red-900/40 to-red-950 px-3 py-1.5 text-sm font-semibold text-red-100 hover:opacity-90 focus:ring-2 focus:ring-red-700/50 focus:outline-none"
              aria-label="Đăng xuất"
            >
              Đăng xuất
            </Button>
          </form>
        </div>
      </header>

      {/* Grid layout */}
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-4 py-6">
        {/* Sidebar */}
        <aside className="col-span-12 h-max rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:col-span-4 lg:col-span-3">
          <div className="mb-4 h-5 w-2/3 animate-pulse rounded bg-zinc-800/80" />
          <ul className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <li
                key={i}
                className="h-4 w-full animate-pulse rounded bg-zinc-800/60"
              />
            ))}
          </ul>
        </aside>

        {/* Content */}
        <main className="col-span-12 space-y-6 sm:col-span-8 lg:col-span-9">
          <h1 className="text-base font-semibold">Tổng quan</h1>

          <div className="rounded-lg border border-sky-800/50 bg-sky-900/20 p-4">
            <p className="mb-3 text-sm font-medium text-sky-200">
              📝 Trang soạn thảo bài viết đã sẵn sàng để thử
            </p>
            <Link
              href="/admin/demo"
              className="inline-block rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-500 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            >
              Xem trang soạn thảo
            </Link>
          </div>

          {/* Stat cards skeleton */}
          <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4"
              >
                <div className="mb-3 h-6 w-24 animate-pulse rounded-full bg-zinc-800/70" />
                <div className="mb-2 h-5 w-2/3 animate-pulse rounded bg-zinc-800/80" />
                <div className="mb-1.5 h-3 w-full animate-pulse rounded bg-zinc-800/60" />
                <div className="h-3 w-2/3 animate-pulse rounded bg-zinc-800/60" />
              </div>
            ))}
          </section>

          {/* Main panel skeleton */}
          <section className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50">
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
              <div className="h-5 w-56 animate-pulse rounded bg-zinc-800/80" />
              <div className="flex items-center gap-2">
                <div className="h-8 w-20 animate-pulse rounded-full bg-zinc-800/70" />
                <div className="h-8 w-24 animate-pulse rounded-full bg-zinc-800/70" />
              </div>
            </div>

            <div className="px-4 py-3">
              <div className="mb-2 grid grid-cols-4 gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-4 w-full animate-pulse rounded bg-zinc-800/60"
                  />
                ))}
              </div>

              <div className="space-y-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-10 w-full animate-pulse rounded-lg bg-zinc-800/50"
                  />
                ))}
              </div>

              <p className="mt-4 text-sm text-zinc-400">
                🔨 Trang quản trị đang được xây dựng. Tính năng thật sẽ hiển thị
                ở đây.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
