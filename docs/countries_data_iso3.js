
// docs/countryCategories.js

const countryCategories = {
  ongoing: [
    "BEN", // Benin
    "BDI", // Burundi
    "CMR", // Cameroon
    "CIV", // Côte d'Ivoire
    "GMB", // Gambia
    "GTM", // Guatemala
    "GNB", // Guinea-Bissau
    "HND", // Honduras
    "LBY", // Libya
    "MWI", // Malawi
    "MYS", // Malaysia
    "MLI", // Mali
    "MRT", // Mauritania
    "MDA", // Moldova
    "MOZ", // Mozambique
    "NER", // Niger
    "PAK", // Pakistan
    "COG", // Republic of the Congo
    "SSD", // South Sudan
    "SDN", // Sudan
    "TGO", // Togo
    "UGA", // Uganda
    "UKR", // Ukraine
    "TZA", // Tanzania (United Republic of Tanzania)
    "SEN", // Senegal
    "ZWE"  // Zimbabwe
  ],
  completed: [
    "CHL", // Chile
    "KAZ", // Kazakhstan
   // "KRI", // KRI is not an ISO3 code (Kurdistan Region of Iraq)
    "KGZ", // Kyrgyzstan
    "TKM"  // Turkmenistan
  ],
  both: [
    "AFG", // Afghanistan
    "BGD", // Bangladesh
    "BFA", // Burkina Faso
    "CAF", // Central African Republic
    "TCD", // Chad
    "COL", // Colombia
    "DJI", // Djibouti
    "COD", // Democratic Republic of the Congo
    "ECU", // Ecuador
    "ETH", // Ethiopia
    "IRQ", // Iraq
    "KEN", // Kenya
    "JOR", // Jordan
    "LBN", // Lebanon
    "PER", // Peru
    "SOM", // Somalia
    "YEM", // Yemen
    "TUR"  // Türkiye (Turkey)
  ]
};


// Expose globally (for non-module scripts)
window.countryCategories = countryCategories;