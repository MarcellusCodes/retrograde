import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Link } from "@react-email/link";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";

export function CompletedOrderTemplate({ input }: { input: string }) {
  return (
    <Html>
      <Head />
      <Preview>You successfully ordered your items at Retrograde!</Preview>
      <Section style={main}>
        <Container style={container}>
          <Section style={box}>
            <Text style={header}>Retrograde {input}</Text>
            <Hr style={hr} />
            <Text style={paragraph}>
              Thanks for ordering! Your products are being processed and soon on
              the way.
            </Text>
            <Text style={paragraph}>
              You can view your payments and a variety of other information
              about your account right from your dashboard.
            </Text>
            <Button
              pX={10}
              pY={10}
              style={button}
              href="https://dashboard.stripe.com/login"
            >
              View your Renegade Dashboard
            </Button>
            <Hr style={hr} />
            <Text style={paragraph}>
              We`&apos;`ll be here to help you with any step along the way. You
              can find answers to most questions and get in touch with us on our{" "}
              <Link style={anchor} href="https://renegade.vercel.app">
                support site
              </Link>
              .
            </Text>
            <Text style={paragraph}>— The Renegade team</Text>
            <Hr style={hr} />
            <Text style={footer}>
              Renegade, 354 Oyster Point Blvd, South San Francisco, CA 94080
            </Text>
          </Section>
        </Container>
      </Section>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const header = {
  color: "#818cf8",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "24px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

const footer = {
  color: "#8898aa",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "12px",
  lineHeight: "16px",
};
