import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Post, PostStatus } from "@prisma/client";

import { updatePost } from "@/app/actions/post";
import { ImageUploadDropzone } from "@/components/custom-uploader";
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
import { useUploadThing } from "@/hooks/use-upload-file";
import { updatePostSchema } from "@/schemas/post";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

type Props = {
    open: boolean;
    onOpenChange: () => void;
    post: Post;
};

const formSchema = updatePostSchema.extend({
    thumbnail: z.url({ error: "Vui lòng chọn ảnh bìa hợp lệ" }),
});

type TFormValues = z.infer<typeof formSchema>;

export const EditPost = ({ open, onOpenChange, post }: Props) => {
    const { title, thumbnail, status } = post;
    const form = useForm<TFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title,
            thumbnail: thumbnail ?? "",
            status,
        },
    });

    const [isPending, startTransition] = useTransition();
    const { isUploading } = useUploadThing("imageUploader");

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
                    const isThumbnailChanged =
                        form.getValues("thumbnail") &&
                        post.thumbnail !== form.getValues("thumbnail");

                    if (isPending || isThumbnailChanged) {
                        e.preventDefault();
                    }
                }}
            >
                <DialogHeader>
                    <DialogTitle>Chỉnh sửa bài viết</DialogTitle>
                    <DialogDescription>
                        Cập nhật tiêu đề, ảnh bìa và trạng thái.
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
                                        <FormLabel>Tiêu đề</FormLabel>
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
                                        <FormLabel>Trạng thái</FormLabel>
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
                                                        "Chọn trạng thái"}
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
                                    <FormLabel>Ảnh bìa</FormLabel>
                                    <FormControl>
                                        <ImageUploadDropzone
                                            url={field.value}
                                            disabled={isPending}
                                            onChange={(url) => {
                                                field.onChange(url);
                                            }}
                                        />
                                    </FormControl>

                                    <input
                                        type="hidden"
                                        name="thumbnail"
                                        value={field.value ?? ""}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            disabled={isPending || isUploading}
                            className="w-full"
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            Lưu
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};
