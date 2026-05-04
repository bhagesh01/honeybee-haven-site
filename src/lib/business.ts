// Single source of truth for Busy Bees Preschool NAP + business info.
// Used in Footer, Contact, Navbar, JSON-LD schema, and SEO metadata.

export const BUSINESS = {
  legalName: "Busy Bees Preschool",
  shortName: "BusyBees",
  tagline: "Where Small Steps Lead to Giant Leaps",
  description:
    "Busy Bees Preschool in Nigdi Pradhikaran, Pune is a play-based preschool and daycare nurturing curiosity, kindness and creativity in every child since 2010.",
  founded: "2010",
  url: "https://www.busybeespreschool.in",
  logoPath: "/favicon.png",
  email: "bbees.ps@gmail.com",
  phone: "+919011551028",
  phoneDisplay: "+91 90115 51028",
  phoneAlt: "+919011588424",
  phoneAltDisplay: "+91 90115 88424",
  whatsapp: "+919011551028",
  whatsappDisplay: "+91 90115 51028",
  address: {
    street: "Sector 27A, Plot 123, Near Lokmanya Hospital, Axis Bank Lane",
    locality: "Nigdi Pradhikaran",
    city: "Pune",
    region: "Maharashtra",
    postalCode: "411044",
    country: "IN",
    countryName: "India",
  },
  geo: {
    // Approximate Nigdi Pradhikaran coordinates — update with exact pin from Google Maps share link.
    latitude: 18.6534,
    longitude: 73.7736,
  },
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 2:00 PM" },
    { days: "Saturday", time: "9:00 AM – 12:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  // Schema.org openingHoursSpecification
  hoursSpec: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "14:00" },
    { dayOfWeek: ["Saturday"], opens: "09:00", closes: "12:00" },
  ],
  socials: {
    instagram: "https://instagram.com/busybeespreschool",
    facebook: "https://facebook.com/busybeespreschool",
    youtube: "https://youtube.com/@busybeespreschool",
  },
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18842.107907379395!2d73.773602!3d18.653456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9ddb5c7d137%3A0x1f6d6df1eb86a706!2sBUSY%20BEES%20Preschool%20and%20Daycare%20-%20Where%20Learning%20is%20Un-bee-lievably%20Fun%20*21*21!5e1!3m2!1sen!2sus!4v1777010866898!5m2!1sen!2sus",
  mapsLink: "https://maps.google.com/?q=Busy+Bees+Preschool+Nigdi+Pradhikaran+Pune",
} as const;

export const fullAddress = `${BUSINESS.address.street}, ${BUSINESS.address.locality}, ${BUSINESS.address.city} – ${BUSINESS.address.postalCode}`;

export const whatsappLink = (message = "Hi! I'd like to know more about admissions at Busy Bees Preschool.") =>
  `https://wa.me/${BUSINESS.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
