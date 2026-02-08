import { getContactByEmail, getContactById } from "@/server/mailing-list";
import { badRequest, internalServerError, ok } from "@/server/results";
import { NextRequest } from "next/server";
import { Contact, Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const email = request.nextUrl.searchParams.get("email");

    if (!id && !email) {
      return badRequest("Missing id or email.");
    }

    let contact: Contact | null = null;
    if (id) {
      contact = await getContactById(id);
    } else if (email) {
      contact = await getContactByEmail(email);
    }

    if (!contact) {
      // We dont want to show that the user was on the list, but not found
      console.warn("Unsubscribe Failure: Contact not found by id:", id);
      return ok();
    }

    const { error: updateError } = await resend.contacts.update({
      id: contact.id,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
      unsubscribed: true,
    });

    if (updateError) {
      return internalServerError(
        "Failed to unsubscribe: " + updateError.message,
      );
    }

    return ok();
  } catch (error) {
    return internalServerError("An unexpected error occurred: " + error);
  }
}
