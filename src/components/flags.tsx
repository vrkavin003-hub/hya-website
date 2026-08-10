import type { CompanyLocation } from "@/data/company";

type FlagCode = CompanyLocation["flag"];

function starPoints(
  cx: number,
  cy: number,
  spikes: number,
  outerR: number,
  innerR: number,
): string {
  const points: string[] = [];

  for (let i = 0; i < spikes * 2; i += 1) {
    const radius = i % 2 === 0 ? outerR : innerR;
    const angle = (Math.PI * i) / spikes - Math.PI / 2;

    points.push(
      `${(cx + radius * Math.cos(angle)).toFixed(2)},${(
        cy +
        radius * Math.sin(angle)
      ).toFixed(2)}`,
    );
  }

  return points.join(" ");
}

/* ----------------------------------------
   Precompute India flag spokes
---------------------------------------- */

const round = (value: number) => Number(value.toFixed(4));

const INDIA_SPOKES = Array.from({ length: 24 }, (_, i) => {
  const angle = (i * Math.PI) / 12;

  const dx = Math.cos(angle);
  const dy = Math.sin(angle);

  return {
    x1: round(30 + 1.6 * dx),
    y1: round(20 + 1.6 * dy),
    x2: round(30 + 4.3 * dx),
    y2: round(20 + 4.3 * dy),
  };
});

/* ----------------------------------------
   India
---------------------------------------- */

function IndiaFlag() {
  return (
    <svg viewBox="0 0 60 40" role="img" aria-label="India flag">
      <rect width="60" height="40" fill="#FF9933" />
      <rect y="13.33" width="60" height="13.33" fill="#FFFFFF" />
      <rect y="26.67" width="60" height="13.33" fill="#138808" />

      <g stroke="#000080" strokeWidth="0.6">
        {INDIA_SPOKES.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
          />
        ))}
      </g>

      <circle
        cx="30"
        cy="20"
        r="4.4"
        fill="none"
        stroke="#000080"
        strokeWidth="0.6"
      />

      <circle
        cx="30"
        cy="20"
        r="0.7"
        fill="#000080"
      />
    </svg>
  );
}

/* ----------------------------------------
   Singapore
---------------------------------------- */

function SingaporeFlag() {
  return (
    <svg viewBox="0 0 60 40" role="img" aria-label="Singapore flag">
      <rect width="60" height="20" fill="#EE2536" />
      <rect y="20" width="60" height="20" fill="#FFFFFF" />

      <path
        fill="#FFFFFF"
        fillRule="evenodd"
        d="M19 3 a7 7 0 1 0 0 14 a7 7 0 1 0 0-14 Z M21.8 10 a5.5 5.5 0 1 0 0.01 0 Z"
      />

      {[
        [25.8, 8],
        [32, 8],
        [35, 13],
        [32, 18],
        [25.8, 18],
      ].map(([cx, cy]) => (
        <polygon
          key={`${cx}-${cy}`}
          points={starPoints(cx, cy, 5, 2, 0.9)}
          fill="#FFFFFF"
        />
      ))}
    </svg>
  );
}

/* ----------------------------------------
   Malaysia
---------------------------------------- */

function MalaysiaFlag() {
  return (
    <svg viewBox="0 0 60 40" role="img" aria-label="Malaysia flag">
      {Array.from({ length: 14 }, (_, i) => (
        <rect
          key={i}
          y={(40 / 14) * i}
          width="60"
          height={40 / 14}
          fill={i % 2 === 0 ? "#CC0001" : "#FFFFFF"}
        />
      ))}

      <rect width="30" height="20" fill="#010066" />

      <path
        fill="#FFCC00"
        fillRule="evenodd"
        d="M11 4.5 a5.5 5.5 0 1 0 0 11 a5.5 5.5 0 1 0 0-11 Z M13.2 10 a4.6 4.6 0 1 0 0.01 0 Z"
      />

      <polygon
        points={starPoints(19.5, 10, 14, 4.4, 1.9)}
        fill="#FFCC00"
      />
    </svg>
  );
}

/* ----------------------------------------
   Flag Mapping
---------------------------------------- */

const flags = {
  IN: IndiaFlag,
  SG: SingaporeFlag,
  MY: MalaysiaFlag,
};

/* ----------------------------------------
   Component
---------------------------------------- */

export function CountryFlag({
  code,
  className = "",
}: {
  code: FlagCode;
  className?: string;
}) {
  const Flag = flags[code];

  return (
    <span
      aria-hidden="true"
      className={`inline-block h-4 w-6 overflow-hidden rounded-[3px] shadow-[0_1px_2px_rgba(11,31,58,0.18)] ${className}`}
    >
      <Flag />
    </span>
  );
}