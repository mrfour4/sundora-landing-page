import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { canUpload, getUserRoles, rolesOfEmail } from "./lib/rbac";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        async signIn({ profile, user }) {
            const email = (user?.email ?? (profile as any)?.email ?? "")
                .trim()
                .toLowerCase();

            return rolesOfEmail(email).length > 0;
        },
        authorized({ auth: session }) {
            return canUpload(session);
        },
        async session({ session }) {
            session.user = {
                ...session.user,
                // @ts-expect-error
                roles: getUserRoles(session),
            };
            return session;
        },
        async redirect({ url, baseUrl }) {
            let u: URL;
            try {
                u = new URL(url, baseUrl);
            } catch {
                return baseUrl;
            }
            if (u.origin !== baseUrl) return baseUrl;
            if (u.pathname === "/auth") return `${baseUrl}/admin`;
            return u.href;
        },
    },
    pages: { signIn: "/auth", error: "/auth/error" },
});
