import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      { success: false, error: "Missing email." },
      { status: 400 }
    );
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) {
    return NextResponse.json(
      { success: false, error: "Service not configured." },
      { status: 500 }
    );
  }

  try {
    // Find the contact by email
    const { data: contacts, error: listError } =
      await resend.contacts.list({ audienceId });

    if (listError) {
      console.error("Failed to list contacts:", listError);
      return NextResponse.json(
        { success: false, error: "Failed to process unsubscribe." },
        { status: 500 }
      );
    }

    const contact = contacts?.data?.find(
      (c) => c.email.toLowerCase() === email.toLowerCase()
    );

    if (!contact) {
      // Already unsubscribed or never subscribed — still show success
      return NextResponse.json({ success: true });
    }

    const { error: removeError } = await resend.contacts.remove({
      id: contact.id,
      audienceId,
    });

    if (removeError) {
      console.error("Failed to remove contact:", removeError);
      return NextResponse.json(
        { success: false, error: "Failed to process unsubscribe." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unsubscribe error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
