"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { formatTime } from "@/lib/format-time";
import { getPostStatusLabel, vnNormalize } from "@/lib/utils";
import { Post, PostStatus } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { TableBulkAction } from "./bulk-action";
import { ColumnHeader } from "./column-header";
import { RowActions } from "./row-actions";
import { Thumbnail } from "./thumbnail";

export const columns: ColumnDef<Post>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Chọn tất cả"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Chọn dòng"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "thumbnail",
        header: "Ảnh bìa",
        cell: ({ row }) => {
            const post = row.original as Post;
            return <Thumbnail src={post.thumbnail} />;
        },
    },
    {
        accessorKey: "title",
        header: ({ column }) => (
            <ColumnHeader column={column} title="Tiêu đề" />
        ),
        cell: ({ row }) => {
            const post = row.original as Post;
            return (
                <Link
                    href={`/admin/post/${post.slug}`}
                    className="hover:underline"
                >
                    {post.title}
                </Link>
            );
        },
        filterFn: (row, id, value) => {
            const q = vnNormalize(value);
            if (!q) return true;
            return vnNormalize(row.getValue(id)).includes(q);
        },
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <ColumnHeader column={column} title="Trạng thái" />
        ),
        cell: ({ row }) => {
            const status = row.getValue("status") as PostStatus;
            return (
                <Badge variant={status} className="capitalize">
                    {getPostStatusLabel(status)}
                </Badge>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: "updatedAt",
        header: ({ column }) => (
            <ColumnHeader column={column} title="Cập nhật" />
        ),
        cell: ({ row }) => {
            const updatedAt = row.getValue("updatedAt") as string;
            const formatted = formatTime(updatedAt);
            return formatted;
        },
    },
    {
        id: "actions",
        header: ({ table }) => <TableBulkAction table={table} />,
        cell: ({ row }) => {
            const post = row.original as Post;
            return <RowActions post={post} />;
        },
    },
];
