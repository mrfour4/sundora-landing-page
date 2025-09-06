"use server";

import {
    buildHtml,
    buildSubject,
    buildText,
    COMPANY_NAME,
    getLogoAttachment,
} from "@/lib/email-template";
import { transporter } from "@/lib/mail";
import { getLeadRecipients, SUPPORT_EMAIL } from "@/lib/rbac";
import { contactSchema, type TContactValues } from "@/schemas/contact-schema";
import type { ActionState } from "@/types";

export async function sendLead(input: TContactValues): Promise<ActionState> {
    const parsed = contactSchema.safeParse(input);
    if (!parsed.success) {
        const msg = parsed.error.issues.map((i) => i.message).join(", ");
        return { ok: false, error: msg || "Dữ liệu không hợp lệ." };
    }

    const data = parsed.data;
    const subject = buildSubject(data);
    const logoAtt = await getLogoAttachment();
    const recipients = getLeadRecipients();
    if (!recipients.length)
        return { ok: false, error: "Chưa cấu hình người nhận email lead." };

    try {
        await transporter.sendMail({
            from: `"${COMPANY_NAME} - Contact Form" <${process.env.GMAIL_USER}>`,
            to: recipients,
            subject,
            text: buildText(data, subject),
            html: buildHtml(data, subject, Boolean(logoAtt)),
            replyTo: data.email || SUPPORT_EMAIL || recipients[0],
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
