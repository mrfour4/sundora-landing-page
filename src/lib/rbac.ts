import type { Session } from "next-auth";

const norm = (s?: string | null) => (s ?? "").trim().toLowerCase();
const envEmail = (k: string) => norm(process.env[k]);

export const INFO_EMAIL = envEmail("INFO_EMAIL");
export const FANPAGE_EMAIL = envEmail("FANPAGE_EMAIL");
export const CUSTOMER_EMAIL = envEmail("CUSTOMER_EMAIL");
export const SUPPORT_EMAIL = norm(process.env.SUPPORT_EMAIL);

export type Role = "uploader" | "publisher";

export function rolesOfEmail(email?: string | null): Role[] {
    const e = norm(email);
    const roles: Role[] = [];
    if (!e) return roles;

    if (e === CUSTOMER_EMAIL) roles.push("uploader", "publisher");
    if (e === FANPAGE_EMAIL) roles.push("uploader");
    return roles;
}

export function getUserEmail(session: Session | null) {
    return norm(session?.user?.email);
}

export function getUserRoles(session: Session | null): Role[] {
    return rolesOfEmail(getUserEmail(session));
}

export function hasRole(session: Session | null, role: Role) {
    return getUserRoles(session).includes(role);
}

export const canUpload = (s: Session | null) => hasRole(s, "uploader");
export const canPublish = (s: Session | null) => hasRole(s, "publisher");

export async function ensureUploader(auth: () => Promise<Session | null>) {
    const session = await auth();
    if (!canUpload(session))
        throw new Error("Bạn không có quyền thực hiện thao tác này.");
}
export async function ensurePublisher(auth: () => Promise<Session | null>) {
    const session = await auth();
    if (!canPublish(session))
        throw new Error("Bạn không có quyền thực hiện thao tác này.");
}

export const LEAD_RECIPIENTS = [INFO_EMAIL, FANPAGE_EMAIL].filter(Boolean);
export function getLeadRecipients() {
    return LEAD_RECIPIENTS;
}
