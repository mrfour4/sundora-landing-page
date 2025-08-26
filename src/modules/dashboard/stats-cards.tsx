import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatNumber } from "@/lib/format-number";
import { prisma } from "@/lib/prisma";
import { cn } from "@/lib/utils";
import { PostStatus } from "@prisma/client";
import { Archive, Eye, FileEdit, FileText } from "lucide-react";

export async function StatsCards() {
    const [total, results] = await Promise.all([
        prisma.post.count(),
        prisma.post.groupBy({ by: ["status"], _count: true }),
    ]);

    const stats: Record<PostStatus, number> & { total: number } = {
        DRAFT: 0,
        PUBLISHED: 0,
        ARCHIVED: 0,
        total,
    };
    results.forEach(({ status, _count }) => (stats[status] = Number(_count)));

    const items = [
        {
            title: "Tổng bài viết",
            value: stats.total,
            desc: "Tất cả bài trong hệ thống",
            icon: FileText,
            chip: "bg-emerald-500/10 text-emerald-600 ring-emerald-500/20",
            bar: "from-emerald-400/40 via-cyan-400/40 to-amber-400/30",
        },
        {
            title: "Đã xuất bản",
            value: stats[PostStatus.PUBLISHED],
            desc: "Đang hiển thị trên website",
            icon: Eye,
            chip: "bg-cyan-500/10 text-cyan-600 ring-cyan-500/20",
            bar: "from-cyan-400/40 via-fuchsia-400/30 to-emerald-400/30",
        },
        {
            title: "Bản nháp",
            value: stats[PostStatus.DRAFT],
            desc: "Đang soạn thảo",
            icon: FileEdit,
            chip: "bg-amber-500/10 text-amber-700 ring-amber-500/20",
            bar: "from-amber-400/40 via-rose-300/30 to-cyan-300/30",
        },
        {
            title: "Đã lưu trữ",
            value: stats[PostStatus.ARCHIVED],
            desc: "Không còn hoạt động",
            icon: Archive,
            chip: "bg-zinc-500/10 text-zinc-700 ring-zinc-400/30",
            bar: "from-zinc-300/40 via-slate-300/30 to-emerald-300/20",
        },
    ] as const;

    return (
        <>
            {items.map(({ title, value, desc, icon: Icon, chip, bar }) => (
                <Card
                    key={title}
                    className={cn(
                        "relative overflow-hidden border bg-white/80 shadow-sm backdrop-blur",
                        "before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r",
                        `before:${bar} rounded-2xl`,
                    )}
                >
                    <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
                        <div className="space-y-1">
                            <CardTitle className="text-sm text-black/60">
                                {title}
                            </CardTitle>
                            <div className="text-3xl font-semibold tracking-tight">
                                {formatNumber(value)}
                            </div>
                        </div>
                        <div className={cn("rounded-lg p-2 ring-1", chip)}>
                            <Icon className="size-5" />
                        </div>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between pt-0">
                        <p className="text-xs text-black/60">{desc}</p>
                        <span
                            className={cn(
                                "rounded-full px-2 py-0.5 text-[10px] ring-1",
                                chip,
                            )}
                        >
                            {title}
                        </span>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}

export function StatsCardsSkeleton() {
    return (
        <>
            {Array.from({ length: 4 }).map((_, i) => (
                <Card
                    key={i}
                    className="rounded-2xl border bg-white/60 shadow-sm backdrop-blur"
                >
                    <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
                        <div className="space-y-2">
                            <div className="h-4 w-24 rounded bg-black/10" />
                            <div className="h-8 w-20 rounded bg-black/10" />
                        </div>
                        <div className="h-9 w-9 rounded-lg bg-black/10" />
                    </CardHeader>
                    <CardContent className="flex items-center justify-between pt-0">
                        <div className="h-3 w-32 rounded bg-black/10" />
                        <div className="h-5 w-16 rounded-full bg-black/10" />
                    </CardContent>
                </Card>
            ))}
        </>
    );
}
