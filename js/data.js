/**
 * Anu Food Point Hotel - Initial Menu Dataset & Amazon-Style Reviews
 * High-End Culinary Catalog with authentic non-veg items, tags, and ratings
 */

const DEFAULT_PRODUCTS = [
  {
    id: "anu-001",
    name: "Hyderabadi Chicken Dum Biryani",
    category: "biryani",
    diet: "non-veg",
    price: 290,
    origPrice: 350,
    rating: 4.9,
    reviewsCount: 1420,
    badge: "Bestseller",
    spice: "Spicy",
    serving: "Serves 1-2 (600g)",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    description: "Royal aged Daawat basmati rice slow-cooked with fresh tender farm chicken marinated overnight in Kashmiri saffron, golden fried onions (birista), fresh mint, and pure cow ghee sealed with dough in a clay handi.",
    prepTime: "Slow cooked 4 Hours",
    calories: "680 kcal",
    highlights: ["100% Halal Fresh Cut", "Clay Handi Dum", "Includes Mirchi Ka Salan & Raita"],
    active: true,
    amazonReviews: [
      {
        user: "Rohit Deshmukh",
        verified: true,
        rating: 5,
        date: "3 days ago",
        comment: "Unbelievable aroma the moment I unsealed the box! Distinct rice grains, juicy large chicken cuts with authentic saffron dum flavor. Far better than typical commercial biryani chains.",
        helpful: 124
      },
      {
        user: "Ananya Iyer",
        verified: true,
        rating: 5,
        date: "Last week",
        comment: "The chicken was soft, succulent, and well spiced without being oily. The Salan provided was rich with sesame and peanut paste. A 10/10 hotel biryani experience.",
        helpful: 89
      }
    ]
  },
  {
    id: "anu-002",
    name: "Tandoori Murgh (Full Roast)",
    category: "starters",
    diet: "non-veg",
    price: 440,
    origPrice: 520,
    rating: 4.8,
    reviewsCount: 980,
    badge: "Chef's Special",
    spice: "Medium",
    serving: "Serves 3-4 (Full Chicken)",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80",
    description: "Full tender spring chicken marinated in hung curd, Deghi mirch, smoked mustard oil, and freshly pounded garam masala, skewered and roasted to perfection in our charcoal clay oven.",
    prepTime: "Charcoal Oven 25 Mins",
    calories: "820 kcal",
    highlights: ["Charcoal Smoked", "Bone-in Juicy Cuts", "Served with Mint Chutney & Laccha Salad"],
    active: true,
    amazonReviews: [
      {
        user: "Capt. Sameer Varma",
        verified: true,
        rating: 5,
        date: "5 days ago",
        comment: "Crispy charred skin on the outside, steaming juicy tender meat inside. The marinade penetrates deep to the bone. Exceptional value!",
        helpful: 92
      },
      {
        user: "Deepak S.",
        verified: true,
        rating: 4,
        date: "2 weeks ago",
        comment: "Smoky flavour is authentic. Portions are generous. Best accompanied with roomali or butter naan.",
        helpful: 45
      }
    ]
  },
  {
    id: "anu-003",
    name: "Royal Mutton Rogan Josh",
    category: "curries",
    diet: "non-veg",
    price: 410,
    origPrice: 480,
    rating: 4.9,
    reviewsCount: 760,
    badge: "Royal Classic",
    spice: "Medium",
    serving: "Serves 2 (450g)",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    description: "Signature Kashmiri mutton curry cooked with tender baby goat pieces in an aromatic gravy infused with Ratanjot, fennel seeds, dry ginger, and slow-cooked caramelized onions.",
    prepTime: "Braised 3.5 Hours",
    calories: "590 kcal",
    highlights: ["Select Prime Goat Cuts", "Rich Velvety Gravy", "Mildly Spiced with Kashmiri Chili"],
    active: true,
    amazonReviews: [
      {
        user: "Dr. Arvind Hegde",
        verified: true,
        rating: 5,
        date: "Yesterday",
        comment: "Mutton melts in the mouth! The gravy has true Kashmiri heritage taste without unnecessary heavy starch. Absolute royal delicacy.",
        helpful: 81
      },
      {
        user: "Sneha Mukherjee",
        verified: true,
        rating: 5,
        date: "4 days ago",
        comment: "Ate it with butter garlic naan. The balance of fennel and aromatic whole spices is perfection.",
        helpful: 53
      }
    ]
  },
  {
    id: "anu-004",
    name: "Butter Chicken Delhi Style",
    category: "curries",
    diet: "non-veg",
    price: 330,
    origPrice: 380,
    rating: 4.8,
    reviewsCount: 1250,
    badge: "Bestseller",
    spice: "Mild",
    serving: "Serves 2 (500g)",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=80",
    description: "Charcoal-grilled chicken tikka simmered in a velvety makhani gravy enriched with ripe vine tomatoes, fresh dairy butter, cashew paste, and fragrant kasuri methi.",
    prepTime: "Simmered 45 Mins",
    calories: "620 kcal",
    highlights: ["100% Boneless Chicken Tikka", "Real Amul Butter Base", "Kid-Friendly Creamy Gravy"],
    active: true,
    amazonReviews: [
      {
        user: "Naveen Raj",
        verified: true,
        rating: 5,
        date: "2 days ago",
        comment: "Not overly sweet like many restaurants make it. This has the authentic balance of smokiness, tart tomatoes, and smooth butter creaminess.",
        helpful: 110
      }
    ]
  },
  {
    id: "anu-005",
    name: "Prawns Ghee Roast Mangalore Style",
    category: "seafood",
    diet: "non-veg",
    price: 460,
    origPrice: 540,
    rating: 4.9,
    reviewsCount: 510,
    badge: "Weekend Special",
    spice: "Spicy",
    serving: "Serves 1-2 (8-10 Jumbo Prawns)",
    image: "https://images.unsplash.com/photo-1559742811-822873691df8?w=800&auto=format&fit=crop&q=80",
    description: "Jumbo fresh sea prawns pan-roasted in generous desi ghee with a fiery ground Byadgi chili paste, tamarind pulp, curry leaves, and freshly toasted coriander seeds.",
    prepTime: "Pan-Seared 20 Mins",
    calories: "510 kcal",
    highlights: ["Fresh Coastal Catch", "Pure Desi Ghee", "Tangy & Fiery Coastal Flavor"],
    active: true,
    amazonReviews: [
      {
        user: "Karthik Shenoy",
        verified: true,
        rating: 5,
        date: "6 days ago",
        comment: "Being from Mangalore, I am very picky about ghee roasts. Anu Food Point nailed the Byadagi chili flavor and ghee aroma. Prawns were plump and juicy!",
        helpful: 67
      }
    ]
  },
  {
    id: "anu-006",
    name: "Chicken Seekh Kebab (Melt-in-Mouth)",
    category: "starters",
    diet: "non-veg",
    price: 310,
    origPrice: 360,
    rating: 4.7,
    reviewsCount: 640,
    badge: "Chef's Special",
    spice: "Medium",
    serving: "4 Juicy Long Skewers",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80",
    description: "Finely minced chicken spiced with green chilies, coriander stems, roasted cumin, and mace, pressed onto flat stainless steel skewers and grilled over hot coals.",
    prepTime: "Charcoal Grilled 18 Mins",
    calories: "430 kcal",
    highlights: ["Lean High Protein", "Juicy Minced Texture", "Includes Mint Yogurt Dip"],
    active: true,
    amazonReviews: [
      {
        user: "Manish Chawla",
        verified: true,
        rating: 5,
        date: "1 week ago",
        comment: "Incredibly soft and spiced to perfection. Rolled them inside roomali roti for the ultimate home roll.",
        helpful: 38
      }
    ]
  },
  {
    id: "anu-007",
    name: "Special Mutton Dum Biryani",
    category: "biryani",
    diet: "non-veg",
    price: 380,
    origPrice: 450,
    rating: 4.9,
    reviewsCount: 880,
    badge: "Bestseller",
    spice: "Spicy",
    serving: "Serves 1-2 (650g)",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    description: "Tender chunks of baby mutton cooked on slow fire with whole cloves, star anise, saffron water, and aged basmati rice in royal Awadhi style.",
    prepTime: "Dum Braised 5 Hours",
    calories: "740 kcal",
    highlights: ["Tender Bone-in Mutton", "Long Grain Rice", "Royal Feast Serving"],
    active: true,
    amazonReviews: [
      {
        user: "Tanmay Bansal",
        verified: true,
        rating: 5,
        date: "3 days ago",
        comment: "The mutton pieces had marrow intact and were fork tender. The rice was soaked in natural meat juices. Absolutely fantastic biryani.",
        helpful: 73
      }
    ]
  },
  {
    id: "anu-008",
    name: "Paneer Tikka Butter Masala (Veg Special)",
    category: "curries",
    diet: "veg",
    price: 270,
    origPrice: 320,
    rating: 4.7,
    reviewsCount: 520,
    badge: "",
    spice: "Medium",
    serving: "Serves 2 (450g)",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
    description: "Cubes of fresh malai paneer lightly charred in the clay oven, then immersed in a rich tomato, butter, and cashew nut gravy flavored with fenugreek.",
    prepTime: "Simmered 30 Mins",
    calories: "520 kcal",
    highlights: ["Fresh Dairy Paneer", "Vegetarian Favorite", "Creamy Rich Gravy"],
    active: true,
    amazonReviews: [
      {
        user: "Geeta R.",
        verified: true,
        rating: 5,
        date: "5 days ago",
        comment: "Paneer was super soft and sponge-like. Even non-veg lovers at our table enjoyed this gravy completely.",
        helpful: 29
      }
    ]
  },
  {
    id: "anu-009",
    name: "Butter Garlic Naan Basket",
    category: "breads",
    diet: "veg",
    price: 110,
    origPrice: 130,
    rating: 4.8,
    reviewsCount: 920,
    badge: "Royal Classic",
    spice: "Mild",
    serving: "3 Warm Soft Pieces",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&auto=format&fit=crop&q=80",
    description: "Traditional leavened flatbread slapped onto tandoor clay walls, baked to bubbling golden blisters, and generously brushed with garlic butter and fresh cilantro.",
    prepTime: "Fresh from Tandoor",
    calories: "310 kcal",
    highlights: ["Clay Oven Baked", "Loaded Garlic Butter", "Arrives Warm in Foil Wrap"],
    active: true,
    amazonReviews: [
      {
        user: "Kunal Mehra",
        verified: true,
        rating: 5,
        date: "Yesterday",
        comment: "Crispy edges, pillowy soft body, and fragrant garlic butter. Complements their mutton curries splendidly.",
        helpful: 41
      }
    ]
  },
  {
    id: "anu-010",
    name: "Shahi Matka Kheer & Gulab Jamun Duo",
    category: "desserts",
    diet: "veg",
    price: 140,
    origPrice: 170,
    rating: 4.9,
    reviewsCount: 430,
    badge: "Chef's Special",
    spice: "Mild",
    serving: "Serves 1-2 (2 Jamuns + 1 Matka Kheer)",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    description: "Creamy slow-reduced milk kheer infused with cardamom and pistachios in an earthen clay pot, accompanied by warm mawa gulab jamuns soaked in saffron sugar syrup.",
    prepTime: "Served Chilled/Warm",
    calories: "380 kcal",
    highlights: ["Clay Earthen Pot", "Real Pistachios & Almonds", "The Perfect Sweet Ending"],
    active: true,
    amazonReviews: [
      {
        user: "Shalini Trivedi",
        verified: true,
        rating: 5,
        date: "2 days ago",
        comment: "The kheer is velvety with genuine condensed milk consistency, and the gulab jamuns melt on contact. Outstanding dessert!",
        helpful: 52
      }
    ]
  }
];

// LocalStorage Persistence Keys
const STORAGE_KEYS = {
  PRODUCTS: "anu_hotel_products_v1",
  ORDERS: "anu_hotel_orders_v1",
  CART: "anu_hotel_cart_v1"
};

// Data service helpers
function getStoredProducts() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Error reading stored products:", e);
  }
  // Initialize with default
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(DEFAULT_PRODUCTS));
  return DEFAULT_PRODUCTS;
}

function saveProducts(products) {
  try {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  } catch (e) {
    console.error("Error saving products:", e);
  }
}

function getStoredOrders() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.ORDERS);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function saveOrder(order) {
  const orders = getStoredOrders();
  orders.unshift(order);
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  return orders;
}
