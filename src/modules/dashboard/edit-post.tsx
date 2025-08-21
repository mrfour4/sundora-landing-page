import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Post } from "@prisma/client";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    post: Post;
};

export const EditPost = ({ open, onOpenChange, post }: Props) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit post</DialogTitle>
                    <DialogDescription>My post</DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
