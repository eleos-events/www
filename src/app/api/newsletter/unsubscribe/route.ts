import { getContactByEmail, getContactById, setContactUnsubscribed } from "@/server/mailing-list";
import { badRequest, internalServerError, ok } from "@/server/results";
import { NextRequest } from "next/server";
import { Contact } from "resend";

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const email = request.nextUrl.searchParams.get("email");

    console.log("Unsubscribe request:", { id, email });

    if (!id && !email) {
      console.warn("Unsubscribe: missing id and email params");
      return badRequest("Missing id or email.");
    }

    let contact: Contact | null = null;
    if (id) {
      console.log("Unsubscribe: looking up contact by id:", id);
      contact = await getContactById(id);
    } else if (email) {
      console.log("Unsubscribe: looking up contact by email:", email);
      contact = await getContactByEmail(email);
    }

    if (!contact) {
      console.warn("Unsubscribe: contact not found", { id, email });
      return ok();
    }

    console.log("Unsubscribe: updating contact:", contact.id, contact.email);
    await setContactUnsubscribed(contact.id, true);

    console.log("Unsubscribe: success for contact:", contact.id);
    return ok();
  } catch (error) {
    console.error("Unsubscribe: unexpected error:", error);
    return internalServerError("An unexpected error occurred: " + error);
  }
}
