// Mock products data - Updated to match backend schema
export const allProducts = [
  // Pain Relief Medications
  {
    id: 1,
    name: 'Panadol Extra',
    price: 25.50,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: {
      product_name: 'Panadol Extra',
      scientific_name: 'Paracetamol 500mg + Caffeine 65mg',
      belongs_to: 'Analgesics and Antipyretics',
      mechanism_of_action: 'Paracetamol works by blocking the production of prostaglandins in the brain that cause pain and fever. Caffeine enhances the analgesic effect.',
      medical_uses: [
        'Relief of mild to moderate pain',
        'Headache and migraine relief',
        'Fever reduction',
        'Muscle aches and pains',
        'Dental pain'
      ],
      usage_instructions: [
        'Adults and children over 12 years: 1-2 tablets every 4-6 hours',
        'Maximum 8 tablets in 24 hours',
        'Take with water, with or without food',
        'Do not exceed recommended dose'
      ],
      side_effects: [
        'Nausea (rare)',
        'Skin rash (rare)',
        'Restlessness due to caffeine',
        'Difficulty sleeping if taken late in the day'
      ],
      pregnancy_breastfeeding: 'Safe to use during pregnancy and breastfeeding when used as directed. Consult healthcare provider if unsure.',
      helpful_tips: [
        'More effective when taken at first sign of pain',
        'Can be taken with other medications (check with pharmacist)',
        'Caffeine content may affect sleep if taken in evening'
      ],
      warnings_precautions: [
        'Do not exceed maximum daily dose',
        'Avoid alcohol while taking this medication',
        'Consult doctor if symptoms persist for more than 3 days',
        'Not suitable for children under 12 years'
      ],
      storage_instructions: [
        'Store in a cool, dry place below 25°C',
        'Keep out of reach of children',
        'Do not use after expiry date',
        'Store in original packaging'
      ],
      more_information: 'Panadol Extra provides fast and effective relief from pain and fever. The addition of caffeine helps enhance the pain-relieving effect of paracetamol.'
    },
    category: 'Pain Relief',
    brand: 'GSK',
    inStock: true,
    stockCount: 45,
    originalPrice: 30.00,
    pharmacies: [
      { id: 1, name: 'Al Ezaby Pharmacy', location: 'Nasr City', distance: '2.5 km', phone: '02-12345678', available: true },
      { id: 2, name: 'Seif Pharmacy', location: 'Heliopolis', distance: '3.2 km', phone: '02-87654321', available: true }
    ]
  },
  {
    id: 2,
    name: 'Aspirin 100mg',
    price: 15.00,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: {
      product_name: 'Aspirin 100mg',
      scientific_name: 'Acetylsalicylic Acid 100mg',
      belongs_to: 'Antiplatelet Agents / NSAIDs',
      mechanism_of_action: 'Irreversibly inhibits cyclooxygenase-1 (COX-1) enzyme, reducing platelet aggregation and preventing blood clots.',
      medical_uses: [
        'Prevention of heart attack and stroke',
        'Secondary prevention of cardiovascular events',
        'Mild pain relief',
        'Anti-inflammatory effects'
      ],
      usage_instructions: [
        'Adults: 1 tablet daily, preferably with food',
        'Take at the same time each day',
        'Swallow whole with water',
        'Continue as prescribed by doctor'
      ],
      side_effects: [
        'Stomach irritation',
        'Increased bleeding tendency',
        'Nausea',
        'Heartburn',
        'Allergic reactions (rare)'
      ],
      pregnancy_breastfeeding: 'Avoid during pregnancy, especially in third trimester. Consult doctor before use during breastfeeding.',
      helpful_tips: [
        'Take with food to reduce stomach irritation',
        'Inform all healthcare providers you are taking aspirin',
        'Regular monitoring may be required for long-term use'
      ],
      warnings_precautions: [
        'Increased bleeding risk - inform dentist/surgeon before procedures',
        'Avoid if allergic to aspirin or NSAIDs',
        'Not suitable for children under 16 years',
        'Consult doctor if you have stomach ulcers or bleeding disorders'
      ],
      storage_instructions: [
        'Store at room temperature (15-25°C)',
        'Keep in original container',
        'Protect from moisture',
        'Keep out of reach of children'
      ],
      more_information: 'Low-dose aspirin is commonly prescribed for cardiovascular protection. Regular monitoring and medical supervision are recommended for long-term use.'
    },
    category: 'Cardiovascular',
    brand: 'Bayer',
    inStock: true,
    stockCount: 89,
    originalPrice: 18.00,
    pharmacies: [
      { id: 1, name: 'Al Ezaby Pharmacy', location: 'Nasr City', distance: '2.5 km', phone: '02-12345678', available: true },
      { id: 3, name: 'Dr. Care Pharmacy', location: 'New Cairo', distance: '5.1 km', phone: '02-11223344', available: true }
    ]
  },
  {
    id: 3,
    name: 'Ibuprofen 400mg',
    price: 22.00,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: {
      product_name: 'Ibuprofen 400mg',
      scientific_name: 'Ibuprofen 400mg',
      belongs_to: 'Non-Steroidal Anti-Inflammatory Drugs (NSAIDs)',
      mechanism_of_action: 'Inhibits cyclooxygenase (COX) enzymes, reducing production of prostaglandins that cause inflammation, pain, and fever.',
      medical_uses: [
        'Pain relief (mild to moderate)',
        'Inflammation reduction',
        'Fever reduction',
        'Headache relief',
        'Muscle and joint pain',
        'Menstrual pain'
      ],
      usage_instructions: [
        'Adults: 1 tablet every 6-8 hours as needed',
        'Maximum 3 tablets in 24 hours',
        'Take with food or milk to reduce stomach irritation',
        'Do not exceed 3 days for fever or 10 days for pain without consulting doctor'
      ],
      side_effects: [
        'Stomach upset or pain',
        'Nausea',
        'Heartburn',
        'Dizziness',
        'Headache',
        'Skin rash (rare)'
      ],
      pregnancy_breastfeeding: 'Avoid during pregnancy, especially in third trimester. Use with caution during breastfeeding - consult healthcare provider.',
      helpful_tips: [
        'Most effective when taken at first sign of pain',
        'Take with food to minimize stomach irritation',
        'Drink plenty of water while taking this medication'
      ],
      warnings_precautions: [
        'Do not use if allergic to aspirin or other NSAIDs',
        'Avoid if you have stomach ulcers or kidney problems',
        'May increase risk of heart attack or stroke with long-term use',
        'Do not combine with other NSAIDs'
      ],
      storage_instructions: [
        'Store at room temperature (15-30°C)',
        'Keep in original container',
        'Protect from light and moisture',
        'Keep out of reach of children'
      ],
      more_information: 'Ibuprofen is effective for both pain relief and inflammation reduction. It should be used at the lowest effective dose for the shortest duration necessary.'
    },
    category: 'Pain Relief',
    brand: 'Advil',
    inStock: true,
    stockCount: 67,
    originalPrice: 25.00,
    pharmacies: [
      { id: 2, name: 'Seif Pharmacy', location: 'Heliopolis', distance: '3.2 km', phone: '02-87654321', available: true },
      { id: 4, name: 'Pharmacy Plus', location: 'Maadi', distance: '4.8 km', phone: '02-55667788', available: true }
    ]
  },
  // Vitamins and Supplements
  {
    id: 4,
    name: 'Vitamin D3 1000IU',
    price: 45.00,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: {
      product_name: 'Vitamin D3 1000IU',
      scientific_name: 'Cholecalciferol 1000 International Units',
      belongs_to: 'Fat-Soluble Vitamins',
      mechanism_of_action: 'Converted to active hormone calcitriol in the body, which regulates calcium absorption and bone metabolism.',
      medical_uses: [
        'Prevention and treatment of vitamin D deficiency',
        'Bone health maintenance',
        'Immune system support',
        'Muscle function support',
        'Calcium absorption enhancement'
      ],
      usage_instructions: [
        'Adults: 1 tablet daily with food',
        'Take with a meal containing fat for better absorption',
        'Preferably taken in the morning',
        'Continue as recommended by healthcare provider'
      ],
      side_effects: [
        'Generally well tolerated',
        'Nausea (with high doses)',
        'Constipation (rare)',
        'Kidney stones (with excessive doses)'
      ],
      pregnancy_breastfeeding: 'Safe during pregnancy and breastfeeding when used as directed. Consult healthcare provider for appropriate dosing.',
      helpful_tips: [
        'Take with fatty meal for optimal absorption',
        'Regular sun exposure also helps vitamin D production',
        'Blood tests can monitor vitamin D levels'
      ],
      warnings_precautions: [
        'Do not exceed recommended dose',
        'Consult doctor if you have kidney problems',
        'May interact with certain medications',
        'Monitor calcium levels with long-term high-dose use'
      ],
      storage_instructions: [
        'Store in a cool, dry place',
        'Keep away from direct sunlight',
        'Store below 25°C',
        'Keep container tightly closed'
      ],
      more_information: 'Vitamin D3 is essential for bone health and immune function. Many people have insufficient vitamin D levels, especially those with limited sun exposure.'
    },
    category: 'Vitamins',
    brand: 'VitaHealth',
    inStock: true,
    stockCount: 156,
    originalPrice: 50.00,
    pharmacies: [
      { id: 1, name: 'Al Ezaby Pharmacy', location: 'Nasr City', distance: '2.5 km', phone: '02-12345678', available: true },
      { id: 2, name: 'Seif Pharmacy', location: 'Heliopolis', distance: '3.2 km', phone: '02-87654321', available: true },
      { id: 3, name: 'Dr. Care Pharmacy', location: 'New Cairo', distance: '5.1 km', phone: '02-11223344', available: true }
    ]
  },
  {
    id: 5,
    name: 'Omega-3 Fish Oil',
    price: 65.00,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: {
      product_name: 'Omega-3 Fish Oil 1000mg',
      scientific_name: 'EPA 300mg + DHA 200mg per capsule',
      belongs_to: 'Essential Fatty Acid Supplements',
      mechanism_of_action: 'EPA and DHA support cardiovascular health, brain function, and have anti-inflammatory properties.',
      medical_uses: [
        'Cardiovascular health support',
        'Brain and cognitive function',
        'Joint health and inflammation reduction',
        'Eye health support',
        'Mood and mental health support'
      ],
      usage_instructions: [
        'Adults: 1-2 capsules daily with meals',
        'Take with food to improve absorption and reduce fishy aftertaste',
        'Swallow whole with water',
        'Can be taken at any time of day'
      ],
      side_effects: [
        'Fishy aftertaste or burping',
        'Mild stomach upset',
        'Loose stools (with high doses)',
        'Allergic reactions (rare, in fish-allergic individuals)'
      ],
      pregnancy_breastfeeding: 'Generally safe during pregnancy and breastfeeding. Consult healthcare provider for appropriate dosing.',
      helpful_tips: [
        'Store in refrigerator to maintain freshness',
        'Take with meals to reduce fishy aftertaste',
        'Look for third-party tested products for purity'
      ],
      warnings_precautions: [
        'Consult doctor if taking blood-thinning medications',
        'May increase bleeding risk at high doses',
        'Avoid if allergic to fish',
        'Choose reputable brands to avoid contaminants'
      ],
      storage_instructions: [
        'Store in refrigerator after opening',
        'Keep in original container',
        'Protect from heat and light',
        'Use within expiry date'
      ],
      more_information: 'Omega-3 fatty acids are essential nutrients that support heart, brain, and overall health. Regular intake is recommended as part of a healthy diet.'
    },
    category: 'Supplements',
    brand: 'OceanHealth',
    inStock: false,
    stockCount: 0,
    originalPrice: 70.00,
    pharmacies: [
      { id: 2, name: 'Seif Pharmacy', location: 'Heliopolis', distance: '3.2 km', phone: '02-87654321', available: false },
      { id: 4, name: 'Pharmacy Plus', location: 'Maadi', distance: '4.8 km', phone: '02-55667788', available: false }
    ]
  },
  // Cold and Flu Medications
  {
    id: 6,
    name: 'Cold & Flu Relief',
    price: 32.00,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: {
      product_name: 'Cold & Flu Relief Tablets',
      scientific_name: 'Paracetamol 500mg + Phenylephrine 5mg + Chlorpheniramine 2mg',
      belongs_to: 'Cold and Flu Preparations',
      mechanism_of_action: 'Combination of analgesic/antipyretic (paracetamol), decongestant (phenylephrine), and antihistamine (chlorpheniramine) for comprehensive symptom relief.',
      medical_uses: [
        'Relief of cold and flu symptoms',
        'Fever reduction',
        'Nasal congestion relief',
        'Runny nose and sneezing',
        'Headache and body aches'
      ],
      usage_instructions: [
        'Adults and children over 12: 1-2 tablets every 4-6 hours',
        'Maximum 8 tablets in 24 hours',
        'Take with water, with or without food',
        'Do not use for more than 7 days without consulting doctor'
      ],
      side_effects: [
        'Drowsiness',
        'Dry mouth',
        'Nausea',
        'Dizziness',
        'Difficulty sleeping',
        'Increased heart rate (rare)'
      ],
      pregnancy_breastfeeding: 'Consult healthcare provider before use during pregnancy or breastfeeding. Some ingredients may not be suitable.',
      helpful_tips: [
        'May cause drowsiness - avoid driving',
        'Drink plenty of fluids while taking',
        'Rest is important for recovery'
      ],
      warnings_precautions: [
        'Do not exceed recommended dose',
        'Avoid alcohol while taking this medication',
        'May cause drowsiness - avoid driving or operating machinery',
        'Not suitable for children under 12 years',
        'Consult doctor if symptoms worsen or persist'
      ],
      storage_instructions: [
        'Store in a cool, dry place below 25°C',
        'Keep out of reach of children',
        'Store in original packaging',
        'Do not use after expiry date'
      ],
      more_information: 'Multi-symptom cold and flu relief combining three active ingredients for comprehensive symptom management. Use only as needed for symptom relief.'
    },
    category: 'Cold & Flu',
    brand: 'ColdCare',
    inStock: true,
    stockCount: 78,
    originalPrice: 35.00,
    pharmacies: [
      { id: 1, name: 'Al Ezaby Pharmacy', location: 'Nasr City', distance: '2.5 km', phone: '02-12345678', available: true },
      { id: 3, name: 'Dr. Care Pharmacy', location: 'New Cairo', distance: '5.1 km', phone: '02-11223344', available: true }
    ]
  },
  // Digestive Health
  {
    id: 7,
    name: 'Antacid Tablets',
    price: 18.00,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: {
      product_name: 'Antacid Tablets',
      scientific_name: 'Calcium Carbonate 500mg + Magnesium Hydroxide 200mg',
      belongs_to: 'Antacids',
      mechanism_of_action: 'Neutralizes excess stomach acid by buffering gastric pH, providing rapid relief from acid-related symptoms.',
      medical_uses: [
        'Heartburn relief',
        'Acid indigestion',
        'Sour stomach',
        'Upset stomach due to acid',
        'Gastric hyperacidity'
      ],
      usage_instructions: [
        'Adults: 1-2 tablets as needed',
        'Chew thoroughly before swallowing',
        'Take 1 hour after meals and at bedtime',
        'Maximum 12 tablets in 24 hours'
      ],
      side_effects: [
        'Constipation (calcium carbonate)',
        'Diarrhea (magnesium hydroxide)',
        'Chalky taste',
        'Stomach cramps (rare)'
      ],
      pregnancy_breastfeeding: 'Generally safe during pregnancy and breastfeeding when used occasionally. Consult healthcare provider for regular use.',
      helpful_tips: [
        'Chew tablets thoroughly for best effect',
        'Take between meals for optimal acid neutralization',
        'Drink water after taking to help swallowing'
      ],
      warnings_precautions: [
        'Do not use for more than 2 weeks without consulting doctor',
        'May interact with other medications - separate dosing by 2 hours',
        'Consult doctor if symptoms persist',
        'Not suitable for children under 12 without medical advice'
      ],
      storage_instructions: [
        'Store at room temperature',
        'Keep in dry place',
        'Protect from moisture',
        'Keep container tightly closed'
      ],
      more_information: 'Fast-acting antacid providing quick relief from heartburn and acid indigestion. Combination formula balances effectiveness with tolerability.'
    },
    category: 'Digestive Health',
    brand: 'DigestEase',
    inStock: true,
    stockCount: 92,
    originalPrice: 20.00,
    pharmacies: [
      { id: 2, name: 'Seif Pharmacy', location: 'Heliopolis', distance: '3.2 km', phone: '02-87654321', available: true },
      { id: 4, name: 'Pharmacy Plus', location: 'Maadi', distance: '4.8 km', phone: '02-55667788', available: true }
    ]
  },
  // Skin Care
  {
    id: 8,
    name: 'Hydrocortisone Cream 1%',
    price: 28.00,
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: {
      product_name: 'Hydrocortisone Cream 1%',
      scientific_name: 'Hydrocortisone 1% w/w',
      belongs_to: 'Topical Corticosteroids',
      mechanism_of_action: 'Mild topical corticosteroid that reduces inflammation, itching, and redness by suppressing local immune responses.',
      medical_uses: [
        'Eczema and dermatitis',
        'Insect bite reactions',
        'Minor skin irritations',
        'Allergic skin reactions',
        'Itching and inflammation'
      ],
      usage_instructions: [
        'Apply thin layer to affected area 2-3 times daily',
        'Gently rub in until absorbed',
        'Wash hands after application (unless treating hands)',
        'Use for maximum 7 days without medical supervision'
      ],
      side_effects: [
        'Skin thinning (with prolonged use)',
        'Burning or stinging sensation',
        'Skin discoloration',
        'Increased hair growth at application site (rare)'
      ],
      pregnancy_breastfeeding: 'Safe for short-term use during pregnancy and breastfeeding. Avoid application to breast area during breastfeeding.',
      helpful_tips: [
        'Use sparingly - a little goes a long way',
        'Do not use on broken or infected skin',
        'Avoid contact with eyes'
      ],
      warnings_precautions: [
        'For external use only',
        'Do not use on face for more than 5 days',
        'Avoid prolonged use to prevent skin thinning',
        'Do not use on infected skin without antibiotic treatment'
      ],
      storage_instructions: [
        'Store below 25°C',
        'Do not freeze',
        'Keep tube tightly closed',
        'Keep out of reach of children'
      ],
      more_information: 'Mild topical steroid suitable for treating various inflammatory skin conditions. Should be used for short periods to minimize side effects.'
    },
    category: 'Skin Care',
    brand: 'DermaCare',
    inStock: true,
    stockCount: 34,
    originalPrice: 32.00,
    pharmacies: [
      { id: 1, name: 'Al Ezaby Pharmacy', location: 'Nasr City', distance: '2.5 km', phone: '02-12345678', available: true },
      { id: 3, name: 'Dr. Care Pharmacy', location: 'New Cairo', distance: '5.1 km', phone: '02-11223344', available: true }
    ]
  },
  // Add more products to test pagination
  ...Array.from({ length: 17 }, (_, i) => ({
    id: 9 + i,
    name: `Medicine ${9 + i}`,
    price: 20 + (i * 5),
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: {
      product_name: `Medicine ${9 + i}`,
      scientific_name: `Active Ingredient ${9 + i}`,
      belongs_to: ['Pain Relief', 'Vitamins', 'Supplements', 'Cold & Flu', 'Digestive Health'][i % 5],
      mechanism_of_action: `Mechanism of action for medicine ${9 + i}`,
      medical_uses: [`Medical use 1 for medicine ${9 + i}`, `Medical use 2 for medicine ${9 + i}`],
      usage_instructions: [`Take as directed for medicine ${9 + i}`],
      side_effects: [`Possible side effect for medicine ${9 + i}`],
      pregnancy_breastfeeding: `Consult healthcare provider for medicine ${9 + i}`,
      helpful_tips: [`Helpful tip for medicine ${9 + i}`],
      warnings_precautions: [`Warning for medicine ${9 + i}`],
      storage_instructions: [`Store properly for medicine ${9 + i}`],
      more_information: `Additional information about medicine ${9 + i}`
    },
    category: ['Pain Relief', 'Vitamins', 'Supplements', 'Cold & Flu', 'Digestive Health'][i % 5],
    brand: ['GSK', 'VitaHealth', 'OceanHealth', 'ColdCare', 'DigestEase'][i % 5],
    inStock: Math.random() > 0.2,
    stockCount: 20 + i,
    originalPrice: 25 + (i * 5),
    pharmacies: [
      { id: 1, name: 'Al Ezaby Pharmacy', location: 'Nasr City', distance: '2.5 km', phone: '02-12345678', available: Math.random() > 0.3 },
      { id: 2, name: 'Seif Pharmacy', location: 'Heliopolis', distance: '3.2 km', phone: '02-87654321', available: Math.random() > 0.3 }
    ]
  }))
];

// Categories for filtering
export const categories = [
  {
    id: 'pain-relief',
    name: 'Pain Relief',
    description: 'Medications for pain management and fever reduction.',
    icon: 'pill'
  },
  {
    id: 'vitamins',
    name: 'Vitamins & Supplements',
    description: 'Essential vitamins and nutritional supplements for health.',
    icon: 'sun'
  },
  {
    id: 'cold-flu',
    name: 'Cold & Flu',
    description: 'Treatments for cold, flu, and respiratory symptoms.',
    icon: 'thermometer'
  },
  {
    id: 'digestive-health',
    name: 'Digestive Health',
    description: 'Medications for digestive and stomach-related issues.',
    icon: 'stomach'
  },
  {
    id: 'skin-care',
    name: 'Skin Care',
    description: 'Topical treatments for skin conditions and care.',
    icon: 'droplet'
  }
];