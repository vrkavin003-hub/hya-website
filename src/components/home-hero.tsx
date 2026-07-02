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
  { value: "7+", label: "Years of Experience", icon: Users },
  { value: "500+", label: "Projects Completed", icon: Box },
  { value: "98%", label: "Client Satisfaction", icon: Trophy },
  { value: "5+", label: "Industries Served", icon: Globe2 },
];

export function HomeHero() {
  return (
    <PageHero
      eyebrow="Engineering excellence"
      title="Precision Engineering."
      accent="Powerful Solutions."
      description="We deliver smart, reliable and quality-driven industrial solutions to help your business grow stronger."
      image="/images/heroes/home-hero-cnc.png"
      imageAlt="CNC milling equipment machining a precision HYA Tech component"
      imagePosition="center center"
      variant="home"
      primaryAction={{ label: "Explore Our Services", href: "/capabilities" }}
      secondaryAction={{ label: "View Our Projects", href: "/projects" }}
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
