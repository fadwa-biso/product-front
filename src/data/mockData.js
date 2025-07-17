// Mock products data
export const allProducts = [
  // Cosmetics
  {
    id: 1,
    name: 'Moisturizing Face Cream',
    category: 'Cosmetics',
    price: 45.00,
    originalPrice: 50.00,
    brand: 'BeautyPro',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    stockCount: 25,
    description: 'Hydrating face cream for all skin types',
    longDescription: 'Advanced moisturizing face cream that provides deep hydration for all skin types. Enriched with natural ingredients to keep your skin soft and smooth.',
    activeIngredients: ['Hyaluronic Acid', 'Vitamin E', 'Aloe Vera'],
    dosage: 'Apply to clean face twice daily, morning and evening.',
    warnings: ['For external use only', 'Avoid contact with eyes', 'Discontinue if irritation occurs'],
    manufacturer: 'BeautyPro Cosmetics',
    expiryDate: '12/2025',
    pharmacies: [
      { id: 1, name: 'Al Ezaby Pharmacy', location: 'Nasr City', distance: '2.5 km', phone: '02-12345678', available: true },
      { id: 2, name: 'Seif Pharmacy', location: 'Heliopolis', distance: '3.2 km', phone: '02-87654321', available: true },
      { id: 3, name: 'Dr. Care Pharmacy', location: 'New Cairo', distance: '5.1 km', phone: '02-11223344', available: false }
    ]
  },
  {
    id: 2,
    name: 'Anti-Aging Serum',
    category: 'Cosmetics',
    price: 85.00,
    originalPrice: 95.00,
    brand: 'SkinCare Plus',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    stockCount: 15,
    description: 'Advanced anti-aging serum with retinol',
    longDescription: 'Powerful anti-aging serum formulated with retinol and peptides to reduce fine lines and improve skin texture.',
    activeIngredients: ['Retinol 0.5%', 'Peptides', 'Vitamin C'],
    dosage: 'Apply 2-3 drops to clean face before bedtime.',
    warnings: ['Use sunscreen during the day', 'Start with once weekly use', 'May cause initial dryness'],
    manufacturer: 'SkinCare Plus Labs',
    expiryDate: '08/2025',
    pharmacies: [
      { id: 1, name: 'Al Ezaby Pharmacy', location: 'Nasr City', distance: '2.5 km', phone: '02-12345678', available: true },
      { id: 4, name: 'Pharmacy Plus', location: 'Maadi', distance: '4.8 km', phone: '02-55667788', available: true }
    ]
  },
  {
    id: 3,
    name: 'Sunscreen SPF 50',
    category: 'Cosmetics',
    price: 35.00,
    originalPrice: 40.00,
    brand: 'SunGuard',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    stockCount: 40,
    description: 'Broad spectrum sun protection',
    longDescription: 'High-performance sunscreen providing broad spectrum protection against UVA and UVB rays.',
    activeIngredients: ['Zinc Oxide 20%', 'Titanium Dioxide 15%'],
    dosage: 'Apply generously 15 minutes before sun exposure. Reapply every 2 hours.',
    warnings: ['For external use only', 'Avoid contact with eyes', 'Water resistant for 80 minutes'],
    manufacturer: 'SunGuard Protection',
    expiryDate: '06/2026',
    pharmacies: [
      { id: 2, name: 'Seif Pharmacy', location: 'Heliopolis', distance: '3.2 km', phone: '02-87654321', available: true },
      { id: 3, name: 'Dr. Care Pharmacy', location: 'New Cairo', distance: '5.1 km', phone: '02-11223344', available: true },
      { id: 4, name: 'Pharmacy Plus', location: 'Maadi', distance: '4.8 km', phone: '02-55667788', available: true }
    ]
  },
  // Vitamins & Supplements
  {
    id: 4,
    name: 'Vitamin D3 1000IU',
    category: 'Vitamins',
    price: 25.00,
    originalPrice: 30.00,
    brand: 'VitaHealth',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    stockCount: 60,
    description: 'Essential vitamin D supplement',
    longDescription: 'High-quality Vitamin D3 supplement to support bone health, immune function, and overall wellness.',
    activeIngredients: ['Vitamin D3 (Cholecalciferol) 1000IU'],
    dosage: 'Take 1 tablet daily with food or as directed by healthcare professional.',
    warnings: ['Keep out of reach of children', 'Consult doctor if pregnant or nursing', 'Do not exceed recommended dose'],
    manufacturer: 'VitaHealth Supplements',
    expiryDate: '10/2025',
    pharmacies: [
      { id: 1, name: 'Al Ezaby Pharmacy', location: 'Nasr City', distance: '2.5 km', phone: '02-12345678', available: true },
      { id: 2, name: 'Seif Pharmacy', location: 'Heliopolis', distance: '3.2 km', phone: '02-87654321', available: true },
      { id: 3, name: 'Dr. Care Pharmacy', location: 'New Cairo', distance: '5.1 km', phone: '02-11223344', available: true },
      { id: 4, name: 'Pharmacy Plus', location: 'Maadi', distance: '4.8 km', phone: '02-55667788', available: false }
    ]
  },
  {
    id: 5,
    name: 'Omega-3 Fish Oil',
    category: 'Supplements',
    price: 55.00,
    originalPrice: 65.00,
    brand: 'OceanHealth',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    stockCount: 35,
    description: 'High-quality omega-3 supplement',
    longDescription: 'Premium omega-3 fish oil supplement rich in EPA and DHA for heart and brain health.',
    activeIngredients: ['EPA 300mg', 'DHA 200mg', 'Fish Oil 1000mg'],
    dosage: 'Take 2 capsules daily with meals.',
    warnings: ['Consult doctor if on blood thinners', 'Keep refrigerated after opening', 'May cause fishy aftertaste'],
    manufacturer: 'OceanHealth Marine',
    expiryDate: '09/2025',
    pharmacies: [
      { id: 2, name: 'Seif Pharmacy', location: 'Heliopolis', distance: '3.2 km', phone: '02-87654321', available: true },
      { id: 4, name: 'Pharmacy Plus', location: 'Maadi', distance: '4.8 km', phone: '02-55667788', available: true }
    ]
  },
  {
    id: 6,
    name: 'Multivitamin Complex',
    category: 'Vitamins',
    price: 40.00,
    originalPrice: 45.00,
    brand: 'VitaHealth',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    stockCount: 50,
    description: 'Complete daily vitamin complex',
    longDescription: 'Comprehensive multivitamin and mineral supplement providing essential nutrients for daily health.',
    activeIngredients: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'B-Complex', 'Iron', 'Calcium', 'Zinc'],
    dosage: 'Take 1 tablet daily with breakfast.',
    warnings: ['Contains iron - keep away from children', 'May cause stomach upset if taken on empty stomach'],
    manufacturer: 'VitaHealth Supplements',
    expiryDate: '11/2025',
    pharmacies: [
      { id: 1, name: 'Al Ezaby Pharmacy', location: 'Nasr City', distance: '2.5 km', phone: '02-12345678', available: true },
      { id: 3, name: 'Dr. Care Pharmacy', location: 'New Cairo', distance: '5.1 km', phone: '02-11223344', available: true }
    ]
  },
  // Personal Care
  {
    id: 7,
    name: 'Electric Toothbrush',
    category: 'Personal Care',
    price: 120.00,
    originalPrice: 140.00,
    brand: 'OralCare',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    stockCount: 20,
    description: 'Advanced electric toothbrush',
    longDescription: 'Professional electric toothbrush with multiple cleaning modes and smart timer for optimal oral care.',
    activeIngredients: ['N/A - Electronic Device'],
    dosage: 'Use twice daily for 2 minutes each time.',
    warnings: ['Replace brush head every 3 months', 'Not suitable for children under 3', 'Keep away from water when charging'],
    manufacturer: 'OralCare Technologies',
    expiryDate: 'N/A',
    pharmacies: [
      { id: 1, name: 'Al Ezaby Pharmacy', location: 'Nasr City', distance: '2.5 km', phone: '02-12345678', available: true },
      { id: 4, name: 'Pharmacy Plus', location: 'Maadi', distance: '4.8 km', phone: '02-55667788', available: true }
    ]
  },
  {
    id: 8,
    name: 'Hand Sanitizer 500ml',
    category: 'Personal Care',
    price: 15.00,
    originalPrice: 18.00,
    brand: 'CleanHands',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    stockCount: 100,
    description: '70% alcohol hand sanitizer',
    longDescription: 'Effective hand sanitizer with 70% alcohol content for killing 99.9% of germs and bacteria.',
    activeIngredients: ['Ethyl Alcohol 70%', 'Glycerin', 'Aloe Vera Extract'],
    dosage: 'Apply small amount to hands and rub until dry.',
    warnings: ['Flammable - keep away from heat', 'For external use only', 'Keep out of reach of children'],
    manufacturer: 'CleanHands Hygiene',
    expiryDate: '07/2026',
    pharmacies: [
      { id: 1, name: 'Al Ezaby Pharmacy', location: 'Nasr City', distance: '2.5 km', phone: '02-12345678', available: true },
      { id: 2, name: 'Seif Pharmacy', location: 'Heliopolis', distance: '3.2 km', phone: '02-87654321', available: true },
      { id: 3, name: 'Dr. Care Pharmacy', location: 'New Cairo', distance: '5.1 km', phone: '02-11223344', available: true },
      { id: 4, name: 'Pharmacy Plus', location: 'Maadi', distance: '4.8 km', phone: '02-55667788', available: true }
    ]
  },
  // Medical Devices
  {
    id: 9,
    name: 'Digital Thermometer',
    category: 'Medical Devices',
    price: 25.00,
    originalPrice: 30.00,
    brand: 'MedTech',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    stockCount: 45,
    description: 'Fast and accurate digital thermometer',
    longDescription: 'Professional digital thermometer with fast 10-second reading and fever alarm for accurate temperature monitoring.',
    activeIngredients: ['N/A - Electronic Device'],
    dosage: 'Place under tongue for oral reading or follow device instructions.',
    warnings: ['Clean before and after each use', 'Replace battery when low', 'Not waterproof'],
    manufacturer: 'MedTech Devices',
    expiryDate: 'N/A',
    pharmacies: [
      { id: 2, name: 'Seif Pharmacy', location: 'Heliopolis', distance: '3.2 km', phone: '02-87654321', available: true },
      { id: 3, name: 'Dr. Care Pharmacy', location: 'New Cairo', distance: '5.1 km', phone: '02-11223344', available: true }
    ]
  },
  {
    id: 10,
    name: 'Blood Pressure Monitor',
    category: 'Medical Devices',
    price: 85.00,
    originalPrice: 100.00,
    brand: 'HealthMonitor',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    stockCount: 30,
    description: 'Automatic blood pressure monitor',
    longDescription: 'Professional automatic blood pressure monitor with large display and memory storage for tracking readings.',
    activeIngredients: ['N/A - Electronic Device'],
    dosage: 'Follow device manual for proper usage and positioning.',
    warnings: ['Consult doctor for interpretation of readings', 'Ensure proper cuff size', 'Calibrate regularly'],
    manufacturer: 'HealthMonitor Systems',
    expiryDate: 'N/A',
    pharmacies: [
      { id: 1, name: 'Al Ezaby Pharmacy', location: 'Nasr City', distance: '2.5 km', phone: '02-12345678', available: false },
      { id: 3, name: 'Dr. Care Pharmacy', location: 'New Cairo', distance: '5.1 km', phone: '02-11223344', available: true },
      { id: 4, name: 'Pharmacy Plus', location: 'Maadi', distance: '4.8 km', phone: '02-55667788', available: true }
    ]
  },
  // Add more products to test pagination
  ...Array.from({ length: 15 }, (_, i) => ({
    id: 11 + i,
    name: `Product ${11 + i}`,
    category: ['Cosmetics', 'Vitamins', 'Supplements', 'Personal Care', 'Medical Devices'][i % 5],
    price: 20 + (i * 5),
    originalPrice: 25 + (i * 5),
    brand: ['BeautyPro', 'VitaHealth', 'OceanHealth', 'CleanHands', 'MedTech'][i % 5],
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    stockCount: 20 + i,
    description: `Description for product ${11 + i}`,
    longDescription: `Detailed description for product ${11 + i} with comprehensive information about its benefits and usage.`,
    activeIngredients: ['Active Ingredient 1', 'Active Ingredient 2'],
    dosage: 'Follow package instructions.',
    warnings: ['Keep out of reach of children', 'Consult healthcare professional'],
    manufacturer: `Manufacturer ${11 + i}`,
    expiryDate: '12/2025',
    pharmacies: [
      { id: 1, name: 'Al Ezaby Pharmacy', location: 'Nasr City', distance: '2.5 km', phone: '02-12345678', available: Math.random() > 0.3 },
      { id: 2, name: 'Seif Pharmacy', location: 'Heliopolis', distance: '3.2 km', phone: '02-87654321', available: Math.random() > 0.3 }
    ]
  }))
];

// Categories for filtering
export const categories = [
  {
    id: 'cosmetics',
    name: 'Cosmetics',
    description: 'Discover skincare and beauty products for your daily routine.',
    icon: 'sparkles'
  },
  {
    id: 'vitamins',
    name: 'Vitamins & Supplements',
    description: 'Boost your wellbeing with our selection of vitamins and supplements.',
    icon: 'sun'
  },
  {
    id: 'personal-care',
    name: 'Personal Care',
    description: 'Essential personal care items for your daily hygiene routine.',
    icon: 'heart'
  }
];