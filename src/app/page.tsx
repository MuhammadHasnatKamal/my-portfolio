import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, work, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import Image from "next/image"; // Next.js ka Image component import karein

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>

      {/* Pehli Image */}
      <RevealFx translateY="16" delay={0.6}>
        <Column fillWidth horizontal="center">
          <Image
            src="/images/first.png"
            alt="First Image"
            width={800}
            height={400}
            style={{ width: '100%', height: 'auto', maxWidth: '800px' }}
          />
        </Column>
      </RevealFx>

      {/* Doosri Image */}
      <RevealFx translateY="16" delay={0.8}>
        <Column fillWidth horizontal="center">
          <Image
            src="/images/second.png"
            alt="Second Image"
            width={800}
            height={400}
            style={{ width: '100%', height: 'auto', maxWidth: '800px' }}
          />
        </Column>
      </RevealFx>

      {/* View All Projects Button */}
      <RevealFx translateY="16" delay={1.0} horizontal="center">
        <Button
          id="work"
          data-border="rounded"
          href={work.path}
          variant="secondary"
          size="m"
          weight="default"
          arrowIcon
        >
          <Row gap="8" vertical="center" paddingRight="4">
            View All Projects
          </Row>
        </Button>
      </RevealFx>
      
      {/* Mailchimp component optional hai, agar chahiye to uncomment kar lena */}
      {/* <Mailchimp /> */}
    </Column>
  );
}