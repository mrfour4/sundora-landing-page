import { VN_PHONE_REGEX } from "@/constants";
import { z } from "zod";

export const personBaseSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(1, { message: "Vui lòng nhập họ và tên" })
        .regex(/^[A-Za-zÀ-ỹỲ-ỷ\s]+$/, { message: "Tên không hợp lệ" }),
    phone: z
        .string()
        .regex(VN_PHONE_REGEX, { message: "Số điện thoại không hợp lệ" }),
});
export type TPersonBase = z.infer<typeof personBaseSchema>;
