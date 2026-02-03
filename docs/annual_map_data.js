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
    "Bangladesh", "Benin", "Burkina Faso", "Burundi", "Central African Republic",
    "Cameroon", "Chad", "Republic of the Congo", "Democratic Republic of the Congo", "Cote d'Ivoire",
    "Iraq", "Kenya", "Malawi", "Malaysia", "Mali",
    "Mauritania", "Mozambique", "Niger", "Sudan",
    "Togo", "Türkiye", "Yemen", "Zimbabwe"
  ],
  started_before: [
    "Afghanistan", "Chile", "Colombia", "Djibouti", "Ecuador",
    "Ethiopia", "Honduras", "Jordan", "Kazakhstan", "Kyrgyzstan",
    "Lebanon", "Libya", "Moldova", "Pakistan", "Peru",
    "Somalia", "South Sudan", "Turkmenistan", "Uganda"
  ],
  completed: [
    "Bangladesh", "Burkina Faso", "Central African Republic", "Chad", "Chile",
    "Colombia", "Djibouti", "Democratic Republic of the Congo", "Ecuador", "Ethiopia",
    "Iraq", "Jordan", "Kazakhstan", "Kyrgyzstan", "Kenya",
    "Lebanon", "Peru", "Somalia", "Yemen", "Turkmenistan",
    "Türkiye"
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
