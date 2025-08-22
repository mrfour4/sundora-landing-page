import { createPost } from "@/app/actions/post";
import { Button } from "@/components/ui/button";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export const CreateButton = () => {
    const [state, formAction, isPending] = useActionState(createPost, null);

    useEffect(() => {
        if (!state || isPending) return;

        if (!state?.ok) {
            toast.error(state?.message);
        }
    }, [state, isPending]);

    return (
        <form action={formAction}>
            <Button
                type="submit"
                className="rounded-md border border-blue-300/60 bg-gradient-to-b from-blue-100 to-blue-200 px-3 py-1.5 text-sm font-semibold text-blue-700 shadow-sm hover:opacity-95 focus:ring-2 focus:ring-blue-400/50 focus:outline-none"
                disabled={isPending}
            >
                Tạo bài viết
            </Button>
        </form>
    );
};
