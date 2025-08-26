import { PlateEditor } from "@/components/editor/plate-editor";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatDate } from "@/lib/utils";
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
            <DialogContent className="sm:max-w-6xl">
                <VisuallyHidden>
                    <DialogHeader>
                        <DialogTitle>{post.title}</DialogTitle>
                        <DialogDescription>
                            {formatDate(post.updatedAt)}
                        </DialogDescription>
                    </DialogHeader>
                </VisuallyHidden>

                <ScrollArea className="h-[80vh]">
                    <p className="text-muted-foreground -mb-5 px-2 text-sm lg:px-20">
                        {formatDate(post.updatedAt)}
                    </p>
                    <PlateEditor
                        value={post.content || undefined}
                        className="px-0 py-0"
                        contentStyle="px-2! lg:px-20! pt-0! pb-10!"
                        readOnly
                    />
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};
