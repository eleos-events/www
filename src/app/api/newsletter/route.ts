import { NextRequest } from "next/server";
import {
  badRequest,
  internalServerError,
  notModified,
  ok,
} from "@/server/results";
import {
  createContact,
  getContactByEmail,
  resend,
  sendWelcomeEmail,
} from "@/server/mailing-list";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email || !name) {
      return badRequest("Email and name are required.");
    }

    if (body.consent !== true) {
      return badRequest("Consent is required.");
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!audienceId) {
      return internalServerError("Newsletter service is unavailable.");
    }

    console.log("Creating contact for email:", email);
    let contact = await getContactByEmail(email);

    if (!contact) {
      console.log("Contact not found, creating contact");
      contact = await createContact(email, name, audienceId);

      console.log("Sending welcome email to contact:", contact.email);
      await sendWelcomeEmail(request.nextUrl.origin, contact);
    }

    if (contact.unsubscribed) {
      console.log("Contact is unsubscribed, updating contact");
      await resend.contacts.update({
        id: contact.id,
        audienceId: audienceId,
        unsubscribed: false,
      });
    }

    return ok();
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return internalServerError("An unexpected error occurred: " + error);
  }
}
