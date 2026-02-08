import WelcomeEmail from "@/email-templates/welcome";
import { render } from "@react-email/render";
import { Resend, Contact } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function getContactById(id: string): Promise<Contact | null> {
  const { data: contact, error } = await resend.contacts.get({
    id,
    audienceId: process.env.RESEND_AUDIENCE_ID!,
  });
  if (error && error.statusCode !== 404) {
    throw error;
  }
  return contact ?? null;
}

export async function getContactByEmail(
  email: string,
): Promise<Contact | null> {
  const { data: contact, error } = await resend.contacts.get({
    email,
    audienceId: process.env.RESEND_AUDIENCE_ID!,
  });
  if (error && error.statusCode !== 404) {
    throw error;
  }
  return contact ?? null;
}

export async function createContact(
  email: string,
  name: string,
  audienceId: string,
): Promise<Contact> {
  const { error, data } = await resend.contacts.create({
    email,
    firstName: name,
    audienceId,
  });
  if (error) {
    throw error;
  }
  return {
    id: data.id,
    email,
    first_name: name,
    last_name: null,
    created_at: new Date().toISOString(),
    unsubscribed: false,
  } as Contact;
}

export function getUnsubscribeUrl(baseUrl: string, contactId: string) {
  return `${baseUrl}/unsubscribe?id=${encodeURIComponent(contactId)}`;
}

const FROM_EMAIL = "elëos events <noreply@eleos.events>";

export async function sendWelcomeEmail(baseUrl: string, contact: Contact) {
  const html = await render(
    WelcomeEmail({ name: contact.first_name!, contactId: contact.id, baseUrl }),
  );
  const unsubscribeUrl = getUnsubscribeUrl(baseUrl, contact.id);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: contact.email,
    subject: "You're on the list",
    html,
    headers: { "List-Unsubscribe": `<${unsubscribeUrl}>` },
  });
  if (error) {
    throw error;
  }
}
