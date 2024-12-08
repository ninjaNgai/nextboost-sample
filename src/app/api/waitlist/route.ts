// app/api/waitlist/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase/client";
import WaitlistEmail from "@/emails/WaitlistEmail";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { error: insertError } = await supabase.from("waitlist").insert([
      {
        email,
      },
    ]);

    if (insertError) {
      console.error("Supabase error:", insertError);

      if (insertError.code === "23505") {
        // Unique violation
        return NextResponse.json(
          { error: "This email is already on the waitlist" },
          { status: 400 }
        );
      }

      if (insertError.code === "42501") {
        // RLS violation
        return NextResponse.json(
          { error: "Permission denied" },
          { status: 403 }
        );
      }

      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    // Optional: Send confirmation email via Resend
    try {
      const html = await render(
        WaitlistEmail({
          userEmail: email,
        })
      );

      await resend.emails.send({
        from: "NextBoost <onboarding@resend.dev>",
        to: email,
        subject: "Welcome to the Waitlist!",
        html: html,
      });
    } catch (emailError) {
      // Log email error but don't fail the request
      console.error("Email sending failed:", emailError);
    }

    return NextResponse.json(
      { success: true, message: "Successfully joined waitlist" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
