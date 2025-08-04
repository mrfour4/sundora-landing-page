"use client";

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
import { VN_PHONE_REGEX } from "@/constants";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
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
    email: z.email("Email không hợp lệ").optional(),
    message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const RegisterForm = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = (value: FormValues) => {
        console.log("🚀 ~ onSubmit ~ value:", value);
        alert("Submitted form: " + JSON.stringify(value, null, 2));
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
                        >
                            gửi thông tin
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};
