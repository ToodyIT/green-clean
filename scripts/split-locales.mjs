// Splits public/locales locale common.json into smaller namespace files.
// Run: node scripts/split-locales.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const localesDir = path.join(root, "public/locales");
const locales = ["cs", "en", "uk", "ru"];

const SPLIT = {
  common: [
    "common",
    "header",
    "footer",
    "cookieConsent",
    "whatsapp",
    "processSection",
    "guaranteesSection",
  ],
  home: ["hero", "partners", "about", "faq", "references"],
  services: ["services"],
  pricing: ["pricing"],
  contact: ["contact"],
  servicePages: ["homeCleaning", "serviceData", "servicePage"],
};

for (const locale of locales) {
  const commonPath = path.join(localesDir, locale, "common.json");
  if (!fs.existsSync(commonPath)) {
    console.warn(`Skip ${locale}: no common.json`);
    continue;
  }

  const source = JSON.parse(fs.readFileSync(commonPath, "utf8"));

  for (const [file, keys] of Object.entries(SPLIT)) {
    const out = {};
    for (const key of keys) {
      if (source[key] !== undefined) {
        out[key] = source[key];
      }
    }
    const outPath = path.join(localesDir, locale, `${file}.json`);
    fs.writeFileSync(outPath, `${JSON.stringify(out, null, 2)}\n`);
    console.log(`${locale}/${file}.json — ${keys.length} keys`);
  }
}

console.log("Done. Old common.json kept for reference; pages now load split namespaces.");
