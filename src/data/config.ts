export const siteConfig = {
  name: "HYA Tech",
  tagline: "Precision Beyond Belief",
  description:
    "HYA Tech delivers precision manufacturing, custom fixtures, industrial automation and intelligent equipment solutions from design through production and support.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyatech.co.in",
  email: "info@hyatech.co.in",
  phoneDisplay: "+91 99444 19872",
  phoneHref: "+919944419872",
  hours: "Mon–Sat, 9:00 AM–6:00 PM IST",
  address: "Plot No. 122, SIDCO, Hosur, Tamil Nadu 635109",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Plot+122+SIDCO+Hosur+Tamil+Nadu+635109",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/capabilities" },
  { label: "Facilities", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerCapabilities = [
  { label: "Precision manufacturing", href: "/capabilities#precision-manufacturing" },
  { label: "Custom fixtures", href: "/capabilities#fixtures-tooling" },
  { label: "Industrial automation", href: "/capabilities#automation-turnkey" },
  { label: "Intelligent equipment", href: "/capabilities#intelligent-equipment" },
  { label: "Sheet Metal Bending", href: "/capabilities#sheet-metal-bending" },
  { label: "Laser Cutting", href: "/capabilities#laser-cutting" },
  { label: "Laser Welding", href: "/capabilities#laser-welding" },
];
