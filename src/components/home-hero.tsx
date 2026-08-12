import {
  Box,
  BriefcaseBusiness,
  Cog,
  Globe2,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

const homeMetrics = [
  { value: "20+", label: "Years of Industry Experience", icon: Trophy },
  { value: "50,000+", label: "Fixtures Supplied", icon: Box },
  { value: "5+", label: "Industry Verticals Served", icon: Globe2 },
  { value: "5000+", label: "Projects Delivered", icon: Users },
];

export function HomeHero() {
  return (
    <PageHero
      eyebrow="Engineering excellence"
      title="Precision Engineering"
      accent="Powerful Solutions"
      subtitle="Precision Beyond Limits - Engineering the Future of Manufacturing"
      description="Delivering precision and excellence since 2023."
      image="/images/heroes/home-hero-cnc.png"
      imageAlt="CNC milling equipment machining a precision HYA TECH component"
      imagePosition="center center"
      variant="home"
      primaryAction={{ label: "Our Services", href: "/capabilities" }}
      secondaryAction={{ label: "Facility Overview", href: "/projects" }}
      highlights={[
        {
          title: "Quality Assured",
          description: "International standards & proven process",
          icon: ShieldCheck,
        },
        {
          title: "Advanced Technology",
          description: "Cutting-edge machines & innovation",
          icon: Cog,
        },
        {
          title: "Industry Expertise",
          description: "Serving diverse industries with excellence",
          icon: BriefcaseBusiness,
        },
      ]}
      highlightsCta={{ label: "Get a Quote | Talk to an Engineer", href: "/contact" }}
    />
  );
}

export function HomeStats() {
  return (
    <section className="home-stats-section" aria-label="Company statistics">
      <div className="site-container home-stats-container">
        <Reveal>
          <div className="home-stats-panel">
            {homeMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.label} className="stats-item">
                  <span className="stats-icon">
                    <Icon aria-hidden="true" size={25} strokeWidth={1.8} />
                  </span>
                  <span>
                    <strong>{metric.value}</strong>
                    <small>{metric.label}</small>
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
