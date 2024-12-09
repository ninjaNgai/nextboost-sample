// emails/WaitlistEmail.tsx
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Section,
  Heading,
} from "@react-email/components";

interface WaitlistEmailProps {
  userEmail: string;
}

export default function WaitlistEmail({ userEmail }: WaitlistEmailProps) {
  return (
    <Html>
      <Preview>Welcome to our community!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Welcome to the Waitlist!</Heading>
          <Section style={section}>
            <Text style={text}>
              Thank you for joining our community! We&apos;re excited to have
              you on board.
            </Text>
            <Text style={text}>
              We&apos;ll notify you at {userEmail} as soon as we launch.
            </Text>
            <Text style={text}>
              In the meantime, follow us on{" "}
              <Link
                href={"https://www.linkedin.com/in/iamcourtneyngai/"}
                style={link}
              >
                LinkedIn{" "}
              </Link>
              for updates.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const section = {
  padding: "24px",
  backgroundColor: "#f6f9fc",
  borderRadius: "12px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.25",
  marginBottom: "24px",
};

const text = {
  color: "#555",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "12px 0",
};

const link = {
  color: "#2563eb",
  textDecoration: "underline",
};
