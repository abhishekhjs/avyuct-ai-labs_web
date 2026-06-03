"use server";

import { supabase } from "@/lib/supabase";

/* ── Types ─────────────────────────────────────────────── */
interface ActionResult {
  success: boolean;
  error?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  institution: string;
  role: string;
  phone?: string;
  country: string;
  requestType: string;
  message: string;
  consent: boolean;
}

/* ── Email Notification Helper ────────────────────────── */
async function sendNotificationEmail(subject: string, body: string) {
  // Email notifications are currently disabled as requested.
  // To re-enable, simply remove this early return.
  return;

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !anonKey) {
      console.warn("[EMAIL] Missing Supabase env vars, skipping notification.");
      return;
    }

    const res = await fetch(`${supabaseUrl}/functions/v1/send-notification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${anonKey}`,
      },
      body: JSON.stringify({ subject, body }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("[EMAIL] Notification failed:", data);
    } else {
      console.log("[EMAIL] Notification sent:", data);
    }
  } catch (err) {
    // Don't let email failures break form submission
    console.error("[EMAIL] Error sending notification:", err);
  }
}

/* ── Contact Form Submission ─────────────────────────── */
export async function submitContactForm(data: ContactFormData): Promise<ActionResult> {
  // Server-side validation
  if (!data.name || !data.email || !data.institution || !data.role || !data.country || !data.message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      institution: data.institution.trim(),
      role: data.role.trim(),
      phone: data.phone?.trim() || null,
      country: data.country,
      request_type: data.requestType,
      message: data.message.trim(),
      consent: data.consent,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false, error: "Something went wrong. Please try again." };
    }

    // Send notification email
    await sendNotificationEmail(
      `New ${data.requestType} request from ${data.name}`,
      `Name: ${data.name}\nEmail: ${data.email}\nInstitution: ${data.institution}\nRole: ${data.role}\nPhone: ${data.phone || "N/A"}\nCountry: ${data.country}\nType: ${data.requestType}\n\nMessage:\n${data.message}`
    );

    return { success: true };
  } catch (err) {
    console.error("Contact form submission error:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

/* ── Newsletter Subscription ─────────────────────────── */
export async function subscribeNewsletter(email: string): Promise<ActionResult> {
  if (!email) {
    return { success: false, error: "Please enter your email." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    const { error } = await supabase
      .from("newsletter_subscribers")
      .upsert(
        { email: email.trim().toLowerCase() },
        { onConflict: "email" }
      );

    if (error) {
      console.error("Supabase upsert error:", error);
      return { success: false, error: "Something went wrong. Please try again." };
    }

    // Send notification email
    await sendNotificationEmail(
      "New newsletter subscriber",
      `Email: ${email}`
    );

    return { success: true };
  } catch (err) {
    console.error("Newsletter subscription error:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
