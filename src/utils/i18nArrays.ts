/** i18n returnObjects can return a plain object in some locales; ensure we always get an array. */
export function ensureStringArray(value: unknown): string[] {
  if (value == null) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === "object") return Object.values(value);
  return [];
}
