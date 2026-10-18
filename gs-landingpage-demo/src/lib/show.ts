export const OFFICIAL_REGISTER_URL =
  "https://www.globalsources.com/tradeShows/HK/register";

export const GS_HOME_URL = "https://www.globalsources.com/";

export const SHOW = {
  name: "Global Sources Hong Kong Shows",
  venue: "AsiaWorld-Expo, Hong Kong",
  year: "April 2026",
  dates: "11–14 & 18–21 April 2026",
  phases: [
    {
      id: "phase-1",
      label: "Phase 1",
      dates: "11–14 April",
      showNames: ["Consumer Electronics", "Gaming"],
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
      dates: "18–21 April",
      showNames: [
        "Mobile Electronics",
        "Smart Home",
        "Security and Appliances",
        "Lifestyle",
        "Lifestyle Electronics",
        "Sports & Outdoor",
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

export const BUSINESS_TYPES = [
  "Importer",
  "Retailer",
  "Wholesaler",
  "Distributor",
  "Online seller",
  "Buying office",
  "Manufacturer",
  "Trading company",
  "Other",
] as const;

export const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Italy",
  "Netherlands",
  "Canada",
  "Australia",
  "Japan",
  "South Korea",
  "Singapore",
  "India",
  "United Arab Emirates",
  "Brazil",
  "Mexico",
  "Other",
] as const;
