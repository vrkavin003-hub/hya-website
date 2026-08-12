import {
  CircleGauge,
  Handshake,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { siteConfig } from "./config";

export const verifiedMetrics = [
  { value: "7+", label: "Years of experience" },
  { value: "50000 +", label: "Projects delivered" },
  { value: "5+", label: "Industry vertical served" },
  { value: "98%", label: "Client satisfaction" },
];

export const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management System",
    image: "/images/certifications/iso-9001-2015.png",
    imageAlt: "ISO 9001:2015 certified company mark",
  },
  {
    title: "ISO 14001",
    description: "Environmental Management System",
    image: "/images/certifications/iso-14001.png",
    imageAlt: "ISO 14001 environmental management mark",
  },
  {
    title: "ISO 13485",
    description: "Quality Management System",
    image: "/images/certifications/iso-13485.png",
    imageAlt: "ISO 13485 quality management system mark",
  },
  {
    title: "ISO 45001:2018",
    description: "Occupational Health and Safety",
    image: "/images/certifications/iso-45001-2018.png",
    imageAlt: "ISO 45001:2018 health and safety mark",
  },
];

export const values = [
  {
    title: "Excellence & Precision",
    description:
      "Delivering accurate, high-quality automation and fixture solutions that perform reliably.",
    icon: Target,
  },
  {
    title: "Innovation",
    description:
      "Embracing practical ideas and technologies that improve products, processes, and outcomes.",
    icon: Lightbulb,
  },
  {
    title: "Customer Focus",
    description:
      "Listening carefully and shaping solutions around the realities of each manufacturing need.",
    icon: HeartHandshake,
  },
  {
    title: "Teamwork & Safety",
    description:
      "Collaborating openly while prioritizing the safety of people and the working environment.",
    icon: Users,
  },
  {
    title: "Responsibility",
    description:
      "Taking ownership and fulfilling commitments with integrity and transparency.",
    icon: ShieldCheck,
  },
  {
    title: "Sustainability",
    description:
      "Considering community and environmental responsibility in the way we build and operate.",
    icon: Sparkles,
  },
];

export const timeline = [
  {
    year: "2018",
    title: "Laying the Foundation",
    description:
      'The company registered as "RAZK Automation" in Madurai, Tamil Nadu, beginning its precision manufacturing journey.',
  },
  {
    year: "2019",
    title: "Winning Industry Confidence",
    description:
      "Provided engineering support for automation equipment installation, qualification, and maintenance in the Major EMS industry.",
  },
  {
    year: "2020",
    title: "Broadening Our Expertise",
    description:
      "Expanded into spares and standard-parts supply, broadening the company's industrial support offering on different fronts.",
  },
  {
    year: "2021",
    title: "Expanding Our Reach",
    description:
      "Established a branch office in Sriperumbudur, Chennai, to support a growing customer base activities.",
  },
  {
    year: "2022",
    title: "Accelerating Industrial Growth",
    description:
      "Expanded engineering support activity across multiple customers and operating locations.",
  },
  {
    year: "2023",
    title: "The HYA TECH Evolution",
    description:
      'Registered our new company "HYA TECH" in Chennai, marking the next chapter of growth in the EMS Market.',
  },
  {
    year: "2024",
    title: "Precision in Production",
    description:
      "Established a manufacturing facility in Hosur supporting precision components and fixture production.",
  },
  {
    year: "2025",
    title: "Crossing Global Boundaries",
    description:
      "Established partnerships across Malaysia and Singapore for capacity sharing building a consistently evolving brand.",
  },
  {
    year: "2026",
    title: "Shaping Tomorrow's Manufacturing",
    description:
      "Expanding to new facilities, adding advanced robotics and sheet metal capabilities to cater for next-generation.",
  },
];

export type CompanyLocation = {
  id: string;
  city: string;
  region: string;
  role: string;
  description: string;
  status: string;
  country: "India" | "Singapore" | "Malaysia";
  flag: "IN" | "SG" | "MY";
  latitude: number;
  longitude: number;
  address: string;
};

export const locations: CompanyLocation[] = [
  {
    id: "hosur",
    city: "Hosur",
    region: "Tamil Nadu, India",
    role: "Manufacturing headquarters",
    description:
      "Precision-component, fixture, equipment, and engineering delivery hub.",
    status: "Active",
    country: "India",
    flag: "IN",
    latitude: 12.7409,
    longitude: 77.8253,
    address: "Plot No. 122, SIDCO, Hosur, Tamil Nadu 635109",
  },
  {
    id: "chennai",
    city: "Chennai",
    region: "Tamil Nadu, India",
    role: "Branch office",
    description:
      "Customer-support presence established in Sriperumbudur and HYA TECH's 2023 registration location.",
    status: "Active",
    country: "India",
    flag: "IN",
    latitude: 12.9698,
    longitude: 79.9483,
    address: "Sriperumbudur, Chennai, Tamil Nadu",
  },
  {
    id: "madurai",
    city: "Madurai",
    region: "Tamil Nadu, India",
    role: "Origin office",
    description:
      "The starting point of the company's engineering journey in 2018.",
    status: "Origin",
    country: "India",
    flag: "IN",
    latitude: 9.9252,
    longitude: 78.1198,
    address: "Madurai, Tamil Nadu",
  },
  {
    id: "singapore",
    city: "Singapore",
    region: "Singapore",
    role: "Technology and business network",
    description:
      "Supporting international collaboration, technology partnerships, and regional customer development.",
    status: "Partnership",
    country: "Singapore",
    flag: "SG",
    latitude: 1.3521,
    longitude: 103.8198,
    address: "Singapore",
  },
  {
    id: "malaysia",
    city: "Malaysia",
    region: "Malaysia",
    role: "Regional manufacturing network",
    description:
      "Supporting manufacturing collaboration, supply-chain development, and Southeast Asian growth opportunities.",
    status: "Partnership",
    country: "Malaysia",
    flag: "MY",
    latitude: 3.139,
    longitude: 101.6869,
    address: "Kuala Lumpur, Malaysia",
  },
];

export const missionVision = [
  {
    title: "Our mission",
    description:
      "Bring advanced technology to India, build local capabilities aligned with global standards, create meaningful employment, foster a sustainable environment, and contribute to national development.",
    icon: Target,
  },
  {
    title: "Our vision",
    description:
      "Become a global benchmark for high-precision manufacturing by continually advancing intelligent machining and serving diverse industries with lasting engineering excellence.",
    icon: CircleGauge,
  },
  {
    title: "How we work",
    description:
      "Combine practical know-how, integrity, transparency, and open collaboration to deliver successful outcomes with customers.",
    icon: Handshake,
  },
];

export const companySchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logoimg.png`,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phoneHref,
  foundingDate: "2018",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 122, SIDCO",
    addressLocality: "Hosur",
    addressRegion: "Tamil Nadu",
    postalCode: "635109",
    addressCountry: "IN",
  },
  areaServed: "India",
};
