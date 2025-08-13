import { TContactValues } from "@/schemas/contact-schema";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const COMPANY_NAME = process.env.COMPANY_NAME ?? "Sundora Tower";
export const SUPPORT_EMAIL =
    process.env.SUPPORT_EMAIL ??
    process.env.GMAIL_TO ??
    process.env.GMAIL_USER!;
export const SUPPORT_PHONE = process.env.SUPPORT_PHONE ?? "";
export const WEBSITE_URL = process.env.WEBSITE_URL ?? "https://sundora.vn";
export const BRAND_COLOR = process.env.BRAND_COLOR ?? "#c39249";

export function buildSubject(d: TContactValues) {
    const isContact = Boolean(d.email || d.message);
    return `${isContact ? "Yêu cầu liên hệ mới" : "Đăng ký tư vấn mới"} — ${d.fullName}`;
}

export function buildText(d: TContactValues, subject: string) {
    const lines = [subject, `Họ tên: ${d.fullName}`, `Điện thoại: ${d.phone}`];
    if (d.email) lines.push(`Email: ${d.email}`);
    if (d.message) lines.push(`Nội dung: ${d.message}`);
    if (SUPPORT_PHONE) lines.push(`CSKH: ${SUPPORT_PHONE}`);
    if (WEBSITE_URL) lines.push(`Website: ${WEBSITE_URL}`);
    return lines.join("\n");
}

export async function getLogoAttachment() {
    const cid = "brandlogo@sundora.vn";
    try {
        const p = path.join(
            process.cwd(),
            "public",
            "images",
            "logo-email.png",
        );
        const buf = await readFile(p);
        return {
            filename: "logo-email.png",
            content: buf,
            cid,
            contentType: "image/png",
        } as const;
    } catch {}
    return undefined;
}

export function buildHtml(
    d: TContactValues,
    subject: string,
    hasLogo: boolean,
) {
    const now = new Date().toLocaleString("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
    });
    const accent = BRAND_COLOR;

    const hasEmail = !!d.email && d.email.trim() !== "";
    const replySubject = "Phản hồi: " + subject;

    const replyBody = [
        `Xin chào ${d.fullName},`,
        ``,
        `Cảm ơn anh/chị đã ${hasEmail || d.message ? "liên hệ" : "đăng ký tư vấn"} với ${COMPANY_NAME}.`,
        `Chúng tôi sẽ hỗ trợ trong thời gian sớm nhất.`,
        ``,
        `—`,
        `Thông tin KH:`,
        `• Họ tên: ${d.fullName}`,
        `• Điện thoại: ${d.phone}`,
        hasEmail ? `• Email: ${d.email}` : undefined,
        d.message ? `• Nội dung: ${d.message}` : undefined,
    ]
        .filter(Boolean)
        .join("\n");

    const mailto = hasEmail
        ? `mailto:${d.email}?subject=${encodeURIComponent(replySubject)}&body=${encodeURIComponent(replyBody)}`
        : "";

    const telHref = `tel:${d.phone.replace(/\s+/g, "")}`;

    return `
  <div style="background:#f5f7fb;padding:24px 0;margin:0;">
    <!-- Preheader (ẩn) -->
    <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0;">
      Có khách hàng mới gửi thông tin liên hệ/đăng ký tư vấn.
    </div>

    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 6px 20px rgba(0,0,0,.06);">
            <!-- Header (table-based) -->
            <tr>
              <td style="padding:16px 20px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                   <td style="font-size:24px;font-weight:700;line-height:24px;vertical-align:middle;">
                      ${esc(COMPANY_NAME)}
                    </td>
                    <td align="right" style="vertical-align:middle;">
                      <a href="${WEBSITE_URL}" alt="Sundora logo">
                        ${
                            hasLogo
                                ? `
                          <img src="cid:brandlogo@sundora.vn"
                               alt="${esc(COMPANY_NAME)}"
                               height="80"
                               style="display:block;border:0;height:80px;width:auto;" />`
                                : ``
                        }
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Title -->
            <tr>
              <td style="padding:0px 24px 8px 24px;">
                <div style="font-size:20px;font-weight:800;color:#111827;">${esc(subject)}</div>
                <div style="font-size:12px;color:#6b7280;margin-top:4px;">Thời gian: ${esc(now)}</div>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:0 24px 24px 24px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate;border-spacing:0 10px;">
                  ${row("Họ tên", esc(d.fullName))}
                  ${row("Điện thoại", `<a href="${telHref}" style="color:${accent};text-decoration:none;">${esc(d.phone)}</a>`)}
                  ${hasEmail ? row("Email", `<a href="mailto:${esc(d.email!)}" style="color:${accent};text-decoration:none;">${esc(d.email!)}</a>`) : ""}
                  ${d.message ? row("Nội dung", `<div style="white-space:pre-wrap">${esc(d.message)}</div>`) : ""}
                </table>

                <!-- CTA (table-based + bulletproof buttons) -->
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:16px;">
                  <tr>
                    ${
                        hasEmail
                            ? `
                    <td align="left" style="padding:0;">
                      <!--[if mso]>
                      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="${mailto}"
                                   style="height:40px;v-text-anchor:middle;width:200px;"
                                   arcsize="12%" stroke="f" fillcolor="${accent}">
                        <w:anchorlock/>
                        <center style="color:#ffffff;font-family:Arial,sans-serif;font-size:14px;font-weight:700;">
                          Trả lời khách hàng
                        </center>
                      </v:roundrect>
                      <![endif]-->
                      <!--[if !mso]><!-- -->
                      <a href="${mailto}"
                         style="background:${accent};color:#fff;display:inline-block;padding:10px 16px;border-radius:10px;font-weight:700;text-decoration:none;">
                        Trả lời khách hàng
                      </a>
                      <!--<![endif]-->
                    </td>
                    <td width="24" style="font-size:0;line-height:0;">&nbsp;</td>
                    `
                            : ``
                    }

                    <td align="left" style="padding:0;">
                      <!--[if mso]>
                      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="${telHref}"
                                   style="height:40px;v-text-anchor:middle;width:140px;"
                                   arcsize="12%" stroke="f" fillcolor="#122644">
                        <w:anchorlock/>
                        <center style="color:#ffffff;font-family:Arial,sans-serif;font-size:14px;font-weight:700;">
                          Gọi ngay
                        </center>
                      </v:roundrect>
                      <![endif]-->
                      <!--[if !mso]><!-- -->
                      <a href="${telHref}"
                         style="background:#122644;color:#fff;display:inline-block;padding:10px 16px;border-radius:10px;font-weight:700;text-decoration:none;">
                        Gọi ngay
                      </a>
                      <!--<![endif]-->
                    </td>
                  </tr>
                </table>

                <!-- Footer -->
                <div style="margin-top:20px;font-size:12px;color:#6b7280;">
                  Email này được gửi từ biểu mẫu trên website
                  <a href="${WEBSITE_URL}" style="color:${accent};text-decoration:none;">${WEBSITE_URL}</a>.
                  Nếu bạn không mong đợi email này, có thể bỏ qua.
                </div>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </div>
  `;
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

function row(label: string, valueHtml: string) {
    return `
    <tr>
      <td style="width:160px;font-size:14px;color:#6b7280;vertical-align:top;padding:6px 0;">${esc(label)}</td>
      <td style="font-size:14px;color:#111827;vertical-align:top;padding:6px 0;">${valueHtml}</td>
    </tr>
  `;
}
