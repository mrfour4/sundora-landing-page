import { archivePostsBulk, deletePostsBulk } from "@/app/actions/post";
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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Post } from "@prisma/client";
import { Table } from "@tanstack/react-table";
import { Archive, Loader2, MoreHorizontal, Trash, Trash2 } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

interface Props {
    table: Table<Post>;
}

export const TableBulkAction = <TData,>({ table }: Props) => {
    const [open, setOpen] = useState(false);
    const selectedRows = table.getSelectedRowModel().rows;
    const count = selectedRows.length;
    const [isPending, startTransition] = useTransition();

    const ids = selectedRows.map((r) => r.original.id);

    const onConfirm = () => {
        startTransition(async () => {
            const res = await deletePostsBulk(ids);
            if (!res.ok) {
                toast.error(res.message ?? "Delete failed");
                return;
            }
            toast.success(`Deleted ${count} post${count > 1 ? "s" : ""}`);
            setOpen(false);
            table.resetRowSelection();
        });
    };

    const onArchive = () => {
        startTransition(async () => {
            const res = await archivePostsBulk(ids);
            if (!res.ok) {
                toast.error(res.message);
                return;
            }
            toast.success(res.message);
            table.resetRowSelection();
        });
    };

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Xóa {count} bài viết đã chọn?</DialogTitle>
                        <DialogDescription>
                            Hành động này{" "}
                            <span className="font-semibold text-red-600">
                                không thể hoàn tác
                            </span>
                            .{` `}
                            {count} bài viết đã chọn sẽ bị xóa vĩnh viễn khỏi hệ
                            thống.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="ghost">Hủy</Button>
                        </DialogClose>
                        <Button
                            type="submit"
                            disabled={isPending}
                            onClick={onConfirm}
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
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost" disabled={count === 0}>
                        <MoreHorizontal />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="end"
                    onInteractOutside={(e) => {
                        if (isPending) {
                            e.preventDefault();
                        }
                    }}
                >
                    <DropdownMenuItem disabled={isPending} onClick={onArchive}>
                        <Archive /> Lưu trữ
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        variant="destructive"
                        onClick={() => setOpen(true)}
                    >
                        <Trash /> Xoá
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};
