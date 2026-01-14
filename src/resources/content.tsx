import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "M Hasnat",
  lastName: "Kamal",
  name: `M Hasnat Kamal`,
  role: "Software Engineer | Branding and Marketing Expert",
  avatar: "/images/personal.png",
  email: "muhammadhasnatkamal@gmail.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/noman-ejaz",
  //   essential: true,
  // },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhammadhasnatkamal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    essential: true,
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/share/1DBbTwfkq9/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Helping Brands and
   Professionals Grow
    Through Content,
     Design, Engagement,
      and Paid ads.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Contact: </strong>{" "}
        <Line background="brand-alpha-strong" vert height="18" />
        <Text marginRight="3" onBackground="brand-medium">
          +923170974113
        </Text>
      </Row>
    ),
    href: "https://wa.me/923170974113",
  },
  subline: (
    <>
    Your Personal or Professional Brand Growth Partner
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        
        I’m Muhammad Hasnat Kamal, a software engineer by education and a branding and marketing professional by passion who helps personal and professional brands stand out through clear positioning, strong visuals, meaningful content, and result driven marketing strategies.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "LinkedIn Growth & Personal Branding",
        timeframe: "2023 - Present",
        role: "",
        achievements: [
          <>
         Managed and scaled 70+ LinkedIn accounts for founders, creators, and professionals.
Worked on profile optimization, content planning, posting systems, and engagement to increase visibility and inbound leads.
          </>,
          <>
          Profile optimization and positioning
          </>,
          <>
          Content strategy and posting schedules
          </>,
          <>
          Engagement and audience growth
          </>,
          <>
          Improved profile views, impressions, and inbound messages
          </>,
        ],
       
      },
      {
        company: "Facebook Page Manager & Meta Ads",
        timeframe: "2021 - Present",
        role: "",
        achievements: [
          <>
          Managed multiple Facebook pages for brands and businesses.
Handled content posting, audience engagement, inbox management, and basic ad coordination to improve reach and brand presence.
          </>,
          <>
          Facebook page setup and optimization
          </>,
          <>
          Content posting and scheduling
          </>,
          <>
          Comment and inbox management
          </>,
          <>
          Support in running Meta ad campaigns
          </>,
        ],
       
      },
     // {
        //company: "eCommerce Marketing & Brand Manager",
        //timeframe: "2023 - 2023",
        //role: "",
       // achievements: [
         // <>
          // Managed multiple eCommerce brands end to end.
//Handled store management, product listings, creatives, and paid ads to support growth and conversions.
        //  </>,
         
         // <>
 //Shopify store management
 // </>,
 // <> Product and landing page optimization</>,
  // <> Meta ads for sales and traffic</>,
   // <> Brand growth and performance tracking</>,



         
      //  ],
      //  images: [],
    //  },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University Of Poonch Rawalakot AJk Pakistan",
        description: <>
Studied BS Computer Science  (2020-2024)</>,
      },
      
    ],
  },
 technical: {
  display: true,
  title: "Skills",
  skills: [
    {
      title: "LinkedIn & Social Media Growth",
      tags: [
        { name: "LinkedIn Management", icon: "flask" },
        { name: "Post Design", icon: "flask" },
        { name: "Carosuels Design", icon: "flask" },
        { name: "Cheetsheets Design", icon: "flask" },
        { name: "Strategy", icon: "Strategy" },
        { name: "Content Creation", icon: "django" },
        { name: "Engagement", icon: "fastapi" },
        { name: "Lead Generation", icon: "flask" },
        { name: "Meta Ads", icon: "flask" },
        { name: "Profile Management", icon: "flask" },
        { name: "Social Media Mangement", icon: "flask" },
      ],
    },
   // {
     // title: "Design & Campaign Management",
    //  tags: [
      //  { name: "Paid ad campaigns", icon: "react" },
      //  { name: "ECommerce Store Management", icon: "bootstrap" },
      //  { name: "Increase Sales", icon: "tailwind css" },
      //  { name: "Dropshipping Store Mangemnt", icon: "tailwind css" },
      //  { name: "Shopify Store Creation", icon: "tailwind css" },
     // ],
   // },
  ],
},

};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Pricing",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
