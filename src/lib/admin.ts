import { auth } from "@/auth";
import { Session } from "next-auth";

const ADMIN =
    process.env.ADMIN_EMAIL?.toLowerCase() ||
    process.env.GMAIL_USER?.toLowerCase();

export function isAdmin(auth: Session | null) {
    const email = auth?.user?.email?.toLowerCase();
    return !!email && email === ADMIN;
}

export async function ensureAdmin() {
    const session = await auth();
    const _isAdmin = isAdmin(session);

    if (!_isAdmin) {
        throw new Error("Bạn không có quyền thực hiện thao tác này.");
    }
}
