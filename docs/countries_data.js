
// docs/countries_data.js

const countryCategories = {
  ongoing: [
    "BDI", // Burundi
    "BEN", // Benin
    "CIV", // Cote D'Ivoire
    "COG", // Republic of the Congo
    "GIN", // Guinea
    "GMB", // The Gambia
    "GTM", // Guatemala
    "HND", // Honduras
    "LBY", // Libya
    "MDA", // Moldova
    "MLI", // Mali
    "MOZ", // Mozambique
    "MRT", // Mauritania
    "MWI", // Malawi
    "MYS", // Malaysia
    "NER", // Niger
    "PAK", // Pakistan
    "SDN", // Sudan
    "SEN", // Senegal
    "SSD", // South Sudan
    "SYR", // Syria
    "UGA", // Uganda
    "UKR", // Ukraine
  ],

  completed: [
    "AFG", // Afghanistan
    "CHL", // Chile
    "KAZ", // Kazakhstan
    "KGZ", // Kyrgyzstan
    "LBN", // Lebanon
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
    "PER", // Peru
    "SOM", // Somalia
    "TCD", // Chad
    "TUR", // Turkiye
    "YEM", // Yemen
  ]
};

// Expose globally (for non-module scripts)
window.countryCategories = countryCategories;
