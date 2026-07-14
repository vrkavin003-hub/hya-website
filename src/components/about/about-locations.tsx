import styles from "@/app/about/about.module.css";
import { LocationGrid } from "@/components/location-grid";
import { SectionHeading } from "@/components/ui";

export function AboutLocations() {
  return (
    <section className="section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Operating network"
          title="A clear role for every location."
          description="The location descriptions below follow the status stated on the source website and avoid implying unverified legal entities."
          align="center"
        />
        <div className={`mt-12 ${styles.locationRow}`}>
          <LocationGrid />
        </div>
      </div>
    </section>
  );
}
