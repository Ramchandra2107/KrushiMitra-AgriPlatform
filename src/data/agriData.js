export const CROP_DISEASES = [
  {
    id: "tomato_late_blight",
    crop: "Tomato",
    diseaseName: "Late Blight (Phytophthora infestans)",
    hindiName: "टमाटर पछेती अंगमारी",
    severity: "High",
    confidence: 96.4,
    description: "Late blight is a devastating fungal-like pathogen causing dark brown to black water-soaked spots on leaves, stems, and fruits, leading to complete foliage destruction in humid conditions.",
    symptoms: [
      "Water-soaked dark lesions on leaf tips and margins",
      "White fungal fuzzy growth on underside of leaves in moist weather",
      "Brown firm dry decay on tomato fruits",
      "Rapid wilting and defoliation of whole plants"
    ],
    organicTreatment: [
      "Spray Neem Oil extract (5ml per liter) every 5-7 days",
      "Apply Copper Hydroxide or Bordeaux mixture (1%) as a protective shield",
      "Prune bottom leaves up to 12 inches to improve ventilation",
      "Remove and incinerate infected plant debris immediately"
    ],
    chemicalTreatment: [
      "Mancozeb 75% WP @ 2.5g/L water",
      "Cymoxanil + Mancozeb @ 2g/L water",
      "Metalaxyl-M 4% + Mancozeb 64% WP @ 2.5g/L water"
    ],
    preventiveTips: [
      "Use certified disease-resistant tomato varieties (e.g., Arka Rakshak)",
      "Avoid overhead sprinkler irrigation; use drip irrigation",
      "Maintain 60cm row-to-row spacing for airflow",
      "Rotate crops with non-solanaceous crops (avoid potato/eggplant)"
    ],
    sampleImage: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23a86?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "rice_bacterial_blight",
    crop: "Paddy / Rice",
    diseaseName: "Bacterial Leaf Blight (Xanthomonas oryzae)",
    hindiName: "धान का जीवाणु झुलसा रोग",
    severity: "High",
    confidence: 94.1,
    description: "Bacterial leaf blight causes translucent yellowish-green stripes along leaf margins which turn whitish-gray and dry up, leading to kresek (plant wilting) in early stages.",
    symptoms: [
      "Lesions start at leaf margins with wavy borders",
      "Milky bacterial ooze drops visible on young leaves early morning",
      "Leaves turn straw-yellow and roll upward",
      "Wilting of whole tillers (Kresek phase)"
    ],
    organicTreatment: [
      "Spray Fresh Cow Dung Extract (20g/L water filtered) mixed with Neem oil",
      "Apply Pseudomonas fluorescens @ 10g/L foliage spray",
      "Drain field water for 3-4 days to arrest bacterial spread"
    ],
    chemicalTreatment: [
      "Streptocycline @ 6g + Copper Oxychloride @ 500g in 200L water per acre",
      "Agrimycin-100 @ 100g/acre spray at early onset"
    ],
    preventiveTips: [
      "Avoid excessive top-dressing of Nitrogen fertilizers",
      "Seed treatment with Streptocycline (1g in 10L water for 12 hrs)",
      "Maintain clean field borders free from weed hosts like Leersia hexandra"
    ],
    sampleImage: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "wheat_yellow_rust",
    crop: "Wheat",
    diseaseName: "Yellow Rust / Stripe Rust (Puccinia striiformis)",
    hindiName: "गेहूं का पीला रतुआ",
    severity: "High",
    confidence: 95.8,
    description: "Yellow rust produces bright yellow pustules arranged in linear stripes along the leaf veins, shedding yellow powder when touched.",
    symptoms: [
      "Bright yellow powdery stripes running along leaf blades",
      "Powdery yellow spores stick to clothing and hands",
      "Shriveling of grains and stunted crop growth"
    ],
    organicTreatment: [
      "Foliar spray of Sour Milk / Butter Milk solution (10% conc in water)",
      "Trichoderma viride bio-fungicide @ 5g/L spray"
    ],
    chemicalTreatment: [
      "Propiconazole 25% EC (Tilt) @ 1 ml/L water",
      "Tebuconazole 25.9% EC @ 1.5 ml/L water"
    ],
    preventiveTips: [
      "Sow recommended rust-resistant varieties like DBW 187, HD 3226, PBW 725",
      "Timely sowing in November to avoid peak infection window",
      "Monitor fields weekly during cold humid January morning weather"
    ],
    sampleImage: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "cotton_leaf_curl",
    crop: "Cotton",
    diseaseName: "Cotton Leaf Curl Virus (CLCuV)",
    hindiName: "कपास का पत्ता मरोड़ रोग",
    severity: "Medium",
    confidence: 91.5,
    description: "Transmitted by Bemisia tabaci (whiteflies), leaf curl virus causes upward/downward curling of leaves, leaf thickening, and enation (leaf-like outgrowths) on underside.",
    symptoms: [
      "Upward cupping and curling of upper leaves",
      "Thickening of leaf veins on lower side",
      "Enations (small leaf-like growths) under leaf surface",
      "Stunted plant stature and reduced boll formation"
    ],
    organicTreatment: [
      "Install Yellow Sticky Traps @ 20 traps/acre to catch whiteflies",
      "Spray 5% Neem Seed Kernel Extract (NSKE) or Agniastra",
      "Spray Verticillium lecanii entomopathogenic fungus @ 5g/L"
    ],
    chemicalTreatment: [
      "Diafenthiuron 50% WP @ 1.25g/L water for whitefly vector control",
      "Imidacloprid 17.8% SL @ 0.5ml/L water"
    ],
    preventiveTips: [
      "Grow whitefly-resistant Bt Cotton hybrids",
      "Destroy weed hosts like Abutilon indicum and Xanthium near borders",
      "Avoid excess nitrogen application which attracts whiteflies"
    ],
    sampleImage: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "maize_common_rust",
    crop: "Maize",
    diseaseName: "Common Rust (Puccinia sorghi)",
    hindiName: "मक्का का सामान्य रतुआ",
    severity: "Medium",
    confidence: 93.2,
    description: "Produces golden-brown to cinnamon pustules scattered on both leaf surfaces, drying up leaves during cool humid nights.",
    symptoms: [
      "Small brownish oval pustules scattered across lower & upper leaf sides",
      "Pustules rupture releasing rusty reddish powder",
      "Premature leaf drying reducing grain weight"
    ],
    organicTreatment: [
      "Foliar spray of Fermented Jeevamrut (20L per 200L water per acre)",
      "Spray Neem leaf extract with panchagavya"
    ],
    chemicalTreatment: [
      "Mancozeb 75% WP @ 2g/L water",
      "Azoxystrobin 23% SC @ 1 ml/L water"
    ],
    preventiveTips: [
      "Plant early in the season to escape peak spore periods",
      "Ensure adequate Potassium fertilization to strengthen cell walls"
    ],
    sampleImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "healthy_apple_leaf",
    crop: "Apple / General",
    diseaseName: "Healthy Crop Leaf (No Pathogen Detected)",
    hindiName: "स्वस्थ फसल - कोई रोग नहीं",
    severity: "None",
    confidence: 99.1,
    description: "The foliage demonstrates strong chlorophyll synthesis, zero lesions, pristine leaf margins, and robust cellular structure.",
    symptoms: [
      "Uniform vibrant green color",
      "Smooth uninterrupted leaf vein network",
      "No spots, pustules, or wilting observed"
    ],
    organicTreatment: [
      "Continue balanced organic nutrition (Vermicompost + Bio-fertilizers)",
      "Apply prophylactic neem oil spray every 15 days for maintenance"
    ],
    chemicalTreatment: [
      "No chemical intervention needed. Save your input costs!"
    ],
    preventiveTips: [
      "Maintain deep soil aeration and drip fertigation schedule",
      "Inspect leaves weekly for early insect or fungal egg clusters"
    ],
    sampleImage: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&auto=format&fit=crop&q=80"
  }
];

export const GOVT_SCHEMES = [
  {
    id: "pm-kisan",
    title: "PM-KISAN Samman Nidhi Yojana",
    titleHindi: "प्रधानमंत्री किसान सम्मान निधि योजना",
    category: "Financial Support",
    categoryHindi: "वित्तीय सहायता",
    minister: "Ministry of Agriculture & Farmers Welfare",
    benefitAmount: "₹6,000 / year",
    benefitDesc: "Direct income support in 3 equal installments of ₹2,000 directly into farmer bank accounts via Aadhaar DBT.",
    eligibility: [
      "Small and marginal landholder farmer families with cultivable landholding up to 2 hectares",
      "Valid Aadhaar card linked with active bank account",
      "Land ownership record (Khata/Khewati) in state land records database"
    ],
    documents: [
      "Aadhaar Card",
      "Land Ownership Documents (7/12, Khasra / Khatauni)",
      "Bank Passbook copy with IFSC Code",
      "Active Mobile Number"
    ],
    targetFarmers: "Small & Marginal Farmers",
    applyUrl: "https://pmkisan.gov.in/",
    steps: [
      "Visit official portal pmkisan.gov.in and click on 'New Farmer Registration'.",
      "Select Rural / Urban farmer, enter Aadhaar number & Mobile number.",
      "Fill land record details (Khasra No, Khata No, Land Area in Hectares).",
      "Upload scanned copy of land deed and bank passbook.",
      "Submit for verification by State Nodal Officer."
    ]
  },
  {
    id: "pmfby",
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    titleHindi: "प्रधानमंत्री फसल बीमा योजना",
    category: "Insurance",
    categoryHindi: "फसल बीमा",
    minister: "Ministry of Agriculture & Farmers Welfare",
    benefitAmount: "Up to 100% Crop Loss Cover",
    benefitDesc: "Comprehensive crop insurance against non-preventable natural risks from pre-sowing to post-harvest.",
    eligibility: [
      "All farmers including sharecroppers and tenant farmers growing notified crops in notified areas",
      "Nominal premium rate: 2% for Kharif crops, 1.5% for Rabi crops, 5% for Commercial/Horticultural crops"
    ],
    documents: [
      "Proposal Form / Land Sowing Certificate",
      "Land Possession Certificate (LPC) or Lease Agreement",
      "Aadhaar Card & Bank Account details",
      "Sowing Certificate issued by Patwari/Gram Sevak"
    ],
    targetFarmers: "All Farmers (Loanee & Non-Loanee)",
    applyUrl: "https://pmfby.gov.in/",
    steps: [
      "Log on to pmfby.gov.in or visit nearest Common Service Centre (CSC) / Bank branch.",
      "Calculate crop insurance premium using online calculator.",
      "Fill crop details, land survey number, and season (Kharif/Rabi).",
      "Pay nominal farmer share premium online.",
      "Download Policy Receipt for future claims."
    ]
  },
  {
    id: "kcc",
    title: "Kisan Credit Card (KCC) Scheme",
    titleHindi: "किसान क्रेडिट कार्ड योजना",
    category: "Credit & Loans",
    categoryHindi: "ऋण और क्रेडिट",
    minister: "Reserve Bank of India & NABARD",
    benefitAmount: "Loan up to ₹3.00 Lakh @ 4% Interest",
    benefitDesc: "Collateral-free instant credit up to ₹1.60 Lakh for crop cultivation, animal husbandry & fisheries, with 3% prompt repayment subvention.",
    eligibility: [
      "Individual farmers who are owner-cultivators",
      "Tenant farmers, share croppers, and Joint Liability Groups (JLGs)",
      "Self Help Groups (SHGs) of farmers"
    ],
    documents: [
      "Duly filled KCC Application form",
      "Two passport size photographs",
      "Identity Proof (Aadhaar / Voter ID / PAN)",
      "Land Revenue Record verified by Revenue Officer"
    ],
    targetFarmers: "All Cultivators, SHGs & Dairy Farmers",
    applyUrl: "https://myscheme.gov.in/schemes/kcc",
    steps: [
      "Download KCC Form from bank portal or visit nearest Commercial Bank/RRB/Cooperative Bank.",
      "Submit land details and crop plan.",
      "Bank issues KCC Smart Card within 14 working days.",
      "Withdraw money as needed via ATM or bank branch."
    ]
  },
  {
    id: "smam",
    title: "Sub-Mission on Agricultural Mechanization (SMAM)",
    titleHindi: "कृषि यांत्रिकीकरण पर उप-मिशन",
    category: "Machinery Subsidy",
    categoryHindi: "मशीनरी सब्सिडी",
    minister: "Department of Agriculture & Farmers Welfare",
    benefitAmount: "40% to 80% Subsidy on Equipment",
    benefitDesc: "Subsidy on purchasing tractors, harvesters, rotavators, seed drills, sprayers, and establishment of Custom Hiring Centres (CHCs).",
    eligibility: [
      "Individual farmers (preference to SC, ST, Small & Marginal, and Women farmers)",
      "Farmers' Cooperatives, SHGs, and Farmer Producer Organizations (FPOs)"
    ],
    documents: [
      "Aadhaar Card",
      "Bank Passbook",
      "Land Registration Document",
      "Caste Certificate (if applicable)",
      "Quotation invoice of machinery from authorized dealer"
    ],
    targetFarmers: "Small Farmers, FPOs, Women Farmers",
    applyUrl: "https://agrimachinery.nic.in/",
    steps: [
      "Register on agrimachinery.nic.in using Aadhaar.",
      "Select desired machinery manufacturer and dealer.",
      "Upload land documents and quotation.",
      "Upon approval by District Level Committee, machinery purchase is direct with subsidy credit to bank."
    ]
  },
  {
    id: "pmksy",
    title: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY - Per Drop More Crop)",
    titleHindi: "प्रधानमंत्री कृषि सिंचाई योजना (माइक्रो इरिगेशन)",
    category: "Irrigation & Water",
    categoryHindi: "सिंचाई एवं जल",
    minister: "Ministry of Jal Shakti & Agriculture",
    benefitAmount: "55% to 45% Micro-Irrigation Subsidy",
    benefitDesc: "Financial assistance for installing Drip & Sprinkler Irrigation systems to maximize water use efficiency.",
    eligibility: [
      "Farmers owning land with an assured water source (well, borewell, canal)",
      "55% subsidy for Small & Marginal farmers; 45% for Other farmers"
    ],
    documents: [
      "Land Ownership Certificate (7/12 extract)",
      "Water source availability proof",
      "Aadhaar Card & Bank Account",
      "Soil & Water Testing Report"
    ],
    targetFarmers: "All Farmers in Water-Scarcity Regions",
    applyUrl: "https://pmksy.gov.in/",
    steps: [
      "Apply through State Horticulture / Agriculture Department portal.",
      "Submit land survey map and micro-irrigation layout plan.",
      "Authorized agency conducts field survey and installs drip setup.",
      "Government subsidy directly released to company/farmer bank."
    ]
  },
  {
    id: "soil-health-card",
    title: "National Soil Health Card Scheme",
    titleHindi: "मृदा स्वास्थ्य कार्ड योजना",
    category: "Soil & Fertilizer",
    categoryHindi: "मृदा एवं उर्वरक",
    minister: "Department of Agriculture",
    benefitAmount: "Free Soil Testing & Custom Advisory",
    benefitDesc: "Free testing of 12 soil parameters (N,P,K, S, Zn, Fe, Cu, Mn, Bo, pH, EC, OC) along with customized crop-wise fertilizer recommendations.",
    eligibility: [
      "All land-holding farmers across India",
      "Issued every 2 years for registered farm plots"
    ],
    documents: [
      "Farm Plot Location Details",
      "Farmer ID / Aadhaar"
    ],
    targetFarmers: "All Farmers across India",
    applyUrl: "https://soilhealth.dac.gov.in/",
    steps: [
      "Agriculture department staff collects soil sample from field grid.",
      "Sample analyzed in accredited district Soil Testing Lab.",
      "Soil Health Card printed with exact nutrient dosages.",
      "Card delivered to farmer or downloaded online."
    ]
  }
];

export const REGIONAL_WEATHER_PRESETS = [
  {
    name: "Ludhiana, Punjab",
    state: "Punjab",
    temp: 31,
    condition: "Partly Cloudy",
    humidity: 68,
    windSpeed: 14,
    rainProb: 35,
    uvIndex: 7,
    soilMoisture: "Good (32%)",
    forecast: [
      { day: "Today", tempMax: 32, tempMin: 24, icon: "cloud-sun", rainProb: 35, condition: "Partly Cloudy" },
      { day: "Thu", tempMax: 33, tempMin: 25, icon: "sun", rainProb: 10, condition: "Sunny" },
      { day: "Fri", tempMax: 30, tempMin: 23, icon: "cloud-rain", rainProb: 80, condition: "Heavy Rain" },
      { day: "Sat", tempMax: 29, tempMin: 22, icon: "cloud-rain", rainProb: 75, condition: "Thunderstorms" },
      { day: "Sun", tempMax: 31, tempMin: 23, icon: "cloud-sun", rainProb: 20, condition: "Clearing" },
      { day: "Mon", tempMax: 34, tempMin: 25, icon: "sun", rainProb: 5, condition: "Clear & Hot" },
      { day: "Tue", tempMax: 35, tempMin: 26, icon: "sun", rainProb: 0, condition: "Sunny" }
    ],
    advisory: {
      irrigation: "Delay irrigation for Paddy till Friday as heavy showers are expected.",
      spraying: "Avoid pesticide spray during rain forecast (Friday-Saturday). Apply on Thursday morning.",
      harvesting: "Keep harvested fodder covered under tarpaulin sheets."
    }
  },
  {
    name: "Nashik, Maharashtra",
    state: "Maharashtra",
    temp: 27,
    condition: "Moderate Rain",
    humidity: 84,
    windSpeed: 18,
    rainProb: 75,
    uvIndex: 4,
    soilMoisture: "High (45%)",
    forecast: [
      { day: "Today", tempMax: 27, tempMin: 21, icon: "cloud-rain", rainProb: 75, condition: "Moderate Rain" },
      { day: "Thu", tempMax: 26, tempMin: 20, icon: "cloud-rain", rainProb: 85, condition: "Continuous Rain" },
      { day: "Fri", tempMax: 28, tempMin: 21, icon: "cloud-sun", rainProb: 40, condition: "Passing Showers" },
      { day: "Sat", tempMax: 29, tempMin: 22, icon: "sun", rainProb: 15, condition: "Partly Sunny" },
      { day: "Sun", tempMax: 30, tempMin: 22, icon: "sun", rainProb: 10, condition: "Sunny" },
      { day: "Mon", tempMax: 30, tempMin: 23, icon: "cloud-sun", rainProb: 25, condition: "Warm & Humid" },
      { day: "Tue", tempMax: 31, tempMin: 23, icon: "sun", rainProb: 10, condition: "Sunny" }
    ],
    advisory: {
      irrigation: "Drain excess water from Grape orchards & Onion nurseries immediately to avoid root rot.",
      spraying: "High humidity risk for Downy Mildew in grapes. Spray prophylactic fungicide after rain stops.",
      harvesting: "Postpone onion harvest until soil moisture levels reduce."
    }
  },
  {
    name: "Varanasi, Uttar Pradesh",
    state: "Uttar Pradesh",
    temp: 34,
    condition: "Sunny & Humid",
    humidity: 62,
    windSpeed: 10,
    rainProb: 15,
    uvIndex: 8,
    soilMoisture: "Moderate (24%)",
    forecast: [
      { day: "Today", tempMax: 35, tempMin: 26, icon: "sun", rainProb: 15, condition: "Sunny & Humid" },
      { day: "Thu", tempMax: 36, tempMin: 27, icon: "sun", rainProb: 10, condition: "Hot" },
      { day: "Fri", tempMax: 35, tempMin: 26, icon: "cloud-sun", rainProb: 30, condition: "Humid Clouds" },
      { day: "Sat", tempMax: 33, tempMin: 25, icon: "cloud-rain", rainProb: 65, condition: "Light Rain" },
      { day: "Sun", tempMax: 32, tempMin: 24, icon: "cloud-rain", rainProb: 60, condition: "Showers" },
      { day: "Mon", tempMax: 33, tempMin: 25, icon: "cloud-sun", rainProb: 20, condition: "Partly Cloudy" },
      { day: "Tue", tempMax: 34, tempMin: 26, icon: "sun", rainProb: 5, condition: "Bright Sun" }
    ],
    advisory: {
      irrigation: "Light evening irrigation recommended for Sugarcane & Paddy crops today.",
      spraying: "Favorable window for weedicide spraying in young crop stands between 6 AM - 10 AM.",
      harvesting: "Ideal conditions for soil tilling and nursery preparation."
    }
  },
  {
    name: "Guntur, Andhra Pradesh",
    state: "Andhra Pradesh",
    temp: 32,
    condition: "Breezy & Sunny",
    humidity: 58,
    windSpeed: 22,
    rainProb: 10,
    uvIndex: 9,
    soilMoisture: "Low (18%)",
    forecast: [
      { day: "Today", tempMax: 33, tempMin: 25, icon: "sun", rainProb: 10, condition: "Breezy & Sunny" },
      { day: "Thu", tempMax: 34, tempMin: 26, icon: "sun", rainProb: 5, condition: "Sunny" },
      { day: "Fri", tempMax: 34, tempMin: 26, icon: "sun", rainProb: 5, condition: "Hot" },
      { day: "Sat", tempMax: 35, tempMin: 27, icon: "sun", rainProb: 0, condition: "Very Hot" },
      { day: "Sun", tempMax: 33, tempMin: 25, icon: "cloud-sun", rainProb: 20, condition: "Passing Clouds" },
      { day: "Mon", tempMax: 32, tempMin: 24, icon: "cloud-rain", rainProb: 50, condition: "Thunderstorms" },
      { day: "Tue", tempMax: 31, tempMin: 24, icon: "cloud-rain", rainProb: 40, condition: "Light Rain" }
    ],
    advisory: {
      irrigation: "High evapotranspiration due to high wind speed. Provide drip irrigation to Chilli & Cotton fields.",
      spraying: "High wind speed (22 km/h) can cause spray drift. Postpone spraying till evening when wind dies down.",
      harvesting: "Chilli drying yards should be kept ready with protective coverings."
    }
  }
];

export const MANDI_PRICES = [
  { commodity: "Wheat (Lok-1)", hindiCommodity: "गेहूं (लोक-1)", mandi: "Khanna, Punjab", price: "2275", priceDisplay: "₹2,275", unit: "per Quintal", trend: "up", change: "+1.8%", category: "Cereals", minPrice: "₹2,150", maxPrice: "₹2,340", arrival: "450 Tonnes", state: "Punjab" },
  { commodity: "Paddy (Basmati 1121)", hindiCommodity: "धान (बासमती 1121)", mandi: "Karnal, Haryana", price: "4350", priceDisplay: "₹4,350", unit: "per Quintal", trend: "up", change: "+2.4%", category: "Cereals", minPrice: "₹4,100", maxPrice: "₹4,500", arrival: "620 Tonnes", state: "Haryana" },
  { commodity: "Cotton (Medium Staple)", hindiCommodity: "कपास (मध्यम धागा)", mandi: "Rajkot, Gujarat", price: "7120", priceDisplay: "₹7,120", unit: "per Quintal", trend: "down", change: "-0.6%", category: "Commercial", minPrice: "₹6,900", maxPrice: "₹7,300", arrival: "310 Tonnes", state: "Gujarat" },
  { commodity: "Soybean (Yellow)", hindiCommodity: "सोयाबीन (पीला)", mandi: "Indore, MP", price: "4680", priceDisplay: "₹4,680", unit: "per Quintal", trend: "up", change: "+1.1%", category: "Oilseeds", minPrice: "₹4,450", maxPrice: "₹4,800", arrival: "580 Tonnes", state: "Madhya Pradesh" },
  { commodity: "Potato (Jyoti)", hindiCommodity: "आलू (ज्योति)", mandi: "Agra, UP", price: "1420", priceDisplay: "₹1,420", unit: "per Quintal", trend: "down", change: "-1.2%", category: "Vegetables", minPrice: "₹1,300", maxPrice: "₹1,500", arrival: "850 Tonnes", state: "Uttar Pradesh" },
  { commodity: "Onion (Red)", hindiCommodity: "प्याज (लाल)", mandi: "Lasalgaon, Maharashtra", price: "2650", priceDisplay: "₹2,650", unit: "per Quintal", trend: "up", change: "+3.5%", category: "Vegetables", minPrice: "₹2,400", maxPrice: "₹2,850", arrival: "920 Tonnes", state: "Maharashtra" },
  { commodity: "Mustard (Black)", hindiCommodity: "सरसों (काली)", mandi: "Bharatpur, Rajasthan", price: "5450", priceDisplay: "₹5,450", unit: "per Quintal", trend: "up", change: "+0.9%", category: "Oilseeds", minPrice: "₹5,200", maxPrice: "₹5,600", arrival: "290 Tonnes", state: "Rajasthan" },
  { commodity: "Chana / Gram", hindiCommodity: "चना (काबूली/देशी)", mandi: "Latur, Maharashtra", price: "5800", priceDisplay: "₹5,800", unit: "per Quintal", trend: "down", change: "-0.4%", category: "Pulses", minPrice: "₹5,600", maxPrice: "₹6,000", arrival: "380 Tonnes", state: "Maharashtra" },
  { commodity: "Maize (Yellow)", hindiCommodity: "मक्का (पीली)", mandi: "Davangere, Karnataka", price: "2150", priceDisplay: "₹2,150", unit: "per Quintal", trend: "up", change: "+1.5%", category: "Cereals", minPrice: "₹2,050", maxPrice: "₹2,220", arrival: "410 Tonnes", state: "Karnataka" },
  { commodity: "Tomato (Hybrid)", hindiCommodity: "टमाटर (हाइब्रिड)", mandi: "Kolar, Karnataka", price: "1850", priceDisplay: "₹1,850", unit: "per Quintal", trend: "up", change: "+4.2%", category: "Vegetables", minPrice: "₹1,600", maxPrice: "₹2,100", arrival: "740 Tonnes", state: "Karnataka" }
];
