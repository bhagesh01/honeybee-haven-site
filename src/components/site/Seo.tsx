import { Helmet } from "react-helmet-async";
import { BUSINESS, fullAddress } from "@/lib/business";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  /** Extra JSON-LD blocks to inject (e.g. BreadcrumbList, FAQPage). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
};

const DEFAULT_IMAGE = "https://www.busybeespreschool.in/og-image.jpg";

export const Seo = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  keywords,
  type = "website",
  jsonLd,
  noIndex = false,
}: SeoProps) => {
  const url = `${BUSINESS.url}${path === "/" ? "" : path}`;
  const fullTitle = title.includes(BUSINESS.shortName) ? title : `${title} | ${BUSINESS.legalName}`;
  const ldArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={BUSINESS.legalName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Local */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content={`${BUSINESS.address.locality}, ${BUSINESS.address.city}`} />
      <meta name="geo.position" content={`${BUSINESS.geo.latitude};${BUSINESS.geo.longitude}`} />
      <meta name="ICBM" content={`${BUSINESS.geo.latitude}, ${BUSINESS.geo.longitude}`} />

      {ldArray.map((block, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(block)}</script>
      ))}
    </Helmet>
  );
};

/** Reusable Preschool / LocalBusiness JSON-LD (rendered once in App root). */
export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Preschool", "LocalBusiness", "EducationalOrganization"],
  "@id": `${BUSINESS.url}/#org`,
  name: BUSINESS.legalName,
  alternateName: BUSINESS.shortName,
  description: BUSINESS.description,
  url: BUSINESS.url,
  logo: `${BUSINESS.url}${BUSINESS.logoPath}`,
  image: `${BUSINESS.url}${BUSINESS.logoPath}`,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  foundingDate: BUSINESS.founded,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: `${BUSINESS.address.locality}, ${BUSINESS.address.city}`,
    addressRegion: BUSINESS.address.region,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.latitude,
    longitude: BUSINESS.geo.longitude,
  },
  openingHoursSpecification: BUSINESS.hoursSpec.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.dayOfWeek,
    opens: h.opens,
    closes: h.closes,
  })),
  sameAs: Object.values(BUSINESS.socials),
  areaServed: [
    { "@type": "Place", name: "Nigdi Pradhikaran, Pune" },
    { "@type": "Place", name: "Nigdi, Pune" },
    { "@type": "Place", name: "Pradhikaran, Pune" },
    { "@type": "Place", name: "Akurdi, Pune" },
    { "@type": "Place", name: "Chinchwad, Pune" },
  ],
  contactPoint: [{
    "@type": "ContactPoint",
    telephone: BUSINESS.phone,
    contactType: "admissions",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Marathi"],
  }],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
    bestRating: "5",
    worstRating: "1",
  },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${BUSINESS.url}${it.path === "/" ? "" : it.path}`,
  })),
});
