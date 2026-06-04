// Merges split namespace JSON files back into common.json (one namespace for i18next).
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localesDir = path.join(__dirname, "../public/locales");
const locales = ["cs", "en", "uk", "ru"];
const files = ["common", "home", "services", "pricing", "contact", "servicePages"];

for (const locale of locales) {
  const merged = {};
  for (const file of files) {
    const filePath = path.join(localesDir, locale, `${file}.json`);
    if (!fs.existsSync(filePath)) continue;
    Object.assign(merged, JSON.parse(fs.readFileSync(filePath, "utf8")));
  }
  const outPath = path.join(localesDir, locale, "common.json");
  fs.writeFileSync(outPath, `${JSON.stringify(merged, null, 2)}\n`);
  console.log(`${locale}/common.json merged (${Object.keys(merged).length} top-level keys)`);
}
