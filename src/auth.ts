import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const ADMIN =
    process.env.ADMIN_EMAIL?.toLowerCase() ||
    process.env.GMAIL_USER?.toLowerCase();

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        async signIn({ profile, user }) {
            // eslint-disable-next-line
            const email = (user?.email ?? (profile as any)?.email ?? "")
                .trim()
                .toLowerCase();

            return !!ADMIN && email === ADMIN;
        },
        authorized({ auth }) {
            const email = auth?.user?.email?.toLowerCase();
            return !!email && email === ADMIN;
        },
    },
    pages: {
        signIn: "/auth",
        error: "/auth/error",
    },
});
