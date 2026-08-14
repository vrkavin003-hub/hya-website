import {
  Blocks,
  BrainCircuit,
  Car,
  Component,
  Cog,
  Cpu,
  DraftingCompass,
  Gauge,
  Hammer,
  PackageCheck,
  PanelTop,
  ScanLine,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import { siteConfig } from "./config";

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
    image: "/images/Laser-cutting1.png",
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
