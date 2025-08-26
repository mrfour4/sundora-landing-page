"use client";

import { deletePost } from "@/app/actions/post";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Post } from "@prisma/client";
import { Loader2, Trash2 } from "lucide-react";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

type Props = {
    open: boolean;
    onOpenChange: () => void;
    post: Post;
};

export const DeletePost = ({ open, onOpenChange, post }: Props) => {
    const [state, formAction, isPending] = useActionState(
        deletePost,
        undefined,
    );

    useEffect(() => {
        if (isPending || !state) return;
        if (state.ok) {
            toast.success(state.message);
        } else {
            toast.error(state.message);
        }
        onOpenChange();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state, isPending]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="sm:max-w-md"
                onInteractOutside={(e) => {
                    if (isPending) {
                        e.preventDefault();
                    }
                }}
            >
                <DialogHeader>
                    <DialogTitle>Xóa bài viết?</DialogTitle>
                    <DialogDescription>
                        Hành động này{" "}
                        <span className="font-semibold text-red-600">
                            không thể hoàn tác
                        </span>
                        . Bài viết{" "}
                        <span className="font-medium">
                            &ldquo;{post.title}&rdquo;
                        </span>{" "}
                        sẽ bị xóa vĩnh viễn khỏi hệ thống. Nếu bài viết đang ở
                        trạng thái{" "}
                        <span className="font-medium">Published</span>, nó sẽ
                        ngừng hiển thị trên website.
                    </DialogDescription>
                </DialogHeader>

                <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
                    💡 Gợi ý: Nếu chỉ muốn ẩn tạm thời, hãy chuyển trạng thái
                    sang <span className="font-semibold">Draft</span> hoặc{" "}
                    <span className="font-semibold">Archived</span>.
                </div>

                <DialogFooter className="gap-2 sm:space-x-0">
                    <DialogClose asChild>
                        <Button variant="ghost">Hủy</Button>
                    </DialogClose>

                    <form action={formAction}>
                        <input type="hidden" name="id" value={post.id} />
                        <Button
                            type="submit"
                            disabled={isPending}
                            className="inline-flex items-center gap-2 rounded-md border border-red-300/60 bg-gradient-to-b from-red-500 to-red-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:to-red-700 focus:ring-2 focus:ring-red-400/50 focus:outline-none"
                        >
                            {isPending ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" />
                                    Đang xóa...
                                </>
                            ) : (
                                <>
                                    <Trash2 className="size-4" />
                                    Xóa vĩnh viễn
                                </>
                            )}
                        </Button>
                    </form>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
