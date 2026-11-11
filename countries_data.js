
// docs/countries_data.js

const countryCategories = {
  ongoing: [
    "ARM", // Armenia
    "BDI", // Burundi
    "BRA", // Brazil
    "CIV", // Cote D'Ivoire
    "COG", // Republic of the Congo
    "ERI", // Eritrea
    "GIN", // Guinea
    "GMB", // The Gambia
    "GTM", // Guatemala
    "HTI", // Haiti
    "LBY", // Libya
    "MDA", // Moldova
    "MLI", // Mali
    "MMR", // Myanmar
    "MOZ", // Mozambique
    "MRT", // Mauritania
    "MYS", // Malaysia
    "NER", // Niger
    "NGA", // Nigeria
    "PAK", // Pakistan
    "RWA", // Rwanda
    "SDN", // Sudan
    "SEN", // Senegal
    "SSD", // South Sudan
    "SYR", // Syria
    "TGO", // Togo
    "THA", // Thailand
    "UGA", // Uganda
    "UKR", // Ukraine
  ],

  completed: [
    "AFG", // Afghanistan
    "CHL", // Chile
    "HND", // Honduras
    "KAZ", // Kazakhstan
    "KGZ", // Kyrgyzstan
    "LBN", // Lebanon
    "PER", // Peru
    "TKM", // Turkmenistan
  ],

  both: [
    "BFA", // Burkina Faso
    "BGD", // Bangladesh
    "CAF", // Central African Republic
    "CMR", // Cameroon
    "COD", // Democratic Republic of the Congo
    "COL", // Colombia
    "DJI", // Djibouti
    "ECU", // Ecuador
    "ETH", // Ethiopia
    "IRQ", // Iraq
    "JOR", // Jordan
    "KEN", // Kenya
    "MWI", // Malawi
    "SOM", // Somalia
    "TCD", // Chad
    "TUR", // Turkiye
    "YEM", // Yemen
  ]
};

// Expose for browsers (non-module scripts) and Node (generate_map.js)
if (typeof window !== "undefined") window.countryCategories = countryCategories;
if (typeof module !== "undefined" && module.exports) module.exports = countryCategories;
