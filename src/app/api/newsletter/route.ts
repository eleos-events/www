import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { WelcomeEmail } from "@/email-templates/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email || !name) {
      return NextResponse.json(
        { success: false, error: "Email and name are required." },
        { status: 400 }
      );
    }

    if (body.consent !== true) {
      return NextResponse.json(
        { success: false, error: "Consent is required." },
        { status: 400 }
      );
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!audienceId) {
      console.error("RESEND_AUDIENCE_ID is not configured");
      return NextResponse.json(
        { success: false, error: "Newsletter service is not configured." },
        { status: 500 }
      );
    }

    // Add contact to Resend Audience
    const { error: contactError } = await resend.contacts.create({
      email,
      firstName: name,
      audienceId,
    });

    if (contactError) {
      // Resend returns a specific message for duplicate contacts
      if (
        contactError.message?.toLowerCase().includes("already exists")
      ) {
        return NextResponse.json(
          {
            success: false,
            error: "This email is already subscribed.",
          },
          { status: 409 }
        );
      }

      console.error("Failed to create contact:", contactError);
      return NextResponse.json(
        { success: false, error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    // Send welcome email
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "noreply@eleos.events";

    const baseUrl = request.nextUrl.origin;
    const html = await render(WelcomeEmail({ name, email, baseUrl }));
    const unsubscribeUrl = `${baseUrl}/unsubscribe?email=${encodeURIComponent(email)}`;

    const { error: emailError } = await resend.emails.send({
      from: `elëos events <${fromEmail}>`,
      to: email,
      subject: "You're on the list",
      html,
      headers: {
        "List-Unsubscribe": `<${unsubscribeUrl}>`,
      },
    });

    if (emailError) {
      // Contact was still created, so we don't fail entirely
      console.error("Failed to send welcome email:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
