import { MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import { LocationGrid } from "@/components/location-grid";
import { siteConfig } from "@/data/site";

export function ContactHeadOffice() {
  return (
    <section className="section">
      <div className="site-container grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-[28px] bg-navy p-8 text-white sm:p-12">
          <span className="eyebrow eyebrow-invert">Head office</span>
          <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
            Hosur manufacturing headquarters
          </h2>
          <div className="mt-7 flex items-start gap-3 text-white/70">
            <MapPin aria-hidden="true" className="mt-1 shrink-0 text-sky-300" size={20} />
            <p className="leading-7">{siteConfig.address}</p>
          </div>
          <div className="mt-8">
            <ButtonLink href={siteConfig.mapUrl} variant="ghost" external>
              Get directions
            </ButtonLink>
          </div>
        </div>
        <LocationGrid compact />
      </div>
    </section>
  );
}
