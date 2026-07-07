import { locations } from "@/data/site";

export function LocationGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className="location-star-grid">
      {locations.map((location) => (
        <article
          key={location.city}
          className={`location-card soft-card ${compact ? "location-card-compact" : ""}`}
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-blue">{location.region}</p>
              <h3
                className={`${compact ? "text-xl" : "text-2xl"} mt-2 font-semibold text-navy`}
              >
                {location.city}
              </h3>
            </div>
            <span className="rounded-full bg-lightblue px-3 py-1 text-xs font-semibold text-blue">
              {location.status}
            </span>
          </div>
          <p className={`${compact ? "mt-3 text-sm" : "mt-5"} font-semibold text-slate-700`}>
            {location.role}
          </p>
          <p className={`${compact ? "mt-2 text-sm leading-6" : "mt-2 leading-7"} text-muted`}>
            {location.description}
          </p>
        </article>
      ))}
    </div>
  );
}
