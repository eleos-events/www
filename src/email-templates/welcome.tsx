import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Button,
} from "@react-email/components";

interface WelcomeEmailProps {
  name: string;
  email: string;
  baseUrl: string;
}

export function WelcomeEmail({ name, email, baseUrl }: WelcomeEmailProps) {
  const unsubscribeUrl = `${baseUrl}/unsubscribe?email=${encodeURIComponent(email)}`;

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="dark" />
        <meta name="supported-color-schemes" content="dark" />
      </Head>
      <Preview>Welcome to el&#xEB;os events — you&apos;re on the list.</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={logoText}>ele&#xEB;s</Text>
            <Text style={logoSubText}>events</Text>
          </Section>

          <Hr style={divider} />

          {/* Hero */}
          <Section style={heroSection}>
            <Heading as="h1" style={heroHeading}>
              You&apos;re in, {name}.
            </Heading>
            <Text style={heroSubtext}>
              Welcome to the inner circle. You&apos;ll be the first to hear
              about upcoming events, presale access, and exclusive
              announcements.
            </Text>
          </Section>

          {/* What to expect */}
          <Section style={contentSection}>
            <Heading as="h2" style={sectionHeading}>
              What to expect
            </Heading>

            <Section style={featureRow}>
              <Text style={featureIcon}>&#127911;</Text>
              <Text style={featureTitle}>Event announcements</Text>
              <Text style={featureDesc}>
                Be the first to know when we drop a new party.
              </Text>
            </Section>

            <Section style={featureRow}>
              <Text style={featureIcon}>&#127915;</Text>
              <Text style={featureTitle}>Presale access</Text>
              <Text style={featureDesc}>
                Get tickets before they go public.
              </Text>
            </Section>

            <Section style={featureRow}>
              <Text style={featureIcon}>&#127775;</Text>
              <Text style={featureTitle}>Exclusive content</Text>
              <Text style={featureDesc}>
                Behind-the-scenes looks and artist spotlights.
              </Text>
            </Section>
          </Section>

          {/* CTA */}
          <Section style={ctaSection}>
            <Button style={ctaButton} href="https://eleos.events">
              Explore upcoming events
            </Button>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer} role="contentinfo">
            <Text style={footerBrand}>ele&#xEB;s events</Text>
            <Text style={footerText}>
              Bespoke live music events in Boston.
            </Text>
            <Text style={footerLinks}>
              <Link href="https://eleos.events" style={footerLink}>
                Website
              </Link>
              &nbsp;&nbsp;&bull;&nbsp;&nbsp;
              <Link
                href="https://instagram.com/eleos.events"
                style={footerLink}
              >
                Instagram
              </Link>
            </Text>
            <Text style={footerMuted}>
              You received this because you signed up at eleos.events.
              <br />
              <Link href={unsubscribeUrl} style={unsubLink}>
                Unsubscribe
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default WelcomeEmail;

/* ─── Styles ─── */

const body: React.CSSProperties = {
  backgroundColor: "#000000",
  margin: "0",
  padding: "0",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  color: "#ffffff",
};

const container: React.CSSProperties = {
  maxWidth: "560px",
  margin: "0 auto",
  padding: "40px 20px",
};

const header: React.CSSProperties = {
  textAlign: "center",
  paddingBottom: "24px",
};

const logoText: React.CSSProperties = {
  fontSize: "32px",
  fontWeight: 900,
  color: "#ffffff",
  letterSpacing: "4px",
  textTransform: "uppercase",
  margin: "0",
  lineHeight: "1",
};

const logoSubText: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 400,
  color: "#a0a0a0",
  letterSpacing: "6px",
  textTransform: "uppercase",
  margin: "4px 0 0 0",
  lineHeight: "1",
};

const divider: React.CSSProperties = {
  borderColor: "#333333",
  borderWidth: "1px",
  margin: "0",
};

const heroSection: React.CSSProperties = {
  textAlign: "center",
  padding: "48px 0 32px",
};

const heroHeading: React.CSSProperties = {
  fontSize: "28px",
  fontWeight: 800,
  color: "#ffffff",
  margin: "0 0 16px 0",
  lineHeight: "1.2",
};

const heroSubtext: React.CSSProperties = {
  fontSize: "16px",
  color: "#a0a0a0",
  lineHeight: "1.6",
  margin: "0",
};

const contentSection: React.CSSProperties = {
  padding: "16px 0 32px",
};

const sectionHeading: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 700,
  color: "#00d4ff",
  textTransform: "uppercase",
  letterSpacing: "3px",
  margin: "0 0 24px 0",
  textAlign: "center",
};

const featureRow: React.CSSProperties = {
  backgroundColor: "#0a0a0a",
  border: "1px solid #1a1a1a",
  borderRadius: "12px",
  padding: "20px 24px",
  marginBottom: "12px",
  textAlign: "center",
};

const featureIcon: React.CSSProperties = {
  fontSize: "24px",
  margin: "0 0 8px 0",
  lineHeight: "1",
};

const featureTitle: React.CSSProperties = {
  fontSize: "15px",
  fontWeight: 700,
  color: "#ffffff",
  margin: "0 0 4px 0",
  lineHeight: "1.3",
};

const featureDesc: React.CSSProperties = {
  fontSize: "14px",
  color: "#a0a0a0",
  margin: "0",
  lineHeight: "1.4",
};

const ctaSection: React.CSSProperties = {
  textAlign: "center",
  padding: "8px 0 40px",
};

const ctaButton: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#00d4ff",
  color: "#000000",
  fontSize: "14px",
  fontWeight: 700,
  textDecoration: "none",
  padding: "14px 32px",
  borderRadius: "999px",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const footer: React.CSSProperties = {
  textAlign: "center",
  padding: "32px 0 0",
};

const footerBrand: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 700,
  color: "#ffffff",
  letterSpacing: "2px",
  textTransform: "uppercase",
  margin: "0 0 4px 0",
};

const footerText: React.CSSProperties = {
  fontSize: "13px",
  color: "#666666",
  margin: "0 0 16px 0",
};

const footerLinks: React.CSSProperties = {
  fontSize: "13px",
  margin: "0 0 24px 0",
};

const footerLink: React.CSSProperties = {
  color: "#00d4ff",
  textDecoration: "none",
};

const footerMuted: React.CSSProperties = {
  fontSize: "12px",
  color: "#444444",
  lineHeight: "1.6",
  margin: "0",
};

const unsubLink: React.CSSProperties = {
  color: "#444444",
  textDecoration: "underline",
};
