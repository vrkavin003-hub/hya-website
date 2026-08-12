import Image from "next/image";
import Link from "next/link";
import { capabilityGroups } from "@/data/site";
import { Reveal } from "@/components/reveal";

const filtered = capabilityGroups.filter((s) => s.slug !== "intelligent-equipment");

function ServiceCard({ service }: { service: (typeof capabilityGroups)[number] }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/capabilities#${service.slug}`}
      className="service-card group relative flex flex-col items-center justify-center overflow-hidden rounded-[18px] border border-border bg-white px-3 py-4 text-center"
    >
      <Image
        src={service.image}
        alt=""
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1080px) 33vw, 25vw"
        className="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/50 to-navy/30" />
      <span className="service-icon relative z-10 mb-3 flex size-11 items-center justify-center rounded-2xl bg-blue text-white shadow-lg">
        <Icon aria-hidden="true" size={22} strokeWidth={1.9} />
      </span>
      <h3 className="relative z-10 text-xs font-semibold leading-4 text-white">
        {service.title}
      </h3>
    </Link>
  );
}

export function CoreServices() {
  return (
    <section className="core-services home-core-services">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10">
        <Reveal>
          <div className="service-panel rounded-[30px] border border-border bg-white p-5 shadow-[0_26px_75px_rgba(6,29,54,0.14)] sm:p-8">
            <div className="mb-8 flex flex-col gap-3 text-center">
              <span className="mx-auto text-xs font-bold uppercase tracking-[0.16em] text-blue">
                What we do
              </span>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-navy sm:text-4xl">
                OUR CORE SERVICES
              </h2>
              <span className="mx-auto h-1 w-12 rounded-full bg-blue" />
            </div>
            <div className="grid grid-cols-2 gap-[25px] lg:grid-cols-4">
              {filtered.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
