import { PostStatus } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function errorMsg(err: unknown, msg: string) {
    const message = err instanceof Error ? err.message : msg;
    return { ok: false, message };
}

export function getPostStatusLabel(status: PostStatus): string {
    switch (status) {
        case PostStatus.DRAFT:
            return "nháp";
        case PostStatus.PUBLISHED:
            return "đã xuất bản";
        case PostStatus.ARCHIVED:
            return "lưu trữ";
        default:
            return String(status);
    }
}
