import { MoreHorizontal, Pencil, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Post } from "@prisma/client";
import { useState } from "react";
import { ArchiveButton } from "./archive-post";
import { DeletePost } from "./delete-post";
import { EditPost } from "./edit-post";

type Props = {
    post: Post;
};

export const RowActions = ({ post }: Props) => {
    const [type, setType] = useState<"edit" | "delete" | null>(null);
    const [open, setOpen] = useState(false);

    const onClose = () => {
        setType(null);
    };

    return (
        <>
            <EditPost
                open={type === "edit"}
                onOpenChange={onClose}
                post={post}
            />
            <DeletePost
                open={type === "delete"}
                onOpenChange={onClose}
                post={post}
            />
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setType("edit")}>
                        <Pencil /> Chỉnh sửa
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <ArchiveButton
                            id={post.id}
                            onClose={() => setOpen(false)}
                        />
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        variant="destructive"
                        onClick={() => setType("delete")}
                    >
                        <Trash /> Xoá
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};
