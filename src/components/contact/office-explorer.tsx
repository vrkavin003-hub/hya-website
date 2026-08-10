"use client";

import { LoaderCircle } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { CountryFlag } from "@/components/flags";
import type { CompanyLocation } from "@/data/company";

const OfficeMap = dynamic(() => import("./office-map").then((m) => m.OfficeMap), {
  ssr: false,
  loading: () => (
    <div className="pointer-events-none absolute inset-0 grid place-items-center">
      <LoaderCircle className="animate-spin text-sky-300" size={28} aria-hidden="true" />
    </div>
  ),
});

export function OfficeExplorer({ locations }: { locations: CompanyLocation[] }) {
  const [selected, setSelected] = useState<CompanyLocation>(locations[0]);

  return (
    <>
      <div className="relative isolate min-h-[400px] overflow-hidden rounded-[28px] bg-navy sm:min-h-[440px]">
        <OfficeMap
          locations={locations}
          selected={selected}
          onSelect={setSelected}
        />
      </div>
      <OfficeLocationCards
        locations={locations}
        selected={selected}
        onSelect={setSelected}
      />
    </>
  );
}

function OfficeLocationCards({
  locations,
  selected,
  onSelect,
}: {
  locations: CompanyLocation[];
  selected: CompanyLocation;
  onSelect: (location: CompanyLocation) => void;
}) {
  return (
    <div className="location-star-grid">
      {locations.map((location) => {
        const isSelected = location.city === selected.city;
        return (
          <article
            key={location.city}
            role="button"
            tabIndex={0}
            aria-pressed={isSelected}
            onClick={() => onSelect(location)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelect(location);
              }
            }}
            className={`location-card location-card-compact soft-card cursor-pointer ${
              isSelected ? "office-card-selected" : ""
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-blue">{location.region}</p>
                <h3 className="mt-2 text-xl font-semibold text-navy">
                  {location.city}
                </h3>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="rounded-full bg-lightblue px-3 py-1 text-xs font-semibold text-blue">
                  {location.status}
                </span>
                <CountryFlag code={location.flag} />
              </div>
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-700">
              {location.role}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              {location.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
