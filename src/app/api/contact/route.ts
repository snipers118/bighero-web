import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeHeader(value: unknown): string {
  return String(value ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, 200);
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, budget, message, turnstileToken } = await request.json();

    // Validate Turnstile
    if (!turnstileToken) {
      return NextResponse.json({ error: "Please complete the CAPTCHA verification" }, { status: 400 });
    }

    const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const secretKey = process.env.TURNSTILE_SECRET_KEY || "";

    const turnstileRes = await fetch(verifyEndpoint, {
      method: 'POST',
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(turnstileToken)}`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    });

    const turnstileData = await turnstileRes.json();
    
    if (!turnstileData.success) {
      return NextResponse.json({ error: "CAPTCHA verification failed. Please try again." }, { status: 400 });
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = process.env.SMTP_EMAIL || "";
    const pass = process.env.SMTP_PASSWORD || "";

    if (!user || !pass) {
      console.error("Missing SMTP credentials");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: user,
        pass: pass,
      },
    });

    // Email content
    const safeName = sanitizeHeader(name);
    const safeEmail = sanitizeHeader(email);
    const mailOptions = {
      from: user,
      to: "bighero.thailand@gmail.com", // Send to your company email
      replyTo: safeEmail,
      subject: `New Contact from ${safeName} - BigHero Studio`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Budget: ${budget || "Not provided"}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget || "Not provided")}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
