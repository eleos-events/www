import WelcomeEmail from "@/email-templates/welcome";
import { render } from "@react-email/render";
import { Resend, Contact } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_RETRIES = 5;
const BASE_DELAY_MS = 1000;
const BACKOFF_FACTOR = 2;

async function withRetry<T>(label: string, fn: () => Promise<T>): Promise<T> {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await fn();
    } catch (error: unknown) {
      const status = (error as { statusCode?: number })?.statusCode;
      const isRetryable = status === 429 || (status !== undefined && status >= 500);

      if (!isRetryable || attempt === MAX_RETRIES) {
        throw error;
      }

      const delay = BASE_DELAY_MS * BACKOFF_FACTOR ** attempt;
      console.warn(
        `[Resend] ${label} failed (${status}), retry ${attempt + 1}/${MAX_RETRIES} in ${delay}ms`,
      );
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw new Error("unreachable");
}

export async function getContactById(id: string): Promise<Contact | null> {
  return withRetry("getContactById", async () => {
    const { data: contact, error } = await resend.contacts.get({
      id,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });
    if (error && error.statusCode !== 404) {
      throw error;
    }
    return contact ?? null;
  });
}

export async function getContactByEmail(
  email: string,
): Promise<Contact | null> {
  return withRetry("getContactByEmail", async () => {
    const { data: contact, error } = await resend.contacts.get({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });
    if (error && error.statusCode !== 404) {
      throw error;
    }
    return contact ?? null;
  });
}

export async function createContact(
  email: string,
  name: string,
  audienceId: string,
): Promise<Contact> {
  return withRetry("createContact", async () => {
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
  });
}

export async function setContactUnsubscribed(
  contactId: string,
  unsubscribed: boolean,
): Promise<void> {
  return withRetry("setContactUnsubscribed", async () => {
    const { error } = await resend.contacts.update({
      id: contactId,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
      unsubscribed,
    });
    if (error) {
      throw error;
    }
  });
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
  return withRetry("sendWelcomeEmail", async () => {
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
  });
}
