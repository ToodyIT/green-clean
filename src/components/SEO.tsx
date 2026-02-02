import Head from "next/head";
import { useRouter } from "next/router";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://greenclean.cz";
const LOCALES = ["cs", "en", "uk", "ru"] as const;
const DEFAULT_LOCALE = "cs";

interface SEOProps {
  title: string;
  description: string;
  /** Optional OG image path (e.g. /images/og-home.jpg). Falls back to logo. */
  image?: string;
  /** Set true for pagination or duplicate content pages */
  noIndex?: boolean;
  /** Override path for canonical/hreflang (default: current path) */
  path?: string;
}

/** Path without locale prefix (Next.js i18n: default locale has no prefix) */
function pathWithoutLocale(asPath: string): string {
  const without = asPath.replace(/^\/(en|uk|ru)(?=\/|$)/, "") || "/";
  return without.startsWith("/") ? without : `/${without}`;
}

export function SEO({ title, description, image, noIndex, path: pathOverride }: SEOProps) {
  const router = useRouter();
  const locale = (router.locale || DEFAULT_LOCALE) as string;
  const asPath = pathOverride ?? router.asPath;
  const canonicalPath = asPath.startsWith("/") ? asPath : `/${asPath}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const basePath = pathWithoutLocale(canonicalPath);
  const imageUrl = image?.startsWith("http") ? image : `${SITE_URL}${image?.startsWith("/") ? image : `/images/${image || "logo.png"}`}`;
  const fullTitle = title.includes("GreenClean") ? title : `${title} | GreenClean`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={locale === "cs" ? "cs_CZ" : locale === "uk" ? "uk_UA" : locale === "ru" ? "ru_RU" : "en_US"} />
      {LOCALES.filter((l) => l !== locale).map((l) => (
        <meta
          key={l}
          property="og:locale:alternate"
          content={l === "cs" ? "cs_CZ" : l === "uk" ? "uk_UA" : l === "ru" ? "ru_RU" : "en_US"}
        />
      ))}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Hreflang */}
      {LOCALES.map((loc) => {
        const localePath = loc === DEFAULT_LOCALE ? basePath : `/${loc}${basePath}`;
        return (
          <link
            key={loc}
            rel="alternate"
            hrefLang={loc}
            href={`${SITE_URL}${localePath}`}
          />
        );
      })}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${basePath}`} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Head>
  );
}
