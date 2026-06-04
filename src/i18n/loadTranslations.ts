import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function loadTranslations(locale: string | undefined) {
  return serverSideTranslations(locale ?? "cs", ["common"]);
}
