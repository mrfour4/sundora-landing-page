import { Archive, MoreHorizontal, Pencil, Trash } from "lucide-react";

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
import { DeletePost } from "./delete-post";
import { EditPost } from "./edit-post";

type Props = {
    post: Post;
};

export const RowActions = ({ post }: Props) => {
    const [type, setType] = useState<"edit" | "delete" | null>(null);

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
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setType("edit")}>
                        <Pencil /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Archive /> Archive
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        variant="destructive"
                        onClick={() => setType("delete")}
                    >
                        <Trash /> Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};
