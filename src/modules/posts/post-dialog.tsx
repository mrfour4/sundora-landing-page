import { PlateEditor } from "@/components/editor/plate-editor";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { VisuallyHidden } from "@ariakit/react";
import { Post } from "@prisma/client";

type Props = {
    post: Post | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export const PostContentDialog = ({ post, open, onOpenChange }: Props) => {
    if (!post) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="gap-0 p-0 sm:max-w-6xl">
                <VisuallyHidden>
                    <DialogHeader>
                        <DialogTitle>{post.title}</DialogTitle>
                        <DialogDescription>{post.status}</DialogDescription>
                    </DialogHeader>
                </VisuallyHidden>

                <ScrollArea className="h-[90vh]">
                    <PlateEditor
                        value={post.content || undefined}
                        className="px-0 py-0"
                        contentStyle="px-20! py-10!"
                        readOnly
                    />
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};
