# Anu Food Point Hotel 🍗👑
> **Authentic Royal Flavors, Signature Non-Veg Dum Delicacies & Modern Cloud Kitchen**

An official, responsive front-end website for **Anu Food Point Hotel** — built with modern web technologies, 3D interactive card flip animations, Amazon-style verified customer reviews, dynamic shopping basket drawer, and a dedicated Store Owner Admin Portal.

---

## 🌟 Key Features

### 1. High-End, Tasteful & Official Aesthetic
- **Executive Dark & Amber Gold Palette:** Designed for premium culinary branding without tacky or excessive distractions.
- **Micro-Animations & Smooth 3D Flips:** CSS 3D transforms (`preserve-3d`, `rotateY(180deg)`) allow users to flip any dish card smoothly to read culinary stories and reviews.
- **100% Mobile Touch Friendly:** Sticky header, quick category pills, mobile drawer menu, and mobile bottom navigation bar.

### 2. Interactive Product Catalog with 3D Flip & Amazon Reviews
- **Front Face:**
  - High quality food photography with fallbacks.
  - Dietary indicator (Veg green dot / Non-Veg red dot).
  - Spice level indicators and special badges (*Bestseller*, *Chef's Special*, *Royal Classic*).
  - Price, discount percentage, and serving size details.
  - Direct **"+ Add to Cart"** and **"Flip Details 🔄"** triggers.
- **Back Face (Amazon-Style Customer Reviews & Culinary Story):**
  - Cooking method, calories, preparation time, and authentic spice story.
  - Verified Buyer reviews with names, star ratings, review dates, and helpful counts.
  - Direct ordering button right from the back face.

### 3. Smart Shopping Cart & Automated Checkout
- **Slide-Over Basket Drawer:** Floating bag trigger with live item counter badge.
- **Quantity Adjuster:** Add, subtract, or remove items in real-time.
- **Free Delivery Tracker:** Dynamic progress bar calculating remaining amount needed for free delivery.
- **Promo Coupon System:** Built-in `ROYAL20` coupon applying a flat 20% discount.
- **Order Placement Flow:**
  - Modal with Name, Mobile Phone, Address, Order Type (Delivery vs. Takeaway), and Payment Method (COD vs. UPI).
  - Generates authentic order tracking ID (e.g. `#ANU-82910`).
  - **Direct WhatsApp Order Integration:** Automatically formats the cart into an instant WhatsApp message prefilled with dish items, notes, address, and total payable amount.

### 4. Built-in Store Owner Admin Portal
- Accessible via the **"Admin Portal"** button in navbar, banner, or footer.
- **Menu Management:**
  - View full catalog with category, price, spice level, and stock status.
  - Toggle items **In Stock / Out of Stock** with one click.
  - Delete items or reset to default authentic catalog.
- **Add New Product Form:**
  - Create dishes dynamically: name, category, price, diet (veg/non-veg), badge, spice level, serving size, and image (with 6 one-click high-res presets).
- **Incoming Orders Monitor:**
  - View orders placed by visitors in real time.
  - Update live status (*Received* → *Cooking in Kitchen* → *Out for Delivery* → *Delivered*).
  - WhatsApp ping customer button.
- **Store Analytics:**
  - Real-time gross sales counter, order volume, catalog size, and category distribution.
- **Persistent Data:**
  - All additions, edits, and simulated orders are safely stored in browser `localStorage`.

---

## 🗂️ Project Structure

```text
anu-food-point/
├── index.html        # Main semantic, accessible front-end application
├── css/
│   └── styles.css    # Modern custom CSS with 3D flip mechanics, variables, and responsive layout
├── js/
│   ├── data.js       # Default non-veg & veg culinary catalog with Amazon-style reviews
│   ├── admin.js      # Hotel inventory, item creator, order tracker & analytics controller
│   └── app.js        # Cart management, filters, checkout & WhatsApp integration
└── README.md         # Documentation & setup guide
```

---

## 🚀 How to Run

Open `index.html` in any modern web browser or serve locally.
