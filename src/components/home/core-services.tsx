import Image from "next/image";
import Link from "next/link";
import { capabilityGroups } from "@/data/site";
import { Reveal } from "@/components/reveal";

export function CoreServices() {
  return (
    <section className="core-services home-core-services">
      <div className="site-container">
        <Reveal>
          <div className="service-panel rounded-[30px] border border-border bg-white p-5 shadow-[0_26px_75px_rgba(6,29,54,0.14)] sm:p-8">
            <div className="mb-8 flex flex-col gap-3 text-center">
              <span className="mx-auto text-xs font-bold uppercase tracking-[0.16em] text-blue">
                What we do
              </span>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-navy sm:text-4xl">
                Our core services
              </h2>
              <span className="mx-auto h-1 w-12 rounded-full bg-blue" />
            </div>
            <div className="services-grid grid gap-3">
              {capabilityGroups.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.slug}
                    href={`/capabilities#${service.slug}`}
                    className="service-card group overflow-hidden rounded-[18px] border border-border bg-white"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-alt">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 190px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                    </div>
                    <div className="relative px-3 pb-4 pt-7 text-center">
                      <span className="service-icon absolute -top-5 left-1/2 flex size-10 -translate-x-1/2 items-center justify-center rounded-xl bg-blue text-white shadow-lg">
                        <Icon aria-hidden="true" size={19} strokeWidth={1.9} />
                      </span>
                      <h3 className="text-sm font-semibold leading-5 text-navy">
                        {service.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
