"use client";

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
import { HOME_BOTTOM_IMG, VN_PHONE_REGEX } from "@/constants";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(1, { message: "Vui lòng nhập họ và tên" })
        .regex(/^[A-Za-zÀ-ỹỲ-ỷ\s]+$/, {
            message: "Tên chỉ được chứa chữ và khoảng trắng",
        }),
    phone: z
        .string()
        .regex(VN_PHONE_REGEX, { message: "Số điện thoại không hợp lệ" }),
});

type FormValues = z.infer<typeof formSchema>;

export const RegisterForm = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            phone: "",
        },
    });

    const inputId = useId();

    const onSubmit = (value: FormValues) => {
        console.log("🚀 ~ onSubmit ~ value:", value);
        alert("Submitted form: " + JSON.stringify(value, null, 2));
    };

    return (
        <div
            style={{ backgroundImage: `url(${HOME_BOTTOM_IMG})` }}
            className="flex h-28 items-center justify-between gap-x-20 px-20"
        >
            <Label
                className={cn(
                    "text-secondary ml-auto text-lg font-light",
                    albra.className,
                )}
                htmlFor={inputId}
            >
                Đăng ký tư vấn
            </Label>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex items-center gap-x-10"
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
                        className="text-secondary-foreground-foreground px-5 py-1"
                    >
                        gửi thông tin
                    </Button>
                </form>
            </Form>
        </div>
    );
};
