import WelcomeEmail from "@/email-templates/welcome";
import { render } from "@react-email/render";
import { Resend, Contact } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function getContactById(id: string): Promise<Contact> {
  const { data: contact, error } = await resend.contacts.get({
    id,
    audienceId: process.env.RESEND_AUDIENCE_ID!,
  });
  if (error) {
    throw error;
  }
  return contact;
}

export async function getContactByEmail(email: string): Promise<Contact> {
  const { data: contact, error } = await resend.contacts.get({
    email,
    audienceId: process.env.RESEND_AUDIENCE_ID!,
  });
  if (error) {
    throw error;
  }
  return contact;
}

export async function createContact(
  email: string,
  name: string,
  audienceId: string,
) {
  const { error, data } = await resend.contacts.create({
    email,
    firstName: name,
    audienceId,
  });
  if (error) {
    throw error;
  }
  return await getContactById(data.id);
}

export function getUnsubscribeUrl(baseUrl: string, contactId: string) {
  return `${baseUrl}/unsubscribe?contactId=${encodeURIComponent(contactId)}`;
}

const FROM_EMAIL = "elëos events <noreply@eleos.events>";

export async function sendWelcomeEmail(baseUrl: string, contact: Contact) {
  const html = await render(
    WelcomeEmail({ name: contact.first_name!, email: contact.email, baseUrl }),
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
