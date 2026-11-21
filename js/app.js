/**
 * Anu Food Point Hotel - Main Client Controller
 * 3D Card Flip Mechanics, Amazon-Style Review Expansions, Cart Drawer, Checkout, WhatsApp Order
 */

const AppController = {
  products: [],
  cart: [],
  activeCategory: "all",
  activeDiet: "all",
  searchQuery: "",
  activeSort: "featured",
  appliedCoupon: null,

  init() {
    this.cacheDom();
    this.loadCart();
    this.reloadProducts();
    this.bindEvents();
    this.initMobileNav();
  },

  cacheDom() {
    // Menu elements
    this.menuGrid = document.getElementById("menuGrid");
    this.noItemsState = document.getElementById("noItemsState");
    this.menuSearchInput = document.getElementById("menuSearchInput");
    this.clearSearchBtn = document.getElementById("clearSearchBtn");
    this.searchBoxWrap = document.querySelector(".search-box");
    this.dietButtons = document.querySelectorAll(".diet-btn");
    this.sortSelect = document.getElementById("sortSelect");
    this.categoryPills = document.querySelectorAll(".category-pill");
    this.resetFiltersBtn = document.getElementById("resetFiltersBtn");

    // Cart Drawer elements
    this.cartDrawer = document.getElementById("cartDrawer");
    this.cartToggleBtn = document.getElementById("cartToggleBtn");
    this.closeCartBtn = document.getElementById("closeCartBtn");
    this.backdrop = document.getElementById("backdrop");
    this.cartCount = document.getElementById("cartCount");
    this.cartHeaderCount = document.getElementById("cartHeaderCount");
    this.cartItemsList = document.getElementById("cartItemsList");
    this.cookingInstructions = document.getElementById("cookingInstructions");
    this.billSubtotal = document.getElementById("billSubtotal");
    this.billDelivery = document.getElementById("billDelivery");
    this.billTax = document.getElementById("billTax");
    this.billDiscount = document.getElementById("billDiscount");
    this.discountRow = document.getElementById("discountRow");
    this.billTotal = document.getElementById("billTotal");
    this.checkoutBtnTotal = document.getElementById("checkoutBtnTotal");
    this.promoInput = document.getElementById("promoInput");
    this.applyPromoBtn = document.getElementById("applyPromoBtn");
    this.promoFeedback = document.getElementById("promoFeedback");
    this.clearCartBtn = document.getElementById("clearCartBtn");
    this.freeDeliveryTracker = document.getElementById("freeDeliveryTracker");
    this.trackerText = document.getElementById("trackerText");
    this.trackerFill = document.getElementById("trackerFill");

    // Checkout Modal elements
    this.proceedCheckoutBtn = document.getElementById("proceedCheckoutBtn");
    this.checkoutModal = document.getElementById("checkoutModal");
    this.closeCheckoutBtn = document.getElementById("closeCheckoutBtn");
    this.checkoutForm = document.getElementById("checkoutForm");
    this.modalItemsCount = document.getElementById("modalItemsCount");
    this.modalPayableAmount = document.getElementById("modalPayableAmount");
    this.whatsAppOrderBtn = document.getElementById("whatsAppOrderBtn");

    // Success Modal elements
    this.orderSuccessModal = document.getElementById("orderSuccessModal");
    this.successOrderId = document.getElementById("successOrderId");
    this.successOrderDetails = document.getElementById("successOrderDetails");
    this.trackOrderCloseBtn = document.getElementById("trackOrderCloseBtn");
    this.successWhatsappBtn = document.getElementById("successWhatsappBtn");

    // Mobile elements
    this.mobileMenuBtn = document.getElementById("mobileMenuBtn");
    this.mobileDrawer = document.getElementById("mobileDrawer");
    this.closeDrawerBtn = document.getElementById("closeDrawerBtn");
    this.mobBottomCartBtn = document.getElementById("mobBottomCartBtn");
    this.mobBottomCartCount = document.getElementById("mobBottomCartCount");

    // Toast
    this.toastContainer = document.getElementById("toastContainer");

    // Hero buttons
    this.heroReviewsBtn = document.getElementById("heroReviewsBtn");
  },

  bindEvents() {
    // Search input
    if (this.menuSearchInput) {
      this.menuSearchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        if (this.searchBoxWrap) {
          this.searchBoxWrap.classList.toggle("has-val", this.searchQuery.length > 0);
        }
        this.renderMenu();
      });
    }

    if (this.clearSearchBtn) {
      this.clearSearchBtn.addEventListener("click", () => {
        this.menuSearchInput.value = "";
        this.searchQuery = "";
        this.searchBoxWrap.classList.remove("has-val");
        this.renderMenu();
      });
    }

    // Dietary filter
    this.dietButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        this.dietButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.activeDiet = btn.getAttribute("data-diet");
        this.renderMenu();
      });
    });

    // Category pills
    this.categoryPills.forEach(pill => {
      pill.addEventListener("click", () => {
        this.categoryPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.activeCategory = pill.getAttribute("data-category");
        this.renderMenu();
      });
    });

    // Sort select
    if (this.sortSelect) {
      this.sortSelect.addEventListener("change", (e) => {
        this.activeSort = e.target.value;
        this.renderMenu();
      });
    }

    // Reset filters button
    if (this.resetFiltersBtn) {
      this.resetFiltersBtn.addEventListener("click", () => {
        this.activeCategory = "all";
        this.activeDiet = "all";
        this.searchQuery = "";
        if (this.menuSearchInput) this.menuSearchInput.value = "";
        if (this.searchBoxWrap) this.searchBoxWrap.classList.remove("has-val");
        this.categoryPills.forEach(p => p.classList.toggle("active", p.getAttribute("data-category") === "all"));
        this.dietButtons.forEach(b => b.classList.toggle("active", b.getAttribute("data-diet") === "all"));
        this.renderMenu();
      });
    }

    // Cart drawer toggle
    if (this.cartToggleBtn) {
      this.cartToggleBtn.addEventListener("click", () => this.openCart());
    }
    if (this.closeCartBtn) {
      this.closeCartBtn.addEventListener("click", () => this.closeCart());
    }
    if (this.mobBottomCartBtn) {
      this.mobBottomCartBtn.addEventListener("click", () => this.openCart());
    }

    // Backdrop click
    if (this.backdrop) {
      this.backdrop.addEventListener("click", () => {
        this.closeCart();
        this.closeCheckout();
        this.closeSuccessModal();
        this.closeMobileDrawer();
        AdminController.closeModal();
      });
    }

    // Apply Coupon
    if (this.applyPromoBtn) {
      this.applyPromoBtn.addEventListener("click", () => this.applyCoupon());
    }

    // Clear Cart
    if (this.clearCartBtn) {
      this.clearCartBtn.addEventListener("click", () => {
        if (this.cart.length > 0 && confirm("Empty your food basket?")) {
          this.cart = [];
          this.saveCart();
          this.updateCartUi();
          this.showToast("Basket cleared", "info");
        }
      });
    }

    // Proceed to checkout
    if (this.proceedCheckoutBtn) {
      this.proceedCheckoutBtn.addEventListener("click", () => {
        if (this.cart.length === 0) {
          this.showToast("Your cart is empty! Add some delicious dishes first.", "error");
          return;
        }
        this.openCheckout();
      });
    }

    // Close checkout
    if (this.closeCheckoutBtn) {
      this.closeCheckoutBtn.addEventListener("click", () => this.closeCheckout());
    }

    // Checkout form submit
    if (this.checkoutForm) {
      this.checkoutForm.addEventListener("submit", (e) => this.handleOrderSubmit(e));
    }

    // WhatsApp order direct button
    if (this.whatsAppOrderBtn) {
      this.whatsAppOrderBtn.addEventListener("click", () => this.sendOrderWhatsApp());
    }

    // Success modal close
    if (this.trackOrderCloseBtn) {
      this.trackOrderCloseBtn.addEventListener("click", () => this.closeSuccessModal());
    }

    // Quick filter links in footer
    document.querySelectorAll(".quick-filter-link").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const itemTag = link.getAttribute("data-item");
        if (itemTag === "dum-biryani") {
          this.activeCategory = "biryani";
        } else if (itemTag === "mutton" || itemTag === "butter-chicken") {
          this.activeCategory = "curries";
        } else if (itemTag === "tandoori") {
          this.activeCategory = "starters";
        } else if (itemTag === "prawns") {
          this.activeCategory = "seafood";
        }
        this.categoryPills.forEach(p => p.classList.toggle("active", p.getAttribute("data-category") === this.activeCategory));
        this.renderMenu();
        const menuElem = document.getElementById("menu-section");
        if (menuElem) menuElem.scrollIntoView({ behavior: "smooth" });
      });
    });

    // Hero reviews button
    if (this.heroReviewsBtn) {
      this.heroReviewsBtn.addEventListener("click", () => {
        const revElem = document.getElementById("reviews");
        if (revElem) revElem.scrollIntoView({ behavior: "smooth" });
      });
    }
  },

  initMobileNav() {
    if (this.mobileMenuBtn) {
      this.mobileMenuBtn.addEventListener("click", () => this.openMobileDrawer());
    }
    if (this.closeDrawerBtn) {
      this.closeDrawerBtn.addEventListener("click", () => this.closeMobileDrawer());
    }
    document.querySelectorAll(".mob-link").forEach(link => {
      link.addEventListener("click", () => this.closeMobileDrawer());
    });
  },

  openMobileDrawer() {
    this.mobileDrawer.classList.add("active");
    this.backdrop.classList.add("active");
  },

  closeMobileDrawer() {
    this.mobileDrawer.classList.remove("active");
    if (!this.cartDrawer.classList.contains("active") && !this.checkoutModal.classList.contains("active")) {
      this.backdrop.classList.remove("active");
    }
  },

  reloadProducts() {
    this.products = getStoredProducts();
    this.updateCategoryCounts();
    this.renderMenu();
  },

  updateCategoryCounts() {
    const counts = {
      all: this.products.length,
      biryani: 0,
      starters: 0,
      curries: 0,
      seafood: 0,
      breads: 0,
      desserts: 0
    };

    this.products.forEach(p => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    for (const [cat, count] of Object.entries(counts)) {
      const el = document.getElementById(`count-${cat}`);
      if (el) el.textContent = count;
    }
  },

  renderMenu() {
    if (!this.menuGrid) return;

    // Filter items
    let filtered = this.products.filter(item => {
      // Category filter
      if (this.activeCategory !== "all" && item.category !== this.activeCategory) return false;
      // Dietary filter
      if (this.activeDiet !== "all" && item.diet !== this.activeDiet) return false;
      // Search filter
      if (this.searchQuery) {
        const text = (item.name + " " + item.description + " " + (item.badge || "")).toLowerCase();
        if (!text.includes(this.searchQuery)) return false;
      }
      return true;
    });

    // Sort items
    if (this.activeSort === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.activeSort === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (this.activeSort === "rating-high") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    if (filtered.length === 0) {
      this.menuGrid.innerHTML = "";
      this.noItemsState.classList.remove("hidden");
      return;
    }

    this.noItemsState.classList.add("hidden");

    this.menuGrid.innerHTML = filtered.map(item => this.createCardHtml(item)).join("");

    // Attach 3D Flip Card and Cart event listeners
    this.attachCardEventListeners();
  },

  createCardHtml(item) {
    const isNonVeg = item.diet === "non-veg";
    const discount = item.origPrice && item.origPrice > item.price 
      ? Math.round(((item.origPrice - item.price) / item.origPrice) * 100) 
      : 0;

    const reviews = item.amazonReviews && item.amazonReviews.length > 0 
      ? item.amazonReviews 
      : [
          {
            user: "Verified Foodie",
            verified: true,
            rating: 5,
            date: "Recently",
            comment: "Rich flavor, excellent quality meat, and fast hot packaging.",
            helpful: 24
          }
        ];

    return `
      <div class="product-card-container" id="card-${item.id}">
        <div class="product-card-inner">
          
          <!-- FRONT FACE -->
          <div class="card-face card-face-front">
            <div class="card-image-wrap">
              <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800'">
              
              <!-- Dietary Indicator (Veg/Non-Veg dot) -->
              <div class="diet-indicator ${isNonVeg ? 'non-veg' : 'veg'}" title="${isNonVeg ? 'Non-Vegetarian' : 'Pure Vegetarian'}">
                <div class="diet-circle"></div>
              </div>

              ${item.badge ? `<div class="card-badge-tag">${item.badge}</div>` : ''}
            </div>

            <div class="card-body">
              <div class="card-meta-row">
                <div class="card-rating">
                  <i class="fa-solid fa-star"></i>
                  <span>${item.rating}</span>
                  <span class="card-rating-count">(${item.reviewsCount || 420})</span>
                </div>
                <div class="card-spice">
                  <i class="fa-solid fa-pepper-hot" style="color:var(--gold-accent);"></i> ${item.spice || 'Medium'}
                </div>
              </div>

              <h3 class="card-title">${item.name}</h3>
              <p class="card-short-desc">${item.description}</p>

              <div class="card-price-serving-row">
                <div class="price-group">
                  <span class="current-price">₹${item.price}</span>
                  ${item.origPrice ? `<span class="original-price">₹${item.origPrice}</span>` : ''}
                  ${discount > 0 ? `<span style="font-size:0.75rem; color:var(--veg-color); font-weight:700;">${discount}% OFF</span>` : ''}
                </div>
                <span class="serving-tag"><i class="fa-regular fa-user"></i> ${item.serving || 'Serves 1-2'}</span>
              </div>

              <div class="card-actions-row">
                <button type="button" class="btn-flip-trigger" data-id="${item.id}" title="Click to view genuine guest reviews & preparation notes">
                  <i class="fa-solid fa-rotate"></i> Flip Details
                </button>
                <button type="button" class="btn-add-cart" data-id="${item.id}" ${item.active === false ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
                  <i class="fa-solid fa-bag-shopping"></i> ${item.active === false ? 'Out of Stock' : '+ Add to Cart'}
                </button>
              </div>
            </div>
          </div>

          <!-- BACK FACE (FLIP DETAILS & AMAZON-STYLE REVIEWS) -->
          <div class="card-face card-face-back">
            <div class="back-header">
              <h4><i class="fa-solid fa-certificate"></i> Culinary Story & Reviews</h4>
              <button type="button" class="btn-flip-back" data-id="${item.id}">
                <i class="fa-solid fa-rotate-left"></i> Flip Back
              </button>
            </div>

            <div class="back-scroll-content">
              <!-- Chef Culinary Story -->
              <div class="dish-story-box">
                <p>${item.description}</p>
              </div>

              <!-- Quick Highlights -->
              <div class="dish-highlights-grid">
                <div class="highlight-box">
                  <strong><i class="fa-solid fa-clock"></i> Cooking Time:</strong>
                  <span>${item.prepTime || '25 Mins Slow Flame'}</span>
                </div>
                <div class="highlight-box">
                  <strong><i class="fa-solid fa-fire-burner"></i> Calorie Metric:</strong>
                  <span>${item.calories || '550 kcal'}</span>
                </div>
              </div>

              <!-- Amazon-Style Verified Reviews -->
              <div class="amazon-reviews-section">
                <div class="amazon-heading">
                  <h5><i class="fa-solid fa-shield-heart" style="color:var(--veg-color);"></i> Verified Customer Reviews</h5>
                  <span class="amazon-tag">Amazon Style</span>
                </div>

                ${reviews.map(rev => `
                  <div class="review-item-compact">
                    <div class="review-user-row">
                      <span class="reviewer-name">${rev.user}</span>
                      <span class="verified-text"><i class="fa-solid fa-circle-check"></i> Verified Buyer</span>
                    </div>
                    <div class="review-stars">
                      ${Array(rev.rating).fill('<i class="fa-solid fa-star"></i>').join('')}
                      <span style="color:var(--text-dim); font-size:0.7rem; margin-left:0.35rem;">${rev.date}</span>
                    </div>
                    <p class="review-comment">"${rev.comment}"</p>
                    <div class="review-helpful-stat">
                      <i class="fa-regular fa-thumbs-up"></i> ${rev.helpful} users found this helpful
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="back-footer-actions">
              <button type="button" class="btn-add-cart btn-block" data-id="${item.id}" ${item.active === false ? 'disabled style="opacity:0.5;"' : ''}>
                <i class="fa-solid fa-bag-shopping"></i> Order This Item (₹${item.price})
              </button>
            </div>
          </div>

        </div>
      </div>
    `;
  },

  attachCardEventListeners() {
    // Flip buttons (Front face)
    document.querySelectorAll(".btn-flip-trigger").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-id");
        const container = document.getElementById(`card-${id}`);
        if (container) {
          container.classList.add("is-flipped");
        }
      });
    });

    // Flip back buttons (Back face)
    document.querySelectorAll(".btn-flip-back").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-id");
        const container = document.getElementById(`card-${id}`);
        if (container) {
          container.classList.remove("is-flipped");
        }
      });
    });

    // Add to cart buttons
    document.querySelectorAll(".btn-add-cart").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-id");
        this.addToCart(id);
      });
    });
  },

  /* ==========================================================================
     Cart Functionality
     ========================================================================== */
  loadCart() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CART);
      this.cart = saved ? JSON.parse(saved) : [];
    } catch (e) {
      this.cart = [];
    }
    this.updateCartUi();
  },

  saveCart() {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(this.cart));
    } catch (e) {
      console.error("Cart save error:", e);
    }
  },

  addToCart(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    if (product.active === false) {
      this.showToast("Sorry, this dish is currently out of stock.", "error");
      return;
    }

    const existingIndex = this.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      this.cart[existingIndex].qty += 1;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        diet: product.diet,
        serving: product.serving,
        qty: 1
      });
    }

    this.saveCart();
    this.updateCartUi();
    this.showToast(`Added 1× "${product.name}" to your basket!`, "success");

    // Optional quick bump animation on cart button
    if (this.cartToggleBtn) {
      this.cartToggleBtn.style.transform = "scale(1.1)";
      setTimeout(() => {
        this.cartToggleBtn.style.transform = "";
      }, 200);
    }
  },

  updateQuantity(productId, delta) {
    const itemIndex = this.cart.findIndex(i => i.id === productId);
    if (itemIndex === -1) return;

    this.cart[itemIndex].qty += delta;
    if (this.cart[itemIndex].qty <= 0) {
      this.cart.splice(itemIndex, 1);
      this.showToast("Item removed from basket.", "info");
    }

    this.saveCart();
    this.updateCartUi();
  },

  removeFromCart(productId) {
    this.cart = this.cart.filter(i => i.id !== productId);
    this.saveCart();
    this.updateCartUi();
    this.showToast("Item removed from basket.", "info");
  },

  updateCartUi() {
    const totalCount = this.cart.reduce((sum, item) => sum + item.qty, 0);

    if (this.cartCount) this.cartCount.textContent = totalCount;
    if (this.cartHeaderCount) this.cartHeaderCount.textContent = `${totalCount} Item${totalCount === 1 ? '' : 's'}`;
    if (this.mobBottomCartCount) this.mobBottomCartCount.textContent = totalCount;

    // Render list
    if (!this.cartItemsList) return;

    if (this.cart.length === 0) {
      this.cartItemsList.innerHTML = `
        <div class="cart-empty-message">
          <i class="fa-solid fa-bowl-food"></i>
          <h4>Your Food Basket is Empty</h4>
          <p>Explore our royal dum biryanis, roasts, and gravies to begin your order.</p>
        </div>
      `;
      this.renderBill(0);
      return;
    }

    this.cartItemsList.innerHTML = this.cart.map(item => `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=100'">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-price">₹${item.price} each</div>
        </div>
        <div class="cart-qty-controls">
          <button type="button" class="qty-btn" onclick="AppController.updateQuantity('${item.id}', -1)">−</button>
          <span class="qty-count">${item.qty}</span>
          <button type="button" class="qty-btn" onclick="AppController.updateQuantity('${item.id}', 1)">+</button>
        </div>
        <button type="button" class="cart-item-remove" title="Remove" onclick="AppController.removeFromCart('${item.id}')">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    `).join("");

    const subtotal = this.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    this.renderBill(subtotal);
  },

  renderBill(subtotal) {
    const freeDeliveryThreshold = 399;
    const standardDelivery = subtotal >= freeDeliveryThreshold || subtotal === 0 ? 0 : 40;
    const tax = Math.round(subtotal * 0.05); // 5% GST/Packaging

    // Free delivery progress tracker
    if (this.freeDeliveryTracker && this.trackerText && this.trackerFill) {
      if (subtotal === 0) {
        this.trackerText.innerHTML = `Add ₹${freeDeliveryThreshold} for <strong>FREE Delivery</strong>!`;
        this.trackerFill.style.width = `0%`;
      } else if (subtotal >= freeDeliveryThreshold) {
        this.trackerText.innerHTML = `<span style="color:var(--veg-color); font-weight:700;"><i class="fa-solid fa-circle-check"></i> FREE Express Delivery Unlocked!</span>`;
        this.trackerFill.style.width = `100%`;
      } else {
        const remaining = freeDeliveryThreshold - subtotal;
        const percent = Math.min(100, Math.round((subtotal / freeDeliveryThreshold) * 100));
        this.trackerText.innerHTML = `Add <strong>₹${remaining} more</strong> for <strong>FREE Delivery</strong>!`;
        this.trackerFill.style.width = `${percent}%`;
      }
    }

    let discount = 0;
    if (this.appliedCoupon === "ROYAL20") {
      discount = Math.round(subtotal * 0.20);
      if (this.discountRow) this.discountRow.classList.remove("hidden");
      if (this.billDiscount) this.billDiscount.textContent = `-₹${discount}`;
    } else {
      if (this.discountRow) this.discountRow.classList.add("hidden");
    }

    const total = Math.max(0, subtotal + standardDelivery + tax - discount);

    if (this.billSubtotal) this.billSubtotal.textContent = `₹${subtotal}`;
    if (this.billDelivery) this.billDelivery.textContent = standardDelivery === 0 ? "FREE" : `₹${standardDelivery}`;
    if (this.billTax) this.billTax.textContent = `₹${tax}`;
    if (this.billTotal) this.billTotal.textContent = `₹${total}`;
    if (this.checkoutBtnTotal) this.checkoutBtnTotal.textContent = `₹${total}`;
  },

  applyCoupon() {
    const code = this.promoInput ? this.promoInput.value.trim().toUpperCase() : "";
    if (code === "ROYAL20") {
      this.appliedCoupon = "ROYAL20";
      if (this.promoFeedback) {
        this.promoFeedback.className = "promo-feedback success";
        this.promoFeedback.textContent = "Coupon ROYAL20 applied! 20% discount activated.";
      }
      this.showToast("Flat 20% discount applied to your order!", "success");
      this.updateCartUi();
    } else if (!code) {
      this.appliedCoupon = null;
      if (this.promoFeedback) {
        this.promoFeedback.textContent = "";
      }
      this.updateCartUi();
    } else {
      if (this.promoFeedback) {
        this.promoFeedback.className = "promo-feedback error";
        this.promoFeedback.textContent = "Invalid coupon code. Try ROYAL20.";
      }
    }
  },

  openCart() {
    this.cartDrawer.classList.add("active");
    this.backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  closeCart() {
    this.cartDrawer.classList.remove("active");
    if (!this.checkoutModal.classList.contains("active") && 
        !this.orderSuccessModal.classList.contains("active") && 
        !this.mobileDrawer.classList.contains("active") && 
        !AdminController.adminModal.classList.contains("active")) {
      this.backdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  },

  /* ==========================================================================
     Checkout & Order Placement
     ========================================================================== */
  openCheckout() {
    const totalCount = this.cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = this.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const standardDelivery = subtotal >= 399 ? 0 : 40;
    const tax = Math.round(subtotal * 0.05);
    const discount = this.appliedCoupon === "ROYAL20" ? Math.round(subtotal * 0.20) : 0;
    const grandTotal = Math.max(0, subtotal + standardDelivery + tax - discount);

    if (this.modalItemsCount) this.modalItemsCount.textContent = `${totalCount} item(s)`;
    if (this.modalPayableAmount) this.modalPayableAmount.textContent = `₹${grandTotal}`;

    this.checkoutModal.classList.add("active");
    this.backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  closeCheckout() {
    this.checkoutModal.classList.remove("active");
    if (!this.cartDrawer.classList.contains("active") && !AdminController.adminModal.classList.contains("active")) {
      this.backdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  },

  handleOrderSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();
    const address = document.getElementById("custAddress").value.trim();
    const orderType = document.querySelector('input[name="orderType"]:checked')?.value || "Delivery";
    const payMethod = document.querySelector('input[name="payMethod"]:checked')?.value || "COD";
    const notes = this.cookingInstructions ? this.cookingInstructions.value.trim() : "";

    if (!name || !phone || !address) {
      this.showToast("Please provide all delivery contact fields.", "error");
      return;
    }

    const subtotal = this.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const delivery = subtotal >= 399 ? 0 : 40;
    const tax = Math.round(subtotal * 0.05);
    const discount = this.appliedCoupon === "ROYAL20" ? Math.round(subtotal * 0.20) : 0;
    const grandTotal = Math.max(0, subtotal + delivery + tax - discount);

    const orderId = "#ANU-" + Math.floor(10000 + Math.random() * 90000);
    const timestamp = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short"
    });

    const newOrder = {
      orderId,
      timestamp,
      customer: { name, phone, address },
      orderType,
      paymentMethod: payMethod,
      notes,
      items: [...this.cart],
      subtotal,
      delivery,
      tax,
      discount,
      total: grandTotal,
      status: "Received"
    };

    // Save order in persistent storage for Admin
    saveOrder(newOrder);

    // Show order success modal
    this.showOrderSuccess(newOrder);

    // Clear cart
    this.cart = [];
    this.saveCart();
    this.updateCartUi();
    if (this.cookingInstructions) this.cookingInstructions.value = "";
    this.closeCheckout();
    this.closeCart();
  },

  showOrderSuccess(order) {
    if (this.successOrderId) this.successOrderId.textContent = order.orderId;

    if (this.successOrderDetails) {
      this.successOrderDetails.innerHTML = `
        <div style="margin-bottom:0.65rem;">
          <strong>Delivering to:</strong> ${order.customer.name} (${order.customer.phone})<br>
          <span style="color:var(--text-muted); font-size:0.8rem;">📍 ${order.customer.address}</span>
        </div>
        <div style="border-top:1px solid var(--border-color); padding-top:0.5rem; margin-top:0.5rem;">
          <strong>Items:</strong>
          <ul style="margin: 0.35rem 0 0 1.25rem; font-size:0.82rem;">
            ${order.items.map(it => `<li>${it.name} × ${it.qty} (₹${it.price * it.qty})</li>`).join("")}
          </ul>
        </div>
        <div style="margin-top:0.65rem; border-top:1px solid var(--border-color); padding-top:0.5rem; display:flex; justify-content:space-between; font-weight:700;">
          <span>Total (${order.paymentMethod}):</span>
          <span style="color:var(--gold-accent);">₹${order.total}</span>
        </div>
      `;
    }

    if (this.successWhatsappBtn) {
      const waText = encodeURIComponent(
        `Hi Anu Food Point Hotel, I have placed order ${order.orderId} for ₹${order.total}.\nItems:\n` +
        order.items.map(i => `- ${i.name} x ${i.qty}`).join("\n") +
        `\nDelivery to: ${order.customer.name}, ${order.customer.address} (Ph: ${order.customer.phone})`
      );
      this.successWhatsappBtn.onclick = () => {
        window.open(`https://wa.me/919876543210?text=${waText}`, "_blank");
      };
    }

    this.orderSuccessModal.classList.add("active");
    this.backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  closeSuccessModal() {
    this.orderSuccessModal.classList.remove("active");
    this.backdrop.classList.remove("active");
    document.body.style.overflow = "";
  },

  sendOrderWhatsApp() {
    if (this.cart.length === 0) {
      this.showToast("Your cart is empty!", "error");
      return;
    }

    const name = document.getElementById("custName").value.trim() || "Guest";
    const phone = document.getElementById("custPhone").value.trim() || "Not specified";
    const address = document.getElementById("custAddress").value.trim() || "Direct Takeaway / Pickup";

    const subtotal = this.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const delivery = subtotal >= 399 ? 0 : 40;
    const tax = Math.round(subtotal * 0.05);
    const discount = this.appliedCoupon === "ROYAL20" ? Math.round(subtotal * 0.20) : 0;
    const total = Math.max(0, subtotal + delivery + tax - discount);

    const itemsSummary = this.cart.map(i => `• ${i.name} × ${i.qty} (₹${i.price * i.qty})`).join("\n");
    const notes = this.cookingInstructions ? this.cookingInstructions.value.trim() : "";

    const message = 
      `*🍛 New Order - Anu Food Point Hotel*\n` +
      `--------------------------------\n` +
      `*Customer:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Address:* ${address}\n` +
      (notes ? `*Chef Note:* ${notes}\n` : '') +
      `--------------------------------\n` +
      `*Dishes:*\n${itemsSummary}\n` +
      `--------------------------------\n` +
      `*Grand Total:* ₹${total}\n\n` +
      `Please confirm order preparation and ETA!`;

    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
  },

  /* ==========================================================================
     Toast Notifications
     ========================================================================== */
  showToast(message, type = "info") {
    if (!this.toastContainer) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    let icon = "fa-circle-info";
    if (type === "success") icon = "fa-circle-check";
    if (type === "error") icon = "fa-triangle-exclamation";

    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = "slideToastIn 0.3s ease reverse forwards";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
};

// Start application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  AppController.init();
  AdminController.init();
});
