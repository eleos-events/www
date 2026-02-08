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

    const existingContact = await getContactByEmail(email);

    if (!existingContact) {
      const contact = await createContact(email, name, audienceId);
      await sendWelcomeEmail(request.nextUrl.origin, contact);
    }

    if (existingContact.unsubscribed) {
      await resend.contacts.update({
        id: existingContact.id,
        audienceId: audienceId,
        unsubscribed: false,
      });
    }

    return ok();
  } catch (error) {
    return internalServerError("An unexpected error occurred: " + error);
  }
}
