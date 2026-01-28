const fs = require('fs');
const path = require('path');

const COLORS = {
    ongoing: "#00B398",
    completed: "#8EBEFF",
    both: "#027B68",
    default: "#E6E6E6"
};

const countryCategories = {
    ongoing: ["BEN", "BDI", "CIV", "GMB", "GTM", "GNB", "HND", "LBY", "MWI", "MYS", "MLI", "MRT", "MDA", "MOZ", "NER", "PAK", "COG", "SEN", "SSD", "SDN", "SYR", "TZA", "UGA", "UKR"],
    completed: ["AFG", "CHL", "KAZ", "KGZ", "LBN", "TKM"],
    both: ["BGD", "BFA", "CMR", "CAF", "TCD", "COL", "DJI", "COD", "ECU", "ETH", "IRQ", "KEN", "JOR", "PER", "SOM", "YEM", "TUR"]
};

const countryStatus = {};
countryCategories.ongoing.forEach(c => countryStatus[c] = "ongoing");
countryCategories.completed.forEach(c => countryStatus[c] = "completed");
countryCategories.both.forEach(c => countryStatus[c] = "both");

const svgPath = path.join(__dirname, 'docs', 'map_unhcr.svg');
const outputSvgPath = path.join(__dirname, 'docs', 'map_colored.svg');

let svg = fs.readFileSync(svgPath, 'utf8');

// Replace fill color for each country based on status
for (const [code, status] of Object.entries(countryStatus)) {
    const color = COLORS[status];
    // Match path with this id and replace its fill color
    const regex = new RegExp(`(id="${code}"[^>]*fill=")#[^"]+(")`,'g');
    svg = svg.replace(regex, `$1${color}$2`);
}

// Update stroke color for all paths (lighter borders)
svg = svg.replace(/stroke="#fff"/g, 'stroke="#f0f0f0"');
svg = svg.replace(/stroke-width="0.001"/g, 'stroke-width="0.2"');

// Add legend before closing </svg>
const legendSvg = `
  <g id="legend" transform="translate(650, 20)">
    <rect x="0" y="0" width="18" height="18" fill="${COLORS.ongoing}"/>
    <text x="25" y="14" font-family="sans-serif" font-size="12">Ongoing</text>
    <rect x="0" y="25" width="18" height="18" fill="${COLORS.both}"/>
    <text x="25" y="39" font-family="sans-serif" font-size="12">Ongoing &amp; Completed</text>
    <rect x="0" y="50" width="18" height="18" fill="${COLORS.completed}"/>
    <text x="25" y="64" font-family="sans-serif" font-size="12">Completed</text>
  </g>
`;

svg = svg.replace('</svg>', `${legendSvg}</svg>`);

fs.writeFileSync(outputSvgPath, svg);
console.log(`Colored SVG saved to: ${outputSvgPath}`);
