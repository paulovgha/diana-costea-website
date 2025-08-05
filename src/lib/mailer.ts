import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  await resend.emails.send({
    from: "website@yourdomain.com",
    to: process.env.CONTACT_EMAIL!,
    subject: `New contact form submission from ${name}`,
    replyTo: email,
    text: message,
  });
}
