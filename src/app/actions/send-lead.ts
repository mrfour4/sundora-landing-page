// app/actions/send-lead.ts
"use server";

import { transporter } from "@/lib/mail";
import { parseFormData } from "@/lib/parse-form-data";
import { contactSchema, type TContactValues } from "@/schemas/contact-schema";
import { ActionState } from "@/types";
import { z } from "zod";

export async function sendLead(input: TContactValues): Promise<ActionState> {
    const parsed = contactSchema.safeParse(input);
    if (!parsed.success) {
        const msg = parsed.error.issues.map((i) => i.message).join(", ");
        return { ok: false, error: msg || "Invalid input" };
    }
    const { fullName, phone, email, message } = parsed.data;

    const subject = email || message ? "New Contact" : "New Register";
    const html = `
    <p><b>Full name:</b> ${esc(fullName)}</p>
    <p><b>Phone:</b> ${esc(phone)}</p>
    ${email ? `<p><b>Email:</b> ${esc(email)}</p>` : ""}
    ${message ? `<p><b>Message:</b> ${esc(message)}</p>` : ""}
  `;

    await new Promise((res) => {
        setTimeout(res, 2000);
    });

    return { ok: true };

    try {
        await transporter.sendMail({
            from: `"Lead Form" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_TO || process.env.GMAIL_USER,
            subject,
            text: `Full name: ${fullName}\nPhone: ${phone}${email ? `\nEmail: ${email}` : ""}${message ? `\nMessage: ${message}` : ""}`,
            html,
            replyTo: email || process.env.GMAIL_TO || process.env.GMAIL_USER,
        });
        return { ok: true };
    } catch (e) {
        console.error("sendLead error:", e);
        return { ok: false, error: "Không thể gửi email, vui lòng thử lại." };
    }
}

export async function sendLeadFromForm(
    _prev: ActionState | undefined,
    formData: FormData,
): Promise<ActionState> {
    try {
        const input = parseFormData(formData, contactSchema);
        return sendLead(input);
    } catch (e) {
        if (e instanceof z.ZodError) {
            const msg = e.issues.map((i) => i.message).join(", ");
            return { ok: false, error: msg || "Invalid input" };
        }
        console.error("sendLeadFromForm error:", e);
        return { ok: false, error: "Có lỗi xảy ra" };
    }
}

function esc(s: string) {
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
