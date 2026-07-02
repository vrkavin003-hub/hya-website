const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function readString(
  value: unknown,
  { min = 0, max = 2000 }: { min?: number; max?: number } = {},
) {
  if (typeof value !== "string") return null;
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length < min || normalized.length > max) return null;
  return normalized;
}

export function readEmail(value: unknown) {
  const email = readString(value, { min: 5, max: 254 });
  return email && emailPattern.test(email) ? email : null;
}

export function mailtoUrl(subject: string, lines: Array<[string, string | null]>) {
  const body = lines
    .filter(([, value]) => Boolean(value))
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n\n");

  return `mailto:info@hyatech.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
