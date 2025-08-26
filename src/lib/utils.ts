import { PostStatus } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
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

export function vnNormalize(s: string) {
    return s
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase();
}

export function formatDate(date: Date | string | number) {
    return format(new Date(date), "EEEE, 'ngày' d/M/yyyy", { locale: vi });
}
