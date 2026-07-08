import {
  Blocks,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Car,
  CircleGauge,
  Cog,
  Component,
  Cpu,
  DraftingCompass,
  Factory,
  Gauge,
  Hammer,
  Handshake,
  HeartHandshake,
  Lightbulb,
  PackageCheck,
  PanelTop,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
  Workflow,
  Zap,
} from "lucide-react";

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

export const verifiedMetrics = [
  { value: "7+", label: "Years of experience" },
  { value: "500+", label: "Projects completed" },
  { value: "50+", label: "Industry partners" },
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
    title: "Excellence & precision",
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
    title: "Customer focus",
    description:
      "Listening carefully and shaping solutions around the realities of each manufacturing need.",
    icon: HeartHandshake,
  },
  {
    title: "Teamwork & safety",
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

export const capabilityGroups = [
  {
    slug: "design-engineering",
    title: "Design & engineering",
    short:
      "From a clear manufacturing need to validated engineering intent.",
    description:
      "We provide practical design and engineering support for manufacturing needs. Our solutions focus on accuracy, usability, and long-term performance.",
    icon: DraftingCompass,
    items: [
      "Concept development",
      "3D modeling and simulation",
      "Design reviews",
      "Prototyping and validation",
    ],
    image: "/images/offering1.jpg",
    imageAlt: "Design and engineering capability",
  },
  {
    slug: "precision-manufacturing",
    title: "Precision manufacturing",
    short:
      "Machining capabilities for complex parts, tooling, and production requirements.",
    description:
      "We manufacture high-accuracy components for industrial applications. Every part is made with focus on quality, consistency, and reliability.",
    icon: Cog,
    items: [
      "CNC turning and milling",
      "Multi-axis machining",
      "Wire and sinker EDM",
      "Surface grinding and CMM inspection",
    ],
    image: "/images/cnc.jpg",
    imageAlt: "Precision manufacturing capability",
  },
  {
    slug: "fixtures-tooling",
    title: "Fixtures & tooling",
    short:
      "Custom-engineered fixtures that support repeatability, quality, and flow.",
    description:
      "We design and build custom fixtures and tools for production support. These solutions help improve assembly speed, accuracy, and repeatability.",
    icon: Wrench,
    items: [
      "Assembly fixtures",
      "Welding fixtures",
      "Inspection gauges",
      "Custom jigs and tooling",
    ],
    image: "/images/fixtures.jpg",
    imageAlt: "Fixtures and tooling capability",
  },
  {
    slug: "automation-turnkey",
    title: "Automation & turnkey systems",
    short:
      "Integrated assembly and process equipment from design to commissioning.",
    description:
      "We deliver complete automation systems from planning to installation. Our turnkey solutions help reduce manual work and improve productivity..",
    icon: Blocks,
    items: [
      "Automated assembly lines",
      "Riveting and press fitting",
      "Tightening and dispensing",
      "Special-purpose machines",
    ],
    image: "/images/automation.jpg",
    imageAlt: "Automation and turnkey systems capability",
  },
  {
    slug: "intelligent-equipment",
    title: "Intelligent equipment",
    short:
      "Connected manufacturing equipment designed for better visibility and control.",
    description:
      "We develop smart equipment for modern industrial operations. These systems support better control, efficiency, and reliable performance.",
    icon: BrainCircuit,
    items: [
      "PLC-controlled equipment",
      "Sensors and traceability",
      "Test and inspection systems",
      "Real-time monitoring",
    ],
    image: "/images/intelligentmanufacturing.jpg",
    imageAlt: "Intelligent equipment capability",
  },
  {
    slug: "sheet-metal-bending",
    title: "Sheet Metal Bending",
    short:
      "Accurate forming for enclosures, brackets, and custom industrial parts.",
    description:
      "We provide accurate sheet metal bending for different industrial requirements. The process ensures clean shapes, strong parts, and precise dimensions.",
    icon: PanelTop,
    items: [
      "Precision press-brake bending",
      "Industrial enclosures",
      "Brackets and formed parts",
      "Custom fabrication support",
    ],
    image: "/images/sheet-metal-bending-press-brake.png",
    imageAlt: "Sheet metal bending capability",
  },
  {
    slug: "laser-cutting",
    title: "Laser Cutting",
    short:
      "Clean, repeatable cutting for sheet metal profiles and fabricated parts.",
    description:
      "We offer precise laser cutting for sheet metal and custom components. It delivers clean edges, accurate profiles, and smooth finishing.",
    icon: ScanLine,
    items: [
      "Precision profile cutting",
      "Sheet metal components",
      "Clean-edge processing",
      "Custom production batches",
    ],
    image: "/images/laser-cutting-machine.png",
    imageAlt: "Laser cutting capability",
  },
  {
    slug: "laser-welding",
    title: "Laser Welding",
    short:
      "Controlled joining for precision components and production assemblies.",
    description:
      "We provide laser welding for strong, neat, and high-quality joints. It is suitable for precision work where clean finishing is important.",
    icon: Zap,
    items: [
      "Precision laser welding",
      "Low heat distortion",
      "Complex component joints",
      "Repeatable production quality",
    ],
    image: "/images/laser-welding.webp",
    imageAlt: "Laser welding capability",
  },
  {
    slug: "spares-support",
    title: "Industrial spares & support",
    short:
      "Practical supply and engineering support that helps keep production moving.",
    description:
      "We supply industrial spare parts and technical support for machines and systems. Our support helps reduce downtime and keep operations running smoothly.",
    icon: PackageCheck,
    items: [
      "Replacement and wear parts",
      "Industrial consumables",
      "Installation and qualification",
      "Maintenance support",
    ],
    image: "/images/offering5.jpg",
    imageAlt: "Industrial spares and support capability",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand the application, constraints, quality needs, and intended production outcome.",
  },
  {
    number: "02",
    title: "Design & simulation",
    description:
      "Translate requirements into practical concepts, models, reviews, and an engineering plan.",
  },
  {
    number: "03",
    title: "Prototype & validate",
    description:
      "Build, test, measure, and refine the solution before committing to production.",
  },
  {
    number: "04",
    title: "Production",
    description:
      "Manufacture, assemble, inspect, document, and prepare the solution for delivery.",
  },
  {
    number: "05",
    title: "Install & support",
    description:
      "Commission the solution, support qualification, and remain available through its lifecycle.",
  },
];

export const projects = [
  {
    slug: "cnc-machining-center",
    category: "Machining",
    title: "CNC machining center",
    description:
      "Multi-axis machining capability supporting precision manufacturing requirements.",
    image: "/images/cnc.jpg",
  },
  {
    slug: "high-precision-components",
    category: "Components",
    title: "High-precision components",
    description:
      "Precision component manufacturing for demanding industrial applications.",
    image: "/images/parts.jpg",
  },
  {
    slug: "custom-engineered-fixtures",
    category: "Fixtures",
    title: "Custom engineered fixtures",
    description:
      "Production fixtures designed to improve repeatability, quality, and assembly efficiency.",
    image: "/images/fixtures.jpg",
  },
  {
    slug: "assembly-jigs",
    category: "Fixtures",
    title: "Assembly jigs",
    description:
      "Practical jigs that streamline assembly work and support consistent positioning.",
    image: "/images/assembly.jpg",
  },
  {
    slug: "medical-components",
    category: "Components",
    title: "Medical components",
    description:
      "Precision-manufactured components for controlled medical manufacturing applications.",
    image: "/images/medical.jpg",
  },
  {
    slug: "surface-grinding",
    category: "Machining",
    title: "Surface grinding",
    description:
      "Controlled surface finishing for hardened materials and precision tooling requirements.",
    image: "/images/grinding.jpg",
  },
  {
    slug: "electrical-discharge-machining",
    category: "Machining",
    title: "Electrical discharge machining",
    description:
      "EDM capability for intricate profiles, hardened materials, and complex geometries.",
    image: "/images/edm.jpg",
  },
  {
    slug: "assembly-automation",
    category: "Automation",
    title: "Assembly automation",
    description:
      "PLC-controlled manufacturing equipment supporting repeatable assembly processes.",
    image: "/images/automation.jpg",
  },
  {
    slug: "automated-riveting",
    category: "Automation",
    title: "Automated riveting system",
    description:
      "Automated riveting solutions for consistent permanent-joint production workflows.",
    image: "/images/riveting.jpg",
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
      "Provided engineering support for automation equipment installation, qualification, and maintenance in the EMS industry.",
  },
  {
    year: "2020",
    title: "Broadening Our Expertise",
    description:
      "Expanded into spares and standard-parts supply, broadening the company’s industrial support offering.",
  },
  {
    year: "2021",
    title: "Expanding Our Reach",
    description:
      "Established a branch office in Sriperumbudur, Chennai, to support a growing customer base.",
  },
  {
    year: "2022",
    title: "Accelerating Growth",
    description:
      "Expanded engineering support activity across multiple customers and operating locations.",
  },
  {
    year: "2023",
    title: "The HYA Tech Evolution",
    description:
      'Registered the new company "HYA Tech" in Chennai, marking the next chapter of the business.',
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
      "Established partnerships for know-how transfer and capacity sharing with China and Singapore.",
  },
  {
    year: "2026",
    title: "Shaping Tomorrow's Manufacturing",
    description:
      "Expanding to new facilities, adding advanced robotics and manufacturing for next-generation precision solutions.",
  },
];

export const locations = [
  {
    city: "Hosur",
    region: "Tamil Nadu, India",
    role: "Manufacturing headquarters",
    description:
      "Precision-component, fixture, equipment, and engineering delivery hub.",
    status: "Active",
  },
  {
    city: "Chennai",
    region: "Tamil Nadu, India",
    role: "Branch office",
    description:
      "Customer-support presence established in Sriperumbudur and HYA Tech’s 2023 registration location.",
    status: "Active",
  },
  {
    city: "Madurai",
    region: "Tamil Nadu, India",
    role: "Origin office",
    description:
      "The starting point of the company’s engineering journey in 2018.",
    status: "Origin",
  },
  {
    city: "Singapore",
    region: "Singapore",
    role: "Technology and business network",
    description:
      "Supporting international collaboration, technology partnerships, and regional customer development.",
    status: "Partnership",
  },
  {
    city: "Malaysia",
    region: "Malaysia",
    role: "Regional manufacturing network",
    description:
      "Supporting manufacturing collaboration, supply-chain development, and Southeast Asian growth opportunities.",
    status: "Partnership",
  },
];

export const industries = [
  {
    title: "Electronics & EMS",
    description:
      "PCB assembly fixtures, manufacturing support, assembly systems, and test solutions.",
    icon: Cpu,
  },
  {
    title: "Automotive",
    description:
      "Precision components, fixtures, automated assembly, and process equipment.",
    icon: Car,
  },
  {
    title: "Tooling & Fixtures",
    description:
      "Custom jigs, fixtures, tooling support, and manufacturing aids designed to improve accuracy, speed, and production quality.",
    icon: Wrench,
  },
  {
    title: "Assembly Support",
    description:
      "Assembly systems, production support equipment, workflow improvement solutions, and process-focused engineering support.",
    icon: Workflow,
  },
];

export const assemblyTechnologies = [
  {
    title: "Riveting",
    description:
      "Orbital, radial, and impact riveting for permanent joints with controlled force.",
    icon: Hammer,
  },
  {
    title: "Press fitting",
    description:
      "Force- and position-controlled press fitting with process monitoring.",
    icon: Gauge,
  },
  {
    title: "Tightening",
    description:
      "Electric and pneumatic tightening with torque-angle control and traceability.",
    icon: Wrench,
  },
  {
    title: "Gluing & UV",
    description:
      "Controlled adhesive dispensing and UV LED curing for repeatable applications.",
    icon: Component,
  },
  {
    title: "Welding",
    description:
      "Laser, ultrasonic, and resistance-welding process integration.",
    icon: Zap,
  },
  {
    title: "Test & inspection",
    description:
      "Vision systems, end-of-line testing, and process-verification equipment.",
    icon: ScanLine,
  },
];

export const careerRoles = [
  {
    title: "Design Engineer",
    description: "Mechanical design, detailing, review, and engineering support.",
  },
  {
    title: "Manufacturing Engineer",
    description: "Process planning, production support, and continuous improvement.",
  },
  {
    title: "CNC Operator",
    description: "Precision machine operation, setup support, and process discipline.",
  },
  {
    title: "Quality Inspector",
    description: "Measurement, inspection, documentation, and quality assurance.",
  },
  {
    title: "Assembly Technician",
    description: "Mechanical assembly, equipment build, integration, and testing.",
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

export const footerCapabilities = [
  { label: "Precision manufacturing", href: "/capabilities#precision-manufacturing" },
  { label: "Custom fixtures", href: "/capabilities#fixtures-tooling" },
  { label: "Industrial automation", href: "/capabilities#automation-turnkey" },
  { label: "Intelligent equipment", href: "/capabilities#intelligent-equipment" },
  { label: "Sheet Metal Bending", href: "/capabilities#sheet-metal-bending" },
  { label: "Laser Cutting", href: "/capabilities#laser-cutting" },
  { label: "Laser Welding", href: "/capabilities#laser-welding" },
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

export const serviceSchemas = capabilityGroups.map((capability) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: capability.title,
  description: capability.description,
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: "India",
}));

export const iconHighlights = [
  Factory,
  Building2,
  Boxes,
  BriefcaseBusiness,
];
