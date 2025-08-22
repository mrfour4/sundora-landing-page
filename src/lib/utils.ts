import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function errorMsg(err: unknown, msg: string) {
    const message = err instanceof Error ? err.message : msg;
    return { ok: false, message };
}
