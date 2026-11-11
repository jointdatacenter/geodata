const COLORS = {
  started_prvs_year: "#00B398",
  started_before: "#8EBEFF",
  default: "#E6E6E6",
  stroke: "#FAFAFA",
  completedOutline: "#7B109C",
  tooltipText: "black",
  tooltipBg: "white",
  tooltipBorder: "#ccc",
  legendText: "black"
};

const countryCategories = {
  started_prvs_year: [
    "CMR", "COL", "ECU", "ETH", "GMB", "GTM", "GIN", "JOR", "KEN", "MWI",
    "MLI", "MRT", "SEN", "SOM", "SSD", "TZA", "UGA", "UKR"
  ],
  started_before: [
    "AFG", "BGD", "BEN", "BFA", "BDI", "CMR", "CAF", "TCD", "CHL", "COL",
    "COG", "CIV", "DJI", "COD", "ECU", "ETH", "HND", "IRQ", "JOR", "KAZ",
    "KEN", "KGZ", "LBN", "LBY", "MWI", "MYS", "MLI", "MRT", "MDA", "MOZ",
    "NER", "PAK", "PER", "SOM", "SSD", "SDN", "TUR", "TKM", "UGA", "YEM", "ZWE"
  ],
  completed: [
    "BGD", "BFA", "BDI", "CMR", "CAF", "TCD", "CHL", "COL", "DJI", "COD",
    "ECU", "ETH", "IRQ", "JOR", "KAZ", "KEN", "KGZ", "LBN", "MLI", "PER",
    "SOM", "TUR", "TKM", "YEM"
  ]
};

const regions = {
  "global": {
    name: "Global View",
    useNaturalEarth: true
  },
  "south-central-america": {
    name: "South & Central America",
    bounds: [[-120, -60], [-30, 35]],
    scale: 400
  },
  "africa": {
    name: "Africa",
    bounds: [[-20, -40], [60, 40]],
    scale: 400
  },
  "eurasia": {
    name: "Eurasia",
    bounds: [[20, -15], [150, 65]],
    scale: 400
  }
};

const legendItems = [
  { color: COLORS.started_prvs_year, text: "At least one activity started in 2025", type: "fill" },
  { color: COLORS.started_before, text: "At least one activity started before 2025", type: "fill" },
  { color: COLORS.completedOutline, text: "At least one activity completed", type: "outline" }
];

const regionButtons = [
  { id: "global", label: "Global" },
  { id: "south-central-america", label: "South & Central America" },
  { id: "africa", label: "Africa" },
  { id: "eurasia", label: "Eurasia" }
];
