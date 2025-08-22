import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Post, PostStatus } from "@prisma/client";

import { updatePost } from "@/app/actions/post";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select";
import { UploadDropzone } from "@/components/upload-image";
import { TUpdatePost, updatePostSchema } from "@/schemas/post";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type Props = {
    open: boolean;
    onOpenChange: () => void;
    post: Post;
};

export const EditPost = ({ open, onOpenChange, post }: Props) => {
    const { title, thumbnail, status } = post;
    const form = useForm<TUpdatePost>({
        resolver: zodResolver(updatePostSchema),
        defaultValues: {
            title,
            thumbnail: thumbnail ?? "",
            status,
        },
    });

    const [isPending, startTransition] = useTransition();

    const onAction = async (formData: FormData) => {
        const isValid = await form.trigger();

        if (!isValid) return;
        startTransition(async () => {
            const result = await updatePost(null, formData);
            if (!result.ok) {
                toast.error(result.message);
            } else {
                toast.success(result.message);
            }
            onOpenChange();
        });
    };

    const postStatus = Object.values(PostStatus);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                onInteractOutside={(e) => {
                    if (isPending) {
                        e.preventDefault();
                    }
                }}
            >
                <DialogHeader>
                    <DialogTitle>Chỉnh sửa bài viết</DialogTitle>
                    <DialogDescription>
                        Cập nhật tiêu đề, hình ảnh, nội dung hoặc trạng thái bài
                        viết.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form className="space-y-8" action={onAction}>
                        <input type="hidden" name="id" value={post.id} />
                        <div className="flex items-start gap-4">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Tiêu đề"
                                                {...field}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Status</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            defaultValue={post.status}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="min-w-[124px] capitalize">
                                                    {postStatus
                                                        .find(
                                                            (status) =>
                                                                field.value ===
                                                                status,
                                                        )
                                                        ?.toLocaleLowerCase() ??
                                                        "Select status"}
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {postStatus.map((status) => (
                                                    <SelectItem
                                                        key={status}
                                                        value={status}
                                                    >
                                                        <Badge
                                                            variant={status}
                                                            className="capitalize"
                                                        >
                                                            {status.toLocaleLowerCase()}
                                                        </Badge>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <input
                                            type="hidden"
                                            name="status"
                                            value={field.value ?? ""}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="thumbnail"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Thumbnail</FormLabel>
                                    <FormControl>
                                        <UploadDropzone
                                            endpoint="imageUploader"
                                            onClientUploadComplete={(res) => {
                                                // field.onChange(res.url)
                                            }}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" disabled={isPending}>
                            Submit
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};
