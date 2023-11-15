import { Html } from '@react-email/html';
import { Body } from '@react-email/body';
import { Container } from '@react-email/container';
import { Column } from '@react-email/column';
import { Head } from '@react-email/head';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Preview } from '@react-email/preview';
import { Row } from '@react-email/row';
import { Text } from '@react-email/text';
import { Heading } from '@react-email/heading';
import { Section } from '@react-email/section';
import { Hr } from '@react-email/hr';

export default function VercelInviteUserEmail(
  invitedByEmail: string = 'bukinoshita@example.com',
  username: string = 'zenorocha',
  invitedByUsername: string = 'bukinoshita',
  inviteLink: string = 'https://isomorphic-furyroad.vercel.app'
) {
  const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={{ marginTop: '32px' }}>
            <Img
              src="https://isomorphic-furyroad.vercel.app/logo.svg"
              alt="isomorphic furyroad logo"
              style={{
                margin: '0 auto',
              }}
            />
          </Section>
          <Heading style={heading}>
            Welcome to <strong>Isomorphic Furyroad</strong>
          </Heading>
          <Text style={subheading}>
            Hello <strong>{username}</strong>, (
            <Link href={`mailto:${invitedByEmail}`}>{invitedByEmail}</Link>)
          </Text>
          <Text style={subheading}>
            Your Personal account is free and yours forever for non-commercial
            and hobby sites.
          </Text>
          <Section
            style={{
              textAlign: 'center',
              margin: '32px 0',
            }}
          >
            <Link style={global.button} href={inviteLink}>
              Start Using Isomorphic
            </Link>
          </Section>
          <Text style={subheading}>
            or copy and paste this URL into your browser:
            <br />
            <Link href={inviteLink}>{inviteLink}</Link>
          </Text>
          <Hr style={{ ...global.hr, marginTop: '26px' }} />
          <Section style={{ paddingTop: '22px' }}>
            <Row style={footer.policy}>
              <Column>
                <Link href={inviteLink} style={footer.link}>
                  Web Version
                </Link>
              </Column>
              <Column>
                <Link href={inviteLink} style={footer.link}>
                  Privacy Policy
                </Link>
              </Column>
            </Row>
            <Text style={{ ...footer.text, paddingTop: 10 }}>
              Please contact us if you have any questions.
            </Text>
            <Text style={footer.text}>
              © {new Date().getFullYear()} RedQ, Inc. All Rights Reserved.
            </Text>
            <Text style={footer.text}>
              RedQ, INC. One Bowerman Drive, Beaverton, Oregon 00000, USA.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const paddingX = {
  paddingLeft: '40px',
  paddingRight: '40px',
};

const paddingY = {
  paddingTop: '22px',
  paddingBottom: '22px',
};

const paragraph = {
  margin: '0',
  lineHeight: '2',
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: 'bold' },
  heading: {
    fontSize: '32px',
    lineHeight: '1.3',
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: '-1px',
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: '#747474',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#111',
    fontSize: '14px',
    border: 0,
    borderRadius: 6,
    textDecoration: 'none',
    padding: '14px 24px',
    display: 'inline-block',
    textAlign: 'center',
    fontWeight: 500,
    color: '#fff',
  } as React.CSSProperties,
  hr: {
    borderColor: '#E5E5E5',
    margin: '0',
  },
};
const body = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};
const container = {
  borderRadius: '4px',
  border: '1px solid #eaeaea',
  padding: 20,
  width: 465,
  margin: '40px auto',
};
const heading = {
  padding: 0,
  margin: '30px 0',
  fontWeight: 400,
  textAlign: 'center',
  color: '#111',
  fontSize: '24px',
} as React.CSSProperties;
const subheading = {
  color: '#000000',
  fontSize: '14px',
  lineHeight: 1.5,
  margin: '16px 0',
};
const footer = {
  policy: {
    width: '166px',
    margin: 'auto',
  },
  text: {
    margin: '0',
    color: '#AFAFAF',
    fontSize: '13px',
    textAlign: 'center',
  } as React.CSSProperties,
  link: {
    margin: '0',
    color: '#AFAFAF',
    fontSize: '13px',
    textAlign: 'center',
    textDecoration: 'underline',
  } as React.CSSProperties,
};
