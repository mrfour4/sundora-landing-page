import { Suspense } from "react";
import { DashboardShell } from "./dashboard-shell";
import { TableSkeleton } from "./data-table";
import ListPosts from "./list-posts";
import { StatsCards, StatsCardsSkeleton } from "./stats-cards";

export const Dashboard = () => {
    return (
        <DashboardShell>
            <section className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<StatsCardsSkeleton />}>
                    <StatsCards />
                </Suspense>
            </section>

            <section className="space-y-3">
                <div className="flex items-end justify-between">
                    <h2 className="text-lg font-semibold">Bài viết</h2>
                    <p className="text-xs text-black/60">
                        Quản trị nội dung marketing
                    </p>
                </div>

                <Suspense fallback={<TableSkeleton columns={6} rows={6} />}>
                    <ListPosts />
                </Suspense>
            </section>
        </DashboardShell>
    );
};
