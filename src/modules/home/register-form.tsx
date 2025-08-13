"use client";

import { sendLead } from "@/app/actions/send-lead";
import { albra } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { HOME_BOTTOM_IMG } from "@/constants";
import { useServerAction } from "@/hooks/use-server-action";
import { cn } from "@/lib/utils";
import { registerSchema, TRegisterValues } from "@/schemas/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
    const form = useForm<TRegisterValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: { fullName: "", phone: "" },
    });

    const { submit, isPending } = useServerAction<TRegisterValues>(sendLead, {
        messages: {
            loading: "Đang gửi...",
            success: "Gửi thành công!",
            error: (err) =>
                (err as Error).message || "Gửi thất bại, vui lòng thử lại.",
        },
        afterSuccess: () => form.reset(),
    });

    const inputId = useId();

    const onSubmit = (values: TRegisterValues) => {
        submit(values);
    };

    return (
        <div
            style={{ backgroundImage: `url(${HOME_BOTTOM_IMG})` }}
            className="flex h-28 items-center justify-between gap-x-20 px-20"
        >
            <Label
                className={cn(
                    "text-secondary text-lg font-light 2xl:ml-auto",
                    albra.className,
                )}
                htmlFor={inputId}
            >
                Đăng ký tư vấn
            </Label>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex items-center gap-x-10 xl:gap-x-20"
                >
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <input
                                        id={inputId}
                                        placeholder="Họ và tên*"
                                        className={cn(
                                            "border-secondary-foreground border-b font-light text-white outline-none placeholder:text-sm placeholder:text-white focus-visible:border-b-2 focus-visible:placeholder:text-white/80",
                                            albra.className,
                                        )}
                                        disabled={isPending}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage
                                    className={cn("text-sm", albra.className)}
                                />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <input
                                        placeholder="Số điện thoại*"
                                        className={cn(
                                            "border-secondary-foreground border-b font-light text-white outline-none placeholder:text-sm placeholder:text-white focus-visible:border-b-2 focus-visible:placeholder:text-white/80",
                                            albra.className,
                                        )}
                                        disabled={isPending}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage
                                    className={cn("text-sm", albra.className)}
                                />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        variant="secondary"
                        className="text-secondary-foreground-foreground px-5 py-1 uppercase"
                        disabled={isPending}
                    >
                        {isPending ? "đang gửi..." : "gửi thông tin"}
                    </Button>
                </form>
            </Form>
        </div>
    );
};
