export const OFFICIAL_REGISTER_URL =
  "https://www.globalsources.com/tradeShows/HK/register";

export const GS_HOME_URL = "https://www.globalsources.com/";

export const PRIVACY_LINKS = {
  collectionNotice:
    "https://www.globalsources.com/help-faq/en/personal-info-collection-notice/",
  cookiePolicy: "https://www.globalsources.com/help-faq/en/cookie-policy/",
  privacyPolicy: "https://www.globalsources.com/help-faq/en/privacy-policy/",
  termsOfUse: "https://www.globalsources.com/help-faq/en/terms-of-use/",
} as const;

export const SHOW = {
  name: "Global Sources Hong Kong Shows",
  venue: "AsiaWorld-Expo, Hong Kong",
  year: "October 2026",
  dates: "11–14 & 18–21 October 2026",
  phases: [
    {
      id: "phase-1",
      label: "Phase 1",
      dates: "11–14 October, 2026",
      description:
        "The World's Premier Consumer Electronics Sourcing Hub – Tap Asia's Top Supply Chain Instantly",
      showNames: [
        "Global Sources Consumer Electronics",
        "Global Sources Gaming",
      ],
      productCategories: [
        "Audio & Video",
        "Auto Electronics",
        "Commercial Electronics",
        "Computer and Accessories",
      ],
    },
    {
      id: "phase-2",
      label: "Phase 2",
      dates: "18–21 October, 2026",
      description:
        "The World's Elite Mobile Accessories & Asia's Must Attend AI Application Sourcing Events",
      showNames: [
        "Global Sources Mobile Electronics",
        "Global Sources Smart Home, Security & Appliances",
        "Global Sources Lifestyle",
        "Global Sources Sports & Outdoor",
      ],
      productCategories: [
        "AI Products",
        "Mobile Devices & Accessories",
        "Cases & Covers",
        "Wearable Electronics",
      ],
    },
  ],
} as const;

export const WHY_VISIT = [
  "Source shelf-ready innovative products",
  "Meet 100% verified suppliers",
  "Direct from factories & maximize profitability",
  "Leverage Hong Kong's powerful sourcing hub",
  "Enjoy a memorable Hong Kong city escape",
] as const;

export const STATS = [
  { value: "330,000+", label: "Products" },
  { value: "4,200+", label: "Exhibitors" },
  { value: "8,000+", label: "Booths" },
  { value: "171+", label: "Countries & Regions" },
] as const;

export const NAME_TITLES = ["Mr", "Mrs", "Ms", "Miss", "Dr"] as const;

export const BUSINESS_TYPES = [
  "Importer",
  "Exporter",
  "Retailer",
  "Wholesaler",
  "Distributor",
  "Online seller",
  "Buying office",
  "Manufacturer",
  "Trading company",
  "Agent",
  "Consultant",
  "Other",
] as const;

export const SOURCING_AMOUNTS = [
  "Below USD 100,000",
  "USD 100,000 – 500,000",
  "USD 500,000 – 1 million",
  "USD 1 million – 5 million",
  "USD 5 million – 10 million",
  "Over USD 10 million",
] as const;

export const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Belgium",
  "Switzerland",
  "Sweden",
  "Poland",
  "Canada",
  "Mexico",
  "Brazil",
  "Australia",
  "New Zealand",
  "Japan",
  "South Korea",
  "China",
  "Hong Kong, SAR",
  "Taiwan",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Indonesia",
  "Vietnam",
  "India",
  "United Arab Emirates",
  "Saudi Arabia",
  "South Africa",
  "Other",
] as const;
