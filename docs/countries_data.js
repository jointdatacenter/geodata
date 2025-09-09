// docs/countryCategories.js

const countryCategories = {
    ongoing: ["Benin", "Burundi", "Cameroon", "Cote d'Ivoire", "Gambia" , "Guatemala" ,"Guinea Bissau" ,"Honduras", "Libya", "Malawi", "Malaysia", "Mali", "Mauritania", "Moldova", "Mozambique", "Niger", "Pakistan", "Republic of the Congo", "South Sudan", "Sudan", "Togo", "Uganda", "Ukraine" , "United Republic of Tanzania", "Senegal" , "Zimbabwe"],
    completed: ["Chile", "Kazakhstan", "KRI", "Kyrgyzstan", "Turkmenistan"],
    both: ["Afghanistan", "Bangladesh", "Burkina Faso", "Central African Republic", "Chad", "Colombia", "Djibouti", "Democratic Republic of the Congo", "Ecuador", "Ethiopia" ,"Iraq", "Kenya", "Jordan" ,"Lebanon", "Peru","Somalia","Somalia ", "Yemen","Türkiye"]
};

// Expose globally (for non-module scripts)
window.countryCategories = countryCategories;