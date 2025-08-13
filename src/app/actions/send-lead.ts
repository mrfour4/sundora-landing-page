"use server";

import {
    buildHtml,
    buildSubject,
    buildText,
    COMPANY_NAME,
    getLogoAttachment,
    SUPPORT_EMAIL,
} from "@/lib/email-template";
import { transporter } from "@/lib/mail";
import { parseFormData } from "@/lib/parse-form-data";
import { contactSchema, type TContactValues } from "@/schemas/contact-schema";
import type { ActionState } from "@/types";
import { z } from "zod";

export async function sendLead(input: TContactValues): Promise<ActionState> {
    const parsed = contactSchema.safeParse(input);
    if (!parsed.success) {
        const msg = parsed.error.issues.map((i) => i.message).join(", ");
        return { ok: false, error: msg || "Dữ liệu không hợp lệ." };
    }
    const data = parsed.data;
    const subject = buildSubject(data);

    const logoAtt = await getLogoAttachment();

    try {
        await transporter.sendMail({
            from: `"${COMPANY_NAME} - Contact Form" <${process.env.GMAIL_USER}>`,
            to: SUPPORT_EMAIL,
            subject,
            text: buildText(data, subject),
            html: buildHtml(data, subject, Boolean(logoAtt)),
            replyTo: data.email || SUPPORT_EMAIL,
            attachments: logoAtt ? [logoAtt] : [],
        });
        return { ok: true };
    } catch (e) {
        console.error("sendLead error:", e);
        return {
            ok: false,
            error: "Không thể gửi email. Vui lòng thử lại sau.",
        };
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
            return { ok: false, error: msg || "Dữ liệu không hợp lệ." };
        }
        console.error("sendLeadFromForm error:", e);
        return { ok: false, error: "Có lỗi hệ thống. Vui lòng thử lại sau." };
    }
}
