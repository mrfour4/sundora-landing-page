"use client";

import { sendLead } from "@/app/actions/send-lead";
import { albra, sparkling } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useServerAction } from "@/hooks/use-server-action";
import { cn } from "@/lib/utils";
import { contactSchema, TContactValues } from "@/schemas/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
    const form = useForm<TContactValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            message: "",
        },
    });

    const { submit, isPending } = useServerAction<TContactValues>(sendLead, {
        messages: {
            loading: "Đang gửi...",
            success: "Gửi thành công!",
            error: (err) =>
                (err as Error).message || "Gửi thất bại, vui lòng thử lại.",
        },
        afterSuccess: () => form.reset(),
    });

    const onSubmit = (values: TContactValues) => {
        submit(values);
    };

    return (
        <div className="from-secondary to-secondary-foreground rounded-md bg-gradient-to-b px-8 py-6">
            <h1
                className={cn(
                    "text-primary text-center text-4xl font-light uppercase",
                    albra.className,
                )}
            >
                ĐĂNG KÝ
            </h1>
            <h2
                className={cn(
                    "text-primary mt-2 text-center text-lg",
                    sparkling.className,
                )}
            >
                Nhận tư vấn
            </h2>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mt-6 space-y-5"
                >
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <div className="group border-secondary-foreground flex flex-row gap-3 border-b">
                                    <FormLabel
                                        className={cn(
                                            "text-sm font-light text-white opacity-50 group-focus-within:opacity-100",
                                            albra.className,
                                        )}
                                    >
                                        Họ và tên*
                                    </FormLabel>
                                    <FormControl>
                                        <input
                                            className={cn(
                                                "text-sm font-light text-white outline-none",
                                                albra.className,
                                            )}
                                            disabled={isPending}
                                            {...field}
                                        />
                                    </FormControl>
                                </div>

                                <FormMessage
                                    className={cn("text-lg", albra.className)}
                                />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <div className="group border-secondary-foreground flex flex-row gap-3 border-b">
                                    <FormLabel
                                        className={cn(
                                            "text-sm font-light text-white opacity-50 group-focus-within:opacity-100",

                                            albra.className,
                                        )}
                                    >
                                        Số điện thoại*
                                    </FormLabel>
                                    <FormControl>
                                        <input
                                            className={cn(
                                                "text-sm font-light text-white outline-none",
                                                albra.className,
                                            )}
                                            disabled={isPending}
                                            {...field}
                                        />
                                    </FormControl>
                                </div>

                                <FormMessage
                                    className={cn("text-lg", albra.className)}
                                />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <div className="group border-secondary-foreground flex flex-row gap-3 border-b">
                                    <FormLabel
                                        className={cn(
                                            "text-sm font-light text-white opacity-50 group-focus-within:opacity-100",

                                            albra.className,
                                        )}
                                    >
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <input
                                            className={cn(
                                                "border-secondary-foreground border-b text-sm font-light text-white outline-none",
                                                albra.className,
                                            )}
                                            disabled={isPending}
                                            {...field}
                                        />
                                    </FormControl>
                                </div>

                                <FormMessage
                                    className={cn("text-lg", albra.className)}
                                />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="group border-secondary-foreground flex flex-col gap-3 border-b">
                                <FormLabel
                                    className={cn(
                                        "text-sm font-light text-white opacity-50 group-focus-within:opacity-100",

                                        albra.className,
                                    )}
                                >
                                    Nội dung
                                </FormLabel>
                                <FormControl>
                                    <textarea
                                        className={cn(
                                            "border-secondary-foreground resize-none border-b text-sm font-light text-white outline-none",
                                            albra.className,
                                        )}
                                        rows={3}
                                        disabled={isPending}
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center justify-center">
                        <Button
                            type="submit"
                            variant="outline"
                            className="text-muted-foreground mt-6 size-auto cursor-pointer rounded-full bg-white! px-10 py-1 text-xs font-bold uppercase"
                            disabled={isPending}
                        >
                            gửi thông tin
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};
