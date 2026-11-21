/**
 * Anu Food Point Hotel - Comprehensive Culinary Catalog & Amazon Quality Spec
 * Features: Pure Ingredient Molecules, Zero Preservatives, Verified Reviews, Macro Nutrition
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
    amazonChoice: "#1 Best Seller in Dum Biryani",
    spice: "Spicy",
    serving: "Serves 1-2 (600g)",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=900&auto=format&fit=crop&q=80",
    description: "Royal aged Daawat basmati rice slow-cooked with fresh tender farm chicken marinated overnight in Kashmiri saffron, golden fried onions (birista), fresh mint, and pure cow ghee sealed with dough in a clay handi.",
    prepTime: "Slow Dum Braised 4 Hours",
    calories: "680 kcal",
    highlights: ["100% Halal Fresh Cut", "Clay Handi Dum", "Includes Mirchi Ka Salan & Raita"],
    active: true,
    molecules: [
      {
        icon: "fa-leaf",
        title: "No Preservatives",
        desc: "100% authentic whole spices with zero artificial preservatives, zero MSG, and zero tenderizers."
      },
      {
        icon: "fa-certificate",
        title: "100% Halal Fresh Cut",
        desc: "Certified daily morning farm cuts. Never frozen, strictly fresh antibiotic-residue-free chicken."
      },
      {
        icon: "fa-droplet-slash",
        title: "Zero Artificial Colors",
        desc: "Warm golden saffron hues extracted purely from Pampore Kashmiri saffron threads."
      },
      {
        icon: "fa-fire-burner",
        title: "Clay Handi Dum",
        desc: "Traditional dough-sealed earthen pot cooking over charcoal embers that locks every aromatic vapor."
      },
      {
        icon: "fa-bottle-droplet",
        title: "Pure Cow Bilona Ghee",
        desc: "Tempered with aromatic golden cow ghee for authentic shahi fragrance and light digestion."
      },
      {
        icon: "fa-shield-halved",
        title: "Cooked Fresh to Order",
        desc: "Prepared fresh in hygienic hotel batches, sealed hot and delivered within 30 minutes."
      }
    ],
    ingredients: [
      "2-Year Aged Daawat Basmati Rice",
      "Farm-Fresh Halal Chicken (Tender Bone-in)",
      "Pampore Grade-1 Kashmiri Saffron",
      "Pure Cow Bilona Ghee",
      "Golden Crispy Fried Onions (Birista)",
      "Fresh Garden Pudina (Mint) & Dhaniya",
      "Whole Star Anise, Green Cardamom & Cloves",
      "Stone-Ground Shahi Garam Masala",
      "Fresh Thick Hung Curd Marinade"
    ],
    nutrition: {
      calories: "680 kcal",
      protein: "42g",
      carbs: "64g",
      fats: "22g",
      fiber: "4.5g",
      weight: "600g Portion"
    },
    ratingsBreakdown: {
      fiveStar: 87,
      fourStar: 10,
      threeStar: 2,
      twoStar: 1,
      oneStar: 0
    },
    amazonReviews: [
      {
        user: "Rohit Deshmukh",
        verified: true,
        rating: 5,
        date: "3 days ago",
        comment: "Unbelievable aroma the moment I unsealed the box! Distinct non-sticky rice grains, juicy chicken cuts soaked in saffron dum flavor. Far superior to commercial cloud kitchen chains.",
        helpful: 124
      },
      {
        user: "Ananya Iyer",
        verified: true,
        rating: 5,
        date: "Last week",
        comment: "The chicken was soft, succulent, and well spiced without being oily. The Salan provided was rich with sesame and roasted peanut paste. A 10/10 hotel biryani experience.",
        helpful: 89
      },
      {
        user: "Vikram Rathore",
        verified: true,
        rating: 5,
        date: "2 weeks ago",
        comment: "Clean ingredients make a real difference—no heaviness or artificial taste afterward. You can taste the genuine saffron and cow ghee.",
        helpful: 47
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
    amazonChoice: "Amazon's Choice in Tandoori Starters",
    spice: "Medium",
    serving: "Serves 3-4 (Full Chicken)",
    image: "https://images.unsplash.com/photo-1697155406147-7d640cbba0e7?w=900&auto=format&fit=crop&q=80",
    description: "Full tender spring chicken marinated in hung curd, Deghi mirch, smoked mustard oil, and freshly pounded garam masala, skewered and roasted to perfection in our charcoal clay oven.",
    prepTime: "Charcoal Oven 25 Mins",
    calories: "820 kcal",
    highlights: ["Charcoal Smoked", "Bone-in Juicy Cuts", "Served with Mint Chutney & Laccha Salad"],
    active: true,
    molecules: [
      {
        icon: "fa-leaf",
        title: "No Preservatives",
        desc: "Zero chemical tenderizers, artificial seasonings, or synthetic food colors."
      },
      {
        icon: "fa-certificate",
        title: "100% Halal Cuts",
        desc: "Whole prime young chicken marinated for 12 hours for deep marrow-level infusion."
      },
      {
        icon: "fa-droplet-slash",
        title: "Zero Artificial Red Color",
        desc: "Natural fiery red hue achieved through Kashmiri Deghi chillies and beetroot extract."
      },
      {
        icon: "fa-fire",
        title: "Real Charcoal Roast",
        desc: "Skewered inside clay tandoor fueled with real babool wood coal for smoky char."
      },
      {
        icon: "fa-seedling",
        title: "Cold-Pressed Mustard Oil",
        desc: "Traditional Kachi Ghani mustard oil adds the quintessential pungent smokiness."
      },
      {
        icon: "fa-shield-halved",
        title: "High Protein Feast",
        desc: "Packed with 84g of lean, grilled protein with zero excessive oil."
      }
    ],
    ingredients: [
      "Whole Halal Spring Chicken (850g-900g)",
      "Cold-Pressed Mustard Oil (Kachi Ghani)",
      "Kashmiri Deghi Mirch Powder",
      "Hand-Hung Whole Cow Milk Curd",
      "Roasted Kasuri Methi (Fenugreek Leaves)",
      "Fresh Ginger-Garlic Paste",
      "Black Salt & Royal Garam Masala",
      "Fresh Lemon Juice & Chaat Masala"
    ],
    nutrition: {
      calories: "820 kcal",
      protein: "84g",
      carbs: "12g",
      fats: "26g",
      fiber: "2g",
      weight: "Full Chicken (approx 850g)"
    },
    ratingsBreakdown: {
      fiveStar: 84,
      fourStar: 12,
      threeStar: 3,
      twoStar: 1,
      oneStar: 0
    },
    amazonReviews: [
      {
        user: "Capt. Sameer Varma",
        verified: true,
        rating: 5,
        date: "5 days ago",
        comment: "Crispy charred skin on the outside, steaming juicy tender meat inside. The marinade penetrates deep to the bone. Outstanding flavor without synthetic red food dye!",
        helpful: 92
      },
      {
        user: "Deepak S.",
        verified: true,
        rating: 4,
        date: "2 weeks ago",
        comment: "Smoky flavour is authentic. Portions are generous. Best accompanied with roomali or butter garlic naan.",
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
    amazonChoice: "#1 Best Seller in Mutton Curries",
    spice: "Medium",
    serving: "Serves 2 (450g)",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&auto=format&fit=crop&q=80",
    description: "Signature Kashmiri mutton curry cooked with tender baby goat pieces in an aromatic gravy infused with Ratanjot, fennel seeds, dry ginger, and slow-cooked caramelized onions.",
    prepTime: "Braised 3.5 Hours",
    calories: "590 kcal",
    highlights: ["Select Prime Goat Cuts", "Rich Velvety Gravy", "Mildly Spiced with Kashmiri Chili"],
    active: true,
    molecules: [
      {
        icon: "fa-leaf",
        title: "No Preservatives",
        desc: "Natural whole spices only. No preservatives, zero stabilizers, zero corn starch."
      },
      {
        icon: "fa-certificate",
        title: "100% Halal Prime Goat",
        desc: "Tender baby goat cuts slow braised until marrow seeps naturally into gravy."
      },
      {
        icon: "fa-mortar-pestle",
        title: "Natural Ratanjot Herb",
        desc: "Classic crimson Rogan color extracted from natural Himalayan cockscomb herb."
      },
      {
        icon: "fa-bowl-rice",
        title: "Hand-Crushed Saunf & Sonth",
        desc: "Infused with sweet Kashmiri fennel and dry ginger powder for easy digestion."
      }
    ],
    ingredients: [
      "Prime Cut Halal Baby Goat Meat",
      "Authentic Himalayan Ratanjot Bark",
      "Kashmiri Fennel Seed Powder (Saunf)",
      "Dry Ginger Powder (Sonth)",
      "Slow Caramelized Brown Onions",
      "Black Cardamom & Cinnamon Quills",
      "Fresh Dairy Curd Base",
      "Pure Cow Desi Ghee"
    ],
    nutrition: {
      calories: "590 kcal",
      protein: "48g",
      carbs: "18g",
      fats: "36g",
      fiber: "3g",
      weight: "450g Bowl"
    },
    ratingsBreakdown: {
      fiveStar: 89,
      fourStar: 9,
      threeStar: 1,
      twoStar: 1,
      oneStar: 0
    },
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
        comment: "Ate it with butter garlic naan. The balance of fennel and aromatic whole spices is sheer perfection.",
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
    amazonChoice: "Amazon's Choice in Gourmet Butter Chicken",
    spice: "Mild",
    serving: "Serves 2 (500g)",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900&auto=format&fit=crop&q=80",
    description: "Charcoal-grilled chicken tikka simmered in a velvety makhani gravy enriched with ripe vine tomatoes, fresh dairy butter, cashew paste, and fragrant kasuri methi.",
    prepTime: "Simmered 45 Mins",
    calories: "620 kcal",
    highlights: ["100% Boneless Chicken Tikka", "Real Amul Butter Base", "Kid-Friendly Creamy Gravy"],
    active: true,
    molecules: [
      {
        icon: "fa-leaf",
        title: "No Preservatives",
        desc: "Made from fresh ripe tomato puree and cashew nut butter. Zero canned additives."
      },
      {
        icon: "fa-certificate",
        title: "100% Halal Boneless Tikka",
        desc: "Succulent boneless chicken roasted in charcoal oven before dropping into gravy."
      },
      {
        icon: "fa-shield-halved",
        title: "Real Dairy Butter",
        desc: "Crafted with pure dairy butter and single cream, never hydrogenated vegetable fats."
      },
      {
        icon: "fa-feather",
        title: "Mild & Velvety",
        desc: "Gentle warmth with roasted fenugreek leaves, honey, and green cardamom."
      }
    ],
    ingredients: [
      "Boneless Halal Chicken Tikka Boti",
      "Vine-Ripened Tomato Reduction",
      "Pure Cultured Dairy Butter & Cream",
      "Stone-Ground Cashew Nut Puree",
      "Wild Himalayan Honey",
      "Roasted Kasuri Methi (Fenugreek)",
      "Degi Mirch & Green Cardamom"
    ],
    nutrition: {
      calories: "620 kcal",
      protein: "38g",
      carbs: "24g",
      fats: "42g",
      fiber: "3.5g",
      weight: "500g Bowl"
    },
    ratingsBreakdown: {
      fiveStar: 85,
      fourStar: 11,
      threeStar: 3,
      twoStar: 1,
      oneStar: 0
    },
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
    amazonChoice: "#1 Best Seller in Coastal Seafood",
    spice: "Spicy",
    serving: "Serves 1-2 (8-10 Jumbo Prawns)",
    image: "https://images.unsplash.com/photo-1559742811-822873691df8?w=900&auto=format&fit=crop&q=80",
    description: "Jumbo fresh sea prawns pan-roasted in generous desi ghee with a fiery ground Byadgi chili paste, tamarind pulp, curry leaves, and freshly toasted coriander seeds.",
    prepTime: "Pan-Seared 20 Mins",
    calories: "510 kcal",
    highlights: ["Fresh Coastal Catch", "Pure Desi Ghee", "Tangy & Fiery Coastal Flavor"],
    active: true,
    molecules: [
      {
        icon: "fa-leaf",
        title: "No Preservatives",
        desc: "Zero chemical preservatives, zero artificial tangy agents, zero artificial coloring."
      },
      {
        icon: "fa-fish",
        title: "Wild Coastal Catch",
        desc: "Locally sourced sea prawns de-veined and cleaned to the highest culinary hygiene standard."
      },
      {
        icon: "fa-pepper-hot",
        title: "Byadgi Chili Paste",
        desc: "Fresh stone-pounded Karnataka Byadgi chilies give dark red color and gentle smoke."
      },
      {
        icon: "fa-bottle-droplet",
        title: "Desi Ghee Roasted",
        desc: "Roasted in clarified butter until dry masala clings tightly to every succulent prawn."
      }
    ],
    ingredients: [
      "Fresh De-veined Jumbo Sea Prawns",
      "Pure Desi Cow Ghee (Bilona)",
      "Karnataka Byadgi & Guntur Chili Paste",
      "Natural Tamarind Pulp",
      "Fresh Coastal Curry Leaves",
      "Roasted Coriander & Cumin Seeds",
      "Crushed Garlic & Black Peppercorns"
    ],
    nutrition: {
      calories: "510 kcal",
      protein: "36g",
      carbs: "14g",
      fats: "34g",
      fiber: "2g",
      weight: "8-10 Jumbo Prawns"
    },
    ratingsBreakdown: {
      fiveStar: 91,
      fourStar: 7,
      threeStar: 2,
      twoStar: 0,
      oneStar: 0
    },
    amazonReviews: [
      {
        user: "Karthik Shenoy",
        verified: true,
        rating: 5,
        date: "6 days ago",
        comment: "Being from Mangalore, I am very picky about ghee roasts. Anu Food Point nailed the Byadgi chili flavor and ghee aroma. Prawns were plump and juicy!",
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
    amazonChoice: "Amazon's Choice in Kebabs & Starters",
    spice: "Medium",
    serving: "4 Juicy Long Skewers",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&auto=format&fit=crop&q=80",
    description: "Finely minced chicken spiced with green chilies, coriander stems, roasted cumin, and mace, pressed onto flat stainless steel skewers and grilled over hot coals.",
    prepTime: "Charcoal Grilled 18 Mins",
    calories: "430 kcal",
    highlights: ["Lean High Protein", "Juicy Minced Texture", "Includes Mint Yogurt Dip"],
    active: true,
    molecules: [
      {
        icon: "fa-leaf",
        title: "No Preservatives",
        desc: "Freshly ground chicken breast & thigh mix with zero synthetic bind agents or MSG."
      },
      {
        icon: "fa-certificate",
        title: "100% Halal Poultry",
        desc: "Certified daily cuts prepared with real aromatic herbs and roasted gram flour."
      },
      {
        icon: "fa-fire",
        title: "Coals Embers Skewered",
        desc: "Evenly rotated over coal embers for delicate char and locking natural juices."
      }
    ],
    ingredients: [
      "Halal Minced Chicken (Keema)",
      "Fresh Coriander Stems & Mint Leaves",
      "Finely Diced Green Chilies",
      "Roasted Chana Dal Powder (Sattu)",
      "Pounded Royal Mace (Javitri) & Nutmeg",
      "Fresh Ginger Extract & Lemon Zest"
    ],
    nutrition: {
      calories: "430 kcal",
      protein: "46g",
      carbs: "8g",
      fats: "22g",
      fiber: "1.5g",
      weight: "4 Large Skewers (approx 320g)"
    },
    ratingsBreakdown: {
      fiveStar: 82,
      fourStar: 14,
      threeStar: 3,
      twoStar: 1,
      oneStar: 0
    },
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
    amazonChoice: "#1 Best Seller in Mutton Dum Biryani",
    spice: "Spicy",
    serving: "Serves 1-2 (650g)",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=900&auto=format&fit=crop&q=80",
    description: "Tender chunks of baby mutton cooked on slow fire with whole cloves, star anise, saffron water, and aged basmati rice in royal Awadhi style.",
    prepTime: "Dum Braised 5 Hours",
    calories: "740 kcal",
    highlights: ["Tender Bone-in Mutton", "Long Grain Rice", "Royal Feast Serving"],
    active: true,
    molecules: [
      {
        icon: "fa-leaf",
        title: "No Preservatives",
        desc: "All natural ingredients slow-braised for 5 hours without artificial tenderizers."
      },
      {
        icon: "fa-certificate",
        title: "100% Halal Prime Goat",
        desc: "Fresh select cuts with marrow intact that gives deep authentic aroma."
      },
      {
        icon: "fa-bowl-food",
        title: "Aged Daawat Basmati",
        desc: "Extra-long grain basmati rice naturally aged for 24 months."
      },
      {
        icon: "fa-bottle-droplet",
        title: "Pure Cow Ghee Sealed",
        desc: "Dough seal retains natural moisture and meat juices throughout cooking."
      }
    ],
    ingredients: [
      "Select Prime Cut Halal Mutton",
      "2-Year Aged Long Grain Basmati",
      "Pure Cow Ghee",
      "Kashmiri Saffron Infusion",
      "Caramelized Onion Birista",
      "Royal Awadhi Potli Masala",
      "Fresh Mint & Coriander Leaves"
    ],
    nutrition: {
      calories: "740 kcal",
      protein: "52g",
      carbs: "68g",
      fats: "28g",
      fiber: "4g",
      weight: "650g Royal Serving"
    },
    ratingsBreakdown: {
      fiveStar: 88,
      fourStar: 9,
      threeStar: 2,
      twoStar: 1,
      oneStar: 0
    },
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
    badge: "Vegetarian Choice",
    amazonChoice: "Amazon's Choice in Gourmet Vegetarian",
    spice: "Medium",
    serving: "Serves 2 (450g)",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=900&auto=format&fit=crop&q=80",
    description: "Cubes of fresh malai paneer lightly charred in the clay oven, then immersed in a rich tomato, butter, and cashew nut gravy flavored with fenugreek.",
    prepTime: "Simmered 30 Mins",
    calories: "520 kcal",
    highlights: ["Fresh Dairy Paneer", "Vegetarian Favorite", "Creamy Rich Gravy"],
    active: true,
    molecules: [
      {
        icon: "fa-leaf",
        title: "No Preservatives",
        desc: "100% natural vegetarian curry with fresh dairy and zero synthetic thickeners."
      },
      {
        icon: "fa-cheese",
        title: "Fresh Malai Paneer",
        desc: "Made from fresh whole buffalo milk curd, super soft and sponge-like."
      },
      {
        icon: "fa-fire",
        title: "Clay Oven Charred",
        desc: "Paneer cubes skewered with bell peppers and tandoor-roasted before gravying."
      }
    ],
    ingredients: [
      "Fresh Artisan Malai Paneer",
      "Vine Tomato Reduction",
      "Churned Cow Butter & Cream",
      "Cashew Nut Paste",
      "Roasted Fenugreek Leaves (Kasuri Methi)",
      "Charred Green Capsicum & Red Onions"
    ],
    nutrition: {
      calories: "520 kcal",
      protein: "22g",
      carbs: "20g",
      fats: "38g",
      fiber: "3g",
      weight: "450g Bowl"
    },
    ratingsBreakdown: {
      fiveStar: 83,
      fourStar: 13,
      threeStar: 3,
      twoStar: 1,
      oneStar: 0
    },
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
    amazonChoice: "Amazon's Choice in Tandoori Breads",
    spice: "Mild",
    serving: "3 Warm Soft Pieces",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=900&auto=format&fit=crop&q=80",
    description: "Traditional leavened flatbread slapped onto tandoor clay walls, baked to bubbling golden blisters, and generously brushed with garlic butter and fresh cilantro.",
    prepTime: "Fresh from Tandoor",
    calories: "310 kcal",
    highlights: ["Clay Oven Baked", "Loaded Garlic Butter", "Arrives Warm in Foil Wrap"],
    active: true,
    molecules: [
      {
        icon: "fa-leaf",
        title: "No Preservatives",
        desc: "Naturally fermented flour dough baked fresh on demand with zero chemical leaveners."
      },
      {
        icon: "fa-fire",
        title: "Tandoor Blistered",
        desc: "Baked on authentic clay tandoor walls at 400°C for airy, smoky perfection."
      },
      {
        icon: "fa-shield-halved",
        title: "Real Butter Glaze",
        desc: "Brushed with garlic-infused melted butter and fresh organic cilantro."
      }
    ],
    ingredients: [
      "Select Wheat & Enriched Flour",
      "Pure Cow Milk & Yogurt Ferment",
      "Roasted Minced Mountain Garlic",
      "Churned Table Butter Glaze",
      "Fresh Chopped Cilantro (Dhaniya)"
    ],
    nutrition: {
      calories: "310 kcal",
      protein: "8g",
      carbs: "46g",
      fats: "11g",
      fiber: "2g",
      weight: "3 Pieces (approx 240g)"
    },
    ratingsBreakdown: {
      fiveStar: 86,
      fourStar: 11,
      threeStar: 2,
      twoStar: 1,
      oneStar: 0
    },
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
    amazonChoice: "Hotel Signature Dessert",
    spice: "Mild",
    serving: "Serves 1-2 (2 Jamuns + 1 Matka Kheer)",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=900&auto=format&fit=crop&q=80",
    description: "Creamy slow-reduced milk kheer infused with cardamom and pistachios in an earthen clay pot, accompanied by warm mawa gulab jamuns soaked in saffron sugar syrup.",
    prepTime: "Served Chilled/Warm",
    calories: "380 kcal",
    highlights: ["Clay Earthen Pot", "Real Pistachios & Almonds", "The Perfect Sweet Ending"],
    active: true,
    molecules: [
      {
        icon: "fa-leaf",
        title: "No Preservatives",
        desc: "100% natural milk reduction with zero artificial essence or synthetic thickeners."
      },
      {
        icon: "fa-jar",
        title: "Earthen Clay Matka",
        desc: "Served in unglazed earthen pottery that imparts a distinct earthy fragrance."
      },
      {
        icon: "fa-sparkles",
        title: "Pure Saffron & Nuts",
        desc: "Topped with sliced Iranian pistachios, mamra almonds, and real saffron strands."
      }
    ],
    ingredients: [
      "Slow-Reduced Whole Buffalo Milk",
      "Short-Grain Gobindobhog Rice",
      "Fresh Khoya / Mawa Jamuns",
      "Kashmiri Saffron Threads",
      "Green Cardamom & Rose Water",
      "Sliced Pistachios & Almonds"
    ],
    nutrition: {
      calories: "380 kcal",
      protein: "9g",
      carbs: "54g",
      fats: "14g",
      fiber: "1g",
      weight: "1 Matka (180g) + 2 Jamuns"
    },
    ratingsBreakdown: {
      fiveStar: 92,
      fourStar: 6,
      threeStar: 2,
      twoStar: 0,
      oneStar: 0
    },
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
  PRODUCTS: "anu_hotel_products_v6",
  ORDERS: "anu_hotel_orders_v1",
  CART: "anu_hotel_cart_v1"
};

// Data service helpers with automatic migration and healing
function getStoredProducts() {
  try {
    // Clear out old storage keys that had external or outdated paths
    ["anu_hotel_products_v1", "anu_hotel_products_v2", "anu_hotel_products_v3", "anu_hotel_products_v4", "anu_hotel_products_v5"].forEach(k => {
      if (localStorage.getItem(k)) localStorage.removeItem(k);
    });

    const data = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Auto-heal any stale or fish image in cached products
        let modified = false;
        parsed.forEach(p => {
          if (p.image && (p.image.includes("1599488615731-7e5c2823ff28") || p.image.startsWith("images/"))) {
            const def = DEFAULT_PRODUCTS.find(d => d.id === p.id);
            if (def) {
              p.image = def.image;
              modified = true;
            }
          }
        });
        if (modified) saveProducts(parsed);
        return parsed;
      }
    }
  } catch (e) {
    console.error("Error reading stored products:", e);
  }
  // Initialize with upgraded defaults
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
