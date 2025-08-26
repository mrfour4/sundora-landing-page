import { updatePost } from "@/app/actions/post";
import { PostStatus } from "@prisma/client";
import { Archive } from "lucide-react";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

type Props = {
    id: string;
    onClose?: () => void;
};

export const ArchiveButton = ({ id, onClose }: Props) => {
    const [state, formAction, isPending] = useActionState(updatePost, null);

    useEffect(() => {
        if (!state || isPending) return;

        if (isPending || !state) return;
        if (state.ok) {
            toast.success(state.message);
        } else {
            toast.error(state.message);
        }
        onClose?.();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state, isPending]);

    return (
        <form action={formAction}>
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="status" value={PostStatus.ARCHIVED} />
            <button
                type="submit"
                disabled={isPending}
                className="flex items-center gap-2 disabled:opacity-50"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <Archive /> Lưu trữ
            </button>
        </form>
    );
};
