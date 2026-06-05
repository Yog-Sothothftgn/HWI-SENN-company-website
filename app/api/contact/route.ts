import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, contact, company, message } = await req.json();

  if (!name || !contact || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "HWI SENN Website <onboarding@resend.dev>",
    to: [process.env.CONTACT_TO!],
    subject: `New Inquiry from ${name}${company ? ` · ${company}` : ""}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#333">
        <h2 style="border-bottom:2px solid #e2e2e2;padding-bottom:12px">New Contact Inquiry</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;font-weight:600;width:110px">Name</td><td style="padding:8px 0">${name}</td></tr>
          ${company ? `<tr><td style="padding:8px 0;font-weight:600">Company</td><td style="padding:8px 0">${company}</td></tr>` : ""}
          <tr><td style="padding:8px 0;font-weight:600">Contact</td><td style="padding:8px 0">${contact}</td></tr>
        </table>
        <div style="margin-top:16px;background:#f7f7f7;padding:16px;border-radius:8px;white-space:pre-wrap">${message}</div>
        <p style="margin-top:24px;color:#999;font-size:12px">Sent via HWI SENN website contact form</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
