"use client";

import { Card, Column, Row, Heading, Text, Button, Badge } from "@once-ui-system/core";

const services = [
  {
    id: 1,
    title: "LinkedIn Profile Optimization",
    price: "$99",
    type: "One-time",
    features: [
      "LinkedIn Banner",
      "Three feature images",
      "SEO Based Headline, About, Experience, and Skills sections",
      "Custom URL"
    ],
    popular: false,
    color: "brand"
  },
  {
    id: 2,
    title: "LinkedIn Engagement Plan",
    price: "$170",
    type: "Monthly",
    features: [
      "2-3 hours daily engagement",
      "Work 6 days weekly",
      "70-80 meaningful comments daily",
      "Builds stronger LinkedIn connections"
    ],
    popular: false,
    color: "neutral"
  },
  {
    id: 3,
    title: "LinkedIn Growth & Branding Basic",
    price: "$250",
    type: "Monthly",
    features: [
      "Profile optimization and branding",
      "4 Carousels",
      "4 Cheat Sheets",
      "4 Images",
      "20-40 Meaningful Comments daily (6 days a week)"
    ],
    popular: true,
    color: "brand"
  },
  {
    id: 4,
    title: "LinkedIn Growth & Branding Standard",
    price: "$400",
    type: "Monthly",
    features: [
      "Profile optimization and branding",
      "6 Carousels",
      "6 Cheat Sheets",
      "6 Images",
      "40-50 Meaningful Comments daily (6 days a week)",
      "Growth tracking and engagement",
      "Strong Connection Building"
    ],
    popular: false,
    color: "neutral"
  },
  {
    id: 5,
    title: "LinkedIn Growth & Branding Diamond",
    price: "$699",
    type: "Monthly",
    features: [
      "Profile optimization and branding",
      "Customized content strategy development",
      "27 Posts a Month (9 Carousels, 9 Cheat Sheets, 9 Images)",
      "70-80 meaningful comments daily (6 days a week)",
      "Growth tracking and engagement",
      "Strong Connection Building",
      "Client Hunting"
    ],
    popular: false,
    color: "neutral"
  },
  {
    id: 6,
    title: "E-commerce Brand Management",
    subtitle: "Growth & Scaling Accelerator",
    price: "$399.99",
    type: "Monthly",
    features: [
      "30 Posts",
      "Ads Management",
      "Store Management",
      "Page Management",
      "Strategy"
    ],
    popular: false,
    color: "brand"
  }
];

export default function ServicesView() {
  return (
    <Column gap="xl" paddingY="l">
      <Column gap="m" paddingBottom="l" horizontal="center">
        <Heading variant="display-strong-l" align="center">
          Services & Pricing
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          Choose the perfect plan for your professional growth
        </Text>
      </Column>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '24px',
        width: '100%'
      }}>
        {services.map((service) => (
          <Card
            key={service.id}
            background={service.popular ? "surface" : "page"} {/* Changed to valid values */}
            padding="l"
            radius="l"
            border={service.popular ? "brand" : "neutral-subtle"}
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              backgroundColor: service.popular ? 'var(--color-brand-weak, #e0f2fe)' : 'var(--color-neutral-subtle, #f8fafc)' /* Fallback */
            }}
          >
            {service.popular && (
              <Badge
                background="brand"
                onBackground="neutral-inverted"
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '24px'
                }}
              >
                Most Popular
              </Badge>
            )}
            
            <Column gap="m" flex={1}>
              <Column gap="xs">
                <Heading variant="heading-strong-l">
                  {service.title}
                </Heading>
                {service.subtitle && (
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {service.subtitle}
                  </Text>
                )}
              </Column>
              
              <Row gap="xs" vertical="baseline">
                <Heading variant="display-strong-xl">
                  {service.price}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  / {service.type}
                </Text>
              </Row>
              
              <Column gap="s" paddingTop="m" paddingBottom="l">
                <Text variant="body-default-m" weight="strong">
                  Includes:
                </Text>
                <Column gap="xs">
                  {service.features.map((feature, index) => (
                    <Row key={index} gap="s">
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-brand-strong)',
                        marginTop: '8px'
                      }} />
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {feature}
                      </Text>
                    </Row>
                  ))}
                </Column>
              </Column>
              
              <Button
                variant={service.popular ? "primary" : "secondary"}
                size="m"
                fillWidth
                style={{ marginTop: 'auto' }}
                href="/contact"
              >
                Get Started
              </Button>
            </Column>
          </Card>
        ))}
      </div>

      {/* Footer note */}
      <Column horizontal="center" paddingTop="xl" paddingBottom="m">
        <Text variant="body-default-m" onBackground="neutral-weak" align="center">
          Custom packages available upon request. Contact for enterprise solutions.
        </Text>
        <Button
          variant="tertiary"
          size="m"
          href="/contact"
          style={{ marginTop: '16px' }}
        >
          Contact for Custom Quote
        </Button>
      </Column>
    </Column>
  );
}