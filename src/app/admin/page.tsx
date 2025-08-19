import { signOut } from "@/auth";

export default function AdminPage() {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
        >
            <button type="submit">Signout</button>
        </form>
    );
}
