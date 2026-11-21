/**
 * Anu Food Point Hotel - Admin Portal Controller
 * Full Inventory Management, Dynamic Item Creator, Live Order Tracking, Analytics
 */

const AdminController = {
  products: [],
  orders: [],

  init() {
    this.cacheDom();
    this.bindEvents();
    this.loadData();
    this.render();
    this.checkUrlAdminAccess();
  },

  cacheDom() {
    this.adminModal = document.getElementById("adminModal");
    this.adminPortalBtn = document.getElementById("adminPortalBtn");
    this.closeAdminBtn = document.getElementById("closeAdminBtn");
    this.mobAdminBtn = document.getElementById("mobAdminBtn");
    this.heroAdminBtn = document.getElementById("heroAdminBtn");
    this.footerAdminBtn = document.getElementById("footerAdminBtn");
    this.mobBottomAdminBtn = document.getElementById("mobBottomAdminBtn");
    this.quickAddProductBtn = document.getElementById("quickAddProductBtn");
    this.backdrop = document.getElementById("backdrop");

    // Admin Tabs
    this.tabButtons = document.querySelectorAll(".admin-tab");
    this.tabContents = document.querySelectorAll(".admin-tab-content");

    // Tab 1: Menu Items
    this.adminItemsTableBody = document.getElementById("adminItemsTableBody");
    this.adminItemSearch = document.getElementById("adminItemSearch");
    this.adminTotalItems = document.getElementById("adminTotalItems");
    this.adminResetMenuBtn = document.getElementById("adminResetMenuBtn");
    this.adminGoToAddBtn = document.getElementById("adminGoToAddBtn");

    // Tab 2: Add Product
    this.adminAddProductForm = document.getElementById("adminAddProductForm");
    this.prodImageInput = document.getElementById("prodImage");
    this.presetButtons = document.querySelectorAll(".img-preset-btn");

    // Tab 3: Orders
    this.adminOrdersList = document.getElementById("adminOrdersList");
    this.adminOrdersCount = document.getElementById("adminOrdersCount");
    this.clearAllOrdersBtn = document.getElementById("clearAllOrdersBtn");

    // Tab 4: Analytics
    this.metricTotalOrders = document.getElementById("metricTotalOrders");
    this.metricRevenue = document.getElementById("metricRevenue");
    this.metricTotalDishes = document.getElementById("metricTotalDishes");
  },

  bindEvents() {
    // Open modal triggers
    const openTriggers = [
      this.adminPortalBtn,
      this.mobAdminBtn,
      this.heroAdminBtn,
      this.footerAdminBtn,
      this.mobBottomAdminBtn
    ];

    openTriggers.forEach(btn => {
      if (btn) {
        btn.addEventListener("click", () => this.openModal());
      }
    });

    if (this.quickAddProductBtn) {
      this.quickAddProductBtn.addEventListener("click", () => {
        this.openModal();
        this.switchTab("add-item");
      });
    }

    if (this.closeAdminBtn) {
      this.closeAdminBtn.addEventListener("click", () => this.closeModal());
    }

    // Tabs
    this.tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-tab");
        this.switchTab(targetTab);
      });
    });

    // Image presets
    this.presetButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const url = btn.getAttribute("data-url");
        if (this.prodImageInput) {
          this.prodImageInput.value = url;
          AppController.showToast("Preset image selected!", "info");
        }
      });
    });

    // Add Product Form
    if (this.adminAddProductForm) {
      this.adminAddProductForm.addEventListener("submit", (e) => this.handleAddProduct(e));
    }

    // Search Inventory
    if (this.adminItemSearch) {
      this.adminItemSearch.addEventListener("input", () => this.renderMenuTable());
    }

    // Reset Defaults
    if (this.adminResetMenuBtn) {
      this.adminResetMenuBtn.addEventListener("click", () => {
        if (confirm("Reset menu to authentic Anu Food Point default catalog? Custom items will be reset.")) {
          localStorage.removeItem(STORAGE_KEYS.PRODUCTS);
          this.loadData();
          this.render();
          AppController.reloadProducts();
          AppController.showToast("Menu successfully reset to original defaults!", "success");
        }
      });
    }

    if (this.adminGoToAddBtn) {
      this.adminGoToAddBtn.addEventListener("click", () => this.switchTab("add-item"));
    }

    if (this.clearAllOrdersBtn) {
      this.clearAllOrdersBtn.addEventListener("click", () => {
        if (confirm("Clear simulated order history?")) {
          localStorage.removeItem(STORAGE_KEYS.ORDERS);
          this.loadData();
          this.renderOrders();
          this.renderAnalytics();
          AppController.showToast("Order history cleared.", "info");
        }
      });
    }

    // Direct URL hash access listener
    window.addEventListener("hashchange", () => this.checkUrlAdminAccess());

    // Pro keyboard shortcut: Ctrl+Shift+A or Alt+A opens/toggles Admin Portal
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) || 
          (e.altKey && (e.key === 'A' || e.key === 'a'))) {
        e.preventDefault();
        if (this.adminModal && this.adminModal.classList.contains("active")) {
          this.closeModal();
        } else {
          this.openModal();
        }
      }
    });
  },

  checkUrlAdminAccess() {
    const hash = window.location.hash.toLowerCase();
    const params = new URLSearchParams(window.location.search);
    if (hash === '#admin-portal' || hash === '#admin' || params.has('admin')) {
      setTimeout(() => {
        this.openModal();
        if (hash === '#admin-add') {
          this.switchTab('add-item');
        } else if (hash === '#admin-orders') {
          this.switchTab('orders-mgr');
        } else if (hash === '#admin-analytics') {
          this.switchTab('analytics');
        }
      }, 100);
    }
  },

  loadData() {
    this.products = getStoredProducts();
    this.orders = getStoredOrders();
  },

  openModal() {
    this.loadData();
    this.render();
    this.adminModal.classList.add("active");
    this.backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  closeModal() {
    this.adminModal.classList.remove("active");
    if (this.backdrop && (!AppController.cartDrawer || !AppController.cartDrawer.classList.contains("active")) && 
        (!AppController.checkoutModal || !AppController.checkoutModal.classList.contains("active"))) {
      this.backdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
    // Clean up admin hash if closed
    if (window.location.hash.toLowerCase().startsWith("#admin")) {
      history.replaceState(null, null, window.location.pathname + window.location.search);
    }
  },

  switchTab(tabId) {
    this.tabButtons.forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
    });

    this.tabContents.forEach(content => {
      content.classList.toggle("active", content.id === `tab-${tabId}`);
    });

    if (tabId === "orders-mgr") this.renderOrders();
    if (tabId === "analytics") this.renderAnalytics();
    if (tabId === "menu-mgr") this.renderMenuTable();
  },

  render() {
    this.renderMenuTable();
    this.renderOrders();
    this.renderAnalytics();
  },

  renderMenuTable() {
    const query = this.adminItemSearch ? this.adminItemSearch.value.toLowerCase().trim() : "";
    const filtered = this.products.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );

    if (this.adminTotalItems) {
      this.adminTotalItems.textContent = this.products.length;
    }

    if (!this.adminItemsTableBody) return;

    if (filtered.length === 0) {
      this.adminItemsTableBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align:center; padding: 2rem; color: var(--text-muted);">
            No items match your search.
          </td>
        </tr>
      `;
      return;
    }

    this.adminItemsTableBody.innerHTML = filtered.map(item => `
      <tr>
        <td>
          <div class="admin-item-cell">
            <img src="${item.image}" alt="${item.name}" class="admin-item-thumb" onerror="this.src='https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&auto=format&fit=crop&q=80'">
            <div>
              <strong>${item.name}</strong>
              <div style="font-size:0.75rem; color:var(--text-dim);">${item.serving || 'Standard'}</div>
            </div>
          </div>
        </td>
        <td><span style="text-transform: capitalize;">${item.category}</span></td>
        <td>
          <span class="diet-dot ${item.diet === 'non-veg' ? 'non-veg-dot' : 'veg-dot'}" style="display:inline-block; margin-right:4px;"></span>
          ${item.diet === 'non-veg' ? 'Non-Veg' : 'Veg'}
        </td>
        <td><strong>₹${item.price}</strong> ${item.origPrice ? `<span style="font-size:0.75rem; text-decoration:line-through; color:var(--text-dim)">₹${item.origPrice}</span>` : ''}</td>
        <td>${item.spice || 'Medium'}</td>
        <td>
          <span class="badge-status ${item.active !== false ? 'active' : 'inactive'}">
            ${item.active !== false ? 'Active' : 'Out of Stock'}
          </span>
        </td>
        <td>
          <div class="admin-action-btns">
            <button class="btn-icon" title="Toggle In-Stock / Out of Stock" onclick="AdminController.toggleItemStatus('${item.id}')">
              <i class="fa-solid fa-power-off"></i>
            </button>
            <button class="btn-icon delete" title="Delete Item" onclick="AdminController.deleteItem('${item.id}')">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join("");
  },

  handleAddProduct(e) {
    e.preventDefault();

    const name = document.getElementById("prodName").value.trim();
    const category = document.getElementById("prodCategory").value;
    const price = parseInt(document.getElementById("prodPrice").value, 10);
    const origPrice = document.getElementById("prodOrigPrice").value ? parseInt(document.getElementById("prodOrigPrice").value, 10) : price + 50;
    const diet = document.getElementById("prodDiet").value;
    const badge = document.getElementById("prodBadge").value;
    const spice = document.getElementById("prodSpice").value;
    const serving = document.getElementById("prodServing").value.trim() || "Serves 1-2";
    const image = document.getElementById("prodImage").value.trim() || "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800";
    const description = document.getElementById("prodDescription").value.trim();

    if (!name || isNaN(price)) {
      AppController.showToast("Please fill all mandatory fields properly.", "error");
      return;
    }

    const newProduct = {
      id: "anu-" + Date.now().toString(36),
      name,
      category,
      diet,
      price,
      origPrice,
      rating: 5.0,
      reviewsCount: 1,
      badge: badge || "",
      spice: spice || "Medium",
      serving,
      image,
      description,
      prepTime: "Freshly Made 25 Mins",
      calories: "550 kcal",
      highlights: ["Fresh Handcrafted Cut", "Master Chef Recipe", "Piping Hot Delivery"],
      active: true,
      amazonReviews: [
        {
          user: "First Reviewer",
          verified: true,
          rating: 5,
          date: "Just now",
          comment: "Newly added specialty to Anu Food Point Hotel! Looking forward to ordering again.",
          helpful: 1
        }
      ]
    };

    this.products.unshift(newProduct);
    saveProducts(this.products);

    this.adminAddProductForm.reset();
    AppController.showToast(`"${name}" added to menu successfully!`, "success");
    
    // Refresh front-end
    AppController.reloadProducts();
    this.render();
    this.switchTab("menu-mgr");
  },

  toggleItemStatus(id) {
    const item = this.products.find(p => p.id === id);
    if (!item) return;

    item.active = item.active === false ? true : false;
    saveProducts(this.products);
    this.renderMenuTable();
    AppController.reloadProducts();
    AppController.showToast(`Status updated: ${item.name} is now ${item.active ? 'In Stock' : 'Out of Stock'}.`, "info");
  },

  deleteItem(id) {
    const item = this.products.find(p => p.id === id);
    if (!item) return;

    if (confirm(`Are you sure you want to delete "${item.name}" from the menu?`)) {
      this.products = this.products.filter(p => p.id !== id);
      saveProducts(this.products);
      this.render();
      AppController.reloadProducts();
      AppController.showToast(`"${item.name}" was removed.`, "info");
    }
  },

  renderOrders() {
    this.orders = getStoredOrders();
    if (this.adminOrdersCount) {
      this.adminOrdersCount.textContent = this.orders.length;
    }

    if (!this.adminOrdersList) return;

    if (this.orders.length === 0) {
      this.adminOrdersList.innerHTML = `
        <div style="text-align:center; padding: 3rem 1rem; color: var(--text-muted); background:var(--bg-card); border-radius:var(--radius-md);">
          <i class="fa-solid fa-receipt" style="font-size:2rem; margin-bottom:0.75rem; color:var(--text-dim)"></i>
          <p>No customer orders placed yet.</p>
          <p style="font-size:0.8rem; color:var(--text-dim)">When visitors checkout from the front-end, their orders will appear here automatically.</p>
        </div>
      `;
      return;
    }

    this.adminOrdersList.innerHTML = this.orders.map(order => `
      <div class="admin-order-card">
        <div class="a-order-header">
          <div>
            <span class="a-order-id">${order.orderId}</span>
            <span style="margin: 0 0.5rem; color: var(--border-color);">|</span>
            <span class="a-order-time">${order.timestamp}</span>
          </div>
          <span class="badge-status ${order.status === 'Delivered' ? 'active' : 'inactive'}">
            ${order.status}
          </span>
        </div>

        <div class="a-order-details">
          <div>
            <strong>Customer:</strong> ${order.customer.name} (${order.customer.phone})<br>
            <span style="color:var(--text-muted); font-size:0.8rem;">📍 ${order.customer.address}</span>
          </div>
          <div>
            <strong>Type & Payment:</strong> ${order.orderType} | ${order.paymentMethod}<br>
            <span style="color:var(--gold-accent); font-weight:700;">Payable Total: ₹${order.total}</span>
          </div>
        </div>

        <div class="a-order-items">
          <strong>Ordered Items:</strong>
          <ul style="margin: 0.35rem 0 0 1.25rem;">
            ${order.items.map(it => `<li>${it.name} × ${it.qty} (₹${it.price * it.qty})</li>`).join("")}
          </ul>
          ${order.notes ? `<p style="margin-top:0.35rem; color:var(--gold-light);"><em>Chef Note: "${order.notes}"</em></p>` : ''}
        </div>

        <div class="a-order-footer">
          <div>
            <label style="font-size:0.78rem; color:var(--text-muted); margin-right:0.5rem;">Update Live Status:</label>
            <select class="a-status-select" onchange="AdminController.updateOrderStatus('${order.orderId}', this.value)">
              <option value="Received" ${order.status === 'Received' ? 'selected' : ''}>Received</option>
              <option value="Cooking" ${order.status === 'Cooking' ? 'selected' : ''}>Cooking in Kitchen</option>
              <option value="Out for Delivery" ${order.status === 'Out for Delivery' ? 'selected' : ''}>Out for Delivery</option>
              <option value="Delivered" ${order.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
              <option value="Cancelled" ${order.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
            </select>
          </div>
          <a href="https://wa.me/91${order.customer.phone}?text=Hi%20${encodeURIComponent(order.customer.name)},%20update%20on%20your%20Anu%20Food%20Point%20order%20${order.orderId}:%20Current%20status%20is%20${order.status}." target="_blank" class="btn btn-sm btn-whatsapp">
            <i class="fa-brands fa-whatsapp"></i> Ping Customer
          </a>
        </div>
      </div>
    `).join("");
  },

  updateOrderStatus(orderId, newStatus) {
    this.orders = getStoredOrders();
    const target = this.orders.find(o => o.orderId === orderId);
    if (target) {
      target.status = newStatus;
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(this.orders));
      this.renderOrders();
      AppController.showToast(`Order ${orderId} status set to "${newStatus}"`, "success");
    }
  },

  renderAnalytics() {
    this.orders = getStoredOrders();
    const totalOrders = this.orders.length;
    const totalRevenue = this.orders.reduce((sum, o) => sum + (o.total || 0), 0);

    if (this.metricTotalOrders) this.metricTotalOrders.textContent = totalOrders;
    if (this.metricRevenue) this.metricRevenue.textContent = "₹" + totalRevenue.toLocaleString('en-IN');
    if (this.metricTotalDishes) this.metricTotalDishes.textContent = this.products.length;
  }
};
