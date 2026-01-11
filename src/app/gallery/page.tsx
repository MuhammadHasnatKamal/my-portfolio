import { Flex, Meta, Schema } from "@once-ui-system/core";
import ServicesView from "@/components/gallery/GalleryView";
import { baseURL, gallery, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Services & Pricing",
    description: "Professional LinkedIn optimization and e-commerce branding services with competitive pricing. Get started with our tailored packages.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Services & Pricing")}`,
    path: gallery.path,
  });
}

export default function Services() {
  return (
    <Flex 
      horizontal="center"
      style={{ 
        width: '100%',
        justifyContent: 'center',
        padding: '0 1rem'
      }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Services & Pricing"
        description="Professional LinkedIn optimization and e-commerce branding services with competitive pricing"
        path={gallery.path}
        image={`/api/og/generate?title=${encodeURIComponent("Services & Pricing")}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <ServicesView />
    </Flex>
  );
}