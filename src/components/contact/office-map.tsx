"use client";

import "leaflet/dist/leaflet.css";
import { Navigation2 } from "lucide-react";
import * as L from "leaflet";
import { useEffect, useMemo, useRef } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  ZoomControl,
  useMap,
} from "react-leaflet";
import type { CompanyLocation } from "@/data/company";

const PIN_PATH =
  "M15 1.8 C 7.2 1.8 1.8 7.4 1.8 15.4 C 1.8 23.6 15 38 15 38 C 15 38 28.2 23.6 28.2 15.4 C 28.2 7.4 22.8 1.8 15 1.8 Z";

function pinIcon(active: boolean): L.DivIcon {
  const width = active ? 34 : 26;
  const height = active ? 44 : 34;
  return L.divIcon({
    className: `office-pin-marker${active ? " is-active" : ""}`,
    html: `<svg viewBox="0 0 30 40" aria-hidden="true"><path d="${PIN_PATH}"/><circle cx="15" cy="15.4" r="4.6"/></svg>`,
    iconSize: [width, height],
    iconAnchor: [width / 2, height],
  });
}

function MapController({ center }: { center: [number, number] }) {
  const map = useMap();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      return;
    }
    map.flyTo(center, Math.max(map.getZoom(), 11), { duration: 0.8 });
  }, [center, map]);

  return null;
}

function directionsUrl(location: CompanyLocation): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}&travelmode=driving`;
}

function openDirections(location: CompanyLocation): void {
  const base = directionsUrl(location);
  const win = window.open(base, "_blank");
  if (!win || !("geolocation" in navigator)) return;
  navigator.geolocation.getCurrentPosition(
    (position) => {
      try {
        win.location.href = `${base}&origin=${position.coords.latitude},${position.coords.longitude}`;
      } catch {
        window.open(
          `${base}&origin=${position.coords.latitude},${position.coords.longitude}`,
          "_blank",
        );
      }
    },
    () => undefined,
    { timeout: 5000, maximumAge: 300000 },
  );
}

export function OfficeMap({
  locations,
  selected,
  onSelect,
}: {
  locations: CompanyLocation[];
  selected: CompanyLocation;
  onSelect: (location: CompanyLocation) => void;
}) {
  const center: [number, number] = [selected.latitude, selected.longitude];
  const icons = useMemo(
    () => ({ active: pinIcon(true), inactive: pinIcon(false) }),
    [],
  );

  return (
    <>
      <MapContainer
        center={center}
        zoom={10}
        scrollWheelZoom
        zoomControl={false}
        attributionControl={false}
        className="z-0"
        style={{ position: "absolute", inset: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        <MapController center={center} />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.latitude, location.longitude]}
            icon={location.id === selected.id ? icons.active : icons.inactive}
            eventHandlers={{ click: () => onSelect(location) }}
          />
        ))}
      </MapContainer>
      <OfficeInfoCard location={selected} />
    </>
  );
}

function OfficeInfoCard({ location }: { location: CompanyLocation }) {
  return (
    <div className="pointer-events-none absolute left-4 top-4 z-[1000] max-w-[260px] rounded-2xl border border-white/15 bg-navy/55 p-4 text-white shadow-2xl backdrop-blur-md sm:left-6 sm:top-6">
      <span className="inline-flex rounded-full bg-sky-300/20 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-sky-200">
        {location.status}
      </span>
      <h3 className="mt-2 text-lg font-semibold leading-tight">{location.city}</h3>
      <p className="mt-1 text-sm leading-6 text-white/80">{location.address}</p>
      <a
        href={directionsUrl(location)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => {
          event.preventDefault();
          openDirections(location);
        }}
        className="pointer-events-auto mt-3 inline-flex items-center gap-2 rounded-full bg-sky-300/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-300/30"
      >
        <Navigation2 aria-hidden="true" size={15} />
        Get Directions
      </a>
    </div>
  );
}
