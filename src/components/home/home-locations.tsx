import { MapPin } from "lucide-react";
import { locations } from "@/data/site";
import { SectionHeading } from "@/components/ui";

export function HomeLocations() {
  return (
    <section className="section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Locations"
          title="Close to production. Connected to expertise."
          description="HYA Tech's operating and partnership network supports manufacturing, customer delivery, and know-how exchange."
          align="center"
        />
        <div className="home-location-track mt-12">
          {locations.map((location) => (
            <article key={location.city} className="home-location-card soft-card">
              <div className="flex items-center justify-between gap-4">
                <MapPin aria-hidden="true" className="text-blue" size={22} />
                <span className="rounded-full bg-lightblue px-3 py-1 text-xs font-semibold text-blue">
                  {location.status}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-navy">
                {location.city}
              </h3>
              <p className="mt-1 text-sm font-medium text-blue">{location.role}</p>
              <p className="mt-3 text-sm leading-6 text-muted">
                {location.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
