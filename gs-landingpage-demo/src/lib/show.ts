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
        {
          name: "Audio & Video",
          image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Auto Electronics",
          image:
            "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Commercial Electronics",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Computer and Accessories",
          image:
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Outdoor Electronics",
          image:
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Power & Charging Products",
          image:
            "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Gaming",
          image:
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
        },
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
        {
          name: "AI Products",
          image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Mobile Devices & Accessories",
          image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Cases & Covers",
          image:
            "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Wearable Electronics",
          image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Pre-owned Equipments & Repair Parts",
          image:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Smart Home, Security and Appliances",
          image:
            "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Home, Gifts & Personal care",
          image:
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Smart Pet Tech",
          image:
            "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Sports & Outdoor",
          image:
            "https://images.unsplash.com/photo-1461896836934-ffe607ba6851?auto=format&fit=crop&w=800&q=80",
        },
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
