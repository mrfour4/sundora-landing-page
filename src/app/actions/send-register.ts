"use server";

import { transporter } from "@/lib/mail";
import { parseFormData } from "@/lib/parse-form-data";
import { registerSchema, type TRegisterValues } from "@/schemas/register-form";
import { ActionState } from "@/types";
import { z } from "zod";

export async function sendRegister(
    input: TRegisterValues,
): Promise<ActionState> {
    const parsed = registerSchema.safeParse(input);
    if (!parsed.success) {
        const msg = parsed.error.issues.map((i) => i.message).join(", ");
        return { ok: false, error: msg || "Invalid input" };
    }
    const { fullName, phone } = parsed.data;

    await new Promise((res) => {
        setTimeout(res, 2000);
    });

    return {
        ok: true,
        // error: "Không thể gửi thông tin, vui lòng thử lại.",
    };

    try {
        await transporter.sendMail({
            from: `"Register Form" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_TO || process.env.GMAIL_USER,
            subject: "New Register Request",
            text: `Full name: ${fullName}\nPhone: ${phone}`,
            html: `<p><b>Full name:</b> ${escapeHtml(fullName)}</p><p><b>Phone:</b> ${escapeHtml(phone)}</p>`,
            replyTo: process.env.GMAIL_TO || process.env.GMAIL_USER,
        });
        return { ok: true };
    } catch (err) {
        console.error("sendRegister error:", err);
        return {
            ok: false,
            error: "Không thể gửi thông tin, vui lòng thử lại.",
        };
    }
}

export async function sendRegisterFromForm(
    _prev: ActionState | undefined,
    formData: FormData,
): Promise<ActionState> {
    try {
        const input = parseFormData(formData, registerSchema);
        return sendRegister(input);
    } catch (e) {
        if (e instanceof z.ZodError) {
            const msg = e.issues.map((i) => i.message).join(", ");
            return { ok: false, error: msg || "Invalid input" };
        }
        console.error("sendRegisterFromForm error:", e);
        return { ok: false, error: "Có lỗi xảy ra" };
    }
}

function escapeHtml(s: string) {
    return s.replace(
        /[&<>"']/g,
        (m) =>
            ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
            })[m]!,
    );
}
