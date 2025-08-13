"use client";

import { ActionState } from "@/types";
import { useTransition } from "react";
import { toast } from "sonner";

type Options<TInput, TResult> = {
    messages?: {
        loading?: string;
        success?: string | ((res: ActionState<TResult>) => string);
        error?: string | ((err: unknown, res?: ActionState<TResult>) => string);
    };
    onSuccess?: (res: ActionState<TResult>, input: TInput) => void;
    onError?: (
        res: ActionState<TResult> | undefined,
        err: unknown,
        input: TInput,
    ) => void;
    afterSuccess?: () => void;
};

export function useServerAction<TInput, TResult = void>(
    action: (input: TInput) => Promise<ActionState<TResult>>,
    opts?: Options<TInput, TResult>,
) {
    const [isPending, startTransition] = useTransition();

    const submit = (input: TInput) => {
        startTransition(() => {
            const p = action(input)
                .then((res) => {
                    if (!res.ok) {
                        const msg =
                            typeof opts?.messages?.error === "function"
                                ? opts.messages.error(res, res)
                                : opts?.messages?.error ||
                                  res.error ||
                                  "Thao tác thất bại";
                        throw new Error(msg);
                    }
                    opts?.onSuccess?.(res, input);
                    opts?.afterSuccess?.();
                    return res;
                })
                .catch((err) => {
                    opts?.onError?.(undefined, err, input);
                    throw err;
                });

            toast.promise(p, {
                loading: opts?.messages?.loading ?? "Đang xử lý...",
                success: (res) =>
                    typeof opts?.messages?.success === "function"
                        ? (opts.messages.success as any)(res)
                        : (opts?.messages?.success ?? "Thành công!"),
                error: (err) =>
                    typeof opts?.messages?.error === "function"
                        ? (opts.messages.error as any)(err)
                        : ((err as Error)?.message ?? "Có lỗi xảy ra"),
            });
        });
    };

    return { submit, isPending };
}
